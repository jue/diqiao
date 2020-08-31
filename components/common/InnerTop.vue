<template>
  <div class="top">
    <Menu></Menu>
    <img class="top-img" :src="topIMg" />
  </div>
</template>
<script>
import Menu from '@/components/common/Menu.vue'
export default {
  components: {
    Menu
  },
  computed: {
    topIMg(){
      return this.$route.name == 'index' ? '/imgs/index/top1.jpg' : '/imgs/banner.png'
    }
  }
}
</script>
<style lang="less" scoped>
.top {
  position: relative;
  margin-bottom: 50px;

  // height: 339px;
  // background: url(/imgs/banner.png) no-repeat center top;
  .top-img {
    position: relative;
    margin-top: -110px;
    min-width: 1186px;
  }
}
@media only screen and (max-width: 414px) {
  .top {
    margin-bottom: 40px;
    background-size: 100%;
    .top-img {
      margin-top: 0;
      min-width: 100%;
    }
  }
}
</style>