<template>
  <div class="other">
    <h1>Other projects</h1>
    <div class="wrapper">
      <div class="project">
        <Project
          title="Theater workshop"
          v-bind:picture="theatre"
          blabla="Made in 2021/2022"
        />
      </div>
      <div class="project">
        <Project
          title="E-Taverne club"
          v-bind:picture="etaverne"
          blabla="Made in 2021/2022"
        />
      </div>
      <div class="project">
        <Project
          title="Algorithmic Aesthetics First Project"
          v-bind:picture="eaone"
          blabla="Made in 2021"
        />
      </div>
      <div class="project">
        <Project
          title="Algorithmic Aesthetics Second Project"
          v-bind:picture="eatwo"
          blabla="Made in 2021"
        />
      </div>
      <div class="project">
        <Project
          title="Space Run 3D"
          v-bind:picture="spacerun"
          blabla="Made in 2022"
        />
      </div>
      <div class="project">
        <Project
          title="Workshop"
          v-bind:picture="workshop"
          blabla="Made in 2020"
        />
      </div>
      <div class="project">
        <Project
          title="Tale podcast"
          v-bind:picture="conte"
          blabla="Made in 2021"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Project from "./Project.vue";
export default {
  name: "Other",
  components: { Project },
  data() {
    return {
      theatre: require("../assets/projet/projet.png"),
      etaverne: require("../assets/projet/projet.png"),
      eaone: require("../assets/projet/projet.png"),
      eatwo: require("../assets/projet/projet.png"),
      spacerun: require("../assets/projet/projet.png"),
      workshop: require("../assets/projet/projet.png"),
      conte: require("../assets/projet/projet.png"),
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
