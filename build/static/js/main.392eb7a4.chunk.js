(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{172:function(e,t,c){},173:function(e,t,c){},312:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),r=c(62),s=c.n(r),i=(c(172),c(173),c(35)),o=c.n(i),j=c(162),l=c(82),b=c(14),h=c(2),u=Object(n.createContext)(),d=function(e){var t=Object(n.useState)([]),c=Object(b.a)(t,2),a=c[0],r=c[1],s=Object(n.useState)(""),i=Object(b.a)(s,2),d=i[0],O=i[1],x=Object(n.useState)(!1),f=Object(b.a)(x,2),p=f[0],m=f[1],y=Object(n.useState)(null),g=Object(b.a)(y,2),v=g[0],N=g[1],w="http://api.openweathermap.org/data/2.5/weather?units=metric&q=".concat(d,"&appid=").concat("ff7e9b79da159cf2601abe1fbd29d6e0"),k=function(){var e=Object(l.a)(o.a.mark((function e(t){var c,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m(!0),e.prev=1,e.next=4,fetch(w);case 4:return c=e.sent,e.next=7,c.json();case 7:if(n=e.sent,200===c.status&&c.ok){e.next=13;break}throw N(n.message),new Error(n.message);case 13:m(!0),r([].concat(Object(j.a)(a),[n])),N(null);case 16:e.next=21;break;case 18:e.prev=18,e.t0=e.catch(1),console.log(e.t0);case 21:return e.prev=21,m(!1),O(""),e.finish(21);case 25:case"end":return e.stop()}}),e,null,[[1,18,21,25]])})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsx)(u.Provider,{value:{data:a,setData:r,cityName:d,setCityName:O,getWeather:k,isLoading:p,setIsLoading:m,errMsg:v,setErrMsg:N},children:e.children})},O=c(64),x=function(e){var t=e.city,c=t.name,n=t.sys;return Object(h.jsx)("div",{children:Object(h.jsxs)("h1",{children:[Object(h.jsx)(O.b,{className:"decoration",to:"/".concat(t.id),children:c}),", ",n.country]})})},f=function(e){return(5/9*(e-32)).toFixed(1)},p=function(e){var t=e.city,c=t.coord,n="".concat(c.lat,",").concat(c.lon);return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("span",{children:[Object(h.jsx)("strong",{children:"min temp: "})," ",f(t.main.temp_min)]})," ",Object(h.jsx)("br",{}),Object(h.jsxs)("span",{children:[Object(h.jsx)("strong",{children:"max temp: "}),f(t.main.temp_max)]})," ",Object(h.jsx)("br",{}),Object(h.jsxs)("span",{children:[Object(h.jsx)("strong",{children:"location: "}),n]})]})},m=function(e){var t,c=e.city;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("h2",{children:[c.main," "]}),Object(h.jsx)("h4",{children:(t=c.description,t.charAt(0).toUpperCase()+t.slice(1))})]})},y=c(161),g=function(e){var t=e.city;console.log(t);var c=Object(n.useContext)(u),a=c.setData,r=c.data;return Object(h.jsxs)("div",{className:"card",children:[Object(h.jsx)("button",{className:"clear-btn",onClick:function(){return function(e){var t=r.filter((function(t){return t.id!==e}));a(t)}(t.id)},children:Object(h.jsx)(y.a,{})}),Object(h.jsx)(x,{city:t}),Object(h.jsx)(m,{city:t.weather[0]}),Object(h.jsx)(p,{city:t})]})};var v=function(){var e=Object(n.useContext)(u),t=e.cityName,c=e.setCityName,a=e.getWeather;return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""!==t&&a()},children:[Object(h.jsx)("label",{htmlFor:"search",children:"search for city's weather"}),Object(h.jsx)("input",{type:"text",className:"form-control",placeholder:"e.g Groningen",onChange:function(e){return c(e.target.value)},value:t,name:"cityName"}),Object(h.jsx)("button",{className:"btn-d ",type:"submit",children:"click to search"})]})})};var N=function(){var e=Object(n.useContext)(u),t=e.data,c=e.cityName,a=e.isLoading,r=e.errMsg,s=e.setErrMsg;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)("h1",{children:"Weather"}),Object(h.jsx)(v,{cityName:c,setErrMsg:s})]}),r&&Object(h.jsx)("h3",{className:"errorMessage",children:r}),a&&Object(h.jsx)("h3",{className:"errorMessage",children:"Loading..."}),t.length>0?Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)("h4",{className:"click",children:"Click on the city to see the charts"}),t&&t.map((function(e,t){return Object(h.jsx)(g,{city:e},t)}))]}):Object(h.jsxs)("h2",{className:"container",children:["Welcome to the city weather app ",Object(h.jsx)("br",{}),"write the name of your favorite city and forecast it's weather"]})]})},w=c(10),k=c(314),C=c(315),F=c(163),S=c(158),M=c(159),E=c(73),L=c(319),I=function(){var e=Object(w.g)().cityId,t=Object(n.useState)({}),c=Object(b.a)(t,2),a=c[0],r=c[1],s=Object(n.useState)([]),i=Object(b.a)(s,2),j=i[0],u=i[1],d=Object(w.f)();Object(n.useEffect)((function(){var t=function(){var t=Object(l.a)(o.a.mark((function t(){var c,n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://api.openweathermap.org/data/2.5/forecast?id=".concat(e,"&units=metric&appid=").concat("ff7e9b79da159cf2601abe1fbd29d6e0"));case 3:return c=t.sent,t.next=6,c.json();case 6:n=t.sent,r(n),O(n),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(){return t.apply(this,arguments)}}();t()}),[e]);var O=function(e){for(var t=[],c=0;c<e.cnt;c++)t.push({date:e.list[c].dt_txt,temp:parseFloat(e.list[c].main.temp)});u(t)};return Object(h.jsx)("div",{children:0!==j.length&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("button",{className:"back",onClick:function(){return d("/")},children:"Back"}),Object(h.jsx)("h1",{className:"container",children:"charts of 5 days for your favorite city"}),Object(h.jsxs)("h3",{children:[a.city.name,", ",a.city.country]}),Object(h.jsx)(k.a,{width:1300,height:500,children:Object(h.jsxs)(C.a,{data:j,children:[Object(h.jsx)("defs",{children:Object(h.jsxs)("linearGradient",{id:"color",x1:"0",y1:"0",x2:"0",y2:"1",children:[Object(h.jsx)("stop",{offset:"0%",stopColor:"#0000ff",stopOpacity:.4}),Object(h.jsx)("stop",{offset:"0%",stopColor:"#00cc99",stopOpacity:.5})]})}),Object(h.jsx)(F.a,{dataKey:"temp",stroke:"#3431A7",fill:"url(#color)"}),Object(h.jsx)(S.a,{dataKey:"date",tickCount:5}),Object(h.jsx)(M.a,{dataKey:"temp",tickCount:4}),Object(h.jsx)(E.a,{}),Object(h.jsx)(L.a,{opacity:.1,vertical:!1})]})})]})})};var D=function(){return Object(h.jsx)(d,{children:Object(h.jsx)(O.a,{children:Object(h.jsxs)(w.c,{children:[Object(h.jsx)(w.a,{path:"/",element:Object(h.jsx)(N,{})}),Object(h.jsx)(w.a,{path:"/:cityId",element:Object(h.jsx)(I,{})})]})})})},W=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,321)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),r(e),s(e)}))};s.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(D,{})}),document.getElementById("root")),W()}},[[312,1,2]]]);
//# sourceMappingURL=main.392eb7a4.chunk.js.map