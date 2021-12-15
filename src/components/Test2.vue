<script>
import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  data() {
    return {
        dps: [],
        xVal: 0,
        yVal: 0,
      chartData: {
          labels: [this.xVal],
          datasets: [
            {
              label: 'Line Chart',
              data: [this.yVal],
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
        CountNum (){
        var updateChart = function (count) {
        count = count || 1;
        // count is number of times loop runs to generate random dataPoints.
        for (var j = 0; j < count; j++) {	
          // this.yVal = Math.round(Math.random() *42.53);
          this.xVal++;
        }
        console.log(this.yVal);
        console.log(this.xVal+" sec");
        };
        setInterval(function(){ updateChart() }, 1000);
      },
    },
    watch: {
        xVal: function (){
            let th = this;
          console.log(th.xVal);
        }
    },
    mounted () {
      this.CountNum();
      console.log("mounted");
      this.renderChart(this.chartdata, this.options);
      // setInterval(function(){ CountNum() }, 1000);
    },
    updated () {
      console.log("updated")
      // this.renderChart(this.chartData, this.options)
    }
}
</script>
