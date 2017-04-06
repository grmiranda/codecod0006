<template>
    <div class="container-fluid">
  <div class="row conteudo">
    <div class="col centro"> <!-- Alterar acionador para scrollspy -->
      <h2>Equipe</h2>
    </div>
  </div>
  <div class="row fix-height">
    <div v-for="membro of equipe" class="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 centro conteudo">
        <img class="redondo" :src="membro.img">
        <h4>{{membro.nome}}</h4>
        <p>{{membro.descricao}}</p>
    </div>
  </div>
</div>
</template>

<script>
export default {
    data(){
        return {
            equipe:[{
                img: 'http://placehold.it/200x200',
                nome: 'Nome do Cidadão',
                descricao: 'Descrição do cidadão'
            },{
                img: 'http://placehold.it/200x200',
                nome: 'Nome do Cidadão',
                descricao: 'Descrição do cidadão'
            },{
                img: 'http://placehold.it/200x200',
                nome: 'Nome do Cidadão',
                descricao: 'Descrição do cidadão'
            },{
                img: 'http://placehold.it/200x200',
                nome: 'Nome do Cidadão',
                descricao: 'Descrição do cidadão'
            },{
                img: 'http://placehold.it/200x200',
                nome: 'Nome do Cidadão',
                descricao: 'Descrição do cidadão'
            },{
                img: 'http://placehold.it/200x200',
                nome: 'Nome do Cidadão',
                descricao: 'Descrição do cidadão'
            }
            ]
        }
    }
}
</script>

<style scoped>
.redondo{
    height: 200px;
    width: 200px;
    border-radius: 50%;
}
img{
    left: 25%;
}
.fix-height{
    min-height: fill;
}
.centro{
    text-align: center;
}
.conteudo{
    padding-top: 30px;
}
h4{
    padding-top: 30px;
}
</style>