Page({
    data: {
        show: false,
        userInfo: {},
        hasUserInfo: false,
        studyList: [
            {
                des: '累计一共学习了XX小时'
            },
            {
                des: '第一次学习时间：2015-05-15 15:05:15'
            },
            {
                des: '第二次学习时间：2015-05-15 15:05:15'
            },
            {
                des: '第三次学习时间：2015-05-15 15:05:15'
            },
            {
                des: '最后的学习时间：2015-05-15 15:05:15'
            }
        ]
    },
    onLoad() {
        // this.getUserProfile()
    },
    checkLoginStatus() {

    },
    // 关闭弹窗
    onClose() {
        this.setData({ show: false });

    },

    getUserProfile() {
        console.log('aaa')
        // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
        wx.getUserProfile({
            desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
            success: (res) => {
                console.log(res)
                this.setData({
                    userInfo: res.userInfo,
                    hasUserInfo: true
                })
            },
            fail: (res) => {
                console.log('%c 🌰 res: ', 'font-size:20px;background-color: #3F7CFF;color:#fff;', res);

            }
        })
    },
})