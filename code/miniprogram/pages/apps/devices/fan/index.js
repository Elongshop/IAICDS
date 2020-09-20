var app = getApp();
Page({
  data: {
    tabActive:0,
    currentDevice:15,
    currentParams:'wind_speed',
    iconsShow:false,
    iconShowTimer:null
  },
  onLoad: function (options) {

  },
  tabChange(event){
    this.setData({
      tabActive:event.detail.index
    })
  },
  handleDeviceChange(event){
    this.setData({
      currentDevice:event.detail.currentDevice
    })
  },
  handleParamsChange(event){
    this.setData({
      currentParams:event.detail.currentParams
    })
  },

  iconTap(event){
    tool.toCompPage(event.target.dataset.id)
  }
})