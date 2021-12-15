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
  <div class="row">
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
  <div class="row">

    <div class="row">
      <div class="column">
        <h3>กดตรงจุดที่แสดงไว้ด้วยแรง 50 ปอนด์ เป็นเวลา 10 วินาที แล้วสังเกตกราฟด้านขวามือ</h3>
        <img :src="image" />
      </div>
      <div class="column">
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

    <line-chart style="width: 100%; max-width: 600px; height: 550px;"></line-chart>
    <!-- <div id="chartContainer" style="height: 370px; width:100%;"></div> -->

    </div>
      </div>
    </div>
    
    <!-- <footer>
    <p>© 2021 Innovation Hand</p>
    </footer> -->
</div>
</template>