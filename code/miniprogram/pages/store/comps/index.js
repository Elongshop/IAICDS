// miniprogram/pages/comps/index.js
const util = require('../../../utils/utils')
Page({
  data: {
    imgSrc: '',
    key: '',
    compEngName: '',
    compChinName: '',
    compDesc: "",
    loading: true
  },

  onLoad: function (options) {
    let key = options.key
    this.setData({
      key
    })
    util.getCompsData('compDatas', key, result => {
      this.setData({
        loading: false,
        imgSrc: result.codeImg,
        compEngName: result.engName,
        compChinName: result.chinName,
        compDesc: result.compDesc
      })
    })
  }
})