<template>
  <div>
    <h1 class="text-center">Cadastro de Gastos Mensais</h1>

    <form @submit.prevent="adicionarMes">
      <div class="container">
        <div class="row">
          <div class="col-md-4 mb-3">
            <label class="form-label">Mês:</label>
            <select class="form-select" v-model="mesSelecionado">
              <option value="" selected></option>
              <option v-for="mes in meses" :key="mes.id" :value="mes.nome">
                {{ mes.nome }}
              </option>
            </select>
          </div>

          <div class="col-md-4 mb-3">
            <label class="form-label">Valor Inicial (Salário):</label>
            <div>
              <input
                class="form-input"
                type="number"
                v-model="valorInicial"
                required
              />
            </div>
          </div>
          <div class="col-md-4 mb-3">
            <label class="form-label">Ano de referência:</label>
            <div>
              <input
                class="form-input"
                type="text"
                v-model="anoReferencia"
                required
              />
            </div>
          </div>
          <div class="row">
            <div class="col-md-4">
              <button type="submit" class="btn btn-primary">
                Adicionar Mês
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<style scoped>
input {
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
      mesSelecionado: null,
      meses: [
        { id: 1, nome: 'Janeiro' },
        { id: 2, nome: 'Fevereiro' },
        { id: 3, nome: 'Março' },
        { id: 4, nome: 'Abril' },
        { id: 5, nome: 'Maio' },
        { id: 6, nome: 'Junho' },
        { id: 7, nome: 'Julho' },
        { id: 8, nome: 'Agosto' },
        { id: 9, nome: 'Setembro' },
        { id: 10, nome: 'Outubro' },
        { id: 11, nome: 'Novembro' },
        { id: 12, nome: 'Dezembro' },
      ],
      valorInicial: '',
      anoReferencia: '',
    };
  },
  methods: {
    adicionarMes() {
      const novoMes = {
        mes: this.mesSelecionado,
        valor_inicial: this.valorInicial,
        ano_referencia: this.anoReferencia,
      };

      console.log(novoMes);

      axios
        .post('http://localhost:3000/meses', novoMes) // Ajuste a rota conforme necessário
        .then((response) => {
          console.log(response.data); // Mensagem do servidor
          // Limpar os campos após a adição bem-sucedida (opcional)
          this.mesSelecionado = null;
          this.valorInicial = '';
          this.anoReferencia = '';
        })
        .catch((error) => {
          console.error(error);
          // Tratar erros (opcional)
        });
    },
  },
};
</script>
