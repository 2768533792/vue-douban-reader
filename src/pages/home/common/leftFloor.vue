<template>
  <div class="left-floor">
    <h3 class="hd">{{title}}</h3>
    <div class="bd">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title']
}
</script>

<style lang="scss" scoped>
.left-floor {
  .hd {
    border-bottom: 1px solid #eee;
    color: #333;
    font-size: 18px;
    margin-bottom: 9px;
    padding-bottom: 5px;
  }
}
</style>
