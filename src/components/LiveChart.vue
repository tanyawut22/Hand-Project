<script>
import { Line } from 'vue-chartjs'
// var xVal= 0;
export default {
  extends: Line,
  data() {
    return {
        dps: [],
        xVal: 0,
        yVal: 0,
        // count: 1,
        j: 0,
      chartData: {
          labels: ['10','20','30','40','50','60','70','80','90','100'],
          datasets: [
            {
              label: 'Line Chart',
              data: [],
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
        // var updateChart = function (count) {
        // count = count || 1;
        // // count is number of times loop runs to generate random dataPoints.
        // let tes = this;
        // for (var j = 0; j < count; j++) {	
        //   // this.yVal = Math.round(Math.random() *42.53);
        //   this.xVal += 1;
        // }
        // // console.log(this.yVal);
        // console.log(this.xVal+" sec");
        // };
        // this.xVal+=1;
        console.log(this.xVal+" sec");
        this.updateChart();
      },

      updateChart: function (count){
        count = count || 1;
        // count is number of times loop runs to generate random dataPoints.
        // let tes = this;
        for (this.j = 0; this.j < count; this.j++) {	
          // this.yVal = Math.round(Math.random() *42.53);
          this.xVal+=1;
          console.log(this.xVal+" sec");
        }
        // console.log(this.yVal);
        // console.log(this.xVal+" sec");
        // this.updateChart(count);
      }
    },
    watch: {
        xVal: function (){
            let th = this;
          console.log("watch "+th.xVal);
        }
    },
    // beforeUpdate () {
    //   console.log("beforeUpdate");
    //   this.CountNum();
    // },
    mounted () {
      
      console.log("mounted");
      this.renderChart(this.chartdata, this.options);
      // setInterval(function(){ CountNum() }, 1000);
    },
    created(){
      console.log("created");
      this.CountNum();
    },
    updated () {
      console.log("updated")
      console.log("updated +" + this.xVal)
      // this.renderChart(this.chartData, this.options)
    }
}
</script>
