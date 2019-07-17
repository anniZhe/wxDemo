//index.js
//获取应用实例
const wx = getApp()

Page({
  data: {
    swipermap:{
      indicatorDots: true,
      indicatorColor: '#C0C0C0',
      indicatorActiveColor: '#00FF00',
      autoplay: true,
      current:0,
      circular:true
    },
    imgUrls: [],
    btnTest: 13
  },
  onLoad: function (options) {
    wx.showShareMenu({
      withShareTicket: true
    })
  },
  onReady: function () {
    this.setData({
      imgUrls: wx.globalData.doc.home.bannerImg
    });
  },
  onShow: function () {
  },
  onHide: function () {
    console.log('onHide');
  },
  onUnload: function () {
    console.log('onUnload');
  },
  btn: function () {
    this.setData({
      btnTest: 'abc'
    });
  },
  onShareAppMessage: function () {

  }
})
