<template>
  <div class="relative">
    <canvas :id="canvasID"></canvas>
  </div>
</template>

<script setup>
import { defineProps, nextTick, onMounted } from 'vue'
import Chart from 'chart.js'
import useCharts from '../../hooks/useCharts'

const props = defineProps({
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
      type: 'bar',
      data: {
        labels: months,
        datasets: [
          {
            data: randomData(),
            backgroundColor: 'rgba(55, 125, 255)',
            hoverBackgroundColor: 'rgba(55, 125, 255, 0.7)',
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              gridLines: false,
              ticks: {
                beginAtZero: true,
                stepSize: 50,
                fontSize: 12,
                fontColor: '#97a4af',
                fontFamily: 'Open Sans, sans-serif',
                padding: 10,
              },
            },
          ],
          xAxes: [
            {
              gridLines: false,
              ticks: {
                fontSize: 12,
                fontColor: '#97a4af',
                fontFamily: 'Open Sans, sans-serif',
                padding: 5,
              },
              categoryPercentage: 0.5,
              maxBarThickness: '10',
            },
          ],
        },
        cornerRadius: 2,
        maintainAspectRatio: false,
        legend: {
          display: false,
        },
      },
    })
  })
})
</script>
