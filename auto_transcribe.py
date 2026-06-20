import argparse
import json
import math
import os
import re
import signal
import subprocess
import sys
import logging
import time
from collections import Counter
from pathlib import Path

# ==========================================
# 1. إعدادات النظام وتسجيل الأحداث (Logging)
# ==========================================
logging.basicConfig(
    filename='transcription_pipeline.log',
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s'
)

# ==========================================
# 2. إعدادات البيئة و Gemini (اختياري)
# ==========================================
def load_env_file(env_path: Path) -> None:
    if not env_path.is_file():
        return
    for line in env_path.read_text(encoding='utf-8').splitlines():
        line = line.strip()
        if not line or line.startswith('#') or '=' not in line:
            continue
        key, _, value = line.partition('=')
        key = key.strip()
        value = value.strip().strip('"').strip("'")
        if key and key not in os.environ:
            os.environ[key] = value


def get_gemini_model():
    import google.generativeai as genai

    api_key = os.getenv('GEMINI_API_KEY', '').strip()
    if not api_key:
        raise RuntimeError('GEMINI_API_KEY missing — set it in .env or app/.env')
    model_name = (
        os.getenv('GEMINI_MODEL', '').strip()
        or os.getenv('GEMINI_MODEL_FREE_TIER', 'gemini-2.5-flash').split(',')[0].strip()
        or 'gemini-2.5-flash'
    )
    genai.configure(api_key=api_key)
    print(f'  Gemini model: {model_name}')
    return genai.GenerativeModel(
        model_name,
        generation_config={"response_mime_type": "application/json"},
    )


def get_env_int(key: str, default: int, minimum: int | None = None) -> int:
    raw = os.getenv(key, str(default)).strip()
    try:
        n = int(raw)
        if minimum is not None:
            return max(minimum, n)
        return n
    except ValueError:
        return default


def get_env_float(key: str, default: float, minimum: float | None = None) -> float:
    raw = os.getenv(key, str(default)).strip()
    try:
        n = float(raw)
        if minimum is not None:
            return max(minimum, n)
        return n
    except ValueError:
        return default


def get_env_bool(key: str, default: bool = False) -> bool:
    raw = os.getenv(key, str(default)).strip().casefold()
    return raw in {'1', 'true', 'yes', 'on'}


def get_whisper_audio_chunk_sec() -> int:
    return get_env_int('WHISPER_AUDIO_CHUNK_SEC', 300, minimum=60)


def get_whisper_retry_chunk_sec() -> int:
    return get_env_int('WHISPER_RETRY_CHUNK_SEC', 180, minimum=60)


def get_whisper_max_chunk_retries() -> int:
    return get_env_int('WHISPER_MAX_CHUNK_RETRIES', 1, minimum=0)


def get_wav_duration_sec(wav_path: str) -> float:
    result = subprocess.run(
        [
            'ffprobe', '-v', 'error', '-show_entries', 'format=duration',
            '-of', 'default=noprint_wrappers=1:nokey=1', wav_path,
        ],
        capture_output=True,
        text=True,
        check=True,
    )
    return float(result.stdout.strip())


def parse_timestamp(ts: str) -> float:
    ts = ts.strip().replace(',', '.')
    hh, mm, rest = ts.split(':')
    return int(hh) * 3600 + int(mm) * 60 + float(rest)


def format_timestamp(seconds: float) -> str:
    seconds = max(0.0, seconds)
    whole_ms = int(round(seconds * 1000))
    ms = whole_ms % 1000
    total_sec = whole_ms // 1000
    mm, ss = divmod(total_sec, 60)
    hh, mm = divmod(mm, 60)
    return f'{hh:02d}:{mm:02d}:{ss:02d},{ms:03d}'


def shift_segment(seg: dict, offset_ms: int) -> dict:
    shifted = dict(seg)
    offset_sec = offset_ms / 1000
    if isinstance(shifted.get('offsets'), dict):
        shifted['offsets'] = {
            'from': int(shifted['offsets']['from']) + offset_ms,
            'to': int(shifted['offsets']['to']) + offset_ms,
        }
    if isinstance(shifted.get('timestamps'), dict):
        shifted['timestamps'] = {
            'from': format_timestamp(parse_timestamp(shifted['timestamps']['from']) + offset_sec),
            'to': format_timestamp(parse_timestamp(shifted['timestamps']['to']) + offset_sec),
        }
    return shifted


def write_txt_srt_from_segments(segments: list[dict], txt_path: str, srt_path: str) -> None:
    txt_lines: list[str] = []
    srt_lines: list[str] = []
    for i, seg in enumerate(segments, 1):
        text = str(seg.get('text', '')).strip()
        ts = seg.get('timestamps') or {}
        from_ts = str(ts.get('from', '00:00:00,000'))
        to_ts = str(ts.get('to', '00:00:00,000'))
        txt_lines.append(text)
        srt_lines.append(f'{i}')
        srt_lines.append(f'{from_ts.replace(",", ".")} --> {to_ts.replace(",", ".")}')
        srt_lines.append(text)
        srt_lines.append('')
    Path(txt_path).write_text('\n'.join(txt_lines) + '\n', encoding='utf-8')
    Path(srt_path).write_text('\n'.join(srt_lines), encoding='utf-8')


