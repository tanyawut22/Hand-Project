import Chart from 'chart.js'

var ctx = document.getElementById('my-chart')
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [{
      label: 'Page A',
      data: [61, 122, 107, 73],
      borderColor: '#6E7EF5',
      fill: false
    }, {
      label: 'Page B',
      data: [18, 170, 135, 92],
      borderColor: '#B277DE',
      fill: false
    }]
  },
  options: {
    responsive: true
  }
})