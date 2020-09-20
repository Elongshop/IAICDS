// miniprogram/pages/my/index.js
const DEFAULT_PAGE = 0;
Page({
  startPageX: 0,
  currentView: DEFAULT_PAGE,
  /**
   * 页面的初始数据
   */
  data: {
    Info:{},
    toView: `card_${DEFAULT_PAGE}`,
    list: ['我的笔记本', '我的笔记', '我的评价']
  },

  touchStart(e) {
    this.startPageX = e.changedTouches[0].pageX;
  },

  touchEnd(e) {
    const moveX = e.changedTouches[0].pageX - this.startPageX;
    const maxPage = this.data.list.length - 1;
    if (Math.abs(moveX) >= 150){
      if (moveX > 0) {
        this.currentView = this.currentView !== 0 ? this.currentView - 1 : 0;
      } else {
        this.currentView = this.currentView !== maxPage ? this.currentView + 1 : maxPage;
      }
    }
    this.setData({
      toView: `card_${this.currentView}`
    });
  },

  我的笔记本: function(){
    wx.navigateTo({
      url: '../my/study/my-notebook/my-notebook',
    })
  },

  我的笔记: function(){
    wx.navigateTo({
      url: '../my/study/my-note/my-note',
    })
  },

  我的评价: function(){
    wx.navigateTo({
      url: '../my/study/my-comment/my-comment',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      // wx.login({
      //   success: function(res){
      //      //console.log(res);
      //      wx.request({
      //        url: 'https://api.weixin.qq.com/sns/component/jscode2session?appid=APPID&js_code=JSCODE&grant_type=authorization_code&component_appid=COMPONENT_APPID&component_access_token=COMPONENT_ACCESS_TOKEN',
      //        data:{
      //          code: res.code
      //        },
      //        success: function(res){
      //           const self = this
      //           console.log(res);
      //           var json = JSON.parse(res.data.Data);

      //        }
      //      })
      //   }
      // })
      var that = this
      wx.getUserInfo({
        
        success(res) {   
          console.log(res);
          that.setData({
            Info: res.userInfo
          })
        }
      })
      wx.cloud.callFunction({
        name: 'login'
    }).then(function(res){
      const db = wx.cloud.database();
      db.collection('user').add({
        data:{
          username: that.data.Info.nickName,
          id : res.result.event.userInfo.openId
        },
        success:res=> {
          console.log(res);
        }
      })
    }).catch(function(err){
      console.log(err);
    })
     
  },

    

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
    

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})