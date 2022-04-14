<template>
  <Transition name="modal">
    <div v-if="show" class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <button class="modal-default-button" @click="$emit('close')">
            X
          </button>
          <div class="modal-header">
            <slot name="header">TITRE</slot>
          </div>

          <div class="modal-body">
            <slot name="body">{{ msg }}</slot>
            <br v-if="cachelink">
            <br v-if="cachelink">
            <br v-if="cachelink">
            <a :href="link" v-if="cachelink">{{name}}</a>
            <br v-if="cachevid">
            <br v-if="cachevid">
            <br v-if="cachevid">
            <video width=auto height="500" controls v-if="cachevid">
              <source v-bind:src="video">
            </video>
            <br v-if="cacheimg">
            <br v-if="cacheimg">
            <br v-if="cacheimg">
            <img :src="image" width="1000" height=auto v-if="cacheimg">
            <br v-if="cacheaud">
            <br v-if="cacheaud">
            <br v-if="cacheaud">
            <audio controls v-if="cacheaud">
              <source v-bind:src="audio" type="audio/mp4" >
            </audio>
          </div>

          <div class="modal-footer">
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
export default {
  props: {
    show: Boolean,
    msg: String,
    video: String,
    image: String,
    audio: String,
    cachevid: Boolean,
    cacheimg: Boolean,
    cacheaud: Boolean,
    name: String,
    link: String,
    cachelink: Boolean
  },
};
</script>

<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 90%;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.modal-header h3 {
  margin-top: 0;
  color: #074b46;
}

.modal-body {
  margin: 20px 0;
  max-height: calc(100vh - 210px);
  overflow-y: auto;
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

</style>
