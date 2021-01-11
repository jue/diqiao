<template>
  <div class="menu">
    <div class="pc">
      <span class="logo">
        <img alt src="~static/imgs/logo.png" />
      </span>
      <nuxt-link :class="$route.name == 'index' ? 'curr' : '' " class="link" to="/">
      <i class="el-icon-jue-home"></i>
      首页
      </nuxt-link>
      <span :class="$route.name == 'products' ? 'curr' : '' " class="link link-products">
        <span @click="$router.push('/products/?cate=pregnant')">
        <i class="el-icon-jue-products"></i>产品中心</span>
        <span class="sub-menu">
          <nuxt-link class="sub-link" to="/products?cate=pregnant">
            <img alt src="~static/imgs/menu/p_cat001.png" />
            <span>孕产钙营养</span>
          </nuxt-link>

          <nuxt-link class="sub-link" to="/products?cate=baby">
            <img alt src="~static/imgs/menu/p_cat002.png" />
            <span>婴幼儿钙营养</span>
          </nuxt-link>

          <nuxt-link class="sub-link" to="/products?cate=child">
            <img alt src="~static/imgs/menu/p_cat003.png" />
            <span>儿童钙营养</span>
          </nuxt-link>

          <nuxt-link class="sub-link" to="/products?cate=adult">
            <img alt src="~static/imgs/menu/p_cat004.png" />
            <span>成人钙营养</span>
          </nuxt-link>
        </span>
      </span>
      <nuxt-link :class="$route.name == 'knowledge' ? 'curr' : '' " class="link" to="/knowledge"><i class="el-icon-jue-knowledge"></i>钙营养学院</nuxt-link>
      <nuxt-link :class="$route.name == 'plan' ? 'curr' : '' " class="link" to="/plan"><i class="el-icon-jue-plan"></i>骨健康领先计划</nuxt-link>
      <nuxt-link :class="$route.name == 'honor' ? 'curr' : '' " class="link" to="/honor"><i class="el-icon-jue-honor"></i>迪巧荣誉</nuxt-link>
      <span @click="$store.commit('update_buyBox', true)" class="link"><i class="el-icon-jue-buy"></i>在线购买</span>
    </div>

    <el-drawer
      :show-close="false"
      :visible.sync="visible"
      :withHeader="true"
      :wrapperClosable="false"
      direction="ltr"
      size="70%"
    >
      <el-menu
        active-text-color="#ffd04b"
        background-color="#007166"
        class="m-menu"
        text-color="#fff"
        :unique-opened="true"
      >
        <el-menu-item @click.native="linkTo('/')">
          <i class="el-icon-jue-home"></i>
          <span slot="title">首页</span>
        </el-menu-item>
        <el-submenu index="products">
          <template slot="title">
            <i class="el-icon-jue-products"></i>
            <span>产品中心</span>
          </template>
          <el-menu-item @click.native="linkTo('/products/?cate=pregnant')" index="/products-1">孕产钙营养</el-menu-item>
          <el-menu-item @click.native="linkTo('/products/?cate=baby')" index="/products-2">婴幼儿钙营养</el-menu-item>
          <el-menu-item @click.native="linkTo('/products/?cate=child')" index="/products-3">儿童钙营养</el-menu-item>
          <el-menu-item @click.native="linkTo('/products/?cate=adult')" index="/products-4">成人钙营养</el-menu-item>
        </el-submenu>
        <el-menu-item @click.native="linkTo('/knowledge')">
          <i class="el-icon-jue-products"></i>
          <span slot="title">钙营养学院</span>
        </el-menu-item>
        <el-menu-item @click.native="linkTo('/plan')">
          <i class="el-icon-jue-plan"></i>
          <span slot="title">骨健康领先计划</span>
        </el-menu-item>

        <el-menu-item @click.native="linkTo('/honor')">
          <i class="el-icon-jue-honor"></i>
          <span slot="title">迪巧荣誉</span>
        </el-menu-item>

        <el-submenu index="shop">
          <template slot="title">
            <i class="el-icon-jue-buy"></i>
            <span>在线购买</span>
          </template>
          <el-menu-item >
            <a href="https://shop.m.jd.com/?shopId=1000101244&utm_source=iosapp&utm_medium=appshare&utm_campaign=t_335139774&utm_term=CopyURL&ad_od=share">京东迪巧官方旗舰店</a>
          </el-menu-item>
          <el-menu-item>
            <a
              href="https://m.tb.cn/h.VVucZlL?sm=36acc6"
            >天猫迪巧官方旗舰店</a>
          </el-menu-item>
          <el-menu-item>
            <a href="https://www.baiyangwang.com/">百洋商城</a>
          </el-menu-item>
        </el-submenu>
      </el-menu>
    </el-drawer>

    <div class="toggle-menu">
      <div :class="toggleClose ? 'toggle-close' : ''" @click="changeMenu" class="toggle-btn">
        <span class="line line1"></span>
        <span class="line line2"></span>
        <span class="line line3"></span>
        <span class="line line4"></span>
        <span class="line line5"></span>
        <span class="line line6"></span>
      </div>
      <span style="color: #fff; padding-left:10px;"> 菜单</span>
    </div>

    <buy-online></buy-online>
  </div>
