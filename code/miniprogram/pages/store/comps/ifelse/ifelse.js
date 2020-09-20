// pages/store/comps/ifelse/ifelse.js
Component({
  properties: {

  },

  data: {
    checked: false,
  },

  methods: {
    onChange({ detail }) {
      this.setData({ checked: detail });
    },
  }
})
