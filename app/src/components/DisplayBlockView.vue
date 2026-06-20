<script setup lang="ts">
import { computed } from 'vue'
import type { DisplayBlock } from '../types/chapterDisplay'
import TechnicalTermHighlight from './TechnicalTermHighlight.vue'
import CodeBlock from './CodeBlock.vue'

const props = defineProps<{ block: DisplayBlock }>()

const contentLines = computed(() =>
  props.block.content
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean),
)

const definition = computed(() => ({
  term: contentLines.value[0] ?? '',
  body: contentLines.value.slice(1).join(' ') || props.block.content.trim(),
}))

const comparisonRows = computed(() =>
  contentLines.value.map((line) => {
    const [left = '', right = ''] = line.split('|').map((part) => part.trim())
    return { left, right }
  }),
)

const tableRows = computed(() => {
  const lines = contentLines.value
  if (!lines.length) return { headers: [] as string[], rows: [] as string[][] }
  const headers = lines[0].split('|').map((part) => part.trim())
  const rows = lines.slice(1).map((line) => line.split('|').map((part) => part.trim()))
  return { headers, rows }
})

const glossaryEntries = computed(() =>
  contentLines.value.map((line) => {
    const [term = '', definition = ''] = line.split('|').map((part) => part.trim())
    return { term, definition }
  }),
)
</script>

<template>
  <div class="block" :class="`block-${block.type}`">
    <CodeBlock v-if="block.type === 'code'" :code="block.content.trim()" />
    <ul v-else-if="block.type === 'list'" class="list">
      <li v-for="(item, i) in block.content.split('\n').filter(Boolean)" :key="i">
        <TechnicalTermHighlight :text="item.trim()" />
      </li>
    </ul>
    <p v-else-if="block.type === 'note'" class="note">
      <TechnicalTermHighlight :text="block.content.trim()" />
    </p>
    <p v-else-if="block.type === 'warning'" class="warning">
      <TechnicalTermHighlight :text="block.content.trim()" />
    </p>
    <div v-else-if="block.type === 'definition'" class="definition-card">
      <strong><TechnicalTermHighlight :text="definition.term" /></strong>
      <p><TechnicalTermHighlight :text="definition.body" /></p>
    </div>
    <div v-else-if="block.type === 'comparison'" class="comparison-grid">
      <div v-for="(row, i) in comparisonRows" :key="i" class="comparison-row">
        <div class="comparison-cell"><TechnicalTermHighlight :text="row.left" /></div>
        <div class="comparison-cell"><TechnicalTermHighlight :text="row.right" /></div>
      </div>
    </div>
    <div v-else-if="block.type === 'summary'" class="summary-box">
      <span class="summary-label">في هذا الشابتر</span>
      <p><TechnicalTermHighlight :text="block.content.trim()" /></p>
    </div>
    <div v-else-if="block.type === 'takeaway'" class="takeaway-box">
      <span class="takeaway-label">الفكرة الأساسية</span>
      <p><TechnicalTermHighlight :text="block.content.trim()" /></p>
    </div>
    <div v-else-if="block.type === 'table'" class="table-wrap">
      <table class="data-table">
        <thead>
          <tr>
            <th v-for="(header, i) in tableRows.headers" :key="i">
              <TechnicalTermHighlight :text="header" />
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, i) in tableRows.rows" :key="i">
            <td v-for="(cell, j) in row" :key="j">
              <TechnicalTermHighlight :text="cell" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <dl v-else-if="block.type === 'glossary'" class="glossary">
      <div v-for="(entry, i) in glossaryEntries" :key="i" class="glossary-entry">
        <dt><TechnicalTermHighlight :text="entry.term" /></dt>
        <dd><TechnicalTermHighlight :text="entry.definition" /></dd>
      </div>
    </dl>
    <ol v-else-if="block.type === 'questions'" class="questions">
      <li v-for="(item, i) in contentLines" :key="i">
        <TechnicalTermHighlight :text="item" />
      </li>
    </ol>
    <pre v-else-if="block.type === 'flow'" class="flow-text"><TechnicalTermHighlight :text="block.content.trim()" /></pre>
    <ol v-else-if="block.type === 'steps'" class="steps">
      <li v-for="(item, i) in contentLines" :key="i">
        <TechnicalTermHighlight :text="item.replace(/^[-*]\s*/, '')" />
      </li>
    </ol>
    <div v-else-if="block.type === 'command'" class="command-card">
      <CodeBlock :code="contentLines[0] || block.content.trim()" />
      <p v-if="contentLines.length > 1">
        <TechnicalTermHighlight :text="contentLines.slice(1).join(' ')" />
      </p>
    </div>
    <h4 v-else-if="block.type === 'heading'" class="subheading">
      <TechnicalTermHighlight :text="block.content.trim()" />
    </h4>
    <p v-else class="paragraph">
      <TechnicalTermHighlight :text="block.content.trim()" />
    </p>
  </div>
