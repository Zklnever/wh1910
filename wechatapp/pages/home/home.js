// pages/home/home.js
// 注册小程序中的一个页面。接受一个 Object 类型参数，
// 其指定页面的初始数据、生命周期回调、事件处理函数等
var  {http} = require("../../utils/index.js");

Page({
  /**
   * 页面的初始数据
   */
  data: {
      count:2020,
      list:["美美英","帅潘潘","靓左左","暴雷雷"],
      flag:!!0,
      word:"努力就一定可以拿到 offer ",
      imgUrl:"https://zuozhaoxi.com/base/img/2.jpg",
      toggle:true,
      lastName:"小飞侠",
      num:[1, 2, 3, 4, 5, 6, 7, 8, 9],
      carList:[],
      item:{
        index:1,
        msg:"1910-daydayup",
        time:'2020-01-15'
      },
      likeData:{
        who:"大雷雷",
        count:1314
      },
      actionsheetData:{
        items:["办理护照","办理签证","办理绿卡"],
        flag:true
      },
      loginData:{
        show:true,
        mobile:18086417861,
        code:""
      }
  },
  loginauto(){
    http({
      url:"/react/checkCode",
      method:"POST",
      data:{
        mobile:this.data.loginData.mobile,
        code:this.data.loginData.code
      },
      success:(res)=>{
        if(!!res.data.type){
          
        }
        wx.setStorageSync("isLogin",!!res.data.type);
        wx.setStorageSync("token",res.data.token);
        this.setData({
          'loginData.show':false
        });
      }
    })
  },
  sendSms(){
    wx.showLoading({
      title: '加载中...',
    })
    wx.request({
      url:"https://zuozhaoxi.com:1910/react/yum/sendSms",
      method:"POST",
      data:{
        id:1910,
        mobile:this.data.loginData.mobile
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success:res=>{
        console.log(res.data);
        wx.hideLoading();
        wx.showToast({
          title:res.data.msg
        })
      }
    })
  },
  logincancel(){
    this.setData({
      'loginData.show':false
    });
    wx.showToast({
      title:"游客访问"
    })
  },
  getMobile(e){
    this.setData({
      'loginData.mobile':e.detail.value
    })
  },
  getCode(e){
    this.setData({
      'loginData.code':e.detail.value
    })
  },
  tapItem(e){
    var index = e.target.dataset.index;
    console.log(e);
    this.setData({
      'actionsheetData.flag':true
    })
    wx.showToast({
      title:`${this.data.actionsheetData.items[index]} success`
    })
  },
  openaction(){
    this.setData({
      'actionsheetData.flag':false
    })
  },
  actioncancel(){
    this.setData({
      'actionsheetData.flag':true
    })
  },
  showSome(){
    wx.showModal({
      title:"流量警告",
      content:"你正在使用4G网络流量观看视频.",
      cancelText:"取消观看",
      cancelColor:"#000",
      confirmText:"我要观看",
      confirmColor:"#123456",
      success :(res)=>{
        if (res.confirm) {
          console.log('用户点击确定');
          wx.showToast({
            title:"你是土豪请继续"
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
          wx.showToast({
            icon:"cancel",
            title:"请充钱"
          })
        }
      }
    })
  },
  openActionSheet(){
    var that = this;
    wx.showActionSheet({
      itemList:this.data.actionsheetData.items,
      success: (res)=> {
        console.log(res.tapIndex)
        wx.showToast({
          title:`${this.data.actionsheetData.items[res.tapIndex]} 成功`
        })
      },
      fail (res) {
        console.log(res.errMsg)
      }
    })
  },
  parentAction(){
    wx.showModal({
      title:"这是父元素事件 "
    })
  },
  childCatch(){
    console.log("catch 一定阻止事件冒泡")
    wx.showModal({
      title:"catch 一定阻止事件冒泡 "
    })
  },
  childbind(){
    console.log("bind 一定不会阻止事件冒泡")
    wx.showModal({
      title:"bind 不会阻止事件冒泡 "
    })
  },
  getWord(e){
    console.log(e);
    this.setData({
      word:e.detail.value
    })
  },
  tapName(e){
    console.log(e);
    console.log(e.target.dataset.hi);
  },
  changeToggle(e){
    console.log(e);
    this.setData({
      toggle:e.detail.value
    })
  },
  changeCount(){
    this.setData({
      count:++this.data.count
    })
  },
  changeFlag(){
    this.data.flag = !this.data.flag; // 同步修改 
    this.setData({
      flag:this.data.flag
    })
  },
  /**
   * 生命周期函数--监听页面加载   1
   */
  onLoad: function (options) {  

    this.setData({
      'loginData.show':!wx.getStorageSync("isLogin")
    }) 
     
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {    // 1 

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {   // n 

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {   // n 
 
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {   // 1 

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {
      title: '1910-勇争第一!',
      path: '/pages/home/home'
    }
  }
})