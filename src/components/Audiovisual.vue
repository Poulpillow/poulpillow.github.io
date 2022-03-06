<template>
  <div class="audiovisual">
    <h1>Audiovisual</h1>
    <div class="wrapper">
      <div><Project title="Pub Anglais" v-bind:picture="pub" blabla="Made in 2017"/></div>
      <div><Project title="Porte-à-porte" v-bind:picture="porteaporte" blabla="Made in 2020"/></div>
      <div><Project title="Sale temps pour Johnny" v-bind:picture="johnny" blabla="Made in 2021"/></div>
      <div><Project title="Installation en cours ..." v-bind:picture="installation" blabla="Made in 2020"/></div>
      <div><Project title="Anxiété" v-bind:picture="anxiete" blabla="Made in 2020"/></div>
      <div><Project title="20 Janvier" v-bind:picture="janvier" blabla="Made in 2021"/></div>
    </div>
  </div>
</template>

<script>
import Project from "./Project.vue";
export default {
    name: "Audiovisual",
    components: { Project },
    data() {
      return {
        pub: require("../assets/projet/projet.png"),
        porteaporte: require("../assets/projet/projet.png"),
        johnny: require("../assets/projet/projet.png"),
        installation: require("../assets/projet/projet.png"),
        anxiete: require("../assets/projet/projet.png"),
        janvier: require("../assets/projet/projet.png")
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
*{
  background-color: lightyellow;
}
</style>