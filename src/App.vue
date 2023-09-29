<template>
  <Navbar :logo="logo_src" :alt="app_name" />
  <router-view />
</template>
<script>
import Navbar from './components/Navbar.vue';
export default {
  components: {
    Navbar
  },
  data() {
    return {
      logo_src: "/img/crud.png",
      app_name: "cadastro"
    }

  }

}
</script>
<style>
*{
  font-family: Arial, Helvetica, sans-serif;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.main-container{
  margin: 50px;
  min-height: 250px;
}
h1{
  text-align: center;
  font-size: 42px;
  margin-bottom: 30px;
  color: #222;
}
</style>