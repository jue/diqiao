import axios from 'axios'
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' },
      { hid: 'description', name: 'description', content: '迪巧D-Cal，进口钙领先品牌，钙质细腻促吸收。20年来，坚持美国本土生产，采用美国优质钙源，致力于向全球消费者提供纯净无添加、效果有保障的安心好钙。' },
      { property: "og:image", content: 'http://www.diqiao.com.cn/imgs/logo.png' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: "stylesheet",
        href: "//at.alicdn.com/t/font_1671811_c84yf976xjv.css"
      }
    ],
    script: [
      { src: "https://hm.baidu.com/hm.js?004ede576b694b1656eb7e0d88ccb5fe" }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#00594a' },
  /*
  ** Global CSS
  */
  css: [
    // 'element-ui/lib/theme-chalk/index.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/element-ui',
    '~/plugins/axios',
    {src: '@/plugins/video', ssr: false}
    // {src: '@/plugins/element-ui', ssr: false}
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
  ],
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    transpile: [/^element-ui/],
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
