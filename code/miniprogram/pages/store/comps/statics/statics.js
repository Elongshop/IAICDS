// pages/store/comps/statics/statics.js
Component({
  properties: {

  },

  data: {
    items: [
      { name: '1', value: '1' },
      { name: '2', value: '2', checked: 'true' },
      { name: '3', value: '3' },
      { name: '4', value: '4' },
      { name: '5', value: '5' },
    ],
    max:2,
    min:2
  },

  methods: {
    checkboxChange: function (e) {
      let arrs = e.detail.value
      let max = this.data.max
      let min = this.data.min
      if(arrs.length === 0){
        max = '无输入'
        min = '无输入'
      }
      else{
        max = Math.max(...arrs),
        min = Math.min(...arrs) 
      }
      this.setData({
        max,
        min
      })
    },
  }
})
