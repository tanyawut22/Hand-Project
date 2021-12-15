import { Line, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins

export default {
  extends: Line,
  mixins: [reactiveProp],
  props: ['options','chartData', 'labelname', 'yTicks'],
  mounted () {
    // this.chartData is created in the mixin.
    // If you want to pass options please create a local options object
    // this.renderChart(this.chartData, this.options)
    this.renderChart(this.chartData, {
      responsive: true,
      legend: {
        // display: false
      },
      layout: {
        padding: 10
      },
      scales: {
        xAxes: [{
          gridLines: {
            display: true
          }
        }],
        yAxes: [{
          gridLines: {
            display: true
          },
          ticks: {
           min: this.yTicks.min,           
           max: this.yTicks.max,
          }
        }]
      }
    })
    //-----
  }
}
// options: {
//   scales: {
//     yAxes: [{
//       ticks: {
//         beginAtZero: true
//       },
//       gridLines: {
//         display: true
//       }
//     }],
//     xAxes: [ {
//       gridLines: {
//         display: false
//       }
//     }]
//   },
//   legend: {
//     display: true
//   },
//   responsive: true,
//   maintainAspectRatio: false
// }