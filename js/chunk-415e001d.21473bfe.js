(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-415e001d"],{"0993":function(t,e,r){"use strict";r("0c74")},"0a87":function(t,e,r){},"0c74":function(t,e,r){},"2fc2":function(t,e,r){"use strict";r("adb6")},adb6:function(t,e,r){},b661:function(t,e,r){"use strict";var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"embed-iframe"}},[r("iframe",{attrs:{src:t.url,frameborder:"0"}}),r("button",{attrs:{id:"close-button"},on:{click:t.closeFrame}},[t._v("X")])])},a=[],n={name:"embed-iframe",props:{url:String},methods:{closeFrame:function(){this.$emit("toggleActive")}}},o=n,c=(r("2fc2"),r("2877")),s=Object(c["a"])(o,i,a,!1,null,"0ea73642",null);e["a"]=s.exports},d92c:function(t,e,r){"use strict";var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"nav"}},[r("span",{attrs:{id:"hide"}},[t._v("-- ")]),r("router-link",{attrs:{to:"/projects/jellyfish"}},[t._v("Jellyfish")]),r("span",{attrs:{id:"hide"}},[t._v(" | ")]),r("router-link",{attrs:{to:"/projects/penne-pinching"}},[t._v("Penne Pinching")]),r("span",{attrs:{id:"hide"}},[t._v(" | ")]),r("router-link",{attrs:{to:"/projects/wevote"}},[t._v("WeVote")]),r("span",{attrs:{id:"hide"}},[t._v(" | ")]),r("router-link",{attrs:{to:"/projects/tictactoe"}},[t._v("Tic Tac Toe")]),r("span",{attrs:{id:"hide"}},[t._v(" | ")]),r("router-link",{attrs:{to:"/projects/catgame"}},[t._v("JS Cat Game")]),r("hr")],1)},a=[],n={name:"project-nav"},o=n,c=(r("0993"),r("2877")),s=Object(c["a"])(o,i,a,!1,null,"8d344f06",null);e["a"]=s.exports},f0d4:function(t,e,r){"use strict";r.r(e);var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"tictactoe"}},[r("project-nav"),t.active?t._e():r("div",[r("h3",[t._v("Tic Tac Toe")]),r("ul",[r("li",[r("a",{on:{click:t.toggleActive}},[t._v("Play (iframe in modal)")])]),t._m(0)]),r("p",[t._v("Tic Tac Toe was our first major solo project (known as Project Zero) during my course. The goal was to create the game with working logic and views, then to take it as far as possible during the week allocated.")]),r("p",[t._v('The below is where mine finished, with almost-working "AI" (a min-max style algorithm) and sounds (now off by default, can be re-added using the bottons) and borrowed graphics.')]),r("p",[t._v("Largely untouched since finishing, for nostaglic reasons.")]),t._m(1)]),t.active?r("embed-iframe",{attrs:{url:"https://chrskerr.github.io/ProjectZero/"},on:{toggleActive:t.toggleActive}}):t._e()],1)},a=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",[r("a",{attrs:{href:"https://github.com/chrskerr/ProjectZero",target:"_blank",rel:"noreferrer"}},[t._v("GitHub repo")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[r("em",[t._v("This game is not currently mobile responsive, as it wasn't when it was written.")])])}],n=r("b661"),o=r("d92c"),c={name:"tictactoe",data:function(){return{active:!1}},methods:{toggleActive:function(){this.active=!this.active,window.scrollTo(0,0)}},components:{"embed-iframe":n["a"],"project-nav":o["a"]}},s=c,l=(r("faaf"),r("2877")),u=Object(l["a"])(s,i,a,!1,null,"1feede7a",null);e["default"]=u.exports},faaf:function(t,e,r){"use strict";r("0a87")}}]);
//# sourceMappingURL=chunk-415e001d.21473bfe.js.map