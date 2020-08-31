<template>
  <div class="timeline">
    <div
      :class="{ 'to-right' : item.direction == 1}"
      :key="index"
      class="item"
      v-for="(item, index) in listData"
    >
      <div class="img-box">
        <img :src="item.cover" />
      </div>
      <div class="dot">
        <div class="in-dot"></div>
      </div>
      <div class="content">
        <div class="line line-1" v-if="item.f1 != ''">
          <span :class="{bg: item.f1_bg == '1' }">{{item.f1}}</span>
        </div>
        <div class="line line-2" v-if="item.f2 != ''">
          <span :class="{bg: item.f2_bg == '1' }">{{item.f2}}</span>
        </div>
        <div class="line line-3" v-if="item.f3 != ''">
          <span :class="{bg: item.f3_bg == '1' }">{{item.f3}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['listData']
}
</script>
<style lang="less" scoped>
.item {
  position: relative;
  display: flex;
  padding: 10px 0;
  align-items: center;

  &:after {
    position: absolute;
    content: ' ';
    height: 100%;
    width: 4px;
    background: #dfdfe0;
    top: 0;
    left: calc(50% - 2px);
    z-index: 1;
  }
  &:first-child {
    &:after {
      height: 50%;
      top: 50%;
    }
  }

  &:last-child {
    &:after {
      height: 50%;
    }
  }

  :first-child {
    text-align: right;
  }

  &.to-right {
    flex-direction: row-reverse;
    :first-child {
      text-align: left;
    }
    .content {
      .line {
        text-align: right;
        margin-right: 50px;
      }
    }

    .dot {
      .in-dot {
        &:before {
          left: calc(-250%);
        }
        &:after {
          left: calc(-300% + 5px);
        }
      }
    }
  }

  .dot {
    width: 40px;
    height: 40px;
    background: #dfdfe0;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
    .in-dot {
      width: 55%;
      height: 55%;
      background: #24a18f;
      border-radius: 50%;
      position: relative;
      &:before {
        display: block;
        content: ' ';
        height: 2px;
        width: 300%;
        background: #24a18f;
        position: absolute;
        top: calc(50% - 1px);
        left: 50%;
      }
      &:after {
        display: block;
        content: ' ';
        height: 10px;
        width: 10px;
        background: #24a18f;
        border-radius: 50%;
        position: absolute;
        top: calc(50% - 5px);
        left: calc(300% + 5px);
      }
    }
  }
  .img-box,
  .content {
    flex: 1;
    padding: 0 20px;
  }

  .content {
    font-size: 22px;
    display: flex;
    flex-direction: column;
    .line {
      color: #24a18f;
      text-align: left;
      margin-left: 50px;
      margin-right: 50px;
      span {
        padding: 2px 5px;
      }
      .bg {
        background: #24a18f;
        color: #fff;
        border-radius: 10px;
      }
    }
  }
}

//iphone
@media only screen and (max-width: 414px) {
  .item {
    flex-direction: column-reverse;
    &:after {
      display: none;
    }
    &.to-right {
      flex-direction: column-reverse;
    }
    .dot {
      display: none;
    }
    .content {
      font-size: 12px;
      line-height: 1.6;
      width: 100%;
      .line {
        margin-left: 0px;
        margin-right: 0px;
      }
    }
  }
  .item.to-right .content .line {
    margin: 0;
    text-align: left;
  }
}
</style>