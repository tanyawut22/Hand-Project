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
              <!-- <h1 style="margin-right: 150px">{{ msg }}</h1> -->
            </td>
            <!-- <td>
                <b-card bg-variant="success" text-variant="white" class="text-center" style="margin: 5px">
                <b-card-text>Light</b-card-text>
              </b-card>
            </td> -->
            <!-- <td>
                <b-card border-variant="warning" text-variant="warning" class="text-center" style="margin: 5px">
                <b-card-text>Light</b-card-text>
              </b-card>
            </td>
            <td>
                <b-card bg-variant="success" text-variant="white" class="text-center" style="margin: 5px">
                <b-card-text>Good</b-card-text>
              </b-card>
            </td>
            <td>
                <b-card border-variant="danger" text-variant="danger" class="text-center" style="margin: 5px">
                <b-card-text>Heavy</b-card-text>
              </b-card>
            </td> -->
            </tr>
    </div>
    <!-- <button @click="GetData()">Start</button> -->
    <line-chart :chart-data="datacollection" :y-ticks="{min: 0, max: 100}" style="width: 100%; max-width: 600px; height: 550px;"></line-chart>
    
    <!-- <div id="chartContainer" style="height: 370px; width:100%;"></div> -->

    </div>
      </div>
    </div>
    
    <!-- <footer>
    <p>© 2021 Innovation Hand</p>
    </footer> -->
</div>
</template>


<script>
import image from "../assets/front.gif"
import LineChart from './LineChart'
//-------------------------------------
import {db} from '../config';
import 'firebase/compat/firestore'
import 'firebase/compat/database'
import { getDatabase, ref, child, get, onValue } from "firebase/database";

//--------------------------------------------------------

  export default {
    name:'ModeOne',
    components: {
      LineChart
    },
    data () {
      return {
        msg: '9 / 10 sec',
        image: image,
        datacollection: null,
        ForcData:[],
        FD:[],
        timerCount: 0,
        TimeSec:[],
        StatusPush: null,
        timeDone: 0,
        // CountTimeForce:[], 
      }
    },

    methods: {
      GetData(){
            const dbRef = ref(db, 'Sensor');
            // setTimeout(()=>{
              onValue(dbRef, (snapshot) => {
                // setTimeout(()=>{
                  // const data = snapshot.val().Data;
                  // this.ForcData.push(snapshot.val().Data);
                  this.StatusPush=snapshot.val().Status;
                  // console.log(this.ForcData);
                  console.log(this.StatusPush);
              });
              // }, 1000);
            // },1);


      },

      fillData () {
        this.datacollection = {
          labels: this.TimeSec,
          datasets: [
            {
              label: ['Force'],
              fill: false,
              borderWidth: 2,
              borderColor: '#2554FF',
              backgroundColor: '#2554FF',
              data: this.ForcData,
            },
          ],
          options: {
            scales: {
              xAxis: [{
                    type: 'time',
                    ticks: {
                        autoSkip: true,
                        maxTicksLimit: 10
                    }
                }]
            }
            }
          
        }
      },


  },
        updated(){
          // setTimeout(() => {
          if(this.StatusPush==false){
            // setTimeout(() => {
                    this.ForcData.push(0)
                    console.log(this.ForcData)  
            // }, 1000);
          }
          else if(this.StatusPush==true){
            const dbRef = ref(db, 'Sensor');
            setTimeout(() => {
            onValue(dbRef, (snapshot) => {
              // setTimeout(()=>{
              this.ForcData.push(snapshot.val().Data);
              console.log(this.ForcData)
              // },1000);
              });
              }, 1000);
          }
          // }, 1000);
        },
  created(){
      this.fillData();
      // this.GetData();
    },
    watch: {
            timerCount: {
                handler(value) {
 
                    if (value >= 0) {
                        setTimeout(() => {
                            this.timerCount++;
                            // console.log(this.timerCount);
                            this.TimeSec.push(this.timerCount);
                            // console.log(value)
                            // this.datacollection.labels.length++;
                            this.fillData();
                            // this.CountTimeForce.push(this.TimeSec,this.ForcData);
                            
                        }, 1000);
                    }

                },
                immediate: true // This ensures the watcher is triggered upon creation
            },
            // ForcData: {
            //   handler(value) {
            //     if(49<=value<=60){
            //       // setTimeout(()=>{
            //         setTimeout(()=>{
            //         this.timeDone++;
            //         if (this.timeDone==10){
            //           alert("10 sec Succeed")
            //         }
            //         // console.log(this.ForcData)
            //         }, 1000);
            //     }
            //   },
            //   immediate: true
              
            // },
            // ForcData: {
            //   handler(value) {
            //     if(value[value.length-1]==0){
            //       setTimeout(()=>{
            //         this.ForcData[value.length-1]=0;
            //         console.log(this.ForcData[value.length-1]);
            //         // this.ForcData.push(0);
            //         this.fillData();
            //         console.log(value)
            //         // console.log(this.ForcData)
            //         }, 1000);
            //     }
            //   },
            //   immediate: true
              
            // },
            // StatusPush: {
            //     handler(value) {
            //     if(value==false){
            //       setTimeout(()=>{
            //         this.ForcData.push(0)
            //         console.log(this.ForcData)
            //         }, 1000);
            //     }
            //     },
            //   immediate: true
            // }
      },
    // actions:{
    //     fetchUserData:({commit}) => {
    //         const dbR = getDatabase();
    //         // const dbRef = ref(dbR, 'Sensor');
    //         const dbRef = db.ref('Sensor');
    //         dbRef.on('value', function(snapshot) {
    //         snapshot.forEach(function(childSnapshot) {
    //               var childData = childSnapshot.val();
    //               console.log(childData);
    //             });
    //             console.log("working")
    //         });
    //     }
    // },
    mounted(){
      // this.fillData();
      this.GetData();
    }
  
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
