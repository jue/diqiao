<template>
  <div class="content">
    <el-row>
      <el-col :span="24">
        <time-line :listData="listData"></time-line>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import TimeLine from '@/components/TimeLine.vue'
export default {
  layout: 'inner',
  head: {
    title: '迪巧 全球补钙专家'
  },
  components: {
    TimeLine
  },
  async asyncData({ app }) {
    return await app.$axios
      .$post('/tree/index', {
        cate: 'honor'
      })
      .then((res) => {
        return {
          listData: res.data.list
        }
      })
  }
}
</script>

<style lang="less" scoped>
.title {
  border-bottom: 3px #39baa7 solid;
  margin: 20px 0;
  position: relative;
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 3px;
    bottom: -6px;
    left: 0;
    background: #fff888;
  }
  .title-head {
    display: inline-block;
    background: #39baa7;
    color: #fff;
    font-size: 22px;
    padding: 3px 40px;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
  }
}
.win {
  position: relative;
  .win-img {
    position: relative;
    z-index: 1;
    border-radius: 20px;
  }
  .meng {
    border-radius: 20px;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 2;
    background: rgba(0, 0, 0, 0.3);
    .el-icon-video-play {
      font-size: 70px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: rgba(250, 250, 250, 0.8);
      cursor: pointer;
    }
  }
}
.txt {
  font-size: 20px;
  color: #898989;
}
//iphone
@media only screen and (max-width: 414px) {
  .content {
    margin: 0 -20px;
  }
}
</style>
