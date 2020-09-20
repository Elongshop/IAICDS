const compIconBehavior = require('../../behaviors/compIconBehavior')
Component({
  properties: {

  },
  behaviors: [compIconBehavior],
  data: {
    delay:3,
    disabled:false,
    timer:null
  },
  methods: {
    onChange(event){
      this.setData({
        delay:event.detail
      })
    },
    intervalTap(){
      let delay = this.data.delay
      let index = 0
      if(this.data.timer){
        clearInterval(this.data.timer)
      }
      this.setData({
        disabled:true,
        timer:setInterval(()=>{
          if(index <5){
            wx.showToast({
              title: `每隔${delay}秒执行一次的结果`,
              icon:'none',
              duration:400
            })
            index++
          }else{
            clearInterval(this.data.timer)
            this.setData({
              disabled:false
            })
          }
        },delay*1000)
      })
    }
  }
})
