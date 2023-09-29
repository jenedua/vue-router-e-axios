<template>
  <div>
    <!-- Elemento para exibir mensagens de erro -->
    <div v-if="erroServidor" class="erro-servidor">
      {{ erroServidor }}
    </div>
    <div v-else-if="sucessoCadastro" class="sucesso-cadastro">
      Cadastro realizado com sucesso!
    </div>
    <div>
      <form id="cadastro-form" @submit.prevent="cadastrarPessoa">
        <div class="input-container">
          <label for="nome">Nome do Cliente</label>
          <input
            type="text"
            name="nome"
            id="nome"
            v-model="nome"
            placeholder="Digite o seu nome"
          />
        </div>
        <div class="input-container">
          <label for="cpf">CPF do Cliente</label>
          <input
            type="text"
            name="cpf"
            id="cpf"
            v-model="cpf"
            placeholder="Digite o seu CPF"
          />
        </div>
        <div class="input-container">
          <label for="dataNascimento">Data Nascimento do Cliente</label>
          <input
            type="text"
            name="dataNascimento"
            id="dataNascimento"
            v-model="dataNascimento"
            placeholder="Digite o sua data do nascimento"
          />
        </div>
        <div class="input-container">
          <input type="submit" class="submit-btn" value="Enviar" />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
// Função para validar CPF
function validarCPF(cpf) {
  cpf = cpf.replace(/[^\d]+/g, ""); // Remove caracteres não numéricos

  if (cpf.length !== 11) {
    return false; // CPF deve ter 11 dígitos
  }

  // Verificação do CPF
  let soma = 0;
  for (let i = 0; i < 9; i++) {
    soma += parseInt(cpf.charAt(i)) * (10 - i);
  }

  let resto = 11 - (soma % 11);
  if (resto === 10 || resto === 11) {
    resto = 0;
  }

  if (resto !== parseInt(cpf.charAt(9))) {
    return false;
  }

  soma = 0;
  for (let i = 0; i < 10; i++) {
    soma += parseInt(cpf.charAt(i)) * (11 - i);
  }

  resto = 11 - (soma % 11);
  if (resto === 10 || resto === 11) {
    resto = 0;
  }

  if (resto !== parseInt(cpf.charAt(10))) {
    return false;
  }

  return true;
}

export default {
  name: "CadastrarForm",
  data() {
    return {
      nome: "",
      cpf: "",
      dataNascimento: "",
      erroServidor: "", // Inicialmente, nenhum erro do servidor
    };
  },
  methods: {
    cadastrarPessoa() {
      // Verificar validações e enviar para o servidor
      if (!this.nome) {
        this.erroServidor = "Por favor, preencha o campo Nome.";
        return;
      }
      if (!validarCPF(this.cpf)) {
        this.erroServidor = "CPF inválido.";
        return;
      }

      // Limpar erros do servidor
      this.erroServidor = "";
      this.sucessoCadastro = false; // Redefine para false
      // Enviar os dados para a API para cadastro
      axios
        .post("http://localhost:3000/pessoas", {
          nome: this.nome,
          cpf: this.cpf,
          dataNascimento: this.dataNascimento,
        })
        .then((response) => {
          // Lidar com a resposta, se necessário
          console.log("Cadastro realizado com sucesso", response.data);
          // Limpar o formulário após o cadastro
          this.nome = "";
          this.cpf = "";
          this.dataNascimento = "";
          // Definir sucessoCadastro como true após o sucesso
          this.sucessoCadastro = true;
        })
        .catch((error) => {
          // Lidar com erros do servidor
          this.erroServidor =
            "Erro ao cadastrar pessoa. Por favor, tente novamente.";
          console.error("Erro ao cadastrar pessoa", error);
        });
    },
  },
};
</script>
<style scoped>
#cadastro-form {
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
/* Estilo para o elemento de mensagem de erro */
.erro-servidor {
  background-color: #ffcccc; /* Cor de fundo vermelha */
  color: #ff0000; /* Cor do texto vermelha */
  padding: 10px; /* Espaçamento interno */
  margin: 10px 0; /* Espaçamento externo (acima e abaixo) */
  border: 1px solid #ff0000; /* Borda vermelha */
  border-radius: 5px; /* Cantos arredondados */
  text-align: center; /* Alinhar ao centro */
}

/* Estilo para o elemento de mensagem de sucesso */
.sucesso-cadastro {
  background-color: #ccffcc; /* Cor de fundo verde */
  color: #009900; /* Cor do texto verde */
  padding: 10px; /* Espaçamento interno */
  margin: 10px 0; /* Espaçamento externo (acima e abaixo) */
  border: 1px solid #009900; /* Borda verde */
  border-radius: 5px; /* Cantos arredondados */
  text-align: center; /* Alinhar ao centro */
}

</style>