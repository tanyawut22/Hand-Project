<template>
  <div class="header">
    <div class="sidebar">
      <div class="insidebar">
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
  <div>
      <b-navbar type="dark" variant="dark" style="margin-left: 15%">
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
    <div>
          <tr>
            <td><h1>{{ msg }}</h1></td>
            <td>
                <b-card bg-variant="success" text-variant="white" class="text-center">
                <b-card-text>Light</b-card-text>
              </b-card>
            </td>
            <td>
                <b-card bg-variant="warning" text-variant="white" class="text-center">
                <b-card-text>Middle</b-card-text>
              </b-card>
            </td>
            <td>
                <b-card bg-variant="danger" text-variant="white" class="text-center">
                <b-card-text>Heavy</b-card-text>
              </b-card>
            </td>
            </tr>
    </div>
    <line-chart :chart-data="datacollection" style="width:100%;max-width:550px"></line-chart>
    <!-- <button @click="fillData()">Randomize</button> -->
    </div>
    <footer>
    <p>© 2021 Lorem ipsum</p>
    </footer>
</div>
</template>

<script>
import LineChart from './LineChart.js'

  export default {
    name:'ModeTwo',
    components: {
      LineChart
    },
    data () {
      return {
        msg: '30 / 45 sec',
        datacollection: null
      }
    },
    mounted () {
      this.fillData()
    },
    methods: {
      fillData () {
        this.datacollection = {
          labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
          datasets: [
            {
              label: 'Data One',
              fill: false,
              backgroundColor: "rgba(0,0,255,1.0)",
              borderColor: "rgba(0,0,255,0.1)",
              data: [0, 10, 15, 15, 15, 15, 15, 15, 15, 15, 15, 14, 15, 15, 15, 15, 15, 15, 15, 14, 15, 15, 15, 15, 15, 13, 15, 15, 15, 15]
            }
          ]
        }
      },
      getRandomInt () {
        return Math.floor(Math.random() * (50 - 5 + 1)) + 5
      }
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
header {
  padding: 60px;
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
  top: 20%;
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
    margin: 10px
  }
  tr{
    justify-content: center;
  }
</style>
