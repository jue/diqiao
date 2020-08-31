<template>
  <div>
    <img :src="'/imgs/product/long/'+long+'/'+long+'_top.jpg'" />
    <div class="video">
      <img :src="'/imgs/product/long/'+long+'/'+long+'_videozone.jpg'" class="videozone" />
      <img
        :src="'/imgs/product/long/'+long+'/'+long+'_videopic.png'"
        @click="showVideo('/imgs/product/long/'+long+'/'+long+'.mp4')"
        class="videopic"
      />
    </div>

    <img :src="'/imgs/product/long/'+long+'/'+long+'_intro.jpg'" @click="onPreview" />
    <online-video ref="video"></online-video>
    <image-viewer
      :on-close="closeViewer"
      :url-list="['/imgs/product/'+long+'/spec.jpg']"
      v-if="showViewer"
    ></image-viewer>
  </div>
</template>
<script>
import OnlineVideo from '@/components/OnlineVideo.vue'
import ImageViewer from 'element-ui/packages/image/src/image-viewer'
export default {
  props: ['long'],
  components: {
    OnlineVideo,
    ImageViewer
  },
  data() {
    return {
      showViewer: false
    }
  },
  methods: {
    showVideo(vurl) {
      this.$refs.video.show(vurl)
    },
    onPreview() {
      this.showViewer = true
    },
    // 关闭查看器
    closeViewer() {
      this.showViewer = false
    }
  }
}
</script>
<style lang="less" scoped>
.video {
  position: relative;
  .videozone {
    position: relative;
    z-index: 1;
  }
  .videopic {
    cursor: pointer;
    position: absolute;
    width: 80%;
    z-index: 2;
    top: 65%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>