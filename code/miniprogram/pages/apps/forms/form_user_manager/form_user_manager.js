// miniprogram/pages/apps/forms/form_user_manager/form_user_manager.js
Page({
  data: {

  },
  onLoad: function (options) {

  },
  toDevPage(options){
    let type = options.target.dataset.type
    switch (type){
      case 'admin':{
        wx.navigateTo({
          url: '../adminPage/admin',
        })
        break
      }
      case 'ir':{
        wx.navigateTo({
         url: '../IRDevPage/irDev',
        })
        break
      }
      case 'or':{
        wx.navigateTo({
          //url:'../form_user/form_user'
        url: '../ORDevPage/orDev',
        })
        break
      }
      case 'ball':{
        wx.navigateTo({
          url: '../ballDevPage/ballDev',
        })
        break
      }
    }
  },
  onReady: function () {

  },
  onShow: function () {

  },
  onHide: function () {

  }
})