<template>
  <Banner />
  <div class="main-container">
    <!-- <h1>Cadastro do Produto</h1> -->
  </div>
  <ListaProdutos />
  <!-- <ProdutoForm
  <ProdutoForm v-if="!mostrarLista" @formulario-enviado="mostrarListaProdutos"/>
  <ListaProdutos v-else /> -->
</template>
<script>
import Banner from "../components/Banner.vue";
import ListaProdutos from "../components/ListaProdutos.vue";
//import ProdutoForm from "../components/ProdutoForm.vue";
export default {
  name: "Product",
  components: {
    Banner,
   // ProdutoForm,
    ListaProdutos,
  },
  // data() {
  //   return {
  //     mostrarLista: false // Inicialmente, oculte a lista
  //   };
  // },
};
</script>