def build_whisper_cmd(wav_path: str, output_prefix: str, offset_ms: int = 0, duration_ms: int = 0) -> list[str]:
    max_context = get_env_int('WHISPER_MAX_CONTEXT', 0)
    max_len = get_env_int('WHISPER_MAX_LEN', 180, minimum=0)
    cmd = [
        whisper_cli, '-m', model_path, '-f', wav_path, '-l', 'ar',
        '--prompt', technical_prompt,
        '--no-fallback',
        '--entropy-thold', '2.0',
        '-of', output_prefix,
        '--output-json', '--output-txt', '--output-srt',
        '-np',
    ]
    if max_context >= 0:
        cmd.extend(['--max-context', str(max_context)])
    if max_len > 0:
        cmd.extend(['--max-len', str(max_len), '--split-on-word'])
    if get_env_bool('WHISPER_SUPPRESS_NST', True):
        cmd.append('--suppress-nst')
    if get_env_bool('WHISPER_VAD', False):
        cmd.append('--vad')
    if offset_ms > 0:
        cmd.extend(['--offset-t', str(offset_ms)])
    if duration_ms > 0:
        cmd.extend(['-d', str(duration_ms)])
    return cmd


def cleanup_whisper_part(prefix: str) -> None:
    for ext in ('json', 'txt', 'srt'):
        part_file = f'{prefix}.{ext}'
        if os.path.exists(part_file):
            os.remove(part_file)


def read_whisper_part(part_prefix: str, offset_ms: int, label: str) -> tuple[dict, list[dict]]:
    part_json = f'{part_prefix}.json'
    try:
        part_data = json.loads(Path(part_json).read_bytes().decode('utf-8'))
    except UnicodeDecodeError as err:
        raise WhisperValidationError(
            label,
            [f'Invalid Whisper JSON encoding in {os.path.basename(part_json)}: {err}'],
        ) from err
    except json.JSONDecodeError as err:
        raise WhisperValidationError(
            label,
            [f'Invalid Whisper JSON in {os.path.basename(part_json)}: {err}'],
        ) from err
    except OSError as err:
        raise WhisperValidationError(
            label,
            [f'Cannot read Whisper JSON {os.path.basename(part_json)}: {err}'],
        ) from err
    sanitize_transcription_data(part_data)
    ok, warnings = validate_transcription_data(part_data, label=label)
    if not ok:
        raise WhisperValidationError(label, warnings)
    return part_data, [shift_segment(seg, offset_ms) for seg in extract_segments(part_data)]


def transcribe_range_with_validation(
    wav_path: str,
    part_prefix: str,
    offset_ms: int,
    duration_ms: int,
    label: str,
) -> tuple[dict, list[dict]]:
    subprocess.run(
        build_whisper_cmd(wav_path, part_prefix, offset_ms=offset_ms, duration_ms=duration_ms),
        check=True,
    )
    try:
        return read_whisper_part(part_prefix, offset_ms, label)
    finally:
        cleanup_whisper_part(part_prefix)


def retry_chunk_as_smaller_ranges(
    wav_path: str,
    folder_name: str,
    chunk_index: int,
    offset_ms: int,
    duration_ms: int,
    label: str,
) -> list[dict]:
    retry_chunk_ms = get_whisper_retry_chunk_sec() * 1000
    if retry_chunk_ms >= duration_ms:
        raise WhisperValidationError(label, [f'Retry chunk size {retry_chunk_ms // 1000}s is not smaller than failed chunk'])

    retry_segments: list[dict] = []
    retry_total = math.ceil(duration_ms / retry_chunk_ms)
    print(f'      {label}: retrying as {retry_total} smaller chunks × ~{retry_chunk_ms // 1000}s')
    for ri in range(retry_total):
        retry_offset_ms = offset_ms + ri * retry_chunk_ms
        retry_remaining_ms = offset_ms + duration_ms - retry_offset_ms
        retry_duration_ms = min(retry_chunk_ms, retry_remaining_ms)
        retry_prefix = os.path.join(folder_name, f'_whisper_part_{chunk_index:03d}_retry_{ri:03d}')
        retry_label = f'{label} retry {ri + 1}/{retry_total} ({retry_offset_ms // 1000}s)'
        try:
            _retry_data, retry_part_segments = transcribe_range_with_validation(
                wav_path,
                retry_prefix,
                retry_offset_ms,
                retry_duration_ms,
                retry_label,
            )
            retry_segments.extend(retry_part_segments)
        except WhisperValidationError as err:
            logging.warning('%s failed validation: %s', retry_label, '; '.join(err.warnings))
            raise
    return retry_segments


