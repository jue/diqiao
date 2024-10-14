<template>
  <div class="container">
    <inner-top></inner-top>
    <div class="wrapper">
      <div class="tab">
        <span class="divider"></span>
        <nuxt-link class="p-name" to="/products?cate=pregnant">
          孕产期钙营养
          <i class="el-icon-arrow-down" v-if="$route.query.cate == 'pregnant'"></i>
        </nuxt-link>
        <span class="divider"></span>
        <nuxt-link class="p-name" to="/products?cate=baby">
          婴幼儿钙营养
          <i class="el-icon-arrow-down" v-if="$route.query.cate == 'baby'"></i>
        </nuxt-link>
        <span class="divider"></span>
        <nuxt-link class="p-name" to="/products?cate=child">
          儿童钙营养
          <i class="el-icon-arrow-down" v-if="$route.query.cate == 'child'"></i>
        </nuxt-link>
        <span class="divider"></span>
        <nuxt-link class="p-name" to="/products?cate=adult">
          成人钙营养
          <i class="el-icon-arrow-down" v-if="$route.query.cate == 'adult'"></i>
        </nuxt-link>
        <span class="divider"></span>
      </div>
    </div>

    <div class="content">
      <slide-img :arr="arr[$route.query.cate]"></slide-img>
    </div>

    <Slogan></Slogan>

    <Footer></Footer>
  </div>
</template>

<script>
import InnerTop from '@/components/common/InnerTop.vue'
import Slogan from '@/components/common/Slogan.vue'
import Footer from '@/components/common/Footer.vue'
import SlideImg from '@/components/products/SlideImg.vue'
export default {
  head: {
    title: '迪巧官网 - 迪巧 进口钙领先品牌'
  },
  components: {
    InnerTop,
    Slogan,
    Footer,
    SlideImg
  },
  data () {
    return {
      arr: {
        pregnant: ['pregnant001', 'pregnant002', 'pregnant003'],
        // child: ['child001', 'child002', 'child003', 'child004'],
        // child: ['child001', 'child00234'],
        child: ['child001', 'child00234', 'child00567', 'child009', 'child010', 'child011'],
        // baby: ['baby001', 'baby002'],
        baby: ['baby001', 'baby004'],
        adult: ['adult001', 'adult002', 'pregnant001', 'adult003', 'adult004', 'adult005']
      }
    }
  },
  mounted () { },
  methods: {
    setH () {
      let w = window.innerWidth < 1186 ? 1186 : window.innerWidth
      this.h = w * 0.4375 + 'px'
    }
  },
  watch: {
    '$route.query.cate': function () {
      console.log(this.$route.query.cate)
    }
  }
}
</script>

<style lang="less" scoped>
.tab {
  width: 92%;
  line-height: 80px;
  background: #24a18f;
  border-radius: 40px;
  color: #fff;
  font-size: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 53px;

  .divider {
    display: block;
    width: 3px;
    height: 50px;
    background: linear-gradient(rgba(250, 250, 250, 0),
        rgba(250, 250, 250, 1),
        rgba(250, 250, 250, 0));
  }

  .p-name {
    width: 22.7%;
    text-align: center;
    position: relative;
    cursor: pointer;
    color: #fff;

    .el-icon-arrow-down {
      position: absolute;
      top: 100%;
      left: 50%;
      color: #24a18f;
      transform: translate(-50%, 0);
      font-size: 35px;
      font-weight: 700;
    }
  }
}

//iphone
@media only screen and (max-width: 414px) {
  .container {
    width: 100%;
  }

  .top {
    margin-bottom: 30px;
    background-size: 100%;
    height: 100px;
    height: 67px;

    .top-img {
      margin-top: 0;
      min-width: 100%;
    }
  }

  .tab {
    font-size: 12px;
    width: 98%;
    line-height: 40px;

    .divider {
      height: 14px;
    }

    .p-name {
      .el-icon-arrow-down {
        font-size: 20px;
      }
    }
  }
}
</style>
