<template>
  <Banner />
  <div class="main-container">
    <h1>Lista dos Pedidos</h1>
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Cliente</th>
            <th>DataEmissão</th>
            <th>ValorTotal</th>
          </tr>
        </thead>
        <tbody>
          <!-- <tr v-for="pedido in posts" :key="pedido.id"> -->
          <tr v-for="pedido in posts" :key="pedido.id">
            <td>{{ pedido.id }}</td>
            <td>{{ pedido.cliente.nome }}</td>
            <td>{{ pedido.dataEmissao }}</td>
            <td>{{ pedido.valorTotal }}</td>
          </tr>
          <!-- Tabela aninhada para os itens do pedido -->
          <tr>
            <td colspan="4">
              <table>
                <thead>
                  <tr>
                    <th>ID do Item</th>
                    <th>Produto</th>
                    <th>Valor</th>
                    <th>Quantidade</th>
                    <th>Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="pedido in posts" :key="pedido.id">
                    <!-- Use um loop v-for para iterar sobre os itens do pedido -->
                    <td colspan="5">
                      <table>
                        <tbody>
                          <tr v-for="item in pedido.itens" :key="item.id">
                            <td>{{ item.id }}</td>
                            <td>{{ item.produto.descricao }}</td>
                            <td>{{ item.valor }}</td>
                            <td>{{ item.quantidade }}</td>
                            <td>{{ item.subtotal }}</td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          <!-- Fim da tabela aninhada -->
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
    axios
      .get("http://127.0.0.1:3000/pedidos")
      .then((response) => {
        // Atribua os dados da resposta à propriedade 'posts'
        this.posts = response.data;
        console.log(this.posts);
      })
      .catch((error) => {
        console.error(error);
      });
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
</style>