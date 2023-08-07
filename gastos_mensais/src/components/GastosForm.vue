<template>
  <div>
    <h1>Cadastro de Gastos Mensais</h1>

    <form @submit.prevent="adicionarGasto">
      <div>
        <label>Descrição:</label>
        <input type="text" v-model="descricao" required />
      </div>
      <div>
        <label>Valor:</label>
        <input type="number" v-model="valor" required />
      </div>
      <div>
        <label>Parcelado:</label>
        <input type="checkbox" v-model="parcelado" />
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
