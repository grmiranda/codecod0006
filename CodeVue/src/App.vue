<template>
  <div>
  <!-- Aqui vai o navbar -->
  <nav class="navbar navbar-toggleable-sm fixed-top onavbar">
    <div class="container">
      <button @click="clicked" class="navbar-toggler navbar-toggler-right" type="button">
        <i class="fa fa-bars" aria-hidden="true"></i>
      </button>

      <div class="collapse navbar-collapse justify-content-center">
        <ul class="navbar-nav" style="width:100%;">
          <li class="nav-item active" style="width:100%;">
            <a class="nav-link" href="#"><p class="space">Home</p></a>
          </li>
          <li class="nav-item active" style="width:100%;">
            <a class="nav-link" href="#"><p class="space">Portifolio</p></a>
          </li>
          <li class="nav-item active" style="width:100%;">
            <a class="nav-link" href="#"><p class="space">Sobre</p></a>
          </li>
        </ul>
        </div>

        <img class="logo" src="./assets/empresaNome.png">

        <div class="collapse navbar-collapse justify-content-center">
        <ul class="navbar-nav" style="width:100%;">
          <li class="nav-item active" style="width:100%;">
            <a class="nav-link" href="#"><p class="space">Equipe</p></a>
          </li>
          <li class="nav-item active" style="width:100%;">
            <a class="nav-link" href="#"><p>Contato</p></a>
          </li>
          <li>
            <button class="btn btn-outline-primary azul my-2 my-sm-0" type="submit">Login</button>
          </li>
        </ul>
      </div>

      <b-collapse id="collapse1">
        <ul class="navbar-nav mr-auto mt-2 mt-md-0">
          <li class="nav-item active">
            <a class="nav-link" href="#"><p>Home</p></a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="#"><p>Portifolio</p></a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="#"><p>Sobre</p></a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="#"><p>Equipe</p></a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="#"><p>Contato</p></a>
          </li>
          <li class="nav-item active">
            <button class="btn btn-outline-primary azul my-2 my-sm-0" type="submit">Login</button>
          </li>
        </ul>
      </b-collapse>
    </div>
</nav>
  <div class="container-fluid padding">
    <Home></Home>
    <Sobre></Sobre>
    <Equipe></Equipe>
    <Contato></Contato>
  </div>
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
  },methods: {
    clicked() {
      this.$root.$emit("collapse::toggle", "collapse1");
    }
  }
}
</script>

<style lang="scss" scoped>
@media (min-width: 768px){
    .padding{
      padding-top:150px;
    }
    .onavbar{
      background-color: #EAEAE0;
      height:150px;
    }
    .logo{
        width: 30%;
        height: 60%;
    }
    .spaces{
        color: #3b91c9;
        padding-left: 25%;
        padding-right: 25%;
        text-align: center;
    }
}
@media (max-width: 767px){
    .logo{
        height:30px;
        padding-left: 33%;
        padding-right: 33%;
        margin-bottom: 10px;
        margin-top: 5px;
    }
    .onavbar{
      background-color: #EAEAE0;
    }
}
p{
    color: #3b91c9 !important;
}
.space{
  padding-left: 25%;
}
.btn{
  margin-right:25%;
}
.fa-bars{
  color: #3b91c9 !important;
}
body { padding-top: 70px; }
</style>
