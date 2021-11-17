<template>
  <div>
    <div class="sidebar">
      <div class="insidebar">
        <tr>
        <router-link to="/">Home</router-link>
        </tr>
        <tr>
        <router-link to="/SelectLevel">Select Level</router-link>
        </tr>
        <tr>
        <router-link to="/Dashboard">Dashboard</router-link>
        </tr>
      </div>
    </div>
    <!-- <b-navbar toggleable="lg" type="dark" variant="dark">
          <h2>Select mode</h2>
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
    <h1>Please select the mode you want to test.</h1>
      <tr>
        <button type="button" class="btn btn-secondary btn-lg"><router-link to="/ModeOne">10 - 15 sec</router-link></button>
        <button type="button" class="btn btn-secondary btn-lg">30 - 45 sec</button>
      </tr>
    </div>
    <footer>
      <p>© 2021 Lorem ipsum</p>
    </footer>
</div>
</template>

<script>
export default {
    name:'Dashboard',
    components: {
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-weight: normal;
  padding: 10px;
  color: rgb(36, 36, 36);
  /* color: white; */
  /* text-align: left; */
}
h2 {
  font-weight: bold;
  color: rgb(36, 36, 36);
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
    padding: 250px;
    height: 100%;
  }
    /* justify-content: space-between; */
  td{
    margin: 35px;
  }
</style>
