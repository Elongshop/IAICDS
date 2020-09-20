// pages/store/comps/cloudstorage/cloudstorage.js
Component({
  properties: {

  },

  data: {

  },
  methods: {
    toStorage(){
      wx.navigateToMiniProgram({
        appId: 'wxf73004190ea43234',
        path: "pages/components/cloudStorage/index?index=0",
      })
    }
  }
})
