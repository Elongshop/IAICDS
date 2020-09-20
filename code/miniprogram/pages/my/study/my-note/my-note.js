// miniprogram/pages/my/my-study/my-note/my-note.js
const util = require('../../../../utils/utils')
const db = wx.cloud.database();
Page({

  /**
   * 页面的初始数据
   */
  data: {
      textplan: '',
      textprogress: '',
      textgain: '',
      textconclusion: '',
      texttime:''
  },

 
  submit: function(){
    
    if(
      this.data.textplan!==''&&
      this.data.textprogress!==''&&
      this.data.textgain!==''&&
      this.data.textconclusion!=='' 
      ){
      wx.showLoading({
      title: '提交中',
    })
    //console.log(this.data);
   let time = util.formatTime(new Date());
    console.log(time);
    db.collection('myNote').add({
      data: {
        textplan: this.data.textplan.value,
        textprogress: this.data.textprogress.value,
        textgain: this.data.textgain.value,
        textconclusion: this.data.textconclusion.value,
        texttime: time
      }
    }).then(res=>{
      
      wx.hideLoading();
      wx.showToast({
        title: '提交成功',
      });


    }).catch(err=>{
      wx.hideLoading();
      wx.showToast({
        title: '提交失败',
      })
    })
   }
   else{
    wx.showToast({
      title: '提交失败',
    })
   }
  },

  onplanContentChange: function (event) {
    //console.log(event)
    this.setData({
      textplan: event.detail
    });
  },

  onprogressContentChange: function (event) {
    //console.log(event)
    this.setData({
      textprogress: event.detail
    });
  },

  ongainContentChange: function (event) {
    //console.log(event)
    this.setData({
      textgain: event.detail
    });
  },

  onconclusionContentChange: function (event) {
    //console.log(event)
    this.setData({
      textconclusion: event.detail
    });
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