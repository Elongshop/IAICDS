module.exports = Behavior({
  behaviors: [],
  properties: {
  },
  data: {
  },
  attached: function(){},
  methods: {
    toCompPage(event){
      wx.navigateTo({
        url: '/pages/apps/compPage/index?id='+event.target.dataset.id,
      })
    },
    toStoreComp(event){
      const value = event.target.dataset.value
      wx.navigateTo({
        url: `/pages/store/comps/index?key=${value}`,
      })
    }
  }
})