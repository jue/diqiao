<template>
  <el-dialog
    :show-close="false"
    :visible.sync="$store.state.buyBox"
    @close="closeDialog"
    center
    class="buy-box"
  >
    <span class="title" slot="title">
      <span class="txt">在线购买</span>
    </span>
    <div class="body">
      <a class="item pc" href="https://mall.jd.com/index-1000101244.html" target="_blank">
        <img src="/imgs/buy/jd.png" />
        <span>京东迪巧官方旗舰店</span>
      </a>
      <a class="item pc" href="https://dcal.tmall.com" target="_blank">
        <img src="/imgs/buy/tm.png" />
        <span>天猫迪巧官方旗舰店</span>
      </a>
      <a
        class="item m"
        href="https://shop.m.jd.com/?shopId=1000101244&utm_source=iosapp&utm_medium=appshare&utm_campaign=t_335139774&utm_term=CopyURL&ad_od=share"
        target="_blank"
      >
        <img src="/imgs/buy/jd.png" />
        <span>京东迪巧官方旗舰店</span>
      </a>
      <a class="item m" href="https://m.tb.cn/h.VVucZlL?sm=36acc6" target="_blank">
        <img src="/imgs/buy/tm.png" />
        <span>天猫迪巧官方旗舰店</span>
      </a>
      <a class="item" href="https://www.baiyangwang.com/" target="_blank">
        <img src="/imgs/buy/by.png" />
        <span>百洋挑剔喵商城</span>
      </a>
      <a class="item" href="https://mobile.yangkeduo.com/mall_page.html?mall_id=205546545" target="_blank">
        <img src="https://pic8.58cdn.com.cn/nowater/webim/big/n_v2e175e37bb79a43a1803ccc518d9db28f.png" />
        <span>拼多多迪巧官方旗舰店</span>
      </a>
    </div>
  </el-dialog>
</template>
<script>
export default {
  methods: {
    closeDialog() {
      this.$store.commit('update_buyBox', false)
    }
  }
}
</script>
<style lang="less" scoped>
.buy-box {
  /deep/ .el-dialog {
    width: 100%;
    max-width: 700px;
    border-radius: 25px;
    overflow: hidden;
    border: 3px #24a18f solid;
    border-top: none;
    .el-dialog__header {
      padding: 0;
      height: 75px;
    }
  }
  .title {
    display: flex;
    align-items: center;
    background-color: #24a18f;
    position: relative;
    height: 75px;
    line-height: 75px;
    font-size: 30px;
    color: #fff;
    .logo {
      height: 54px;
      position: relative;
      left: 72px;
    }
    .txt {
      position: absolute;
      left: 50%;
      transform: translate(-50%, 0);
    }
  }
  .body {
    display: flex;
    justify-content: center;
    padding: 20px 0;
    .item {
      width: 30%;
      display: block;
      &.pc {
        display: block;
      }
      &.m {
        display: none;
      }
      img {
        display: block;
        margin: 0 auto;
        height: 101px;
      }
      span {
        color: #00594a;
        font-size: 18px;
        display: block;
        text-align: center;
      }
    }
  }
}

//iphone
@media only screen and (max-width: 414px) {
  .buy-box {
    .body {
      .item {
        &.pc {
          display: none;
        }
        &.m {
          display: block;
        }
      }
    }
  }
}
</style>
