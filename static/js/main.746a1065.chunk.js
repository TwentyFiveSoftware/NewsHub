(this.webpackJsonpnewshub=this.webpackJsonpnewshub||[]).push([[0],{27:function(e,t,n){e.exports=n.p+"static/media/twentyfivesoftware-logo.09dfc590.jpg"},29:function(e,t,n){e.exports=n.p+"static/media/spiegel.a035c912.png"},30:function(e,t,n){e.exports=n.p+"static/media/spiegel-white.90770b2b.png"},31:function(e,t,n){e.exports=n.p+"static/media/sueddeutsche.d3ca9b92.png"},32:function(e,t,n){e.exports=n.p+"static/media/sueddeutsche-white.6a16257e.png"},33:function(e,t,n){e.exports=n.p+"static/media/taz.d8a28277.png"},34:function(e,t,n){e.exports=n.p+"static/media/taz-white.6ed24df7.png"},35:function(e,t,n){e.exports=n.p+"static/media/welt.5cdd41cd.png"},36:function(e,t,n){e.exports=n.p+"static/media/welt-white.e8d32869.png"},37:function(e,t,n){e.exports=n.p+"static/media/faz.11869ea6.png"},38:function(e,t,n){e.exports=n.p+"static/media/faz-white.1dc6a301.png"},39:function(e,t,n){e.exports=n.p+"static/media/zeit.6c3b70b5.png"},40:function(e,t,n){e.exports=n.p+"static/media/zeit-white.361ae908.png"},43:function(e,t,n){e.exports=n(71)},48:function(e,t,n){},71:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),r=n(21),c=n.n(r),i=(n(48),n(7)),l=n.n(i),o=n(10),u=n(22),m=n(23),p=n(6),d=n(24),h=n.n(d),g=n(4),f=function e(t,n,a,s,r,c,i){Object(g.a)(this,e),this.title=t,this.image=n,this.text=a,this.source=r,this.url=c,this.sourceIndex=i;var l=new Date(s);if(this.date=l.getTime(),this.dateString="".concat((l.getDate()<10?"0":"")+l.getDate(),".").concat((l.getMonth()+1<10?"0":"")+(l.getMonth()+1),".").concat(l.getFullYear()," ")+"".concat((l.getHours()<10?"0":"")+l.getHours(),":").concat((l.getMinutes()<10?"0":"")+l.getMinutes()),r.isHtml){var o=document.createElement("html");this.text=this.text.replace(/http:\/\//g,"https://"),o.innerHTML=this.text,"Die Zeit"===r.name&&console.log(o),null===r.textElementName?this.text=o.getElementsByTagName("body")[0].textContent:o.getElementsByTagName(r.textElementName).length>0&&(this.text=o.getElementsByTagName(r.textElementName)[0].textContent),o.getElementsByTagName(r.imageElementName).length>0&&(this.image=o.getElementsByTagName(r.imageElementName)[0].getAttribute("src"))}void 0!==this.image&&(this.image=this.image.replace(/http:\/\//g,"https://")),this.url=this.url.replace(/http:\/\//g,"https://"),this.text=this.text.replace(/http:\/\//g,"https://")},v=function e(t,n,a,s,r){Object(g.a)(this,e),this.urls=t,this.name=n,this.isHtml=a,this.textElementName=s,this.imageElementName=r},E=n(25),w=n(42),x=n(41),b=n(26),F=n(28),j=n(27),N=n.n(j),k=function(e){Object(w.a)(n,e);var t=Object(x.a)(n);function n(){return Object(g.a)(this,n),t.apply(this,arguments)}return Object(E.a)(n,[{key:"render",value:function(){return s.a.createElement("div",{className:"header"},s.a.createElement("img",{src:N.a,alt:""}),s.a.createElement("div",null),s.a.createElement("a",{className:"github",href:"https://github.com/TwentyFiveSoftware/NewsHub"},s.a.createElement(b.a,{icon:F.a}),s.a.createElement("div",null,"Github")))}}]),n}(a.Component);function O(e){var t=e.articleInfo;return s.a.createElement("a",{className:"article",href:t.url},null!=t.image?s.a.createElement("div",{className:"article__image",style:{backgroundImage:"url(".concat(t.image,")")}}):s.a.createElement(a.Fragment,null),s.a.createElement("div",{className:"article__bottom"},s.a.createElement("div",{className:"article__title"},t.title),s.a.createElement("div",{className:"article__text"},t.text),s.a.createElement("div",{className:"article__info"},s.a.createElement("div",null,t.source.name),s.a.createElement("div",null,t.dateString))))}var y=function(){return Math.max(Math.floor((window.innerWidth-100)/430),1)};function S(e){var t=e.articles,n=Object(a.useState)(y()),r=Object(p.a)(n,2),c=r[0],i=r[1];Object(a.useEffect)((function(){var e=function(){return i(y())};return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}));for(var l=[],o=0;o<c;o++)l[o]=[];return t.forEach((function(e,t){return l[t%c].push(e)})),s.a.createElement("div",{className:"article-container",style:{gridTemplateColumns:"repeat(".concat(c,", max-content)")}},l.map((function(e,t){return s.a.createElement("div",{className:"article-container__column",key:t},e.map((function(e,t){return s.a.createElement(O,{articleInfo:e,key:t})})))})))}var z=n(29),_=n.n(z),I=n(30),A=n.n(I),D=n(31),T=n.n(D),M=n(32),B=n.n(M),C=n(33),H=n.n(C),J=n(34),L=n.n(J),Y=n(35),G=n.n(Y),R=n(36),W=n.n(R),Z=n(37),q=n.n(Z),K=n(38),P=n.n(K),Q=n(39),U=n.n(Q),V=n(40),X=n.n(V);function $(e){var t=e.onSelect,n=e.selected;return s.a.createElement("div",{className:"options-selection"},s.a.createElement(ee,{images:[_.a,A.a],color:"#E54316",selected:n[0],click:function(){return t(0)}}),s.a.createElement(ee,{images:[T.a,B.a],color:"#000000",selected:n[1],click:function(){return t(1)}}),s.a.createElement(ee,{images:[H.a,L.a],color:"#E20336",selected:n[2],click:function(){return t(2)}}),s.a.createElement(ee,{images:[G.a,W.a],color:"#013959",selected:n[3],click:function(){return t(3)}}),s.a.createElement(ee,{images:[q.a,P.a],color:"#000000",selected:n[4],click:function(){return t(4)}}),s.a.createElement(ee,{images:[U.a,X.a],color:"#000000",selected:n[5],click:function(){return t(5)}}))}function ee(e){var t=e.images,n=e.color,a=e.selected,r=e.click;return s.a.createElement("div",{className:"source-selection-button",style:{backgroundColor:a?n:""},onClick:function(){return r()}},s.a.createElement("img",{src:t[a?1:0],alt:""}))}var te={spiegel:new v(["https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.spiegel.de%2Fschlagzeilen%2Ftops%2Findex.rss","https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.spiegel.de%2Fschlagzeilen%2Findex.rss"],"spiegel.de",!1),sueddeutsche:new v(["https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Frss.sueddeutsche.de%2Fapp%2Fservice%2Frss%2Falles%2Findex.rss%3Foutput%3Drss"],"sueddeutsche.de",!0,"p","img"),taz:new v(["https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Ftaz.de%2F!s%3D%26ExportStatus%3DIntern%26SuchRahmen%3DOnline%3Brss%2F"],"taz.de",!0,null,"img"),welt:new v(["https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.welt.de%2Ffeeds%2Ftopnews.rss"],"welt.de",!1),faz:new v(["https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.faz.net%2Frss%2Faktuell%2F"],"faz.de",!0,"p","img"),zeit:new v(["https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fnewsfeed.zeit.de%2Findex"],"zeit.de",!0,null,"img")};function ne(){var e=Object(a.useState)([]),t=Object(p.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)([!0,!0,!1,!1,!1,!1]),i=Object(p.a)(c,2),d=i[0],g=i[1];Object(a.useEffect)((function(){if(function(){var e=Object(m.a)(l.a.mark((function e(){var t,n,a,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=[],n=l.a.mark((function e(n){var a,s,r,c,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=Object.values(te)[n],s=Object(u.a)(a.urls),e.prev=2,s.s();case 4:if((r=s.n()).done){e.next=12;break}return c=r.value,e.next=8,h()(c);case 8:i=e.sent,t.push.apply(t,Object(o.a)(i.data.items.map((function(e){return new f(e.title,e.enclosure.link,e.description,e.pubDate,a,e.link,n)}))));case 10:e.next=4;break;case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(2),s.e(e.t0);case 17:return e.prev=17,s.f(),e.finish(17);case 20:case"end":return e.stop()}}),e,null,[[2,14,17,20]])})),a=0;case 3:if(!(a<Object.values(te).length)){e.next=8;break}return e.delegateYield(n(a),"t0",5);case 5:a++,e.next=3;break;case 8:s=Array.from(new Set(t.map((function(e){return e.title})))).map((function(e){return t.find((function(t){return t.title===e}))})).sort((function(e,t){return e.date>t.date?-1:1})),r(s);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()(),null!==localStorage.getItem("selectedSources")){var e=JSON.parse(localStorage.getItem("selectedSources"));0===e.filter((function(e){return e})).length&&(e[0]=!0,e[1]=!0),g(e)}}),[]);var v=n.filter((function(e){return d[e.sourceIndex]}));return s.a.createElement(a.Fragment,null,s.a.createElement(k,null),s.a.createElement($,{selected:d,onSelect:function(e){var t=Object(o.a)(d);t[e]=!t[e],g(t),localStorage.setItem("selectedSources",JSON.stringify(t))}}),s.a.createElement("div",{className:"divider"}),s.a.createElement(S,{articles:v}))}c.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(ne,null)),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.746a1065.chunk.js.map