<template>
  <header id="head_top">
    <div class="top">
      <div class="inner clearfix">
        <div class="logo"><img :src="logoUrl" title="豆瓣阅读" alt="豆瓣阅读" /></div>
        <form action="" @submit="submitQuery" class="form-search clearfix">
          <input v-model.trim="keywords" type="text" placeholder="作品 / 电子书 / 专栏连载 / 作者 / 出版社" max-length="60" size="22" autocomplete="off" id="input-query" @keyup="searchDrop" @focus="searchDrop" @blur="searchDropHidden">
          <button type="submit" id="btn-search"><i class="icon-search"></i></button>
        </form>
        <div class="search-drop" v-show="searchDropShow">
          <ul class="search-list">
            <li v-for="(item, index) in searchList" :key="index">{{item.title}}</li>
          </ul>
        </div>
        <div class="entrances">
          <a href="" class="app-download"><i class="icon-phone"></i>客户端免费下载</a>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="inner clearfix">
        <ul class="nav">
          <li><router-link to="/" class="active">原创作品</router-link></li>
          <li><router-link to="/">电子图书</router-link></li>
          <li><router-link to="/">专栏连载</router-link></li>
          <li><router-link to="/">短篇</router-link></li>
          <li><router-link to="/">译者项目</router-link></li>
          <li><router-link to="/">征文大赛</router-link></li>
          <li><router-link to="/">免费</router-link></li>
          <li><router-link to="/">出版与改编</router-link></li>
        </ul>
        <div class="user-info">
          <div v-if="loginSuccess" class="login-success-box">
            <a href="#" class="nickname">
              {{nickName}} <i class="icon-arr_down"></i>
            </a>
            <div class="user-bar">
              <ul>
                <li>个人主页</li>
                <li @click="loginOut">退出登录</li>
              </ul>
            </div>
          </div>
          <div v-else>
            <a href="#" class="login" @click.prevent="showModal">登录</a>
            <span>|</span>
            <a href="" class="signup">注册</a>
          </div>
        </div>
      </div>
    </div>
    <modal-box :modal-show="modalShow" @close="closeModal">
      <div slot="content" class="login-box">
        <h2>欢迎来到豆瓣，请登录</h2>
        <form id="popup_login_form" action="" @submit="login">
          <div class="field">
            <input type="text" v-model="loginAccount" placeholder="手机号 / 邮箱">
          </div>
          <div class="field">
            <input type="password" v-model="loginPassword" name="" id="" placeholder="密码">
          </div>
          <div class="field">
            <button type="submit">登录豆瓣</button>
          </div>
        </form>
      </div>
    </modal-box>
  </header>
</template>

<script>
import axios from 'axios'
import modalBox from '@/components/common/modalBox'

