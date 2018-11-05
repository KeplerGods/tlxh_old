tabsName = [{
	id: "01",
	name: "关于协会",
	show: true,
	curl: "/appData",
	childs: [{
		id: "01",
		show: true,
		name: "会长致辞"
	}, {
		id: "02",
		show: true,
		name: "协会介绍"
	}, {
		id: "03",
		show: true,
		name: "人才招聘"
	}, {
		id: "04",
		show: true,
		name: "联系我们"
	}]
}, {
	id: "0",
	show: true,
	name: "协会动态",
	curl: "/assAppData",
	childs: [{
		id: "0",
		show: true,
		name: "协会领导活动"
	}, {
		id: "1",
		show: true,
		name: "协会主办活动"
	}, {
		id: "2",
		show: true,
		name: "直属机构活动"
	}, {
		id: "3",
		show: true,
		name: "分支机构活动"
	}, {
		id: "4",
		show: true,
		name: "投稿排行榜"
	}]
}, {
	id: "2",
	show: true,
	name: "行业资讯",
	curl: "/appData",
	childs: [{
		id: "2",
		show: true,
		name: "行业资讯"
	}]
}, {
	id: "0",
	show: true,
	name: "会员专区",
	curl: "/hyAppData",
	childs: [{
		id: "0",
		show: true,
		name: "会员风采"
	}, {
		id: "1",
		show: true,
		name: "会员活动"
	}, {
		id: "2",
		show: true,
		name: "会员推荐"
	}]
}, {
	id: "51",
	show: true,
	name: "行业数据",
	curl: "/appData",
	childs: [{
		id: "51",
		show: true,
		name: "交通数据"
	}, {
		id: "52",
		show: true,
		name: "地方铁路信息"
	}]
}, {
	id: "61",
	show: true,
	name: "法律法规",
	curl: "/appData",
	childs: [{
		id: "61",
		show: true,
		name: "政策法规"
	}, {
		id: "62",
		show: true,
		name: "理论研究"
	}, {
		id: "63",
		show: true,
		name: "知识实务"
	}]
}, {
	id: "71",
	show: true,
	name: "统计信息",
	curl: "/appData",
	childs: [{
		id: "71",
		show: true,
		name: "统计信息"
	}]
}, {
	id: "8",
	show: true,
	name: "精彩时刻",
	curl: "/appData",
	childs: [{
		id: "8",
		show: true,
		name: "精彩时刻"
	}]
}, {
	id: "9",
	show: true,
	name: "协会刊物",
	curl: "/appData",
	childs: [{
		id: "9",
		show: true,
		name: "协会刊物"
	}]
}];
var tabs = new Array();
var tabHtml = "";
for(i = 1; i <= tabsName.length; i++) {
	tabs.push({
		id: "listview-" + i,
		url: "news/listview.html",
		extras: {
			cid: tabsName[i - 1].id,
			curl: tabsName[i - 1].curl,
			cchilds: tabsName[i - 1].childs
		}
	});
	if(i == 1) {
		tabHtml = '<a class="mui-control-item mui-active" href="#item' + i + 'mobile" data-wid="listview-' + i + '">' + tabsName[i - 1].name + '</a>';
	} else {
		tabHtml += '<a class="mui-control-item" href="#item' + i + 'mobile" data-wid="listview-' + i + '">' + tabsName[i - 1].name + '</a>';
	}
}
document.getElementById("tabMain").innerHTML = tabHtml;