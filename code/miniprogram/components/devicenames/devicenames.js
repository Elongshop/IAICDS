const compIconBehavior = require('../behaviors/compIconBehavior')
Component({
  behaviors: [compIconBehavior],
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
    handleIconTap(){
      this.setData({
        iconsShow:!this.data.iconsShow
      })
      if(this.data.iconShowTimer){
        clearTimeout(this.data.iconShowTimer)
      }
      this.setData({
        iconShowTimer:setTimeout(()=>{
          this.setData({
            iconsShow:false
          })
        },5000)
      })
    }
  }
})
