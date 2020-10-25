Component({
  properties: {
    text: { // 属性名
      type: String,
      value: ''
    },
  },
  observers: {
    text() {
      this.setData({
        'bgCorlor.value': this.data.bgCorlor.data[this.data.text.charCodeAt() % this.data.bgCorlor.data.length]
      })
    }
  },
  data: {
      bgCorlor: {
        value: '',
        data: [
          '#01c5c4',
          '#1f3c88',
          '#fa7f72',
          '#f5a25d',
          '#c62a88',
          '#7579e7'
        ]
      }
  }
})