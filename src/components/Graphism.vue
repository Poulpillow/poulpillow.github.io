<template>
  <div class="graphism">
    <h1>Graphism</h1>
    <div class="wrapper">
      <div class="project">
        <Project title="Drawings" v-bind:picture="dessin" blabla="All time" />
      </div>
      <div class="project">
        <Project title="Comics" v-bind:picture="comics" blabla="All time" />
      </div>
      <div class="project">
        <Project
          title="Game Jam Color"
          v-bind:picture="gamejam"
          blabla="Made in 2022"
        />
      </div>
      <div class="project">
        <Project title="Glitch" v-bind:picture="glitch" blabla="Made in 2020" />
      </div>
      <div class="project">
        <Project
          title="Cartography"
          v-bind:picture="carto"
          blabla="Made in 2021"
        />
      </div>
      <div class="project">
        <Project
          title="Instagram account"
          v-bind:picture="insta"
          blabla="All time"
        />
      </div>
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
      insta: require("../assets/projet/projet.png"),
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
.project {
  margin: 10%;
}
h1 {
  margin-top: 3%;
}
* {
  text-align: center;
}
</style>