def transcribe_with_whisper(wav_path: str, json_name: str, label: str) -> None:
    folder_name = os.path.dirname(wav_path)
    base = os.path.splitext(os.path.basename(wav_path))[0]
    txt_name = os.path.join(folder_name, f'{base}.txt')
    srt_name = os.path.join(folder_name, f'{base}.srt')

    duration_sec = get_wav_duration_sec(wav_path)
    chunk_sec = get_whisper_audio_chunk_sec()

    if duration_sec <= chunk_sec:
        cmd = build_whisper_cmd(wav_path, wav_path)
        subprocess.run(cmd, check=True)
        return

    total_chunks = math.ceil(duration_sec / chunk_sec)
    print(f'      Whisper split: {total_chunks} chunks × ~{chunk_sec}s')

    merged_segments: list[dict] = []
    template_data: dict | None = None
    max_retries = get_whisper_max_chunk_retries()

    for ci in range(total_chunks):
        offset_ms = ci * chunk_sec * 1000
        remaining_ms = int(duration_sec * 1000) - offset_ms
        duration_ms = min(chunk_sec * 1000, remaining_ms)
        if duration_ms <= 0:
            break

        part_prefix = os.path.join(folder_name, f'_whisper_part_{ci:03d}')
        print(f'      Whisper chunk {ci + 1}/{total_chunks} (from {offset_ms // 1000}s)...')
        try:
            part_data, part_segments = transcribe_range_with_validation(
                wav_path,
                part_prefix,
                offset_ms=offset_ms,
                duration_ms=duration_ms,
                label=f'{label} chunk {ci + 1}/{total_chunks}',
            )
            if template_data is None:
                template_data = {k: v for k, v in part_data.items() if k != 'transcription'}
            merged_segments.extend(part_segments)
        except WhisperValidationError as err:
            for warning in err.warnings:
                print(f'⚠️  {label} chunk {ci + 1}/{total_chunks} — {warning}')
            logging.warning('%s chunk %s/%s failed validation: %s', label, ci + 1, total_chunks, '; '.join(err.warnings))
            if max_retries <= 0:
                raise
            try:
                retry_segments = retry_chunk_as_smaller_ranges(
                    wav_path,
                    folder_name,
                    ci,
                    offset_ms,
                    duration_ms,
                    f'{label} chunk {ci + 1}/{total_chunks}',
                )
                merged_segments.extend(retry_segments)
            except WhisperValidationError as retry_err:
                for warning in retry_err.warnings:
                    print(f'⚠️  {label} chunk {ci + 1}/{total_chunks} retry — {warning}')
                logging.warning(
                    '%s chunk %s/%s retry failed validation: %s',
                    label,
                    ci + 1,
                    total_chunks,
                    '; '.join(retry_err.warnings),
                )
                raise

    merged = dict(template_data or {})
    merged['transcription'] = merged_segments
    Path(json_name).write_text(
        json.dumps(merged, ensure_ascii=False, indent='\t') + '\n',
        encoding='utf-8',
    )
    write_txt_srt_from_segments(merged_segments, txt_name, srt_name)
    print(f'      Merged {len(merged_segments)} segments → {json_name}')


def get_gemini_chunk_size() -> int:
    for key in ('GEMINI_CHUNK_SIZE', 'FORMAT_CHUNK_SIZE'):
        raw = os.getenv(key, '').strip()
        if raw:
            try:
                n = int(raw)
                if n >= 20:
                    return n
            except ValueError:
                pass
    return 80


def get_gemini_chunk_delay() -> float:
    raw = os.getenv('GEMINI_CHUNK_DELAY_SEC', os.getenv('FORMAT_CHUNK_DELAY_SEC', '5')).strip()
    try:
        return max(0.0, float(raw))
    except ValueError:
        return 5.0


def parse_gemini_json(text: str) -> dict:
    cleaned = text.strip()
    if cleaned.startswith('```'):
        cleaned = re.sub(r'^```(?:json)?\s*', '', cleaned)
        cleaned = re.sub(r'\s*```$', '', cleaned)
    return json.loads(cleaned)


def merge_corrected_transcription(data: dict, corrected_segments: list[dict]) -> dict:
    result = dict(data)
    if 'transcription' in result:
        result['transcription'] = corrected_segments
    elif 'segments' in result:
        if isinstance(result['segments'], dict):
            result['segments'] = {**result['segments'], 'segments': corrected_segments}
        else:
            result['segments'] = corrected_segments
    return result


def build_gemini_correction_prompt(
    chunk_json: str,
    chunk_index: int,
    total_chunks: int,
    title: str,
) -> str:
    part_note = (
        f'هذا **الجزء {chunk_index + 1} من {total_chunks}** من شابتر "{title}".\n'
        if total_chunks > 1
        else ''
    )
    return f"""
أنت مهندس برمجيات. {part_note}هذا JSON يحتوي على جزء من تفريغ صوتي لشرح تقني عن Docker و Kubernetes.

المطلوب بصرامة شديدة:
1. أعد JSON واحد بالشكل: {{ "transcription": [ ... ] }} — نفس عدد الـ segments المُرسَل.
2. الحفاظ على هيكل كل segment (timestamps، offsets، keys) — عدّل قيم "text" فقط.
3. تصحيح الأخطاء الإملائية والنحوية في "text" فقط.
4. المصطلحات التقنية والأكواد بالإنجليزية (Docker, Image, VSCode, …).
5. الحفاظ على اللهجة المصرية التقنية بشكل واضح.
6. لا تحذف segments ولا تضف segments جديدة.

محتوى JSON:
{chunk_json}
"""


