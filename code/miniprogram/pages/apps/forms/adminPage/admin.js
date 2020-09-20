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
    disabled_confirm: '',
    disabled_submit: ''
  },

  form_confirm: function(event){
    //console.log(event.target.dataset.state)
    this.setData({
      state: event.target.dataset.state,
      disabled_confirm: true,
      disabled_submit: false
    })
   //console.log(this.data)
  },

  form_submit: function(event){
    console.log(event.target.dataset.state)
    this.setData({
      state: event.target.dataset.state,
      disabled_confirm: false,
      disabled_submit: true
    })
   console.log(this.data.disabled_confirm)
  },
  
  getFormData(){
    let orArray = []
    let irArray = []
    let ballArray = []
    Promise.all([util.getFormData('or'),util.getFormData('ir'),util.getFormData('ball')]).then(res=>{
      orArray = res[0].map(item=>{
        return {
          type:item.type,
          time:item.time
        }
      })
      irArray = res[1].map(item=>{
        return {
          type:item.type,
          time:item.time
        }
      })
      ballArray = res[2].map(item=>{
        return {
          type:item.type,
          time:item.time
        }
      })
      if(ballArray.length>=2){
        ballArray = ballArray.slice(0,2)
      }
      if(orArray.length>=2){
        orArray = orArray.slice(0,2)
      }
      if(irArray.length>=2){
        irArray = irArray.slice(0,2)
      }
      this.setData({
        orArray,
        irArray,
        ballArray
      })
    })
  },
  onLoad: function (options) {
    let time = util.formatTime(new Date())
    this.setData({
      time
    })
    this.getFormData()
  },
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