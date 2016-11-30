// 引入模板
var indexTpl = require("../tpls/index.string");

// 定义视图
SPA.defineView("index",{
   html:indexTpl,            // 渲染HTML数据
   plugins:["delegated"],
   modules:[{                // 配置子视图
       name:"content",        // 对子视图的引用
       views:["guide","home","search","my"],  // 所有的子视图
       defaultTag:"home",     // 默认视图
       container:".m-wrapper"  // 渲染到主视图的容器
   }],
   bindActions:{
      // 视图加载之后触发的回调
      "switch.tabs":function(e,data){
          // 装载子视图
          this.modules.content.launch(data.tag);
      }
   }
})

