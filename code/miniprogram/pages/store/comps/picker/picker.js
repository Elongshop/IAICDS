// pages/store/comps/picker/picker.js
Component({
  properties: {

  },
  data: {
    region: ['北京市', '北京市', '海淀区'],
  },
  methods: {
    bindRegionChange: function (e) {
      console.log('picker发送选择改变，携带值为', e.detail.value)
      this.setData({
        region: e.detail.value
      })
    }
  }
})
