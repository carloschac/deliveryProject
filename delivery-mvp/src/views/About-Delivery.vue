<template>
  <section class="sobre-nos margin-padrao" id="sobre-nos">
    <div class="container">
      <div class="row card-sobre-esquerda p-0">
        <div class="col-6 section-sobre-img p-0">
          <img src="/assets/img/clique.png" alt="Sobre comida" />
        </div>
        <div
          class="col-6 d-grid align-content-center align-items-center text-lg-start text-center p-lg-5 p-4"
        >
          <h1 class="text-center pb-3">Sobre nós</h1>
          <p>
            Bem-vindo(a) ao iFit, a plataforma de delivery de comida fitness e
            saudável que oferece praticidade e qualidade para sua alimentação.
            Nossa empresa foi fundada com o objetivo de atender pessoas que
            desejam uma alimentação mais saudável, sem abrir mão do sabor.
            Trabalhamos com os melhores prestadores de serviço para oferecer
            opções deliciosas e nutritivas em sua casa ou trabalho.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'About-Delivery',
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