def correct_json_with_gemini(model, data: dict, title: str, label: str) -> dict:
    segments = extract_segments(data)
    chunk_size = get_gemini_chunk_size()
    delay = get_gemini_chunk_delay()

    if len(segments) <= chunk_size:
        payload = {'transcription': segments}
        prompt = build_gemini_correction_prompt(
            json.dumps(payload, ensure_ascii=False, indent=2),
            0,
            1,
            title,
        )
        response = model.generate_content(prompt)
        corrected = parse_gemini_json(response.text)
        merged = extract_segments(corrected)
        if len(merged) != len(segments):
            raise ValueError(f'{label}: expected {len(segments)} segments, got {len(merged)}')
        return merge_corrected_transcription(data, merged)

    total_chunks = (len(segments) + chunk_size - 1) // chunk_size
    print(f'      Gemini chunked: {total_chunks} chunks × ~{chunk_size} segments')

    merged_segments: list[dict] = []
    for ci in range(total_chunks):
        start = ci * chunk_size
        end = min(start + chunk_size, len(segments))
        chunk_segs = segments[start:end]
        payload = {'transcription': chunk_segs}

        print(f'      Gemini chunk {ci + 1}/{total_chunks} (segments {start}–{end - 1})...')
        prompt = build_gemini_correction_prompt(
            json.dumps(payload, ensure_ascii=False, indent=2),
            ci,
            total_chunks,
            title,
        )
        response = model.generate_content(prompt)
        corrected = parse_gemini_json(response.text)
        chunk_corrected = extract_segments(corrected)
        if len(chunk_corrected) != len(chunk_segs):
            raise ValueError(
                f'{label} chunk {ci + 1}: expected {len(chunk_segs)} segments, got {len(chunk_corrected)}',
            )
        merged_segments.extend(chunk_corrected)

        if ci < total_chunks - 1 and delay > 0:
            time.sleep(delay)

    return merge_corrected_transcription(data, merged_segments)


def extract_segments(data: dict) -> list[dict]:
    segments = data.get('transcription', data.get('segments', []))
    if isinstance(segments, dict):
        segments = segments.get('segments', [])
    return [s for s in segments if isinstance(s, dict)]


class WhisperValidationError(RuntimeError):
    def __init__(self, label: str, warnings: list[str]):
        super().__init__(f'{label}: ' + '; '.join(warnings))
        self.label = label
        self.warnings = warnings


def get_segment_texts(data: dict | list[dict]) -> list[str]:
    segments = data if isinstance(data, list) else extract_segments(data)
    texts = [str(s.get('text', '')).strip() for s in segments if isinstance(s, dict)]
    return [t for t in texts if t]


def normalize_for_repeat(text: str) -> str:
    text = re.sub(r'\s+', ' ', text.strip().casefold())
    text = re.sub(r'[^\w\u0600-\u06FF\s/.-]+', '', text)
    return text


def tokenize_text(text: str) -> list[str]:
    return re.findall(r'[A-Za-z]+|[\u0600-\u06FF]+|\d+', text.casefold())


def max_consecutive_token_repeat(tokens: list[str]) -> tuple[str, int]:
    if not tokens:
        return '', 0
    best_token = current_token = tokens[0]
    best = current = 1
    for token in tokens[1:]:
        if token == current_token:
            current += 1
        else:
            if current > best:
                best_token, best = current_token, current
            current_token, current = token, 1
    if current > best:
        best_token, best = current_token, current
    return best_token, best


def collapse_repeated_words(text: str) -> str:
    if not get_env_bool('WHISPER_COLLAPSE_REPEATED_WORDS', True):
        return text

    pattern = re.compile(r'(?<!\S)(?P<word>[A-Za-z]+|[\u0600-\u06FF]+)(?:\s+(?P=word)){3,}(?!\S)', re.IGNORECASE)
    previous = None
    collapsed = text
    while previous != collapsed:
        previous = collapsed
        collapsed = pattern.sub(lambda m: m.group('word'), collapsed)
    return collapsed


def sanitize_transcription_data(data: dict | list[dict]) -> None:
    segments = data if isinstance(data, list) else extract_segments(data)
    for seg in segments:
        if not isinstance(seg, dict):
            continue
        text = seg.get('text')
        if isinstance(text, str):
            seg['text'] = collapse_repeated_words(text)


