<template>
  <div class="container">
    <inner-top></inner-top>
    <div class="wrapper">
      <div class="main">
        <nuxt />
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
export default {
  components: {
    InnerTop,
    Slogan,
    Footer
  }
}
</script>

<style lang="less" scoped>
.main {
  background: #fff;
  min-height: 500px;
  border-radius: 25px;
  padding: 60px;
  color: #24a18f;
}
//iphone
@media only screen and (max-width: 414px) {
  .main{
    margin: 0 20px;
    padding: 20px;
  }
}
</style>
