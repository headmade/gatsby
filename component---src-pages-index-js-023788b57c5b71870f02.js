(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{RXBc:function(e,t,a){"use strict";a.r(t),a.d(t,"articles",(function(){return b}));var n=a("q1tI"),r=a.n(n),l=a("Bl7J"),c=a("vrFN"),i=(a("TpwP"),a("bx4M")),s=a("BMrR"),u=a("kPKH"),o=a("2/Rp"),m=a("Wbzz"),p=function(e){var t=e.articles,a=Object(n.useState)(8),l=a[0],c=a[1],p=i.a.Meta;return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,{gutter:[16,24]},t.slice(0,l).map((function(e){return r.a.createElement(u.a,{className:"gutter-row",xs:24,md:12,lg:8,xl:6,key:e.id},r.a.createElement(i.a,{hoverable:!0,cover:r.a.createElement("img",{alt:"example",src:"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"})},r.a.createElement(m.Link,{to:"/"+e.slug},e.title),r.a.createElement(p,{description:e.teaser})))}))),r.a.createElement(s.a,null,r.a.createElement(u.a,{className:"gutter-row",xs:24,style:{textAlign:"center"}},t.length>l?r.a.createElement(o.a,{onClick:function(){return c(l+4)},type:"primary"},"Загрузить ещё"):null)))},g=a("lTCR"),E=a.n(g),f=a("ttZb");function d(){var e=function(e,t){t||(t=e.slice(0));return e.raw=t,e}(["\n  {\n    articles {\n      id\n      title\n      teaser\n      slug\n    }\n  }\n"]);return d=function(){return e},e}var w=E()(d()),b="254503512";t.default=function(e){var t=e.data.news.articles,a=Object(n.useState)(t),i=a[0],s=a[1],u=Object(f.b)(w),o=u.loading,m=u.error,g=u.data;if(o)return r.a.createElement("h1",null,"Loading");if(m)return"Error: "+m.message;var E=g.articles;return i.length!==E.length&&s(E),r.a.createElement(l.a,null,r.a.createElement(c.a,{title:"Home"}),r.a.createElement(p,{articles:i}))}},TpwP:function(e,t,a){}}]);
//# sourceMappingURL=component---src-pages-index-js-023788b57c5b71870f02.js.map