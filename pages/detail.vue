<template>
  <div class="content">
    <el-row :gutter="20">
      <el-col :md="10" :xs="24">
        <el-carousel arrow="always" class="carousel">
          <el-carousel-item v-for="i in carouselImages" :key="i">
            <div class="item">
              <img :src="'/imgs/product/' + $route.query.long + '/' + i + '.png'" @error="handleImageError(i)" />
            </div>
          </el-carousel-item>
        </el-carousel>
      </el-col>
      <el-col :md="14" :xs="24">
        <div>
          <div class="pretxt">{{ json[$route.query.long].pretxt }}</div>
          <div class="title">
            <i class="iconfont iconlogo"></i>
            {{ json[$route.query.long].name }}
          </div>
          <div class="gg">
            产品用途：{{ json[$route.query.long].line1 }}
            <br />
            产品规格：{{ json[$route.query.long].line2 }}
          </div>
        </div>

        <div class="desc">
          <div class="buy">
            <span @click="$store.commit('update_buyBox', true)" class="btn">在线购买</span>
          </div>
          <div class="small">可前往迪巧指定的经销商或线下各大药房购买</div>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">

        <img :src="'/imgs/product/long/' + $route.query.long + '_long.jpg'" @error="$handleImageError"
          @click="onPreview" class="desc-img" />
        <img :src="'/imgs/product/' + $route.query.long + '/spec2.jpg'" class="desc-img" @error="$handleImageError" />
        <!-- <el-image v-else :preview-src-list="['/imgs/product/'+$route.query.long+'/1.png']" :src="'/imgs/product/long/'+$route.query.long+'_long.jpg'" class="desc-img"></el-image> -->
      </el-col>
    </el-row>
    <image-viewer :on-close="closeViewer" :url-list="['/imgs/product/' + $route.query.long + '/spec.jpg']"
      v-if="showViewer"></image-viewer>
  </div>
</template>

