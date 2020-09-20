const utils = require('../../../../utils/utils')
Component({
  properties: {

  },
  pageLifetimes: {
    hide: function() {
      if(this.data.timer_current){
        this._closeTimer(this.data.timer_current)
      }
    },
  },
  data: {
    timer_current:null,
    timerDisabled:false,
    visiable_time:false,
  },
  methods: {
    setCurrentTime(){//获取时间戳
      if(this.data.timer_current){
        this._closeTimer(this.data.timer_current)
      }
      this.setData({
        visiable_time:true,
        timerDisabled:true,
        timer_current: setInterval(() => {
          this.setData({
            time: utils.formatTime(new Date())
          })
        }, 1000)
      })
    },
    _closeTimer(timer){
      clearInterval(timer)
    }
  }
})
