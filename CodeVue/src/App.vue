<template>
  <!-- Aqui vai o navbar -->
  <div class="container-fluid">
    <Home></Home>
    <Sobre></Sobre>
    <Equipe></Equipe>
    <Contato></Contato>
  </div>
</template>

<script>
import Equipe from './components/landpage/Equipe.vue'
import Home from './components/landpage/Home.vue'
import Sobre from './components/landpage/Sobre.vue'
import Contato from './components/landpage/Contato.vue'
export default {
  components: {
    Equipe,
    Home,
    Sobre,
    Contato
  }
}
</script>

<style>
</style>
