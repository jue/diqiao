<template>
  <el-carousel
    :interval="3000"
    :type="type"
    arrow="always"
    class="carousel"
    indicator-position="none"
    :height="h"
  >
    <el-carousel-item :key="index" v-for="(item, index) in honorList">
      <img :src="item.imgUrl" class="honor-img" />
    </el-carousel-item>
  </el-carousel>
</template>
<script>
export default {
  data() {
    return {
      type: 'card',
      h: '244px',
      honorList: [
        {
          imgUrl: '/imgs/index/honor001.png',
          link: '#'
        },
        {
          imgUrl: '/imgs/index/honor002.png',
          link: '#'
        },
        {
          imgUrl: '/imgs/index/honor003.png',
          link: '#'
        },
        {
          imgUrl: '/imgs/index/honor004.png',
          link: '#'
        },
        {
          imgUrl: '/imgs/index/honor005.png',
          link: '#'
        },
        {
          imgUrl: '/imgs/index/honor006.png',
          link: '#'
        },
        {
          imgUrl: '/imgs/index/honor007.png',
          link: '#'
        }
      ]
    }
  },
  mounted() {
    let _this = this
    this.setInit()
    window.onresize = () => {
      this.setInit()
    }
  },
  methods: {
    setInit(){
      if (window.innerWidth <= 414) {
        this.type = ''
      } else {
        this.type = 'card'
      }

      let he = window.innerWidth * 0.9 * 0.45
      this.h = he >= 244 ? 244+'px' : he+'px'
      
    }
  }
}
</script>
<style lang="less" scoped>
.carousel {
  display: inline-block;
  width: 1084px;
  /deep/ .el-carousel__arrow {
    background: none;
    i {
      font-size: 50px;
      color: #00594a;
    }
  }
}

//iphone
@media only screen and (max-width: 414px) {
  .carousel {
    width: 95vw;
  }
}
</style>