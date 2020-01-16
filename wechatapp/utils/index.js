
const baseURL = "https://zuozhaoxi.com:1910";
exports.http  = function({url,method,data,headers,success}){
    wx.showLoading({
        title: '加载中...',
    })
    wx.request({
    url:baseURL+url,
    method:method,
    data:data,
    header:headers,
    success:res=>{
        console.log(res.data);
        success(res);
        wx.hideLoading();
        wx.showToast({
            title:res.data.msg
        })
    }
    })
}