<template>
  <div>
    <my-head></my-head>
    <div class="inner">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import myHead from '@/components/header/head'

export default {
  components: {
    myHead
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/css/common';

.inner {
  width: 936px;
  margin: 0 auto;
}
</style>
