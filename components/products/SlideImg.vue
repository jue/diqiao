<template>
  <div class="wrapper">
    <el-carousel
      class="carousel pc"
      height="840px"
      indicator-position="none"
    >
      <el-carousel-item :key="index" v-for="(item, index) in arr">
        <div class="item" @click="$router.push('/detail?cate='+$route.query.cate+'&long='+item)">
          <img :src="'/imgs/product/pc/'+item+'.jpg'" class="p-img" />
        </div>
      </el-carousel-item>
    </el-carousel>

    <el-carousel
      class="carousel m"
      height="400px"
      indicator-position="none"
    >
      <el-carousel-item :key="index" v-for="(item, index) in arr">
        <div class="item" @click="$router.push('/detail?cate='+$route.query.cate+'&long='+item)">
          <img :src="'/imgs/product/m/'+item+'.jpg'" class="p-img" />
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
export default {
  props: ['arr']
}
</script>
<style lang="less" scoped>
.carousel {
  position: relative;
  /deep/ .el-carousel__arrow {
    background: none;
    i {
      font-size: 50px;
      color: #00594a;
    }
  }
  /deep/ .el-carousel__arrow {
    &.el-carousel__arrow--left {
      // transform: translate(-640px, 0);
      .el-icon-arrow-left:before {
        content: '\e6dd';
      }
    }
    &.el-carousel__arrow--right {
      // transform: translate(590px, 0);
      .el-icon-arrow-right:before {
        content: '\e6dc';
      }
    }
  }
  .item {
    position: relative;
    cursor: pointer;
    .p-img {
      width: 100%;
    }
  }
}

//iphone
@media only screen and (max-width: 414px) {

}
</style>