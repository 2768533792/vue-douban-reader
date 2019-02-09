<template>
  <transition name="modal-fade">
  <div class="modal" v-show="modalShow">
    <div class="mask" @click="close"></div>
    <div class="box">
      <slot name="content"></slot>
    </div>
  </div>
  </transition>
</template>

<script>
export default {
  props: {
    modalShow: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    close: function () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="scss" scoped>
.modal-fade-enter,
.modal-fade-leave-active {
  opacity: 0;
}
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity .5s ease;
}

.modal {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  .mask {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    background: rgba(0, 0, 0, 0.5);
  }
  .box {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 9;
    background: #fff;
    border-radius: 3px;
  }
}
</style>
