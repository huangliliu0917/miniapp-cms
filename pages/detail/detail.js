//index.js
//获取应用实例
const $vm = getApp()

const {parseDetail} = $vm.utils

const WxParse = require('../../utils/wxParse/wxParse')


Page({
  data: {
    details: {}
  },
  onLoad: function (options) {
    const that = this
    
    let Detail_URL = $vm.serverPath + '/open/article/' + options.id

    wx.showNavigationBarLoading()
    
    // 新闻列表
    wx.request({
      url: Detail_URL,
      header: {},
      method: 'GET',
      success: function(res){
         that.setData({
          details: parseDetail(res.data.data)
        })
        var content = that.data.details.content
        WxParse.wxParse('content', 'html', content, that)

        wx.hideNavigationBarLoading()
      },
      fail: function(msg) {
        console.log('reqest error',msg)
        wx.hideNavigationBarLoading()
      }
    })
  }
})
