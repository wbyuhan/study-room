Page({
    data: {
        title: "订单页面",
        pageText: ""
    },
    onLoad() {
        // @ts-ignore
        if (wx.getUserProfile) {
            this.setData({
                pageText: "订单"
            })
        }
    },
})