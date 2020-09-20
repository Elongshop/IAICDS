import * as echarts from '../../ec-canvas/echarts';
const paramsChangeBehavior = require("../behaviors/paramsChangeBehavior")
var initChart = null
const token = wx.getStorageSync('access_token')
function setOption(chart, ylist) {
  var options = {
    title: {
      left: 'center'
    },
    color: ["#37A2DA"],
    grid: {
      top: 20,
      right: 20,
      bottom: 30
    },
    tooltip: {
      show: true,
      trigger: 'axis'
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['6s前', '5s前', '4s前', '3s前', '2s前', '1s前']
    },
    yAxis: {
      x: 'center',
      type: 'value',
      splitLine: {
        lineStyle: {
          type: 'dashed'
        }
      }
    },
    series: [{
      type: 'line',
      smooth: true,
      data: ylist
    }]
  }
  chart.setOption(options);
}

Component({
  behaviors: [paramsChangeBehavior],
  data: {
    ec: {
      onInit: initChart
    },
    showLoading:1,
    device:15,
    params:'wind_speed',
    chartTimer:null,
    chartArray:[],
    ylist: [1.85999, 1.91162, 1.63502, 1.78623, 1.78623, 2.02226],
  },
  // properties: {
  //   currentDevice: {
  //     type: String,
  //     observer(newDevice, oldDevice) {
  //       this.setData({
  //         device:newDevice
  //       })
  //       this._getYlist()
  //     }
  //   },
  //   currentParams:{
  //     type: String,
  //     observer(newParams) {
  //       this.setData({
  //         params:newParams
  //       })
  //       this._getYlist()
  //     }
  //   }
  // },
  attached:function(){
    this._getYlist()
  },
  // detached(){
  //   this._closeTimer(this.data.timer)
  // },
  // pageLifetimes: {
  //   show: function() {
  //     // 页面被展示
  //   },
  //   hide: function() {
  //     clearInterval(this.data.timer)
  //   },
  // },
  methods: {
    _init_one: function(ylist) {
      this.oneComponent.init((canvas, width, height) => {
        const chart = echarts.init(canvas, null, {
          width: width,
          height: height
        });
        setOption(chart, ylist) //赋值给echart图表
        this.chart = chart;
        return chart;
      });
    },
    _getOneOption: function(ylist) {
      this._init_one(this.data.ylist)
    },
    _closeTimer(timer) {
      clearInterval(timer)
    },
    _getChartdata: function(array) {
      console.log(this.data.chartTimer)
      if(this.data.chartTimer){
         this._closeTimer(this.data.chartTimer)
      }
      let index = 0
      this.setData({
        chartTimer: setInterval(() => {
          if (index <= 3000) {
            this.setData({
              ylist: array.slice(index, index + 6)
            })
            index++
          } else {
            this._closeTimer(this.data.chartTimer)
            this.setData({
              ylist: array.slice(array.length - 7, array.length - 1)
            })
          }
          this._getOneOption(this.data.ylist)
          this.setData({
            showLoading:0
          })
        }, 2000)
      })
    },
    _getYlist(){
      this.oneComponent = this.selectComponent('#mychart-dom-line');
      this._getParamsData(this.data.device,this.data.params,token).then(res=>{
        let tempArr = res.result.array.data
        this._getChartdata(tempArr)
      })
    }
  }
})
