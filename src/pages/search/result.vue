<template>
  <div class="search-result">
    <h3 class="page-title">搜索结果</h3>
    <ul class="list">
      <li class="item" v-for="(item, index) in books" :key="index">
        {{item.id}}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      books: ''
    }
  },
  created () {
    const that = this
    axios.get('http://localhost:3003/books', {
    }).then(function (res) {
      // console.log(res.data)
      that.books = res.data
    })
  }
}
</script>

<style lang="scss" scoped>
.search-result {
  .page-title {
    padding-bottom: 10px;
    font-size: 18px;
    color: #666;
    border-bottom: 1px solid #eee;
  }
  .list {
    .item {
      margin-bottom: 20px;
    }
  }
}
</style>
