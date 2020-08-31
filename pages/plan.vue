<template>
  <div class="content">
    <el-row :gutter="40">
      <el-col :md="11" :xs="24">
        <div class="win">
          <img class="win-img" src="/imgs/knowledge/pic.png" />
          <!-- <div class="meng">
            <i class="el-icon-video-play"></i>
          </div> -->
        </div>
      </el-col>
      <el-col :md="13" :xs="24">
        <div class="txt">
          <p>2019年中国教育科学研究院调研数据表示，由于高科技电子化产品的渗透，儿童户外活动和体育锻炼的时间和机会却越来越少，我国儿童青少年体质健康状况正面临着严峻的考验。</p>
          <p>缺乏运动致使体重超标，骨骼发育、肌耐力、反应等体能指标明显下降，我国青少年体质经过二十多年的持续下滑，在多年各方的努力下，部分指标有止跌回升的势头，但距离“健康体质”全面达标仍有较大差距。2020年，中国优生科学协会携手美国迪巧开展全民骨健康领先计划，针对儿童身高发展，开展“让长高遥遥领先”活动，呼吁家长更多关注儿童身高发展，也通过活动，带动孩子巧食，多动，睡好觉。</p>
        </div>
      </el-col>
    </el-row>
    <div class="title">
      <span class="title-head">近期活动</span>
    </div>
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
    title: '迪巧官网 - 美国迪巧 进口钙连续四年销量领先'
  },
  async asyncData({app}) {
    return await app.$axios.$post('/tree/index', {
      cate: 'plan'
    }).then(res => {
      return {
        listData: res.data.list
      }
    })
  },
  components: {
    TimeLine
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
  font-size: 19px;
  color: #898989;
  text-indent: 36px;
  line-height: 1.6;
  text-align: justify;
}
//iphone
@media only screen and (max-width: 414px) {
  .content {
    margin: 0 -20px;
  }
  .txt {
    font-size: 14px;
    padding: 20px 0;
  }
}
</style>
