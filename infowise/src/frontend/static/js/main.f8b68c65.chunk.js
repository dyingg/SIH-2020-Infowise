(this.webpackJsonpstatic=this.webpackJsonpstatic||[]).push([[0],{201:function(e,t,a){e.exports=a(387)},206:function(e,t,a){},207:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},208:function(e,t,a){},209:function(e,t,a){},387:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(14),c=a.n(l),i=(a(206),a(85)),o=(a(207),a(208),a(393)),s=a(390),m=(a(209),s.a.Title);var u=function(){return r.a.createElement("div",{className:"title-bar"},r.a.createElement(o.a,{style:{fontSize:"30px",color:"#ffffff"}}),r.a.createElement(m,{level:3,style:{color:"#ffffff"}},"InfoWise"," "),r.a.createElement("div",{class:"actions focus"},r.a.createElement("div",{class:"traffic-lights focus"},r.a.createElement("button",{class:"traffic-light traffic-light-close",id:"close"}),r.a.createElement("button",{class:"traffic-light traffic-light-minimize",id:"minimize"}),r.a.createElement("button",{class:"traffic-light traffic-light-maximize",id:"maximize"}))))},d=a(395),f=a(389),E=[{title:"Name",dataIndex:"name",key:"name",render:function(e){return r.a.createElement("a",null,e)}},{title:"Type",dataIndex:"type",key:"type"},{title:"Status",dataIndex:"status",key:"status"},{title:"Score",key:"score",dataIndex:"score",render:function(e){var t="green";return e>50&&(t="volcano"),r.a.createElement(d.a,{color:t},e)}}];var v=function(e){var t=e.data;return r.a.createElement("div",{className:"third-party"},r.a.createElement(f.a,{columns:E,dataSource:t,pagination:!1,scroll:{y:"350px"}})," ")},g=a(394),h=a(138),p=a(392),y=a(391),b=g.a.Search,P=h.a.TabPane,x=s.a.Title,w=s.a.Paragraph,S=window.require("electron").ipcRenderer;function I(e){var t=e.programState;return"Idle"==t?r.a.createElement(r.a.Fragment,null,r.a.createElement(x,{level:3},"Awaiting Input"),r.a.createElement(w,null,"Please enter an IP to analyze")):"Detecting"==t?r.a.createElement(r.a.Fragment,null,r.a.createElement(x,{level:3},"Detecting"),r.a.createElement(w,null,"Fetching data from third party sources")):"Bad"==t?r.a.createElement(r.a.Fragment,null,r.a.createElement(x,{type:"danger",level:3},"VPN/Proxy Detected"),r.a.createElement(w,null,"This IP is a VPN/Proxy")):r.a.createElement(r.a.Fragment,null,r.a.createElement(x,{level:3},"Good Ip"),r.a.createElement(w,null,"A VPN or Proxy was not detected"))}var N=function(){var e=Object(n.useState)("Idle"),t=Object(i.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(""),o=Object(i.a)(c,2),s=o[0],m=o[1],d=Object(n.useState)(0),f=Object(i.a)(d,2),E=f[0],g=f[1],N=Object(n.useState)([]),k=Object(i.a)(N,2),O=k[0],j=k[1];return Object(n.useEffect)((function(){S.on("thirdPartyData",(function(e,t){j(t),console.log(t);var a=t.reduce((function(e,t){return e+t.score}),0);a=(a/t.length).toFixed(0),g(a),l(a>50?"Bad":"Good")}))}),[]),r.a.createElement("div",null,r.a.createElement(u,null),r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"ipBox"},r.a.createElement("div",null,r.a.createElement(x,{level:3},"Proxy VPN Check"),r.a.createElement(w,{className:"subtitle"},"Start a comprehensive check to determine where the given IP is a VPN or Proxy")),r.a.createElement(b,{placeholder:"127.0.0.1",loading:"Detecting"==a,enterButton:!0,onSearch:function(e){m(e),l("Detecting"),S.send("thirdPartyRecon",e)}})),r.a.createElement("div",{className:"info"},r.a.createElement(h.a,{defaultActiveKey:"2",onChange:function(e){console.log(e)}},r.a.createElement(P,{tab:"Third Party Analysis",key:"2"},r.a.createElement(v,{data:O})),r.a.createElement(P,{tab:"WHOIS Analysis",key:"1"},"Coming Soon"))),r.a.createElement("div",{className:"result"},r.a.createElement(p.a,{bordered:!0,style:{width:"100%"}},r.a.createElement("div",{className:"result"},r.a.createElement("div",null,r.a.createElement(y.a,{type:"circle",percent:E,width:80,status:E>65?"exception":"",format:function(e){return e+"%"}})),r.a.createElement("div",null,r.a.createElement(I,{programState:a})),r.a.createElement("div",null,r.a.createElement(x,{level:3},s),r.a.createElement(w,null,"Infowise Beta 0.1")))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[201,1,2]]]);
//# sourceMappingURL=main.f8b68c65.chunk.js.map