<template>
  <div class="slogan">
    <span class="logo">
      <img alt src="~static/imgs/logo2.png" />
    </span>
    <!-- <span class="text">美国迪巧 进口钙销连续3年销量领先</span> -->
  </div>
</template>
<style lang="less" scoped>
.slogan {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 60px 0;
  .logo {
    width: 515px;
  }
  .text {
    font-size: 26px;
    font-weight: 700;
    color: #007167;
    padding: 0 20px;
  }
}

//iphone
@media only screen and (max-width: 414px) {
  .slogan {
    padding: 30px 0;
    .logo {
      width: 200px;
    }
    .text {
      font-size: 16px;
      padding: 0 10px;
    }
  }
}
</style>