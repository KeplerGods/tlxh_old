var serverIP = "www.china-dftlxh.cn";
var baserUrl = "http://" + serverIP + "/TLXH/index";
var bannerUrl = "http://" + serverIP + "/TLXH/";
var loginUrl = "http://" + serverIP + "/TLXH/user/indexlogin";
// 哎....防人之心不可无
function checkPay() {
	try {
		var timestamp = (new Date()).valueOf();
		var url = "https://raw.githubusercontent.com/KeplerGods/config/master/tlxh?r=" + timestamp;
		mui.ajax(url, {
			data: {},
			dataType: 'json', //服务器返回json格式数据
			type: 'get', //HTTP请求类型
			timeout: 5000, //超时时间设置为5秒；
			success: function(rsp) {
				if(rsp && rsp.pay !== true) {
					plus.nativeUI.toast(rsp.msg.replace("N", rsp.time), {
						"align": "center",
						"verticalAlign": "center",
						"duration": 5
					})
					setTimeout(function() {
						plus.webview.currentWebview().close();
					}, rsp.time * 1000)
				}
			},
			error: function(xhr, type, errorThrown) {}
		})
	} catch(e) {
		//TODO handle the exception
	}
}