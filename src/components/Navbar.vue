<template>
  <div id="nav">
    <router-link to="/" id="logo_url">
      <img id="logo" :src="logo" :alt="alt" />
    </router-link>
    <router-link to="/"> Home </router-link>
    <router-link to="/pessoas"> Pessoas </router-link>
    <router-link to="/pedidos"> Pedidos </router-link>
    <router-link to="/product"> Produtos </router-link>
  </div>
  <!-- <router-link to="/product/12?name=Fedner"> -->
  <!-- <router-link :to="{name:'product', params:{id:12}}"> -->
  <!-- <router-link :to="{ name: 'product', params: { id: 12, name: 'Fedner' } }">
    Produtos
  </router-link> -->
  <!-- <router-view /> -->
</template>

<script>
export default {
  name: "Navbar",
  props:["logo", "alt"]
};
</script>

<style scoped>
    #nav{
        background-color: #222;
        border-bottom: 4px solid #111;
        padding: 15px 50px;
        display: flex;
        justify-content: flex-end;
        align-items:center;
    }
   #nav #logo_url{
        margin: auto;
        margin-left: 0;
    }
    #logo{
        width:80px;
        height:40px;
    }
    #nav a{
        color: #FCBA03;
        text-decoration: none;
        margin: 12px;
        transition: .5s;
    }
    #nav a:hover{
        color: #FFF
    }
</style>