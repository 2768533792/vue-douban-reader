<template>
  <div class="xiaoya">
    <div class="hd clearfix">
      <h1>[小雅奖]</h1>
      <span>每周奖励最好的原创写作</span>
    </div>
    <div class="bd clearfix">
      <div class="billboard-wrapper">
        <div class="billboard">
          <i class="icon-xiaoya-logo"></i>
          <div class="time">第一百四十三期</div>
          <dl>
            <dt>最佳作品</dt>
            <dd><a href="#" title="弱水之殇" target="_blank">《弱水之殇》</a></dd>
          </dl>
          <dl>
            <dt>最佳专栏连载</dt>
            <dd><a href="#" title="血鸟谜案" target="_blank">《血鸟谜案》</a></dd>
          </dl>
          <dl>
            <dt>最佳作者</dt>
            <dd><a href="#" title="KAWAI" target="_blank">KAWAI</a></dd>
          </dl>
          <div class="ft"><i class="icon-watermark-logo"></i></div>
        </div>
      </div>
      <div class="xiaoya-news">
        <ul class="news-list">
          <li>
            <a href="" target="_blank">
              <h3 class="title">KAWAI：我想告诉你，99%的在日华人不想告诉你的事</h3>
              <div class="news-abstract">
                <div class="figure"><img src="https://img3.doubanio.com/view/ark_works_pic/common-small/public/1068215686.jpg" alt=""></div>
                <p class="text">是的，99%生活在日本的中国人，都不会告诉你，自己吃过的苦，走过的弯路，正在面临的烦恼。因为三言两语说不明白，说明白了你也爱莫能助，不如保留一点体面。而我大概是最讨人厌的那类人，喜欢把这点体面撕开，让人看到在日华人的生活真相。 小雅奖·最佳作者
第一百…</p>
              </div>
            </a>
          </li>
          <li>
            <a href="" target="_blank">
              <h3 class="title">KAWAI：我想告诉你，99%的在日华人不想告诉你的事</h3>
              <div class="news-abstract">
                <div class="figure"><img src="https://img3.doubanio.com/view/ark_works_pic/common-small/public/1064067801.jpg" alt=""></div>
                <p class="text">故事讲起来容易，但布局起来却很难，尤其是以悬疑小说的形式一步步循序渐进抽丝剥茧。但我并无过多奢望，只求能尽最大努力让想展现的东西得以展现，让想分享的情感被更多人懂得，让心中的热血冲破平淡生活的束缚，让每位读懂作品的人都能够得到自己的救赎。</p>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="ft">
      <a href="">查看获奖作品详情 <i>&gt;</i></a>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/css/common';

.xiaoya {
  margin-top: 30px;
  .hd {
    border-bottom: 1px solid #eee;
    margin-bottom: 40px;
    padding-bottom: 20px;
    h1 {
      float: left;
    }
    span {
      vertical-align: -6px;
      margin-left: 12px;
      font-size: 14px;
    }
  }
  .bd {
    .billboard-wrapper {
      float: left;
      margin-right: 35px;
      margin-top: 4px;
      padding: 1px;
      background: #f9f8f3;
      border: 3px solid #dbd7c5;
      .billboard {
        position: relative;
        line-height: 1;
        width: 224px;
        text-align: center;
        font-size: 12px;
        &::after {
          content: '';
          position: absolute;
          pointer-events: none;
          top: 0;
          left: 0;
          bottom: -100%;
          right: -100%;
          border: 1px solid #dbd7c5;
          transform: scale(.5);
          transform-origin: 0 0;
        }
        .icon-xiaoya-logo {
          display: inline-block;
          position: absolute;
          top: -26px;
          left: 50%;
          margin-left: -20px;
          width: 41px;
          height: 41px;
          background: url('~@/assets/images/xiaoya-logo.png') no-repeat center center;
        }
        .time {
          padding: 30px 0 50px;
          line-height: 1;
          color: #afab99;
          font-size: 12px;
        }
        dl {
          margin: 0 30px 30px;
          dt {
            margin: 0 0 12px;
            font-size: 12px;
            font-weight: bold;
          }
          dd {
            margin-bottom: 8px;
            a {
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              color: #73a8a4;
            }
          }
        }
        dl:last-of-type {
          dd {
            margin-bottom: 0;
          }
        }
        .ft {
          padding: 20px 0 10px;
          clear: both;
          overflow: hidden;
          .icon-watermark-logo {
            display: inline-block;
            width: 67px;
            height: 11px;
            background: url('~@/assets/images/logo-small.png') no-repeat top left;
          }
        }
      }
    }
    .xiaoya-news {
      float: left;
      width: 427px;
      li {
        margin-bottom: 40px;
        a {
          color: #999;
        }
      }
      .figure {
        float: left;
        width: 112px;
        height: 112px;
        overflow: hidden;
        margin-right: 14px;
        position: relative;
      }
      .title {
        font-size: 18px;
        font-weight: bold;
        line-height: 1;
        margin-bottom: 22px;
        color: #333;
      }
      .text {
        font-size: 14px;
        line-height: 1.5;
      }
    }
  }
  .ft {
    background: #f2f2eb;
    text-align: right;
    padding: 5px;
    a {
      display: inline-block;
      color: #ee3a76;
      font-size: 12px;
      i {
        display: inline-block;
        width: 16px;
        height: 16px;
        line-height: 16px;
        background: #ee3a76;
        color: #fff;
        font-size: 12px;
        border-radius: 50%;
        text-align: center;
      }
    }
  }
}
</style>
