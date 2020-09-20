// components/compitem/compitem.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title:String,
    showBorder:{
      type:Boolean,
      value:true
    },
    key:String,
    compPath:String
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
    toCompPage(){
      let path = `${this.data.compPath}?key=${this.data.key}`
      wx.navigateTo({
        url: path
      })
    }
  }
})