def validate_transcription_data(data: dict | list[dict], label: str = 'transcription') -> tuple[bool, list[str]]:
    """يكشف تكرار Whisper و language drift قبل حفظ التفريغ النهائي."""
    warnings: list[str] = []
    sanitize_transcription_data(data)
    texts = get_segment_texts(data)

    if len(texts) < 5:
        return True, warnings

    repeat_ratio_threshold = get_env_float('WHISPER_REPEAT_RATIO', 0.15, minimum=0.01)
    repeat_streak_threshold = get_env_int('WHISPER_REPEAT_STREAK', 8, minimum=3)
    repeated_word_limit = get_env_int('WHISPER_REPEATED_WORD_LIMIT', 12, minimum=4)
    english_drift_ratio = get_env_float('WHISPER_ENGLISH_DRIFT_RATIO', 0.65, minimum=0.1)

    normalized_texts = [normalize_for_repeat(t) for t in texts]
    counter = Counter(normalized_texts)
    top_text, top_count = counter.most_common(1)[0]
    repeat_ratio = top_count / len(texts)
    if top_count >= 5 and repeat_ratio >= repeat_ratio_threshold:
        preview = top_text[:60] + ('…' if len(top_text) > 60 else '')
        warnings.append(
            f'Possible hallucination: "{preview}" repeated {top_count}/{len(texts)} times ({repeat_ratio:.0%})',
        )
        return False, warnings

    max_streak = streak = 1
    for i in range(1, len(normalized_texts)):
        if normalized_texts[i] == normalized_texts[i - 1]:
            streak += 1
            max_streak = max(max_streak, streak)
        else:
            streak = 1
    if max_streak >= repeat_streak_threshold:
        warnings.append(f'Consecutive repeat streak: {max_streak} segments')
        return False, warnings

    all_tokens: list[str] = []
    latin_tokens = arabic_tokens = 0
    for text in texts:
        tokens = tokenize_text(text)
        all_tokens.extend(tokens)

        token, repeat_count = max_consecutive_token_repeat(tokens)
        if repeat_count >= repeated_word_limit:
            warnings.append(f'Repeated word loop: "{token}" repeated {repeat_count} times in one segment')
            return False, warnings

        if len(tokens) >= 40:
            token_counts = Counter(tokens)
            common_token, common_count = token_counts.most_common(1)[0]
            if common_count >= repeated_word_limit and common_count / len(tokens) >= 0.7:
                warnings.append(
                    f'Low-diversity long segment: "{common_token}" is {common_count}/{len(tokens)} tokens',
                )
                return False, warnings

        latin_tokens += len(re.findall(r'\b[A-Za-z]+\b', text))
        arabic_tokens += len(re.findall(r'[\u0600-\u06FF]+', text))

    if all_tokens:
        latin_ratio = latin_tokens / max(1, latin_tokens + arabic_tokens)
        if latin_tokens >= 25 and arabic_tokens <= 5 and latin_ratio >= english_drift_ratio:
            warnings.append(
                f'English drift: {latin_tokens} latin tokens vs {arabic_tokens} Arabic tokens ({latin_ratio:.0%})',
            )
            return False, warnings

    return True, warnings


def validate_transcription(json_path: Path) -> tuple[bool, list[str]]:
    try:
        data = json.loads(json_path.read_bytes().decode('utf-8'))
    except (json.JSONDecodeError, UnicodeDecodeError, OSError) as err:
        return False, [f'Invalid JSON: {err}']
    return validate_transcription_data(data, label=str(json_path))


def remove_transcription_outputs(json_name: str, folder_name: str) -> None:
    json_path = Path(json_name)
    wav_output_base = str(json_path)[:-len('.json')] if str(json_path).endswith('.json') else str(json_path)
    chapter_base = str(json_path)[:-len('.wav.json')] if str(json_path).endswith('.wav.json') else wav_output_base
    for path in (
        json_name,
        f'{wav_output_base}.txt',
        f'{wav_output_base}.srt',
        f'{chapter_base}_Gemini_Corrected.json',
    ):
        if os.path.exists(path):
            os.remove(path)
    for part in Path(folder_name).glob('_whisper_part_*'):
        part.unlink(missing_ok=True)


def clean_bad_chapters(from_chapter: int) -> list[int]:
    """Remove invalid or broken transcription files from from_chapter onward."""
    cleaned: list[int] = []
    for n in range(from_chapter, len(chapters) + 1):
        dirs = list(ROOT_DIR.glob(f'{n:02d}_*'))
        if not dirs:
            continue
        folder = dirs[0]
        base_name = folder.name
        json_path = folder / f'{base_name}.wav.json'
        if not json_path.exists():
            continue
        ok, _ = validate_transcription(json_path)
        if not ok:
            remove_transcription_outputs(str(json_path), str(folder))
            cleaned.append(n)
            print(f'🧹 Ch {n:02d} — حذف تفريغ معيب')
    return cleaned


