Page({
  
  data: {
    active: 1,
    textplan_arry: [],
    textprogress_arry: [],
    textgain_arry: [],
    textconclusion_arry: [],
    texttime_arry:[],
    index:0
  },

  // onChange(event) {
  //   wx.showToast({
  //     title: `切换到标签 ${event.detail.name}`,
  //     icon: 'none',
  //   });
  // },

  toto:function(option){
    this.setData({
      index:option.target.dataset.length
    })
console.log(option.target.dataset.length)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    const db = wx.cloud.database()
    db.collection('myNote').get().then(res=>{
      console.log(res.data);
      let temp = res.data
      let temp_textplan_array = temp.map(item=>{
        return item.textplan
      })
      let temp_textprogress_array = temp.map(item=>{
        return item.textprogress
      })
      let temp_textgain_array = temp.map(item=>{
        return item.textgain
      })
      let temp_textconclusion_array = temp.map(item=>{
        return item.textconclusion
      })
      let temp_texttime_arry = temp.map(item=>{
        return item.texttime
      })
      this.setData({
        textplan_arry:temp_textplan_array,
        textprogress_arry:temp_textprogress_array,
        textgain_arry:temp_textgain_array,
        textconclusion_arry:temp_textconclusion_array,
        texttime_arry:temp_texttime_arry,
        index:temp_textconclusion_array.length
      })
     
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