const compIconBehavior = require('../../behaviors/compIconBehavior')
Component({
  behaviors: [compIconBehavior],
  properties: {

  },

  data: {
    desc:'元素的排序顺序，数字越小越靠前',
    multiArray: [
      ['order', 'flex-grow', 'flex-shrink'],
      ['0', '1']
    ],
    shrink:false,
    multiIndex: [0, 0],
    attrName: "flex-direction",
    attrValue: "row",
  },
  methods: {
    bindMultiPickerChange: function (e) {
      this.setData({
        multiIndex: e.detail.value
      })
      let attrIndex = this.data.multiIndex[0]
      let valueIndex = this.data.multiIndex[1]
      this.setData({
        attrName: this.data.multiArray[0][attrIndex],
        attrValue: this.data.multiArray[1][valueIndex]
      })
      if(e.detail.value[0] == 2){
        this.setData({
          shrink:true
        })
      }else{
        this.setData({
          shrink:false
        })
      }
    },
    bindMultiPickerColumnChange: function (e) {
      var data = {
        multiArray: this.data.multiArray,
        multiIndex: this.data.multiIndex
      };
      data.multiIndex[e.detail.column] = e.detail.value;
      switch (e.detail.column) {
        case 0:
          switch (data.multiIndex[0]) {
            case 0:
              this.setData({
                desc:'元素的排序顺序，数字越小越靠前'
              })
              data.multiArray[1] = ['0', '1'];
              break;
            case 1:
              this.setData({
                desc:'元素的收缩比率，当子元素宽度总和大于父元素宽度时起作用，会按比例收缩空间'
              })
              data.multiArray[1] = ['0', '1'];
              break;
            case 2:
              this.setData({
                desc:'元素的扩展比率，当子元素宽度总和小于父元素宽度时起作用，会按比例分配父元素剩余空间'
              })
              data.multiArray[1] = ['0', '1','2','3'];
              break;
          }
          data.multiIndex[1] = 0;
          break;
      }
      this.setData(data);
    }
  }
})
