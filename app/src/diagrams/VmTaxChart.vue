<script setup lang="ts">
import { computed } from 'vue'
import { Pie } from 'vue-chartjs'
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js'
import DiagramBase from './DiagramBase.vue'

ChartJS.register(ArcElement, Tooltip, Legend, Title)

const chartData = computed(() => ({
  labels: ['التطبيق الفعلي (App)', 'نظام التشغيل الوهمي (Guest OS)', 'الـ Hypervisor', 'مساحة غير مستغلة'],
  datasets: [
    {
      backgroundColor: ['#3fb950', '#f85149', '#d29922', '#30363d'],
      borderColor: '#161b22',
      borderWidth: 2,
      data: [35, 45, 10, 10]
    }
  ]
}))

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'bottom' as const,
      labels: {
        color: '#e6edf3',
        font: {
          family: 'Cairo, sans-serif',
          size: 13
        }
      }
    },
    tooltip: {
      callbacks: {
        label: (context: any) => {
          return ` ${context.label}: ${context.raw}% من موارد السيرفر`
        }
      }
    }
  }
}
</script>

<template>
  <DiagramBase title="ضريبة الـ VM (The VM Tax) - إهدار الموارد">
    <div class="chart-container">
      <div class="chart-wrapper">
        <Pie :data="chartData" :options="chartOptions" />
      </div>
      <div class="info-box glass-panel">
        <p>
          <i class="fa-solid fa-triangle-exclamation" style="color: #f85149"></i>
          لاحظ كيف يستهلك <strong>نظام التشغيل الوهمي (Guest OS)</strong> الجزء الأكبر من موارد السيرفر فقط لكي يعمل التطبيق، مما يمثل عبئاً كبيراً (Tax) كان يمكن استغلاله لتشغيل تطبيقات أخرى.
        </p>
      </div>
    </div>
  </DiagramBase>
</template>

<style scoped>
.chart-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  padding: 1rem 0;
}

.chart-wrapper {
  position: relative;
  width: 100%;
  max-width: 350px;
  height: 350px;
}

.info-box {
  background: rgba(248, 81, 73, 0.1);
  border: 1px solid rgba(248, 81, 73, 0.3);
  padding: 1rem 1.5rem;
  border-radius: 8px;
  max-width: 500px;
  text-align: right;
}

.info-box p {
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.6;
  color: #e6edf3;
}
</style>
