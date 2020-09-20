// pages/store/comps/cloudfunc/cloudfunc.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },
  data: {

  },
  methods: {
    toFunc(){
      wx.navigateToMiniProgram({
        appId: 'wxf73004190ea43234',
        path: "pages/components/cloudFunction/index",
      })
    },
  }
})
