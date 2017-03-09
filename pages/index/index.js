//index.js
//获取应用实例
const $vm = getApp()

const {parseNews, parseBanner} = $vm.utils

Page({
  data: {
    newsList: [],
    bannerList: [],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    page: 1,
    subtitle: '加载中...',
    loading: true,
    hasMore: true
  },
  onLoad: function () {
    const self = this
    const News_URL = $vm.serverPath + '/open/article'
    const Banner_URL = $vm.serverPath + '/open/article/banners'

    this.setData({ subtitle: '加载中...', loading: true })
    
    // 新闻列表
    wx.request({
      url: News_URL + '?pageIndex=' + self.data.page,
      header: {},
      method: 'GET',
      success: function(res){
        self.setData({
          newsList: parseNews(res.data.data),
          page: self.data.page + 1,
          loading: false
        })
      },
      fail: function(msg) {
         this.setData({ subtitle: '获取数据异常', loading: false })
      }
    })

    // 轮播列表

    wx.request({
      url: Banner_URL,
      header: {},
      method: 'GET',
      success: function(res){
        self.setData({
          bannerList: parseBanner(res.data.data),
          loading: false
        })
      },
      fail: function(msg) {
         this.setData({ subtitle: '获取数据异常', loading: false })
      }
    })
  },
  goToDetail: function(e) {
    var newsId = e.target.dataset.id
    var url = '/pages/detail/detail?id='+newsId
    wx.navigateTo({
        url: url
    })
  },
  loadMore: function () {
      const self = this
      const News_URL = $vm.serverPath + '/open/article'

      if (!self.data.hasMore) return

      self.setData({ subtitle: '加载中...', loading: true })
      
      wx.request({
        url: News_URL + '?pageIndex=' + self.data.page,
        header: {},
        method: 'GET',
        success: function(res){
          if (res.data.data.length ) {
            self.setData({
              newsList: self.data.newsList.concat(parseNews(res.data.data)),
              page: self.data.page + 1,
              loading: false
            })
          } else {
            self.setData({
              hasMore: false,
              loading: false
            })
          }
        },
        fail: function(msg) {
          self.setData({ subtitle: '获取数据异常', loading: false })
        }
      })
    }
})
