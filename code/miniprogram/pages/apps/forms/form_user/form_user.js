Page({

  /**
   * 页面的初始数据
   */
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