<template>
  <div class="project">
    <div class="textWithBlurredBg">
      <img
        id="show-modal"
        @click="showModal = true"
        v-bind:src="picture"
        v-on:click="redirect_to_login"
      />
      <h2>{{ title }}</h2>
    </div>

    <Teleport to="body">
      <!-- use the modal component, pass in the prop -->
      <modal :show="showModal" @close="showModal = false" :msg="blabla" :video="vid" :image="img" :audio="aud" :cachevid="hidvid" :cacheimg="hidimg" :cacheaud="hidaud" :name="nom" :link="lien" :cachelink="hidlink">
        <template #header>
          <h2>{{ title }}</h2>
          <h4>{{ subtitle }}</h4>
        </template>
      </modal>
      <br>
      <br>
    </Teleport>
  </div>
</template>

<script>
import Modal from "./Modal.vue";

export default {
  name: "Project",
  components: {
    Modal,
  },
  data() {
    return {
      showModal: false,
    };
  },
  props: {
    title: String,
    subtitle: String,
    picture: { type: String, default: require("../assets/no_picture.jpeg") },
    blabla: String,
    vid: String,
    img: String,
    aud: String,
    hidimg: Boolean,
    hidvid: Boolean,
    hidaud: Boolean,
    lien: String,
    nom: String,
    hidlink: String
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  width: 50%;
  height: 50%;
}
.textWithBlurredBg {
  width: 300px;
  height: auto;
  display: inline-block;
  position: relative;
  transition: 0.5s;
  margin: 4px;
}

.textWithBlurredBg img {
  width: 100%;
  height: 100%;
  transition: 0.3s;
  border-radius: 4px;
}

.textWithBlurredBg:hover img {
  filter: brightness(60%);
  box-shadow: 0 0 16px white;
}

.textWithBlurredBg :not(img) {
  position: absolute;
  z-index: 1;
  top: 30%;
  width: 100%;
  text-align: center;
  color: #fff;
  opacity: 0;
  transition: 0.3s;
}

.textWithBlurredBg:hover :not(img) {
  opacity: 1;
}
h2 {
  text-align: center;
  color: #074b46;
}
h4 {
  text-align: center;
  color: #76a29f;
}
</style>
