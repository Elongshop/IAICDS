module.exports = Behavior({
  behaviors: [],
  data: {
    form_predict:[],
    formPredictIndex:0,
    predictTimer:null
  },
  created: function () {
     Promise.all([this._getPredicts('bearing')]).then(res=>{
      this.setData({
        form_predict:res[0],
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
          //console.log(temp)
          let result = []
          temp.forEach(item=>{
            result.push(item.label)
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
        formPredictIndex:0
      })
      this.setData({
        predictTimer: setInterval(() => {
          if (this.data.formPredictIndex <= 142) {
            this.setData({
              formPredictIndex: this.data.formPredictIndex + 1
            })
          } else {
            this.setData({
              formPredictIndex: 0
            })
            this._closeTimer(this.data.predictTimer)
          }
        }, 3000)
      })
    },
    _closeTimer(timer) { //关闭定时器
      clearInterval(timer)
    },

  }
})