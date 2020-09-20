const compIconBehavior = require('../../behaviors/compIconBehavior')
Component({
  behaviors: [compIconBehavior],
  properties: {

  },
  data: {
    num:1.859993305,
    result:'1.85999',
    value:5
  },
  methods: {
    onChange(event) {
      let value = event.detail
      this.setData({
        value,
        result:this.data.num.toFixed(value)
      })
    },
  }
})