def parse_chapter_range(spec: str, total: int) -> list[int]:
    """Parse '10', '10-12', or '10,11,12' into 1-based chapter numbers."""
    numbers: set[int] = set()
    for part in spec.split(','):
        part = part.strip()
        if not part:
            continue
        if '-' in part:
            start_s, end_s = part.split('-', 1)
            start, end = int(start_s), int(end_s)
            if start > end:
                start, end = end, start
            numbers.update(range(start, end + 1))
        else:
            numbers.add(int(part))
    invalid = [n for n in numbers if n < 1 or n > total]
    if invalid:
        raise ValueError(f'Invalid chapter(s): {invalid} (valid: 1–{total})')
    return sorted(numbers)


ROOT_DIR = Path(__file__).resolve().parent
load_env_file(ROOT_DIR / '.env')
load_env_file(ROOT_DIR / 'app' / '.env')

# ==========================================
# 3. إعدادات Whisper والملفات
# ==========================================
technical_prompt = (
    "هذا تفريغ عربي باللهجة المصرية لشرح تقني عن Docker. "
    "اكتب الكلام بالعربي المصري، واترك المصطلحات والأوامر بالإنجليزية عند ذكرها فقط: "
    "Docker, Kubernetes, K8s, Container, Image, Dockerfile, Swarm, Compose, "
    "Network, Volume, Storage, Portainer, Minikube, Pod, Node, Cluster, "
    "Deployment, YAML, CLI, VSCode, Jupyter, localhost, API, bash, run, build, pull, push."
)

audio_file = "docker_audio.wav"
whisper_cli = os.path.expanduser("~/Documents/wespar/whisper.cpp/build/bin/whisper-cli")
model_path = os.path.expanduser("~/Documents/wespar/whisper.cpp/models/ggml-large-v3.bin")

# بيانات الشباتر
chapters = [
    {'start_time': 0.0, 'title': 'Intro', 'end_time': 30.0}, 
    {'start_time': 30.0, 'title': 'Introduction to Containers', 'end_time': 1189.0}, 
    {'start_time': 1189.0, 'title': 'Container Architecture', 'end_time': 3014.0}, 
    {'start_time': 3014.0, 'title': 'Introduction to Docker', 'end_time': 4058.0}, 
    {'start_time': 4058.0, 'title': 'Installing Docker', 'end_time': 5237.0}, 
    {'start_time': 5237.0, 'title': 'Container = Application', 'end_time': 6201.0}, 
    {'start_time': 6201.0, 'title': 'Docker Engine Architecture', 'end_time': 6677.0}, 
    {'start_time': 6677.0, 'title': 'Images - Deep Dive', 'end_time': 9437.0}, 
    {'start_time': 9437.0, 'title': 'Docker in VSCode', 'end_time': 10108.0}, 
    {'start_time': 10108.0, 'title': 'Containers - Deep Dive', 'end_time': 11020.0}, 
    {'start_time': 11020.0, 'title': 'Network', 'end_time': 13651.0}, 
    {'start_time': 13651.0, 'title': 'Storage', 'end_time': 15742.0}, 
    {'start_time': 15742.0, 'title': 'Containerizing an Application', 'end_time': 17723.0}, 
    {'start_time': 17723.0, 'title': 'Dockerfile - Deep Dive', 'end_time': 21938.0}, 
    {'start_time': 21938.0, 'title': 'Image Registries', 'end_time': 22570.0}, 
    {'start_time': 22570.0, 'title': 'Docker Compose', 'end_time': 25492.0}, 
    {'start_time': 25492.0, 'title': 'Docker Swarm', 'end_time': 29057.0}, 
    {'start_time': 29057.0, 'title': 'Docker Stack', 'end_time': 30435.0}, 
    {'start_time': 30435.0, 'title': 'Portainer', 'end_time': 30997.0}, 
    {'start_time': 30997.0, 'title': 'Introduction to Kubernetes', 'end_time': 31285.0}, 
    {'start_time': 31285.0, 'title': 'K8s High Level Architecture', 'end_time': 32170.0}, 
    {'start_time': 32170.0, 'title': 'Installing Minikube', 'end_time': 32876.0}, 
    {'start_time': 32876.0, 'title': 'K8s Logical Architecture', 'end_time': 33806.0}, 
    {'start_time': 33806.0, 'title': 'K8s Sample Deployment', 'end_time': 36081.0}, 
    {'start_time': 36081.0, 'title': 'K8s in VSCode', 'end_time': 36352.0}, 
    {'start_time': 36352.0, 'title': 'Jupyter in Containers', 'end_time': 37200.0},
]


