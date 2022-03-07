<template>
  <div id="app">
    <header>
      <a class="name" href="/">Clémence Voegelé</a>
      <nav>
        <a class="item" href="/">Home</a>
        <router-link class="item" to="/motiondesign">Motion Design</router-link>
        <router-link class="item" to="/graphism">Graphism</router-link>
        <router-link class="item" to="/audiovisual">Audiovisual</router-link>
        <router-link class="item" to="/3d">3D</router-link>
        <router-link class="item" to="/other">Other</router-link>
        <router-link class="item" to="/about">About</router-link>
      </nav>
    </header>
    <router-view />
    <footer>
      <p class="name">Clémence Voegelé | 2022 | All right reserved</p>
      <ul>
        <a href="https://www.instagram.com/poulpillow/"
          ><img id="one" class="item" src="./assets/instagram.png"
        /></a>
        <a href="https://www.facebook.com/poulpillow"
          ><img id="one" class="item" src="./assets/facebook.png"
        /></a>
        <a
          href="https://www.linkedin.com/in/cl%C3%A9mence-voegel%C3%A9-0455b122b/"
          ><img id="one" class="item" src="./assets/linkedin.png"
        /></a>
      </ul>
    </footer>
  </div>
</template>

<script>
export default {
  name: "App",
  computed: {
    username() {
      // We will see what `params` is shortly
      return this.$route.params.username;
    },
  },
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/");
    },
  },
};
</script>

<style>
#app {
  align-content: center;
}
header {
  background-color: lightblue;
  position: sticky;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  top: 0;
}
.name {
  margin: 0px 30px;
}
.item {
  display: inline-block;
  margin: 0px 30px;
}
.name:link {
  text-decoration: none;
  color: black;
}
.name:visited {
  text-decoration: none;
  color: black;
}
.name:hover {
  text-decoration: none;
  color: black;
}
.name:active {
  text-decoration: none;
  color: black;
}
.item:link {
  text-decoration: none;
  color: black;
}
.item:visited {
  text-decoration: none;
  color: black;
}
.item:hover {
  text-decoration: none;
  color: black;
}
.item:active {
  text-decoration: none;
  color: black;
}
footer {
  background-color: lightblue;

  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  top: 0;
}
* {
  font-family: Hubballi, Helvetica, sans-serif;
}
body {
  margin: 0;
}
#one {
  width: 25px;
  height: 25px;
}
</style>
