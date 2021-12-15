<script src="https://canvasjs.com/assets/script/canvasjs.min.js"></script> 
<script>
  import { Line } from 'vue-chartjs'
        var dps = [];
        var xVal = -10;
        var yVal = 0;
        // var updateInterval = 1000;
        var dataLength = 10;
  // // window.onload = function () {
      //   var dps = [];
      //   // var chart = new CanvasJS.Chart("chartContainer", {
      //   //   exportEnabled: true,
      //   //   title :{
      //   //     text: "Dynamic Spline Chart"
      //   //   },
      //   //   data: [{
      //   //     type: "spline",
      //   //     markerSize: 0,
      //   //     dataPoints: dps 
      //   //   }]
      //   // });
      //   var xVal = -10;
      //   var yVal = 0;
      //   var updateInterval = 1000;
      //   var dataLength = 10;
      //   var updateChart = function (count) {
      //   count = count || 1;
      //   // count is number of times loop runs to generate random dataPoints.
      //   for (var j = 0; j < count; j++) {	
      //     yVal = Math.round(Math.random() *42.53);
      //     dps.push({
      //       x: xVal,
      //       y: yVal
      //     });
      //     xVal++;
      //   }
      //   if (dps.length > dataLength) {
      //     dps.shift();
      //   }
      //   // chart.render();
      //   console.log(yVal);
      //   console.log(xVal+" sec");
      // };
      // updateChart(dataLength); 
      // setInterval(function(){ updateChart() }, updateInterval);
      // }
  export default {
    extends: Line,
    data () {
      return {
        // dps: [],
        // xVal: 0,
        // yVal: 0,
        // updateInterval: 1000,
        chartData: {
          labels: [xVal],
          datasets: [
            {
              label: 'Line Chart',
              data: [yVal],
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
    methods: {
        Count(){
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
      setInterval(function(){ updateChart() }, 1000);
      }
    },
    mounted () {
      this.Count()
      this.renderChart(this.chartData, this.options)
      console.log("mounted")
    },
    // watch:{
    //   xVal: (val) => {
    //     this.renderChart(this.chartData, this.options)
    //   }
    // }
    // updated () {
    //   this.renderChart(this.chartData, this.options)
    // }
  }
</script>