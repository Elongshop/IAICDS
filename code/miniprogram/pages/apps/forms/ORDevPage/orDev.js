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
    orArray:[]
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
      this.getORArray()
    })
  },
  
  getORArray(){
    form.getFormArray('or',res=>{
      this.setData({
        orArray:res
      })
    })
  },

  onLoad: function (options) {
    this.getORArray()
  }
})