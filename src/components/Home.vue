<template>
  <div>
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
          <h2>Select mode</h2>
    </b-navbar> -->
    <div>
      <b-navbar type="dark" variant="dark" style="margin-left: 15%;">
        <b-navbar-nav>
          <!-- <b-nav-item href="#">Home</b-nav-item> -->
          <!-- <b-avatar variant="success"></b-avatar> -->
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
        <button type="button" class="btn btn-secondary btn-lg" style="margin-right: 50px"><router-link to="/ModeOne">10 - 15 sec</router-link></button>
        <button type="button" class="btn btn-secondary btn-lg" style="margin-left: 50px"><router-link to="/ModeTwo">30 - 45 sec</router-link></button>
      </tr>
    </div>
    <!-- <footer>
      <p>© 2021 Lorem ipsum</p>
    </footer> -->
</div>
</template>
<script>
// import {db} from '../config'
export default {
    name:'Home',
    data(){
      return{

      }
    },
    created(){
      // this.GetData();
    },
//     methods:{
//       GetData(){
// // //       db.collection("Students").get().then((querySnapshot) => {
// // //         querySnapshot.forEach((doc) => {
// // //         // doc.data() is never undefined for query doc snapshots
// // //           console.log(doc.id, " => ", doc.data());
// // //     });
// // // });
//          db.collection("Students").doc()
//                 .collection('15sec').doc().get().then((querySnapshot) => {
//                 querySnapshot.forEach((doc) => {
//                 // doc.data() is never undefined for query doc snapshots
//                   console.log(doc.id, " => ", doc.data());
//             });
//             });
//     },
//   //   components: {
//   // }
// }
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
    padding: 250px;
    height: 100%;
  }
    /* justify-content: space-between; */
  td{
    margin: 35px;
  }
</style>
