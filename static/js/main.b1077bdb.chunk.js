(this.webpackJsonptemplate=this.webpackJsonptemplate||[]).push([[0],[,,function(e,t,n){e.exports={wrapper:"includeContainer_wrapper__KHPnH",hidden:"includeContainer_hidden__245Oa",container:"includeContainer_container__OWW84",num:"includeContainer_num__24hEC",included:"includeContainer_included__2ZPbA"}},,,function(e,t,n){e.exports={history:"history_history__1_whk",hidden:"history_hidden__2gDHd"}},,,function(e,t,n){e.exports={title:"header_title__x-k2n",btnContainer:"header_btnContainer__l6NuS"}},,function(e,t,n){e.exports={app:"app_app__1AukE",down:"app_down__3U8Zy"}},function(e,t,n){e.exports={container:"ballContainer_container__kUZlx",ball:"ballContainer_ball__2aEsX"}},,,,,,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),i=n(1),c=n.n(i),r=n(12),s=n.n(r),o=(n(20),n(3)),d=n(10),l=n.n(d),u=n(11),h=n.n(u),b=function(e){var t=e.selected;return Object(a.jsx)("div",{className:h.a.container,children:t.map((function(e){return Object(a.jsx)("span",{className:h.a.ball,children:e})}))})},j=n(7),m=n(8),p=n.n(m),O=function(e){var t=e.Lotto,n=e.included,i=e.setIncluded,c=(e.selected,e.setSelected),r=e.history,s=e.setHistory,o=e.displayHistory,d=e.setDisplayHistory,l=function(e){c(e);var t=[e].concat(Object(j.a)(r));console.log(t.length>5),t.length=t.length>5?5:t.length,s(t)};return Object(a.jsxs)("header",{className:p.a.header,children:[Object(a.jsx)("div",{className:p.a.title,children:"Lotto"}),Object(a.jsxs)("div",{className:p.a.btnContainer,children:[Object(a.jsx)("button",{onClick:function(){d(!o)},children:"History"}),Object(a.jsx)("button",{onClick:function(){i([]),s([])},children:"\ucd08\uae30\ud654"}),Object(a.jsx)("button",{onClick:function(){if(n.length<6){var e=t.makeSelectedNumber();l(e)}else{var a=t.makeSelectedNumber(n);l(a)}},children:"Draw"})]})]})},f=n(5),_=n.n(f),x=function(e){var t=e.displayHistory,n=e.history,i=t?_.a.display:_.a.hidden;return Object(a.jsxs)("div",{className:"".concat(_.a.history," ").concat(i),children:["history",n.map((function(e){return Object(a.jsx)(b,{className:_.a.ballContainer,selected:e})}))]})},y=n(2),v=n.n(y),N=function(e){var t=e.initArray,n=e.setIncluded,i=e.included,c=e.includeDisplay?v.a.visible:v.a.hidden,r=function(e){e.preventDefault();var t,a=Number(e.target.textContent);(t=-1!==i.indexOf(a)?i.filter((function(e){return e!==a})):[].concat(Object(j.a)(i),[a])).sort((function(e,t){return e-t})),n(t)};return Object(a.jsx)("div",{className:"".concat(v.a.wrapper," ").concat(c),children:Object(a.jsx)("div",{className:v.a.container,children:t.map((function(e){return-1===i.indexOf(e)?Object(a.jsx)("div",{className:v.a.num,onClick:r,children:e},Math.random()*Math.random()):Object(a.jsx)("div",{className:"".concat(v.a.num," ").concat(v.a.included),onClick:r,children:e},Math.random()*Math.random())}))})})},k=n.p+"static/media/angle-down-solid.8751ddd8.svg";var C=function(e){var t=e.Lotto,n=Object(i.useState)([1,2,3,4,5,6]),c=Object(o.a)(n,2),r=c[0],s=c[1],d=Object(i.useState)([]),u=Object(o.a)(d,2),h=u[0],j=u[1],m=Object(i.useState)(!1),p=Object(o.a)(m,2),f=p[0],_=p[1],y=Object(i.useState)([]),v=Object(o.a)(y,2),C=v[0],g=v[1],w=Object(i.useState)(!1),H=Object(o.a)(w,2),S=H[0],D=H[1];return Object(a.jsxs)("div",{className:l.a.app,children:[Object(a.jsx)(O,{Lotto:t,included:h,setIncluded:j,selected:r,setSelected:s,history:C,setHistory:g,displayHistory:S,setDisplayHistory:D}),Object(a.jsx)(x,{history:C,displayHistory:S}),Object(a.jsx)(b,{selected:r}),Object(a.jsx)(N,{initArray:t.initArray,setIncluded:j,included:h,includeDisplay:f}),Object(a.jsx)("div",{className:l.a.down,onClick:function(){_(!f)},children:Object(a.jsx)("img",{src:k,alt:"down"})})]})},g=n(13),w=n(14),H=new(function(){function e(){Object(g.a)(this,e),this.min=1,this.max=45,this.initArray=function(){for(var e=[],t=1;t<=45;t++)e.push(t);return e}()}return Object(w.a)(e,[{key:"makeRandomNumber",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:45;return Math.floor(Math.random()*(t-e)+e)}},{key:"makeSelectedNumber",value:function(e){var t=[];if(void 0===e)for(;t.length<6;){var n=this.makeRandomNumber();-1===t.indexOf(n)&&t.push(n)}else for(;t.length<6;){var a=this.makeRandomNumber();-1!==e.indexOf(a)&&-1===t.indexOf(a)&&t.push(a)}return t.sort((function(e,t){return e-t})),t}}]),e}());s.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(C,{Lotto:H})}),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.b1077bdb.chunk.js.map