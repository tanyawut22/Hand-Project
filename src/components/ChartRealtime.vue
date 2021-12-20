<template>
<div class="header">
    <div class="sidebar">
      <div class="insidebar" style="margin: 60px">
        <tr>
        <h2 style="color: white">Welcome</h2>
        </tr>
        <tr>
        <router-link to="/">Select Mode</router-link>
        </tr>
        <tr>
        <router-link to="/Dashboard">Dashboard</router-link>
        </tr>
      </div>
    </div>
  <!-- <b-navbar toggleable="lg" type="dark" variant="dark">
        <h2>Lorem ipsum</h2>
  </b-navbar> -->
  <div class="row">
      <b-navbar type="dark" variant="dark" style="margin-left: 15.25%">
        <b-navbar-nav>
          <!-- <b-nav-item href="#">Home</b-nav-item> -->
          <!-- Navbar dropdowns -->
          <b-nav-item-dropdown text="User" right>
            <b-dropdown-item href="#">Account</b-dropdown-item>
            <b-dropdown-item href="#">Logout</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-navbar>
    </div>
  <div class="container">
    <h3 style="margin: 40px">จุดสัญญาณบริเวณหน้ามือ</h3>
    <div class="row">
      <div class="column">
        <h4 style="margin-bottom: 30px">กดตรงจุดที่แสดงไว้ด้วยแรง 50 ปอนด์ เป็นเวลา 10 วินาที แล้วสังเกตกราฟด้านขวามือ</h4>
        <img :src="image"/>
      </div>
      <div class="column">
        <div style="margin-bottom: 30px">
          <tr>
            <td>
              <div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width:90%">
      <h2 style="margin-right: 150px">{{ timerCount }} / 10 sec</h2>
    </div>
            </td>
            </tr>
    </div>
    <div id="chart">
    <apexchart
      type="line"
      width="500"
      height="350"
      ref="chart"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>

    </div>
      </div>
    </div>
</div>
</template>

<script>
import image from "../assets/front.gif"
import VueApexCharts from "vue-apexcharts";

import {db} from '../config';
import 'firebase/compat/database'
import { getDatabase, ref, child, get, onValue } from "firebase/database";
var data = [];
let XAXISRANGE = 20;

// const dbRef = ref(db, 'Sensor');
      //         onValue(dbRef, (snapshot) => {
      //             this.StatusPush=snapshot.val().Status;
      //             console.log(this.StatusPush);
      //         });
export default {
  name: "ChartRealtime",
  components: {
    apexchart: VueApexCharts,
  },
  data() {
    return {
        // timerCountDone: 0,
        timerCount: 0,
        TimeSec:[],
        ForcData:[],
        ForcePush: 0,
        image: image,
        StatusPush: null,
      series: [
        {
          data: data.slice(),
        },
      ],
      chartOptions: {
        chart: {
          id: "realtime",
          height: 150,
          type: "line",
          animations: {
            enabled: true,
            easing: "linear",
            dynamicAnimation: {
              speed: 1000,
            },
          },
          toolbar: {
            show: false,
          },
          zoom: {
            enabled: false,
          },
        },
        dataLabels: {
          enabled: true,
          
        },
        stroke: {
          curve: "smooth",
          width: 3,
        },
        title: {
          text: "Force Chart",
          align: "left",
        },
        markers: {
          size: 0,
        },
        xaxis: {
          range: XAXISRANGE,
        },
        yaxis: {
          max: 100,
        },
        legend: {
          show: false,
        },
      },
    };
  },
  mounted: function () {
    this.getNewSeries();
    window.setInterval(() => {
      this.getNewSeries();

      this.$refs.chart.updateSeries([
        {
          data: data,
        },
      ]);
    }, 1000);

    // every 60 seconds, we reset the data to prevent memory leaks
    // window.setInterval(() => {
    //   this.resetData();
    //   this.$refs.chart.updateSeries(
    //     [
    //       {
    //         data,
    //       },
    //     ],
    //     false,
    //     true
    //   );
    // }, 60000);
  },
  updated(){
      if(this.ForcePush==0){
        data.push({
            x: this.timerCount+" sec",
            y: 0,
          });
      }
      else if(this.ForcePush!=0){
        data.push({
            x: this.timerCount+" sec",
            y: this.ForcePush,
          });
          // if(this.ForcePush({min: 50, max: 59.99,})){
          //   setTimeout(() => {
          //   this.timerCountDone++;
          //   if(this.timerCountDone){
          //       alert("10 sec success")
          //   }
          //   },1000);
          // }
      }
  },
  methods: {
    getNewSeries() {
      const dbRef = ref(db, 'Sensor');
      // setTimeout(() => {
      onValue(dbRef, (snapshot) => {
        // setTimeout(() => {
          this.ForcePush = snapshot.val().Data;
          this.StatusPush = snapshot.val().Status;
          this.ForcData.push(this.ForcePush);
          console.log(this.ForcData);
          // this.ForcData.push(snapshot.val().Data);
        // },1000);
        // setTimeout(() => {
        //   data.push({
        //     x: this.timerCount+" sec",
        //     y: this.ForcePush,
        //   });
        //   },1000);
        });
        // },1000);
    },

    // resetData() {
    //   // Alternatively, you can also reset the data at certain intervals to prevent creating a huge series
    //   data = data.slice(data.length - 10, data.length);
    // },

    // getDayWiseTimeSeries(baseval, count, yrange) {
    //   var i = 0;
    //   while (i < count) {
    //     var x = baseval;
    //     var y =
    //       Math.floor(Math.random() * (yrange.max - yrange.min + 1)) +
    //       yrange.min;

    //     data.push({
    //       x,
    //       y,
    //     });
    //     lastDate = baseval;
    //     baseval += TICKINTERVAL;
    //     i++;
    //   }
    // },
  },
    watch: {
            timerCount: {
                handler(value) {
                    if (value >= 0) {
                        setTimeout(() => {
                          this.TimeSec.push(this.timerCount);   
                            this.timerCount++;
                            console.log(this.TimeSec[this.TimeSec.length-1]);
                            // this.TimeSec.push(this.timerCount);   
                        }, 1000);
                    }

                },
                immediate: true // This ensures the watcher is triggered upon creation
            },
      },
};
</script>  

<style scoped>
h1 {
  font-weight: normal;
  text-align: left;
  /* color: white; */
}
h2 {
  font-weight: bold;
  color: white;
}
h3 {
  font-weight: bold;
}
header {
  padding: 50px;
  text-align: center;
  background: #1abc9c;
  color: rgb(17, 4, 77);
  font-size: 30px;
}
footer {
  text-align: center;
  padding: 5px;
  background-color: #777777;
  color: white;
}
.sidebar {
  position: fixed;
  width: 15%;
  height: 100vh;
  background: #000000;
  font-size: 1.25em;
  flex-direction: column;
}
.insidebar {
  position: relative;
  text-align: center;
  top: 10%;
  /* transform: translateY(-50%); */
  /* margin: 0 15%; */
  font-weight: bold;
  flex-direction: column;
}
.active a {
      color: white;
    }
a {
      color: white;
    }
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    margin-top: 20px;
    margin-left: 300px;
  }
  tr{
    justify-content: center;
  }
  .column {
  float: left;
  width: 50%;
  padding: 10px;
  height: 300px; /* Should be removed. Only for demonstration */
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}
</style>