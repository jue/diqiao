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
          <p>根据国际骨质疏松基金会最新发布的《亚洲审计报告》显示：截至2020年,中国骨质疏松或骨质下降的患者将增至2.87亿人，这意味着约5个中国人中就有1个人的骨骼不够健康！</p>
          <p>人体206块骨头，坚硬、耐压、抗压，对身体起着保护、支持和运动的功能，维持着体内矿物质平衡。人们常用“伤筋动骨一百天”来说明骨伤恢复之慢，而“人老先老腿”的俗语，也告诉大家保持骨骼健康的重要。</p>
          <p>从新生儿佝偻病的预防、到青少年发育生长、再到壮年骨质流失、老年人骨质疏松化，骨骼生长发育影响着人的一生，骨骼健康和每一个人都有着密切的关系。</p>
          <p>2021年，迪巧继续推进全民骨健康的领先步伐，和中国优生科学协会携手继续在全国范围内开展大型巡回骨健康知识传播行动，全面覆盖孕妇、婴幼儿、儿童及中老年人群体。通过专家义诊、社区公益、惠民减免、惊喜好礼等丰富多彩的系列活动，细腻关爱家庭中每一位成员的骨健康状况，助力中国全民骨健康水平更上一层楼。</p>
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
    title: '迪巧官网 - 迪巧 进口钙领先品牌'
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
  font-size: 16px;
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
