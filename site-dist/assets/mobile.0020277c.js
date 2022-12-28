import{_ as g,j as O,a as R,e as H,l as z,k as X,m as Y,u as V}from"./locales.993feeee.js";import{a as l,t as $,f as A,i as D,o as i,n as M,d as h,F as N,b as j,c as L,w as B,h as W,e as T,r as y,l as q,m as G,x as P,q as I,j as J,v as Q,y as U,K as Z,s as ee}from"./vue-libs.80bc6dc9.js";const te={name:"DemoBlock",props:{card:Boolean,title:String}},ne={class:"van-doc-demo-block"},oe={key:0,class:"van-doc-demo-block__title"},se={key:1,class:"van-doc-demo-block__card"};function ce(e,c,s,o,r,n){return i(),l("div",ne,[s.title?(i(),l("h2",oe,$(s.title),1)):A("",!0),s.card?(i(),l("div",se,[D(e.$slots,"default")])):D(e.$slots,"default",{key:2})])}const C=g(te,[["render",ce]]);const ae={name:"DemoSection",computed:{demoName(){const{meta:e}=this.$route||{};return e&&e.name?`demo-${O(e.name)}`:""}}};function re(e,c,s,o,r,n){return i(),l("section",{class:M(["van-doc-demo-section",n.demoName])},[D(e.$slots,"default")],2)}const S=g(ae,[["render",re]]);const ie=()=>R(()=>import("./index.e5bd2e65.js"),["assets/index.e5bd2e65.js","assets/index.5aa9a57b.css","assets/locales.993feeee.js","assets/vue-libs.80bc6dc9.js"]),ue=()=>R(()=>import("./index.7266e0b1.js"),["assets/index.7266e0b1.js","assets/index.e7a10bdf.css","assets/locales.993feeee.js","assets/vue-libs.80bc6dc9.js"]),E={DemoButton:ie,WContentBox:ue},x={name:"wview",build:{css:{preprocessor:"sass"},site:{publicPath:"/wview/"}},site:{title:"wview",logo:"https://fastly.jsdelivr.net/npm/@vant/assets/logo.png",nav:[{title:"\u57FA\u7840\u7EC4\u4EF6",items:[{path:"demo-button",title:"DemoButton \u6309\u94AE"},{path:"w-content-box",title:"contentBox\u5BB9\u5668"}]}]}},le={},me={viewBox:"0 0 1024 1024"},de=h("path",{fill:"#B6C3D2",d:"M601.1 556.5L333.8 289.3c-24.5-24.5-24.5-64.6 0-89.1s64.6-24.5 89.1 0l267.3 267.3c24.5 24.5 24.5 64.6 0 89.1-24.5 24.4-64.6 24.4-89.1-.1z"},null,-1),_e=h("path",{fill:"#B6C3D2",d:"M690.2 556.5L422.9 823.8c-24.5 24.5-64.6 24.5-89.1 0s-24.5-64.6 0-89.1l267.3-267.3c24.5-24.5 64.6-24.5 89.1 0 24.5 24.6 24.5 64.6 0 89.1z"},null,-1),he=[de,_e];function pe(e,c){return i(),l("svg",me,he)}const fe=g(le,[["render",pe]]);const ve={components:{ArrowRight:fe},props:{lang:String,group:Object},data(){return{active:[]}},computed:{base(){return this.lang?`/${this.lang}`:""}}},ge={class:"demo-home-nav"},ye={class:"demo-home-nav__title"},$e={class:"demo-home-nav__group"};function we(e,c,s,o,r,n){const d=y("arrow-right"),p=y("router-link");return i(),l("div",ge,[h("div",ye,$(s.group.title),1),h("div",$e,[(i(!0),l(N,null,j(s.group.items,m=>(i(),L(p,{class:"demo-home-nav__block",key:m.path,to:`${n.base}/${m.path}`},{default:B(()=>[W($(m.title)+" ",1),T(d,{class:"demo-home-nav__icon"})]),_:2},1032,["to"]))),128))])])}const ke=g(ve,[["render",we]]);const Te={components:{DemoHomeNav:ke},computed:{lang(){const{lang:e}=this.$route.meta;return e},config(){const{locales:e}=x.site;return e?e[this.lang]:x.site},smallTitle(){return this.config.title.length>=8}}},Le={class:"demo-home"},xe=["src"],Ee={key:0,class:"demo-home__desc"};function De(e,c,s,o,r,n){const d=y("demo-home-nav");return i(),l("div",Le,[h("h1",{class:M(["demo-home__title",{"demo-home__title--small":n.smallTitle}])},[h("img",{src:n.config.logo},null,8,xe),h("span",null,$(n.config.title),1)],2),n.config.description?(i(),l("h2",Ee,$(n.config.description),1)):A("",!0),(i(!0),l(N,null,j(n.config.nav,(p,m)=>(i(),L(d,{key:m,lang:n.lang,group:p},null,8,["lang","group"]))),128))])}const K=g(Te,[["render",De]]),{locales:b,defaultLang:Be}=x.site;H(Be);function be(e){const c=e.path.split("/")[1];return Object.keys(b).indexOf(c)!==-1?c:X()}function Ne(){const e=[],c=Object.keys(E),s=b?Object.keys(b):[];return s.length?(e.push({name:"NotFound",path:"/:path(.*)+",redirect:o=>({name:be(o)})}),s.forEach(o=>{e.push({name:o,path:`/${o}`,component:K,meta:{lang:o}})})):(e.push({name:"NotFound",path:"/:path(.*)+",redirect:{name:"home"}}),e.push({name:"home",path:"/",component:K})),c.forEach(o=>{const r=O(o);s.length?s.forEach(n=>{e.push({name:`${n}/${r}`,path:`/${n}/${r}`,component:E[o],meta:{name:o,lang:n}})}):e.push({name:r,path:`/${r}`,component:E[o],meta:{name:o}})}),e}const w=q({history:G(),routes:Ne(),scrollBehavior:(e,c,s)=>s||{x:0,y:0}});P(w.currentRoute,()=>{w.currentRoute.value.redirectedFrom||I(Y)});z(w);window.vueRouter=w;const Ce={data(){return{path:"M296.114 508.035c-3.22-13.597.473-28.499 11.079-39.105l333.912-333.912c16.271-16.272 42.653-16.272 58.925 0s16.272 42.654 0 58.926L395.504 498.47l304.574 304.574c16.272 16.272 16.272 42.654 0 58.926s-42.654 16.272-58.926 0L307.241 528.058a41.472 41.472 0 0 1-11.127-20.023z"}},computed:{title(){const{name:e}=this.$route.meta||{};return e?e.replace(/-/g,""):""}},methods:{onBack(){history.length>1?history.back():this.$router.replace("/")}}},Se={class:"demo-nav"},Ke={class:"demo-nav__title"},Oe=["d"];function Re(e,c,s,o,r,n){return J((i(),l("div",Se,[h("div",Ke,$(n.title),1),(i(),l("svg",{class:"demo-nav__back",viewBox:"0 0 1000 1000",onClick:c[0]||(c[0]=(...d)=>n.onBack&&n.onBack(...d))},[h("path",{fill:"#969799","fill-rule":"evenodd",d:r.path},null,8,Oe)]))],512)),[[Q,n.title]])}const Ae=g(Ce,[["render",Re]]);const Me={components:{DemoNav:Ae},setup(){const e=V();P(e,(c,s)=>{document.documentElement.classList.remove(`van-doc-theme-${s}`),document.documentElement.classList.add(`van-doc-theme-${c}`);const{darkModeClass:o,lightModeClass:r}=x.site;o&&document.documentElement.classList.toggle(o,c==="dark"),r&&document.documentElement.classList.toggle(r,c==="light")},{immediate:!0})}};function je(e,c,s,o,r,n){const d=y("demo-nav"),p=y("demo-section"),m=y("router-view");return i(),l(N,null,[T(d),T(m,null,{default:B(({Component:k})=>[(i(),L(Z,null,[T(p,null,{default:B(()=>[(i(),L(U(k)))]),_:2},1024)],1024))]),_:1})],64)}const Pe=g(Me,[["render",je]]);(function(){if(typeof window>"u")return;var e,c="ontouchstart"in window;document.createTouch||(document.createTouch=function(a,t,u,_,f,v,F){return new s(t,u,{pageX:_,pageY:f,screenX:v,screenY:F,clientX:_-window.pageXOffset,clientY:f-window.pageYOffset},0,0)}),document.createTouchList||(document.createTouchList=function(){for(var a=o(),t=0;t<arguments.length;t++)a[t]=arguments[t];return a.length=arguments.length,a}),Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(a){var t=this;do{if(t.matches(a))return t;t=t.parentElement||t.parentNode}while(t!==null&&t.nodeType===1);return null});var s=function(t,u,_,f,v){f=f||0,v=v||0,this.identifier=u,this.target=t,this.clientX=_.clientX+f,this.clientY=_.clientY+v,this.screenX=_.screenX+f,this.screenY=_.screenY+v,this.pageX=_.pageX+f,this.pageY=_.pageY+v};function o(){var a=[];return a.item=function(t){return this[t]||null},a.identifiedTouch=function(t){return this[t+1]||null},a}var r=!1;function n(a){return function(t){t.type==="mousedown"&&(r=!0),t.type==="mouseup"&&(r=!1),!(t.type==="mousemove"&&!r)&&((t.type==="mousedown"||!e||e&&!e.dispatchEvent)&&(e=t.target),e.closest("[data-no-touch-simulate]")==null&&d(a,t),t.type==="mouseup"&&(e=null))}}function d(a,t){var u=document.createEvent("Event");u.initEvent(a,!0,!0),u.altKey=t.altKey,u.ctrlKey=t.ctrlKey,u.metaKey=t.metaKey,u.shiftKey=t.shiftKey,u.touches=m(t),u.targetTouches=m(t),u.changedTouches=p(t),e.dispatchEvent(u)}function p(a){var t=o();return t.push(new s(e,1,a,0,0)),t}function m(a){return a.type==="mouseup"?o():p(a)}function k(){window.addEventListener("mousedown",n("touchstart"),!0),window.addEventListener("mousemove",n("touchmove"),!0),window.addEventListener("mouseup",n("touchend"),!0)}k.multiTouchOffset=75,c||new k})();window.app=ee(Pe).use(w).component(C.name,C).component(S.name,S);setTimeout(()=>{window.app.mount("#app")},0);document.addEventListener("touchstart",()=>{},{passive:!0});
