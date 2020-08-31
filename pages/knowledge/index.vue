<template>
  <div class="content">
    <div class="box">
      <div class="box-head">
        <i class="iconfont icon1"></i>
        <span>钙营养学院</span>
      </div>
    </div>

    <el-row :gutter="40">
      <el-col :md="12" :xs="24">
        <a class="c-box" href="/knowledge/list/pregnant">
          <img src="/imgs/knowledge/c001.png" />
        </a>

        <a class="c-box" href="/knowledge/list/child">
          <img src="/imgs/knowledge/c003.png" />
        </a>
        <a class="c-box" href="/knowledge/list/advisory">
          <img src="/imgs/knowledge/c005.png" />
        </a>
      </el-col>
      <el-col :md="12" :xs="24">
        <a class="c-box" href="/knowledge/list/baby">
          <img src="/imgs/knowledge/c002.png" />
        </a>

        <a class="c-box" href="/knowledge/list/adult">
          <img src="/imgs/knowledge/c004.png" />
        </a>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  layout: 'inner',
  head: {
    title: '迪巧官网 - 美国迪巧 进口钙连续四年销量领先'
  }
  // async asyncData({ app, params }) {
  //   let slug = params.slug
  //   return await app.$axios
  //     .$post('/knowledge/index', {
  //       cate: slug,
  //       count: 10000,
  //       page: 1
  //     })
  //     .then(res => {
  //       return {
  //         listData: res.data.list
  //       }
  //     })
  // }
}
</script>

<style lang="less" scoped>
.content {
  padding: 0 60px;
}
.item {
  display: flex;
  align-items: center;
  line-height: 110px;
  position: relative;
  cursor: pointer;
  &:after {
    content: ' ';
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background: linear-gradient(
      90deg,
      rgba(250, 250, 250, 1),
      rgba(36, 161, 143, 1),
      rgba(250, 250, 250, 1)
    );
  }

  .dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #24a18f;
    margin-right: 20px;
  }
  .title {
    font-size: 24px;
    color: #898989;
    flex: 1;
  }
  .btn {
    height: 32px;
    width: 32px;
    background: rgba(36, 161, 143, 1);
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    border-radius: 50%;
    cursor: pointer;
    &:hover {
      background: rgba(36, 161, 143, 0.8);
    }
  }
}
.box {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
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

.c-box {
  text-align: center;
  margin-bottom: 24px;
  display: block;
  img {
    width: 100%;
  }
}

.no-data {
  text-align: center;
}

//iphone
@media only screen and (max-width: 414px) {
  .content {
    padding: 0;
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

  .c-box {
    margin-bottom: 20px;
  }

  .item {
    line-height: 40px;
    .dot {
      margin-right: 5px;
    }
    .title {
      font-size: 14px;
    }
    .btn {
      width: 20px;
      height: 20px;
      font-size: 16px;
    }
  }
}
</style>
