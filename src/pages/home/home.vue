<template>
  <div class="home clearfix">
    <aside class="left">
      <submit-prompt></submit-prompt>
      <left-floor title="阅读平台">
        <div slot="content" class="read-app clearfix">
          <div class="web-app">
            <a href="#">
              <i class="icon-device-web"></i>
              <div class="txt">Web</div>
            </a>
          </div>
          <div class="others-app">
            <a href="#" target="_blank">
              <div class="top"><i class="icon-device-ipad"></i>阅读器下载</div>
              <div class="txt">iPhone/iPad/Android</div>
            </a>
          </div>
        </div>
      </left-floor>
      <left-floor title="作品分类" class="category">
        <div slot="content">
          <div class="type">
            <a href="javascript:;" :class="{active: categoryType==='fiction'}" @click="categoryListSwitch('fiction')">小说</a>
            <a href="javascript:;" :class="{active: categoryType==='notFiction'}" @click="categoryListSwitch('notFiction')">非小说</a></div>
          <ul v-if="category" class="category-list">
            <li v-for="(item, index) in category[categoryType]" :key="index">
              <a href="#">
                {{item}}
              </a>
            </li>
          </ul>
        </div>
      </left-floor>
      <left-floor title="畅销排行" class="sale-rank">
        <div slot="content">
          <div class="type">
            <a href="javascript:;" :class="{active: saleRankType==='fiction'}" @click="rankListSwitch('fiction')">小说</a>
            <a href="javascript:;" :class="{active: saleRankType==='notFiction'}" @click="rankListSwitch('notFiction')">非小说</a></div>
          <ul class="sale-rank-list" v-if="saleRankType==='fiction'">
            <li v-for="(item, index) in saleRankFiction" :key="index">
              <a href="#">
                <h4>{{item.title}}</h4>
                <p>{{item.author}}</p>
              </a>
            </li>
          </ul>
          <ul class="sale-rank-list" v-if="saleRankType==='notFiction'">
            <li v-for="(item, index) in saleRankNotFiction" :key="index">
              <a href="#">
                <h4>{{item.title}}</h4>
                <p>{{item.author}}</p>
              </a>
            </li>
          </ul>
        </div>
      </left-floor>
      <left-floor title="读者动态" class="reader-trends">
        <div slot="content">
          <ul>
            <li v-for="(item, index) in readerTrends" :key="index">
              <img :src="item.avatar" :alt="item.reader">
              <dl>
                <dt>{{item.reader}}</dt>
                <dd>{{item.trend}}</dd>
                <dd>{{item.bookName}}</dd>
              </dl>
            </li>
          </ul>
        </div>
      </left-floor>
      <left-floor title="纸书出版代理">
        <div slot="content">
          <p>豆瓣阅读将在作者的授权下，对在豆瓣阅读发表的作品代理纸书出版事宜，同时接受出版社的合作联系。</p>
          <a href="">查看详情</a>
        </div>
      </left-floor>
      <left-floor title="出版合作">
        <div slot="content">
          <p>影视版权、图书出版、内容入驻等机构方合作，请邮件联系我们read@douban.com</p>
        </div>
      </left-floor>
      <left-floor title="关注我们">
        <div slot="content" class="embassy-list">
          <div class="embassy-item">
            <i class="icon-douban"></i>
            <dl>
              <dt>豆瓣小站：豆瓣阅读</dt>
              <dd>编辑手机&进展通告</dd>
            </dl>
          </div>
          <div class="embassy-item">
            <i class="icon-weibo"></i>
            <dl>
              <dt>@豆瓣阅读</dt>
              <dd>优秀作品与作者推荐</dd>
            </dl>
          </div>
          <div class="embassy-item">
            <i class="icon-wechat"></i>
            <dl>
              <dt>豆瓣阅读</dt>
              <dd>
                <p>精品文章每日推送</p>
                <p><img :src="wechatSubImg" alt="豆瓣阅读" width="70"></p>
              </dd>
            </dl>
          </div>
          <div class="embassy-item">
            <i class="icon-wechat"></i>
            <dl>
              <dt>豆瓣阅读服务号</dt>
              <dd>
                <p>充值、购买问题反馈</p>
                <p><img :src="wechatServiceImg" alt="豆瓣阅读服务号" width="70"></p>
              </dd>
            </dl>
          </div>
        </div>
      </left-floor>
    </aside>
    <article class="right">
      <slide-show></slide-show>
      <xiao-ya></xiao-ya>
      <right-floor title="编辑推荐"></right-floor>
      <right-floor title="画册">
        <a href="" slot="header-right">更多画册</a>
      </right-floor>
    </article>
  </div>
</template>

<script>
import axios from 'axios'

import submitPrompt from '@/pages/home/common/submitPrompt'
import leftFloor from '@/pages/home/common/leftFloor'
import rightFloor from '@/pages/home/common/rightFloor'
import slideShow from '@/pages/home/common/slideShow'
import xiaoYa from '@/pages/home/common/xiaoYa'

