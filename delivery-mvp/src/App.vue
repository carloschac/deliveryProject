<template>
  <div id="app">
    <navBar />
    <router-view />
    <!-- Use o componente router-view para renderizar as views -->
  </div>
</template>

<script>
import navBar from './components/navBar.vue';

export default {
  name: 'App',
  components: {
    navBar,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
