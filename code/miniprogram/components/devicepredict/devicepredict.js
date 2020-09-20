const devicePrebehavior = require('../behaviors/devicePreBehavior')
const compIconBehavior = require('../behaviors/compIconBehavior')
Component({
  behaviors: [devicePrebehavior,compIconBehavior],
  pageLifetimes: {
    show: function() {
      // 页面被展示
    },
    hide: function() {
      if(this.data.predictTimer){
        this._closeTimer(this.data.predictTimer)
      }
    },
  },
  properties: {
  },
  data: {
    show:false
  },
  methods:{

  }
})
