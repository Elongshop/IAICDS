// miniprogram/pages/my/study/my-comment/my-comment.js
const db = wx.cloud.database();
Page({

  /**
   * 页面的初始数据
   */
  data: {
      content: '',
      score_fan: 5,
      score_form: 5,
      score_component: 5,
      score_viewing: 5,
  },
    
  submit: function(){
    wx.showLoading({
      title: '评论中',
    })
    console.log(this.data.content);

    db.collection('myComment').add({
      data: {
        score_fan: this.data.score_fan,
        score_form: this.data.score_form,
        score_component: this.data.score_component,
        score_viewing: this.data.score_viewing,
        content: this.data.content,
      }
    }).then(res=>{
      
      wx.hideLoading();
      wx.showToast({
        title: '评价成功',
      })
    }).catch(err=>{
      wx.hideLoading();
      wx.showToast({
        title: '评价失败',
      })
    })

  },

  onContentChange: function (event) {
    this.setData({
      content: event.detail
    });
  },

  onfanScoreChange: function(event){
    console.log(event)
    this.setData({
      score_fan: event.detail
    })
  },

  onformScoreChange: function(event){
    console.log(event)
    this.setData({
      score_form: event.detail
    })
  },

  oncomponentScoreChange: function(event){
    console.log(event)
    this.setData({
      score_component: event.detail
    })
  },

  onviewingScoreChange: function(event){
    console.log(event)
    this.setData({
      score_viewing: event.detail
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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