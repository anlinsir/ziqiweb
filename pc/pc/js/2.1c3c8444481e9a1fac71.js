webpackJsonp([2],{"Hn/e":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("Cz8s"),i=s("aozt"),n=s.n(i),r={data:function(){return{pageNum:0,totlesNum:3,data:null,last:"",next:"",fullHeight:"",loading:!0}},methods:{returnNews:function(){this.$router.push("/news")},changePage:function(t){0==t?this.$router.push("/newsDealis/"+this.last.id):this.$router.push("/newsDealis/"+this.next.id)}},components:{Header:a.a},watch:{$route:function(){var t=this;this.fullHeight=document.documentElement.clientHeight,window.onresize=function(){t.fullHeight=document.documentElement.clientHeight},this.loading=!0,n.a.get(href+"/api/post/"+this.$route.params.id).then(function(e){t.loading=!1,document.documentElement.scrollTop=0,document.body.scrollTop=0,t.data=[e.data.data],t.last=e.data.last,t.next=e.data.next,setTimeout(function(){var t=document.getElementsByTagName("img");for(var e in t)"nones"!=t[e].className&&(t[e].style.maxWidth="100%")},1e3)})}},created:function(){},mounted:function(){var t=this;this.fullHeight=document.documentElement.clientHeight,window.onresize=function(){t.fullHeight=document.documentElement.clientHeight},setTimeout(function(){t.loading=!1;var e=document.getElementsByTagName("img");for(var s in e)"nones"!=e[s].className&&(e[s].style.maxWidth="100%")},1e3),document.documentElement.scrollTop=0,document.body.scrollTop=0,n.a.get(href+"/api/post/"+this.$route.params.id).then(function(e){t.data=[e.data.data],t.last=e.data.last,t.next=e.data.next})}},c={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"Warper rb"},[s("Header"),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"loading",style:{height:t.fullHeight+"px"}},[t._m(0)]),t._v(" "),t._l(t.data,function(e,a){return s("div",{staticClass:"Topwarper"},[s("div",{staticClass:"Topwarp mw rb color"},[s("div",{staticClass:"shadowText color"},[s("p",{staticClass:"back"},[t._v("最新资讯")]),t._v(" "),s("p",{staticClass:"forword"},[t._v(t._s(e.title))]),t._v(" "),s("p",{staticClass:"subtext"},[s("span",[t._v(t._s(e.created_at))]),t._v("    |    "),s("span",[t._v(t._s(e.author))])])])])])}),t._v(" "),t._l(t.data,function(e,a){return s("div",{staticClass:"articleWarp  Warper"},[s("div",{staticClass:"articlewarp warp rb"},[s("div",{staticClass:"article rb"},[s("div",{staticClass:"float bb rb"},[s("span",{staticClass:"close pointer",on:{click:t.returnNews}},[s("img",{attrs:{src:"/pc/img/close.png",alt:""}})]),t._v(" "),s("div",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"contentText",domProps:{innerHTML:t._s(e.content)}}),t._v(" "),s("div",{staticClass:"switchPage rb"},[s("div",{directives:[{name:"show",rawName:"v-show",value:!t.last,expression:"!last"}],staticClass:"Left  bb  rb grey",staticStyle:{color:"rgba(124,124,124,1)"}},[t._v("← 上一篇 已经是第一篇文章")]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.last,expression:"last"}],staticClass:"Left  bb  rb  white",on:{click:function(e){t.changePage(0)}}},[t._v("← 上一篇 "+t._s(t.last?t.last.title:"已经是第一篇文章")+" ")]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:!t.next,expression:"!next"}],staticClass:"Right bb  rb grey",staticStyle:{color:"rgba(124,124,124,1)"}},[t._v("已经是最后一篇文章 下一篇  →")]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.next,expression:"next"}],staticClass:"Right white  bb rb ",on:{click:function(e){t.changePage(1)}}},[t._v(t._s(t.next?t.next.title:"已经是最后一篇文章")+" 下一篇 →")])])])])])])}),t._v(" "),t._m(1)],2)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"sk-wave"},[e("div",{staticClass:"sk-rect sk-rect1"}),this._v(" "),e("div",{staticClass:"sk-rect sk-rect2"}),this._v(" "),e("div",{staticClass:"sk-rect sk-rect3"}),this._v(" "),e("div",{staticClass:"sk-rect sk-rect4"}),this._v(" "),e("div",{staticClass:"sk-rect sk-rect5"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"FooterSubWarp rb Warper"},[e("div",{staticClass:"warp rb"},[e("p",{staticClass:"fz14 center"},[this._v(" © 2014 成都子奇科技有限公司 蜀ICP备13026114号-7")])])])}]};var l=s("C7Lr")(r,c,!1,function(t){s("yqGE")},"data-v-a0c6a26a",null);e.default=l.exports},yqGE:function(t,e){}});
//# sourceMappingURL=2.1c3c8444481e9a1fac71.js.map