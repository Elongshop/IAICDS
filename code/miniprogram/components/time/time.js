const utils = require('../../utils/utils')
const devicePrebehavior = require('../behaviors/devicePreBehavior')
const compIconBehavior = require('../behaviors/compIconBehavior')
Component({
  behaviors: [devicePrebehavior,compIconBehavior],
  ready(){
    this.setCurrentTime()
  },
  pageLifetimes: {
    hide(){
      clearInterval(this.data.cuttentTimer)
    }
  },
  properties: {

  },

  data: {
    time:'',
    currentTimer:null,
    iconsShow:false,
    iconShowTimer:null
  },
  methods: {

    setCurrentTime() { //设置当前时间
      this.setData({
        currentTimer: setInterval(() => {
          this.setData({
            time: utils.formatTime(new Date())
          })
        }, 1000)
      })
    },
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
