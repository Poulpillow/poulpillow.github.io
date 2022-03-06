<template>
  <div id="app">
    <header>
      <a href="/">Clémence Voegelé</a>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><router-link to="/motiondesign">Motion Design</router-link></li>
          <li><router-link to="/graphism">Graphisme</router-link></li>
          <li><router-link to="/audiovisual">Audiovisuel</router-link></li>
          <li><router-link to="/3d">3D</router-link></li>
          <li><router-link to="/other">Autres</router-link></li>
          <li><router-link to="/about">About</router-link></li>
        </ul>
      </nav>
    </header>
    <router-view/>
    <footer>
      Clémence Voegelé | 2022 | All right reserved
      <ul>
        <a href="https://www.instagram.com/poulpillow/">Instagram</a>
        <a href="https://www.facebook.com/poulpillow">Facebook</a>
        <a href="https://www.linkedin.com/in/cl%C3%A9mence-voegel%C3%A9-0455b122b/">LinkedIn</a>
      </ul> 
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    username() {
      // We will see what `params` is shortly
      return this.$route.params.username
    }
  },
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    }
  }
}
</script>


<style>
#app {
  align-content: center;
}
ul {
  list-style-type: none;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
}
header {
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: lightsteelblue;
}
footer {
  background-color: lightgoldenrodyellow;
}
* {
  font-family: Hubballi, Helvetica, sans-serif;
}
</style>
