_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[32],{"/j0W":function(e,t,r){"use strict";var n=r("nKUr"),c=(r("q1tI"),r("BvKs")),a=r("YFqc"),i=r.n(a);t.a=function(e){var t=e.current,r=e.userId;return Object(n.jsxs)(c.a,{mode:"horizontal",selectedKeys:[t],children:[Object(n.jsx)(c.a.Item,{children:Object(n.jsx)(i.a,{href:"/user/".concat(r,"/illustration"),children:Object(n.jsx)("a",{children:"\uc77c\ub7ec\uc2a4\ud2b8"})})},"illustration"),Object(n.jsx)(c.a.Item,{children:Object(n.jsx)(i.a,{href:"/user/".concat(r,"/followings"),children:Object(n.jsx)("a",{children:"\ud314\ub85c\uc789"})})},"followings"),Object(n.jsx)(c.a.Item,{children:Object(n.jsx)(i.a,{href:"/user/".concat(r,"/followers"),children:Object(n.jsx)("a",{children:"\ud314\ub85c\uc6cc"})})},"followers")]})}},"4Fp/":function(e,t,r){"use strict";r.r(t),r.d(t,"__N_SSP",(function(){return b}));var n=r("nKUr"),c=(r("q1tI"),r("BMrR")),a=r("kPKH"),i=r("20a2"),s=r("4I7n"),o=r("VtrM"),d=r("dfzq"),l=r("ikY9"),j=r("/j0W"),u=r("KHOX"),h=r("Kwez"),p=r("okqB"),b=!0;t.default=function(e){var t=e.user,r=e.posts,b=Object(i.useRouter)().query.id,O=Object(o.a)("/api/user/".concat(b,"?lastId=0"),d.a,{initialData:t}).data,x=Object(o.a)("/api/user/".concat(b,"/posts"),d.a,{initialData:r}).data;return"pending"===(null===O||void 0===O?void 0:O.status)?Object(n.jsx)(h.a,{}):Object(n.jsx)(s.a,{children:Object(n.jsx)(c.a,{justify:"center",gutter:16,children:Object(n.jsxs)(a.a,{span:18,children:[Object(n.jsx)(u.a,{userData:O}),b&&Object(n.jsx)(j.a,{current:"illustration",userId:parseInt(b,10)}),Object(n.jsx)(p.MenuHeaderWrapper,{children:Object(n.jsx)(p.MenuHeader,{children:"".concat(x.length,"\uac1c\uc758 \uc77c\ub7ec\uc2a4\ud2b8")})}),Object(n.jsx)(c.a,{gutter:[8,8],children:null===x||void 0===x?void 0:x.map((function(e){return Object(n.jsx)(a.a,{xs:24,md:4,children:Object(n.jsx)(l.a,{post:e,avatarVisible:!1},e.id)},e.id)}))})]})})})}},KHOX:function(e,t,r){"use strict";var n=r("nKUr"),c=(r("q1tI"),r("wFql")),a=r("vOnD"),i=r("YcKA"),s=Object(a.c)(c.a.Paragraph).withConfig({displayName:"UserPageProfile__UserIntro",componentId:"sc-133wgm9-0"})(["padding-top:20px;padding-left:40px;"]);t.a=function(e){var t=e.userData;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(i.a,{userData:t,marginRight:8,size:100,type:"title"}),Object(n.jsx)(s,{children:t.introduction})]})}},Ut1p:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/user/[id]/illustration",function(){return r("4Fp/")}])},ikY9:function(e,t,r){"use strict";var n=r("nKUr"),c=(r("q1tI"),r("wFql")),a=r("YFqc"),i=r.n(a),s=r("vOnD"),o=r("YcKA"),d=s.c.div.withConfig({displayName:"PostCard__TitleWrapper",componentId:"sc-39cseh-0"})(["margin-bottom:5px;"]),l=s.c.img.withConfig({displayName:"PostCard__CoverImage",componentId:"sc-39cseh-1"})(["width:100%;height:140px;object-fit:cover;border-radius:8px;transition:0.2s;&:hover{opacity:0.8;}"]),j=c.a.Text;t.a=function(e){var t=e.post,r=e.avatarVisible,c=void 0===r||r;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(i.a,{href:"/illustration/".concat(t.id),children:Object(n.jsx)("a",{children:Object(n.jsx)(l,{alt:t.title,src:"http://localhost:3100/".concat(t.Images[0].src)})})}),Object(n.jsx)(d,{children:Object(n.jsx)(i.a,{href:"/illustration/".concat(t.id),children:Object(n.jsx)("a",{children:Object(n.jsx)(j,{strong:!0,children:t.title})})})}),c&&Object(n.jsx)(i.a,{href:"/user/".concat(t.User.id,"/illustration"),children:Object(n.jsx)("a",{children:Object(n.jsx)(o.a,{userData:t.User,marginRight:4})})})]})}},okqB:function(e,t,r){"use strict";r.r(t),r.d(t,"MenuHeaderWrapper",(function(){return a})),r.d(t,"MenuHeader",(function(){return i}));var n=r("vOnD"),c=r("wFql").a.Text,a=n.c.div.withConfig({displayName:"style__MenuHeaderWrapper",componentId:"sc-93y98t-0"})(["margin:10px 0;"]),i=Object(n.c)(c).withConfig({displayName:"style__MenuHeader",componentId:"sc-93y98t-1"})(["font-size:1.1rem;"]);t.default=i}},[["Ut1p",1,2,0,3,6,4,5,8,7,9,10,11]]]);