//设备预测和统计分析behavior
module.exports = Behavior({
  behaviors: [],
  properties: {
  },
  data: {
    fan_15_predicts:[],
    fan_21_predicts:[],
    devicePredictIndex:0,
    predictTimer:null
  },
  created: function () {
     Promise.all([this._getPredicts('fan1'),this._getPredicts('fan2')]).then(res=>{
      this.setData({
        fan_15_predicts:res[0],
        fan_21_predicts:res[1]
      })
      this._setPredictInterval()
    })
  },
  attached: function () {
  },
  ready: function () {

  },

  methods: {
    _getPredicts(id) { //调用云函数，获取预测结果
      return new Promise((resolve,reject)=>{
        wx.cloud.callFunction({
          name:'getPredict',
          data:{
            id:id
          }
        }).then(res=>{
          let temp = res.result.data
          let result = []
          temp.forEach(item=>{
            result.push(item.predict)
          })
          resolve(result)
        }).catch(err=>{
          reject(err)
        })
      })
    },
    _setPredictInterval() { //设置预测定时器
      if(this.data.predictTimer){
        this._closeTimer(this.data.predictTimer)
      }
      this.setData({
        devicePredictIndex: 0
      })
      this.setData({
        predictTimer: setInterval(() => {
          if (this.data.devicePredictIndex <= 3000) {
            this.setData({
              devicePredictIndex: this.data.devicePredictIndex + 1
            })
          } else {
            this.setData({
              devicePredictIndex: 0
            })
            this._closeTimer(this.data.predictTimer)
          }
        }, 1000)
      })
    },
    _closeTimer(timer) { //关闭定时器
      clearInterval(timer)
    },

  }
})