</template>

<style scoped>
.paragraph {
  margin: 0 0 1.5rem;
  color: var(--text);
  font-size: 1.1rem;
  line-height: 1.85;
}

.subheading {
  margin: 1rem 0 0.5rem;
  color: #79c0ff;
  font-size: 1rem;
}

.note {
  margin: 0.85rem 0;
  padding: 0.85rem 1rem;
  background: rgba(210, 153, 34, 0.1);
  border-right: 3px solid var(--warning);
  border-radius: 0 var(--radius) var(--radius) 0;
  color: #e6edf3;
}

.warning {
  margin: 0.85rem 0;
  padding: 0.85rem 1rem;
  background: rgba(248, 81, 73, 0.12);
  border-right: 3px solid #f85149;
  border-radius: 0 var(--radius) var(--radius) 0;
  color: #ffd7d7;
}

.definition-card,
.command-card {
  margin: 1rem 0 1.5rem;
  padding: 1rem;
  border: 1px solid rgba(36, 150, 237, 0.35);
  border-radius: var(--radius);
  background: rgba(36, 150, 237, 0.08);
}

.definition-card strong {
  display: block;
  color: #79c0ff;
  margin-bottom: 0.4rem;
  font-size: 1.05rem;
}

.definition-card p,
.command-card p {
  margin: 0.75rem 0 0;
  color: var(--text);
  line-height: 1.8;
}

.comparison-grid {
  display: grid;
  gap: 0.65rem;
  margin: 1rem 0 1.5rem;
}

.comparison-row {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.65rem;
}

.comparison-cell {
  padding: 0.85rem;
  background: var(--bg-elevated);
  border: 1px solid var(--border);
  border-radius: calc(var(--radius) - 4px);
  line-height: 1.7;
}

.steps {
  margin: 1rem 0 1.75rem;
  padding-right: 1.5rem;
  counter-reset: step;
}

.steps li {
  margin-bottom: 0.75rem;
  padding: 0.75rem 1rem;
  background: rgba(63, 185, 80, 0.08);
  border: 1px solid rgba(63, 185, 80, 0.22);
  border-radius: var(--radius);
  line-height: 1.75;
}

.list {
  margin: 1rem 0 1.75rem;
  padding-right: 1.5rem;
  font-size: 1.1rem;
  line-height: 1.8;
}

.list li {
  margin-bottom: 0.75rem;
}

.summary-box,
.takeaway-box {
  margin: 1rem 0 1.5rem;
  padding: 1rem 1.1rem;
  border-radius: var(--radius);
  line-height: 1.8;
}

.summary-box {
  background: rgba(36, 150, 237, 0.1);
  border: 1px solid rgba(36, 150, 237, 0.35);
}

.takeaway-box {
  background: rgba(63, 185, 80, 0.1);
  border: 1px solid rgba(63, 185, 80, 0.3);
}

.summary-label,
.takeaway-label {
  display: block;
  margin-bottom: 0.45rem;
  color: #79c0ff;
  font-size: 0.9rem;
  font-weight: 600;
}

.takeaway-label {
  color: #7ee787;
}

.summary-box p,
.takeaway-box p {
  margin: 0;
}

.flow-text {
  margin: 1rem 0 1.5rem;
  padding: 1rem;
  background: var(--bg-elevated);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 0.95rem;
  line-height: 1.7;
  white-space: pre-wrap;
  overflow-x: auto;
}

.table-wrap {
  margin: 1rem 0 1.75rem;
  overflow-x: auto;
}

.data-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.98rem;
}

.data-table th,
.data-table td {
  padding: 0.75rem 0.85rem;
  border: 1px solid var(--border);
  text-align: right;
  vertical-align: top;
  line-height: 1.65;
}

.data-table th {
  background: rgba(36, 150, 237, 0.12);
  color: #79c0ff;
}

.data-table tbody tr:nth-child(even) td {
  background: rgba(255, 255, 255, 0.02);
}

.glossary {
  margin: 1rem 0 1.75rem;
}

.glossary-entry {
  margin-bottom: 0.9rem;
  padding: 0.85rem 1rem;
  background: var(--bg-elevated);
  border: 1px solid var(--border);
  border-radius: var(--radius);
}

.glossary-entry dt {
  margin: 0 0 0.35rem;
  color: #79c0ff;
  font-weight: 600;
}

.glossary-entry dd {
  margin: 0;
  line-height: 1.75;
}

.questions {
  margin: 1rem 0 1.75rem;
  padding-right: 1.5rem;
  line-height: 1.8;
}

.questions li {
  margin-bottom: 0.75rem;
}

@media (max-width: 700px) {
  .comparison-row {
    grid-template-columns: 1fr;
  }
}
</style>
