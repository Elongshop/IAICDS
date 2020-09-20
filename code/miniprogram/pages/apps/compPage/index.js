const util = require('../../../utils/utils')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    key:'',
    loading:false,
    imgSrc:'',
    compEngName:'',
    compChinName:'',
    compDesc:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      key:options.id
    })
    console.log(this.data.key)
    util.getCompsData('appComps',this.data.key,result=>{
      this.setData({
        loading:false,
        imgSrc:result.codeImg,
        compEngName:result.engName,
        compChinName:result.chinName,
        compDesc:	result.compDesc
      })
    })
  }
})