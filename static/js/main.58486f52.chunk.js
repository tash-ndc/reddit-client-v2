(this["webpackJsonpreddit-client-v2"]=this["webpackJsonpreddit-client-v2"]||[]).push([[0],{28:function(t,e,c){},29:function(t,e,c){},30:function(t,e,c){},37:function(t,e,c){},38:function(t,e,c){},39:function(t,e,c){},40:function(t,e,c){},41:function(t,e,c){"use strict";c.r(e);var a=c(1),s=c(2),n=c.n(s),r=c(19),i=c.n(r),j=(c(28),c(12)),d=c(3),o=(c(29),c(9)),u=c(20),l=c(22),h=(c(30),function(){var t=Object(s.useState)(""),e=Object(o.a)(t,2),c=e[0],n=e[1];return Object(a.jsxs)("div",{className:"Nav",children:[Object(a.jsxs)("div",{className:"logo",children:[Object(a.jsx)(u.a,{className:"logo-icon"}),Object(a.jsxs)("h1",{children:["Sni",Object(a.jsx)("span",{children:"pp"}),"et"]})]}),Object(a.jsx)("p",{children:"Reddit, minimised"}),Object(a.jsxs)("div",{className:"searchbar",children:[Object(a.jsx)("input",{type:"text",value:c,placeholder:"Search...",onChange:function(t){n(t.target.value)}}),Object(a.jsx)(j.b,{to:"/".concat(c),children:Object(a.jsx)(l.a,{className:"search-icon"})})]})]})}),b=c(7),p=c.n(b),O=c(10),x=(c(37),function(){var t=Object(s.useState)([]),e=Object(o.a)(t,2),c=e[0],n=e[1];return Object(s.useEffect)((function(){(function(){var t=Object(O.a)(p.a.mark((function t(){var e,c;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://www.reddit.com/r/home.json");case 2:return e=t.sent,t.next=5,e.json();case 5:c=t.sent,n(c.data.children);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[]),Object(a.jsx)("div",{className:"home-posts",children:c.map((function(t){return Object(a.jsxs)("div",{className:"home-post",children:[Object(a.jsx)("h1",{className:"title",children:t.data.title}),Object(a.jsx)("hr",{}),Object(a.jsxs)("p",{className:"author",children:[Object(a.jsx)("span",{children:"by"})," ",t.data.author]}),Object(a.jsx)("img",{src:t.data.url,alt:""}),Object(a.jsx)("p",{className:"content",children:t.data.selftext}),Object(a.jsx)("hr",{}),Object(a.jsxs)("p",{className:"upvotes",children:[Math.round(100*t.data.upvote_ratio),"% Upvoted"]})]},t.data.id)}))})}),m=(c(38),function(t){var e=t.match,c=Object(s.useState)([]),n=Object(o.a)(c,2),r=n[0],i=n[1];return Object(s.useEffect)((function(){(function(){var t=Object(O.a)(p.a.mark((function t(){var c,a;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://www.reddit.com/r/".concat(e.params.subreddit,".json"));case 2:return c=t.sent,t.next=5,c.json();case 5:a=t.sent,i(a.data.children);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[e]),Object(a.jsx)("div",{className:"subreddit-posts",children:r.map((function(t){return Object(a.jsxs)("div",{className:"post",children:[Object(a.jsx)("h1",{className:"title",children:t.data.title}),Object(a.jsx)("hr",{}),Object(a.jsxs)("p",{className:"author",children:[Object(a.jsx)("span",{children:"by"})," ",t.data.author]}),Object(a.jsx)("img",{src:t.data.url,alt:""}),Object(a.jsx)("p",{className:"content",children:t.data.selftext}),Object(a.jsx)("hr",{}),Object(a.jsxs)("p",{className:"upvotes",children:[Math.round(100*t.data.upvote_ratio),"% Upvoted"]})]},t.data.id)}))})}),f=(c(39),function(t){var e=t.match,c=Object(s.useState)([]),n=Object(o.a)(c,2),r=n[0],i=n[1];return Object(s.useEffect)((function(){(function(){var t=Object(O.a)(p.a.mark((function t(){var c,a;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://www.reddit.com/r/".concat(e.params.search,".json"));case 2:return c=t.sent,t.next=5,c.json();case 5:a=t.sent,i(a.data.children);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[e]),Object(a.jsx)("div",{className:"searchresult-posts",children:r.map((function(t){return Object(a.jsxs)("div",{className:"result-post",children:[Object(a.jsx)("h1",{className:"title",children:t.data.title}),Object(a.jsx)("hr",{}),Object(a.jsxs)("p",{className:"author",children:[Object(a.jsx)("span",{children:"by"})," ",t.data.author]}),Object(a.jsx)("img",{src:t.data.url,alt:""}),Object(a.jsx)("p",{className:"content",children:t.data.selftext}),Object(a.jsx)("hr",{}),Object(a.jsxs)("p",{className:"upvotes",children:[Math.round(100*t.data.upvote_ratio),"% Upvoted"]})]},t.data.id)}))})}),v=(c(40),function(){Object(s.useEffect)((function(){r()}),[]);var t=Object(s.useState)([]),e=Object(o.a)(t,2),c=e[0],n=e[1],r=function(){var t=Object(O.a)(p.a.mark((function t(){var e,c;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://www.reddit.com/subreddits.json");case 2:return e=t.sent,t.next=5,e.json();case 5:c=t.sent,n(c.data.children);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(a.jsxs)("div",{className:"subreddit-list",children:[Object(a.jsx)("h1",{children:"SubReddits"}),Object(a.jsx)("hr",{}),c.map((function(t){return Object(a.jsxs)("div",{className:"categories",children:[Object(a.jsx)("img",{src:t.data.icon_img,alt:t.data.display_name}),Object(a.jsx)("h2",{children:Object(a.jsx)(j.b,{to:"/subreddit/".concat(t.data.display_name),children:t.data.display_name})})]},t.data.id)}))]})});var N=function(){return Object(a.jsx)(j.a,{children:Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(h,{}),Object(a.jsxs)("div",{className:"main",children:[Object(a.jsx)(v,{}),Object(a.jsxs)(d.c,{children:[Object(a.jsx)(d.a,{path:"/subreddit/:subreddit",component:m}),Object(a.jsx)(d.a,{path:"/:search",component:f}),Object(a.jsx)(d.a,{path:"/",exact:!0,component:x})]})]})]})})},w=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,42)).then((function(e){var c=e.getCLS,a=e.getFID,s=e.getFCP,n=e.getLCP,r=e.getTTFB;c(t),a(t),s(t),n(t),r(t)}))};i.a.render(Object(a.jsx)(n.a.StrictMode,{children:Object(a.jsx)(N,{})}),document.getElementById("root")),w()}},[[41,1,2]]]);
//# sourceMappingURL=main.58486f52.chunk.js.map