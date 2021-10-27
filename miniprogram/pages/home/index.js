"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("../../utils/util");
var QQMapWX = require('../../utils/map_sdk/qqmap-wx-jssdk.js');
var qqmapsdk;
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
    onShareAppMessage: function () {
        return {
            title: 'swiper',
            path: 'page/component/pages/swiper/swiper'
        };
    },
    bindViewTap: function () {
        wx.navigateTo({
            url: '../logs/logs',
        });
    },
    instanceKey: function () {
        qqmapsdk = new QQMapWX({
            key: 'LDOBZ-QEMK2-SVKUR-CZFDD-E5JX7-T2BOQ'
        });
    },
    reverseGeocoder: function (location) {
        return new Promise(function (resolve, reject) {
            qqmapsdk.reverseGeocoder({
                location: location,
                success: function (res) {
                    resolve(res);
                },
                fail: function (res) {
                    reject(res);
                },
            });
        });
    },
    onLoad: function () {
        if (wx.getUserProfile) {
            this.setData({
                canIUseGetUserProfile: true
            });
        }
        this.instanceKey();
        this.getLocation();
    },
    getLocation: function () {
        var _this = this;
        wx.getLocation({
            type: 'gcj02',
            isHighAccuracy: true,
            altitude: "true",
            success: function (response) { return __awaiter(_this, void 0, void 0, function () {
                var resLocation, result, address, formatted_addresses;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.reverseGeocoder({
                                latitude: response.latitude,
                                longitude: response.longitude,
                            })];
                        case 1:
                            resLocation = _a.sent();
                            result = (resLocation || {}).result;
                            address = result.address, formatted_addresses = result.formatted_addresses;
                            this.setData({
                                address: "" + address + formatted_addresses.recommend
                            });
                            return [2];
                    }
                });
            }); }
        });
    },
    openMap: function () {
        var _this = this;
        console.log('点击');
        wx.getLocation({
            type: 'gcj02',
            success: function (response) {
                wx.chooseLocation({
                    latitude: response.latitude,
                    longitude: response.longitude,
                    success: function (res) {
                        _this.setData({
                            address: res.address
                        });
                    }
                });
            },
            fail: function (res) {
                util_1.openTip(res.errMsg, 2000, 'error');
            }
        });
    },
    getUserInfo: function (e) {
        console.log(e);
        this.setData({
            userInfo: e.detail.userInfo,
            hasUserInfo: true
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlBLHlDQUEwQztBQUcxQyxJQUFJLE9BQU8sR0FBRyxPQUFPLENBQUMsdUNBQXVDLENBQUMsQ0FBQztBQUMvRCxJQUFJLFFBQWEsQ0FBQTtBQUdqQixJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixVQUFVLEVBQUUsQ0FBQyw4QkFBOEIsRUFBRSw4QkFBOEIsRUFBRSw4QkFBOEIsQ0FBQztRQUM1RyxRQUFRLEVBQUUsS0FBSztRQUNmLFFBQVEsRUFBRSxJQUFJO1FBQ2QsUUFBUSxFQUFFLElBQUk7UUFDZCxRQUFRLEVBQUUsR0FBRztRQUNiLE9BQU8sRUFBRSxFQUFFO1FBQ1gsU0FBUyxFQUFFLENBQUM7Z0JBQ1YsR0FBRyxFQUFFLG1FQUFtRTtnQkFDeEUsSUFBSSxFQUFFLDhCQUE4QjthQUNyQztZQUNEO2dCQUNFLEdBQUcsRUFBRSxpRUFBaUU7Z0JBQ3RFLElBQUksRUFBRSw4QkFBOEI7YUFDckM7U0FDQTtRQUNELFFBQVEsRUFBRTtZQUNSO2dCQUNFLElBQUksRUFBRSxHQUFHO2dCQUNULEdBQUcsRUFBRSxRQUFRO2FBQ2Q7WUFDRDtnQkFDRSxJQUFJLEVBQUUsR0FBRztnQkFDVCxHQUFHLEVBQUUsUUFBUTthQUNkO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLEdBQUc7Z0JBQ1QsR0FBRyxFQUFFLFFBQVE7YUFDZDtZQUNEO2dCQUNFLElBQUksRUFBRSxHQUFHO2dCQUNULEdBQUcsRUFBRSxRQUFRO2FBQ2Q7U0FDRjtRQUNELFdBQVcsRUFBRTtZQUNYO2dCQUNFLEtBQUssRUFBRSxRQUFRO2dCQUNmLEdBQUcsRUFBRSxnREFBZ0Q7YUFDdEQ7WUFDRDtnQkFDRSxLQUFLLEVBQUUsTUFBTTtnQkFDYixHQUFHLEVBQUUsb0JBQW9CO2FBQzFCO1lBQ0Q7Z0JBQ0Us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QUM7SUFFRCxXQUFXLEVBQVgsVUFBWSxDQUFNO1FBRWhCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDZCxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsUUFBUSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUTtZQUMzQixXQUFXLEVBQUUsSUFBSTtTQUNsQixDQUFDLENBQUE7SUFDSixDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW5kZXgudHNcbi8vIOiOt+WPluW6lOeUqOWunuS+i1xuXG4vLyBjb25zdCBhcHAgPSBnZXRBcHA8SUFwcE9wdGlvbj4oKVxuaW1wb3J0IHsgb3BlblRpcCB9IGZyb20gJy4uLy4uL3V0aWxzL3V0aWwnXG5cbi8vIOW8leWFpVNES+aguOW/g+exu++8jGpz5paH5Lu25qC55o2u6Ieq5bex5Lia5Yqh77yM5L2N572u5Y+v6Ieq6KGM5pS+572uXG52YXIgUVFNYXBXWCA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL21hcF9zZGsvcXFtYXAtd3gtanNzZGsuanMnKTtcbnZhciBxcW1hcHNkazogYW55XG5cblxuUGFnZSh7XG4gIGRhdGE6IHtcbiAgICBiYWNrZ3JvdW5kOiBbJy4uLy4uL2ltYWdlL2hvbWUvc3dpcGUxLmpwZWcnLCAnLi4vLi4vaW1hZ2UvaG9tZS9zd2lwZTIuanBlZycsICcuLi8uLi9pbWFnZS9ob21lL3N3aXBlMy5qcGVnJ10sXG4gICAgdmVydGljYWw6IGZhbHNlLFxuICAgIGF1dG9wbGF5OiB0cnVlLFxuICAgIGludGVydmFsOiAyMDAwLFxuICAgIGR1cmF0aW9uOiA1MDAsXG4gICAgYWRkcmVzczogXCJcIixcbiAgICBpbnRyb2R1Y2U6IFt7XG4gICAgICBkZXM6IFwi5Zyo5byA5pS+55qE5Y2V5Lq65Yy65a2m5Lmg77yM5L2g5Y+v5Lul5oSf5Y+X5ZGo5Zu05rWT54OI55qE5a2m5Lmg5rCb5Zu077yM5peg6K665piv5LiK572R6L+Y5piv55yL5Lmm44CB5Yi36aKY44CB5LmD6Iez5Yqe5YWs77yM5pWI5p6c6YO95p6B5L2z77yB5pu05pyJ5py65Lya6K6k6K+G5LiA576k54ix5a2m5Lmg55qE5aW95Lmm5Y+L77yBXCIsXG4gICAgICBwYXRoOiAnLi4vLi4vaW1hZ2UvaG9tZS9zd2lwZTEuanBlZydcbiAgICB9LFxuICAgIHtcbiAgICAgIGRlczogJ+ebuOWvueeLrOeri+eahOWPjOS6uuWMuu+8jOaYr+S9oOWSjOWlveWPi+S6kuWLieWtpuS5oOeahOS4jeS6jOmAieaLqeOAguWcqOS8mOmbheeahOeOr+Wig+S4re+8jOS9oOS7rOWPr+S7peS6kuebuOebkeedo++8jOS6kuebuOiuqOiuuu+8jOW9k+eEtu+8jOWBtuWwlOWQg+eCueWwj+mbtumjn+S5n+aYr+W+iOaDrOaEj+eahOOAgicsXG4gICAgICBwYXRoOiAnLi4vLi4vaW1hZ2UvaG9tZS9zd2lwZTIuanBlZydcbiAgICB9XG4gICAgXSxcbiAgICBmbG93TGlzdDogW1xuICAgICAge1xuICAgICAgICBzdGVwOiBcIuKRoFwiLFxuICAgICAgICBkZXM6IFwi57q/5LiK5LuY6LS56aKE57qmXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHN0ZXA6IFwi4pGhXCIsXG4gICAgICAgIGRlczogXCLpl6jlupfmiavnoIHlvIDpl6hcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc3RlcDogXCLikaJcIixcbiAgICAgICAgZGVzOiBcIuWvueW6lOS9jee9ruWFpeW6p1wiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzdGVwOiBcIuKRo1wiLFxuICAgICAgICBkZXM6IFwi5omr56CB5byA54Gv5a2m5LmgXCJcbiAgICAgIH0sXG4gICAgXSxcbiAgICBjYXJlZnVsTGlzdDogW1xuICAgICAge1xuICAgICAgICB0aXRsZTogXCLlhbPkuo7lo7Dpn7PmjqfliLZcIixcbiAgICAgICAgZGVzOiBcIuWcqOiHquS5oOWupOWGhe+8jOivt+iHquinieS/neaMgeWuiemdmeOAguivt+aOp+WItuWjsOmHj++8jOWwhuaJi+acuuiwg+aIkOmdmemfs+eKtuaAgeOAguWmguacieaOpeeUteivnemcgOaxgu+8jOivt+enu+atpeWFrOWFseWMuuWfn+OAglwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aXRsZTogXCLlhbPkuo7ppa7po59cIixcbiAgICAgICAgZGVzOiBcIuivt+S4jeimgeWcqOiHquS5oOWupOWQg+W4puaciea1k+WOmuawlOWRs+eahOmjn+WTgeOAglwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aXRsZTogXCLlhbPkuo7luqfkvY1cIixcbiAgICAgICAgZGVzOiBcIuivt+WLv+WNoOeUqOaXoOS6uuW6p+S9je+8jOivt+WLv+maj+aEj+a2gum4pu+8jOemu+W8gOW6p+S9jeWJjeivt+WwhuakheWtkOW9kuS9je+8jOW5tuaJq+eggeWFs+eBr+OAglwiXG4gICAgICB9LFxuICAgIF1cbiAgfSxcbiAgb25TaGFyZUFwcE1lc3NhZ2UoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRpdGxlOiAnc3dpcGVyJyxcbiAgICAgIHBhdGg6ICdwYWdlL2NvbXBvbmVudC9wYWdlcy9zd2lwZXIvc3dpcGVyJ1xuICAgIH1cbiAgfSxcbiAgLy8g5LqL5Lu25aSE55CG5Ye95pWwXG4gIGJpbmRWaWV3VGFwKCkge1xuICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgdXJsOiAnLi4vbG9ncy9sb2dzJyxcbiAgICB9KVxuICB9LFxuICBpbnN0YW5jZUtleSgpIHtcbiAgICAvLyDlrp7kvovljJZBUEnmoLjlv4PnsbtcbiAgICBxcW1hcHNkayA9IG5ldyBRUU1hcFdYKHtcbiAgICAgIGtleTogJ0xET0JaLVFFTUsyLVNWS1VSLUNaRkRELUU1Slg3LVQyQk9RJ1xuICAgIH0pO1xuICB9LFxuICAvLyDmoLnmja7nu4/nuqzluqbojrflj5blnLDlnYBcbiAgcmV2ZXJzZUdlb2NvZGVyKGxvY2F0aW9uOiB7IGxhdGl0dWRlOiBzdHJpbmcsIGxvbmdpdHVkZTogc3RyaW5nIH0pIHtcblxuICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBxcW1hcHNkay5yZXZlcnNlR2VvY29kZXIoXG4gICAgICAgIHtcbiAgICAgICAgICBsb2NhdGlvbjogbG9jYXRpb24sXG4gICAgICAgICAgc3VjY2VzczogKHJlczogYW55KSA9PiB7XG4gICAgICAgICAgICByZXNvbHZlKHJlcylcbiAgICAgICAgICB9LFxuICAgICAgICAgIGZhaWw6IChyZXM6IGFueSkgPT4ge1xuICAgICAgICAgICAgcmVqZWN0KHJlcylcbiAgICAgICAgICB9LFxuICAgICAgICB9XG4gICAgICApXG4gICAgfSlcblxuICB9LFxuICBvbkxvYWQoKSB7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIGlmICh3eC5nZXRVc2VyUHJvZmlsZSkge1xuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgY2FuSVVzZUdldFVzZXJQcm9maWxlOiB0cnVlXG4gICAgICB9KVxuICAgIH1cbiAgICB0aGlzLmluc3RhbmNlS2V5KClcbiAgICB0aGlzLmdldExvY2F0aW9uKClcbiAgfSxcblxuICBnZXRMb2NhdGlvbigpIHtcbiAgICB3eC5nZXRMb2NhdGlvbih7XG4gICAgICB0eXBlOiAnZ2NqMDInLCAvL+i/lOWbnuWPr+S7peeUqOS6jnd4Lm9wZW5Mb2NhdGlvbueahOe7j+e6rOW6plxuICAgICAgaXNIaWdoQWNjdXJhY3k6IHRydWUsXG4gICAgICBhbHRpdHVkZTogXCJ0cnVlXCIsXG4gICAgICBzdWNjZXNzOiBhc3luYyAocmVzcG9uc2U6IGFueSkgPT4ge1xuICAgICAgICBjb25zdCByZXNMb2NhdGlvbjogYW55ID0gYXdhaXQgdGhpcy5yZXZlcnNlR2VvY29kZXIoe1xuICAgICAgICAgIGxhdGl0dWRlOiByZXNwb25zZS5sYXRpdHVkZSxcbiAgICAgICAgICBsb25naXR1ZGU6IHJlc3BvbnNlLmxvbmdpdHVkZSxcbiAgICAgICAgfSlcbiAgICAgICAgY29uc3QgeyByZXN1bHQgfSA9IHJlc0xvY2F0aW9uIHx8IHt9XG4gICAgICAgIGNvbnN0IHsgYWRkcmVzcywgZm9ybWF0dGVkX2FkZHJlc3NlcyB9ID0gcmVzdWx0XG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgYWRkcmVzczogYCR7YWRkcmVzc30ke2Zvcm1hdHRlZF9hZGRyZXNzZXMucmVjb21tZW5kfWBcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICB9LFxuICBvcGVuTWFwKCkge1xuICAgIGNvbnNvbGUubG9nKCfngrnlh7snKVxuICAgIHd4LmdldExvY2F0aW9uKHtcbiAgICAgIHR5cGU6ICdnY2owMicsIC8v6L+U5Zue5Y+v5Lul55So5LqOd3gub3BlbkxvY2F0aW9u55qE57uP57qs5bqmXG4gICAgICAvLyBpc0hpZ2hBY2N1cmFjeTogdHJ1ZSxcbiAgICAgIC8vIGFsdGl0dWRlOiBcInRydWVcIixcbiAgICAgIHN1Y2Nlc3M6IChyZXNwb25zZTogYW55KSA9PiB7XG4gICAgICAgIHd4LmNob29zZUxvY2F0aW9uKHtcbiAgICAgICAgICBsYXRpdHVkZTogcmVzcG9uc2UubGF0aXR1ZGUsXG4gICAgICAgICAgbG9uZ2l0dWRlOiByZXNwb25zZS5sb25naXR1ZGUsXG4gICAgICAgICAgc3VjY2VzczogKHJlcykgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICAgICAgYWRkcmVzczogcmVzLmFkZHJlc3NcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSxcbiAgICAgIGZhaWw6IChyZXMpID0+IHtcbiAgICAgICAgb3BlblRpcChcbiAgICAgICAgICByZXMuZXJyTXNnLFxuICAgICAgICAgIDIwMDAsXG4gICAgICAgICAgJ2Vycm9yJyxcbiAgICAgICAgKVxuXG4gICAgICB9XG4gICAgfSlcbiAgfSxcblxuICBnZXRVc2VySW5mbyhlOiBhbnkpIHtcbiAgICAvLyDkuI3mjqjojZDkvb/nlKhnZXRVc2VySW5mb+iOt+WPlueUqOaIt+S/oeaBr++8jOmihOiuoeiHqjIwMjHlubQ05pyIMTPml6XotbfvvIxnZXRVc2VySW5mb+WwhuS4jeWGjeW8ueWHuuW8ueeql++8jOW5tuebtOaOpei/lOWbnuWMv+WQjeeahOeUqOaIt+S4quS6uuS/oeaBr1xuICAgIGNvbnNvbGUubG9nKGUpXG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIHVzZXJJbmZvOiBlLmRldGFpbC51c2VySW5mbyxcbiAgICAgIGhhc1VzZXJJbmZvOiB0cnVlXG4gICAgfSlcbiAgfVxufSlcblxuIl19