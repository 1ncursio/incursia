_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[27],{MS7U:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tag/[tagName]",function(){return n("fNU0")}])},PArb:function(t,e,n){"use strict";var a=n("wx14"),c=n("rePB"),r=n("q1tI"),i=n("TSYQ"),o=n.n(i),s=n("H84U"),l=function(t,e){var n={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(a=Object.getOwnPropertySymbols(t);c<a.length;c++)e.indexOf(a[c])<0&&Object.prototype.propertyIsEnumerable.call(t,a[c])&&(n[a[c]]=t[a[c]])}return n};e.a=function(t){return r.createElement(s.a,null,(function(e){var n,i=e.getPrefixCls,s=e.direction,d=t.prefixCls,j=t.type,p=void 0===j?"horizontal":j,u=t.orientation,b=void 0===u?"center":u,h=t.className,O=t.children,f=t.dashed,x=t.plain,m=l(t,["prefixCls","type","orientation","className","children","dashed","plain"]),v=i("divider",d),g=b.length>0?"-".concat(b):b,w=!!O,_=o()(v,"".concat(v,"-").concat(p),(n={},Object(c.a)(n,"".concat(v,"-with-text"),w),Object(c.a)(n,"".concat(v,"-with-text").concat(g),w),Object(c.a)(n,"".concat(v,"-dashed"),!!f),Object(c.a)(n,"".concat(v,"-plain"),!!x),Object(c.a)(n,"".concat(v,"-rtl"),"rtl"===s),n),h);return r.createElement("div",Object(a.a)({className:_},m,{role:"separator"}),O&&r.createElement("span",{className:"".concat(v,"-inner-text")},O))}))}},fNU0:function(t,e,n){"use strict";n.r(e),n.d(e,"__N_SSP",(function(){return b}));var a=n("nKUr"),c=(n("q1tI"),n("/MKj")),r=n("BMrR"),i=n("kPKH"),o=n("PArb"),s=n("VtrM"),l=n("20a2"),d=n("4I7n"),j=n("ikY9"),p=n("dfzq"),u=n("Kwez"),b=!0;e.default=function(t){var e=t.posts,n=Object(l.useRouter)().query.tagName,b=(Object(c.c)((function(t){return t.post})).hasMorePosts,Object(s.a)("/api/user",p.a).data),h=Object(s.a)("/api/posts/tag/".concat(encodeURIComponent(n),"?lastId=0"),p.a,{initialData:e}).data;return"pending"===(null===b||void 0===b?void 0:b.status)?Object(a.jsx)(u.a,{}):Object(a.jsx)(d.a,{children:Object(a.jsx)(r.a,{justify:"center",gutter:16,children:Object(a.jsx)(i.a,{span:18,children:Object(a.jsxs)(r.a,{gutter:[8,8],children:[Object(a.jsx)(o.a,{orientation:"left",children:"".concat(n," - \ud0dc\uadf8 \uac80\uc0c9 \uacb0\uacfc")}),null===h||void 0===h?void 0:h.map((function(t){return Object(a.jsx)(i.a,{span:4,children:Object(a.jsx)(j.a,{post:t},t.id)},t.id)}))]})})})})}},ikY9:function(t,e,n){"use strict";var a=n("nKUr"),c=(n("q1tI"),n("wFql")),r=n("YFqc"),i=n.n(r),o=n("vOnD"),s=n("YcKA"),l=o.c.div.withConfig({displayName:"PostCard__TitleWrapper",componentId:"sc-39cseh-0"})(["margin-bottom:5px;"]),d=o.c.img.withConfig({displayName:"PostCard__CoverImage",componentId:"sc-39cseh-1"})(["width:100%;height:140px;object-fit:cover;border-radius:8px;transition:0.2s;&:hover{opacity:0.8;}"]),j=c.a.Text;e.a=function(t){var e=t.post,n=t.avatarVisible,c=void 0===n||n;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(i.a,{href:"/illustration/".concat(e.id),children:Object(a.jsx)("a",{children:Object(a.jsx)(d,{alt:e.title,src:"http://localhost:3100/".concat(e.Images[0].src)})})}),Object(a.jsx)(l,{children:Object(a.jsx)(i.a,{href:"/illustration/".concat(e.id),children:Object(a.jsx)("a",{children:Object(a.jsx)(j,{strong:!0,children:e.title})})})}),c&&Object(a.jsx)(i.a,{href:"/user/".concat(e.User.id,"/illustration"),children:Object(a.jsx)("a",{children:Object(a.jsx)(s.a,{userData:e.User,marginRight:4})})})]})}}},[["MS7U",1,2,0,3,6,4,5,8,7,9,10,11]]]);