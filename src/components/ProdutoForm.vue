<template>
  <div>
    <p>component messagem</p>
    <div>
      <form id="produto-form" @submit.prevent="cadastrarProduto">
        <div class="input-container">
          <label for="nome">Descrição</label>
          <input
            type="text"
            name="descricao"
            id="descricao"
            v-model="descricao"
            placeholder="Digite a descricao"
          />
        </div>
        <div class="input-container">
          <label for="cpf">Valor</label>
          <input
            type="text"
            name="valor"
            id="valor"
            v-model="valor"
            placeholder="Digite o valor"
          />
        </div>

        <div class="input-container">
          <input
            type="submit"
            @click="enviarFormulario"
            class="submit-btn"
            value="Enviar"
          />
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "ProdutoForm",
  data() {
    return {
      descricao: "",
      valor: "",
    };
  },
  methods: {
    cadastrarProduto() {
      // Enviar os dados para a API para cadastro
      axios
        .post("http://localhost:3000/produtos", {
          descricao: this.descricao,
          valor: this.valor,
        })
        .then((response) => {
          // Lidar com a resposta, se necessário
          console.log(
            " Produto Cadastrado realizado com sucesso",
            response.data
          );
          // Limpar o formulário após o cadastro
          this.descricao = "";
          this.valor = "";
          
        })
        .catch((error) => {
          // Lidar com erros, se houver
          console.error("Erro ao cadastrar pessoa", error);
        });
        this.$emit("formulario-enviado");
    },
    // enviarFormulario() {
    //   // Lógica para enviar o formulário

    //   // Emite um evento para notificar o componente pai (Product.vue)
    //   this.$emit("formulario-enviado");
    // },
  },
};
</script>
<style scoped>
#produto-form {
  max-width: 400px;
  margin: 0 auto;
}
.input-container {
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
}
label {
  font-weight: bold;
  margin-bottom: 10px;
  color: #222;
  padding: 5px 10px;
  border-left: 4px solid#FCBA03;
}
input,
select {
  padding: 5px 10px;
  width: 300px;
}
.submit-btn {
  background-color: #222;
  color: #fcba03;
  font-weight: bold;
  border: 2px solid #222;
  padding: 10px;
  font-size: 16px;
  margin: 0 auto;
  cursor: pointer;
  transition: 0.5s;
}
.submit-btn:hover {
  background-color: transparent;
  color: #222;
}
</style>