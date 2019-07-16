//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    text: "This is page data."
  },
  onLoad: function (options) {
    // Do some initialize when page load.
    console.log('onLoad');
  },
  onReady: function () {
    // Do something when page ready.
    console.log('onReady');
  },
  onShow: function () {
    // Do something when page show.
    console.log('onShow');
  },
  onHide: function () {
    // Do something when page hide.
    console.log('onHide');
  },
  onUnload: function () {
    // Do something when page close.
    console.log('onUnload');
  },
  touchstartDemo: function (){
    console.log('touchstartDemo');
  },
  touchmoveDemo: function () {
    console.log('touchmoveDemo');
  },
  touchendDemo: function () {
    console.log('touchendDemo');
  },
  tapDemo: function () {
    console.log('tapDemo');
  },
  longpressDemo: function () {
    console.log('longpressDemo');
  }
})
