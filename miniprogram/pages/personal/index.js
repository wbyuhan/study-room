"use strict";
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
    onLoad: function () {
    },
    checkLoginStatus: function () {
    },
    onClose: function () {
        this.setData({ show: false });
    },
    getUserProfile: function () {
        var _this = this;
        console.log('aaa');
        wx.getUserProfile({
            desc: '展示用户信息',
            success: function (res) {
                console.log(res);
                _this.setData({
                    userInfo: res.userInfo,
                    hasUserInfo: true
                });
            },
            fail: function (res) {
                console.log('%c 🌰 res: ', 'font-size:20px;background-color: #3F7CFF;color:#fff;', res);
            }
        });
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBSSxDQUFDO0lBQ0QsSUFBSSxFQUFFO1FBQ0YsSUFBSSxFQUFFLEtBQUs7UUFDWCxRQUFRLEVBQUUsRUFBRTtRQUNaLFdBQVcsRUFBRSxLQUFLO1FBQ2xCLFNBQVMsRUFBRTtZQUNQO2dCQUNJLEdBQUcsRUFBRSxhQUFhO2FBQ3JCO1lBQ0Q7Z0JBQ0ksR0FBRyxFQUFFLDZCQUE2QjthQUNyQztZQUNEO2dCQUNJLEdBQUcsRUFBRSw2QkFBNkI7YUFDckM7WUFDRDtnQkFDSSxHQUFHLEVBQUUsNkJBQTZCO2FBQ3JDO1lBQ0Q7Z0JBQ0ksR0FBRyxFQUFFLDZCQUE2QjthQUNyQztTQUNKO0tBQ0o7SUFDRCxNQUFNO0lBRU4sQ0FBQztJQUNELGdCQUFnQjtJQUVoQixDQUFDO0lBRUQsT0FBTztRQUNILElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUVsQyxDQUFDO0lBRUQsY0FBYztRQUFkLGlCQWlCQztRQWhCRyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBRWxCLEVBQUUsQ0FBQyxjQUFjLENBQUM7WUFDZCxJQUFJLEVBQUUsUUFBUTtZQUNkLE9BQU8sRUFBRSxVQUFDLEdBQUc7Z0JBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtnQkFDaEIsS0FBSSxDQUFDLE9BQU8sQ0FBQztvQkFDVCxRQUFRLEVBQUUsR0FBRyxDQUFDLFFBQVE7b0JBQ3RCLFdBQVcsRUFBRSxJQUFJO2lCQUNwQixDQUFDLENBQUE7WUFDTixDQUFDO1lBQ0QsSUFBSSxFQUFFLFVBQUMsR0FBRztnQkFDTixPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxzREFBc0QsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUU1RixDQUFDO1NBQ0osQ0FBQyxDQUFBO0lBQ04sQ0FBQztDQUNKLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIlBhZ2Uoe1xuICAgIGRhdGE6IHtcbiAgICAgICAgc2hvdzogZmFsc2UsXG4gICAgICAgIHVzZXJJbmZvOiB7fSxcbiAgICAgICAgaGFzVXNlckluZm86IGZhbHNlLFxuICAgICAgICBzdHVkeUxpc3Q6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBkZXM6ICfntK/orqHkuIDlhbHlrabkuaDkuoZYWOWwj+aXtidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZGVzOiAn56ys5LiA5qyh5a2m5Lmg5pe26Ze077yaMjAxNS0wNS0xNSAxNTowNToxNSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZGVzOiAn56ys5LqM5qyh5a2m5Lmg5pe26Ze077yaMjAxNS0wNS0xNSAxNTowNToxNSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZGVzOiAn56ys5LiJ5qyh5a2m5Lmg5pe26Ze077yaMjAxNS0wNS0xNSAxNTowNToxNSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZGVzOiAn5pyA5ZCO55qE5a2m5Lmg5pe26Ze077yaMjAxNS0wNS0xNSAxNTowNToxNSdcbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgIH0sXG4gICAgb25Mb2FkKCkge1xuICAgICAgICAvLyB0aGlzLmdldFVzZXJQcm9maWxlKClcbiAgICB9LFxuICAgIGNoZWNrTG9naW5TdGF0dXMoKSB7XG5cbiAgICB9LFxuICAgIC8vIOWFs+mXreW8ueeql1xuICAgIG9uQ2xvc2UoKSB7XG4gICAgICAgIHRoaXMuc2V0RGF0YSh7IHNob3c6IGZhbHNlIH0pO1xuXG4gICAgfSxcblxuICAgIGdldFVzZXJQcm9maWxlKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnYWFhJylcbiAgICAgICAgLy8g5o6o6I2Q5L2/55Sod3guZ2V0VXNlclByb2ZpbGXojrflj5bnlKjmiLfkv6Hmga/vvIzlvIDlj5HogIXmr4/mrKHpgJrov4for6XmjqXlj6Pojrflj5bnlKjmiLfkuKrkurrkv6Hmga/lnYfpnIDnlKjmiLfnoa7orqTvvIzlvIDlj5HogIXlpqXlloTkv53nrqHnlKjmiLflv6vpgJ/loavlhpnnmoTlpLTlg4/mmLXnp7DvvIzpgb/lhY3ph43lpI3lvLnnqpdcbiAgICAgICAgd3guZ2V0VXNlclByb2ZpbGUoe1xuICAgICAgICAgICAgZGVzYzogJ+WxleekuueUqOaIt+S/oeaBrycsIC8vIOWjsOaYjuiOt+WPlueUqOaIt+S4quS6uuS/oeaBr+WQjueahOeUqOmAlO+8jOWQjue7reS8muWxleekuuWcqOW8ueeql+S4re+8jOivt+iwqOaFjuWhq+WGmVxuICAgICAgICAgICAgc3VjY2VzczogKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcbiAgICAgICAgICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgICAgICAgICAgICB1c2VySW5mbzogcmVzLnVzZXJJbmZvLFxuICAgICAgICAgICAgICAgICAgICBoYXNVc2VySW5mbzogdHJ1ZVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZmFpbDogKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCclYyDwn4ywIHJlczogJywgJ2ZvbnQtc2l6ZToyMHB4O2JhY2tncm91bmQtY29sb3I6ICMzRjdDRkY7Y29sb3I6I2ZmZjsnLCByZXMpO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfSxcbn0pIl19