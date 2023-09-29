<template>
  <div id="main-banner">
    <h1>Realizar o seu Cadastro</h1>
  </div>
</template>

<script>
export default {
  name: "Banner",
};
</script>

<style scoped>
    #main-banner{
        background-image: url('/img/banner.jpeg');
        background-position: 0 -50px;
        background-size: cover;
        height: 400px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }
    #main-banner h1{
        color: #fff;
        text-align: center;
        font-size: 60px;
        background-color: #222;
        padding: 20px 40px;
    }
</style>