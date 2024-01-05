<template>
  <div class="footer">
    <div class="wrapper main">
      <div class="info">
        <div class="links">
          <nuxt-link class="link" to="/">首页</nuxt-link>|
          <nuxt-link class="link" to="/products/?cate=pregnant"
            >产品中心</nuxt-link
          >| <nuxt-link class="link" to="/knowledge">钙营养学院</nuxt-link>|
          <nuxt-link class="link" to="/plan">骨健康领先计划</nuxt-link>|
          <nuxt-link class="link" to="/honor">迪巧荣誉</nuxt-link>|
          <span class="link" @click="$store.commit('update_buyBox', true)"
            >在线购买</span
          >
        </div>
        <div class="com">
          青岛百洋医药股份有限公司 互联网药品信息服务资格证书 <a target="_blank" href="http://www.beian.gov.cn/"
            >鲁ICP备10008593号-5</a
          >
          <br />客服电话：400-618-9819
        </div>
        <div class="copyright">
          Copyright © 迪巧 版权所有 All Rights Reserved. <a
            href="https://beian.mps.gov.cn/#/query/webSearch?code=37020302372365"
            target="_blank"
          >
            <img
              alt
              src="../../static/imgs/beian.png"
              style="height: 17px; vertical-align: text-bottom; margin-right:2px;"
            />鲁公网安备37020302372365号</a
          >
        </div>
      </div>
      <div class="qrcode-box">
        <div class="qrcode">
          <img src="/imgs/wechat_qrcode.png" />
          <span>迪巧微信公众号</span>
        </div>
        <div class="qrcode">
          <img src="/imgs/weibo_qrcode.png" />
          <span>迪巧新浪微博</span>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.footer {
  background: #007167;
  padding: 55px 0;
}
.main {
  display: flex;
  a {
    color: rgba(250, 250, 250, 0.8);
    &:hover {
      color: rgba(250, 250, 250, 1);
    }
  }
  .info {
    width: 65%;
    text-align: center;
    color: rgba(250, 250, 250, 0.8);
    .links,
    .com,
    .copyright {
      padding: 10px 0;
    }
    .links {
      .link {
        margin: 0 5px;
        cursor: pointer;
      }
    }
  }
  .qrcode-box {
    display: flex;
    justify-content: center;
  }
  .qrcode {
    padding: 0 10px;
    img {
      display: block;
    }
    span {
      display: block;
      text-align: center;
      color: rgba(250, 250, 250, 0.8);
      padding: 5px 0;
    }
  }
}

//iphone
@media only screen and (max-width: 414px) {
  .footer {
    background: #007167;
    padding: 30px 0;
  }
  .main {
    flex-direction: column;
    .info {
      width: 100%;
      font-size: 12px;
      .links {
        display: none;
      }
    }
    .qrcode-box {
      padding-top: 20px;
    }
  }
}
</style>
