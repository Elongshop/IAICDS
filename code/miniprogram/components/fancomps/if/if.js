const compIconBehavior = require('../../behaviors/compIconBehavior')
Component({
  behaviors: [compIconBehavior],
  properties: {

  },
  data: {
    switchChecked: true,
  },
  methods: {
    switchChange(event) {
      let value = event.detail.value
      this.setData({
        switchChecked:value
      })
      if(value === true){
        wx.showToast({
          title: '当前设备正常',
          icon:'none'
        })
      }else{
        wx.showToast({
          title: '当前设备故障',
          icon:'none'
        })
      }
    },
  }
})