export default {
  data () {
    return {
      category: null,
      categoryType: 'fiction',
      saleRankBooks: [],
      saleRankFiction: [],
      saleRankNotFiction: [],
      saleRankType: 'fiction',
      readerTrends: [],
      wechatSubImg: require('@/assets/images/wechat-sub.png'),
      wechatServiceImg: require('@/assets/images/wechat-service.png')
    }
  },
  created () {
    const that = this
    // 获取分类数据
    axios.get('http://localhost:3003/category', {}).then(function (res) {
      that.category = res.data
    })
    // 获取热销排行数据
    axios.get('http://localhost:3003/saleRankBooks', {}).then(function (res) {
      that.saleRankBooks = res.data
      that.saleRankFiction = res.data.filter((item) => {
        return item.type === 'fiction'
      })
      that.saleRankNotFiction = res.data.filter((item) => {
        return item.type === 'notFiction'
      })
    })
    // 获取读者动态数据
    axios.get('http://localhost:3003/readerTrends', {}).then(function (res) {
      that.readerTrends = res.data
    })
  },
  methods: {
    categoryListSwitch (type) {
      this.categoryType = type
    },
    rankListSwitch (type) {
      this.saleRankType = type
    }
  },
  components: {
    submitPrompt,
    leftFloor,
    slideShow,
    xiaoYa,
    rightFloor
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/css/common';

.home {
  .left {
    float: left;
    width: 192px;
    height: 500px;
    p {
      font-size: 12px;
      line-height: 1.5;
    }
  }
  .right {
    width: 696px;
    float: right;
    height: 500px;
  }
  .read-app {
    font-size: 0;
    i[class^=icon] {
      display: inline-block;
      width: 36px;
      height: 36px;
      background-size: contain;
    }
    > div {
      display: inline-block;
      background: #f2f2ec;
      text-align: center;
      a {
        display: inline-block;
        height: 65px;
        padding-top: 5px;
        font-size: 12px;
      }
    }
    .web-app {
      float: left;
      width: 55px;
      margin-right: 2px;
      .icon-device-web {
        background: url('~@/assets/images/icon-device-web.png') no-repeat center center;
      }
    }
    .others-app {
      float: left;
      width: 135px;
      .icon-device-ipad {
        background: url('~@/assets/images/icon-device-ipad.png') no-repeat center center;
        vertical-align: middle;
      }
    }
  }
  .category {
    .type {
      margin-bottom: 0px;
      border-bottom: 1px solid #eee;
      padding-bottom: 10px;
      a {
        display: inline-block;
        font-size: 12px;
        padding: 3px 8px;
        margin-right: 10px;
        &.active, &:hover {
          background: #825d5b;
          color: #fff;
          border-radius: 2px;
        }
      }
    }
    .category-list {
      li {
        line-height: 28px;
        border-bottom: 1px solid #eee;
        font-size: 12px;
        padding: 1px 0;
        a {
          display: block;
          color: #825d5b;
          &:hover {
            background: #f2f2ec;
          }
        }
      }
    }
  }
  .sale-rank {
    .type {
      margin-bottom: 0px;
      padding-bottom: 10px;
      a {
        display: inline-block;
        font-size: 12px;
        padding: 3px 8px;
        margin-right: 10px;
        &.active, &:hover {
          background: #825d5b;
          color: #fff;
          border-radius: 2px;
        }
      }
    }
    .sale-rank-list {
      li {
        margin-bottom: 8px;
        a {
          h4 {
            font-size: 14px;
            font-weight: bold;
            color: #825d5b;
          }
          p {
            font-size: 12px;
            color: #afafaf;
          }
        }
      }
    }
  }
  .reader-trends {
    li {
      margin-bottom: 10px;
      &::after {
        content: '';
        clear: both;
        display: block;
        height: 0;
        visibility: hidden;
      }
      img {
        float: left;
        margin-right: 8px;
      }
      dl {
        float: left;
        font-size: 12px;
        color: #825d5b;
        dd:first-of-type {
          color: #afafaf;
        }
      }
    }
  }
  .embassy-list {
    .embassy-item {
      margin-bottom: 10px;
      padding-bottom: 10px;
      border-bottom: 1px solid #eee;
      @extend .clearfix;
      i[class^=icon-] {
        display: block;
        float: left;
        margin: 5px 10px 0 0;
        width: 23px;
        height: 23px;
        background: url('~@/assets/images/icon-socials.png') no-repeat;
        background-size: 100% 346%;
        &.icon-weibo {
          background-position: 0 -23px;
        }
        &.icon-wechat {
          background-position: 0 -46px;
        }
      }
      dl {
        float: left;
        font-size: 12px;
        dt {
          font-size: 14px;
          font-weight: bold;
        }
      }
    }
  }
}
</style>
