<template>
  <div class="project">
    <div class="textWithBlurredBg">    
      <img id="show-modal" @click="showModal = true" v-bind:src="picture" v-on:click="redirect_to_login" />
      <h2>{{title}}</h2>
    </div>

    <Teleport to="body">
      <!-- use the modal component, pass in the prop -->
      <modal :show="showModal" @close="showModal = false" :msg="blabla">
        <template #header>
          <h3>{{title}}</h3>
        </template>
      </modal>
    </Teleport>
  </div>
</template>

<script>
import Modal from './Modal.vue'

export default {
  name: 'Project',
  components: {
    Modal
  },
  data() {
    return {
      showModal: false
    }
  },
  props: {
    title: String,
    picture: {type: String, default:require("../assets/no_picture.jpeg")},
    blabla: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  width: 50%;
  height: 50%;
}
.textWithBlurredBg{
    width:300px;
    height:auto;
    display:inline-block;
    position:relative;
    transition:.5s;
    margin:4px;
  }
  
  .textWithBlurredBg img{
    width:100%;
    height:100%;
    transition:.3s;
    border-radius:4px;
  }
  
  .textWithBlurredBg:hover img{
    filter:brightness(60%);
    box-shadow:0 0 16px white;
  }
   
  .textWithBlurredBg :not(img){
    position:absolute;
    z-index:1;
    top:30%;
    width:100%;
    text-align:center;
    color:#fff;
    opacity:0;
    transition:.3s;
  }
  
  .textWithBlurredBg:hover :not(img){
    opacity:1;
  }
</style>