def main() -> None:
    parser = argparse.ArgumentParser(description='استخراج الصوت وتفريغه بـ Whisper')
    parser.add_argument(
        '--gemini',
        action='store_true',
        help='تصحيح JSON بـ Gemini بعد التفريغ (اختياري — افتراضياً Whisper فقط)',
    )
    parser.add_argument(
        '--chapter',
        type=str,
        metavar='N',
        help='شابتر واحد أو نطاق: 10 أو 10-12 أو 10,11',
    )
    parser.add_argument(
        '--force',
        action='store_true',
        help='إعادة التفريغ لكل الشباتر في النطاق',
    )
    parser.add_argument(
        '--force-chapter',
        type=str,
        metavar='N',
        help='إعادة التفريغ لشباتر محددة فقط: 10 أو 10,12',
    )
    parser.add_argument(
        '--clean-from',
        type=int,
        metavar='N',
        help='حذف ملفات التفريغ المعيبة من شابتر N وما بعده قبل البدء',
    )
    parser.add_argument(
        '--force-gemini',
        action='store_true',
        help='إعادة تصحيح Gemini حتى لو الملف المصحّح موجود',
    )
    args = parser.parse_args()
    use_gemini = args.gemini
    force_all = args.force
    force_gemini = args.force_gemini
    if args.clean_from:
        clean_bad_chapters(args.clean_from)
    if args.force_chapter:
        try:
            force_chapters = set(parse_chapter_range(args.force_chapter, len(chapters)))
        except ValueError as err:
            parser.error(str(err))
    else:
        force_chapters = set()

    if use_gemini:
        gemini_model = get_gemini_model()

    if args.chapter:
        try:
            selected = parse_chapter_range(args.chapter, len(chapters))
        except ValueError as err:
            parser.error(str(err))
        chapter_jobs = [(n - 1, chapters[n - 1]) for n in selected]
    else:
        chapter_jobs = list(enumerate(chapters))

    steps_label = 'استخراج -> تفريغ -> Gemini' if use_gemini else 'استخراج -> تفريغ'
    scope = f'شابتر {args.chapter}' if args.chapter else f'{len(chapters)} شابتر'
    print(f"🚀 بدء تشغيل أداة الأتمتة ({steps_label}) — {scope}...\n")
    if use_gemini:
        logging.info("Started pipeline: FFMPEG -> Whisper -> Gemini JSON Correction.")
    else:
        logging.info("Started pipeline: FFMPEG -> Whisper (Gemini skipped).")

    interrupted = False
    _sigint_count = 0


    def on_sigint(_signum, _frame):
        nonlocal interrupted, _sigint_count
        _sigint_count += 1
        interrupted = True
        if _sigint_count >= 2:
            raise KeyboardInterrupt
        sys.stderr.write('\n⏸ إيقاف بعد انتهاء العملية الحالية… (Ctrl+C مرة أخرى للإيقاف الفوري)\n')
        sys.stderr.flush()


    signal.signal(signal.SIGINT, on_sigint)

    successful_chapters: list[str] = []
    failed_chapters: list[str] = []
    failure_details: list[str] = []

    for i, chap in chapter_jobs:
        if interrupted:
            print(f'\n⏸ توقف عند الشابتر {i + 1}. للاستكمال: python auto_transcribe.py --chapter {i + 1}-26')
            break

    start = chap['start_time']
    end = chap['end_time']
    raw_title = chap['title']
    
    safe_title = re.sub(r'[^\w\s-]', '', raw_title).strip().replace(' ', '_')
    folder_name = f"{i+1:02d}_{safe_title}"
    
    os.makedirs(folder_name, exist_ok=True)
    
    chunk_name = os.path.join(folder_name, f"{folder_name}.wav")
    json_name = os.path.join(folder_name, f"{folder_name}.wav.json")
    corrected_json_name = os.path.join(folder_name, f"{folder_name}_Gemini_Corrected.json")

        total_steps = 3 if use_gemini else 2
        label = f'Ch {i + 1:02d}'
    
    # ---------------------------------------------------------
    # الخطوة الأولى: قص الصوت
    # ---------------------------------------------------------
    if not os.path.exists(chunk_name):
            print(f"📁 [1/{total_steps}] {label} — استخراج الصوت: {raw_title}")
            cmd_cut = [
                "ffmpeg", "-i", audio_file, "-ss", str(start), "-to", str(end),
                "-c", "copy", chunk_name, "-loglevel", "error",
            ]
            subprocess.run(cmd_cut, check=False)
    else:
            print(f"📁 [1/{total_steps}] {label} — تخطي استخراج الصوت ({raw_title})")
        
    # ---------------------------------------------------------
    # الخطوة الثانية: تفريغ النص باستخدام Whisper
    # ---------------------------------------------------------
        chapter_num = i + 1
        force_this = force_all or chapter_num in force_chapters
        needs_transcribe = force_this or not os.path.exists(json_name)
        if force_this and os.path.exists(json_name):
            remove_transcription_outputs(json_name, folder_name)

        if needs_transcribe:
            print(f"🤖 [2/{total_steps}] {label} — تفريغ الصوت: {raw_title}...")
            try:
                transcribe_with_whisper(chunk_name, json_name, label)
            except subprocess.CalledProcessError:
            logging.error(f"Error transcribing {raw_title}.")
                print(f"❌ {label} — خطأ أثناء التفريغ. راجع transcription_pipeline.log")
                failed_chapters.append(raw_title)
                failure_details.append(f'{label} {raw_title}: Whisper command failed')
                print("-" * 50)
                continue
            except WhisperValidationError as err:
                for w in err.warnings:
                    print(f"⚠️  {label} — {w}")
                logging.warning('%s failed validation: %s', raw_title, '; '.join(err.warnings))
                remove_transcription_outputs(json_name, folder_name)
                print(f"❌ {label} — تم حذف الملفات (تفريغ معيب). أعد التشغيل بـ --force")
                failed_chapters.append(raw_title)
                failure_details.append(f'{label} {raw_title}: ' + '; '.join(err.warnings))
                print("-" * 50)
                continue
            except KeyboardInterrupt:
                remove_transcription_outputs(json_name, folder_name)
                print(f'\n⏸ {label} — تم الإيقاف أثناء التفريغ.')
                print(f'   للاستكمال: python auto_transcribe.py --chapter {i + 1}')
                raise SystemExit(130)

            if os.path.exists(json_name):
                ok, validation_warnings = validate_transcription(Path(json_name))
                if not ok:
                    for w in validation_warnings:
                        print(f"⚠️  {label} — {w}")
                    remove_transcription_outputs(json_name, folder_name)
                    print(f"❌ {label} — تم حذف الملفات (تفريغ معيب). أعد التشغيل بـ --force")
                    failed_chapters.append(raw_title)
                    failure_details.append(f'{label} {raw_title}: ' + '; '.join(validation_warnings))
                    print("-" * 50)
            continue
    else:
            print(f"🤖 [2/{total_steps}] {label} — تخطي التفريغ ({raw_title})")
            if os.path.exists(json_name):
                ok, validation_warnings = validate_transcription(Path(json_name))
                if not ok:
                    for w in validation_warnings:
                        print(f"⚠️  {label} — {w}")
                    print(f"❌ {label} — JSON موجود لكن معيب. شغّل: python auto_transcribe.py --chapter {i + 1} --force")
                    failed_chapters.append(raw_title)
                    failure_details.append(f'{label} {raw_title}: ' + '; '.join(validation_warnings))
                    print("-" * 50)
                    continue

    # ---------------------------------------------------------
        # الخطوة الثالثة (اختيارية): التصحيح الذكي باستخدام Gemini API
    # ---------------------------------------------------------
        if not use_gemini:
            successful_chapters.append(raw_title)
            print("-" * 50)
            continue

        if os.path.exists(json_name):
            gemini_skip = os.path.exists(corrected_json_name) and not force_gemini
            if force_gemini and os.path.exists(corrected_json_name):
                os.remove(corrected_json_name)

            if not gemini_skip:
                print(f"✨ [3/3] {label} — تصحيح JSON بـ Gemini: {raw_title}...")
                try:
            with open(json_name, 'r', encoding='utf-8') as f:
                        raw_data = json.load(f)

                    corrected_data = correct_json_with_gemini(gemini_model, raw_data, raw_title, label)

            with open(corrected_json_name, 'w', encoding='utf-8') as f:
                        json.dump(corrected_data, f, ensure_ascii=False, indent=2)
                
                    print(f"✅ {label} — تم حفظ {corrected_json_name}")
            logging.info(f"Successfully processed and corrected JSON for: {raw_title}")
            
        except Exception as e:
                    print(f"❌ {label} — فشل الاتصال بـ Gemini.")
            logging.error(f"Gemini API error on {raw_title}: {e}")
                    failed_chapters.append(raw_title)
                    failure_details.append(f'{label} {raw_title}: Gemini failed: {e}')
            else:
                print(f"✨ [3/3] {label} — تخطي التدقيق ({raw_title} مصحح مسبقاً)")

        if raw_title not in failed_chapters and os.path.exists(json_name):
            successful_chapters.append(raw_title)
    print("-" * 50)

    if interrupted:
        logging.info("Pipeline interrupted by user.")
    elif failed_chapters:
        if successful_chapters:
            print(f"\n✅ نجح: {', '.join(successful_chapters)}")
        print(f"\n⚠️  انتهى مع أخطاء في: {', '.join(failed_chapters)}")
        for detail in failure_details:
            print(f"   - {detail}")
        if chapter_jobs:
            next_failed = next((idx + 1 for idx, chap in chapter_jobs if chap['title'] in failed_chapters), None)
            if next_failed:
                print(f"   للاستكمال بعد التصليح: python auto_transcribe.py --chapter {next_failed}-26")
        logging.warning(f"Completed with failures: {failed_chapters}")
    elif use_gemini:
        print("\n🎉 تمت المهمة! الشباتر المحددة مفرغة ومصححة بـ Gemini.")
        logging.info("Batch transcription and Gemini correction completed.")
    else:
        print("\n🎉 تمت المهمة! الشباتر المحددة مفرغة (Whisper فقط).")
        print("   لتصحيح JSON بـ Gemini لاحقاً: python auto_transcribe.py --gemini --chapter N")
        logging.info("Batch transcription completed (Whisper only).")


if __name__ == '__main__':
    main()
