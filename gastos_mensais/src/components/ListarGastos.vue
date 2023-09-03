<template>
  <div class="container">
    <div class="row mt-3">
      <h1 class="text-center">Consulta de Gastos Mensais</h1>
    </div>
    <div class="row mt-3">
      <div class="col-12 d-flex justify-content-center">
        <div class="col-6">
          <select
            class="form-select"
            v-model="mesSelecionado"
            @change="carregarGastos(mesSelecionado)"
          >
            <option value="" selected>Selecione um mês</option>
            <option v-for="mes in meses" :key="mes.ID" :value="mes.ID">
              {{ mes.mes }}
            </option>
          </select>
        </div>
      </div>
    </div>
    <div class="row mt-3" v-if="mesSelecionado !== null">
      <table class="table text-center">
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Valor</th>
            <th>Parcelado</th>
            <th>Parcelas</th>
            <th>Data</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="gasto in gastos" :key="gasto.ID">
            <td>{{ gasto.descricao }}</td>
            <td>{{ gasto.valor }}</td>
            <td>{{ gasto.parcelado === 1 ? 'Sim' : 'Não' }}</td>
            <td>{{ gasto.parcelado === 1 ? gasto.parcelas : 'Nenhuma' }}</td>
            <td>{{ formatarData(gasto.data_lancamento) }}</td>
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
  </div>
</template>

<script>
import axios from 'axios';
import { format } from 'date-fns';

export default {
  data() {
    return {
      meses: [], // Array para armazenar os meses do banco de dados
      mesSelecionado: null,
      gastos: [],
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
          console.log(response.data);
        })
        .catch((error) => {
          console.error('Erro na requisição:', error);
        });
    },
    carregarGastos(id) {
      if (!id) {
        return; // Evitar requisição se nenhum mês estiver selecionado
      }

      // Chamar a API para obter os gastos relacionados ao mês selecionado
      axios
        .get(`http://localhost:3000/gastos/${id}`)
        .then((response) => {
          // Atualizar os gastos do mês selecionado
          this.gastos = response.data;
          console.log(response.data);
        })
        .catch((error) => {
          console.error('Erro na requisição:', error);
        });
    },
    formatarData(data) {
      return format(new Date(data), 'dd/MM/yyyy');
    },
  },
};
</script>
