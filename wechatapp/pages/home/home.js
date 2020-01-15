// pages/home/home.js
// 注册小程序中的一个页面。接受一个 Object 类型参数，
// 其指定页面的初始数据、生命周期回调、事件处理函数等
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
      }
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