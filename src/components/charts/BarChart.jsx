import { defineComponent, nextTick, onMounted } from 'vue'
import Chart from 'chart.js/auto'
import { randomData, months } from '../../data/charts'

export default defineComponent({
  props: {
    canvasID: {
      type: String,
      required: true,
    },
  },
  setup(props) {
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
                showLine: false,
              },
            ],
          },
          options: {
            scales: {
              yAxis: {
                grid: {
                  display: false,
                },
              },
              xAxis: {
                grid: {
                  display: false,
                },
              },
            },
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: false,
              },
            },
            elements: {
              bar: {
                borderRadius: 5,
              },
            },
          },
        })
      })
    })

    return () => (
      <div class="relative">
        <canvas id={props.canvasID}></canvas>
      </div>
    )
  },
})
