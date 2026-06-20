import os
import json
import re

chapters_data = [
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
    {'start_time': 36352.0, 'title': 'Jupyter in Containers', 'end_time': 37200.0}
]

app_data = []

base_dir = '/Users/user/Documents/docker-cours'

for i, chap in enumerate(chapters_data):
    raw_title = chap['title']
    safe_title = re.sub(r'[^\w\s-]', '', raw_title).strip().replace(' ', '_')
    folder_name = f"{i+1:02d}_{safe_title}"
    folder_path = os.path.join(base_dir, folder_name)
    
    chapter_info = {
        'id': i + 1,
        'title': raw_title,
        'duration': chap['end_time'] - chap['start_time'],
        'isReady': False,
        'transcription': []
    }
    
    if os.path.exists(folder_path):
        json_file = os.path.join(folder_path, f"{folder_name}.wav.json")
        corrected_json_file = os.path.join(folder_path, f"{folder_name}_Gemini_Corrected.json")
        
        target_json = corrected_json_file if os.path.exists(corrected_json_file) else json_file
        
        if os.path.exists(target_json):
            try:
                with open(target_json, 'r', encoding='utf-8') as f:
                    data = json.load(f)
                    if 'transcription' in data:
                        chapter_info['transcription'] = data['transcription']
                        chapter_info['isReady'] = True
            except Exception as e:
                print(f"Error reading {target_json}: {e}")
                
    app_data.append(chapter_info)

app_dir = os.path.join(base_dir, 'app')
os.makedirs(app_dir, exist_ok=True)

js_content = f"const courseData = {json.dumps(app_data, ensure_ascii=False, indent=2)};\n"

with open(os.path.join(app_dir, 'data.js'), 'w', encoding='utf-8') as f:
    f.write(js_content)

print(f"Successfully generated app/data.js with {len(app_data)} chapters.")
