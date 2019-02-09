<template>
  <div class="slide-show">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(item, index) in pics" :key="index">
        <img :src="item.imgUrl" alt="">
      </swiper-slide>
    </swiper>
    <div class="swiper-pagination"></div>
    <div class="swiper-button-prev swiper-button-white"></div>
    <div class="swiper-button-next swiper-button-white"></div>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  data () {
    return {
      swiperOption: {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        pagination: {
          el: '.swiper-pagination',
          type: 'custom',
          renderCustom: function (swiper, current, total) {
            const activeColor = '#8a8a8a'
            const normalColor = '#d7d7d7'
            let color = ''
            let paginationStyle = ''
            let html = ''
            for (let i = 1; i <= total; i++) {
              if (i === current) {
                color = activeColor
              } else {
                color = normalColor
              }
              paginationStyle = `background:${color}; opacity: 1; margin-right: 6px;`
              html += `<span class="swiper-pagination-bullet" style="${paginationStyle}"></span>`
            }
            return html
          }
        }
      },
      pics: [
        {
          href: '#1',
          imgUrl: require('@/assets/images/6663.jpg'),
          title: 'abcdds'
        },
        {
          href: '#2',
          imgUrl: require('@/assets/images/6785.jpg'),
          title: 'abcdds'
        },
        {
          href: '#3',
          imgUrl: require('@/assets/images/6794.jpg'),
          title: 'abcdds'
        },
        {
          href: '#4',
          imgUrl: require('@/assets/images/6624.jpg'),
          title: 'abcdds'
        }
      ]
    }
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>

<style lang="scss" scoped>
.slide-show {
  position: relative;
  img {
    width: 100%;
  }
  .swiper-pagination-custom {
    position: absolute;
    left: auto;
    right: 60px;
    z-index: 9;
    width: auto;
    bottom: -25px;
  }
  .swiper-button-prev, .swiper-button-next {
    top: auto;
    bottom: -25px;
    width: 20px;
    height: 20px;
    background-size: 60% 60%;
    background-color: #825d5b;
    border-radius: 5px;
  }
  .swiper-button-prev {
    left: auto;
    right: 30px;
  }
  .swiper-button-next {
    right: 5px;
  }
}
</style>
