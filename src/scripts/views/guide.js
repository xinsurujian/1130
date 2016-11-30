var guideTpl = require("../tpls/guide.string");

SPA.defineView("guide",{
	html:guideTpl,
	plugins:["delegated"],         // 注入delegated插件,用于绑定事件
	bindEvents:{        // 视图
		show:function(){
			var mySwiper = new Swiper("#swiper-container");
		}
	},
	bindActions:{    // DOM事件
        "go.index":function(){
        	SPA.open("index");   // 切换视图 viewName指视图的名称
        }
	}
})