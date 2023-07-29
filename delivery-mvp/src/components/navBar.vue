<template>
  <header class="header bg-body-tertiary">
    <div class="container">
      <div class="row">
        <nav class="col-12 navbar">
          <a href="/">
            <img src="../assets/img/3.png" alt="logo" height="60px" />
          </a>
          <ul class="navbar-nav d-flex flex-row justify-content-between gap-1">
            <li>
              <a href="#"><button class="btn btn-primary">Login</button></a>
            </li>
            <li>
              <a href="#"><button class="btn btn-primary">Cadastro</button></a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  // Lógica do componente, se necessário
};
</script>

<style>
* {
  font-family: 'Lato', sans-serif;
  --titulo-secao: #dc7860;
  --texto-secao: #506959;
}

.header {
  background: #506959 !important;
}

footer {
  background: #506959 !important;
  color: #ffffff;
}

footer nav a {
  color: #ffffff !important;
}

footer nav a:hover {
  color: #dc7860;
}

header a {
  text-decoration: none;
  color: black;
}

header .nav-link {
  text-decoration: none;
  color: black;
}

header button {
  background-color: #506959 !important;
  color: #ffffff;

  text-transform: uppercase;
  border: none !important;
}

.header--active {
  transition: 0.3s ease-in-out;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 50;
  -webkit-box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.25);
  z-index: 99999;
}

/* ##################### FIM DOS ESTILOS PADRÕES */
</style>
