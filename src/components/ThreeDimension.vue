<template>
  <div class="threedimension">
    <h1>3D</h1>
    <div class="wrapper">
      <div><Project title="3D Project" v-bind:picture="scene" blabla="Made in 2021"/></div>
      <div><Project title="SantIMAC" v-bind:picture="santimac" blabla="Made in 2022"/></div>
    </div>
  </div>
</template>

<script>
import Project from "./Project.vue";
export default {
    name: "ThreeDimension",
    components: { Project },
    data() {
      return {
        scene: require("../assets/projet/projet.png"),
        santimac: require("../assets/projet/projet.png")
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
  background-color: lightcoral;
}
</style>