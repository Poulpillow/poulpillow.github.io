<template>
  <div class="graphism">
    <h1>Graphism</h1>
    <div class="wrapper">
      <div><Project title="Dessins" v-bind:picture="dessin" blabla="All time"/></div>
      <div><Project title="Mini Comics" v-bind:picture="comics" blabla="All time"/></div>
      <div><Project title="Game Jam Color" v-bind:picture="gamejam" blabla="Made in 2022"/></div>
      <div><Project title="Glitch" v-bind:picture="glitch" blabla="Made in 2020"/></div>
      <div><Project title="Cartographie" v-bind:picture="carto" blabla="Made in 2021"/></div>
      <div><Project title="Compte Instagram" v-bind:picture="insta" blabla="All time"/></div>
    </div>
  </div>
</template>

<script>
import Project from "./Project.vue";
export default {
    name: "Graphism",
    components: { Project },
    data() {
      return {
        dessin: require("../assets/projet/projet.png"),
        comics: require("../assets/projet/projet.png"),
        gamejam: require("../assets/projet/projet.png"),
        glitch: require("../assets/projet/projet.png"),
        carto: require("../assets/projet/projet.png"),
        insta: require("../assets/projet/projet.png")
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
  background-color: lightgreen;
}
</style>