<template>
  <div>
    <Header :title="pageTitle" />
    <!-- O formulário e outros componentes da sua aplicação aqui -->
    <router-view></router-view>
  </div>
</template>

<script>
import axios from 'axios';
import Header from '@/components/layout/Comp_Header.vue';

export default {
  components: {
    Header,
  },
  data() {
    return {
      pageTitle: 'Página Inicial',
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
      // Dados do gasto a serem enviados para o back-end
      const gasto = {
        descricao: this.descricao,
        valor: this.valor,
        parcelado: this.parcelado,
        parcelas: this.parcelado ? this.parcelas : null,
        data_lancamento: this.dataLancamento,
        valor_inicial: this.valorInicial,
      };

      // Enviar os dados para o back-end usando o método POST do Axios
      axios
        .post('http://localhost:3000/gastos', gasto)
        .then((response) => {
          console.log(response.data); // Resposta do servidor
          // Limpar os campos após o cadastro bem-sucedido (opcional)
          this.descricao = '';
          this.valor = '';
          this.parcelado = false;
          this.parcelas = null;
          this.dataLancamento = '';
          this.valorInicial = '';
        })
        .catch((error) => {
          console.error(error);
          // Tratar erros (opcional)
        });
    },
  },
};
</script>
