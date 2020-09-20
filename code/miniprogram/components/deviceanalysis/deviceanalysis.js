const devicePrebehavior = require('../behaviors/devicePreBehavior')
const compIconBehavior = require('../behaviors/compIconBehavior')
Component({
  behaviors: [devicePrebehavior,compIconBehavior],
  properties: {

  },

  data: {
    iconsShow:false,
    iconShowTimer:null
  },

  methods: {
    handleIconTap(iconsShow,iconShowTimer){
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
        },3000)
      })
    }
  }
})
