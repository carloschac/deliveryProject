<template>
  <div class="container">
    <h1 class="text-center">Cadastro de Gastos Mensais</h1>

    <form>
      <div class="row">
        <div class="col-md-4 mb-3">
          <label class="form-label">Descrição:</label>
          <div>
            <input
              type="text"
              class="form-input inpt"
              v-model="descricao"
              required
            />
          </div>
        </div>
        <div class="col-md-4 mb-3">
          <label class="form-label">Valor:</label>
          <div class="col-12">
            <input
              type="number"
              class="form-input inpt"
              v-model="valor"
              required
            />
          </div>
        </div>
        <div class="col-md-4 mb-3">
          <label>Parcelado ?</label>
          <div>
            <span>Sim</span> <input type="checkbox" v-model="parcelado" />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4 mb-3">
          <label>Data de Lançamento:</label>
          <input type="date" class="inpt" v-model="data_lancamento" required />
        </div>
        <div class="col-md-4 mb-3" v-if="parcelado">
          <label>Parcelas:</label>
          <select class="form-select" v-model="parcelas">
            <option value="" disabled>Selecione o número de parcelas</option>
            <option v-for="i in 12" :key="i" :value="i">{{ i }}x</option>
          </select>
        </div>
        <div class="col-md-4 mb-3">
          <label>Mês:</label>
          <select class="form-select" v-model="mes_id" required>
            <option value="" disabled>Selecione um mês</option>
            <option v-for="mes in meses" :key="mes.id" :value="mes.id">
              {{ mes.mes }}
            </option>
          </select>
        </div>
      </div>

      <button class="btn btn-primary" type="submit" @click="adicionarGasto()">
        Adicionar Gasto
      </button>
    </form>
  </div>
</template>

<style scoped>
input.inpt {
  display: block;
  width: 100%;
  padding: 0.375rem 2.25rem 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  background-repeat: no-repeat;
  background-position: right 0.75rem center;
  background-size: 16px 12px;
  border: 1px solid #dee2e6;
  border-radius: 0.375rem;
}
</style>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      descricao: '',
      valor: '',
      parcelado: false,
      parcelas: null,
      data_lancamento: '',
      mes_id: '',
      meses: [], // Para armazenar os meses cadastrados
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
    adicionarGasto() {
      const novoGasto = {
        descricao: this.descricao,
        valor: this.valor,
        parcelado: this.parcelado,
        parcelas: this.parcelas,
        data_lancamento: this.data_lancamento,
        mes_id: this.mes_id,
      };
      axios.post('http://localhost:3000/gastos', novoGasto).then((response) => {
        console.log(response.data);
        console.log(novoGasto);
      });
    },
  },
};
</script>
