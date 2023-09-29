<template>
  <Banner />
  <div class="main-container">
    <h1>Cadastre-se</h1>
    <CadastrarForm />
  </div>
</template>

<script>
import Banner from "../components/Banner.vue";
import CadastrarForm from "../components/CadastrarForm.vue"
export default {
  name: "Home",
  components: {
    Banner,
    CadastrarForm
  }

};
</script>

<style></style>