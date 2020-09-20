// components/storecomp/storecomp.js
Component({
  options:{
    multipleSlots: true
  },
  properties: {
    compEngName:{
      type:String,
      value:'Flex'
    },
    compChinName:{
      type:String,
      value:'弹性盒子模型'
    },
    imgSrc:String,
    compDesc:String,
    slotName:String
  },

  /**
   * 组件的初始数据
   */
  data: {
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
