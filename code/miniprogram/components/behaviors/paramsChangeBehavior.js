module.exports = Behavior({
  behaviors: [],
  properties: {
    //设备切换和参数切换都会触发echarts变化.设备切换会触发scroll-view变化
    currentParams: String,
    currentDevice:String
  },
  data: {
    device: 15,
    params: 'wind_speed',
    allParams: [{
      text: '风速',
      value: 'wind_speed'
    },
    {
      text: '发动机转速',
      value: 'generator_speed'
    },
    {
      text: '功率',
      value: 'power'
    },
    {
      text: '偏航位置',
      value: 'yaw_position'
    },
    {
      text: '偏航速度',
      value: 'yaw_speed'
    },
    {
      text: 'x加速度',
      value: 'acc_x'
    },
    {
      text: 'y加速度',
      value: 'acc_y'
    },
    {
      text: '环境温度',
      value: 'environment_tmp'
    },
    {
      text: '机舱温度',
      value: 'int_tmp'
    }
  ],
  },
  observers: {
    //监听设备和参数变化，变化时需要触发调用API的函数，得到参数数组，进行渲染
    'currentDevice': function (currentDevice) {
      this.setData({
        device: currentDevice
      })
    },
    'currentParams': function (currentParams) {
      this.setData({
        params: currentParams
      })
    }
  },
  attached: function () {
  },
  methods: {
    _getParamsData(currentDevice, currentParams, token) {
      return new Promise((resolve, reject) => {
        wx.cloud.callFunction({
          name: 'getParamsData',
          data: {
            currentDevice: currentDevice,
            currentParams: currentParams,
            token: token
          },
          success(res) {
            resolve(res)
          },
          fail(err) {
            reject(err)
          }
        })
      })
    },

  }
})