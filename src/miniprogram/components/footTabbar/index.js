Component({
  properties: {
    defaultActive: { // 属性名
      type: String,
      value: ''
    },
  },
  methods: {
    onChange(event) {
      const pages = getCurrentPages();
      const currentPage = pages[pages.length - 1];  
      const currentPageName = currentPage.route.split('/')[1]
      event.detail !== currentPageName && wx.redirectTo({
        url: `/pages/${event.detail}/index`
      })
    }
  }
})