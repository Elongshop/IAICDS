// components/fancomps/algo/algo.js
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
  methods: {
    toMiniProgram() { //小程序跳转
      wx.navigateToMiniProgram({
        appId: 'wx3f9794a2bb17c028',
        path: "pages/models/fans/fanStart/fanStart",
      })
    }
  }
})
