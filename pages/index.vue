<template>
  <div class="container">
    <inner-top></inner-top>
    <div class="wrapper">
      <div class="box">
        <div class="box-head">
          <i class="iconfont icon1"></i>
          <span>为不同人群特制专属好钙</span>
        </div>

        <div class="box-body">
          <div class="products-list">
            <nuxt-link class="link" to="/products?cate=pregnant">
              <img alt src="../static/imgs/index/001.png" />
            </nuxt-link>

            <nuxt-link class="link" to="/products?cate=baby">
              <img alt src="../static/imgs/index/002.png" />
            </nuxt-link>

            <nuxt-link class="link" to="/products?cate=child">
              <img alt src="../static/imgs/index/003.png" />
            </nuxt-link>

            <nuxt-link class="link" to="/products?cate=adult">
              <img alt src="../static/imgs/index/004.png" />
            </nuxt-link>
          </div>
        </div>
      </div>

      <div class="box">
        <div class="box-head">
          <i class="iconfont icon3"></i>
          <span>迪巧荣誉 Honor Wall</span>
        </div>

        <div class="box-body">
          <Carousel></Carousel>
        </div>
      </div>

      <div class="box">
        <div class="box-body">
          <Video></Video>
        </div>
      </div>

      <div class="box">
        <div class="box-head">
          <i class="iconfont icon5"></i>
          <span>最新动态 News Report</span>
        </div>
        <div class="box-body">
          <News :listData="listData.list"></News>
        </div>
        <div class="box-footer">
          <el-pagination :page-size="key.count" @current-change="handleCurrentChange" :total="listData.total" layout="prev, pager, next"></el-pagination>
        </div>
      </div>

      <Slogan></Slogan>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import InnerTop from '@/components/common/InnerTop.vue'
import Slogan from '@/components/common/Slogan.vue'
import Footer from '@/components/common/Footer.vue'
import Carousel from '@/components/index/Carousel.vue'
import News from '@/components/index/News.vue'
import Video from '@/components/index/Video.vue'
export default {
  head: {
    title: '迪巧官网 - 迪巧 进口钙领先品牌'
  },
  components: {
    InnerTop,
    Carousel,
    News,
    Video,
    Slogan,
    Footer
  },
  data() {
    return {
      key: {
        page: 1,
        count: 3
      },
      listData: []
    }
  },
  mounted() {
    this.getListData()
  },
  methods: {
    getListData() {
      this.$axios
        .$post('/news/index', {
          count: this.key.count,
          page: this.key.page,
          search: ''
        })
        .then(res => {
          this.listData = res.data
        })
    },
    handleCurrentChange(val) {
      this.key.page = val
      this.getListData()
    }
  }
  // async asyncData({ app }) {
  //   return await app.$axios
  //     .$post('/news/index', {
  //       count: 3,
  //       page: 1,
  //       search: ''
  //     })
  //     .then(res => {
  //       return {
  //         listData: res.data
  //       }
  //     })
  // }
}
</script>

<style lang="less" scoped>
.box {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-bottom: 83px;
  .box-head {
    width: 44.9%;
    line-height: 46px;
    background: #24a18f;
    border-radius: 23px;
    color: #fff;
    font-size: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;
    .iconfont {
      font-size: 44px;
    }
  }

  .box-footer {
    padding: 20px;
    text-align: center;
  }
}
.products-list {
  text-align: center;
  .link {
    display: inline-block;
    width: 22%;
    margin: 0 16px;
    position: relative;
    overflow: hidden;
    opacity: 1;
    border-radius: 25px;
    &:hover {
      opacity: 0.8;
    }
  }
}

/deep/ .el-pagination{
  color: #727171;

  button:hover{
    color: #24a18f;
  }
}

/deep/ .el-pager li.active{
  color: #24a18f;
}
/deep/ .el-pager li:hover{
  color: #24a18f;
}

//iphone
@media only screen and (max-width: 414px) {
  .top {
    margin-bottom: 78px;
    height: 176px;
    background-size: 100%;
    .top-img {
      margin-top: 0;
      min-width: 100%;
    }
  }

  .box {
    margin-bottom: 50px;
    .box-head {
      width: 80%;
      font-size: 18px;
      .iconfont {
        font-size: 30px;
      }
    }
  }

  .products-list {
    text-align: center;
    .link {
      display: inline-block;
      margin: 0 10px 20px;
      width: 40%;
    }
  }
}
</style>
