<template>
  <component :is="tag" class="p-4 transition-shadow border rounded-lg shadow-sm hover:shadow-lg">
    <div class="flex items-start space-x-1">
      <div class="flex flex-col flex-shrink-0 space-y-2">
        <span class="text-gray-400">{{ title }}</span>
        <span class="text-lg font-semibold">{{ totalNumber }}</span>
      </div>
      <div class="relative min-w-0 ml-auto h-14">
        <canvas :id="canvasID"></canvas>
      </div>
    </div>
    <div class="space-x-2">
      <span class="inline-block px-2 text-sm text-white bg-green-300 rounded">{{ percentage }}%</span>
      <span>from {{ year }}</span>
    </div>
  </component>
</template>

<script setup>
import { defineProps, nextTick, onMounted } from 'vue'
import Chart from 'chart.js'
import useCharts from '../../hooks/useCharts'

const props = defineProps({
  tag: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  canvasID: {
    type: String,
    required: true,
  },
})

const { randomData, random, months } = useCharts()

const year = new Date().getFullYear() - 1

const totalNumber = random(1000)

const percentage = random(10)

onMounted(() => {
  nextTick(() => {
    new Chart(document.getElementById(props.canvasID), {
      type: 'line',
      data: {
        labels: months,
        datasets: [
          {
            data: randomData(),
            backgroundColor: ['rgba(55, 125, 255, 0)', 'rgba(255, 255, 255, 0)'],
            borderColor: '#377dff',
            borderWidth: 2,
            pointRadius: 0,
            pointHoverRadius: 0,
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              display: false,
            },
          ],
          xAxes: [
            {
              display: false,
            },
          ],
        },
        maintainAspectRatio: false,
        legend: {
          display: false,
        },
        hover: {
          mode: 'nearest',
          intersect: false,
        },
      },
    })
  })
})
</script>
