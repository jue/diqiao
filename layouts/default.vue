<template>
  <nuxt />
</template>

<style lang="less">
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
  outline: none;
  // transition: all 0.2s linear;
}
body {
  color: rgba(0, 0, 0, 0.65);
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 14px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  padding: 0;
  background-color: #e9f5f4;
}
a {
  text-decoration: none;
  color: #409eff;
}
img {
  max-width: 100%;
  vertical-align: middle;
}
/* 滚动槽 */
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}
::-webkit-scrollbar-track {
  border-radius: 3px;
  background: rgba(0, 0, 0, 0.06);
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.08);
}
/* 滚动条滑块 */
::-webkit-scrollbar-thumb {
  border-radius: 3px;
  background: rgba(0, 0, 0, 0.12);
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.2);
}
.wrapper {
  width: 1186px;
  margin: 0 auto;
}

.container {
  margin: 0 auto;
  /* display: flex;
  justify-content: center;
  align-items: center;
  text-align: center; */
}
// .top {
//   position: relative;
//   margin-bottom: 100px;

//   // height: 339px;
//   // background: url(/imgs/banner.png) no-repeat center top;
//   .top-img{
//     position: relative;
//     margin-top: -110px;
//     min-width: 1186px;
//   }
// }
.pc {
  display: block;
}
.m {
  display: none;
}

//iphone
@media only screen and (max-width: 414px) {
  .pc {
    display: none;
  }
  .m {
    display: block;
  }
  .wrapper {
    width: 100%;
  }
  ::-webkit-scrollbar {
    display: none;
  }
}
</style>
