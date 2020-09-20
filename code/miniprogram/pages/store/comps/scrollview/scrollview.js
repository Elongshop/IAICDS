// pages/store/comps/scrollview/scrollview.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },
  data: {
    radioSelected:'scroll-y',
    items: [
      { name: 'scroll-x', value: '横向滚动' },
      { name: 'scroll-y', value: '纵向滚动', checked: 'true' }
    ]
  },

  methods: {
    radioChange: function (e) {
      this.setData({
        radioSelected:e.detail.value
      })
    }
  }
})