export default {
  data () {
    return {
      logoUrl: require('@/assets/images/douban_logo.png'),
      keywords: '',
      keywordsChange: false,
      searchDropShow: false,
      searchList: '',
      modalShow: false,
      loginAccount: '',
      loginPassword: '',
      loginSuccess: false,
      nickName: '',
      userBarShow: false
    }
  },
  created () {
    if (this.$cookies.get('nickName')) {
      this.nickName = this.$cookies.get('nickName')
    }
    if (this.$cookies.get('loginSuccess')) {
      this.loginSuccess = this.$cookies.get('loginSuccess')
    }
    axios.get('http://localhost:3003/accounts', {}).then(function (res) {
    })
  },
  methods: {
    submitQuery: function () {
      this.$router.push({ name: 'search', params: { keywords: this.keywords } })
    },
    searchDrop: function (e) {
      this.searchDropShow = Boolean(this.keywords && this.searchList)
      if (this.keywords && this.keywordsChange) {
        const that = this
        axios.get('http://localhost:3003/books?title_like=' + this.keywords, {
        }).then(function (res) {
          const data = res.data
          const len = data.length
          that.searchList = len ? data.slice(0, len < 2 ? len : 2) : ''
          that.searchDropShow = Boolean(len)
          that.keywordsChange = false
        })
      }
    },
    searchDropHidden: function () {
      this.searchDropShow = false
    },
    showModal: function () {
      this.modalShow = true
    },
    closeModal: function () {
      this.modalShow = false
    },
    login: function (e) {
      const that = this
      axios.get('http://localhost:3003/accounts?username=' + this.loginAccount + '&password=' + this.loginPassword, {}).then(function (res) {
        const data = res.data
        if (data.length) {
          that.loginSuccess = true
          that.nickName = data[0].nickname
          that.$cookies.set('nickName', data[0].nickname)
          that.$cookies.set('loginSuccess', true)
          alert('登录成功')
        } else {
          that.loginSuccess = false
          alert('用户名或密码错误')
        }
        that.modalShow = false
      })
    },
    userBarShowFn: function () {
      this.userBarShow = !this.userBarShow
    },
    loginOut: function () {
      this.$cookies.remove('nickName')
      this.$cookies.remove('loginSuccess')
      alert('退出成功')
      window.location.reload()
    }
  },
  watch: {
    keywords: function (newVal, oldVal) {
      this.keywordsChange = newVal !== oldVal
    }
  },
  components: {
    modalBox
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/css/common';

.login-box {
  padding: 60px 60px 70px 60px;
  h2 {
    font-size: 25px;
    text-align: center;
    margin-bottom: 30px;
  }
  #popup_login_form {
    .field {
      margin-top: 15px;
      input {
        padding: 10px 10px;
        border: 1px solid #ccc;
        border-radius: 3px;
        width: 336px;
      }
      button[type=submit] {
        background: #825d5b;
        color: #fff;
        display: block;
        width: 100%;
        height: 40px;
        border-radius: 3px;
        cursor: pointer;
      }
    }
  }
}
#head_top {
  background: #f6f6f1;
  padding-top: 21px;
  margin-bottom: 30px;
  .inner {
    width: 936px;
    margin: 0 auto;
    position: relative;
  }
  .top {
    padding-bottom: 15px;
    .logo {
      float: left;
      width: 103px;
    }
    .form-search {
      float: left;
      margin-left: 22px;
      #input-query {
        float: left;
        font-size: 12px;
        padding: 6px 10px;
        width: 423px;
      }
      #btn-search {
        float: left;
        padding: 4px 10px;
        background: #825d5b;
        text-align: center;
        i {
          display: inline-block;
          background: url('~@/assets/images/icon-search.png') no-repeat center center;
          background-size: contain;
          width: 16px;
          height: 16px;
          vertical-align: -2px;
        }
      }
    }
    .search-drop {
      position: absolute;
      left: 125px;
      top: 28px;
      z-index: 9;
      padding: 5px;
      width: 423px;
      background: #fff;
      border: 1px solid #ddd;
      .search-list {
        li {
          cursor: pointer;
          padding: 5px;
          border-bottom: 1px solid #eee;
          &:hover {
            background: #f5f5f5;
          }
        }
      }
    }
    .entrances {
      float: right;
      margin-top: -6px;
      .app-download {
        display: inline-block;
        background: #825d5b;
        border-radius: 2px;
        padding: 0 20px;
        height: 36px;
        line-height: 36px;
        color: #fff;
        font-size: 12px;
        text-decoration: none;
        &:hover {
          background: #825d5b;
          color: #fff;
          text-decoration: none;
        }
        .icon-phone {
          display: inline-block;
          background: url('~@/assets/images/icon-phone.png') no-repeat center center;
          background-size: contain;
          width: 15px;
          height: 22px;
          margin-right: 10px;
          vertical-align: -6px;
        }
      }
    }
  }
  .bottom {
    padding: 9px 0 10px;
    border-top: 1px solid #eee;
    .nav {
      float: left;
      font-size: 0;
      li {
        display: inline-block;
        &:not(:last-child) {
          margin-right: 23px;
        }
        a {
          display: inline-block;
          padding: 3px 6px;
          color: #825d5b;
          font-size: 14px;
          &:hover {
            background: #825d5b;
            color: #fff;
          }
          &.active {
            background: #aaa;
            color: #fff;
          }
        }
      }
    }
    .user-info {
      float: right;
      font-size: 14px;
      padding: 3px 0;
      .login-success-box {
        position: relative;
        a:hover {
          text-decoration: none;
        }
        .user-bar {
          display: none;
          position: absolute;
          top: 20px;
          right: 0;
          width: 120px;
          padding: 5px 8px;
          background: #fff;
          border: 1px solid #eee;
          li {
            padding: 3px;
            line-height: 22px;
            font-size: 12px;
            cursor: pointer;
            &:hover {
              background: #f5f5f5;
            }
          }
        }
        &:hover {
          .user-bar {
            display: block;
          }
        }
      }
      .icon-arr_down {
        display: inline-block;
        width: 0;
        height: 0;
        border-top: 5px solid #825d5b;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-bottom: 0;
        vertical-align: middle;
      }
      span {
        margin: 0 3px;
      }
      a {
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
}
</style>
