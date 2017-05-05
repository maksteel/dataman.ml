/*! IDRViewer - v1.5.1 | Copyright 2017 IDRsolutions */
!function(){"use strict";var a,b,c,d,e,f,g,h,i,j,k,l={LAYOUT_PRESENTATION:"presentation",LAYOUT_MAGAZINE:"magazine",LAYOUT_CONTINUOUS:"continuous",SELECT_SELECT:"select",SELECT_PAN:"pan",ZOOM_SPECIFIC:"specific",ZOOM_ACTUALSIZE:"actualsize",ZOOM_FITWIDTH:"fitwidth",ZOOM_FITHEIGHT:"fitheight",ZOOM_FITPAGE:"fitpage",ZOOM_AUTO:"auto"},m=1,n=1,o=0,p=0,q=l.ZOOM_AUTO,r=!0,s=[],t=[],u=10,v={},w=!1,x="",y=[],z=!1;l.setup=function(m){m||(m=IDRViewer.config),w=!0,d=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),e="html"!==m.pageType,f=m.bounds,o=m.pagecount,m.url&&(x=m.url),C.setup(),b=O("idrviewer");var p=document.createElement("style");p.setAttribute("type","text/css"),document.head.appendChild(p),h=p.sheet;var q=document.createElement("style");q.setAttribute("type","text/css"),document.head.appendChild(q),i=q.sheet,(n<1||n>o)&&(n=1);for(var v=0;v<o;v++)if(f[v][0]!=f[0][0]||f[v][1]!=f[0][1]){r=!1;break}switch(j){case IDRViewer.LAYOUT_CONTINUOUS:case IDRViewer.LAYOUT_PRESENTATION:case IDRViewer.LAYOUT_MAGAZINE:break;default:j=IDRViewer.LAYOUT_CONTINUOUS}var y=[l.LAYOUT_PRESENTATION,l.LAYOUT_CONTINUOUS,l.LAYOUT_MAGAZINE];switch(j){case IDRViewer.LAYOUT_CONTINUOUS:c=H;break;case IDRViewer.LAYOUT_MAGAZINE:c=G;break;case IDRViewer.LAYOUT_PRESENTATION:c=F}window.addEventListener("resize",function(){console.log("resize"),M()});var z=document.createElement("div");for(z.style.position="relative",z.style.display="inline-block",z.style.verticalAlign="middle",z.style.minWidth="100%",z.style.lineHeight="normal",b.appendChild(z),g=document.createElement("div"),g.id="overlay",g.setAttribute("style","width: 100%; height: 100%; position: absolute; z-index: 10; visibility: hidden;"),z.appendChild(g),J.setup(),a=document.createElement("div"),a.id="contentContainer",a.style.overflow="hidden",a.style.transform="translateZ(0)",a.style.padding=u/2+"px",z.appendChild(a),v=1;v<=o;v++){var B=document.createElement("div");B.id="page"+v,B.setAttribute("style","width: "+f[v-1][0]+"px; height: "+f[v-1][1]+"px;"),B.className="page",a.appendChild(B),t[v]=B,s[v]=A(B,v)}c.setup(n),P.addClass(b,"layout-"+c.toString()),M(k),c.goToPage(n),C.setPage(n,!0);var D={selectMode:J.currentSelectMode,isMobile:d,layout:c.toString(),availableLayouts:y,isFirstPage:1===n,isLastPage:c.isLastPage(n)};for(var E in m)m.hasOwnProperty(E)&&(D[E]=m[E]);D.page=n,l.fire("ready",D)};var A=function(a,b){var c={};return c.isLoaded=function(){var a=C.getState(b);return a===B.LOADED||a===B.LOADING},c.unload=function(){C.getState(b)===B.LOADED&&(C.setState(b,B.HIDDEN),a.firstChild.style.display="none")},c.load=function(){var c=C.getState(b);if(c===B.HIDDEN&&(C.setState(b,B.LOADED),a.firstChild.style.display="block"),c===B.UNLOADED)if(C.setState(b,B.LOADING),e){var d=document.createElement("object");d.setAttribute("width",""+f[b-1][0]),d.setAttribute("height",""+f[b-1][1]),d.setAttribute("data",b+".svg"),d.setAttribute("type","image/svg+xml"),d.setAttribute("class","page-inner"),a.appendChild(d),C.setState(b,B.LOADED)}else{var g=function(){var c=document.createElement("iframe");c.setAttribute("class","page-inner"),c.setAttribute("src",b+".html"),c.setAttribute("style","width: "+f[b-1][0]+"px; height: "+f[b-1][1]+"px; position: relative; border: 0;"),c.onload=function(){C.setState(b,B.LOADED)},a.appendChild(c)},h=new XMLHttpRequest;h.open("GET",x+b+".html",!0),h.onload=function(){if(h.status>=200&&h.status<400){var c=document.createElement("div");c.innerHTML=h.responseText;var d=c.querySelector("#p"+b);d.style.margin="0",d.style.overflow="hidden",d.style.position="relative";var e=function(){C.setState(b,B.LOADED),this&&this.removeEventListener("load",e)},f=d.querySelector("#pdf"+b),j=f.getAttribute("data")||f.getAttribute("src");if(j&&f.addEventListener("load",e),x){var k=f.getAttribute("data");k?f.setAttribute("data",x+k):(k=f.getAttribute("src"),k&&k.indexOf("base64")===-1&&f.setAttribute("src",x+k))}var m=d.querySelector("#fonts"+b);if(m){var n=m.innerHTML;m.parentNode.removeChild(m),n.match(/@font-face {[\s\S]*?}/g).forEach(function(a){y.indexOf(a)===-1&&(y.push(a),i.insertRule(a.replace('url("','url("'+x),i.cssRules.length))})}var o=d.querySelector(".shared-css");o&&(o.parentNode.removeChild(o),z||(document.head.appendChild(o),z=!0)),P.addClass(d,"page-inner");for(var p=function(){IDRViewer.goToPage(this.dataset.page,this.dataset.zoom)},q=d.querySelectorAll("[data-action-type='GoTo']"),r=0;r<q.length;r++)q[r].onclick=p;a.appendChild(d),j||e(),l.fire("pageload",{page:b})}else g()},h.onerror=g;try{h.send()}catch(j){}}},c},B={LOADING:"loading",HIDDEN:"hidden",UNLOADED:"unloaded",LOADED:"loaded"},C=function(){var a,b,c,d={},e=500,f=20,g=2,h=0,i=0,j=0,k=[];d.setup=function(){c=o;for(var a=1;a<=o;a++)k[a]=B.UNLOADED},d.getState=function(a){return k[a]},d.setState=function(a,b){l(k[a],b),k[a]=b};var l=function(a,b){switch(a){case B.LOADING:h--;break;case B.LOADED:i--;break;case B.HIDDEN:j--;break;case B.UNLOADED:c--}switch(b){case B.LOADING:h++;break;case B.LOADED:i++;break;case B.HIDDEN:j++;break;case B.UNLOADED:c++}},m=function(){if(s[a].load(),h<g)for(var c=1;c<f/2&&(n(a-c)&&(s[a-c].isLoaded()||s[a-c].load()),h!==g)&&(n(a+c)&&(s[a+c].isLoaded()||s[a+c].load()),h!==g);c++);for(var d=1,j=o;i+h>f;)a-d>j-a?(s[d].isLoaded()&&s[d].unload(),d++):(s[j].isLoaded()&&s[j].unload(),j--);b=setTimeout(m,e)},n=function(a){return a>=1&&a<=o};return d.setPage=function(c,d){a=c,d&&s[c].load(),clearTimeout(b),b=setTimeout(m,e)},d.stopLoading=function(){clearTimeout(b),b=setTimeout(m,e)},d}(),D={applyTransform:function(a,b){a.style.webkitTransform=b,a.style.mozTransform=b,a.style.msTransform=b,a.style.oTransform=b,a.style.transform=b},getTransform:function(a){return"-webkit-transform: "+a+";\n-moz-transform: "+a+";\n-ms-transform: "+a+";\n-o-transform: "+a+";\ntransform: "+a+";"},applyTransformOrigin:function(a,b){a.style.webkitTransformOrigin=b,a.style.mozTransformOrigin=b,a.style.msTransformOrigin=b,a.style.oTransformOrigin=b,a.style.transformOrigin=b},applyTransitionDuration:function(a,b){a.style.webkitTransitionDuration=b,a.style.mozTransitionDuration=b,a.style.msTransitionDuration=b,a.style.oTransitionDuration=b,a.style.transitionDuration=b}},E=function(a){n!=a&&(n=a,C.setPage(a),l.fire("pagechange",{page:n,pagecount:o,isFirstPage:1===n,isLastPage:c.isLastPage(a)}))},F=function(){var c={};c.setup=function(){},c.unload=function(){for(var b=1;b<=o;b++)t[b].style.marginLeft="",t[b].style.marginTop="",P.removeClass(t[b],"current","prev","next","before","after");a.style.width="",a.style.height=""},c.goToPage=function(a){E(a),r||M(),b.scrollTop=0,d(a),c.updateLayout()},c.getVisiblePages=function(){return[n]};var d=function(a){for(var b=1;b<=o;b++)P.removeClass(t[b],"current","prev","next","before","after"),b<a?P.addClass(t[b],"before"):b>a&&P.addClass(t[b],"after");P.addClass(t[a],"current"),a-1>=1&&P.addClass(t[a-1],"prev"),a+1<=o&&P.addClass(t[a+1],"next")};return c.updateLayout=function(){var c=Math.floor(f[n-1][0]*m),d=0,e=b.clientWidth-u;e>c?d=(e-c)/2:e=c;var g=Math.floor(f[n-1][1]*m),h=0,i=b.clientHeight-u;i>g?h=(i-g)/2:i=g,a.style.width=e+"px",a.style.height=i+"px";for(var j=1;j<=o;j++)t[j].style.marginLeft=d+"px",t[j].style.marginTop=h+"px"},c.isLastPage=function(a){return a===o},c.getZoomBounds=function(){return{width:f[n-1][0],height:f[n-1][1]}},c.getAutoZoom=function(a,b){return Math.min(a,b)},c.next=function(){l.goToPage(n+1)},c.prev=function(){l.goToPage(n-1)},c.toString=function(){return IDRViewer.LAYOUT_PRESENTATION},c}(),G=function(){function c(a){return a>1&&a<o}var d={};d.setup=function(){},d.unload=function(){for(var b=1;b<=o;b++)t[b].style.marginLeft="",t[b].style.marginTop="",P.removeClass(t[b],"current","prev","next","before","after");a.style.width="",a.style.height=""},d.goToPage=function(a){1!==a&&a%2!==0&&(a-=1),E(a),r||M(),e(a),d.updateLayout()},d.getVisiblePages=function(){var a=[n];return c(n)&&a.push(n+1),a};var e=function(a){for(var b=1;b<=o;b++)P.removeClass(t[b],"current","prev","next","before","after");if(P.addClass(t[a],"current"),c(a)&&P.addClass(t[a+1],"current"),1==a&&(a=0),a+2<=o&&(P.addClass(t[a+2],"next"),a+3<=o&&P.addClass(t[a+3],"next")),a-1>0&&(P.addClass(t[a-1],"prev"),a-2>0&&P.addClass(t[a-2],"prev")),a+4<=o)for(b=a+4;b<=o;b++)P.addClass(t[b],"after");if(a-3>0)for(b=a-3;b>0;b--)P.addClass(t[b],"before")};return d.updateLayout=function(){var d=c(n),e=Math.floor(f[n-1][0]*m),g=d?Math.floor(f[n][0]*m):0,h=2*Math.max(e,g),i=Math.max(h,b.clientWidth-u),j=i/2-e,k=j+Math.floor(f[n-1][0]*m),l=Math.floor(f[n-1][1]*m),p=d?Math.floor(f[n][1]*m):l,q=Math.max(l,p,b.clientHeight-u),r=(q-l)/2,s=(q-p)/2;a.style.width=i+"px",a.style.height=q+"px",t[1].style.marginLeft=k+"px",t[1].style.marginTop=s+"px";for(var v=2;v<=o;v+=2)t[v].style.marginLeft=j+"px",t[v].style.marginTop=r+"px",v<o&&(t[v+1].style.marginLeft=k+"px",t[v+1].style.marginTop=s+"px")},d.isLastPage=function(a){return a+(1==a?1:2)>o},d.getZoomBounds=function(){var a=c(n),b=Math.floor(f[n-1][0]),d=a?Math.floor(f[n][0]):0,e=Math.floor(f[n-1][1]),g=a?Math.floor(f[n][1]):0;return{width:2*Math.max(b,d),height:Math.max(e,g)}},d.getAutoZoom=function(a,b){return Math.min(a,b)},d.next=function(){l.goToPage(n+(1==n?1:2))},d.prev=function(){l.goToPage(n-1)},d.toString=function(){return IDRViewer.LAYOUT_MAGAZINE},d}(),H=function(){var a={},c=0,d=0,e=[];a.setup=function(){b.addEventListener("scroll",g);for(var a=0;a<o;a++)f[a][0]>c&&(c=f[a][0]),f[a][1]>d&&(d=f[a][1])},a.unload=function(){b.removeEventListener("scroll",g)};var g=function(){C.stopLoading(),h()},h=function(){var a,b;if(t[1].getBoundingClientRect().top>0)E(1);else for(a=1;a<=o;a++){var c=t[a].getBoundingClientRect();b=c.top;var d=c.bottom-c.top;if(b<=.25*d&&b>.5*-d){E(a);break}}i()},i=function(){e=[n];var a,c,d=b.clientHeight,f=function(a){return c=t[a].getBoundingClientRect(),c.bottom>0&&c.top<d};for(a=n-1;a>=1&&f(a);a--)e.push(a);for(a=n+1;a<=o&&f(a);a++)e.push(a)};return a.goToPage=function(a,c){var d=0;if(c){var e=c.split(" ");switch(e[0]){case"XYZ":d=Number(e[2]);break;case"FitH":d=Number(e[1]);break;case"FitR":d=Number(e[4]);break;case"FitBH":d=Number(e[1])}0!==d&&(d=f[a-1][1]-d)}b.scrollTop=t[a].offsetTop-u/2+d*m,E(a),i()},a.getVisiblePages=function(){return e},a.updateLayout=function(){},a.isLastPage=function(a){return a===o},a.getZoomBounds=function(){return{width:c,height:d}},a.getAutoZoom=function(c){return a.getZoomBounds().width>b.clientWidth-u?c:1},a.next=function(){l.goToPage(n+1)},a.prev=function(){l.goToPage(n-1)},a.toString=function(){return IDRViewer.LAYOUT_CONTINUOUS},a}(),I=function(a){try{a.getSelection?a.getSelection().empty?a.getSelection().empty():a.getSelection().removeAllRanges&&a.getSelection().removeAllRanges():a.document.selection&&a.document.selection.empty()}catch(b){}},J=function(){var a,c,d,e={},f={},h=!1;e.setup=function(){switch(d){case IDRViewer.SELECT_PAN:case IDRViewer.SELECT_SELECT:break;default:d=IDRViewer.SELECT_SELECT}this.currentSelectMode=d,this.currentSelectMode==l.SELECT_SELECT?e.enableTextSelection():e.enablePanning()};var i=!!window.opera||navigator.userAgent.indexOf(" OPR/")>=0,j="undefined"!=typeof InstallTrigger,k=!!window.chrome&&!i;return f.Default="",j?(f.Grab="-moz-grab",f.Grabbing="-moz-grabbing"):k?(f.Grab="-webkit-grab",f.Grabbing="-webkit-grabbing"):(f.Grab="all-scroll",f.Grabbing="all-scroll"),e.enableTextSelection=function(){this.currentSelectMode=l.SELECT_SELECT,g.style.cursor=f.Default;var a=function(){};g.onmousedown=a,document.onmouseup=a,g.onmousemove=a,g.style.visibility="hidden"},e.enablePanning=function(){this.currentSelectMode=l.SELECT_PAN,I(window),g.style.visibility="visible",g.style.cursor=f.Grab,g.onmousedown=function(b){return b=b||window.event,g.style.cursor=f.Grabbing,a=b.clientX,c=b.clientY,h=!0,!1},document.onmouseup=function(){g.style.cursor=f.Grab,h=!1},g.onmousemove=function(d){if(h)return d=d||window.event,b.scrollLeft=b.scrollLeft+a-d.clientX,b.scrollTop=b.scrollTop+c-d.clientY,a=d.clientX,c=d.clientY,!1}},e.setDefaultMode=function(a){d=a},e}();l.setSelectMode=function(a){if(w){if(d)return;a==l.SELECT_SELECT?J.enableTextSelection():J.enablePanning(),l.fire("selectchange",{type:a})}else J.setDefaultMode(a)};var K,L=function(a,b,c,d,e){var f;return f=e?"translate3d("+b+"px, "+c+"px, 0) scale("+d+")":"translateX("+b+"px) translateY("+c+"px) scale("+d+")",D.getTransform(f)},M=function(a){C.stopLoading();var d=m;m=N(a);var e=!1,g=!1;m>=4?(m=4,g=!0):m<=.25&&(m=.25,e=!0);var i=m/d,j=b.scrollTop;c.updateLayout();for(var k=c.getVisiblePages(),n=1;n<=o;n++)k.indexOf(n)===-1&&s[n].unload();K&&h.deleteRule(K);var r=L(null,0,0,m,!1);K=h.insertRule(".page-inner { \n"+r+"\n}",h.cssRules.length);for(var u=0;u<o;u++)t[u+1].style.width=Math.floor(f[u][0]*m)+"px",t[u+1].style.height=Math.floor(f[u][1]*m)+"px";b.scrollTop=j*i,p++,p%2===1&&M(),l.fire("zoomchange",{zoomType:q,zoomValue:m,isMinZoom:e,isMaxZoom:g})};l.zoomIn=function(){M(1.2*m)},l.zoomOut=function(){M(m/1.2)},l.setZoom=function(a){w?M(a):k=a};var N=function(a){var d=c.getZoomBounds(),e=(b.clientWidth-u)/d.width,f=(b.clientHeight-u)/d.height,g=parseFloat(a);switch(isNaN(g)||(m=g,a=l.ZOOM_SPECIFIC),a||(a=q),a){case l.ZOOM_AUTO:m=c.getAutoZoom(e,f);break;case l.ZOOM_FITWIDTH:m=e;break;case l.ZOOM_FITHEIGHT:m=f;break;case l.ZOOM_FITPAGE:m=Math.min(e,f);break;case l.ZOOM_ACTUALSIZE:m=1}return q=a,m};l.goToPage=function(a,b){w?a>=1&&a<=o&&c.goToPage(Number(a),b):n=a},l.next=function(){c.next()},l.prev=function(){c.prev()},l.setLayout=function(a){w?(c.unload(),P.removeClass(b,"layout-"+c.toString()),a==l.LAYOUT_PRESENTATION?c=F:a==l.LAYOUT_MAGAZINE?c=G:a==l.LAYOUT_CONTINUOUS&&(c=H),c.setup(n),P.addClass(b,"layout-"+c.toString()),M(IDRViewer.ZOOM_AUTO),c.goToPage(n),l.fire("layoutchange",{layout:a})):j=a},l.updateLayout=function(){M()};var O=function(a){return document.getElementById(a)};l.on=function(a,b){v[a]||(v[a]=[]),v[a].indexOf(b)===-1&&v[a].push(b)},l.off=function(a,b){if(v[a]){var c=v[a].indexOf(b);c!==-1&&v[a].splice(c,1)}},l.fire=function(a,b){v[a]&&v[a].forEach(function(a){a(b)})};var P=function(){return{addClass:function(a,b){var c=0!==a.className.length?a.className.split(" "):[],d=c.indexOf(b);d===-1&&(c.push(b),a.className=c.join(" "))},removeClass:function(){for(var a=arguments[0],b=0!==a.className.length?a.className.split(" "):[],c=1;c<arguments.length;c++){var d=b.indexOf(arguments[c]);d!==-1&&b.splice(d,1)}a.className=b.join(" ")}}}();if(window){window.toggleAnnotation=function(a){var b=document.getElementById(a).style;b.visibility="hidden"===b.visibility?"visible":"hidden"};var Q;window.Draggable=function(a){function b(a){a=a||window.event,e.isMoving=!0,e.mousePos.x=a.clientX||a.touches[0].pageX,e.mousePos.y=a.clientY||a.touches[0].pageY,e.offsets.left=e.element.parentNode.offsetLeft,e.offsets.top=e.element.parentNode.offsetTop,e.newPos.left=e.offsets.left,e.newPos.top=e.offsets.top,e.element.parentNode.style.zIndex=5,Q&&(Q.style.zIndex=4)}function c(){e.isMoving=!1,Q=e.element.parentNode}function d(a){e.isMoving!==!1&&(a.preventDefault?a.preventDefault():a.returnValue=!1,a=a||window.event,e.newPos.left=(a.clientX||a.touches[0].pageX)-e.mousePos.x+e.offsets.left,e.newPos.top=(a.clientY||a.touches[0].pageY)-e.mousePos.y+e.offsets.top,e.element.parentNode.style.top=e.newPos.top+"px",e.element.parentNode.style.left=e.newPos.left+"px")}this.element=a,this.offsets={},this.mousePos={},this.isMoving=!1,this.newPos={},this.html=document.getElementsByTagName("html").item(0),this.isTouch="ontouchstart"in window;var e=this;if(this.element.onmousemove=null,this.html.addEventListener)if(this.isTouch){this.element.addEventListener("touchstart",b),this.html.addEventListener("touchmove",d),this.html.addEventListener("touchend",c);try{b(event)}catch(f){}}else this.element.addEventListener("mousedown",b),this.html.addEventListener("mousemove",d),this.html.addEventListener("mouseup",c);else this.html.attachEvent&&(this.html.attachEvent("onmousedown",b),this.html.attachEvent("onmousemove",d),this.html.attachEvent("onmouseup",c));a.onclick=function(){e.offsets.left===e.newPos.left&&e.newPos.top===e.offsets.top&&(toggleAnnotation(e.element.parentNode.id),e.isMoving=!1)}}}"function"==typeof define&&define.amd?define(["idrviewer"],[],function(){return l}):"object"==typeof module&&module.exports?module.exports=l:window.IDRViewer=l}();