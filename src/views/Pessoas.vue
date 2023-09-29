<template>
   <Banner />
  <div class="main-container">
    <h1>lista de Pessoas</h1>
    <div id="table">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>CPF</th>
            <th>Data Nascimento</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="pessoa in posts" :key="pessoa.id">
            <td>{{ pessoa.id }}</td>
            <td>{{ pessoa.nome }}</td>
            <td>{{ pessoa.cpf }}</td>
            <td>{{ pessoa.dataNascimento }}</td>
            <td>
              <!-- Botões de ação -->
              <button @click="editarPessoa(pessoa.id)">Editar</button>
              <button @click="excluirPessoa(pessoa.id)">Excluir</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import Banner from "../components/Banner.vue";

export default {
   components: {
    Banner,
   // ProdutoForm,
  
  },
  data() {
    return {
      posts: [], // A propriedade 'posts' deve ser definida aqui, não 'post'
    };
  },
  mounted() {
    this.carregarPessoas();
  },
  methods: {
    carregarPessoas() {
      axios
        .get("http://127.0.0.1:3000/pessoas")
        .then((response) => {
          this.posts = response.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    editarPessoa(id) {
      // Implemente a lógica para edição aqui
       this.$router.push({ name: 'EditarPessoa', params: { id } });
      // Você pode, por exemplo, navegar para uma página de edição
      console.log("Editar pessoa:", id);
    },
    excluirPessoa(id) {
      // Implemente a lógica para exclusão aqui
      // Por exemplo, enviar uma solicitação de exclusão para o servidor
      axios
        .delete(`http://127.0.0.1:3000/pessoas/${id}`)
        .then(() => {
          // Recarregue a lista após a exclusão bem-sucedida
          this.carregarPessoas();
        })
        .catch((error) => {
          console.error("Erro ao excluir pessoa:", error);
        });
    },
  },
};
</script>
<style scoped>
/* Estilo para a tabela */
table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  font-family: Arial, sans-serif;
  font-size: 14px;
}

/* Estilo para o cabeçalho da tabela */
table th {
  background-color: #333;
  color: #fff;
  padding: 10px;
  text-align: left;
}

/* Estilo para as células do cabeçalho */
table th:first-child {
  border-top-left-radius: 5px;
}

table th:last-child {
  border-top-right-radius: 5px;
}

/* Estilo para as células de dados */
table td {
  border: 1px solid #ccc;
  padding: 10px;
}

/* Estilo para as linhas pares */
table tr:nth-child(even) {
  background-color: #f2f2f2;
}

/* Estilo para as linhas ímpares */
table tr:nth-child(odd) {
  background-color: #fff;
}

/* Estilo quando o mouse passa sobre as linhas */
table tr:hover {
  background-color: #ddd;
}

/* Estilo para células de dados numéricos */
table td.numeric {
  text-align: right;
}

/* Estilo para células de dados de ação (por exemplo, botões de edição/exclusão) */
table td.action {
  text-align: center;
}

/* Estilo para links em células de ação */
table td.action a {
  text-decoration: none;
  color: #007bff;
}

/* Estilo para botões em células de ação */
table td.action button {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
}

/* Estilo para botões em células de ação quando o mouse passa sobre eles */
table td.action button:hover {
  background-color: #0056b3;
}
/* Estilos para os botões de ação */
button {
  padding: 5px 10px;
  margin-right: 5px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
}
</style>