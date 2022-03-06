<template>
  <div class="motiondesign">
    <h1>Motion Design</h1>
    <div class="wrapper">
      <div><Project title="Flipbook" v-bind:picture="flipbook" blabla="Made in 2019"/></div>
      <div><Project title="Mr BowTie" v-bind:picture="bowtie" blabla="Made in 2019"/></div>
      <div><Project title="Snake and Co" v-bind:picture="snake" blabla="Made in 2020"/></div>
      <div><Project title="GIF Gertie" v-bind:picture="gif" blabla="Made in 2021"/></div>
      <div><Project title="Totoro After Effects Animation" v-bind:picture="totoro" blabla="Made in 2021"/></div>
      <div><Project title="Un jour sur le Mékong" v-bind:picture="mekong" blabla="Made in 2022"/></div>
    </div>
  </div>
</template>

<script>
import Project from './Project.vue'

export default {
    name: "MotionDesign",
    components: { Project },
    data() {
      return {
        flipbook: require("../assets/projet/projet.png"),
        bowtie: require("../assets/projet/projet.png"),
        snake: require("../assets/projet/projet.png"),
        gif: require("../assets/projet/projet.png"),
        totoro: require("../assets/projet/projet.png"),
        mekong: require("../assets/projet/projet.png")
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
  background-color: lightblue;
}
</style>