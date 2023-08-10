<template>
  <div class="container">
    <h1 class="text-center">Consulta de Gastos Mensais</h1>

    <table class="table text-center">
      <thead>
        <tr>
          <th>Mês</th>
          <th>Valor Inicial</th>
          <th>Ano de Referência</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="mes in meses" :key="mes.id">
          <td>{{ mes.mes }}</td>
          <td>{{ mes.valor_inicial }}</td>
          <td>{{ mes.ano_referencia }}</td>
          <td class="d-flex justify-content-center gap-2">
            <!-- <button class="btn btn-primary" @click="editarMes(mes.id)">
              Editar
            </button> -->
            <button class="btn btn-danger" @click="deletarMeses(mes.id)">
              Excluir
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      meses: [], // Array para armazenar os meses do banco de dados
    };
  },
  mounted() {
    this.carregarMeses();
  },
  methods: {
    carregarMeses() {
      // Chamar a API para obter a lista de meses do banco de dados
      axios
        .get('http://localhost:3000/meses')
        .then((response) => {
          this.meses = response.data;
        })
        .catch((error) => {
          console.error('Erro na requisição:', error);
        });
    },
    deletarMeses(id) {
      // Chamar a API para deletar o mês do banco de dados
      axios
        .delete(`http://localhost:3000/meses/${id}`)
        .then(() => {
          // Atualizar a lista de meses após a exclusão bem-sucedida

          this.carregarMeses();
        })
        .catch((error) => {
          console.error('Erro na requisição:', error);
        });
    },
  },
};
</script>
