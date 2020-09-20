const formpredictBehavior = require('../behaviors/formpredictBehavior')
const compIconBehavior = require('../behaviors/compIconBehavior')

Component({
  /**
   * 组件的属性列表
   */
  behaviors: [formpredictBehavior,compIconBehavior],
  pageLifetimes: {
    show: function() {
      // 页面被展示
    },
    hide: function() {
      if(this.data.predictTimer){
        this._closeTimer(this.data.predictTimer)
      }
    },
  },
  properties: {
  },
  data: {
  },
  methods:{
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