</template>
<script>
import BuyOnline from '@/components/BuyOnline.vue'
export default {
  components: {
    BuyOnline
  },
  async asyncData(context) {
    console.log(context.route)
  },
  data() {
    return {
      toggleClose: false,
      visible: false,
      dialogVisible: false
    }
  },
  methods: {
    linkTo(path) {
      this.$router.push(path)
      this.visible = false
      this.toggleClose = false
    },
    changeMenu() {
      this.toggleClose = !this.toggleClose
      this.visible = !this.visible
    }
  }
}
</script>
<style lang="less" scoped>
[class*=' el-icon-jue-'],
[class^='el-icon-jue-'] {
  font-family: 'iconfont' !important;
}
.menu {
  text-align: center;
  width: 1186px;
  margin: 0 auto;
}
.pc {
  position: relative;
  z-index: 1000;
  display: inline-block;
  margin: 0 auto;
  // align-items: center;
  // justify-content: center;
  .logo {
    width: 100px;
    display: inline-block;
    margin-right: 112px;
    vertical-align: bottom;
    margin-bottom: 10px;
  }
}
.link {
  display: inline-block;
  position: relative;
  font-size: 16px;
  padding: 48px 20px 10px;
  color: rgba(250, 250, 250, 0.8);
  cursor: pointer;
  i{
    display: block;
    font-size: 24px;
    margin-bottom: 3px;
  }
  &:hover {
    color: rgba(250, 250, 250, 1);
    background: #00594a;
  }
  &.curr {
    background: #00594a;
  }

  &.link-products {
    cursor: pointer;
    &:hover {
      .sub-menu {
        display: flex;
      }
    }
  }
}

.sub-menu {
  // height: 100%;
  overflow: hidden;
  display: none;
  width: 967px;
  // display: flex;
  background-color: rgba(0, 89, 74, 0.97);
  position: absolute;
  top: 100%;
  left: -278px;
  padding: 15px 0 6px 0;
  justify-content: center;
  .sub-link {
    margin: 0 6px;
    opacity: 0.8;
    &:hover {
      opacity: 1;
    }
    img {
      display: block;
      width: 120px;
    }
    span {
      line-height: 2;
      color: #fff;
      display: block;
      text-align: center;
      font-size: 14px;
    }
  }
}

.toggle-menu {
  display: none;
}

.toggle-menu {
  // display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  height: 20px;
  top: 20px;
  left: 20px;
  z-index: 9999;
  .toggle-btn {
    cursor: pointer;
    width: 30px;
    height: 20px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    &:hover {
    }
    .line {
      display: block;
      height: 2px;
      width: 50%;
      position: absolute;
      background-color: rgba(250, 250, 250, 1);
      transition: All 0.25s linear;
      &.line1 {
        top: 0px;
        left: 0px;
      }
      &.line2 {
        top: 0px;
        left: 50%;
      }
      &.line3 {
        top: 9px;
        right: 50%;
      }
      &.line4 {
        top: 9px;
        left: 50%;
      }
      &.line5 {
        top: 18px;
        left: 0px;
      }
      &.line6 {
        top: 18px;
        left: 50%;
      }
    }
    &.toggle-close {
      .line {
        background-color: #fff;
      }
      .line1 {
        transform: translate(3px, 4px) rotate(45deg);
      }
      .line2 {
        transform: translate(-3px, 4px) rotate(-45deg);
      }
      .line3 {
        width: 0;
      }
      .line4 {
        width: 0;
      }
      .line5 {
        transform: translate(3px, -5px) rotate(-45deg);
      }
      .line6 {
        transform: translate(-3px, -5px) rotate(45deg);
      }
    }
  }
}
/deep/ .el-drawer {
  background: #007166 !important;
}

.m-menu {
  border: none;
  text-align: left;
  /deep/ .el-menu-item [class^='el-icon-'],
  /deep/ .el-submenu [class^='el-icon-'],
  /deep/ .el-submenu__title i {
    color: #fff;
  }
  a {
    color: #fff;
  }
}

//ipad pro
@media only screen and (max-width: 1024px) {
}

//iphone
@media only screen and (max-width: 414px) {
  .pc {
    display: none;
  }

  .toggle-menu {
    display: flex;
  }
}
</style>