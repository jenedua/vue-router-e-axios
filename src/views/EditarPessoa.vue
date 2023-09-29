<template>
  <div class="editar-pessoa-container">
    <h1>Editar Pessoa</h1>
    <form @submit.prevent="editarPessoa">
      <div class="form-group">
        <label for="nome">Nome</label>
        <input type="text" id="nome" v-model="pessoaEditada.nome" />
      </div>
      <div class="form-group">
        <label for="cpf">CPF</label>
        <input type="text" id="cpf" v-model="pessoaEditada.cpf" />
      </div>
      <div class="form-group">
        <label for="dataNascimento">Data de Nascimento</label>
        <input
          type="text"
          id="dataNascimento"
          v-model="pessoaEditada.dataNascimento"
        />
      </div>
      <div class="form-group">
        <button type="submit">Salvar</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      pessoaEditada: {}, // Objeto para armazenar os dados da pessoa sendo editada
    };
  },
  methods: {
    editarPessoa() {
      // Envie os dados editados para o servidor usando uma solicitação PUT ou PATCH
      axios
        .put(
          `http://localhost:3000/pessoas/${this.pessoaEditada.id}`,
          this.pessoaEditada
        )
        .then((response) => {
          console.log("Pessoa editada com sucesso", response.data);
          // Redirecione de volta para a lista de pessoas após a edição
          this.$router.push("/pessoas");
        })
        .catch((error) => {
          console.error("Erro ao editar pessoa", error);
        });
    },
  },
  created() {
    // Recupere os dados da pessoa a ser editada com base em um parâmetro de rota (por exemplo, /editar-pessoa/:id)
    const pessoaId = this.$route.params.id;
    axios
      .get(`http://localhost:3000/pessoas/${pessoaId}`)
      .then((response) => {
        this.pessoaEditada = response.data;
      })
      .catch((error) => {
        console.error("Erro ao carregar dados da pessoa para edição", error);
      });
  },
};
</script>

<style scoped>
/* Estilos para a página de edição */
.editar-pessoa-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  font-size: 24px;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input[type="text"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button[type="submit"] {
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button[type="submit"]:hover {
  background-color: #0056b3;
}
</style>
