webpackJsonp([1],{E51W:function(t,e){},IlmO:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("7+uW"),n=a("u64Q"),r=a.n(n),i=(a("E51W"),a("/ocq")),o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"layout container"},[e("mu-appbar",{attrs:{title:"国际校区团委答题系统"}},[e("mu-icon-button",{attrs:{slot:"left",icon:"menu"},slot:"left"}),this._v(" "),e("mu-icon-button",{attrs:{slot:"right",icon:"expand_more"},slot:"right"})],1),this._v(" "),e("router-view")],1)},staticRenderFns:[]};var u=a("VU/8")({},o,!1,function(t){a("IlmO")},null,null).exports,l=(a("VU/8")(null,null,!1,null,null,null).exports,a("mtWM")),c=a.n(l);c.a.defaults.timeout=15e3;var m=c.a.create();c.a.interceptors.request.use=m.interceptors.request.use;var d=function(t){return m.get("/api/exam")},v=function(t){return m.post("/api/exam",t)},p={data:function(){return{a:1,value:2,problems:[],loaded:!1,curvalue:"",ans:[],snackbar:!1,dialog:!1,ZJUid:"",ZJUerror:!1,submitted:!1,grade:0,gradedialog:!1,snackbarmsg:""}},created:function(){this.init()},methods:{init:function(){var t=this;d().then(function(e){for(var a in t.problems=e.data,t.problems)t.ans.push({id:t.problems[a].id,answer:""});t.loaded=!0})},next:function(){if(!this.curvalue)return this.snackbarmsg="不要急，先完成当前题目~",void this.showSnackbar();this.$router.push({name:"question",params:{id:Number(this.cur)+1}})},prep:function(){this.$router.push({name:"question",params:{id:Number(this.cur)-1}})},showSnackbar:function(){var t=this;this.snackbar=!0,this.snackTimer&&clearTimeout(this.snackTimer),this.snackTimer=setTimeout(function(){t.snackbar=!1},2e3)},hideSnackbar:function(){this.snackbar=!1,this.snackTimer&&clearTimeout(this.snackTimer)},open:function(){this.dialog=!0},close:function(){this.dialog=!1},open_final:function(){this.gradedialog=!0},allsolve:function(){for(var t in this.ans)if(!this.ans[t].answer)return!1;return!0},show_submit:function(){return this.curvalue?(this.ans[this.cur-1].answer=this.curvalue,this.allsolve()?void this.open():(this.snackbarmsg="你还有题目未完成哦~去前面找找吧",void this.showSnackbar())):(this.snackbarmsg="不要急，先完成当前题目~",void this.showSnackbar())},submit:function(){var t=this;if(this.ZJUid&&!isNaN(this.ZJUid)){this.close(),this.open_final(),this.submitted=!0,this.ZJUerror=!1,this.ans[this.cur-1].answer=this.curvalue;var e={ZJUid:this.ZJUid,ans:this.ans};v(e).then(function(e){"success"===e.data.status&&(t.grade=100*parseFloat(e.data.correctcnt)/parseFloat(e.data.allcnt))})}else this.ZJUerror=!0}},computed:{cur:function(){return this.$route.params.id}},watch:{$route:function(t,e){this.ans[e.params.id-1].answer=this.curvalue,this.curvalue=this.ans[t.params.id-1].answer||""}}},h={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.loaded?a("mu-card",[a("mu-card-title",{attrs:{title:"第"+t.cur+"题",subTitle:"送命题"}}),t._v(" "),a("mu-card-text",[t._v("\n            "+t._s(t.problems[t.cur-1].name)+"\n            "),a("br"),a("br"),t._v(" "),a("mu-radio",{staticClass:"demo-radio",attrs:{label:t.problems[t.cur-1].A,name:"group",nativeValue:"A"},model:{value:t.curvalue,callback:function(e){t.curvalue=e},expression:"curvalue"}}),t._v(" "),a("br"),t._v(" "),a("mu-radio",{staticClass:"demo-radio",attrs:{label:t.problems[t.cur-1].B,name:"group",nativeValue:"B"},model:{value:t.curvalue,callback:function(e){t.curvalue=e},expression:"curvalue"}}),t._v(" "),a("br"),t._v(" "),a("mu-radio",{staticClass:"demo-radio",attrs:{label:t.problems[t.cur-1].C,name:"group",nativeValue:"C"},model:{value:t.curvalue,callback:function(e){t.curvalue=e},expression:"curvalue"}}),t._v(" "),a("br"),t._v(" "),a("mu-radio",{staticClass:"demo-radio",attrs:{label:t.problems[t.cur-1].D,name:"group",nativeValue:"D"},model:{value:t.curvalue,callback:function(e){t.curvalue=e},expression:"curvalue"}}),t._v(" "),a("br")],1),t._v(" "),a("mu-card-actions",[a("mu-flexbox",[a("mu-flexbox-item",[1!=t.cur?a("mu-raised-button",{attrs:{label:"上一题",primary:"",fullWidth:""},on:{click:function(e){t.prep()}}}):t._e()],1),t._v(" "),a("mu-flexbox-item",{staticClass:"flex-demo"},[t.cur!=t.problems.length?a("mu-raised-button",{attrs:{label:"下一题",secondary:"",fullWidth:""},on:{click:function(e){t.next()}}}):a("mu-raised-button",{attrs:{label:"提交",secondary:"",fullWidth:""},on:{click:function(e){t.show_submit()}}})],1)],1)],1),t._v(" "),t.snackbar?a("mu-snackbar",{attrs:{message:t.snackbarmsg,action:"关闭"},on:{actionClick:t.hideSnackbar,close:t.hideSnackbar}}):t._e(),t._v(" "),a("mu-dialog",{attrs:{open:t.dialog,title:"提交"},on:{close:t.close}},[t._v("\n            \n\n                请输入您的学号"),a("br"),t._v(" "),t.ZJUerror?a("mu-text-field",{attrs:{type:"number",hintText:"3170....",errorText:"请输入合法的学号"},model:{value:t.ZJUid,callback:function(e){t.ZJUid=e},expression:"ZJUid"}}):a("mu-text-field",{attrs:{type:"number",hintText:"3170...."},model:{value:t.ZJUid,callback:function(e){t.ZJUid=e},expression:"ZJUid"}}),a("br"),t._v(" "),a("mu-flat-button",{attrs:{slot:"actions",primary:"",label:"取消"},on:{click:t.close},slot:"actions"}),t._v(" "),a("mu-flat-button",{attrs:{slot:"actions",primary:"",label:"确定"},on:{click:function(e){t.submit()}},slot:"actions"})],1),t._v(" "),a("mu-dialog",{attrs:{open:t.gradedialog,title:"成绩"}},[t._v("\n            你的成绩是"+t._s(t.grade)+"分\n            ")])],1):a("mu-flexbox",{attrs:{orient:"vertical",gutter:200}},[a("mu-flexbox-item"),t._v(" "),a("mu-flexbox-item",{attrs:{justify:"center",align:"center"}},[a("mu-circular-progress",{attrs:{size:80,strokeWidth:5,color:"#f50057"}}),t._v(">\n                "),a("p",[t._v("题目正在拼命加载中...")])],1),t._v(" "),a("mu-flexbox-item")],1)],1)},staticRenderFns:[]};var b=a("VU/8")(p,h,!1,function(t){a("QybF")},null,null).exports,f={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("mu-content-block",[a("h2",[t._v("欢迎来到国际校区团委答题系统")]),t._v(" "),a("mu-raised-button",{attrs:{label:"开始答题",to:"/problem/1",secondary:"",fullWidth:""}}),t._v(" "),a("br"),a("br"),a("br"),a("br"),t._v(" "),a("mu-timeline",[a("mu-timeline-item",{attrs:{iconType:"dotted"}},[a("span",{attrs:{slot:"des"},slot:"des"},[t._v("发布1.0版本")])]),t._v(" "),a("mu-timeline-item",{attrs:{iconLine:"5"}},[a("span",{attrs:{slot:"time"},slot:"time"},[t._v("2018年1月25日")]),t._v(" "),a("span",{attrs:{slot:"des"},slot:"des"},[t._v("前后端对接成功")])]),t._v(" "),a("mu-timeline-item",[a("span",{attrs:{slot:"time"},slot:"time"},[t._v("2018年1月25日")]),t._v(" "),a("span",{attrs:{slot:"des"},slot:"des"},[t._v("完成RESTFUL API(Koa.js)")])]),t._v(" "),a("mu-timeline-item",[a("span",{attrs:{slot:"time"},slot:"time"},[t._v("2018年1月24日")]),t._v(" "),a("span",{attrs:{slot:"des"},slot:"des"},[t._v("完成后台管理界面(Vue.js)")])]),t._v(" "),a("mu-timeline-item",[a("span",{attrs:{slot:"time"},slot:"time"},[t._v("2018年1月24日")]),t._v(" "),a("span",{attrs:{slot:"des"},slot:"des"},[t._v("完成移动端界面(Muse-UI)")])])],1)],1)],1)},staticRenderFns:[]};var _=a("VU/8")({},f,!1,function(t){a("Qhp0")},null,null).exports;s.default.use(i.a);var k=new i.a({mode:"history",routes:[{path:"/problem",component:u,children:[{path:"/",name:"index",component:_},{path:":id",name:"question",component:b}]}]}),x={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var g=a("VU/8")({name:"App"},x,!1,function(t){a("o8nZ")},null,null).exports;s.default.config.productionTip=!1,s.default.use(r.a),new s.default({el:"#app",router:k,components:{App:g},template:"<App/>"})},Qhp0:function(t,e){},QybF:function(t,e){},o8nZ:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.0a9ef5d2c65b24533e68.js.map