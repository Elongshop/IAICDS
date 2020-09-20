const util = require('../../../../utils/utils')
const form = require('../common/form')
const db = wx.cloud.database();
Page({
  data: {
    value: 20,
    gradientColor: {
      '0%': '#ff0000',
      '100%': '#00cc00',
    },
    state:'待处理',
    disabled_confirm: false,
    disabled_submit: true,
    start_time:'',
    end_time:'',
    ballArray:[]
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
    db.collection('ball').add({
      data: {
        time:end_time,
        type:"球故障"
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
      this.getBallArray()
    })
  },
  
  onLoad: function (options) {
    this.getBallArray()
  },
  getBallArray(){
    form.getFormArray('ball',res=>{
      this.setData({
        ballArray:res
      })
    })
  }
})