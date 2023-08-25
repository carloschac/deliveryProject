<template>
  <div class="container">
    <div class="row">
      <h1 class="text-center">Consulta de Gastos Mensais</h1>
    </div>
    <div class="row">
      <select name="" id="" class="form-control"></select>
    </div>

    <table class="table text-center">
      <thead>
        <tr>
          <th>Descrição</th>
          <th>Valor</th>
          <th>Parcelado</th>
          <th>Parcelas</th>
          <th>Data</th>
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
    carregarGastos(id) {
      // Chamar a API para deletar o mês do banco de dados
      axios
        .get(`http://localhost:3000/gastos/${id}`)
        .then((response) => {
          // Atualizar a lista de meses após a exclusão bem-sucedida

          console.log(response);
        })
        .catch((error) => {
          console.error('Erro na requisição:', error);
        });
    },
  },
};
</script>
