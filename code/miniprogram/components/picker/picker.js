const paramsChangeBehavior = require("../behaviors/paramsChangeBehavior")
const compIconBehavior = require('../behaviors/compIconBehavior')
Component({
  behaviors: [paramsChangeBehavior,compIconBehavior],
  properties: {
  },
  data: {
    allDevice: [{
        text: '15号风机',
        value: 15
      },
      {
        text: '21号风机',
        value: 21
      }
    ],
    value1: 15,
    value2: 'wind_speed',
    iconsShow:false,
    iconShowTimer:null
  },
  methods: {
    deviceChange(e){
      this.triggerEvent('changeDevice',{currentDevice:e.detail},{})
    },
    paramsChange(e){
      this.triggerEvent('changeParams',{currentParams:e.detail},{})
    },
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