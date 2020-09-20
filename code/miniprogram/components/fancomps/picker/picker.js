const compIconBehavior = require('../../behaviors/compIconBehavior')
Component({
  properties: {

  },
  behaviors: [compIconBehavior],
  data: {
    option1: [
      { text: '全部设备', value: 0 },
      { text: '1号设备', value: 1 },
      { text: '2号设备', value: 2 },
    ],
    option2: [
      { text: '工况参数', value: 'a' },
      { text: 'wind_speed', value: 'b' },
      { text: 'power', value: 'c' },
    ],
    value1: 0,
    value2: 'a',
  },

  methods: {

  }
})
