<template>
  <div>
    <Navbar />
    <div class="burger-container">
      <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from './components/BurgerNavbar.vue'

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>
.burger-container {
  margin-top: 6%;
  justify-content: center;
  align-items: center;
}
.navbar {
  height: 56px;
  width: 100%;
  position: fixed !important;
  top: 0;
  left: 0;
  background-color: #703b09;
  display: flex;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -ms-flex-align: center;
  align-items: center;
  padding: 0 20px !important;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  z-index: 90;
}
.navbar h1 {
  color: white;
}
.navbar .links {
  margin-left: auto;
}
.navbar a {
  margin-left: 16px;
  text-decoration: none;
  cursor: pointer;
  padding: 15px;
  color: white;
  font-weight: bold;
}
.navbar a:hover {
  background-color: #8f5c2c;
  border-bottom: 4px solid #40a4c8;
  color: #fff;
}
.logo-container {
  height: 80%;
}
.logo {
  background-color: #fff;
  padding: 8px;
  height: 100%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border-radius: 5px;
}
.card{
background-color: #40a4c8;
}
.spinner {
  display: flex;
  justify-content: center;
  align-items: center;
  height: inherit;
  background-color: white;
}
</style>
