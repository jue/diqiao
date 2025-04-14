<template>
  <div class="video">
    <div :key="index" class="items" v-for="(item, index) in videoList">
      <div class="title">
        <i :class="item.icon" class="iconfont"></i>
        <span>{{ item.title }}</span>
      </div>
      <div @click="showVideo(item.vurl)" class="img">
        <img :src="item.imgSrc" />
      </div>
    </div>
    <online-video ref="video"></online-video>
  </div>
</template>
<script>
import OnlineVideo from '@/components/OnlineVideo.vue'
export default {
  components: {
    OnlineVideo,
  },
  data() {
    return {
      vurl: '',
      videoList: [
        {
          title: '专家科普 Technical expert',
          icon: 'icon4',
          imgSrc: '/imgs/index/video001.png',
          vurl: '/zj.mp4',
        },
        {
          title: '品牌故事 Brand Story',
          icon: 'icon6',
          imgSrc: '/imgs/index/video002.png',
          vurl: 'http://api.diqiao.com.cn/attachment/diqiao/diqiao3.mp4',
        },
      ],
    }
  },
  methods: {
    showVideo(vurl) {
      if (!vurl.includes('http')) {
        this.$refs.video.show(vurl)
      }
    },
  },
}
</script>
<style lang="less" scoped>
.video {
  display: flex;
  .items {
    margin: 0 16px;
    border-radius: 25px;
    overflow: hidden;
    .title {
      line-height: 49px;
      background: #24a18f;
      color: #fff;
      font-size: 22px;
      display: flex;
      align-items: center;
      justify-content: center;
      .iconfont {
        font-size: 44px;
      }
    }
    .img {
      cursor: pointer;
    }
  }
}

//iphone
@media only screen and (max-width: 414px) {
  .video {
    flex-direction: column;
    padding: 0 20px;
    .items {
      margin: 0 0 30px 0;
      .title {
        font-size: 18px;
        .iconfont {
          font-size: 30px;
        }
      }
    }
  }
}
</style>
