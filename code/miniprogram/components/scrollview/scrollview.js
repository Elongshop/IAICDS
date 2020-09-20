const paramsChangeBehavior = require("../behaviors/paramsChangeBehavior")
const compIconBehavior = require('../behaviors/compIconBehavior')
const token = wx.getStorageSync('access_token')
Component({
  behaviors: [paramsChangeBehavior,compIconBehavior],
  properties: {
    currentDevice: {
      type: String,
      observer(newDevice, oldDevice) {
        this.setData({
          device: newDevice
        })
        this._getAllParamsData(this.data.device, this.data.allParams, token)
      }
    }
  },
  observers: {
    'index': function (index) {
      this.setData({
        i:index
      })
    }
  },
  data: {
    timer: null,
    index: 0,
    i: 0,
    showLoading: 0,
    device:15,
    iconsShow:false,
    iconShowTimer:null
  },
  attached: function () {},
  detached:function(){
    this._closeTimer(this.data.timer)
  },
  methods: {
    _getAllParamsData(device, paramsArray, token) {
      if (this.data.timer) {
        this._closeTimer(this.data.timer)
      }
      let promises = []
      for (let i = 0; i < paramsArray.length; i++) {
        let paramsKey = paramsArray[i].value
        promises.push(this._getParamsData(device, paramsKey, token))
      }
      Promise.all(promises).then(res => {
        let result = this._getAllParamsResult(res)
        this.setData({
          paramsResult: result,
          showLoading: 1
        })
        this._setParamsInterval()
      })
    },
    _getAllParamsResult(array) {
      let paramsResult = []
      let allParams = this.data.allParams
      paramsResult = array.map(item => {
        let tempArr = item.result.array.data
        return {
          dataArray: this._getDataArray(tempArr),
          max: this._getMax(tempArr),
          min: this._getMin(tempArr)
        }
      })
      for (let i = 0; i < allParams.length; i++) {
        paramsResult[i]['name'] = allParams[i].text
      }
      return paramsResult
    },
    _getDataArray(array) {
      return array.map(item => {
        return item.toFixed(5)
      })
    },
    _getMax(array) {
      return Math.max(...array).toFixed(5)
    },
    _getMin(array) {
      return Math.min(...array).toFixed(5)
    },
    _setParamsInterval() {
      if (this.data.timer) {
        this._closeTimer(this.data.timer)
      }
      this.setData({
        index: 0
      })
      this.setData({
        timer: setInterval(() => {
          if (this.data.index <= 3000) {
            this.setData({
              index: this.data.index + 1,
            })
          } else {
            this.setData({
              index: 0
            })
            this._closeTimer(this.data.timer)
          }
        }, 1000)
      })
    },
    _closeTimer(timer) {
      clearInterval(timer)
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