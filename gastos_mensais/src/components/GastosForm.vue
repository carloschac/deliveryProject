<template>
  <div class="container">
    <h1 class="text-center">Cadastro de Gastos Mensais</h1>

    <form @submit.prevent="adicionarGasto">
      <div class="row">
        <div class="col-md-4 mb-3">
          <label class="form-label">Descrição:</label>
          <div>
            <input
              type="text"
              class="form-input"
              v-model="descricao"
              required
            />
          </div>
        </div>
        <div class="col-md-4 mb-3">
          <label class="form-label">Valor:</label>
          <div>
            <input type="number" class="form-input" v-model="valor" required />
          </div>
        </div>
        <div class="col-md-4 mb-3">
          <label class="form-label">Parcelado:</label>
          <div>
            <select name="" class="form-select" v-model="parcelado"></select>
          </div>
        </div>
      </div>
      <div v-if="parcelado">
        <label>Parcelas:</label>
        <input type="number" v-model="parcelas" required />
      </div>
      <div>
        <label>Data de Lançamento:</label>
        <input type="date" v-model="dataLancamento" required />
      </div>
      <div>
        <label>Valor Inicial (Salário):</label>
        <input type="number" v-model="valorInicial" required />
      </div>
      <button type="submit">Adicionar Gasto</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      descricao: '',
      valor: '',
      parcelado: false,
      parcelas: null,
      dataLancamento: '',
      valorInicial: '',
    };
  },
  methods: {
    adicionarGasto() {
      // Implementar a lógica para enviar os dados para o back-end e salvar no banco de dados
      // Você pode usar uma requisição HTTP (axios) para enviar os dados para o servidor Node.js
    },
  },
};
</script>
