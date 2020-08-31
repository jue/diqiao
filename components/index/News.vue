<template>
  <div class="news">
    <a :href="'/news/'+item.sys_id" :key="index" class="items" v-for="(item, index) in listData">
      <!-- <img :src="item.cover" class="head" /> -->
      <div class="head">
        <img :src="item.cover" style="width: 100%" />
        <!-- <el-image style="width: 100%; height: 100%" fit="cover" :src="item.cover"></el-image> -->
      </div>
      <div class="body">
        <div class="title">{{item.title}}</div>
        <div class="content">{{item.content}}</div>
        <div class="date">
          <i class="el-icon-time"></i>
          <span>{{item.create_date}}</span>
        </div>
      </div>
    </a>
  </div>
</template>
<script>
export default {
  props: ['listData']
}
</script>
<style lang="less" scoped>
.news {
  display: flex;
  .items {
    display: block;
    width: 360px;
    display: flex;
    flex-direction: column;
    margin: 0 4px;
    background: #fff;
    border-radius: 20px;
    overflow: hidden;
    .head {
      height: 160px;
      overflow: hidden;
    }
    .body {
      padding: 20px 30px;
      .title {
        color: #01594b;
        margin-bottom: 10px;
        line-height: 1.8;
        font-size: 16px;
      }
      .content {
        font-size: 12px;
        color: #727171;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        text-align: justify;
      }
      .date {
        text-align: right;
        font-size: 12px;
        color: #727171;
        padding-top: 10px;
      }
    }
    .footer {
      text-align: right;
      font-size: 12px;
      color: #727171;
      padding: 5px 20px 10px;
    }
  }
}

//iphone
@media only screen and (max-width: 414px) {
  .news {
    padding: 0 20px;
    // flex-direction: column;
    .items {
      width: 100%;
      // flex-direction: row;
      margin-bottom: 0px;
      .head {
        height: auto;
        img{
          height: 52px;
        }
      }
      .body {
        padding: 10px 15px;
        .title {
          font-size: 14px;
          line-height: 1.4;
        }
        .content{
          display: none;
        }
        .date{
          display: none;
        }
      }
    }
  }
}
</style>