<script>
import ImageViewer from 'element-ui/packages/image/src/image-viewer'
export default {
  layout: 'inner',
  head: {
    title: '迪巧官网 - 迪巧 进口钙领先品牌'
  },
  components: {
    ImageViewer
  },
  methods: {
    onPreview () {
      this.showViewer = true
    },
    // 关闭查看器
    closeViewer () {
      this.showViewer = false
    },
    handleImageError (index) {
      const imageIndex = this.carouselImages.indexOf(index);
      if (imageIndex !== -1) {
        this.carouselImages = this.carouselImages.slice(0, imageIndex);
      }
    },
  },
  data () {
    return {
      showViewer: false,
      json: {
        pregnant001: {
          pretxt: '专为成人设计',
          name: '维D钙咀嚼片',
          line1:
            '用于妊娠和哺乳期妇女、更年期妇女、老年人、儿童等的钙补充剂，并帮助防治骨质疏松症。',
          line2: '每瓶30片、60片、90片或120片'
        },
        pregnant002: {
          pretxt: '专为孕妈设计',
          name: '钙维生素D咀嚼片',
          line1: '补充钙、维生素D',
          line2: '每瓶86片或106片'
        },
        pregnant003: {
          pretxt: '专为成人设计',
          name: '迪巧小粉条液体钙',
          line1: '成人钙补充',
          line2: '20条/6条'
        },
        baby001: {
          pretxt: '专为0-3岁宝宝设计',
          name: '小儿碳酸钙D3颗粒',
          line1: '儿童钙补充',
          line2: '每盒10袋、20袋或30袋'
        },
        baby002: {
          pretxt: '专为1-3岁宝宝设计',
          name: '钙维生素D颗粒',
          line1: '补充钙、维生素D',
          line2: '每盒15袋或25袋'
        },
        baby003: {
          pretxt: '6-36个月龄婴幼儿及37-60个月龄儿童',
          name: 'DHA营养包',
          line1: '辅食营养补充食品',
          line2: '每盒30袋'
        },
        baby004: {
          pretxt: '专为0-6岁宝宝设计',
          name: '迪巧小黄条液体钙条',
          line1: '补充钙VD和VK',
          line2: '20条/盒'
        },
        child001: {
          pretxt: '专为3岁以上儿童设计',
          name: '儿童维D钙咀嚼片',
          line1: '儿童钙补充',
          line2: '每瓶30片或60片'
        },
        child002: {
          pretxt: '专为3岁以上儿童设计',
          name: '钙维生素D咀嚼片-橙子味',
          line1: '补充钙、维生素D',
          line2: '每瓶45片或80片'
        },
        child003: {
          pretxt: '专为3岁以上儿童设计',
          name: '钙维生素D咀嚼片-苹果味',
          line1: '补充钙、维生素D',
          line2: '每瓶45片或80片'
        },
        child004: {
          pretxt: '专为3岁以上儿童设计',
          name: '钙维生素D咀嚼片-菠萝味',
          line1: '补充钙、维生素D',
          line2: '每瓶45片或80片'
        },
        child00567: {
          pretxt: '专为儿童、青少年设计',
          name: '钙维生素D维生素K咀嚼片',
          line1: '补充钙、维生素D、维生素K',
          line2: '每瓶80片（橙子、菠萝、苹果）'
        },
        child006: {
          pretxt: '专为儿童、青少年设计',
          name: '钙维生素D维生素K咀嚼片',
          line1: '补充钙、维生素D、维生素K',
          line2: '每瓶80片（橙子、菠萝、苹果）'
        },
        child007: {
          pretxt: '专为儿童、青少年设计',
          name: '钙维生素D维生素K咀嚼片',
          line1: '补充钙、维生素D、维生素K',
          line2: '每瓶80片（橙子、菠萝、苹果）'
        },
        child008: {
          pretxt: '',
          name: '含钙软糖',
          line1: '',
          line2: '每瓶约58粒'
        },
        child009: {
          pretxt: '专为0-6岁宝宝设计',
          name: '迪巧小黄条液体钙条',
          line1: '补充钙VD和VK',
          line2: '20条/盒'
        },
        child00234: {
          pretxt: '专为3岁以上儿童设计',
          name: '钙维生素D咀嚼片',
          line1: '补充钙、维生素D',
          line2: '每瓶45片或80片'
        },
        child010: {
          pretxt: '-',
          name: '迪巧小黄条液体钙PLUS',
          line1: '儿童钙补充',
          line2: '20条/6条'
        },
        child011: {
          pretxt: '-',
          name: '迪巧小黄条液体钙锌',
          line1: '儿童钙、锌补充',
          line2: '20条/6条'
        },
        adult001: {
          pretxt: '专为成人设计',
          name: '碳酸钙D3片',
          line1:
            '用于妊娠和哺乳期妇女、更年期妇女、老年人等的钙补充剂并帮助防治骨质疏松症。',
          line2: '每瓶30片、60片或90片'
        },
        adult002: {
          pretxt: '专为成年女性设计',
          name: '迪巧牌秀源女性片',
          line1: '增加骨密度、调节血脂',
          line2: '30片'
        },
        adult003: {
          pretxt: '专为成人设计',
          name: '钙维生素D维生素K咀嚼片',
          line1: '补充钙、维生素D、维生素K',
          line2: '每瓶90片'
        },
        child012: {
          pretxt: '专为成人设计',
          name: '迪巧小黄条液体维生素D3',
          line1: '维生素D补充',
          line2: '30条/6条'
        },
        adult005: {
          pretxt: '专为成人设计',
          name: '迪巧双固力骨胶原钙',
          line1: '成人骨胶原钙补充',
          line2: '72片'
        },
      },
      carouselImages: [1, 2, 3, 4, 5],
    }
  }
}
</script>

<style lang="less" scoped>
.content {
  padding: 0 60px;
}

.carousel {
  /deep/ .el-carousel__arrow {
    background: none;
    font-size: 40px;
    color: #24a18f;
  }

  .item {
    text-align: center;
    padding: 0 80px;
    display: flex;
    align-items: center;
    position: relative;
    height: 100%;

    img {}
  }
}

.title {
  font-size: 38px;

  .iconlogo {
    font-size: 74px;
    vertical-align: middle;
    position: relative;
    top: -5px;
  }
}

.gg {
  font-size: 16px;
  line-height: 1.8;
  padding: 10px 0 20px;
}

.desc {
  font-size: 26px;
  line-height: 1.6;

  .buy {
    padding: 10px;

    .btn {
      color: #fff;
      background: #24a18f;
      height: 42px;
      line-height: 42px;
      border-radius: 21px;
      padding: 6px 40px;
      cursor: pointer;
    }
  }

  .small {
    font-size: 16px;
    // text-align: center;
  }
}

.desc-img {
  padding-top: 60px;
  display: block;
  margin: 0 auto;
}

//iphone
@media only screen and (max-width: 414px) {
  .content {
    padding: 0;
  }

  .carousel {
    .item {
      padding: 0 20px;
    }
  }

  .title {
    font-size: 22px;

    .iconlogo {
      font-size: 46px;
      top: -2px;
    }
  }

  .desc {
    font-size: 14px;

    .small {
      font-size: 12px;
    }
  }

  .desc-img {
    padding-top: 30px;
  }
}
</style>
