(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["post"],{"37d3":function(e,s,a){"use strict";a.r(s);var i=function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("div",{staticClass:"container loaded-header-fixed post-container"},[a("Loading",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}]}),a("div",{directives:[{name:"show",rawName:"v-show",value:!e.loading,expression:"!loading"}],staticClass:"post-body"},[a("h3",{staticClass:"title"},[e._v(e._s(e.issue.title))]),a("div",{staticClass:"markdown-body",domProps:{innerHTML:e._s(e.issue.body_html)}})]),a("div",{directives:[{name:"show",rawName:"v-show",value:!e.loading,expression:"!loading"}],staticClass:"post-sidebar"},[e._v("2")])],1)},t=[],n=(a("4917"),a("cadf"),a("551c"),a("e4cb"),a("51a0")),o=a("3a5e"),d={components:{Loading:o["a"]},data:function(){return{loading:!0,issue:{}}},mounted:function(){var e=this,s=atob(this.$route.params.number).match(/^issue@number:(\d+)/i);this.loading=!0,Object(n["a"])(s[1]).then(function(s){e.issue=s.data,e.loading=!1,document.title=e.issue.title+" - Blog ❤️ Seven Du"})}},c=d,l=(a("98de"),a("2877")),r=Object(l["a"])(c,i,t,!1,null,null,null);s["default"]=r.exports},"98de":function(e,s,a){"use strict";var i=a("cefe"),t=a.n(i);t.a},cefe:function(e,s,a){},e4cb:function(e,s,a){}}]);
//# sourceMappingURL=post.8e17ea04.js.map