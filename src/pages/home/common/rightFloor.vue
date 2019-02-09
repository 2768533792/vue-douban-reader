<template>
  <div class="right-floor">
    <div class="hd clearfix">
      <span class="r">
        <slot name="header-right"></slot>
      </span>
      <h3>{{title}}</h3>
    </div>
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
@import '~@/assets/css/common';

.right-floor {
  margin-top: 20px;
  .hd {
    padding-bottom: 10px;
    border-bottom: 1px solid #eee;
    .r {
      float: right;
    }
    h3 {
      font-weight: bold;
    }
  }
}
</style>
