// pages/store/comps/flex/flex.js
Component({
  properties: {

  },
  data: {
    desc:"主轴方向",
    multiArray: [
      ['flex-direction', 'justify-content', 'align-items'],
      ['row', 'row-reverse', 'column', 'column-reverse']
    ],
    multiIndex: [0, 0],
    attrName:"flex-direction",
    attrValue:"row"
  },
  methods: {
    bindMultiPickerChange: function (e) {
      this.setData({
        multiIndex: e.detail.value
      })
      let attrIndex = this.data.multiIndex[0]
      let valueIndex = this.data.multiIndex[1]
      this.setData({
        attrName:this.data.multiArray[0][attrIndex],
        attrValue:this.data.multiArray[1][valueIndex]
      })
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
                desc:'主轴方向'
              })
              data.multiArray[1] = ['row', 'row-reverse', 'column', 'column-reverse'];
              break;
            case 1:
              this.setData({
                desc:'主轴对齐方式'
              })
              data.multiArray[1] = ['flex-start', 'flex-end', 'center', 'space-between', 'space-around'];
              break;
            case 2:
              this.setData({
                desc:'交叉轴对齐方式'
              })
              data.multiArray[1] = ['flex-start', 'flex-end', 'center'];
              break;
          }
          data.multiIndex[1] = 0;
          break;
      }
      this.setData(data);
    },
  }
})
