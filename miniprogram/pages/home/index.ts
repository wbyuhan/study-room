// index.ts
// 获取应用实例

// const app = getApp<IAppOption>()
import { openTip } from '../../utils/util'

// 引入SDK核心类，js文件根据自己业务，位置可自行放置
var QQMapWX = require('../../utils/map_sdk/qqmap-wx-jssdk.js');
var qqmapsdk: any


Page({
  data: {
    background: ['../../image/home/swipe1.jpeg', '../../image/home/swipe2.jpeg', '../../image/home/swipe3.jpeg'],
    vertical: false,
    autoplay: true,
    interval: 2000,
    duration: 500,
    address: "",
    introduce: [{
      des: "在开放的单人区学习，你可以感受周围浓烈的学习氛围，无论是上网还是看书、刷题、乃至办公，效果都极佳！更有机会认识一群爱学习的好书友！",
      path: '../../image/home/swipe1.jpeg'
    },
    {
      des: '相对独立的双人区，是你和好友互勉学习的不二选择。在优雅的环境中，你们可以互相监督，互相讨论，当然，偶尔吃点小零食也是很惬意的。',
      path: '../../image/home/swipe2.jpeg'
    }
    ],
    flowList: [
      {
        step: "①",
        des: "线上付费预约"
      },
      {
        step: "②",
        des: "门店扫码开门"
      },
      {
        step: "③",
        des: "对应位置入座"
      },
      {
        step: "④",
        des: "扫码开灯学习"
      },
    ],
    carefulList: [
      {
        title: "关于声音控制",
        des: "在自习室内，请自觉保持安静。请控制声量，将手机调成静音状态。如有接电话需求，请移步公共区域。"
      },
      {
        title: "关于饮食",
        des: "请不要在自习室吃带有浓厚气味的食品。"
      },
      {
        title: "关于座位",
        des: "请勿占用无人座位，请勿随意涂鸦，离开座位前请将椅子归位，并扫码关灯。"
      },
    ]
  },
  onShareAppMessage() {
    return {
      title: 'swiper',
      path: 'page/component/pages/swiper/swiper'
    }
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs',
    })
  },
  instanceKey() {
    // 实例化API核心类
    qqmapsdk = new QQMapWX({
      key: 'LDOBZ-QEMK2-SVKUR-CZFDD-E5JX7-T2BOQ'
    });
  },
  // 根据经纬度获取地址
  reverseGeocoder(location: { latitude: string, longitude: string }) {

    return new Promise<void>((resolve, reject) => {
      qqmapsdk.reverseGeocoder(
        {
          location: location,
          success: (res: any) => {
            resolve(res)
          },
          fail: (res: any) => {
            reject(res)
          },
        }
      )
    })

  },
  onLoad() {
    // @ts-ignore
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
    this.instanceKey()
    this.getLocation()
  },

  getLocation() {
    wx.getLocation({
      type: 'gcj02', //返回可以用于wx.openLocation的经纬度
      isHighAccuracy: true,
      altitude: "true",
      success: async (response: any) => {
        const resLocation: any = await this.reverseGeocoder({
          latitude: response.latitude,
          longitude: response.longitude,
        })
        const { result } = resLocation || {}
        const { address, formatted_addresses } = result
        this.setData({
          address: `${address}${formatted_addresses.recommend}`
        })
      }
    })
  },
  openMap() {
    console.log('点击')
    wx.getLocation({
      type: 'gcj02', //返回可以用于wx.openLocation的经纬度
      // isHighAccuracy: true,
      // altitude: "true",
      success: (response: any) => {
        wx.chooseLocation({
          latitude: response.latitude,
          longitude: response.longitude,
          success: (res) => {
            this.setData({
              address: res.address
            })
          }
        })
      },
      fail: (res) => {
        openTip(
          res.errMsg,
          2000,
          'error',
        )

      }
    })
  },

  getUserInfo(e: any) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})

