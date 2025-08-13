<template>
  <div class="content">
    <el-row :gutter="40" class="flex">
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
          <p>
            迪巧作为首个倡导科学身高管理的钙剂品牌，深耕儿童身高发展事业，联合了医生、身高管理专家、营养师、运动教练等多领域专家共同构建了科学的身高管理体系，可以为儿童提供专业的身高管理方法，切实有效地促进孩子的身高增长。同时为了将科学的身高管理理念受益于更多儿童，2017年迪巧联合中国儿童少年基金会共同携手开展“中国儿童身高促进计划”系列公益活动，多年来开举办近6万场身高管理活动，共计为近千万儿童进行了身高管理服务和科普，得到了行业和消费者的普遍认可。
          </p>
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
    title: '迪巧 全球补钙专家'
  },
  async asyncData({ app }) {
    return await app.$axios
      .$post('/tree/index', {
        cate: 'plan'
      })
      .then((res) => {
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

.flex {
  display: flex;
  align-items: center;
}
</style>
