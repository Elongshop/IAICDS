// pages/store/comps/clouddatabase/clouddatabase.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    toDataBase(){
      wx.navigateToMiniProgram({
        appId: 'wxf73004190ea43234',
        path: "pages/components/cloudDatabase/index",
      })
    }
  }
})
