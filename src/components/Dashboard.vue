<template>
  <div>
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
        <h2>Dashboard</h2>
  </b-navbar> -->
  <div>
      <b-navbar type="dark" variant="dark" style="margin-left: 15%;">
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
    <h1>Dashboard</h1>
    <bar-chart style="width: 90%; height: 500px; margin-left: 15%;"></bar-chart>
    <!-- <button @click="fillData()">Randomize</button> -->
    </div>
    <footer>
    <p>© 2021 Lorem ipsum</p>
    </footer>
</div>
</template>

<script>
import BarChart from '@/components/BarChart'
export default {
    name:'Dashboard',
    components: {
    BarChart
  }
}
// this.$router.push({ name: 'SelectLevel' });
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-weight: normal;
  text-align: left;
  color: rgb(36, 36, 36);
  /* color: white; */
}
h2 {
  font-weight: bold;
  color: rgb(255, 255, 255);
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
  padding: 3px;
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
    padding: 30px;
    height: 100%;
  }
</style>
