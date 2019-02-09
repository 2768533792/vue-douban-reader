<template>
  <div class="submit-prompt">
    <div class="hd">
      <div class="dot"><i class="icon-pen"></i></div>
      <p>
        <em class="count">49130</em><br>
        位作者正在豆瓣阅读写作
      </p>
    </div>
    <div class="bd">
      <p class="tip">我要发表</p>
      <ul class="submit-types">
        <li>中长篇作品</li>
        <li>专栏连载</li>
        <li>短篇</li>
        <li class="disabled">征文大赛(不在征稿期)</li>
      </ul>
      <a href="" class="write-here">了解在豆瓣阅读发表作品</a>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.submit-prompt {
  width: 192px;
  background: #fff;
  border: 1px solid #eee;
  padding: 18px 10px 10px;
  text-align: center;
  .hd {
    .dot {
      margin: 0 auto;
      width: 42px;
      height: 42px;
      line-height: 42px;
      background: #3e4347;
      border-radius: 50%;
      text-align: center;
      .icon-pen {
        display: inline-block;
        background: url('~@/assets/images/icon-pen.png') no-repeat center center;
        background-size: contain;
        width: 28px;
        height: 28px;
        vertical-align: middle;
      }
    }
    .count {
      font-size: 20px;
      color: #333;
      font-style: normal;
    }
    p {
      margin: 0;
    }
  }
  .bd {
    .tip {
      font-size: 12px;
      line-height: 12px;
      color: #afafaf;
    }
    .submit-types {
      padding: 0;
      li {
        margin: 0px auto 8px;
        width: 150px;
        height: 30px;
        line-height: 30px;
        background: #68abb7;
        border-radius: 15px;
        color: #fff;
        font-size: 13px;
        cursor: pointer;
        &:hover {
          background: #658c99;
        }
        &.disabled {
          list-style: none;
          background: #ddd;
          color: #afafaf;
          cursor:no-drop;
        }
      }
    }
    .write-here {
      display: block;
      margin-bottom: 10px;
      color: #68abb7;
      text-decoration: none;
      font-size: 12px;
    }
  }
}
</style>
