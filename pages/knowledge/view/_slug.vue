<template>
  <div class="wrappers">
    <div class="box">
      <div class="box-head">
        <i class="iconfont icon1"></i>
        <span>常见问题</span>
      </div>
    </div>

    <el-row>
      <el-col :span="24">
        <div class="title">{{ listData.title }}</div>
        <div class="content" v-html="listData.content"></div>
      </el-col>
    </el-row>
    <div class="divider"></div>
    <div class="pages">
      <div class="line">
        <span>上一篇:</span>
        <a
          class="link"
          :href="'/knowledge/view/' + listData.prev.sys_id"
          v-if="listData.prev"
          >{{ listData.prev.title }}</a
        >
        <span v-else>没有了</span>
      </div>
      <div class="line">
        <span>下一篇:</span>
        <a
          class="link"
          :href="'/knowledge/view/' + listData.next.sys_id"
          v-if="listData.next"
          >{{ listData.next.title }}</a
        >
        <span v-else>没有了</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'inner',
  head: {
    title: '迪巧 全球补钙专家'
  },
  async asyncData({ app, params }) {
    return await app.$axios
      .$post('/knowledge/detail', {
        sys_id: params.slug,
        search: ''
      })
      .then((res) => {
        return {
          listData: res.data
        }
      })
  }
}
</script>

<style lang="less" scoped>
.box {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
  .box-head {
    width: 44.9%;
    line-height: 46px;
    background: #24a18f;
    border-radius: 23px;
    color: #fff;
    font-size: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;
    .iconfont {
      font-size: 44px;
    }
  }
}
.wrappers {
  padding: 0 60px;
}

.title {
  font-size: 30px;
  color: #24a18f;
  font-weight: 600;
  text-align: center;
}

.content {
  font-size: 26px;
  color: #898989;
  line-height: 1.8;
  padding: 40px 0;
  // text-align: justify;
  // text-indent: 52px;
  p {
    padding: 10px 0;
    text-indent: 40px;
    display: block;
  }
  img {
    width: 100%;
  }
}

.divider {
  height: 2px;
  background: linear-gradient(
    90deg,
    rgba(250, 250, 250, 1),
    rgba(36, 161, 143, 1),
    rgba(250, 250, 250, 1)
  );
}
.pages {
  padding: 30px 0;
  .line {
    span {
      color: #24a18f;
    }
    .link {
      color: #898989;
    }
  }
}
//iphone
@media only screen and (max-width: 414px) {
  .wrappers {
    padding: 0;
  }
  .title {
    font-size: 20px;
  }
  .content {
    font-size: 14px;
  }
  .box {
    margin-bottom: 0px;
    .box-head {
      width: 80%;
      font-size: 18px;
      .iconfont {
        font-size: 30px;
      }
    }
  }
}
</style>
