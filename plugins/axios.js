const url = 'http://api.diqiao.com.cn';

export default function ({ $axios, redirect }) {
  $axios.onRequest(config => {
    // console.log('Making request to ' + config.url)
    if (config.url.indexOf(url) === -1) {
      config.url = url + config.url;/*拼接完整请求路径*/
    }
    return config;
  })
}