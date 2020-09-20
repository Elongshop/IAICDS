// components/casecard/casecard.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    src:String,
    text:{
      type:String,
      value:'设备监控'
    },
    textColor:{
      type:String,
      value:'#fff'
    },
    caseName:{
      type:String
    },
    caseType:String
  },
  data: {
    show: false,
    value:'fj',
    actions: [
      {
        name: '进入风机APP',
      },
      {
        name: '取消',
      }
    ],
  },
  attached(){
  },
  methods: {
    clickCard(){
      this.setData({
        show:true
      })
      if(this.data.caseType === 'monitor'){
        this.setData({
          actions: [
            {
              name: '进入风机APP',
            },
            {
              name: '取消',
            }
          ],
        })
      }else if(this.data.caseType === 'form'){
        this.setData({
          actions: [
            {
              name: '进入工单APP',
            },
            {
              name: '取消',
            }
          ],
        })
      }
    },
    onClose() {
      this.setData({ show: false });
    },
    onSelect(event) {
      if(event.detail.name == '进入风机APP'){
        wx.navigateTo({
          url: '../../pages/apps/devices/fan/index',
        })
      }
      if(event.detail.name == '进入工单APP'){
        wx.navigateTo({
          url: '../../pages/apps/forms/index',
        })
      }
    }
  }
})
