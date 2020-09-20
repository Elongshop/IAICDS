// pages/store/comps/interval/interval.js
Component({
  properties: {

  },

  data: {
    disabled: false,
    timer: null,
    loading:false,
    delay:3
  },

  methods: {
    onChange(event){
      this.setData({
        delay:event.detail
      })
    },
    intervalTap() {
      this.setData({
        disabled: true,
        loading:true
      })
      this.showMesage(this.data.delay)
    },
    showMesage(delay) {
      if (this.data.timer) {
        clearTimeout(this.data.timer)
      }
      this.setData({
        timer: setTimeout(() => {
          this.setData({
            loading:false
          })
          wx.showModal({
            title: '定时器',
            content: `这是${delay}秒后弹出的信息`,
            success: (res)=>{
              if (res.confirm) {
                this.setData({
                  disabled:false
                })
              } else if (res.cancel) {
                this.setData({
                  disabled:false
                })
              }
            }
          })
        }, delay * 1000)
      })
    }
  }
})

