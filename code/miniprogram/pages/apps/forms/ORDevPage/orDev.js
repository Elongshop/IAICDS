const util = require('../../../../utils/utils')
const db = wx.cloud.database();
Page({

  data: {
    value: 70,
    gradientColor: {
      '0%': '#ff0000',
      '100%': '#00cc00',
    },
    state:'待处理',
    disabled_confirm: false,
    disabled_submit: true,
    start_time:'',
    end_time:''
  },

  form_confirm: function(event){
    this.setData({
      state: event.target.dataset.state,
      disabled_confirm: true,
      disabled_submit: false
    })
    wx.showLoading({
      title: '正在处理中...',
    })
    let start_time = util.formatTime(new Date())
    this.setData({
      start_time
    })
  },

  form_submit: function(event){
    let end_time = util.formatTime(new Date())
    this.setData({
      end_time
    })
    db.collection('or').add({
      data: {
        time:end_time,
        type:"外圈故障"
      }
    }).then(res=>{
      wx.hideLoading({
        success: (res) => {
          wx.showToast({
            title: '工单已完成',
          })
        },
      })
      this.setData({
        state: event.target.dataset.state,
        disabled_confirm: false,
        disabled_submit: true
      })
      this.getFormData()
    })
  },
  
  
  getFormData(){
    let orArray = []
    db.collection('or').aggregate()
    .sort({
      time:-1
    })
    .end().then(res=>{
      orArray =res.list.map(item=>{
        return {
          type:item.type,
          time:item.time
        }
      })
      let val = orArray.length
      this.setData({
        value:val
      })
      if(orArray.length>=5){
        orArray = orArray.slice(0,5)
      }
      this.setData({
        orArray
      })
    })
  },
  onLoad: function (options) {
    this.getFormData()
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