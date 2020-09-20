// components/compscene/compscene.js
Component({
  properties: {
    compName:String,
    value:String
  },
  data: {
    show:1
  },
  ready(){
    this.getValue()
  },
  methods: {
    getValue(){
      let name = this.data.compName
      let value = this.data.value
      switch (name){
        case '弹性盒子模型':{
          value = 'flex'
          break
        }
        case '可滚动视图区域':{
          value='scrollview'
          break;
        }
        case '滚动选择器':{
          value='picker'
          break;
        }
        case '折线图':{
          value='picker'
          break;
        }
        case '云数据库':{
          value='cloud'
          break;
        }
        case '云函数':{
          value='axios'
          break;
        }
        case '定时器':{
          value= 'interval'
          break;
        }
        case '条件渲染':{
          value='if'
          break;
        }
        case '时间戳':{
          value='time'
          break
        }
        case '数据统计':{
          value='static'
          break
        }
        default:{
          this.setData({
            show:0
          })
        }
      }
      this.setData({
        value
      })
    },
    toAppCompPage(value){
      wx.reLaunch({
        url: '/pages/apps/compPage/index?id='+this.data.value,
      })
    }
  }
})
