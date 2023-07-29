<template>
  <div class="home">
    <h1>Bem-vindo à Página Inicial</h1>
    <p>Esta é a página inicial do nosso aplicativo.</p>
    <button @click="showMessage">Clique para mostrar uma mensagem</button>
    <p v-if="show">Essa é a mensagem!</p>
  </div>
</template>

<script>
export default {
  name: 'Home-Delivery',
  data() {
    return {
      show: false,
    };
  },
  methods: {
    showMessage() {
      this.show = true;
    },
  },
};
</script>

<style>
.home {
  text-align: center;
  margin-top: 50px;
}

button {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #3498db;
  color: #ffffff;
  border: none;
  cursor: pointer;
}

p {
  font-size: 18px;
  margin-top: 10px;
}
</style>
