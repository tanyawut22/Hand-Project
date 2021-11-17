<script>
  import { Line } from 'vue-chartjs'
  // window.onload = function () {
        var dps = [];
        // var CanvasJS = require('@/canvasjs');
        // var chart = new CanvasJS.Chart("chartContainer", {
        //   exportEnabled: true,
        //   title :{
        //     text: "Dynamic Spline Chart"
        //   },
        //   data: [{
        //     type: "spline",
        //     markerSize: 0,
        //     dataPoints: dps 
        //   }]
        // });
        var xVal = -10;
        var yVal = 0;
        var updateInterval = 1000;
        var dataLength = 10;
        var updateChart = function (count) {
        count = count || 1;
        // count is number of times loop runs to generate random dataPoints.
        for (var j = 0; j < count; j++) {	
          yVal = Math.round(Math.random() *42.53);
          dps.push({
            x: xVal,
            y: yVal
          });
          xVal++;
        }
        // if (dps.length > dataLength) {
        //   dps.shift();
        // }
        // chart.render();
        console.log(yVal);
        console.log(xVal+" sec");
      };
      updateChart(dataLength); 
      setInterval(function(){ updateChart() }, updateInterval); 
      // }
  export default {
    extends: Line,
    data () {
      return {
        chartData: {
          labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
          datasets: [
            {
              label: 'Line Chart',
              data: [this.dps],
              fill: false,
              borderColor: '#2554FF',
              backgroundColor: '#2554FF',
              borderWidth: 2
            }
          ]
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              },
              gridLines: {
                display: true
              }
            }],
            xAxes: [ {
              gridLines: {
                display: false
              }
            }]
          },
          legend: {
            display: true
          },
          responsive: true,
          maintainAspectRatio: false
        }
      }
    },
    mounted () {
      this.renderChart(this.chartData, this.options)
    }
  }
</script>