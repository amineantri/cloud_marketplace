// Modernizr v1.7  www.modernizr.com
window.Modernizr=function(a,b,c){function G(){e.input=function(a){for(var b=0,c=a.length;b<c;b++)t[a[b]]=!!(a[b]in l);return t}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),e.inputtypes=function(a){for(var d=0,e,f,h,i=a.length;d<i;d++)l.setAttribute("type",f=a[d]),e=l.type!=="text",e&&(l.value=m,l.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(f)&&l.style.WebkitAppearance!==c?(g.appendChild(l),h=b.defaultView,e=h.getComputedStyle&&h.getComputedStyle(l,null).WebkitAppearance!=="textfield"&&l.offsetHeight!==0,g.removeChild(l)):/^(search|tel)$/.test(f)||(/^(url|email)$/.test(f)?e=l.checkValidity&&l.checkValidity()===!1:/^color$/.test(f)?(g.appendChild(l),g.offsetWidth,e=l.value!=m,g.removeChild(l)):e=l.value!=m)),s[a[d]]=!!e;return s}("search tel url email datetime date month week time datetime-local number range color".split(" "))}function F(a,b){var c=a.charAt(0).toUpperCase()+a.substr(1),d=(a+" "+p.join(c+" ")+c).split(" ");return!!E(d,b)}function E(a,b){for(var d in a)if(k[a[d]]!==c&&(!b||b(a[d],j)))return!0}function D(a,b){return(""+a).indexOf(b)!==-1}function C(a,b){return typeof a===b}function B(a,b){return A(o.join(a+";")+(b||""))}function A(a){k.cssText=a}var d="1.7",e={},f=!0,g=b.documentElement,h=b.head||b.getElementsByTagName("head")[0],i="modernizr",j=b.createElement(i),k=j.style,l=b.createElement("input"),m=":)",n=Object.prototype.toString,o=" -webkit- -moz- -o- -ms- -khtml- ".split(" "),p="Webkit Moz O ms Khtml".split(" "),q={svg:"http://www.w3.org/2000/svg"},r={},s={},t={},u=[],v,w=function(a){var c=b.createElement("style"),d=b.createElement("div"),e;c.textContent=a+"{#modernizr{height:3px}}",h.appendChild(c),d.id="modernizr",g.appendChild(d),e=d.offsetHeight===3,c.parentNode.removeChild(c),d.parentNode.removeChild(d);return!!e},x=function(){function d(d,e){e=e||b.createElement(a[d]||"div");var f=(d="on"+d)in e;f||(e.setAttribute||(e=b.createElement("div")),e.setAttribute&&e.removeAttribute&&(e.setAttribute(d,""),f=C(e[d],"function"),C(e[d],c)||(e[d]=c),e.removeAttribute(d))),e=null;return f}var a={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return d}(),y=({}).hasOwnProperty,z;C(y,c)||C(y.call,c)?z=function(a,b){return b in a&&C(a.constructor.prototype[b],c)}:z=function(a,b){return y.call(a,b)},r.flexbox=function(){function c(a,b,c,d){a.style.cssText=o.join(b+":"+c+";")+(d||"")}function a(a,b,c,d){b+=":",a.style.cssText=(b+o.join(c+";"+b)).slice(0,-b.length)+(d||"")}var d=b.createElement("div"),e=b.createElement("div");a(d,"display","box","width:42px;padding:0;"),c(e,"box-flex","1","width:10px;"),d.appendChild(e),g.appendChild(d);var f=e.offsetWidth===42;d.removeChild(e),g.removeChild(d);return f},r.canvas=function(){var a=b.createElement("canvas");return a.getContext&&a.getContext("2d")},r.canvastext=function(){return e.canvas&&C(b.createElement("canvas").getContext("2d").fillText,"function")},r.webgl=function(){return!!a.WebGLRenderingContext},r.touch=function(){return"ontouchstart"in a||w("@media ("+o.join("touch-enabled),(")+"modernizr)")},r.geolocation=function(){return!!navigator.geolocation},r.postmessage=function(){return!!a.postMessage},r.websqldatabase=function(){var b=!!a.openDatabase;return b},r.indexedDB=function(){for(var b=-1,c=p.length;++b<c;){var d=p[b].toLowerCase();if(a[d+"_indexedDB"]||a[d+"IndexedDB"])return!0}return!1},r.hashchange=function(){return x("hashchange",a)&&(b.documentMode===c||b.documentMode>7)},r.history=function(){return !!(a.history&&history.pushState)},r.draganddrop=function(){return x("dragstart")&&x("drop")},r.websockets=function(){return"WebSocket"in a},r.rgba=function(){A("background-color:rgba(150,255,150,.5)");return D(k.backgroundColor,"rgba")},r.hsla=function(){A("background-color:hsla(120,40%,100%,.5)");return D(k.backgroundColor,"rgba")||D(k.backgroundColor,"hsla")},r.multiplebgs=function(){A("background:url(//:),url(//:),red url(//:)");return(new RegExp("(url\\s*\\(.*?){3}")).test(k.background)},r.backgroundsize=function(){return F("backgroundSize")},r.borderimage=function(){return F("borderImage")},r.borderradius=function(){return F("borderRadius","",function(a){return D(a,"orderRadius")})},r.boxshadow=function(){return F("boxShadow")},r.textshadow=function(){return b.createElement("div").style.textShadow===""},r.opacity=function(){B("opacity:.55");return/^0.55$/.test(k.opacity)},r.cssanimations=function(){return F("animationName")},r.csscolumns=function(){return F("columnCount")},r.cssgradients=function(){var a="background-image:",b="gradient(linear,left top,right bottom,from(#9f9),to(white));",c="linear-gradient(left top,#9f9, white);";A((a+o.join(b+a)+o.join(c+a)).slice(0,-a.length));return D(k.backgroundImage,"gradient")},r.cssreflections=function(){return F("boxReflect")},r.csstransforms=function(){return!!E(["transformProperty","WebkitTransform","MozTransform","OTransform","msTransform"])},r.csstransforms3d=function(){var a=!!E(["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"]);a&&"webkitPerspective"in g.style&&(a=w("@media ("+o.join("transform-3d),(")+"modernizr)"));return a},r.csstransitions=function(){return F("transitionProperty")},r.fontface=function(){var a,c,d=h||g,e=b.createElement("style"),f=b.implementation||{hasFeature:function(){return!1}};e.type="text/css",d.insertBefore(e,d.firstChild),a=e.sheet||e.styleSheet;var i=f.hasFeature("CSS2","")?function(b){if(!a||!b)return!1;var c=!1;try{a.insertRule(b,0),c=/src/i.test(a.cssRules[0].cssText),a.deleteRule(a.cssRules.length-1)}catch(d){}return c}:function(b){if(!a||!b)return!1;a.cssText=b;return a.cssText.length!==0&&/src/i.test(a.cssText)&&a.cssText.replace(/\r+|\n+/g,"").indexOf(b.split(" ")[0])===0};c=i('@font-face { font-family: "font"; src: url(data:,); }'),d.removeChild(e);return c},r.video=function(){var a=b.createElement("video"),c=!!a.canPlayType;if(c){c=new Boolean(c),c.ogg=a.canPlayType('video/ogg; codecs="theora"');var d='video/mp4; codecs="avc1.42E01E';c.h264=a.canPlayType(d+'"')||a.canPlayType(d+', mp4a.40.2"'),c.webm=a.canPlayType('video/webm; codecs="vp8, vorbis"')}return c},r.audio=function(){var a=b.createElement("audio"),c=!!a.canPlayType;c&&(c=new Boolean(c),c.ogg=a.canPlayType('audio/ogg; codecs="vorbis"'),c.mp3=a.canPlayType("audio/mpeg;"),c.wav=a.canPlayType('audio/wav; codecs="1"'),c.m4a=a.canPlayType("audio/x-m4a;")||a.canPlayType("audio/aac;"));return c},r.localstorage=function(){try{return!!localStorage.getItem}catch(a){return!1}},r.sessionstorage=function(){try{return!!sessionStorage.getItem}catch(a){return!1}},r.webWorkers=function(){return!!a.Worker},r.applicationcache=function(){return!!a.applicationCache},r.svg=function(){return!!b.createElementNS&&!!b.createElementNS(q.svg,"svg").createSVGRect},r.inlinesvg=function(){var a=b.createElement("div");a.innerHTML="<svg/>";return(a.firstChild&&a.firstChild.namespaceURI)==q.svg},r.smil=function(){return!!b.createElementNS&&/SVG/.test(n.call(b.createElementNS(q.svg,"animate")))},r.svgclippaths=function(){return!!b.createElementNS&&/SVG/.test(n.call(b.createElementNS(q.svg,"clipPath")))};for(var H in r)z(r,H)&&(v=H.toLowerCase(),e[v]=r[H](),u.push((e[v]?"":"no-")+v));e.input||G(),e.crosswindowmessaging=e.postmessage,e.historymanagement=e.history,e.addTest=function(a,b){a=a.toLowerCase();if(!e[a]){b=!!b(),g.className+=" "+(b?"":"no-")+a,e[a]=b;return e}},A(""),j=l=null,f&&a.attachEvent&&function(){var a=b.createElement("div");a.innerHTML="<elem></elem>";return a.childNodes.length!==1}()&&function(a,b){function p(a,b){var c=-1,d=a.length,e,f=[];while(++c<d)e=a[c],(b=e.media||b)!="screen"&&f.push(p(e.imports,b),e.cssText);return f.join("")}function o(a){var b=-1;while(++b<e)a.createElement(d[b])}var c="abbr|article|aside|audio|canvas|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",d=c.split("|"),e=d.length,f=new RegExp("(^|\\s)("+c+")","gi"),g=new RegExp("<(/*)("+c+")","gi"),h=new RegExp("(^|[^\\n]*?\\s)("+c+")([^\\n]*)({[\\n\\w\\W]*?})","gi"),i=b.createDocumentFragment(),j=b.documentElement,k=j.firstChild,l=b.createElement("body"),m=b.createElement("style"),n;o(b),o(i),k.insertBefore(m,k.firstChild),m.media="print",a.attachEvent("onbeforeprint",function(){var a=-1,c=p(b.styleSheets,"all"),k=[],o;n=n||b.body;while((o=h.exec(c))!=null)k.push((o[1]+o[2]+o[3]).replace(f,"$1.iepp_$2")+o[4]);m.styleSheet.cssText=k.join("\n");while(++a<e){var q=b.getElementsByTagName(d[a]),r=q.length,s=-1;while(++s<r)q[s].className.indexOf("iepp_")<0&&(q[s].className+=" iepp_"+d[a])}i.appendChild(n),j.appendChild(l),l.className=n.className,l.innerHTML=n.innerHTML.replace(g,"<$1font")}),a.attachEvent("onafterprint",function(){l.innerHTML="",j.removeChild(l),j.appendChild(n),m.styleSheet.cssText=""})}(a,b),e._enableHTML5=f,e._version=d,g.className=g.className.replace(/\bno-js\b/,"")+" js "+u.join(" ");return e}(this,this.document);
/*!
 * Edited by Braintree to fix pushStack issue: 
 * http://stackoverflow.com/questions/10314992/chrome-sometimes-calls-incorrect-constructor
 *
 * jQuery JavaScript Library v1.6.1
 * http://jquery.com/
 *
 * Copyright 2011, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 * Copyright 2011, The Dojo Foundation
 * Released under the MIT, BSD, and GPL Licenses.
 *
 * Date: Thu May 12 15:04:36 2011 -0400
 */(function(e,t){function l(e,n,r){if(r===t&&e.nodeType===1){var i="data-"+n.replace(f,"$1-$2").toLowerCase();r=e.getAttribute(i);if(typeof r=="string"){try{r=r==="true"?!0:r==="false"?!1:r==="null"?null:s.isNaN(r)?a.test(r)?s.parseJSON(r):r:parseFloat(r)}catch(o){}s.data(e,n,r)}else r=t}return r}function c(e){for(var t in e)if(t!=="toJSON")return!1;return!0}function h(e,n,r){var i=n+"defer",o=n+"queue",u=n+"mark",a=s.data(e,i,t,!0);a&&(r==="queue"||!s.data(e,o,t,!0))&&(r==="mark"||!s.data(e,u,t,!0))&&setTimeout(function(){!s.data(e,o,t,!0)&&!s.data(e,u,t,!0)&&(s.removeData(e,i,!0),a.resolve())},0)}function O(){return!1}function M(){return!0}function j(e,n,r){var i=s.extend({},r[0]);i.type=e,i.originalEvent={},i.liveFired=t,s.event.handle.call(n,i),i.isDefaultPrevented()&&r[0].preventDefault()}function I(e){var t,n,r,i,o,u,a,f,l,c,h,p,d,v=[],m=[],g=s._data(this,"events");if(e.liveFired===this||!g||!g.live||e.target.disabled||e.button&&e.type==="click")return;e.namespace&&(p=new RegExp("(^|\\.)"+e.namespace.split(".").join("\\.(?:.*\\.)?")+"(\\.|$)")),e.liveFired=this;var y=g.live.slice(0);for(a=0;a<y.length;a++)o=y[a],o.origType.replace(T,"")===e.type?m.push(o.selector):y.splice(a--,1);i=s(e.target).closest(m,e.currentTarget);for(f=0,l=i.length;f<l;f++){h=i[f];for(a=0;a<y.length;a++){o=y[a];if(h.selector===o.selector&&(!p||p.test(o.namespace))&&!h.elem.disabled){u=h.elem,r=null;if(o.preType==="mouseenter"||o.preType==="mouseleave")e.type=o.preType,r=s(e.relatedTarget).closest(o.selector)[0],r&&s.contains(u,r)&&(r=u);(!r||r!==u)&&v.push({elem:u,handleObj:o,level:h.level})}}}for(f=0,l=v.length;f<l;f++){i=v[f];if(n&&i.level>n)break;e.currentTarget=i.elem,e.data=i.handleObj.data,e.handleObj=i.handleObj,d=i.handleObj.origHandler.apply(i.elem,arguments);if(d===!1||e.isPropagationStopped()){n=i.level,d===!1&&(t=!1);if(e.isImmediatePropagationStopped())break}}return t}function q(e,t){return(e&&e!=="*"?e+".":"")+t.replace(C,"`").replace(k,"&")}function J(e){return!e||!e.parentNode||e.parentNode.nodeType===11}function K(e,t,n){t=t||0;if(s.isFunction(t))return s.grep(e,function(e,r){var i=!!t.call(e,r,e);return i===n});if(t.nodeType)return s.grep(e,function(e,r){return e===t===n});if(typeof t=="string"){var r=s.grep(e,function(e){return e.nodeType===1});if(W.test(t))return s.filter(t,r,!n);t=s.filter(t,r)}return s.grep(e,function(e,r){return s.inArray(e,t)>=0===n})}function ut(e,t){return s.nodeName(e,"table")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function at(e,t){if(t.nodeType!==1||!s.hasData(e))return;var n=s.expando,r=s.data(e),i=s.data(t,r);if(r=r[n]){var o=r.events;i=i[n]=s.extend({},r);if(o){delete i.handle,i.events={};for(var u in o)for(var a=0,f=o[u].length;a<f;a++)s.event.add(t,u+(o[u][a].namespace?".":"")+o[u][a].namespace,o[u][a],o[u][a].data)}}}function ft(e,t){var n;if(t.nodeType!==1)return;t.clearAttributes&&t.clearAttributes(),t.mergeAttributes&&t.mergeAttributes(e),n=t.nodeName.toLowerCase();if(n==="object")t.outerHTML=e.outerHTML;else if(n!=="input"||e.type!=="checkbox"&&e.type!=="radio"){if(n==="option")t.selected=e.defaultSelected;else if(n==="input"||n==="textarea")t.defaultValue=e.defaultValue}else e.checked&&(t.defaultChecked=t.checked=e.checked),t.value!==e.value&&(t.value=e.value);t.removeAttribute(s.expando)}function lt(e){return"getElementsByTagName"in e?e.getElementsByTagName("*"):"querySelectorAll"in e?e.querySelectorAll("*"):[]}function ct(e){if(e.type==="checkbox"||e.type==="radio")e.defaultChecked=e.checked}function ht(e){s.nodeName(e,"input")?ct(e):e.getElementsByTagName&&s.grep(e.getElementsByTagName("input"),ct)}function pt(e,t){t.src?s.ajax({url:t.src,async:!1,dataType:"script"}):s.globalEval((t.text||t.textContent||t.innerHTML||"").replace(st,"/*$0*/")),t.parentNode&&t.parentNode.removeChild(t)}function At(e,t,n){var r=t==="width"?xt:Tt,i=t==="width"?e.offsetWidth:e.offsetHeight;return n==="border"?i:(s.each(r,function(){n||(i-=parseFloat(s.css(e,"padding"+this))||0),n==="margin"?i+=parseFloat(s.css(e,"margin"+this))||0:i-=parseFloat(s.css(e,"border"+this+"Width"))||0}),i)}function Gt(e){return function(t,n){typeof t!="string"&&(n=t,t="*");if(s.isFunction(n)){var r=t.toLowerCase().split(Ut),i=0,o=r.length,u,a,f;for(;i<o;i++)u=r[i],f=/^\+/.test(u),f&&(u=u.substr(1)||"*"),a=e[u]=e[u]||[],a[f?"unshift":"push"](n)}}}function Yt(e,n,r,i,s,o){s=s||n.dataTypes[0],o=o||{},o[s]=!0;var u=e[s],a=0,f=u?u.length:0,l=e===Vt,c;for(;a<f&&(l||!c);a++)c=u[a](n,r,i),typeof c=="string"&&(!l||o[c]?c=t:(n.dataTypes.unshift(c),c=Yt(e,n,r,i,c,o)));return(l||!c)&&!o["*"]&&(c=Yt(e,n,r,i,"*",o)),c}function Zt(e,t,n,r){if(s.isArray(t))s.each(t,function(t,i){n||Mt.test(e)?r(e,i):Zt(e+"["+(typeof i=="object"||s.isArray(i)?t:"")+"]",i,n,r)});else if(!n&&t!=null&&typeof t=="object")for(var i in t)Zt(e+"["+i+"]",t[i],n,r);else r(e,t)}function en(e,n,r){var i=e.contents,s=e.dataTypes,o=e.responseFields,u,a,f,l;for(a in o)a in r&&(n[o[a]]=r[a]);while(s[0]==="*")s.shift(),u===t&&(u=e.mimeType||n.getResponseHeader("content-type"));if(u)for(a in i)if(i[a]&&i[a].test(u)){s.unshift(a);break}if(s[0]in r)f=s[0];else{for(a in r){if(!s[0]||e.converters[a+" "+s[0]]){f=a;break}l||(l=a)}f=f||l}if(f)return f!==s[0]&&s.unshift(f),r[f]}function tn(e,n){e.dataFilter&&(n=e.dataFilter(n,e.dataType));var r=e.dataTypes,i={},o,u,a=r.length,f,l=r[0],c,h,p,d,v;for(o=1;o<a;o++){if(o===1)for(u in e.converters)typeof u=="string"&&(i[u.toLowerCase()]=e.converters[u]);c=l,l=r[o];if(l==="*")l=c;else if(c!=="*"&&c!==l){h=c+" "+l,p=i[h]||i["* "+l];if(!p){v=t;for(d in i){f=d.split(" ");if(f[0]===c||f[0]==="*"){v=i[f[1]+" "+l];if(v){d=i[d],d===!0?p=v:v===!0&&(p=d);break}}}}!p&&!v&&s.error("No conversion from "+h.replace(" "," to ")),p!==!0&&(n=p?p(n):v(d(n)))}}return n}function an(){try{return new e.XMLHttpRequest}catch(t){}}function fn(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}function bn(){return setTimeout(wn,0),gn=s.now()}function wn(){gn=t}function En(e,t){var n={};return s.each(mn.concat.apply([],mn.slice(0,t)),function(){n[this]=e}),n}function Sn(e){if(!ln[e]){var t=s("<"+e+">").appendTo("body"),r=t.css("display");t.remove();if(r==="none"||r===""){cn||(cn=n.createElement("iframe"),cn.frameBorder=cn.width=cn.height=0),n.body.appendChild(cn);if(!hn||!cn.createElement)hn=(cn.contentWindow||cn.contentDocument).document,hn.write("<!doctype><html><body></body></html>");t=hn.createElement(e),hn.body.appendChild(t),r=s.css(t,"display"),n.body.removeChild(cn)}ln[e]=r}return ln[e]}function Nn(e){return s.isWindow(e)?e:e.nodeType===9?e.defaultView||e.parentWindow:!1}var n=e.document,r=e.navigator,i=e.location,s=function(){function D(){if(i.isReady)return;try{n.documentElement.doScroll("left")}catch(e){setTimeout(D,1);return}i.ready()}var i=function(e,t){return new i.fn.init(e,t,u)},s=e.jQuery,o=e.$,u,a=/^(?:[^<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,f=/\S/,l=/^\s+/,c=/\s+$/,h=/\d/,p=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,d=/^[\],:{}\s]*$/,v=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,m=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,g=/(?:^|:|,)(?:\s*\[)+/g,y=/(webkit)[ \/]([\w.]+)/,b=/(opera)(?:.*version)?[ \/]([\w.]+)/,w=/(msie) ([\w.]+)/,E=/(mozilla)(?:.*? rv:([\w.]+))?/,S=r.userAgent,x,T,N,C=Object.prototype.toString,k=Object.prototype.hasOwnProperty,L=Array.prototype.push,A=Array.prototype.slice,O=String.prototype.trim,M=Array.prototype.indexOf,_={};return i.fn=i.prototype={constructor:i,init:function(e,r,s){var o,u,f,l;if(!e)return this;if(e.nodeType)return this.context=this[0]=e,this.length=1,this;if(e==="body"&&!r&&n.body)return this.context=n,this[0]=n.body,this.selector=e,this.length=1,this;if(typeof e=="string"){e.charAt(0)==="<"&&e.charAt(e.length-1)===">"&&e.length>=3?o=[null,e,null]:o=a.exec(e);if(o&&(o[1]||!r)){if(o[1])return r=r instanceof i?r[0]:r,l=r?r.ownerDocument||r:n,f=p.exec(e),f?i.isPlainObject(r)?(e=[n.createElement(f[1])],i.fn.attr.call(e,r,!0)):e=[l.createElement(f[1])]:(f=i.buildFragment([o[1]],[l]),e=(f.cacheable?i.clone(f.fragment):f.fragment).childNodes),i.merge(this,e);u=n.getElementById(o[2]);if(u&&u.parentNode){if(u.id!==o[2])return s.find(e);this.length=1,this[0]=u}return this.context=n,this.selector=e,this}return!r||r.jquery?(r||s).find(e):this.constructor(r).find(e)}return i.isFunction(e)?s.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),i.makeArray(e,this))},selector:"",jquery:"1.6.1",length:0,size:function(){return this.length},toArray:function(){return A.call(this,0)},get:function(e){return e==null?this.toArray():e<0?this[this.length+e]:this[e]},pushStack:function(e,t,n){var r=this.constructor();return this instanceof i.fn.init&&!(r instanceof i.fn.init)&&(r=new i.fn.init),i.isArray(e)?L.apply(r,e):i.merge(r,e),r.prevObject=this,r.context=this.context,t==="find"?r.selector=this.selector+(this.selector?" ":"")+n:t&&(r.selector=this.selector+"."+t+"("+n+")"),r},each:function(e,t){return i.each(this,e,t)},ready:function(e){return i.bindReady(),T.done(e),this},eq:function(e){return e===-1?this.slice(e):this.slice(e,+e+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(A.apply(this,arguments),"slice",A.call(arguments).join(","))},map:function(e){return this.pushStack(i.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:L,sort:[].sort,splice:[].splice},i.fn.init.prototype=i.fn,i.extend=i.fn.extend=function(){var e,n,r,s,o,u,a=arguments[0]||{},f=1,l=arguments.length,c=!1;typeof a=="boolean"&&(c=a,a=arguments[1]||{},f=2),typeof a!="object"&&!i.isFunction(a)&&(a={}),l===f&&(a=this,--f);for(;f<l;f++)if((e=arguments[f])!=null)for(n in e){r=a[n],s=e[n];if(a===s)continue;c&&s&&(i.isPlainObject(s)||(o=i.isArray(s)))?(o?(o=!1,u=r&&i.isArray(r)?r:[]):u=r&&i.isPlainObject(r)?r:{},a[n]=i.extend(c,u,s)):s!==t&&(a[n]=s)}return a},i.extend({noConflict:function(t){return e.$===i&&(e.$=o),t&&e.jQuery===i&&(e.jQuery=s),i},isReady:!1,readyWait:1,holdReady:function(e){e?i.readyWait++:i.ready(!0)},ready:function(e){if(e===!0&&!--i.readyWait||e!==!0&&!i.isReady){if(!n.body)return setTimeout(i.ready,1);i.isReady=!0;if(e!==!0&&--i.readyWait>0)return;T.resolveWith(n,[i]),i.fn.trigger&&i(n).trigger("ready").unbind("ready")}},bindReady:function(){if(T)return;T=i._Deferred();if(n.readyState==="complete")return setTimeout(i.ready,1);if(n.addEventListener)n.addEventListener("DOMContentLoaded",N,!1),e.addEventListener("load",i.ready,!1);else if(n.attachEvent){n.attachEvent("onreadystatechange",N),e.attachEvent("onload",i.ready);var t=!1;try{t=e.frameElement==null}catch(r){}n.documentElement.doScroll&&t&&D()}},isFunction:function(e){return i.type(e)==="function"},isArray:Array.isArray||function(e){return i.type(e)==="array"},isWindow:function(e){return e&&typeof e=="object"&&"setInterval"in e},isNaN:function(e){return e==null||!h.test(e)||isNaN(e)},type:function(e){return e==null?String(e):_[C.call(e)]||"object"},isPlainObject:function(e){if(!e||i.type(e)!=="object"||e.nodeType||i.isWindow(e))return!1;if(e.constructor&&!k.call(e,"constructor")&&!k.call(e.constructor.prototype,"isPrototypeOf"))return!1;var n;for(n in e);return n===t||k.call(e,n)},isEmptyObject:function(e){for(var t in e)return!1;return!0},error:function(e){throw e},parseJSON:function(t){if(typeof t!="string"||!t)return null;t=i.trim(t);if(e.JSON&&e.JSON.parse)return e.JSON.parse(t);if(d.test(t.replace(v,"@").replace(m,"]").replace(g,"")))return(new Function("return "+t))();i.error("Invalid JSON: "+t)},parseXML:function(t,n,r){return e.DOMParser?(r=new DOMParser,n=r.parseFromString(t,"text/xml")):(n=new ActiveXObject("Microsoft.XMLDOM"),n.async="false",n.loadXML(t)),r=n.documentElement,(!r||!r.nodeName||r.nodeName==="parsererror")&&i.error("Invalid XML: "+t),n},noop:function(){},globalEval:function(t){t&&f.test(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toUpperCase()===t.toUpperCase()},each:function(e,n,r){var s,o=0,u=e.length,a=u===t||i.isFunction(e);if(r){if(a){for(s in e)if(n.apply(e[s],r)===!1)break}else for(;o<u;)if(n.apply(e[o++],r)===!1)break}else if(a){for(s in e)if(n.call(e[s],s,e[s])===!1)break}else for(;o<u;)if(n.call(e[o],o,e[o++])===!1)break;return e},trim:O?function(e){return e==null?"":O.call(e)}:function(e){return e==null?"":e.toString().replace(l,"").replace(c,"")},makeArray:function(e,t){var n=t||[];if(e!=null){var r=i.type(e);e.length==null||r==="string"||r==="function"||r==="regexp"||i.isWindow(e)?L.call(n,e):i.merge(n,e)}return n},inArray:function(e,t){if(M)return M.call(t,e);for(var n=0,r=t.length;n<r;n++)if(t[n]===e)return n;return-1},merge:function(e,n){var r=e.length,i=0;if(typeof n.length=="number")for(var s=n.length;i<s;i++)e[r++]=n[i];else while(n[i]!==t)e[r++]=n[i++];return e.length=r,e},grep:function(e,t,n){var r=[],i;n=!!n;for(var s=0,o=e.length;s<o;s++)i=!!t(e[s],s),n!==i&&r.push(e[s]);return r},map:function(e,n,r){var s,o,u=[],a=0,f=e.length,l=e instanceof i||f!==t&&typeof f=="number"&&(f>0&&e[0]&&e[f-1]||f===0||i.isArray(e));if(l)for(;a<f;a++)s=n(e[a],a,r),s!=null&&(u[u.length]=s);else for(o in e)s=n(e[o],o,r),s!=null&&(u[u.length]=s);return u.concat.apply([],u)},guid:1,proxy:function(e,n){if(typeof n=="string"){var r=e[n];n=e,e=r}if(!i.isFunction(e))return t;var s=A.call(arguments,2),o=function(){return e.apply(n,s.concat(A.call(arguments)))};return o.guid=e.guid=e.guid||o.guid||i.guid++,o},access:function(e,n,r,s,o,u){var a=e.length;if(typeof n=="object"){for(var f in n)i.access(e,f,n[f],s,o,r);return e}if(r!==t){s=!u&&s&&i.isFunction(r);for(var l=0;l<a;l++)o(e[l],n,s?r.call(e[l],l,o(e[l],n)):r,u);return e}return a?o(e[0],n):t},now:function(){return(new Date).getTime()},uaMatch:function(e){e=e.toLowerCase();var t=y.exec(e)||b.exec(e)||w.exec(e)||e.indexOf("compatible")<0&&E.exec(e)||[];return{browser:t[1]||"",version:t[2]||"0"}},sub:function(){function e(t,n){return new e.fn.init(t,n)}i.extend(!0,e,this),e.superclass=this,e.fn=e.prototype=this(),e.fn.constructor=e,e.sub=this.sub,e.fn.init=function(r,s){return s&&s instanceof i&&!(s instanceof e)&&(s=e(s)),i.fn.init.call(this,r,s,t)},e.fn.init.prototype=e.fn;var t=e(n);return e},browser:{}}),i.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(e,t){_["[object "+t+"]"]=t.toLowerCase()}),x=i.uaMatch(S),x.browser&&(i.browser[x.browser]=!0,i.browser.version=x.version),i.browser.webkit&&(i.browser.safari=!0),f.test(" ")&&(l=/^[\s\xA0]+/,c=/[\s\xA0]+$/),u=i(n),n.addEventListener?N=function(){n.removeEventListener("DOMContentLoaded",N,!1),i.ready()}:n.attachEvent&&(N=function(){n.readyState==="complete"&&(n.detachEvent("onreadystatechange",N),i.ready())}),i}(),o="done fail isResolved isRejected promise then always pipe".split(" "),u=[].slice;s.extend({_Deferred:function(){var e=[],t,n,r,i={done:function(){if(!r){var n=arguments,o,u,a,f,l;t&&(l=t,t=0);for(o=0,u=n.length;o<u;o++)a=n[o],f=s.type(a),f==="array"?i.done.apply(i,a):f==="function"&&e.push(a);l&&i.resolveWith(l[0],l[1])}return this},resolveWith:function(i,s){if(!r&&!t&&!n){s=s||[],n=1;try{while(e[0])e.shift().apply(i,s)}finally{t=[i,s],n=0}}return this},resolve:function(){return i.resolveWith(this,arguments),this},isResolved:function(){return!!n||!!t},cancel:function(){return r=1,e=[],this}};return i},Deferred:function(e){var t=s._Deferred(),n=s._Deferred(),r;return s.extend(t,{then:function(e,n){return t.done(e).fail(n),this},always:function(){return t.done.apply(t,arguments).fail.apply(this,arguments)},fail:n.done,rejectWith:n.resolveWith,reject:n.resolve,isRejected:n.isResolved,pipe:function(e,n){return s.Deferred(function(r){s.each({done:[e,"resolve"],fail:[n,"reject"]},function(e,n){var i=n[0],o=n[1],u;s.isFunction(i)?t[e](function(){u=i.apply(this,arguments),u&&s.isFunction(u.promise)?u.promise().then(r.resolve,r.reject):r[o](u)}):t[e](r[o])})}).promise()},promise:function(e){if(e==null){if(r)return r;r=e={}}var n=o.length;while(n--)e[o[n]]=t[o[n]];return e}}),t.done(n.cancel).fail(t.cancel),delete t.cancel,e&&e.call(t,t),t},when:function(e){function a(e){return function(n){t[e]=arguments.length>1?u.call(arguments,0):n,--i||o.resolveWith(o,u.call(t,0))}}var t=arguments,n=0,r=t.length,i=r,o=r<=1&&e&&s.isFunction(e.promise)?e:s.Deferred();if(r>1){for(;n<r;n++)t[n]&&s.isFunction(t[n].promise)?t[n].promise().then(a(n),o.reject):--i;i||o.resolveWith(o,t)}else o!==e&&o.resolveWith(o,r?[e]:[]);return o.promise()}}),s.support=function(){var e=n.createElement("div"),t=n.documentElement,r,i,s,o,u,a,f,l,c,h,p,d,v,m,g;e.setAttribute("className","t"),e.innerHTML="   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>",r=e.getElementsByTagName("*"),i=e.getElementsByTagName("a")[0];if(!r||!r.length||!i)return{};s=n.createElement("select"),o=s.appendChild(n.createElement("option")),u=e.getElementsByTagName("input")[0],f={leadingWhitespace:e.firstChild.nodeType===3,tbody:!e.getElementsByTagName("tbody").length,htmlSerialize:!!e.getElementsByTagName("link").length,style:/top/.test(i.getAttribute("style")),hrefNormalized:i.getAttribute("href")==="/a",opacity:/^0.55$/.test(i.style.opacity),cssFloat:!!i.style.cssFloat,checkOn:u.value==="on",optSelected:o.selected,getSetAttribute:e.className!=="t",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0},u.checked=!0,f.noCloneChecked=u.cloneNode(!0).checked,s.disabled=!0,f.optDisabled=!o.disabled;try{delete e.test}catch(y){f.deleteExpando=!1}!e.addEventListener&&e.attachEvent&&e.fireEvent&&(e.attachEvent("onclick",function b(){f.noCloneEvent=!1,e.detachEvent("onclick",b)}),e.cloneNode(!0).fireEvent("onclick")),u=n.createElement("input"),u.value="t",u.setAttribute("type","radio"),f.radioValue=u.value==="t",u.setAttribute("checked","checked"),e.appendChild(u),l=n.createDocumentFragment(),l.appendChild(e.firstChild),f.checkClone=l.cloneNode(!0).cloneNode(!0).lastChild.checked,e.innerHTML="",e.style.width=e.style.paddingLeft="1px",c=n.createElement("body"),h={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"};for(m in h)c.style[m]=h[m];c.appendChild(e),t.insertBefore(c,t.firstChild),f.appendChecked=u.checked,f.boxModel=e.offsetWidth===2,"zoom"in e.style&&(e.style.display="inline",e.style.zoom=1,f.inlineBlockNeedsLayout=e.offsetWidth===2,e.style.display="",e.innerHTML="<div style='width:4px;'></div>",f.shrinkWrapBlocks=e.offsetWidth!==2),e.innerHTML="<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>",p=e.getElementsByTagName("td"),g=p[0].offsetHeight===0,p[0].style.display="",p[1].style.display="none",f.reliableHiddenOffsets=g&&p[0].offsetHeight===0,e.innerHTML="",n.defaultView&&n.defaultView.getComputedStyle&&(a=n.createElement("div"),a.style.width="0",a.style.marginRight="0",e.appendChild(a),f.reliableMarginRight=(parseInt((n.defaultView.getComputedStyle(a,null)||{marginRight:0}).marginRight,10)||0)===0),c.innerHTML="",t.removeChild(c);if(e.attachEvent)for(m in{submit:1,change:1,focusin:1})v="on"+m,g=v in e,g||(e.setAttribute(v,"return;"),g=typeof e[v]=="function"),f[m+"Bubbles"]=g;return f}(),s.boxModel=s.support.boxModel;var a=/^(?:\{.*\}|\[.*\])$/,f=/([a-z])([A-Z])/g;s.extend({cache:{},uuid:0,expando:"jQuery"+(s.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(e){return e=e.nodeType?s.cache[e[s.expando]]:e[s.expando],!!e&&!c(e)},data:function(e,n,r,i){if(!s.acceptData(e))return;var o=s.expando,u=typeof n=="string",a,f=e.nodeType,l=f?s.cache:e,c=f?e[s.expando]:e[s.expando]&&s.expando;if((!c||i&&c&&!l[c][o])&&u&&r===t)return;c||(f?e[s.expando]=c=++s.uuid:c=s.expando),l[c]||(l[c]={},f||(l[c].toJSON=s.noop));if(typeof n=="object"||typeof n=="function")i?l[c][o]=s.extend(l[c][o],n):l[c]=s.extend(l[c],n);return a=l[c],i&&(a[o]||(a[o]={}),a=a[o]),r!==t&&(a[s.camelCase(n)]=r),n==="events"&&!a[n]?a[o]&&a[o].events:u?a[s.camelCase(n)]:a},removeData:function(t,n,r){if(!s.acceptData(t))return;var i=s.expando,o=t.nodeType,u=o?s.cache:t,a=o?t[s.expando]:s.expando;if(!u[a])return;if(n){var f=r?u[a][i]:u[a];if(f){delete f[n];if(!c(f))return}}if(r){delete u[a][i];if(!c(u[a]))return}var l=u[a][i];s.support.deleteExpando||u!=e?delete u[a]:u[a]=null,l?(u[a]={},o||(u[a].toJSON=s.noop),u[a][i]=l):o&&(s.support.deleteExpando?delete t[s.expando]:t.removeAttribute?t.removeAttribute(s.expando):t[s.expando]=null)},_data:function(e,t,n){return s.data(e,t,n,!0)},acceptData:function(e){if(e.nodeName){var t=s.noData[e.nodeName.toLowerCase()];if(t)return t!==!0&&e.getAttribute("classid")===t}return!0}}),s.fn.extend({data:function(e,n){var r=null;if(typeof e=="undefined"){if(this.length){r=s.data(this[0]);if(this[0].nodeType===1){var i=this[0].attributes,o;for(var u=0,a=i.length;u<a;u++)o=i[u].name,o.indexOf("data-")===0&&(o=s.camelCase(o.substring(5)),l(this[0],o,r[o]))}}return r}if(typeof e=="object")return this.each(function(){s.data(this,e)});var f=e.split(".");return f[1]=f[1]?"."+f[1]:"",n===t?(r=this.triggerHandler("getData"+f[1]+"!",[f[0]]),r===t&&this.length&&(r=s.data(this[0],e),r=l(this[0],e,r)),r===t&&f[1]?this.data(f[0]):r):this.each(function(){var t=s(this),r=[f[0],n];t.triggerHandler("setData"+f[1]+"!",r),s.data(this,e,n),t.triggerHandler("changeData"+f[1]+"!",r)})},removeData:function(e){return this.each(function(){s.removeData(this,e)})}}),s.extend({_mark:function(e,n){e&&(n=(n||"fx")+"mark",s.data(e,n,(s.data(e,n,t,!0)||0)+1,!0))},_unmark:function(e,n,r){e!==!0&&(r=n,n=e,e=!1);if(n){r=r||"fx";var i=r+"mark",o=e?0:(s.data(n,i,t,!0)||1)-1;o?s.data(n,i,o,!0):(s.removeData(n,i,!0),h(n,r,"mark"))}},queue:function(e,n,r){if(e){n=(n||"fx")+"queue";var i=s.data(e,n,t,!0);return r&&(!i||s.isArray(r)?i=s.data(e,n,s.makeArray(r),!0):i.push(r)),i||[]}},dequeue:function(e,t){t=t||"fx";var n=s.queue(e,t),r=n.shift(),i;r==="inprogress"&&(r=n.shift()),r&&(t==="fx"&&n.unshift("inprogress"),r.call(e,function(){s.dequeue(e,t)})),n.length||(s.removeData(e,t+"queue",!0),h(e,t,"queue"))}}),s.fn.extend({queue:function(e,n){return typeof e!="string"&&(n=e,e="fx"),n===t?s.queue(this[0],e):this.each(function(){var t=s.queue(this,e,n);e==="fx"&&t[0]!=="inprogress"&&s.dequeue(this,e)})},dequeue:function(e){return this.each(function(){s.dequeue(this,e)})},delay:function(e,t){return e=s.fx?s.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(){var n=this;setTimeout(function(){s.dequeue(n,t)},e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){function h(){--u||r.resolveWith(i,[i])}typeof e!="string"&&(n=e,e=t),e=e||"fx";var r=s.Deferred(),i=this,o=i.length,u=1,a=e+"defer",f=e+"queue",l=e+"mark",c;while(o--)if(c=s.data(i[o],a,t,!0)||(s.data(i[o],f,t,!0)||s.data(i[o],l,t,!0))&&s.data(i[o],a,s._Deferred(),!0))u++,c.done(h);return h(),r.promise()}});var p=/[\n\t\r]/g,d=/\s+/,v=/\r/g,m=/^(?:button|input)$/i,g=/^(?:button|input|object|select|textarea)$/i,y=/^a(?:rea)?$/i,b=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,w=/\:/,E,S;s.fn.extend({attr:function(e,t){return s.access(this,e,t,!0,s.attr)},removeAttr:function(e){return this.each(function(){s.removeAttr(this,e)})},prop:function(e,t){return s.access(this,e,t,!0,s.prop)},removeProp:function(e){return e=s.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){if(s.isFunction(e))return this.each(function(t){var n=s(this);n.addClass(e.call(this,t,n.attr("class")||""))});if(e&&typeof e=="string"){var t=(e||"").split(d);for(var n=0,r=this.length;n<r;n++){var i=this[n];if(i.nodeType===1)if(!i.className)i.className=e;else{var o=" "+i.className+" ",u=i.className;for(var a=0,f=t.length;a<f;a++)o.indexOf(" "+t[a]+" ")<0&&(u+=" "+t[a]);i.className=s.trim(u)}}}return this},removeClass:function(e){if(s.isFunction(e))return this.each(function(t){var n=s(this);n.removeClass(e.call(this,t,n.attr("class")))});if(e&&typeof e=="string"||e===t){var n=(e||"").split(d);for(var r=0,i=this.length;r<i;r++){var o=this[r];if(o.nodeType===1&&o.className)if(e){var u=(" "+o.className+" ").replace(p," ");for(var a=0,f=n.length;a<f;a++)u=u.replace(" "+n[a]+" "," ");o.className=s.trim(u)}else o.className=""}}return this},toggleClass:function(e,t){var n=typeof e,r=typeof t=="boolean";return s.isFunction(e)?this.each(function(n){var r=s(this);r.toggleClass(e.call(this,n,r.attr("class"),t),t)}):this.each(function(){if(n==="string"){var i,o=0,u=s(this),a=t,f=e.split(d);while(i=f[o++])a=r?a:!u.hasClass(i),u[a?"addClass":"removeClass"](i)}else if(n==="undefined"||n==="boolean")this.className&&s._data(this,"__className__",this.className),this.className=this.className||e===!1?"":s._data(this,"__className__")||""})},hasClass:function(e){var t=" "+e+" ";for(var n=0,r=this.length;n<r;n++)if((" "+this[n].className+" ").replace(p," ").indexOf(t)>-1)return!0;return!1},val:function(e){var n,r,i=this[0];if(!arguments.length)return i?(n=s.valHooks[i.nodeName.toLowerCase()]||s.valHooks[i.type],n&&"get"in n&&(r=n.get(i,"value"))!==t?r:(i.value||"").replace(v,"")):t;var o=s.isFunction(e);return this.each(function(r){var i=s(this),u;if(this.nodeType!==1)return;o?u=e.call(this,r,i.val()):u=e,u==null?u="":typeof u=="number"?u+="":s.isArray(u)&&(u=s.map(u,function(e){return e==null?"":e+""})),n=s.valHooks[this.nodeName.toLowerCase()]||s.valHooks[this.type];if(!n||!("set"in n)||n.set(this,u,"value")===t)this.value=u})}}),s.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n=e.selectedIndex,r=[],i=e.options,o=e.type==="select-one";if(n<0)return null;for(var u=o?n:0,a=o?n+1:i.length;u<a;u++){var f=i[u];if(f.selected&&(s.support.optDisabled?!f.disabled:f.getAttribute("disabled")===null)&&(!f.parentNode.disabled||!s.nodeName(f.parentNode,"optgroup"))){t=s(f).val();if(o)return t;r.push(t)}}return o&&!r.length&&i.length?s(i[n]).val():r},set:function(e,t){var n=s.makeArray(t);return s(e).find("option").each(function(){this.selected=s.inArray(s(this).val(),n)>=0}),n.length||(e.selectedIndex=-1),n}}},attrFn:{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0},attrFix:{tabindex:"tabIndex"},attr:function(e,n,r,i){var o=e.nodeType;if(!e||o===3||o===8||o===2)return t;if(i&&n in s.attrFn)return s(e)[n](r);if("getAttribute"in e){var u,a,f=o!==1||!s.isXMLDoc(e);return n=f&&s.attrFix[n]||n,a=s.attrHooks[n],a||(!b.test(n)||typeof r!="boolean"&&r!==t&&r.toLowerCase()!==n.toLowerCase()?E&&(s.nodeName(e,"form")||w.test(n))&&(a=E):a=S),r!==t?r===null?(s.removeAttr(e,n),t):a&&"set"in a&&f&&(u=a.set(e,r,n))!==t?u:(e.setAttribute(n,""+r),r):a&&"get"in a&&f?a.get(e,n):(u=e.getAttribute(n),u===null?t:u)}return s.prop(e,n,r)},removeAttr:function(e,t){var n;e.nodeType===1&&(t=s.attrFix[t]||t,s.support.getSetAttribute?e.removeAttribute(t):(s.attr(e,t,""),e.removeAttributeNode(e.getAttributeNode(t))),b.test(t)&&(n=s.propFix[t]||t)in e&&(e[n]=!1))},attrHooks:{type:{set:function(e,t){if(m.test(e.nodeName)&&e.parentNode)s.error("type property can't be changed");else if(!s.support.radioValue&&t==="radio"&&s.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}},tabIndex:{get:function(e){var n=e.getAttributeNode("tabIndex");return n&&n.specified?parseInt(n.value,10):g.test(e.nodeName)||y.test(e.nodeName)&&e.href?0:t}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(e,n,r){var i=e.nodeType;if(!e||i===3||i===8||i===2)return t;var o,u,a=i!==1||!s.isXMLDoc(e);return n=a&&s.propFix[n]||n,u=s.propHooks[n],r!==t?u&&"set"in u&&(o=u.set(e,r,n))!==t?o:e[n]=r:u&&"get"in u&&(o=u.get(e,n))!==t?o:e[n]},propHooks:{}}),S={get:function(e,n){return e[s.propFix[n]||n]?n.toLowerCase():t},set:function(e,t,n){var r;return t===!1?s.removeAttr(e,n):(r=s.propFix[n]||n,r in e&&(e[r]=t),e.setAttribute(n,n.toLowerCase())),n}},s.attrHooks.value={get:function(e,t){return E&&s.nodeName(e,"button")?E.get(e,t):e.value},set:function(e,t,n){if(E&&s.nodeName(e,"button"))return E.set(e,t,n);e.value=t}},s.support.getSetAttribute||(s.attrFix=s.propFix,E=s.attrHooks.name=s.valHooks.button={get:function(e,n){var r;return r=e.getAttributeNode(n),r&&r.nodeValue!==""?r.nodeValue:t},set:function(e,t,n){var r=e.getAttributeNode(n);if(r)return r.nodeValue=t,t}},s.each(["width","height"],function(e,t){s.attrHooks[t]=s.extend(s.attrHooks[t],{set:function(e,n){if(n==="")return e.setAttribute(t,"auto"),n}})})),s.support.hrefNormalized||s.each(["href","src","width","height"],function(e,n){s.attrHooks[n]=s.extend(s.attrHooks[n],{get:function(e){var r=e.getAttribute(n,2);return r===null?t:r}})}),s.support.style||(s.attrHooks.style={get:function(e){return e.style.cssText.toLowerCase()||t},set:function(e,t){return e.style.cssText=""+t}}),s.support.optSelected||(s.propHooks.selected=s.extend(s.propHooks.selected,{get:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}})),s.support.checkOn||s.each(["radio","checkbox"],function(){s.valHooks[this]={get:function(e){return e.getAttribute("value")===null?"on":e.value}}}),s.each(["radio","checkbox"],function(){s.valHooks[this]=s.extend(s.valHooks[this],{set:function(e,t){if(s.isArray(t))return e.checked=s.inArray(s(e).val(),t)>=0}})});var x=Object.prototype.hasOwnProperty,T=/\.(.*)$/,N=/^(?:textarea|input|select)$/i,C=/\./g,k=/ /g,L=/[^\w\s.|`]/g,A=function(e){return e.replace(L,"\\$&")};s.event={add:function(e,n,r,i){if(e.nodeType===3||e.nodeType===8)return;if(r===!1)r=O;else if(!r)return;var o,u;r.handler&&(o=r,r=o.handler),r.guid||(r.guid=s.guid++);var a=s._data(e);if(!a)return;var f=a.events,l=a.handle;f||(a.events=f={}),l||(a.handle=l=function(e){return typeof s=="undefined"||!!e&&s.event.triggered===e.type?t:s.event.handle.apply(l.elem,arguments)}),l.elem=e,n=n.split(" ");var c,h=0,p;while(c=n[h++]){u=o?s.extend({},o):{handler:r,data:i},c.indexOf(".")>-1?(p=c.split("."),c=p.shift(),u.namespace=p.slice(0).sort().join(".")):(p=[],u.namespace=""),u.type=c,u.guid||(u.guid=r.guid);var d=f[c],v=s.event.special[c]||{};if(!d){d=f[c]=[];if(!v.setup||v.setup.call(e,i,p,l)===!1)e.addEventListener?e.addEventListener(c,l,!1):e.attachEvent&&e.attachEvent("on"+c,l)}v.add&&(v.add.call(e,u),u.handler.guid||(u.handler.guid=r.guid)),d.push(u),s.event.global[c]=!0}e=null},global:{},remove:function(e,n,r,i){if(e.nodeType===3||e.nodeType===8)return;r===!1&&(r=O);var o,u,a,f,l=0,c,h,p,d,v,m,g,y=s.hasData(e)&&s._data(e),b=y&&y.events;if(!y||!b)return;n&&n.type&&(r=n.handler,n=n.type);if(!n||typeof n=="string"&&n.charAt(0)==="."){n=n||"";for(u in b)s.event.remove(e,u+n);return}n=n.split(" ");while(u=n[l++]){g=u,m=null,c=u.indexOf(".")<0,h=[],c||(h=u.split("."),u=h.shift(),p=new RegExp("(^|\\.)"+s.map(h.slice(0).sort(),A).join("\\.(?:.*\\.)?")+"(\\.|$)")),v=b[u];if(!v)continue;if(!r){for(f=0;f<v.length;f++){m=v[f];if(c||p.test(m.namespace))s.event.remove(e,g,m.handler,f),v.splice(f--,1)}continue}d=s.event.special[u]||{};for(f=i||0;f<v.length;f++){m=v[f];if(r.guid===m.guid){if(c||p.test(m.namespace))i==null&&v.splice(f--,1),d.remove&&d.remove.call(e,m);if(i!=null)break}}if(v.length===0||i!=null&&v.length===1)(!d.teardown||d.teardown.call(e,h)===!1)&&s.removeEvent(e,u,y.handle),o=null,delete b[u]}if(s.isEmptyObject(b)){var w=y.handle;w&&(w.elem=null),delete y.events,delete y.handle,s.isEmptyObject(y)&&s.removeData(e,t,!0)}},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(n,r,i,o){var u=n.type||n,a=[],f;u.indexOf("!")>=0&&(u=u.slice(0,-1),f=!0),u.indexOf(".")>=0&&(a=u.split("."),u=a.shift(),a.sort());if((!i||s.event.customEvent[u])&&!s.event.global[u])return;n=typeof n=="object"?n[s.expando]?n:new s.Event(u,n):new s.Event(u),n.type=u,n.exclusive=f,n.namespace=a.join("."),n.namespace_re=new RegExp("(^|\\.)"+a.join("\\.(?:.*\\.)?")+"(\\.|$)");if(o||!i)n.preventDefault(),n.stopPropagation();if(!i){s.each(s.cache,function(){var e=s.expando,t=this[e];t&&t.events&&t.events[u]&&s.event.trigger(n,r,t.handle.elem)});return}if(i.
nodeType===3||i.nodeType===8)return;n.result=t,n.target=i,r=r?s.makeArray(r):[],r.unshift(n);var l=i,c=u.indexOf(":")<0?"on"+u:"";do{var h=s._data(l,"handle");n.currentTarget=l,h&&h.apply(l,r),c&&s.acceptData(l)&&l[c]&&l[c].apply(l,r)===!1&&(n.result=!1,n.preventDefault()),l=l.parentNode||l.ownerDocument||l===n.target.ownerDocument&&e}while(l&&!n.isPropagationStopped());if(!n.isDefaultPrevented()){var p,d=s.event.special[u]||{};if((!d._default||d._default.call(i.ownerDocument,n)===!1)&&(u!=="click"||!s.nodeName(i,"a"))&&s.acceptData(i)){try{c&&i[u]&&(p=i[c],p&&(i[c]=null),s.event.triggered=u,i[u]())}catch(v){}p&&(i[c]=p),s.event.triggered=t}}return n.result},handle:function(n){n=s.event.fix(n||e.event);var r=((s._data(this,"events")||{})[n.type]||[]).slice(0),i=!n.exclusive&&!n.namespace,o=Array.prototype.slice.call(arguments,0);o[0]=n,n.currentTarget=this;for(var u=0,a=r.length;u<a;u++){var f=r[u];if(i||n.namespace_re.test(f.namespace)){n.handler=f.handler,n.data=f.data,n.handleObj=f;var l=f.handler.apply(this,o);l!==t&&(n.result=l,l===!1&&(n.preventDefault(),n.stopPropagation()));if(n.isImmediatePropagationStopped())break}}return n.result},props:"altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),fix:function(e){if(e[s.expando])return e;var r=e;e=s.Event(r);for(var i=this.props.length,o;i;)o=this.props[--i],e[o]=r[o];e.target||(e.target=e.srcElement||n),e.target.nodeType===3&&(e.target=e.target.parentNode),!e.relatedTarget&&e.fromElement&&(e.relatedTarget=e.fromElement===e.target?e.toElement:e.fromElement);if(e.pageX==null&&e.clientX!=null){var u=e.target.ownerDocument||n,a=u.documentElement,f=u.body;e.pageX=e.clientX+(a&&a.scrollLeft||f&&f.scrollLeft||0)-(a&&a.clientLeft||f&&f.clientLeft||0),e.pageY=e.clientY+(a&&a.scrollTop||f&&f.scrollTop||0)-(a&&a.clientTop||f&&f.clientTop||0)}return e.which==null&&(e.charCode!=null||e.keyCode!=null)&&(e.which=e.charCode!=null?e.charCode:e.keyCode),!e.metaKey&&e.ctrlKey&&(e.metaKey=e.ctrlKey),!e.which&&e.button!==t&&(e.which=e.button&1?1:e.button&2?3:e.button&4?2:0),e},guid:1e8,proxy:s.proxy,special:{ready:{setup:s.bindReady,teardown:s.noop},live:{add:function(e){s.event.add(this,q(e.origType,e.selector),s.extend({},e,{handler:I,guid:e.handler.guid}))},remove:function(e){s.event.remove(this,q(e.origType,e.selector),e)}},beforeunload:{setup:function(e,t,n){s.isWindow(this)&&(this.onbeforeunload=n)},teardown:function(e,t){this.onbeforeunload===t&&(this.onbeforeunload=null)}}}},s.removeEvent=n.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){e.detachEvent&&e.detachEvent("on"+t,n)},s.Event=function(e,t){if(!this.preventDefault)return new s.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?M:O):this.type=e,t&&s.extend(this,t),this.timeStamp=s.now(),this[s.expando]=!0},s.Event.prototype={preventDefault:function(){this.isDefaultPrevented=M;var e=this.originalEvent;if(!e)return;e.preventDefault?e.preventDefault():e.returnValue=!1},stopPropagation:function(){this.isPropagationStopped=M;var e=this.originalEvent;if(!e)return;e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=M,this.stopPropagation()},isDefaultPrevented:O,isPropagationStopped:O,isImmediatePropagationStopped:O};var _=function(e){var t=e.relatedTarget;e.type=e.data;try{if(t&&t!==n&&!t.parentNode)return;while(t&&t!==this)t=t.parentNode;t!==this&&s.event.handle.apply(this,arguments)}catch(r){}},D=function(e){e.type=e.data,s.event.handle.apply(this,arguments)};s.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){s.event.special[e]={setup:function(n){s.event.add(this,t,n&&n.selector?D:_,e)},teardown:function(e){s.event.remove(this,t,e&&e.selector?D:_)}}}),s.support.submitBubbles||(s.event.special.submit={setup:function(e,t){if(!!s.nodeName(this,"form"))return!1;s.event.add(this,"click.specialSubmit",function(e){var t=e.target,n=t.type;(n==="submit"||n==="image")&&s(t).closest("form").length&&j("submit",this,arguments)}),s.event.add(this,"keypress.specialSubmit",function(e){var t=e.target,n=t.type;(n==="text"||n==="password")&&s(t).closest("form").length&&e.keyCode===13&&j("submit",this,arguments)})},teardown:function(e){s.event.remove(this,".specialSubmit")}});if(!s.support.changeBubbles){var P,H=function(e){var t=e.type,n=e.value;return t==="radio"||t==="checkbox"?n=e.checked:t==="select-multiple"?n=e.selectedIndex>-1?s.map(e.options,function(e){return e.selected}).join("-"):"":s.nodeName(e,"select")&&(n=e.selectedIndex),n},B=function(n){var r=n.target,i,o;if(!N.test(r.nodeName)||r.readOnly)return;i=s._data(r,"_change_data"),o=H(r),(n.type!=="focusout"||r.type!=="radio")&&s._data(r,"_change_data",o);if(i===t||o===i)return;if(i!=null||o)n.type="change",n.liveFired=t,s.event.trigger(n,arguments[1],r)};s.event.special.change={filters:{focusout:B,beforedeactivate:B,click:function(e){var t=e.target,n=s.nodeName(t,"input")?t.type:"";(n==="radio"||n==="checkbox"||s.nodeName(t,"select"))&&B.call(this,e)},keydown:function(e){var t=e.target,n=s.nodeName(t,"input")?t.type:"";(e.keyCode===13&&!s.nodeName(t,"textarea")||e.keyCode===32&&(n==="checkbox"||n==="radio")||n==="select-multiple")&&B.call(this,e)},beforeactivate:function(e){var t=e.target;s._data(t,"_change_data",H(t))}},setup:function(e,t){if(this.type==="file")return!1;for(var n in P)s.event.add(this,n+".specialChange",P[n]);return N.test(this.nodeName)},teardown:function(e){return s.event.remove(this,".specialChange"),N.test(this.nodeName)}},P=s.event.special.change.filters,P.focus=P.beforeactivate}s.support.focusinBubbles||s.each({focus:"focusin",blur:"focusout"},function(e,t){function i(e){var n=s.event.fix(e);n.type=t,n.originalEvent={},s.event.trigger(n,null,n.target),n.isDefaultPrevented()&&e.preventDefault()}var r=0;s.event.special[t]={setup:function(){r++===0&&n.addEventListener(e,i,!0)},teardown:function(){--r===0&&n.removeEventListener(e,i,!0)}}}),s.each(["bind","one"],function(e,n){s.fn[n]=function(e,r,i){var o;if(typeof e=="object"){for(var u in e)this[n](u,r,e[u],i);return this}if(arguments.length===2||r===!1)i=r,r=t;n==="one"?(o=function(e){return s(this).unbind(e,o),i.apply(this,arguments)},o.guid=i.guid||s.guid++):o=i;if(e==="unload"&&n!=="one")this.one(e,r,i);else for(var a=0,f=this.length;a<f;a++)s.event.add(this[a],e,o,r);return this}}),s.fn.extend({unbind:function(e,t){if(typeof e=="object"&&!e.preventDefault)for(var n in e)this.unbind(n,e[n]);else for(var r=0,i=this.length;r<i;r++)s.event.remove(this[r],e,t);return this},delegate:function(e,t,n,r){return this.live(t,n,r,e)},undelegate:function(e,t,n){return arguments.length===0?this.unbind("live"):this.die(t,null,n,e)},trigger:function(e,t){return this.each(function(){s.event.trigger(e,t,this)})},triggerHandler:function(e,t){if(this[0])return s.event.trigger(e,t,this[0],!0)},toggle:function(e){var t=arguments,n=e.guid||s.guid++,r=0,i=function(n){var i=(s.data(this,"lastToggle"+e.guid)||0)%r;return s.data(this,"lastToggle"+e.guid,i+1),n.preventDefault(),t[i].apply(this,arguments)||!1};i.guid=n;while(r<t.length)t[r++].guid=n;return this.click(i)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}});var F={focus:"focusin",blur:"focusout",mouseenter:"mouseover",mouseleave:"mouseout"};s.each(["live","die"],function(e,n){s.fn[n]=function(e,r,i,o){var u,a=0,f,l,c,h=o||this.selector,p=o?this:s(this.context);if(typeof e=="object"&&!e.preventDefault){for(var d in e)p[n](d,r,e[d],h);return this}if(n==="die"&&!e&&o&&o.charAt(0)===".")return p.unbind(o),this;if(r===!1||s.isFunction(r))i=r||O,r=t;e=(e||"").split(" ");while((u=e[a++])!=null){f=T.exec(u),l="",f&&(l=f[0],u=u.replace(T,""));if(u==="hover"){e.push("mouseenter"+l,"mouseleave"+l);continue}c=u,F[u]?(e.push(F[u]+l),u+=l):u=(F[u]||u)+l;if(n==="live")for(var v=0,m=p.length;v<m;v++)s.event.add(p[v],"live."+q(u,h),{data:r,selector:h,handler:i,origType:u,origHandler:i,preType:c});else p.unbind("live."+q(u,h),i)}return this}}),s.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error".split(" "),function(e,t){s.fn[t]=function(e,n){return n==null&&(n=e,e=null),arguments.length>0?this.bind(t,e,n):this.trigger(t)},s.attrFn&&(s.attrFn[t]=!0)}),function(){function b(e,t,n,r,i,s){for(var o=0,u=r.length;o<u;o++){var a=r[o];if(a){var f=!1;a=a[e];while(a){if(a.sizcache===n){f=r[a.sizset];break}a.nodeType===1&&!s&&(a.sizcache=n,a.sizset=o);if(a.nodeName.toLowerCase()===t){f=a;break}a=a[e]}r[o]=f}}}function w(e,t,n,r,i,s){for(var o=0,u=r.length;o<u;o++){var a=r[o];if(a){var f=!1;a=a[e];while(a){if(a.sizcache===n){f=r[a.sizset];break}if(a.nodeType===1){s||(a.sizcache=n,a.sizset=o);if(typeof t!="string"){if(a===t){f=!0;break}}else if(l.filter(t,[a]).length>0){f=a;break}}a=a[e]}r[o]=f}}}var e=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,r=0,i=Object.prototype.toString,o=!1,u=!0,a=/\\/g,f=/\W/;[0,0].sort(function(){return u=!1,0});var l=function(t,r,s,o){s=s||[],r=r||n;var u=r;if(r.nodeType!==1&&r.nodeType!==9)return[];if(!t||typeof t!="string")return s;var a,f,p,d,m,g,y,b,w=!0,S=l.isXML(r),x=[],T=t;do{e.exec(""),a=e.exec(T);if(a){T=a[3],x.push(a[1]);if(a[2]){d=a[3];break}}}while(a);if(x.length>1&&h.exec(t))if(x.length===2&&c.relative[x[0]])f=E(x[0]+x[1],r);else{f=c.relative[x[0]]?[r]:l(x.shift(),r);while(x.length)t=x.shift(),c.relative[t]&&(t+=x.shift()),f=E(t,f)}else{!o&&x.length>1&&r.nodeType===9&&!S&&c.match.ID.test(x[0])&&!c.match.ID.test(x[x.length-1])&&(m=l.find(x.shift(),r,S),r=m.expr?l.filter(m.expr,m.set)[0]:m.set[0]);if(r){m=o?{expr:x.pop(),set:v(o)}:l.find(x.pop(),x.length!==1||x[0]!=="~"&&x[0]!=="+"||!r.parentNode?r:r.parentNode,S),f=m.expr?l.filter(m.expr,m.set):m.set,x.length>0?p=v(f):w=!1;while(x.length)g=x.pop(),y=g,c.relative[g]?y=x.pop():g="",y==null&&(y=r),c.relative[g](p,y,S)}else p=x=[]}p||(p=f),p||l.error(g||t);if(i.call(p)==="[object Array]")if(!w)s.push.apply(s,p);else if(r&&r.nodeType===1)for(b=0;p[b]!=null;b++)p[b]&&(p[b]===!0||p[b].nodeType===1&&l.contains(r,p[b]))&&s.push(f[b]);else for(b=0;p[b]!=null;b++)p[b]&&p[b].nodeType===1&&s.push(f[b]);else v(p,s);return d&&(l(d,u,s,o),l.uniqueSort(s)),s};l.uniqueSort=function(e){if(g){o=u,e.sort(g);if(o)for(var t=1;t<e.length;t++)e[t]===e[t-1]&&e.splice(t--,1)}return e},l.matches=function(e,t){return l(e,null,null,t)},l.matchesSelector=function(e,t){return l(t,null,null,[e]).length>0},l.find=function(e,t,n){var r;if(!e)return[];for(var i=0,s=c.order.length;i<s;i++){var o,u=c.order[i];if(o=c.leftMatch[u].exec(e)){var f=o[1];o.splice(1,1);if(f.substr(f.length-1)!=="\\"){o[1]=(o[1]||"").replace(a,""),r=c.find[u](o,t,n);if(r!=null){e=e.replace(c.match[u],"");break}}}}return r||(r=typeof t.getElementsByTagName!="undefined"?t.getElementsByTagName("*"):[]),{set:r,expr:e}},l.filter=function(e,n,r,i){var s,o,u=e,a=[],f=n,h=n&&n[0]&&l.isXML(n[0]);while(e&&n.length){for(var p in c.filter)if((s=c.leftMatch[p].exec(e))!=null&&s[2]){var d,v,m=c.filter[p],g=s[1];o=!1,s.splice(1,1);if(g.substr(g.length-1)==="\\")continue;f===a&&(a=[]);if(c.preFilter[p]){s=c.preFilter[p](s,f,r,a,i,h);if(!s)o=d=!0;else if(s===!0)continue}if(s)for(var y=0;(v=f[y])!=null;y++)if(v){d=m(v,s,y,f);var b=i^!!d;r&&d!=null?b?o=!0:f[y]=!1:b&&(a.push(v),o=!0)}if(d!==t){r||(f=a),e=e.replace(c.match[p],"");if(!o)return[];break}}if(e===u){if(o!=null)break;l.error(e)}u=e}return f},l.error=function(e){throw"Syntax error, unrecognized expression: "+e};var c=l.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(e){return e.getAttribute("href")},type:function(e){return e.getAttribute("type")}},relative:{"+":function(e,t){var n=typeof t=="string",r=n&&!f.test(t),i=n&&!r;r&&(t=t.toLowerCase());for(var s=0,o=e.length,u;s<o;s++)if(u=e[s]){while((u=u.previousSibling)&&u.nodeType!==1);e[s]=i||u&&u.nodeName.toLowerCase()===t?u||!1:u===t}i&&l.filter(t,e,!0)},">":function(e,t){var n,r=typeof t=="string",i=0,s=e.length;if(r&&!f.test(t)){t=t.toLowerCase();for(;i<s;i++){n=e[i];if(n){var o=n.parentNode;e[i]=o.nodeName.toLowerCase()===t?o:!1}}}else{for(;i<s;i++)n=e[i],n&&(e[i]=r?n.parentNode:n.parentNode===t);r&&l.filter(t,e,!0)}},"":function(e,t,n){var i,s=r++,o=w;typeof t=="string"&&!f.test(t)&&(t=t.toLowerCase(),i=t,o=b),o("parentNode",t,s,e,i,n)},"~":function(e,t,n){var i,s=r++,o=w;typeof t=="string"&&!f.test(t)&&(t=t.toLowerCase(),i=t,o=b),o("previousSibling",t,s,e,i,n)}},find:{ID:function(e,t,n){if(typeof t.getElementById!="undefined"&&!n){var r=t.getElementById(e[1]);return r&&r.parentNode?[r]:[]}},NAME:function(e,t){if(typeof t.getElementsByName!="undefined"){var n=[],r=t.getElementsByName(e[1]);for(var i=0,s=r.length;i<s;i++)r[i].getAttribute("name")===e[1]&&n.push(r[i]);return n.length===0?null:n}},TAG:function(e,t){if(typeof t.getElementsByTagName!="undefined")return t.getElementsByTagName(e[1])}},preFilter:{CLASS:function(e,t,n,r,i,s){e=" "+e[1].replace(a,"")+" ";if(s)return e;for(var o=0,u;(u=t[o])!=null;o++)u&&(i^(u.className&&(" "+u.className+" ").replace(/[\t\n\r]/g," ").indexOf(e)>=0)?n||r.push(u):n&&(t[o]=!1));return!1},ID:function(e){return e[1].replace(a,"")},TAG:function(e,t){return e[1].replace(a,"").toLowerCase()},CHILD:function(e){if(e[1]==="nth"){e[2]||l.error(e[0]),e[2]=e[2].replace(/^\+|\s*/g,"");var t=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(e[2]==="even"&&"2n"||e[2]==="odd"&&"2n+1"||!/\D/.test(e[2])&&"0n+"+e[2]||e[2]);e[2]=t[1]+(t[2]||1)-0,e[3]=t[3]-0}else e[2]&&l.error(e[0]);return e[0]=r++,e},ATTR:function(e,t,n,r,i,s){var o=e[1]=e[1].replace(a,"");return!s&&c.attrMap[o]&&(e[1]=c.attrMap[o]),e[4]=(e[4]||e[5]||"").replace(a,""),e[2]==="~="&&(e[4]=" "+e[4]+" "),e},PSEUDO:function(t,n,r,i,s){if(t[1]==="not"){if(!((e.exec(t[3])||"").length>1||/^\w/.test(t[3]))){var o=l.filter(t[3],n,r,!0^s);return r||i.push.apply(i,o),!1}t[3]=l(t[3],null,null,n)}else if(c.match.POS.test(t[0])||c.match.CHILD.test(t[0]))return!0;return t},POS:function(e){return e.unshift(!0),e}},filters:{enabled:function(e){return e.disabled===!1&&e.type!=="hidden"},disabled:function(e){return e.disabled===!0},checked:function(e){return e.checked===!0},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},parent:function(e){return!!e.firstChild},empty:function(e){return!e.firstChild},has:function(e,t,n){return!!l(n[3],e).length},header:function(e){return/h\d/i.test(e.nodeName)},text:function(e){var t=e.getAttribute("type"),n=e.type;return e.nodeName.toLowerCase()==="input"&&"text"===n&&(t===n||t===null)},radio:function(e){return e.nodeName.toLowerCase()==="input"&&"radio"===e.type},checkbox:function(e){return e.nodeName.toLowerCase()==="input"&&"checkbox"===e.type},file:function(e){return e.nodeName.toLowerCase()==="input"&&"file"===e.type},password:function(e){return e.nodeName.toLowerCase()==="input"&&"password"===e.type},submit:function(e){var t=e.nodeName.toLowerCase();return(t==="input"||t==="button")&&"submit"===e.type},image:function(e){return e.nodeName.toLowerCase()==="input"&&"image"===e.type},reset:function(e){var t=e.nodeName.toLowerCase();return(t==="input"||t==="button")&&"reset"===e.type},button:function(e){var t=e.nodeName.toLowerCase();return t==="input"&&"button"===e.type||t==="button"},input:function(e){return/input|select|textarea|button/i.test(e.nodeName)},focus:function(e){return e===e.ownerDocument.activeElement}},setFilters:{first:function(e,t){return t===0},last:function(e,t,n,r){return t===r.length-1},even:function(e,t){return t%2===0},odd:function(e,t){return t%2===1},lt:function(e,t,n){return t<n[3]-0},gt:function(e,t,n){return t>n[3]-0},nth:function(e,t,n){return n[3]-0===t},eq:function(e,t,n){return n[3]-0===t}},filter:{PSEUDO:function(e,t,n,r){var i=t[1],s=c.filters[i];if(s)return s(e,n,t,r);if(i==="contains")return(e.textContent||e.innerText||l.getText([e])||"").indexOf(t[3])>=0;if(i==="not"){var o=t[3];for(var u=0,a=o.length;u<a;u++)if(o[u]===e)return!1;return!0}l.error(i)},CHILD:function(e,t){var n=t[1],r=e;switch(n){case"only":case"first":while(r=r.previousSibling)if(r.nodeType===1)return!1;if(n==="first")return!0;r=e;case"last":while(r=r.nextSibling)if(r.nodeType===1)return!1;return!0;case"nth":var i=t[2],s=t[3];if(i===1&&s===0)return!0;var o=t[0],u=e.parentNode;if(u&&(u.sizcache!==o||!e.nodeIndex)){var a=0;for(r=u.firstChild;r;r=r.nextSibling)r.nodeType===1&&(r.nodeIndex=++a);u.sizcache=o}var f=e.nodeIndex-s;return i===0?f===0:f%i===0&&f/i>=0}},ID:function(e,t){return e.nodeType===1&&e.getAttribute("id")===t},TAG:function(e,t){return t==="*"&&e.nodeType===1||e.nodeName.toLowerCase()===t},CLASS:function(e,t){return(" "+(e.className||e.getAttribute("class"))+" ").indexOf(t)>-1},ATTR:function(e,t){var n=t[1],r=c.attrHandle[n]?c.attrHandle[n](e):e[n]!=null?e[n]:e.getAttribute(n),i=r+"",s=t[2],o=t[4];return r==null?s==="!=":s==="="?i===o:s==="*="?i.indexOf(o)>=0:s==="~="?(" "+i+" ").indexOf(o)>=0:o?s==="!="?i!==o:s==="^="?i.indexOf(o)===0:s==="$="?i.substr(i.length-o.length)===o:s==="|="?i===o||i.substr(0,o.length+1)===o+"-":!1:i&&r!==!1},POS:function(e,t,n,r){var i=t[2],s=c.setFilters[i];if(s)return s(e,n,t,r)}}},h=c.match.POS,p=function(e,t){return"\\"+(t-0+1)};for(var d in c.match)c.match[d]=new RegExp(c.match[d].source+/(?![^\[]*\])(?![^\(]*\))/.source),c.leftMatch[d]=new RegExp(/(^(?:.|\r|\n)*?)/.source+c.match[d].source.replace(/\\(\d+)/g,p));var v=function(e,t){return e=Array.prototype.slice.call(e,0),t?(t.push.apply(t,e),t):e};try{Array.prototype.slice.call(n.documentElement.childNodes,0)[0].nodeType}catch(m){v=function(e,t){var n=0,r=t||[];if(i.call(e)==="[object Array]")Array.prototype.push.apply(r,e);else if(typeof e.length=="number")for(var s=e.length;n<s;n++)r.push(e[n]);else for(;e[n];n++)r.push(e[n]);return r}}var g,y;n.documentElement.compareDocumentPosition?g=function(e,t){return e===t?(o=!0,0):!e.compareDocumentPosition||!t.compareDocumentPosition?e.compareDocumentPosition?-1:1:e.compareDocumentPosition(t)&4?-1:1}:(g=function(e,t){if(e===t)return o=!0,0;if(e.sourceIndex&&t.sourceIndex)return e.sourceIndex-t.sourceIndex;var n,r,i=[],s=[],u=e.parentNode,a=t.parentNode,f=u;if(u===a)return y(e,t);if(!u)return-1;if(!a)return 1;while(f)i.unshift(f),f=f.parentNode;f=a;while(f)s.unshift(f),f=f.parentNode;n=i.length,r=s.length;for(var l=0;l<n&&l<r;l++)if(i[l]!==s[l])return y(i[l],s[l]);return l===n?y(e,s[l],-1):y(i[l],t,1)},y=function(e,t,n){if(e===t)return n;var r=e.nextSibling;while(r){if(r===t)return-1;r=r.nextSibling}return 1}),l.getText=function(e){var t="",n;for(var r=0;e[r];r++)n=e[r],n.nodeType===3||n.nodeType===4?t+=n.nodeValue:n.nodeType!==8&&(t+=l.getText(n.childNodes));return t},function(){var e=n.createElement("div"),r="script"+(new Date).getTime(),i=n.documentElement;e.innerHTML="<a name='"+r+"'/>",i.insertBefore(e,i.firstChild),n.getElementById(r)&&(c.find.ID=function(e,n,r){if(typeof n.getElementById!="undefined"&&!r){var i=n.getElementById(e[1]);return i?i.id===e[1]||typeof i.getAttributeNode!="undefined"&&i.getAttributeNode("id").nodeValue===e[1]?[i]:t:[]}},c.filter.ID=function(e,t){var n=typeof e.getAttributeNode!="undefined"&&e.getAttributeNode("id");return e.nodeType===1&&n&&n.nodeValue===t}),i.removeChild(e),i=e=null}(),function(){var e=n.createElement("div");e.appendChild(n.createComment("")),e.getElementsByTagName("*").length>0&&(c.find.TAG=function(e,t){var n=t.getElementsByTagName(e[1]);if(e[1]==="*"){var r=[];for(var i=0;n[i];i++)n[i].nodeType===1&&r.push(n[i]);n=r}return n}),e.innerHTML="<a href='#'></a>",e.firstChild&&typeof e.firstChild.getAttribute!="undefined"&&e.firstChild.getAttribute("href")!=="#"&&(c.attrHandle.href=function(e){return e.getAttribute("href",2)}),e=null}(),n.querySelectorAll&&function(){var e=l,t=n.createElement("div"),r="__sizzle__";t.innerHTML="<p class='TEST'></p>";if(t.querySelectorAll&&t.querySelectorAll(".TEST").length===0)return;l=function(t,i,s,o){i=i||n;if(!o&&!l.isXML(i)){var u=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(t);if(u&&(i.nodeType===1||i.nodeType===9)){if(u[1])return v(i.getElementsByTagName(t),s);if(u[2]&&c.find.CLASS&&i.getElementsByClassName)return v(i.getElementsByClassName(u[2]),s)}if(i.nodeType===9){if(t==="body"&&i.body)return v([i.body],s);if(u&&u[3]){var a=i.getElementById(u[3]);if(!a||!a.parentNode)return v([],s);if(a.id===u[3])return v([a],s)}try{return v(i.querySelectorAll(t),s)}catch(f){}}else if(i.nodeType===1&&i.nodeName.toLowerCase()!=="object"){var h=i,p=i.getAttribute("id"),d=p||r,m=i.parentNode,g=/^\s*[+~]/.test(t);p?d=d.replace(/'/g,"\\$&"):i.setAttribute("id",d),g&&m&&(i=i.parentNode);try{if(!g||m)return v(i.querySelectorAll("[id='"+d+"'] "+t),s)}catch(y){}finally{p||h.removeAttribute("id")}}}return e(t,i,s,o)};for(var i in e)l[i]=e[i];t=null}(),function(){var e=n.documentElement,t=e.matchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||e.msMatchesSelector;if(t){var r=!t.call(n.createElement("div"),"div"),i=!1;try{t.call(n.documentElement,"[test!='']:sizzle")}catch(s){i=!0}l.matchesSelector=function(e,n){n=n.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!l.isXML(e))try{if(i||!c.match.PSEUDO.test(n)&&!/!=/.test(n)){var s=t.call(e,n);if(s||!r||e.document&&e.document.nodeType!==11)return s}}catch(o){}return l(n,null,null,[e]).length>0}}}(),function(){var e=n.createElement("div");e.innerHTML="<div class='test e'></div><div class='test'></div>";if(!e.getElementsByClassName||e.getElementsByClassName("e").length===0)return;e.lastChild.className="e";if(e.getElementsByClassName("e").length===1)return;c.order.splice(1,0,"CLASS"),c.find.CLASS=function(e,t,n){if(typeof t.getElementsByClassName!="undefined"&&!n)return t.getElementsByClassName(e[1])},e=null}(),n.documentElement.contains?l.contains=function(e,t){return e!==t&&(e.contains?e.contains(t):!0)}:n.documentElement.compareDocumentPosition?l.contains=function(e,t){return!!(e.compareDocumentPosition(t)&16)}:l.contains=function(){return!1},l.isXML=function(e){var t=(e?e.ownerDocument||e:0).documentElement;return t?t.nodeName!=="HTML":!1};var E=function(e,t){var n,r=[],i="",s=t.nodeType?[t]:t;while(n=c.match.PSEUDO.exec(e))i+=n[0],e=e.replace(c.match.PSEUDO,"");e=c.relative[e]?e+"*":e;for(var o=0,u=s.length;o<u;o++)l(e,s[o],r);return l.filter(i,r)};s.find=l,s.expr=l.selectors,s.expr[":"]=s.expr.filters,s.unique=l.uniqueSort,s.text=l.getText,s.isXMLDoc=l.isXML,s.contains=l.contains}();var R=/Until$/,U=/^(?:parents|prevUntil|prevAll)/,z=/,/,W=/^.[^:#\[\.,]*$/,X=Array.prototype.slice,V=s.expr.match.POS,$={children:!0,contents:!0,next:!0,prev:!0};s.fn.extend({find:function(e){var t=this,n,r;if(typeof e!="string")return s(e).filter(function(){for(n=0,r=t.length;n<r;n++)if(s.contains(t[n],this))return!0});var i=this.pushStack("","find",e),o,u,a;for(n=0,r=this.length;n<r;n++){o=i.length,s.find(e,this[n],i);if(n>0)for(u=o;u<i.length;u++)for(a=0;a<o;a++)if(i[a]===i[u]){i.splice(u--,1);break}}return i},has:function(e){var t=s(e);return this.filter(function(){for(var e=0,n=t.length;e<n;e++)if(s.contains(this,t[e]))return!0})},not:function(e){return this.pushStack(K(this,e,!1),"not",e)},filter:function(e){return this.pushStack(K(this,e,!0),"filter",e)},is:function(e){return!!e&&(typeof e=="string"?s.filter(e,this).length>0:this.filter(e).length>0)},closest:function(e,t){var n=[],r,i,o=this[0];if(s.isArray(e)){var u,a,f={},l=1;if(o&&e.length){for(r=0,i=e.length;r<i;r++)a=e[r],f[a]||(f[a]=V.test(a)?s(a,t||this.context):a);while(o&&o.ownerDocument&&o!==t){for(a in f)u=f[a],(u.jquery?u.index(o)>-1:s(o).is(u))&&n.push({selector:a,elem:o,level:l});o=o.parentNode,l++}}return n}var c=V.test(e)||typeof e!="string"?s(e,t||this.context):0;for(r=0,i=this.length;r<i;r++){o=this[r];while(o){if(c?c.index(o)>-1:s.find.matchesSelector(o,e)){n.push(o);break}o=o.parentNode;if(!o||!o.ownerDocument||o===t||o.nodeType===11)break}}return n=n.length>1?s.unique(n):n,this.pushStack(n,"closest",e)},index:function(e){return!e||typeof e=="string"?s.inArray(this[0],e?s(e):this.parent().children()):s.inArray(e.jquery?e[0]:e,this)},add:function(e,t){var n=typeof e=="string"?s(e,t):s.makeArray(e&&e.nodeType?[e]:e),r=s.merge(this.get(),n);return this.pushStack(J(n[0])||J(r[0])?r:s.unique(r))},andSelf:function(){return this.add(this.prevObject)}}),s.each({parent:function(e){var t=e.parentNode;return t&&t.nodeType!==11?t:null},parents:function(e){return s.dir(e,"parentNode")},parentsUntil:function(e,t,n){return s.dir(e,"parentNode",n)},next:function(e){return s.nth(e,2,"nextSibling")},prev:function(e){return s.nth(e,2,"previousSibling")},nextAll:function(e){return s.dir(e,"nextSibling")},prevAll:function(e){return s.dir(e,"previousSibling")},nextUntil:function(e,t,n){return s.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return s.dir(e,"previousSibling",n)},siblings:function(e){return s.sibling(e.parentNode.firstChild,e)},children:function(e){return s.sibling(e.firstChild)},contents:function(e){return s.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:s.makeArray(e.childNodes)}},function(e,t){s.fn[e]=function(n,r){var i=s.map(this,t,n),o=X.call(arguments);return R.test(e)||(r=n),r&&typeof r=="string"&&(i=s.filter(r,i)),i=this.length>1&&!$[e]?s.unique(i):i,(this.length>1||z.test(r))&&U.test(e)&&(i=i.reverse()),this.pushStack(i,e,o.join(","))}}),s.extend({filter:function(e,t,n){return n&&(e=":not("+e+")"),t.length===1?s.find.matchesSelector(t[0],e)?[t[0]]:[]:s.find.matches(e,t)},dir:function(e,n,r){var i=[],o=e[n];while(o&&o.nodeType!==9&&(r===t||o.nodeType!==1||!s(o).is(r)))o.nodeType===1&&i.push(o),o=o[n];return i},nth:function(e,t,n,r){t=t||1;var i=0;for(;e;e=e[n])if(e.nodeType===1&&++i===t)break;return e},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)e.nodeType===1&&e!==t&&n.push(e);return n}});var Q=/ jQuery\d+="(?:\d+|null)"/g,G=/^\s+/,Y=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,Z=/<([\w:]+)/,et=/<tbody/i,tt=/<|&#?\w+;/,nt=/<(?:script|object|embed|option|style)/i,rt=/checked\s*(?:[^=]|=\s*.checked.)/i,it=/\/(java|ecma)script/i,st=/^\s*<!(?:\[CDATA\[|\-\-)/,ot={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]};ot.optgroup=ot.option,ot.tbody=ot.tfoot=ot.colgroup=ot.caption=ot.thead,ot.th=ot.td,s.support.htmlSerialize||(ot._default=[1,"div<div>","</div>"]),s.fn.extend({text:function(e){return s.isFunction(e)?this.each(function(t){var n=s(this);n.text(e.call(this,t,n.text()))}):typeof e!="object"&&e!==t?this.empty().append((this[0]&&this[0].ownerDocument||n).createTextNode(e)):s.text(this)},wrapAll:function(e){if(s.isFunction(e))return this.each(function(t){s(this).wrapAll(e.call(this,t))});if(this[0]){var t=s(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&e.firstChild.nodeType===1)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return s.isFunction(e)?this.each(function(t){s(this).wrapInner(e.call(this,t))}):this.each(function(){var t=s(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){return this.each(function(){s(this).wrapAll(e)})},unwrap:function(){return this.parent().each(function(){s.nodeName(this,"body")||s(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(e){this.nodeType===1&&this.appendChild(e)})},prepend:function(){return this.domManip(arguments,!0,function(e){this.nodeType===1&&this.insertBefore(e,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(e){this.parentNode.insertBefore(e,this)});if(arguments.length){var e=s(arguments[0]);return e.push.apply(e,this.toArray()),this.pushStack(e,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(e){this.parentNode.insertBefore(e,this.nextSibling)});if(arguments.length){var e=this.pushStack(this,"after",arguments);return e.push.apply(e,s(arguments[0]).toArray()),e}},remove:function(e,t){for(var n=0,r;(r=this[n])!=null;n++)if(!e||s.filter(e,[r]).length)!t&&r.nodeType===1&&(s.cleanData(r.getElementsByTagName("*")),s.cleanData([r])),r.parentNode&&r.parentNode.removeChild(r);return this},empty:function(){for(var e=0,t;(t=this[e])!=null;e++){t.nodeType===1&&s.cleanData(t.getElementsByTagName("*"));while(t.firstChild)t.removeChild(t.firstChild)}return this},clone:function(e,t){return e=e==null?!1:e,t=t==null?e:t,this.map(function(){return s.clone(this,e,t)})},html:function(e){if(e===t)return this[0]&&this[0].nodeType===1?this[0].innerHTML.replace(Q,""):null;if(typeof e=="string"&&!nt.test(e)&&(s.support.leadingWhitespace||!G.test(e))&&!ot[(Z.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(Y,"<$1></$2>");try{for(var n=0,r=this.length;n<r;n++)this[n].nodeType===1&&(s.cleanData(this[n].getElementsByTagName("*")),this[n].innerHTML=e)}catch(i){this.empty().append(e)}}else s.isFunction(e)?this.each(function(t){var n=s(this);n.html(e.call(this,t,n.html()))}):this.empty().append(e);return this},replaceWith:function(e){return this[0]&&this[0].parentNode?s.isFunction(e)?this.each(function(t){var n=s(this),r=n.html();n.replaceWith(e.call(this,t,r))}):(typeof e!="string"&&(e=s(e).detach()),this.each(function(){var t=this.nextSibling,n=this.parentNode;s(this).remove(),t?s(t).before(e):s(n).append(e)})):this.length?this.pushStack(s(s.isFunction(e)?e():e),"replaceWith",e):this},detach:function(e){return this.remove(e,!0)},domManip:function(e,n,r){var i,o,u,a,f=e[0],l=[];if(!s.support.checkClone&&arguments.length===3&&typeof f=="string"&&rt.test(f))return this.each(function(){s(this).domManip(e,n,r,!0)});if(s.isFunction(f))return this.each(function(i){var o=s(this);e[0]=f.call(this,i,n?o.html():t),o.domManip(e,n,r)});if(this[0]){a=f&&f.parentNode,s.support.parentNode&&a&&a.nodeType===11&&a.childNodes.length===this.length?i={fragment:a}:i=s.buildFragment(e,this,l),u=i.fragment,u.childNodes.length===1?o=u=u.firstChild:o=u.firstChild;if(o){n=n&&s.nodeName(o,"tr");for(var c=0,h=this.length,p=h-1;c<h;c++)r.call(n?ut(this[c],o):this[c],i.cacheable||h>1&&c<p?s.clone(u,!0,!0):u)}l.length&&s.each(l,pt)}return this}}),s.buildFragment=function(e,t,r){var i,o,u,a=t&&t[0]?t[0].ownerDocument||t[0]:n;return e.length===1&&typeof e[0]=="string"&&e[0].length<512&&a===n&&e[0].charAt(0)==="<"&&!nt.test(e[0])&&(s.support.checkClone||!rt.test(e[0]))&&(o=!0,u=s.fragments[e[0]],u&&u!==1&&(i=u)),i||(i=a.createDocumentFragment(),s.clean(e,a,i,r)),o&&(s.fragments[e[0]]=u?i:1),{fragment:i,cacheable:o}},s.fragments={},s.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){s.fn[e]=function(n){var r=[],i=s(n),o=this.length===1&&this[0].parentNode;if(o&&o.nodeType===11&&o.childNodes.length===1&&i.length===1)return i[t](this[0]),this;for(var u=0,a=i.length;u<a;u++){var f=(u>0?this.clone(!0):this).get();s(i[u])[t](f),r=r.concat(f)}return this.pushStack(r,e,i.selector)}}),s.extend({clone:function(e,t,n){var r=e.cloneNode(!0),i,o,u;if((!s.support.noCloneEvent||!s.support.noCloneChecked)&&(e.nodeType===1||e.nodeType===11)&&!s.isXMLDoc(e)){ft(e,r),i=lt(e),o=lt(r);for(u=0;i[u];++u)ft(i[u],o[u])}if(t){at(e,r);if(n){i=lt(e),o=lt(r);for(u=0;i[u];++u)at(i[u],o[u])}}return r},clean:function(e,t,r,i){var o;t=t||n,typeof t.createElement=="undefined"&&(t=t.ownerDocument||t[0]&&t[0].ownerDocument||n);var u=[],a;for(var f=0,l;(l=e[f])!=null;f++){typeof l=="number"&&
(l+="");if(!l)continue;if(typeof l=="string")if(!tt.test(l))l=t.createTextNode(l);else{l=l.replace(Y,"<$1></$2>");var c=(Z.exec(l)||["",""])[1].toLowerCase(),h=ot[c]||ot._default,p=h[0],d=t.createElement("div");d.innerHTML=h[1]+l+h[2];while(p--)d=d.lastChild;if(!s.support.tbody){var v=et.test(l),m=c==="table"&&!v?d.firstChild&&d.firstChild.childNodes:h[1]==="<table>"&&!v?d.childNodes:[];for(a=m.length-1;a>=0;--a)s.nodeName(m[a],"tbody")&&!m[a].childNodes.length&&m[a].parentNode.removeChild(m[a])}!s.support.leadingWhitespace&&G.test(l)&&d.insertBefore(t.createTextNode(G.exec(l)[0]),d.firstChild),l=d.childNodes}var g;if(!s.support.appendChecked)if(l[0]&&typeof (g=l.length)=="number")for(a=0;a<g;a++)ht(l[a]);else ht(l);l.nodeType?u.push(l):u=s.merge(u,l)}if(r){o=function(e){return!e.type||it.test(e.type)};for(f=0;u[f];f++)if(i&&s.nodeName(u[f],"script")&&(!u[f].type||u[f].type.toLowerCase()==="text/javascript"))i.push(u[f].parentNode?u[f].parentNode.removeChild(u[f]):u[f]);else{if(u[f].nodeType===1){var y=s.grep(u[f].getElementsByTagName("script"),o);u.splice.apply(u,[f+1,0].concat(y))}r.appendChild(u[f])}}return u},cleanData:function(e){var t,n,r=s.cache,i=s.expando,o=s.event.special,u=s.support.deleteExpando;for(var a=0,f;(f=e[a])!=null;a++){if(f.nodeName&&s.noData[f.nodeName.toLowerCase()])continue;n=f[s.expando];if(n){t=r[n]&&r[n][i];if(t&&t.events){for(var l in t.events)o[l]?s.event.remove(f,l):s.removeEvent(f,l,t.handle);t.handle&&(t.handle.elem=null)}u?delete f[s.expando]:f.removeAttribute&&f.removeAttribute(s.expando),delete r[n]}}}});var dt=/alpha\([^)]*\)/i,vt=/opacity=([^)]*)/,mt=/-([a-z])/ig,gt=/([A-Z]|^ms)/g,yt=/^-?\d+(?:px)?$/i,bt=/^-?\d/,wt=/^[+\-]=/,Et=/[^+\-\.\de]+/g,St={position:"absolute",visibility:"hidden",display:"block"},xt=["Left","Right"],Tt=["Top","Bottom"],Nt,Ct,kt,Lt=function(e,t){return t.toUpperCase()};s.fn.css=function(e,n){return arguments.length===2&&n===t?this:s.access(this,e,n,!0,function(e,n,r){return r!==t?s.style(e,n,r):s.css(e,n)})},s.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Nt(e,"opacity","opacity");return n===""?"1":n}return e.style.opacity}}},cssNumber:{zIndex:!0,fontWeight:!0,opacity:!0,zoom:!0,lineHeight:!0,widows:!0,orphans:!0},cssProps:{"float":s.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(!e||e.nodeType===3||e.nodeType===8||!e.style)return;var o,u,a=s.camelCase(n),f=e.style,l=s.cssHooks[a];n=s.cssProps[a]||a;if(r===t)return l&&"get"in l&&(o=l.get(e,!1,i))!==t?o:f[n];u=typeof r;if(u==="number"&&isNaN(r)||r==null)return;u==="string"&&wt.test(r)&&(r=+r.replace(Et,"")+parseFloat(s.css(e,n))),u==="number"&&!s.cssNumber[a]&&(r+="px");if(!l||!("set"in l)||(r=l.set(e,r))!==t)try{f[n]=r}catch(c){}},css:function(e,n,r){var i,o;n=s.camelCase(n),o=s.cssHooks[n],n=s.cssProps[n]||n,n==="cssFloat"&&(n="float");if(o&&"get"in o&&(i=o.get(e,!0,r))!==t)return i;if(Nt)return Nt(e,n)},swap:function(e,t,n){var r={};for(var i in t)r[i]=e.style[i],e.style[i]=t[i];n.call(e);for(i in t)e.style[i]=r[i]},camelCase:function(e){return e.replace(mt,Lt)}}),s.curCSS=s.css,s.each(["height","width"],function(e,t){s.cssHooks[t]={get:function(e,n,r){var i;if(n){e.offsetWidth!==0?i=At(e,t,r):s.swap(e,St,function(){i=At(e,t,r)});if(i<=0){i=Nt(e,t,t),i==="0px"&&kt&&(i=kt(e,t,t));if(i!=null)return i===""||i==="auto"?"0px":i}return i<0||i==null?(i=e.style[t],i===""||i==="auto"?"0px":i):typeof i=="string"?i:i+"px"}},set:function(e,t){if(!yt.test(t))return t;t=parseFloat(t);if(t>=0)return t+"px"}}}),s.support.opacity||(s.cssHooks.opacity={get:function(e,t){return vt.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?parseFloat(RegExp.$1)/100+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle;n.zoom=1;var i=s.isNaN(t)?"":"alpha(opacity="+t*100+")",o=r&&r.filter||n.filter||"";n.filter=dt.test(o)?o.replace(dt,i):o+" "+i}}),s(function(){s.support.reliableMarginRight||(s.cssHooks.marginRight={get:function(e,t){var n;return s.swap(e,{display:"inline-block"},function(){t?n=Nt(e,"margin-right","marginRight"):n=e.style.marginRight}),n}})}),n.defaultView&&n.defaultView.getComputedStyle&&(Ct=function(e,n){var r,i,o;n=n.replace(gt,"-$1").toLowerCase();if(!(i=e.ownerDocument.defaultView))return t;if(o=i.getComputedStyle(e,null))r=o.getPropertyValue(n),r===""&&!s.contains(e.ownerDocument.documentElement,e)&&(r=s.style(e,n));return r}),n.documentElement.currentStyle&&(kt=function(e,t){var n,r=e.currentStyle&&e.currentStyle[t],i=e.runtimeStyle&&e.runtimeStyle[t],s=e.style;return!yt.test(r)&&bt.test(r)&&(n=s.left,i&&(e.runtimeStyle.left=e.currentStyle.left),s.left=t==="fontSize"?"1em":r||0,r=s.pixelLeft+"px",s.left=n,i&&(e.runtimeStyle.left=i)),r===""?"auto":r}),Nt=Ct||kt,s.expr&&s.expr.filters&&(s.expr.filters.hidden=function(e){var t=e.offsetWidth,n=e.offsetHeight;return t===0&&n===0||!s.support.reliableHiddenOffsets&&(e.style.display||s.css(e,"display"))==="none"},s.expr.filters.visible=function(e){return!s.expr.filters.hidden(e)});var Ot=/%20/g,Mt=/\[\]$/,_t=/\r?\n/g,Dt=/#.*$/,Pt=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,Ht=/^(?:color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,Bt=/^(?:about|app|app\-storage|.+\-extension|file|widget):$/,jt=/^(?:GET|HEAD)$/,Ft=/^\/\//,It=/\?/,qt=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,Rt=/^(?:select|textarea)/i,Ut=/\s+/,zt=/([?&])_=[^&]*/,Wt=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,Xt=s.fn.load,Vt={},$t={},Jt,Kt;try{Jt=i.href}catch(Qt){Jt=n.createElement("a"),Jt.href="",Jt=Jt.href}Kt=Wt.exec(Jt.toLowerCase())||[],s.fn.extend({load:function(e,n,r){if(typeof e!="string"&&Xt)return Xt.apply(this,arguments);if(!this.length)return this;var i=e.indexOf(" ");if(i>=0){var o=e.slice(i,e.length);e=e.slice(0,i)}var u="GET";n&&(s.isFunction(n)?(r=n,n=t):typeof n=="object"&&(n=s.param(n,s.ajaxSettings.traditional),u="POST"));var a=this;return s.ajax({url:e,type:u,dataType:"html",data:n,complete:function(e,t,n){n=e.responseText,e.isResolved()&&(e.done(function(e){n=e}),a.html(o?s("<div>").append(n.replace(qt,"")).find(o):n)),r&&a.each(r,[n,t,e])}}),this},serialize:function(){return s.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?s.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||Rt.test(this.nodeName)||Ht.test(this.type))}).map(function(e,t){var n=s(this).val();return n==null?null:s.isArray(n)?s.map(n,function(e,n){return{name:t.name,value:e.replace(_t,"\r\n")}}):{name:t.name,value:n.replace(_t,"\r\n")}}).get()}}),s.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(e,t){s.fn[t]=function(e){return this.bind(t,e)}}),s.each(["get","post"],function(e,n){s[n]=function(e,r,i,o){return s.isFunction(r)&&(o=o||i,i=r,r=t),s.ajax({type:n,url:e,data:r,success:i,dataType:o})}}),s.extend({getScript:function(e,n){return s.get(e,t,n,"script")},getJSON:function(e,t,n){return s.get(e,t,n,"json")},ajaxSetup:function(e,t){t?s.extend(!0,e,s.ajaxSettings,t):(t=e,e=s.extend(!0,s.ajaxSettings,t));for(var n in{context:1,url:1})n in t?e[n]=t[n]:n in s.ajaxSettings&&(e[n]=s.ajaxSettings[n]);return e},ajaxSettings:{url:Jt,isLocal:Bt.test(Kt[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":"*/*"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":e.String,"text html":!0,"text json":s.parseJSON,"text xml":s.parseXML}},ajaxPrefilter:Gt(Vt),ajaxTransport:Gt($t),ajax:function(e,n){function S(e,n,c,h){if(y===2)return;y=2,m&&clearTimeout(m),v=t,p=h||"",E.readyState=e?4:0;var d,g,w,S=c?en(r,E,c):t,x,T;if(e>=200&&e<300||e===304){if(r.ifModified){if(x=E.getResponseHeader("Last-Modified"))s.lastModified[l]=x;if(T=E.getResponseHeader("Etag"))s.etag[l]=T}if(e===304)n="notmodified",d=!0;else try{g=tn(r,S),n="success",d=!0}catch(N){n="parsererror",w=N}}else{w=n;if(!n||e)n="error",e<0&&(e=0)}E.status=e,E.statusText=n,d?u.resolveWith(i,[g,n,E]):u.rejectWith(i,[E,n,w]),E.statusCode(f),f=t,b&&o.trigger("ajax"+(d?"Success":"Error"),[E,r,d?g:w]),a.resolveWith(i,[E,n]),b&&(o.trigger("ajaxComplete",[E,r]),--s.active||s.event.trigger("ajaxStop"))}typeof e=="object"&&(n=e,e=t),n=n||{};var r=s.ajaxSetup({},n),i=r.context||r,o=i!==r&&(i.nodeType||i instanceof s)?s(i):s.event,u=s.Deferred(),a=s._Deferred(),f=r.statusCode||{},l,c={},h={},p,d,v,m,g,y=0,b,w,E={readyState:0,setRequestHeader:function(e,t){if(!y){var n=e.toLowerCase();e=h[n]=h[n]||e,c[e]=t}return this},getAllResponseHeaders:function(){return y===2?p:null},getResponseHeader:function(e){var n;if(y===2){if(!d){d={};while(n=Pt.exec(p))d[n[1].toLowerCase()]=n[2]}n=d[e.toLowerCase()]}return n===t?null:n},overrideMimeType:function(e){return y||(r.mimeType=e),this},abort:function(e){return e=e||"abort",v&&v.abort(e),S(0,e),this}};u.promise(E),E.success=E.done,E.error=E.fail,E.complete=a.done,E.statusCode=function(e){if(e){var t;if(y<2)for(t in e)f[t]=[f[t],e[t]];else t=e[E.status],E.then(t,t)}return this},r.url=((e||r.url)+"").replace(Dt,"").replace(Ft,Kt[1]+"//"),r.dataTypes=s.trim(r.dataType||"*").toLowerCase().split(Ut),r.crossDomain==null&&(g=Wt.exec(r.url.toLowerCase()),r.crossDomain=!(!g||g[1]==Kt[1]&&g[2]==Kt[2]&&(g[3]||(g[1]==="http:"?80:443))==(Kt[3]||(Kt[1]==="http:"?80:443)))),r.data&&r.processData&&typeof r.data!="string"&&(r.data=s.param(r.data,r.traditional)),Yt(Vt,r,n,E);if(y===2)return!1;b=r.global,r.type=r.type.toUpperCase(),r.hasContent=!jt.test(r.type),b&&s.active++===0&&s.event.trigger("ajaxStart");if(!r.hasContent){r.data&&(r.url+=(It.test(r.url)?"&":"?")+r.data),l=r.url;if(r.cache===!1){var x=s.now(),T=r.url.replace(zt,"$1_="+x);r.url=T+(T===r.url?(It.test(r.url)?"&":"?")+"_="+x:"")}}(r.data&&r.hasContent&&r.contentType!==!1||n.contentType)&&E.setRequestHeader("Content-Type",r.contentType),r.ifModified&&(l=l||r.url,s.lastModified[l]&&E.setRequestHeader("If-Modified-Since",s.lastModified[l]),s.etag[l]&&E.setRequestHeader("If-None-Match",s.etag[l])),E.setRequestHeader("Accept",r.dataTypes[0]&&r.accepts[r.dataTypes[0]]?r.accepts[r.dataTypes[0]]+(r.dataTypes[0]!=="*"?", */*; q=0.01":""):r.accepts["*"]);for(w in r.headers)E.setRequestHeader(w,r.headers[w]);if(!r.beforeSend||r.beforeSend.call(i,E,r)!==!1&&y!==2){for(w in{success:1,error:1,complete:1})E[w](r[w]);v=Yt($t,r,n,E);if(!v)S(-1,"No Transport");else{E.readyState=1,b&&o.trigger("ajaxSend",[E,r]),r.async&&r.timeout>0&&(m=setTimeout(function(){E.abort("timeout")},r.timeout));try{y=1,v.send(c,S)}catch(N){status<2?S(-1,N):s.error(N)}}return E}return E.abort(),!1},param:function(e,n){var r=[],i=function(e,t){t=s.isFunction(t)?t():t,r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};n===t&&(n=s.ajaxSettings.traditional);if(s.isArray(e)||e.jquery&&!s.isPlainObject(e))s.each(e,function(){i(this.name,this.value)});else for(var o in e)Zt(o,e[o],n,i);return r.join("&").replace(Ot,"+")}}),s.extend({active:0,lastModified:{},etag:{}});var nn=s.now(),rn=/(\=)\?(&|$)|\?\?/i;s.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return s.expando+"_"+nn++}}),s.ajaxPrefilter("json jsonp",function(t,n,r){var i=t.contentType==="application/x-www-form-urlencoded"&&typeof t.data=="string";if(t.dataTypes[0]==="jsonp"||t.jsonp!==!1&&(rn.test(t.url)||i&&rn.test(t.data))){var o,u=t.jsonpCallback=s.isFunction(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,a=e[u],f=t.url,l=t.data,c="$1"+u+"$2";return t.jsonp!==!1&&(f=f.replace(rn,c),t.url===f&&(i&&(l=l.replace(rn,c)),t.data===l&&(f+=(/\?/.test(f)?"&":"?")+t.jsonp+"="+u))),t.url=f,t.data=l,e[u]=function(e){o=[e]},r.always(function(){e[u]=a,o&&s.isFunction(a)&&e[u](o[0])}),t.converters["script json"]=function(){return o||s.error(u+" was not called"),o[0]},t.dataTypes[0]="json","script"}}),s.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(e){return s.globalEval(e),e}}}),s.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),s.ajaxTransport("script",function(e){if(e.crossDomain){var r,i=n.head||n.getElementsByTagName("head")[0]||n.documentElement;return{send:function(s,o){r=n.createElement("script"),r.async="async",e.scriptCharset&&(r.charset=e.scriptCharset),r.src=e.url,r.onload=r.onreadystatechange=function(e,n){if(n||!r.readyState||/loaded|complete/.test(r.readyState))r.onload=r.onreadystatechange=null,i&&r.parentNode&&i.removeChild(r),r=t,n||o(200,"success")},i.insertBefore(r,i.firstChild)},abort:function(){r&&r.onload(0,1)}}}});var sn=e.ActiveXObject?function(){for(var e in un)un[e](0,1)}:!1,on=0,un;s.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&an()||fn()}:an,function(e){s.extend(s.support,{ajax:!!e,cors:!!e&&"withCredentials"in e})}(s.ajaxSettings.xhr()),s.support.ajax&&s.ajaxTransport(function(n){if(!n.crossDomain||s.support.cors){var r;return{send:function(i,o){var u=n.xhr(),a,f;n.username?u.open(n.type,n.url,n.async,n.username,n.password):u.open(n.type,n.url,n.async);if(n.xhrFields)for(f in n.xhrFields)u[f]=n.xhrFields[f];n.mimeType&&u.overrideMimeType&&u.overrideMimeType(n.mimeType),!n.crossDomain&&!i["X-Requested-With"]&&(i["X-Requested-With"]="XMLHttpRequest");try{for(f in i)u.setRequestHeader(f,i[f])}catch(l){}u.send(n.hasContent&&n.data||null),r=function(e,i){var f,l,c,h,p;try{if(r&&(i||u.readyState===4)){r=t,a&&(u.onreadystatechange=s.noop,sn&&delete un[a]);if(i)u.readyState!==4&&u.abort();else{f=u.status,c=u.getAllResponseHeaders(),h={},p=u.responseXML,p&&p.documentElement&&(h.xml=p),h.text=u.responseText;try{l=u.statusText}catch(d){l=""}!f&&n.isLocal&&!n.crossDomain?f=h.text?200:404:f===1223&&(f=204)}}}catch(v){i||o(-1,v)}h&&o(f,l,h,c)},!n.async||u.readyState===4?r():(a=++on,sn&&(un||(un={},s(e).unload(sn)),un[a]=r),u.onreadystatechange=r)},abort:function(){r&&r(0,1)}}}});var ln={},cn,hn,pn=/^(?:toggle|show|hide)$/,dn=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,vn,mn=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]],gn,yn=e.webkitRequestAnimationFrame||e.mozRequestAnimationFrame||e.oRequestAnimationFrame;s.fn.extend({show:function(e,t,n){var r,i;if(e||e===0)return this.animate(En("show",3),e,t,n);for(var o=0,u=this.length;o<u;o++)r=this[o],r.style&&(i=r.style.display,!s._data(r,"olddisplay")&&i==="none"&&(i=r.style.display=""),i===""&&s.css(r,"display")==="none"&&s._data(r,"olddisplay",Sn(r.nodeName)));for(o=0;o<u;o++){r=this[o];if(r.style){i=r.style.display;if(i===""||i==="none")r.style.display=s._data(r,"olddisplay")||""}}return this},hide:function(e,t,n){if(e||e===0)return this.animate(En("hide",3),e,t,n);for(var r=0,i=this.length;r<i;r++)if(this[r].style){var o=s.css(this[r],"display");o!=="none"&&!s._data(this[r],"olddisplay")&&s._data(this[r],"olddisplay",o)}for(r=0;r<i;r++)this[r].style&&(this[r].style.display="none");return this},_toggle:s.fn.toggle,toggle:function(e,t,n){var r=typeof e=="boolean";return s.isFunction(e)&&s.isFunction(t)?this._toggle.apply(this,arguments):e==null||r?this.each(function(){var t=r?e:s(this).is(":hidden");s(this)[t?"show":"hide"]()}):this.animate(En("toggle",3),e,t,n),this},fadeTo:function(e,t,n,r){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=s.speed(t,n,r);return s.isEmptyObject(e)?this.each(i.complete,[!1]):(e=s.extend({},e),this[i.queue===!1?"each":"queue"](function(){i.queue===!1&&s._mark(this);var t=s.extend({},i),n=this.nodeType===1,r=n&&s(this).is(":hidden"),o,u,a,f,l,c,h,p,d;t.animatedProperties={};for(a in e){o=s.camelCase(a),a!==o&&(e[o]=e[a],delete e[a]),u=e[o],s.isArray(u)?(t.animatedProperties[o]=u[1],u=e[o]=u[0]):t.animatedProperties[o]=t.specialEasing&&t.specialEasing[o]||t.easing||"swing";if(u==="hide"&&r||u==="show"&&!r)return t.complete.call(this);n&&(o==="height"||o==="width")&&(t.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY],s.css(this,"display")==="inline"&&s.css(this,"float")==="none"&&(s.support.inlineBlockNeedsLayout?(f=Sn(this.nodeName),f==="inline"?this.style.display="inline-block":(this.style.display="inline",this.style.zoom=1)):this.style.display="inline-block"))}t.overflow!=null&&(this.style.overflow="hidden");for(a in e)l=new s.fx(this,t,a),u=e[a],pn.test(u)?l[u==="toggle"?r?"show":"hide":u]():(c=dn.exec(u),h=l.cur(),c?(p=parseFloat(c[2]),d=c[3]||(s.cssNumber[a]?"":"px"),d!=="px"&&(s.style(this,a,(p||1)+d),h=(p||1)/l.cur()*h,s.style(this,a,h+d)),c[1]&&(p=(c[1]==="-="?-1:1)*p+h),l.custom(h,p,d)):l.custom(h,u,""));return!0}))},stop:function(e,t){return e&&this.queue([]),this.each(function(){var e=s.timers,n=e.length;t||s._unmark(!0,this);while(n--)e[n].elem===this&&(t&&e[n](!0),e.splice(n,1))}),t||this.dequeue(),this}}),s.each({slideDown:En("show",1),slideUp:En("hide",1),slideToggle:En("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){s.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),s.extend({speed:function(e,t,n){var r=e&&typeof e=="object"?s.extend({},e):{complete:n||!n&&t||s.isFunction(e)&&e,duration:e,easing:n&&t||t&&!s.isFunction(t)&&t};return r.duration=s.fx.off?0:typeof r.duration=="number"?r.duration:r.duration in s.fx.speeds?s.fx.speeds[r.duration]:s.fx.speeds._default,r.old=r.complete,r.complete=function(e){r.queue!==!1?s.dequeue(this):e!==!1&&s._unmark(this),s.isFunction(r.old)&&r.old.call(this)},r},easing:{linear:function(e,t,n,r){return n+r*e},swing:function(e,t,n,r){return(-Math.cos(e*Math.PI)/2+.5)*r+n}},timers:[],fx:function(e,t,n){this.options=t,this.elem=e,this.prop=n,t.orig=t.orig||{}}}),s.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this),(s.fx.step[this.prop]||s.fx.step._default)(this)},cur:function(){if(this.elem[this.prop]==null||!!this.elem.style&&this.elem.style[this.prop]!=null){var e,t=s.css(this.elem,this.prop);return isNaN(e=parseFloat(t))?!t||t==="auto"?0:t:e}return this.elem[this.prop]},custom:function(e,t,n){function u(e){return r.step(e)}var r=this,i=s.fx,o;this.startTime=gn||bn(),this.start=e,this.end=t,this.unit=n||this.unit||(s.cssNumber[this.prop]?"":"px"),this.now=this.start,this.pos=this.state=0,u.elem=this.elem,u()&&s.timers.push(u)&&!vn&&(yn?(vn=1,o=function(){vn&&(yn(o),i.tick())},yn(o)):vn=setInterval(i.tick,i.interval))},show:function(){this.options.orig[this.prop]=s.style(this.elem,this.prop),this.options.show=!0,this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur()),s(this.elem).show()},hide:function(){this.options.orig[this.prop]=s.style(this.elem,this.prop),this.options.hide=!0,this.custom(this.cur(),0)},step:function(e){var t=gn||bn(),n=!0,r=this.elem,i=this.options,o,u;if(e||t>=i.duration+this.startTime){this.now=this.end,this.pos=this.state=1,this.update(),i.animatedProperties[this.prop]=!0;for(o in i.animatedProperties)i.animatedProperties[o]!==!0&&(n=!1);if(n){i.overflow!=null&&!s.support.shrinkWrapBlocks&&s.each(["","X","Y"],function(e,t){r.style["overflow"+t]=i.overflow[e]}),i.hide&&s(r).hide();if(i.hide||i.show)for(var a in i.animatedProperties)s.style(r,a,i.orig[a]);i.complete.call(r)}return!1}return i.duration==Infinity?this.now=t:(u=t-this.startTime,this.state=u/i.duration,this.pos=s.easing[i.animatedProperties[this.prop]](this.state,u,0,1,i.duration),this.now=this.start+(this.end-this.start)*this.pos),this.update(),!0}},s.extend(s.fx,{tick:function(){for(var e=s.timers,t=0;t<e.length;++t)e[t]()||e.splice(t--,1);e.length||s.fx.stop()},interval:13,stop:function(){clearInterval(vn),vn=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(e){s.style(e.elem,"opacity",e.now)},_default:function(e){e.elem.style&&e.elem.style[e.prop]!=null?e.elem.style[e.prop]=(e.prop==="width"||e.prop==="height"?Math.max(0,e.now):e.now)+e.unit:e.elem[e.prop]=e.now}}}),s.expr&&s.expr.filters&&(s.expr.filters.animated=function(e){return s.grep(s.timers,function(t){return e===t.elem}).length});var xn=/^t(?:able|d|h)$/i,Tn=/^(?:body|html)$/i;"getBoundingClientRect"in n.documentElement?s.fn.offset=function(e){var t=this[0],n;if(e)return this.each(function(t){s.offset.setOffset(this,e,t)});if(!t||!t.ownerDocument)return null;if(t===t.ownerDocument.body)return s.offset.bodyOffset(t);try{n=t.getBoundingClientRect()}catch(r){}var i=t.ownerDocument,o=i.documentElement;if(!n||!s.contains(o,t))return n?{top:n.top,left:n.left}:{top:0,left:0};var u=i.body,a=Nn(i),f=o.clientTop||u.clientTop||0,l=o.clientLeft||u.clientLeft||0,c=a.pageYOffset||s.support.boxModel&&o.scrollTop||u.scrollTop,h=a.pageXOffset||s.support.boxModel&&o.scrollLeft||u.scrollLeft,p=n.top+c-f,d=n.left+h-l;return{top:p,left:d}}:s.fn.offset=function(e){var t=this[0];if(e)return this.each(function(t){s.offset.setOffset(this,e,t)});if(!t||!t.ownerDocument)return null;if(t===t.ownerDocument.body)return s.offset.bodyOffset(t);s.offset.initialize();var n,r=t.offsetParent,i=t,o=t.ownerDocument,u=o.documentElement,a=o.body,f=o.defaultView,l=f?f.getComputedStyle(t,null):t.currentStyle,c=t.offsetTop,h=t.offsetLeft;while((t=t.parentNode)&&t!==a&&t!==u){if(s.offset.supportsFixedPosition&&l.position==="fixed")break;n=f?f.getComputedStyle(t,null):t.currentStyle,c-=t.scrollTop,h-=t.scrollLeft,t===r&&(c+=t.offsetTop,h+=t.offsetLeft,s.offset.doesNotAddBorder&&(!s.offset.doesAddBorderForTableAndCells||!xn.test(t.nodeName))&&(c+=parseFloat(n.borderTopWidth)||0,h+=parseFloat(n.borderLeftWidth)||0),i=r,r=t.offsetParent),s.offset.subtractsBorderForOverflowNotVisible&&n.overflow!=="visible"&&(c+=parseFloat(n.borderTopWidth)||0,h+=parseFloat(n.borderLeftWidth)||0),l=n}if(l.position==="relative"||l.position==="static")c+=a.offsetTop,h+=a.offsetLeft;return s.offset.supportsFixedPosition&&l.position==="fixed"&&(c+=Math.max(u.scrollTop,a.scrollTop),h+=Math.max(u.scrollLeft,a.scrollLeft)),{top:c,left:h}},s.offset={initialize:function(){var e=n.body,t=n.createElement("div"),r,i,o,u,a=parseFloat(s.css(e,"marginTop"))||0,f="<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";s.extend(t.style,{position:"absolute",top:0,left:0,margin:0,border:0,width:"1px",height:"1px",visibility:"hidden"}),t.innerHTML=f,e.insertBefore(t,e.firstChild),r=t.firstChild,i=r.firstChild,u=r.nextSibling.firstChild.firstChild,this.doesNotAddBorder=i.offsetTop!==5,this.doesAddBorderForTableAndCells=u.offsetTop===5,i.style.position="fixed",i.style.top="20px",this.supportsFixedPosition=i.offsetTop===20||i.offsetTop===15,i.style.position=i.style.top="",r.style.overflow="hidden",r.style.position="relative",this.subtractsBorderForOverflowNotVisible=i.offsetTop===-5,this.doesNotIncludeMarginInBodyOffset=e.offsetTop!==a,e.removeChild(t),s.offset.initialize=s.noop},bodyOffset:function(e){var t=e.offsetTop,n=e.offsetLeft;return s.offset.initialize(),s.offset.doesNotIncludeMarginInBodyOffset&&(t+=parseFloat(s.css(e,"marginTop"))||0,n+=parseFloat(s.css(e,"marginLeft"))||0),{top:t,left:n}},setOffset:function(e,t,n){var r=s.css(e,"position");r==="static"&&(e.style.position="relative");var i=s(e),o=i.offset(),u=s.css(e,"top"),a=s.css(e,"left"),f=(r==="absolute"||r==="fixed")&&s.inArray("auto",[u,a])>-1,l={},c={},h,p;f?(c=i.position(),h=c.top,p=c.left):(h=parseFloat(u)||0,p=parseFloat(a)||0),s.isFunction(t)&&(t=t.call(e,n,o)),t.top!=null&&(l.top=t.top-o.top+h),t.left!=null&&(l.left=t.left-o.left+p),"using"in t?t.using.call(e,l):i.css(l)}},s.fn.extend({position:function(){if(!this[0])return null;var e=this[0],t=this.offsetParent(),n=this.offset(),r=Tn.test(t[0].nodeName)?{top:0,left:0}:t.offset();return n.top-=parseFloat(s.css(e,"marginTop"))||0,n.left-=parseFloat(s.css(e,"marginLeft"))||0,r.top+=parseFloat(s.css(t[0],"borderTopWidth"))||0,r.left+=parseFloat(s.css(t[0],"borderLeftWidth"))||0,{top:n.top-r.top,left:n.left-r.left}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||n.body;while(e&&!Tn.test(e.nodeName)&&s.css(e,"position")==="static")e=e.offsetParent;return e})}}),s.each(["Left","Top"],function(e,n){var r="scroll"+n;s.fn[r]=function(n){var i,o;return n===t?(i=this[0],i?(o=Nn(i),o?"pageXOffset"in o?o[e?"pageYOffset":"pageXOffset"]:s.support.boxModel&&o.document.documentElement[r]||o.document.body[r]:i[r]):null):this.each(function(){o=Nn(this),o?o.scrollTo(e?s(o).scrollLeft():n,e?n:s(o).scrollTop()):this[r]=n})}}),s.each(["Height","Width"],function(e,n){var r=n.toLowerCase();s.fn["inner"+n]=function(){return this[0]?parseFloat(s.css(this[0],r,"padding")):null},s.fn["outer"+n]=function(e){return this[0]?parseFloat(s.css(this[0],r,e?"margin":"border")):null},s.fn[r]=function(e){var i=this[0];if(!i)return e==null?null:this;if(s.isFunction(e))return this.each(function(t){var n=s(this);n[r](e.call(this,t,n[r]()))});if(s.isWindow(i)){var o=i.document.documentElement["client"+n];return i.document.compatMode==="CSS1Compat"&&o||i.document.body["client"+n]||o}if(i.nodeType===9)return Math.max(i.documentElement["client"+n],i.body["scroll"+n],i.documentElement["scroll"+n],i.body["offset"+n],i.documentElement["offset"+n]);if(e===t){var u=s.css(i,r),a=parseFloat(u);return s.isNaN(a)?u:a}return this.css(r,typeof e=="string"?e:e+"px")}}),e.jQuery=e.$=s})(window);/*!
 * jQuery UI 1.8.13
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI
 */
(function(a,d){function c(g,e){var i=g.nodeName.toLowerCase();if("area"===i){e=g.parentNode;i=e.name;if(!g.href||!i||e.nodeName.toLowerCase()!=="map")return false;g=a("img[usemap=#"+i+"]")[0];return!!g&&f(g)}return(/input|select|textarea|button|object/.test(i)?!g.disabled:"a"==i?g.href||e:e)&&f(g)}function f(g){return!a(g).parents().andSelf().filter(function(){return a.curCSS(this,"visibility")==="hidden"||a.expr.filters.hidden(this)}).length}a.ui=a.ui||{};if(!a.ui.version){a.extend(a.ui,{version:"1.8.13",
keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91}});a.fn.extend({_focus:a.fn.focus,focus:function(g,e){return typeof g==="number"?this.each(function(){var i=this;setTimeout(function(){a(i).focus();
e&&e.call(i)},g)}):this._focus.apply(this,arguments)},scrollParent:function(){var g;g=a.browser.msie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?this.parents().filter(function(){return/(relative|absolute|fixed)/.test(a.curCSS(this,"position",1))&&/(auto|scroll)/.test(a.curCSS(this,"overflow",1)+a.curCSS(this,"overflow-y",1)+a.curCSS(this,"overflow-x",1))}).eq(0):this.parents().filter(function(){return/(auto|scroll)/.test(a.curCSS(this,"overflow",1)+a.curCSS(this,
"overflow-y",1)+a.curCSS(this,"overflow-x",1))}).eq(0);return/fixed/.test(this.css("position"))||!g.length?a(document):g},zIndex:function(g){if(g!==d)return this.css("zIndex",g);if(this.length){g=a(this[0]);for(var e;g.length&&g[0]!==document;){e=g.css("position");if(e==="absolute"||e==="relative"||e==="fixed"){e=parseInt(g.css("zIndex"),10);if(!isNaN(e)&&e!==0)return e}g=g.parent()}}return 0},disableSelection:function(){return this.bind((a.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",
function(g){g.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}});a.each(["Width","Height"],function(g,e){function i(l,o,n,k){a.each(b,function(){o-=parseFloat(a.curCSS(l,"padding"+this,true))||0;if(n)o-=parseFloat(a.curCSS(l,"border"+this+"Width",true))||0;if(k)o-=parseFloat(a.curCSS(l,"margin"+this,true))||0});return o}var b=e==="Width"?["Left","Right"]:["Top","Bottom"],h=e.toLowerCase(),j={innerWidth:a.fn.innerWidth,innerHeight:a.fn.innerHeight,outerWidth:a.fn.outerWidth,
outerHeight:a.fn.outerHeight};a.fn["inner"+e]=function(l){if(l===d)return j["inner"+e].call(this);return this.each(function(){a(this).css(h,i(this,l)+"px")})};a.fn["outer"+e]=function(l,o){if(typeof l!=="number")return j["outer"+e].call(this,l);return this.each(function(){a(this).css(h,i(this,l,true,o)+"px")})}});a.extend(a.expr[":"],{data:function(g,e,i){return!!a.data(g,i[3])},focusable:function(g){return c(g,!isNaN(a.attr(g,"tabindex")))},tabbable:function(g){var e=a.attr(g,"tabindex"),i=isNaN(e);
return(i||e>=0)&&c(g,!i)}});a(function(){var g=document.body,e=g.appendChild(e=document.createElement("div"));a.extend(e.style,{minHeight:"100px",height:"auto",padding:0,borderWidth:0});a.support.minHeight=e.offsetHeight===100;a.support.selectstart="onselectstart"in e;g.removeChild(e).style.display="none"});a.extend(a.ui,{plugin:{add:function(g,e,i){g=a.ui[g].prototype;for(var b in i){g.plugins[b]=g.plugins[b]||[];g.plugins[b].push([e,i[b]])}},call:function(g,e,i){if((e=g.plugins[e])&&g.element[0].parentNode)for(var b=
0;b<e.length;b++)g.options[e[b][0]]&&e[b][1].apply(g.element,i)}},contains:function(g,e){return document.compareDocumentPosition?g.compareDocumentPosition(e)&16:g!==e&&g.contains(e)},hasScroll:function(g,e){if(a(g).css("overflow")==="hidden")return false;e=e&&e==="left"?"scrollLeft":"scrollTop";var i=false;if(g[e]>0)return true;g[e]=1;i=g[e]>0;g[e]=0;return i},isOverAxis:function(g,e,i){return g>e&&g<e+i},isOver:function(g,e,i,b,h,j){return a.ui.isOverAxis(g,i,h)&&a.ui.isOverAxis(e,b,j)}})}})(jQuery);
(function(a,d){if(a.cleanData){var c=a.cleanData;a.cleanData=function(g){for(var e=0,i;(i=g[e])!=null;e++)a(i).triggerHandler("remove");c(g)}}else{var f=a.fn.remove;a.fn.remove=function(g,e){return this.each(function(){if(!e)if(!g||a.filter(g,[this]).length)a("*",this).add([this]).each(function(){a(this).triggerHandler("remove")});return f.call(a(this),g,e)})}}a.widget=function(g,e,i){var b=g.split(".")[0],h;g=g.split(".")[1];h=b+"-"+g;if(!i){i=e;e=a.Widget}a.expr[":"][h]=function(j){return!!a.data(j,
g)};a[b]=a[b]||{};a[b][g]=function(j,l){arguments.length&&this._createWidget(j,l)};e=new e;e.options=a.extend(true,{},e.options);a[b][g].prototype=a.extend(true,e,{namespace:b,widgetName:g,widgetEventPrefix:a[b][g].prototype.widgetEventPrefix||g,widgetBaseClass:h},i);a.widget.bridge(g,a[b][g])};a.widget.bridge=function(g,e){a.fn[g]=function(i){var b=typeof i==="string",h=Array.prototype.slice.call(arguments,1),j=this;i=!b&&h.length?a.extend.apply(null,[true,i].concat(h)):i;if(b&&i.charAt(0)==="_")return j;
b?this.each(function(){var l=a.data(this,g),o=l&&a.isFunction(l[i])?l[i].apply(l,h):l;if(o!==l&&o!==d){j=o;return false}}):this.each(function(){var l=a.data(this,g);l?l.option(i||{})._init():a.data(this,g,new e(i,this))});return j}};a.Widget=function(g,e){arguments.length&&this._createWidget(g,e)};a.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",options:{disabled:false},_createWidget:function(g,e){a.data(e,this.widgetName,this);this.element=a(e);this.options=a.extend(true,{},this.options,
this._getCreateOptions(),g);var i=this;this.element.bind("remove."+this.widgetName,function(){i.destroy()});this._create();this._trigger("create");this._init()},_getCreateOptions:function(){return a.metadata&&a.metadata.get(this.element[0])[this.widgetName]},_create:function(){},_init:function(){},destroy:function(){this.element.unbind("."+this.widgetName).removeData(this.widgetName);this.widget().unbind("."+this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass+"-disabled ui-state-disabled")},
widget:function(){return this.element},option:function(g,e){var i=g;if(arguments.length===0)return a.extend({},this.options);if(typeof g==="string"){if(e===d)return this.options[g];i={};i[g]=e}this._setOptions(i);return this},_setOptions:function(g){var e=this;a.each(g,function(i,b){e._setOption(i,b)});return this},_setOption:function(g,e){this.options[g]=e;if(g==="disabled")this.widget()[e?"addClass":"removeClass"](this.widgetBaseClass+"-disabled ui-state-disabled").attr("aria-disabled",e);return this},
enable:function(){return this._setOption("disabled",false)},disable:function(){return this._setOption("disabled",true)},_trigger:function(g,e,i){var b=this.options[g];e=a.Event(e);e.type=(g===this.widgetEventPrefix?g:this.widgetEventPrefix+g).toLowerCase();i=i||{};if(e.originalEvent){g=a.event.props.length;for(var h;g;){h=a.event.props[--g];e[h]=e.originalEvent[h]}}this.element.trigger(e,i);return!(a.isFunction(b)&&b.call(this.element[0],e,i)===false||e.isDefaultPrevented())}}})(jQuery);
(function(a){var d=false;a(document).mousedown(function(){d=false});a.widget("ui.mouse",{options:{cancel:":input,option",distance:1,delay:0},_mouseInit:function(){var c=this;this.element.bind("mousedown."+this.widgetName,function(f){return c._mouseDown(f)}).bind("click."+this.widgetName,function(f){if(true===a.data(f.target,c.widgetName+".preventClickEvent")){a.removeData(f.target,c.widgetName+".preventClickEvent");f.stopImmediatePropagation();return false}});this.started=false},_mouseDestroy:function(){this.element.unbind("."+
this.widgetName)},_mouseDown:function(c){if(!d){this._mouseStarted&&this._mouseUp(c);this._mouseDownEvent=c;var f=this,g=c.which==1,e=typeof this.options.cancel=="string"?a(c.target).parents().add(c.target).filter(this.options.cancel).length:false;if(!g||e||!this._mouseCapture(c))return true;this.mouseDelayMet=!this.options.delay;if(!this.mouseDelayMet)this._mouseDelayTimer=setTimeout(function(){f.mouseDelayMet=true},this.options.delay);if(this._mouseDistanceMet(c)&&this._mouseDelayMet(c)){this._mouseStarted=
this._mouseStart(c)!==false;if(!this._mouseStarted){c.preventDefault();return true}}true===a.data(c.target,this.widgetName+".preventClickEvent")&&a.removeData(c.target,this.widgetName+".preventClickEvent");this._mouseMoveDelegate=function(i){return f._mouseMove(i)};this._mouseUpDelegate=function(i){return f._mouseUp(i)};a(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate);c.preventDefault();return d=true}},_mouseMove:function(c){if(a.browser.msie&&
!(document.documentMode>=9)&&!c.button)return this._mouseUp(c);if(this._mouseStarted){this._mouseDrag(c);return c.preventDefault()}if(this._mouseDistanceMet(c)&&this._mouseDelayMet(c))(this._mouseStarted=this._mouseStart(this._mouseDownEvent,c)!==false)?this._mouseDrag(c):this._mouseUp(c);return!this._mouseStarted},_mouseUp:function(c){a(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate);if(this._mouseStarted){this._mouseStarted=
false;c.target==this._mouseDownEvent.target&&a.data(c.target,this.widgetName+".preventClickEvent",true);this._mouseStop(c)}return false},_mouseDistanceMet:function(c){return Math.max(Math.abs(this._mouseDownEvent.pageX-c.pageX),Math.abs(this._mouseDownEvent.pageY-c.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return true}})})(jQuery);
(function(a){a.widget("ui.draggable",a.ui.mouse,{widgetEventPrefix:"drag",options:{addClasses:true,appendTo:"parent",axis:false,connectToSortable:false,containment:false,cursor:"auto",cursorAt:false,grid:false,handle:false,helper:"original",iframeFix:false,opacity:false,refreshPositions:false,revert:false,revertDuration:500,scope:"default",scroll:true,scrollSensitivity:20,scrollSpeed:20,snap:false,snapMode:"both",snapTolerance:20,stack:false,zIndex:false},_create:function(){if(this.options.helper==
"original"&&!/^(?:r|a|f)/.test(this.element.css("position")))this.element[0].style.position="relative";this.options.addClasses&&this.element.addClass("ui-draggable");this.options.disabled&&this.element.addClass("ui-draggable-disabled");this._mouseInit()},destroy:function(){if(this.element.data("draggable")){this.element.removeData("draggable").unbind(".draggable").removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled");this._mouseDestroy();return this}},_mouseCapture:function(d){var c=
this.options;if(this.helper||c.disabled||a(d.target).is(".ui-resizable-handle"))return false;this.handle=this._getHandle(d);if(!this.handle)return false;a(c.iframeFix===true?"iframe":c.iframeFix).each(function(){a('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1E3}).css(a(this).offset()).appendTo("body")});return true},_mouseStart:function(d){var c=this.options;this.helper=
this._createHelper(d);this._cacheHelperProportions();if(a.ui.ddmanager)a.ui.ddmanager.current=this;this._cacheMargins();this.cssPosition=this.helper.css("position");this.scrollParent=this.helper.scrollParent();this.offset=this.positionAbs=this.element.offset();this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left};a.extend(this.offset,{click:{left:d.pageX-this.offset.left,top:d.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()});
this.originalPosition=this.position=this._generatePosition(d);this.originalPageX=d.pageX;this.originalPageY=d.pageY;c.cursorAt&&this._adjustOffsetFromHelper(c.cursorAt);c.containment&&this._setContainment();if(this._trigger("start",d)===false){this._clear();return false}this._cacheHelperProportions();a.ui.ddmanager&&!c.dropBehaviour&&a.ui.ddmanager.prepareOffsets(this,d);this.helper.addClass("ui-draggable-dragging");this._mouseDrag(d,true);return true},_mouseDrag:function(d,c){this.position=this._generatePosition(d);
this.positionAbs=this._convertPositionTo("absolute");if(!c){c=this._uiHash();if(this._trigger("drag",d,c)===false){this._mouseUp({});return false}this.position=c.position}if(!this.options.axis||this.options.axis!="y")this.helper[0].style.left=this.position.left+"px";if(!this.options.axis||this.options.axis!="x")this.helper[0].style.top=this.position.top+"px";a.ui.ddmanager&&a.ui.ddmanager.drag(this,d);return false},_mouseStop:function(d){var c=false;if(a.ui.ddmanager&&!this.options.dropBehaviour)c=
a.ui.ddmanager.drop(this,d);if(this.dropped){c=this.dropped;this.dropped=false}if((!this.element[0]||!this.element[0].parentNode)&&this.options.helper=="original")return false;if(this.options.revert=="invalid"&&!c||this.options.revert=="valid"&&c||this.options.revert===true||a.isFunction(this.options.revert)&&this.options.revert.call(this.element,c)){var f=this;a(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){f._trigger("stop",d)!==false&&f._clear()})}else this._trigger("stop",
d)!==false&&this._clear();return false},_mouseUp:function(d){this.options.iframeFix===true&&a("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)});return a.ui.mouse.prototype._mouseUp.call(this,d)},cancel:function(){this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear();return this},_getHandle:function(d){var c=!this.options.handle||!a(this.options.handle,this.element).length?true:false;a(this.options.handle,this.element).find("*").andSelf().each(function(){if(this==
d.target)c=true});return c},_createHelper:function(d){var c=this.options;d=a.isFunction(c.helper)?a(c.helper.apply(this.element[0],[d])):c.helper=="clone"?this.element.clone().removeAttr("id"):this.element;d.parents("body").length||d.appendTo(c.appendTo=="parent"?this.element[0].parentNode:c.appendTo);d[0]!=this.element[0]&&!/(fixed|absolute)/.test(d.css("position"))&&d.css("position","absolute");return d},_adjustOffsetFromHelper:function(d){if(typeof d=="string")d=d.split(" ");if(a.isArray(d))d=
{left:+d[0],top:+d[1]||0};if("left"in d)this.offset.click.left=d.left+this.margins.left;if("right"in d)this.offset.click.left=this.helperProportions.width-d.right+this.margins.left;if("top"in d)this.offset.click.top=d.top+this.margins.top;if("bottom"in d)this.offset.click.top=this.helperProportions.height-d.bottom+this.margins.top},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var d=this.offsetParent.offset();if(this.cssPosition=="absolute"&&this.scrollParent[0]!=document&&
a.ui.contains(this.scrollParent[0],this.offsetParent[0])){d.left+=this.scrollParent.scrollLeft();d.top+=this.scrollParent.scrollTop()}if(this.offsetParent[0]==document.body||this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=="html"&&a.browser.msie)d={top:0,left:0};return{top:d.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:d.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if(this.cssPosition=="relative"){var d=
this.element.position();return{top:d.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:d.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}else return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions=
{width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var d=this.options;if(d.containment=="parent")d.containment=this.helper[0].parentNode;if(d.containment=="document"||d.containment=="window")this.containment=[(d.containment=="document"?0:a(window).scrollLeft())-this.offset.relative.left-this.offset.parent.left,(d.containment=="document"?0:a(window).scrollTop())-this.offset.relative.top-this.offset.parent.top,(d.containment=="document"?0:a(window).scrollLeft())+
a(d.containment=="document"?document:window).width()-this.helperProportions.width-this.margins.left,(d.containment=="document"?0:a(window).scrollTop())+(a(d.containment=="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];if(!/^(document|window|parent)$/.test(d.containment)&&d.containment.constructor!=Array){d=a(d.containment);var c=d[0];if(c){d.offset();var f=a(c).css("overflow")!="hidden";this.containment=[(parseInt(a(c).css("borderLeftWidth"),
10)||0)+(parseInt(a(c).css("paddingLeft"),10)||0),(parseInt(a(c).css("borderTopWidth"),10)||0)+(parseInt(a(c).css("paddingTop"),10)||0),(f?Math.max(c.scrollWidth,c.offsetWidth):c.offsetWidth)-(parseInt(a(c).css("borderLeftWidth"),10)||0)-(parseInt(a(c).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(f?Math.max(c.scrollHeight,c.offsetHeight):c.offsetHeight)-(parseInt(a(c).css("borderTopWidth"),10)||0)-(parseInt(a(c).css("paddingBottom"),10)||0)-this.helperProportions.height-
this.margins.top-this.margins.bottom];this.relative_container=d}}else if(d.containment.constructor==Array)this.containment=d.containment},_convertPositionTo:function(d,c){if(!c)c=this.position;d=d=="absolute"?1:-1;var f=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&a.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,g=/(html|body)/i.test(f[0].tagName);return{top:c.top+this.offset.relative.top*d+this.offset.parent.top*d-(a.browser.safari&&
a.browser.version<526&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():g?0:f.scrollTop())*d),left:c.left+this.offset.relative.left*d+this.offset.parent.left*d-(a.browser.safari&&a.browser.version<526&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():g?0:f.scrollLeft())*d)}},_generatePosition:function(d){var c=this.options,f=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&a.ui.contains(this.scrollParent[0],
this.offsetParent[0]))?this.offsetParent:this.scrollParent,g=/(html|body)/i.test(f[0].tagName),e=d.pageX,i=d.pageY;if(this.originalPosition){var b;if(this.containment){if(this.relative_container){b=this.relative_container.offset();b=[this.containment[0]+b.left,this.containment[1]+b.top,this.containment[2]+b.left,this.containment[3]+b.top]}else b=this.containment;if(d.pageX-this.offset.click.left<b[0])e=b[0]+this.offset.click.left;if(d.pageY-this.offset.click.top<b[1])i=b[1]+this.offset.click.top;
if(d.pageX-this.offset.click.left>b[2])e=b[2]+this.offset.click.left;if(d.pageY-this.offset.click.top>b[3])i=b[3]+this.offset.click.top}if(c.grid){i=this.originalPageY+Math.round((i-this.originalPageY)/c.grid[1])*c.grid[1];i=b?!(i-this.offset.click.top<b[1]||i-this.offset.click.top>b[3])?i:!(i-this.offset.click.top<b[1])?i-c.grid[1]:i+c.grid[1]:i;e=this.originalPageX+Math.round((e-this.originalPageX)/c.grid[0])*c.grid[0];e=b?!(e-this.offset.click.left<b[0]||e-this.offset.click.left>b[2])?e:!(e-this.offset.click.left<
b[0])?e-c.grid[0]:e+c.grid[0]:e}}return{top:i-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(a.browser.safari&&a.browser.version<526&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollTop():g?0:f.scrollTop()),left:e-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(a.browser.safari&&a.browser.version<526&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():g?0:f.scrollLeft())}},_clear:function(){this.helper.removeClass("ui-draggable-dragging");
this.helper[0]!=this.element[0]&&!this.cancelHelperRemoval&&this.helper.remove();this.helper=null;this.cancelHelperRemoval=false},_trigger:function(d,c,f){f=f||this._uiHash();a.ui.plugin.call(this,d,[c,f]);if(d=="drag")this.positionAbs=this._convertPositionTo("absolute");return a.Widget.prototype._trigger.call(this,d,c,f)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}});a.extend(a.ui.draggable,{version:"1.8.13"});
a.ui.plugin.add("draggable","connectToSortable",{start:function(d,c){var f=a(this).data("draggable"),g=f.options,e=a.extend({},c,{item:f.element});f.sortables=[];a(g.connectToSortable).each(function(){var i=a.data(this,"sortable");if(i&&!i.options.disabled){f.sortables.push({instance:i,shouldRevert:i.options.revert});i.refreshPositions();i._trigger("activate",d,e)}})},stop:function(d,c){var f=a(this).data("draggable"),g=a.extend({},c,{item:f.element});a.each(f.sortables,function(){if(this.instance.isOver){this.instance.isOver=
0;f.cancelHelperRemoval=true;this.instance.cancelHelperRemoval=false;if(this.shouldRevert)this.instance.options.revert=true;this.instance._mouseStop(d);this.instance.options.helper=this.instance.options._helper;f.options.helper=="original"&&this.instance.currentItem.css({top:"auto",left:"auto"})}else{this.instance.cancelHelperRemoval=false;this.instance._trigger("deactivate",d,g)}})},drag:function(d,c){var f=a(this).data("draggable"),g=this;a.each(f.sortables,function(){this.instance.positionAbs=
f.positionAbs;this.instance.helperProportions=f.helperProportions;this.instance.offset.click=f.offset.click;if(this.instance._intersectsWith(this.instance.containerCache)){if(!this.instance.isOver){this.instance.isOver=1;this.instance.currentItem=a(g).clone().removeAttr("id").appendTo(this.instance.element).data("sortable-item",true);this.instance.options._helper=this.instance.options.helper;this.instance.options.helper=function(){return c.helper[0]};d.target=this.instance.currentItem[0];this.instance._mouseCapture(d,
true);this.instance._mouseStart(d,true,true);this.instance.offset.click.top=f.offset.click.top;this.instance.offset.click.left=f.offset.click.left;this.instance.offset.parent.left-=f.offset.parent.left-this.instance.offset.parent.left;this.instance.offset.parent.top-=f.offset.parent.top-this.instance.offset.parent.top;f._trigger("toSortable",d);f.dropped=this.instance.element;f.currentItem=f.element;this.instance.fromOutside=f}this.instance.currentItem&&this.instance._mouseDrag(d)}else if(this.instance.isOver){this.instance.isOver=
0;this.instance.cancelHelperRemoval=true;this.instance.options.revert=false;this.instance._trigger("out",d,this.instance._uiHash(this.instance));this.instance._mouseStop(d,true);this.instance.options.helper=this.instance.options._helper;this.instance.currentItem.remove();this.instance.placeholder&&this.instance.placeholder.remove();f._trigger("fromSortable",d);f.dropped=false}})}});a.ui.plugin.add("draggable","cursor",{start:function(){var d=a("body"),c=a(this).data("draggable").options;if(d.css("cursor"))c._cursor=
d.css("cursor");d.css("cursor",c.cursor)},stop:function(){var d=a(this).data("draggable").options;d._cursor&&a("body").css("cursor",d._cursor)}});a.ui.plugin.add("draggable","opacity",{start:function(d,c){d=a(c.helper);c=a(this).data("draggable").options;if(d.css("opacity"))c._opacity=d.css("opacity");d.css("opacity",c.opacity)},stop:function(d,c){d=a(this).data("draggable").options;d._opacity&&a(c.helper).css("opacity",d._opacity)}});a.ui.plugin.add("draggable","scroll",{start:function(){var d=a(this).data("draggable");
if(d.scrollParent[0]!=document&&d.scrollParent[0].tagName!="HTML")d.overflowOffset=d.scrollParent.offset()},drag:function(d){var c=a(this).data("draggable"),f=c.options,g=false;if(c.scrollParent[0]!=document&&c.scrollParent[0].tagName!="HTML"){if(!f.axis||f.axis!="x")if(c.overflowOffset.top+c.scrollParent[0].offsetHeight-d.pageY<f.scrollSensitivity)c.scrollParent[0].scrollTop=g=c.scrollParent[0].scrollTop+f.scrollSpeed;else if(d.pageY-c.overflowOffset.top<f.scrollSensitivity)c.scrollParent[0].scrollTop=
g=c.scrollParent[0].scrollTop-f.scrollSpeed;if(!f.axis||f.axis!="y")if(c.overflowOffset.left+c.scrollParent[0].offsetWidth-d.pageX<f.scrollSensitivity)c.scrollParent[0].scrollLeft=g=c.scrollParent[0].scrollLeft+f.scrollSpeed;else if(d.pageX-c.overflowOffset.left<f.scrollSensitivity)c.scrollParent[0].scrollLeft=g=c.scrollParent[0].scrollLeft-f.scrollSpeed}else{if(!f.axis||f.axis!="x")if(d.pageY-a(document).scrollTop()<f.scrollSensitivity)g=a(document).scrollTop(a(document).scrollTop()-f.scrollSpeed);
else if(a(window).height()-(d.pageY-a(document).scrollTop())<f.scrollSensitivity)g=a(document).scrollTop(a(document).scrollTop()+f.scrollSpeed);if(!f.axis||f.axis!="y")if(d.pageX-a(document).scrollLeft()<f.scrollSensitivity)g=a(document).scrollLeft(a(document).scrollLeft()-f.scrollSpeed);else if(a(window).width()-(d.pageX-a(document).scrollLeft())<f.scrollSensitivity)g=a(document).scrollLeft(a(document).scrollLeft()+f.scrollSpeed)}g!==false&&a.ui.ddmanager&&!f.dropBehaviour&&a.ui.ddmanager.prepareOffsets(c,
d)}});a.ui.plugin.add("draggable","snap",{start:function(){var d=a(this).data("draggable"),c=d.options;d.snapElements=[];a(c.snap.constructor!=String?c.snap.items||":data(draggable)":c.snap).each(function(){var f=a(this),g=f.offset();this!=d.element[0]&&d.snapElements.push({item:this,width:f.outerWidth(),height:f.outerHeight(),top:g.top,left:g.left})})},drag:function(d,c){for(var f=a(this).data("draggable"),g=f.options,e=g.snapTolerance,i=c.offset.left,b=i+f.helperProportions.width,h=c.offset.top,
j=h+f.helperProportions.height,l=f.snapElements.length-1;l>=0;l--){var o=f.snapElements[l].left,n=o+f.snapElements[l].width,k=f.snapElements[l].top,m=k+f.snapElements[l].height;if(o-e<i&&i<n+e&&k-e<h&&h<m+e||o-e<i&&i<n+e&&k-e<j&&j<m+e||o-e<b&&b<n+e&&k-e<h&&h<m+e||o-e<b&&b<n+e&&k-e<j&&j<m+e){if(g.snapMode!="inner"){var p=Math.abs(k-j)<=e,q=Math.abs(m-h)<=e,s=Math.abs(o-b)<=e,r=Math.abs(n-i)<=e;if(p)c.position.top=f._convertPositionTo("relative",{top:k-f.helperProportions.height,left:0}).top-f.margins.top;
if(q)c.position.top=f._convertPositionTo("relative",{top:m,left:0}).top-f.margins.top;if(s)c.position.left=f._convertPositionTo("relative",{top:0,left:o-f.helperProportions.width}).left-f.margins.left;if(r)c.position.left=f._convertPositionTo("relative",{top:0,left:n}).left-f.margins.left}var u=p||q||s||r;if(g.snapMode!="outer"){p=Math.abs(k-h)<=e;q=Math.abs(m-j)<=e;s=Math.abs(o-i)<=e;r=Math.abs(n-b)<=e;if(p)c.position.top=f._convertPositionTo("relative",{top:k,left:0}).top-f.margins.top;if(q)c.position.top=
f._convertPositionTo("relative",{top:m-f.helperProportions.height,left:0}).top-f.margins.top;if(s)c.position.left=f._convertPositionTo("relative",{top:0,left:o}).left-f.margins.left;if(r)c.position.left=f._convertPositionTo("relative",{top:0,left:n-f.helperProportions.width}).left-f.margins.left}if(!f.snapElements[l].snapping&&(p||q||s||r||u))f.options.snap.snap&&f.options.snap.snap.call(f.element,d,a.extend(f._uiHash(),{snapItem:f.snapElements[l].item}));f.snapElements[l].snapping=p||q||s||r||u}else{f.snapElements[l].snapping&&
f.options.snap.release&&f.options.snap.release.call(f.element,d,a.extend(f._uiHash(),{snapItem:f.snapElements[l].item}));f.snapElements[l].snapping=false}}}});a.ui.plugin.add("draggable","stack",{start:function(){var d=a(this).data("draggable").options;d=a.makeArray(a(d.stack)).sort(function(f,g){return(parseInt(a(f).css("zIndex"),10)||0)-(parseInt(a(g).css("zIndex"),10)||0)});if(d.length){var c=parseInt(d[0].style.zIndex)||0;a(d).each(function(f){this.style.zIndex=c+f});this[0].style.zIndex=c+d.length}}});
a.ui.plugin.add("draggable","zIndex",{start:function(d,c){d=a(c.helper);c=a(this).data("draggable").options;if(d.css("zIndex"))c._zIndex=d.css("zIndex");d.css("zIndex",c.zIndex)},stop:function(d,c){d=a(this).data("draggable").options;d._zIndex&&a(c.helper).css("zIndex",d._zIndex)}})})(jQuery);
(function(a){a.widget("ui.droppable",{widgetEventPrefix:"drop",options:{accept:"*",activeClass:false,addClasses:true,greedy:false,hoverClass:false,scope:"default",tolerance:"intersect"},_create:function(){var d=this.options,c=d.accept;this.isover=0;this.isout=1;this.accept=a.isFunction(c)?c:function(f){return f.is(c)};this.proportions={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight};a.ui.ddmanager.droppables[d.scope]=a.ui.ddmanager.droppables[d.scope]||[];a.ui.ddmanager.droppables[d.scope].push(this);
d.addClasses&&this.element.addClass("ui-droppable")},destroy:function(){for(var d=a.ui.ddmanager.droppables[this.options.scope],c=0;c<d.length;c++)d[c]==this&&d.splice(c,1);this.element.removeClass("ui-droppable ui-droppable-disabled").removeData("droppable").unbind(".droppable");return this},_setOption:function(d,c){if(d=="accept")this.accept=a.isFunction(c)?c:function(f){return f.is(c)};a.Widget.prototype._setOption.apply(this,arguments)},_activate:function(d){var c=a.ui.ddmanager.current;this.options.activeClass&&
this.element.addClass(this.options.activeClass);c&&this._trigger("activate",d,this.ui(c))},_deactivate:function(d){var c=a.ui.ddmanager.current;this.options.activeClass&&this.element.removeClass(this.options.activeClass);c&&this._trigger("deactivate",d,this.ui(c))},_over:function(d){var c=a.ui.ddmanager.current;if(!(!c||(c.currentItem||c.element)[0]==this.element[0]))if(this.accept.call(this.element[0],c.currentItem||c.element)){this.options.hoverClass&&this.element.addClass(this.options.hoverClass);
this._trigger("over",d,this.ui(c))}},_out:function(d){var c=a.ui.ddmanager.current;if(!(!c||(c.currentItem||c.element)[0]==this.element[0]))if(this.accept.call(this.element[0],c.currentItem||c.element)){this.options.hoverClass&&this.element.removeClass(this.options.hoverClass);this._trigger("out",d,this.ui(c))}},_drop:function(d,c){var f=c||a.ui.ddmanager.current;if(!f||(f.currentItem||f.element)[0]==this.element[0])return false;var g=false;this.element.find(":data(droppable)").not(".ui-draggable-dragging").each(function(){var e=
a.data(this,"droppable");if(e.options.greedy&&!e.options.disabled&&e.options.scope==f.options.scope&&e.accept.call(e.element[0],f.currentItem||f.element)&&a.ui.intersect(f,a.extend(e,{offset:e.element.offset()}),e.options.tolerance)){g=true;return false}});if(g)return false;if(this.accept.call(this.element[0],f.currentItem||f.element)){this.options.activeClass&&this.element.removeClass(this.options.activeClass);this.options.hoverClass&&this.element.removeClass(this.options.hoverClass);this._trigger("drop",
d,this.ui(f));return this.element}return false},ui:function(d){return{draggable:d.currentItem||d.element,helper:d.helper,position:d.position,offset:d.positionAbs}}});a.extend(a.ui.droppable,{version:"1.8.13"});a.ui.intersect=function(d,c,f){if(!c.offset)return false;var g=(d.positionAbs||d.position.absolute).left,e=g+d.helperProportions.width,i=(d.positionAbs||d.position.absolute).top,b=i+d.helperProportions.height,h=c.offset.left,j=h+c.proportions.width,l=c.offset.top,o=l+c.proportions.height;
switch(f){case "fit":return h<=g&&e<=j&&l<=i&&b<=o;case "intersect":return h<g+d.helperProportions.width/2&&e-d.helperProportions.width/2<j&&l<i+d.helperProportions.height/2&&b-d.helperProportions.height/2<o;case "pointer":return a.ui.isOver((d.positionAbs||d.position.absolute).top+(d.clickOffset||d.offset.click).top,(d.positionAbs||d.position.absolute).left+(d.clickOffset||d.offset.click).left,l,h,c.proportions.height,c.proportions.width);case "touch":return(i>=l&&i<=o||b>=l&&b<=o||i<l&&b>o)&&(g>=
h&&g<=j||e>=h&&e<=j||g<h&&e>j);default:return false}};a.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(d,c){var f=a.ui.ddmanager.droppables[d.options.scope]||[],g=c?c.type:null,e=(d.currentItem||d.element).find(":data(droppable)").andSelf(),i=0;a:for(;i<f.length;i++)if(!(f[i].options.disabled||d&&!f[i].accept.call(f[i].element[0],d.currentItem||d.element))){for(var b=0;b<e.length;b++)if(e[b]==f[i].element[0]){f[i].proportions.height=0;continue a}f[i].visible=f[i].element.css("display")!=
"none";if(f[i].visible){g=="mousedown"&&f[i]._activate.call(f[i],c);f[i].offset=f[i].element.offset();f[i].proportions={width:f[i].element[0].offsetWidth,height:f[i].element[0].offsetHeight}}}},drop:function(d,c){var f=false;a.each(a.ui.ddmanager.droppables[d.options.scope]||[],function(){if(this.options){if(!this.options.disabled&&this.visible&&a.ui.intersect(d,this,this.options.tolerance))f=f||this._drop.call(this,c);if(!this.options.disabled&&this.visible&&this.accept.call(this.element[0],d.currentItem||
d.element)){this.isout=1;this.isover=0;this._deactivate.call(this,c)}}});return f},drag:function(d,c){d.options.refreshPositions&&a.ui.ddmanager.prepareOffsets(d,c);a.each(a.ui.ddmanager.droppables[d.options.scope]||[],function(){if(!(this.options.disabled||this.greedyChild||!this.visible)){var f=a.ui.intersect(d,this,this.options.tolerance);if(f=!f&&this.isover==1?"isout":f&&this.isover==0?"isover":null){var g;if(this.options.greedy){var e=this.element.parents(":data(droppable):eq(0)");if(e.length){g=
a.data(e[0],"droppable");g.greedyChild=f=="isover"?1:0}}if(g&&f=="isover"){g.isover=0;g.isout=1;g._out.call(g,c)}this[f]=1;this[f=="isout"?"isover":"isout"]=0;this[f=="isover"?"_over":"_out"].call(this,c);if(g&&f=="isout"){g.isout=0;g.isover=1;g._over.call(g,c)}}}})}}})(jQuery);
(function(a){a.widget("ui.resizable",a.ui.mouse,{widgetEventPrefix:"resize",options:{alsoResize:false,animate:false,animateDuration:"slow",animateEasing:"swing",aspectRatio:false,autoHide:false,containment:false,ghost:false,grid:false,handles:"e,s,se",helper:false,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:1E3},_create:function(){var f=this,g=this.options;this.element.addClass("ui-resizable");a.extend(this,{_aspectRatio:!!g.aspectRatio,aspectRatio:g.aspectRatio,originalElement:this.element,
_proportionallyResizeElements:[],_helper:g.helper||g.ghost||g.animate?g.helper||"ui-resizable-helper":null});if(this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)){/relative/.test(this.element.css("position"))&&a.browser.opera&&this.element.css({position:"relative",top:"auto",left:"auto"});this.element.wrap(a('<div class="ui-wrapper" style="overflow: hidden;"></div>').css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),
top:this.element.css("top"),left:this.element.css("left")}));this.element=this.element.parent().data("resizable",this.element.data("resizable"));this.elementIsWrapper=true;this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")});this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0});this.originalResizeStyle=
this.originalElement.css("resize");this.originalElement.css("resize","none");this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"}));this.originalElement.css({margin:this.originalElement.css("margin")});this._proportionallyResize()}this.handles=g.handles||(!a(".ui-resizable-handle",this.element).length?"e,s,se":{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",
nw:".ui-resizable-nw"});if(this.handles.constructor==String){if(this.handles=="all")this.handles="n,e,s,w,se,sw,ne,nw";var e=this.handles.split(",");this.handles={};for(var i=0;i<e.length;i++){var b=a.trim(e[i]),h=a('<div class="ui-resizable-handle '+("ui-resizable-"+b)+'"></div>');/sw|se|ne|nw/.test(b)&&h.css({zIndex:++g.zIndex});"se"==b&&h.addClass("ui-icon ui-icon-gripsmall-diagonal-se");this.handles[b]=".ui-resizable-"+b;this.element.append(h)}}this._renderAxis=function(j){j=j||this.element;for(var l in this.handles){if(this.handles[l].constructor==
String)this.handles[l]=a(this.handles[l],this.element).show();if(this.elementIsWrapper&&this.originalElement[0].nodeName.match(/textarea|input|select|button/i)){var o=a(this.handles[l],this.element),n=0;n=/sw|ne|nw|se|n|s/.test(l)?o.outerHeight():o.outerWidth();o=["padding",/ne|nw|n/.test(l)?"Top":/se|sw|s/.test(l)?"Bottom":/^e$/.test(l)?"Right":"Left"].join("");j.css(o,n);this._proportionallyResize()}a(this.handles[l])}};this._renderAxis(this.element);this._handles=a(".ui-resizable-handle",this.element).disableSelection();
this._handles.mouseover(function(){if(!f.resizing){if(this.className)var j=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i);f.axis=j&&j[1]?j[1]:"se"}});if(g.autoHide){this._handles.hide();a(this.element).addClass("ui-resizable-autohide").hover(function(){if(!g.disabled){a(this).removeClass("ui-resizable-autohide");f._handles.show()}},function(){if(!g.disabled)if(!f.resizing){a(this).addClass("ui-resizable-autohide");f._handles.hide()}})}this._mouseInit()},destroy:function(){this._mouseDestroy();
var f=function(e){a(e).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").unbind(".resizable").find(".ui-resizable-handle").remove()};if(this.elementIsWrapper){f(this.element);var g=this.element;g.after(this.originalElement.css({position:g.css("position"),width:g.outerWidth(),height:g.outerHeight(),top:g.css("top"),left:g.css("left")})).remove()}this.originalElement.css("resize",this.originalResizeStyle);f(this.originalElement);return this},_mouseCapture:function(f){var g=
false;for(var e in this.handles)if(a(this.handles[e])[0]==f.target)g=true;return!this.options.disabled&&g},_mouseStart:function(f){var g=this.options,e=this.element.position(),i=this.element;this.resizing=true;this.documentScroll={top:a(document).scrollTop(),left:a(document).scrollLeft()};if(i.is(".ui-draggable")||/absolute/.test(i.css("position")))i.css({position:"absolute",top:e.top,left:e.left});a.browser.opera&&/relative/.test(i.css("position"))&&i.css({position:"relative",top:"auto",left:"auto"});
this._renderProxy();e=d(this.helper.css("left"));var b=d(this.helper.css("top"));if(g.containment){e+=a(g.containment).scrollLeft()||0;b+=a(g.containment).scrollTop()||0}this.offset=this.helper.offset();this.position={left:e,top:b};this.size=this._helper?{width:i.outerWidth(),height:i.outerHeight()}:{width:i.width(),height:i.height()};this.originalSize=this._helper?{width:i.outerWidth(),height:i.outerHeight()}:{width:i.width(),height:i.height()};this.originalPosition={left:e,top:b};this.sizeDiff=
{width:i.outerWidth()-i.width(),height:i.outerHeight()-i.height()};this.originalMousePosition={left:f.pageX,top:f.pageY};this.aspectRatio=typeof g.aspectRatio=="number"?g.aspectRatio:this.originalSize.width/this.originalSize.height||1;g=a(".ui-resizable-"+this.axis).css("cursor");a("body").css("cursor",g=="auto"?this.axis+"-resize":g);i.addClass("ui-resizable-resizing");this._propagate("start",f);return true},_mouseDrag:function(f){var g=this.helper,e=this.originalMousePosition,i=this._change[this.axis];
if(!i)return false;e=i.apply(this,[f,f.pageX-e.left||0,f.pageY-e.top||0]);if(this._aspectRatio||f.shiftKey)e=this._updateRatio(e,f);e=this._respectSize(e,f);this._propagate("resize",f);g.css({top:this.position.top+"px",left:this.position.left+"px",width:this.size.width+"px",height:this.size.height+"px"});!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize();this._updateCache(e);this._trigger("resize",f,this.ui());return false},_mouseStop:function(f){this.resizing=
false;var g=this.options,e=this;if(this._helper){var i=this._proportionallyResizeElements,b=i.length&&/textarea/i.test(i[0].nodeName);i=b&&a.ui.hasScroll(i[0],"left")?0:e.sizeDiff.height;b=b?0:e.sizeDiff.width;b={width:e.helper.width()-b,height:e.helper.height()-i};i=parseInt(e.element.css("left"),10)+(e.position.left-e.originalPosition.left)||null;var h=parseInt(e.element.css("top"),10)+(e.position.top-e.originalPosition.top)||null;g.animate||this.element.css(a.extend(b,{top:h,left:i}));e.helper.height(e.size.height);
e.helper.width(e.size.width);this._helper&&!g.animate&&this._proportionallyResize()}a("body").css("cursor","auto");this.element.removeClass("ui-resizable-resizing");this._propagate("stop",f);this._helper&&this.helper.remove();return false},_updateCache:function(f){this.offset=this.helper.offset();if(c(f.left))this.position.left=f.left;if(c(f.top))this.position.top=f.top;if(c(f.height))this.size.height=f.height;if(c(f.width))this.size.width=f.width},_updateRatio:function(f){var g=this.position,e=this.size,
i=this.axis;if(f.height)f.width=e.height*this.aspectRatio;else if(f.width)f.height=e.width/this.aspectRatio;if(i=="sw"){f.left=g.left+(e.width-f.width);f.top=null}if(i=="nw"){f.top=g.top+(e.height-f.height);f.left=g.left+(e.width-f.width)}return f},_respectSize:function(f){var g=this.options,e=this.axis,i=c(f.width)&&g.maxWidth&&g.maxWidth<f.width,b=c(f.height)&&g.maxHeight&&g.maxHeight<f.height,h=c(f.width)&&g.minWidth&&g.minWidth>f.width,j=c(f.height)&&g.minHeight&&g.minHeight>f.height;if(h)f.width=
g.minWidth;if(j)f.height=g.minHeight;if(i)f.width=g.maxWidth;if(b)f.height=g.maxHeight;var l=this.originalPosition.left+this.originalSize.width,o=this.position.top+this.size.height,n=/sw|nw|w/.test(e);e=/nw|ne|n/.test(e);if(h&&n)f.left=l-g.minWidth;if(i&&n)f.left=l-g.maxWidth;if(j&&e)f.top=o-g.minHeight;if(b&&e)f.top=o-g.maxHeight;if((g=!f.width&&!f.height)&&!f.left&&f.top)f.top=null;else if(g&&!f.top&&f.left)f.left=null;return f},_proportionallyResize:function(){if(this._proportionallyResizeElements.length)for(var f=
this.helper||this.element,g=0;g<this._proportionallyResizeElements.length;g++){var e=this._proportionallyResizeElements[g];if(!this.borderDif){var i=[e.css("borderTopWidth"),e.css("borderRightWidth"),e.css("borderBottomWidth"),e.css("borderLeftWidth")],b=[e.css("paddingTop"),e.css("paddingRight"),e.css("paddingBottom"),e.css("paddingLeft")];this.borderDif=a.map(i,function(h,j){h=parseInt(h,10)||0;j=parseInt(b[j],10)||0;return h+j})}a.browser.msie&&(a(f).is(":hidden")||a(f).parents(":hidden").length)||
e.css({height:f.height()-this.borderDif[0]-this.borderDif[2]||0,width:f.width()-this.borderDif[1]-this.borderDif[3]||0})}},_renderProxy:function(){var f=this.options;this.elementOffset=this.element.offset();if(this._helper){this.helper=this.helper||a('<div style="overflow:hidden;"></div>');var g=a.browser.msie&&a.browser.version<7,e=g?1:0;g=g?2:-1;this.helper.addClass(this._helper).css({width:this.element.outerWidth()+g,height:this.element.outerHeight()+g,position:"absolute",left:this.elementOffset.left-
e+"px",top:this.elementOffset.top-e+"px",zIndex:++f.zIndex});this.helper.appendTo("body").disableSelection()}else this.helper=this.element},_change:{e:function(f,g){return{width:this.originalSize.width+g}},w:function(f,g){return{left:this.originalPosition.left+g,width:this.originalSize.width-g}},n:function(f,g,e){return{top:this.originalPosition.top+e,height:this.originalSize.height-e}},s:function(f,g,e){return{height:this.originalSize.height+e}},se:function(f,g,e){return a.extend(this._change.s.apply(this,
arguments),this._change.e.apply(this,[f,g,e]))},sw:function(f,g,e){return a.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[f,g,e]))},ne:function(f,g,e){return a.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[f,g,e]))},nw:function(f,g,e){return a.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[f,g,e]))}},_propagate:function(f,g){a.ui.plugin.call(this,f,[g,this.ui()]);f!="resize"&&this._trigger(f,g,this.ui())},plugins:{},ui:function(){return{originalElement:this.originalElement,
element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}});a.extend(a.ui.resizable,{version:"1.8.13"});a.ui.plugin.add("resizable","alsoResize",{start:function(){var f=a(this).data("resizable").options,g=function(e){a(e).each(function(){var i=a(this);i.data("resizable-alsoresize",{width:parseInt(i.width(),10),height:parseInt(i.height(),10),left:parseInt(i.css("left"),10),top:parseInt(i.css("top"),10),position:i.css("position")})})};
if(typeof f.alsoResize=="object"&&!f.alsoResize.parentNode)if(f.alsoResize.length){f.alsoResize=f.alsoResize[0];g(f.alsoResize)}else a.each(f.alsoResize,function(e){g(e)});else g(f.alsoResize)},resize:function(f,g){var e=a(this).data("resizable");f=e.options;var i=e.originalSize,b=e.originalPosition,h={height:e.size.height-i.height||0,width:e.size.width-i.width||0,top:e.position.top-b.top||0,left:e.position.left-b.left||0},j=function(l,o){a(l).each(function(){var n=a(this),k=a(this).data("resizable-alsoresize"),
m={},p=o&&o.length?o:n.parents(g.originalElement[0]).length?["width","height"]:["width","height","top","left"];a.each(p,function(q,s){if((q=(k[s]||0)+(h[s]||0))&&q>=0)m[s]=q||null});if(a.browser.opera&&/relative/.test(n.css("position"))){e._revertToRelativePosition=true;n.css({position:"absolute",top:"auto",left:"auto"})}n.css(m)})};typeof f.alsoResize=="object"&&!f.alsoResize.nodeType?a.each(f.alsoResize,function(l,o){j(l,o)}):j(f.alsoResize)},stop:function(){var f=a(this).data("resizable"),g=f.options,
e=function(i){a(i).each(function(){var b=a(this);b.css({position:b.data("resizable-alsoresize").position})})};if(f._revertToRelativePosition){f._revertToRelativePosition=false;typeof g.alsoResize=="object"&&!g.alsoResize.nodeType?a.each(g.alsoResize,function(i){e(i)}):e(g.alsoResize)}a(this).removeData("resizable-alsoresize")}});a.ui.plugin.add("resizable","animate",{stop:function(f){var g=a(this).data("resizable"),e=g.options,i=g._proportionallyResizeElements,b=i.length&&/textarea/i.test(i[0].nodeName),
h=b&&a.ui.hasScroll(i[0],"left")?0:g.sizeDiff.height;b={width:g.size.width-(b?0:g.sizeDiff.width),height:g.size.height-h};h=parseInt(g.element.css("left"),10)+(g.position.left-g.originalPosition.left)||null;var j=parseInt(g.element.css("top"),10)+(g.position.top-g.originalPosition.top)||null;g.element.animate(a.extend(b,j&&h?{top:j,left:h}:{}),{duration:e.animateDuration,easing:e.animateEasing,step:function(){var l={width:parseInt(g.element.css("width"),10),height:parseInt(g.element.css("height"),
10),top:parseInt(g.element.css("top"),10),left:parseInt(g.element.css("left"),10)};i&&i.length&&a(i[0]).css({width:l.width,height:l.height});g._updateCache(l);g._propagate("resize",f)}})}});a.ui.plugin.add("resizable","containment",{start:function(){var f=a(this).data("resizable"),g=f.element,e=f.options.containment;if(g=e instanceof a?e.get(0):/parent/.test(e)?g.parent().get(0):e){f.containerElement=a(g);if(/document/.test(e)||e==document){f.containerOffset={left:0,top:0};f.containerPosition={left:0,
top:0};f.parentData={element:a(document),left:0,top:0,width:a(document).width(),height:a(document).height()||document.body.parentNode.scrollHeight}}else{var i=a(g),b=[];a(["Top","Right","Left","Bottom"]).each(function(l,o){b[l]=d(i.css("padding"+o))});f.containerOffset=i.offset();f.containerPosition=i.position();f.containerSize={height:i.innerHeight()-b[3],width:i.innerWidth()-b[1]};e=f.containerOffset;var h=f.containerSize.height,j=f.containerSize.width;j=a.ui.hasScroll(g,"left")?g.scrollWidth:j;
h=a.ui.hasScroll(g)?g.scrollHeight:h;f.parentData={element:g,left:e.left,top:e.top,width:j,height:h}}}},resize:function(f){var g=a(this).data("resizable"),e=g.options,i=g.containerOffset,b=g.position;f=g._aspectRatio||f.shiftKey;var h={top:0,left:0},j=g.containerElement;if(j[0]!=document&&/static/.test(j.css("position")))h=i;if(b.left<(g._helper?i.left:0)){g.size.width+=g._helper?g.position.left-i.left:g.position.left-h.left;if(f)g.size.height=g.size.width/e.aspectRatio;g.position.left=e.helper?i.left:
0}if(b.top<(g._helper?i.top:0)){g.size.height+=g._helper?g.position.top-i.top:g.position.top;if(f)g.size.width=g.size.height*e.aspectRatio;g.position.top=g._helper?i.top:0}g.offset.left=g.parentData.left+g.position.left;g.offset.top=g.parentData.top+g.position.top;e=Math.abs((g._helper?g.offset.left-h.left:g.offset.left-h.left)+g.sizeDiff.width);i=Math.abs((g._helper?g.offset.top-h.top:g.offset.top-i.top)+g.sizeDiff.height);b=g.containerElement.get(0)==g.element.parent().get(0);h=/relative|absolute/.test(g.containerElement.css("position"));
if(b&&h)e-=g.parentData.left;if(e+g.size.width>=g.parentData.width){g.size.width=g.parentData.width-e;if(f)g.size.height=g.size.width/g.aspectRatio}if(i+g.size.height>=g.parentData.height){g.size.height=g.parentData.height-i;if(f)g.size.width=g.size.height*g.aspectRatio}},stop:function(){var f=a(this).data("resizable"),g=f.options,e=f.containerOffset,i=f.containerPosition,b=f.containerElement,h=a(f.helper),j=h.offset(),l=h.outerWidth()-f.sizeDiff.width;h=h.outerHeight()-f.sizeDiff.height;f._helper&&
!g.animate&&/relative/.test(b.css("position"))&&a(this).css({left:j.left-i.left-e.left,width:l,height:h});f._helper&&!g.animate&&/static/.test(b.css("position"))&&a(this).css({left:j.left-i.left-e.left,width:l,height:h})}});a.ui.plugin.add("resizable","ghost",{start:function(){var f=a(this).data("resizable"),g=f.options,e=f.size;f.ghost=f.originalElement.clone();f.ghost.css({opacity:0.25,display:"block",position:"relative",height:e.height,width:e.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass(typeof g.ghost==
"string"?g.ghost:"");f.ghost.appendTo(f.helper)},resize:function(){var f=a(this).data("resizable");f.ghost&&f.ghost.css({position:"relative",height:f.size.height,width:f.size.width})},stop:function(){var f=a(this).data("resizable");f.ghost&&f.helper&&f.helper.get(0).removeChild(f.ghost.get(0))}});a.ui.plugin.add("resizable","grid",{resize:function(){var f=a(this).data("resizable"),g=f.options,e=f.size,i=f.originalSize,b=f.originalPosition,h=f.axis;g.grid=typeof g.grid=="number"?[g.grid,g.grid]:g.grid;
var j=Math.round((e.width-i.width)/(g.grid[0]||1))*(g.grid[0]||1);g=Math.round((e.height-i.height)/(g.grid[1]||1))*(g.grid[1]||1);if(/^(se|s|e)$/.test(h)){f.size.width=i.width+j;f.size.height=i.height+g}else if(/^(ne)$/.test(h)){f.size.width=i.width+j;f.size.height=i.height+g;f.position.top=b.top-g}else{if(/^(sw)$/.test(h)){f.size.width=i.width+j;f.size.height=i.height+g}else{f.size.width=i.width+j;f.size.height=i.height+g;f.position.top=b.top-g}f.position.left=b.left-j}}});var d=function(f){return parseInt(f,
10)||0},c=function(f){return!isNaN(parseInt(f,10))}})(jQuery);
(function(a){a.widget("ui.selectable",a.ui.mouse,{options:{appendTo:"body",autoRefresh:true,distance:0,filter:"*",tolerance:"touch"},_create:function(){var d=this;this.element.addClass("ui-selectable");this.dragged=false;var c;this.refresh=function(){c=a(d.options.filter,d.element[0]);c.each(function(){var f=a(this),g=f.offset();a.data(this,"selectable-item",{element:this,$element:f,left:g.left,top:g.top,right:g.left+f.outerWidth(),bottom:g.top+f.outerHeight(),startselected:false,selected:f.hasClass("ui-selected"),
selecting:f.hasClass("ui-selecting"),unselecting:f.hasClass("ui-unselecting")})})};this.refresh();this.selectees=c.addClass("ui-selectee");this._mouseInit();this.helper=a("<div class='ui-selectable-helper'></div>")},destroy:function(){this.selectees.removeClass("ui-selectee").removeData("selectable-item");this.element.removeClass("ui-selectable ui-selectable-disabled").removeData("selectable").unbind(".selectable");this._mouseDestroy();return this},_mouseStart:function(d){var c=this;this.opos=[d.pageX,
d.pageY];if(!this.options.disabled){var f=this.options;this.selectees=a(f.filter,this.element[0]);this._trigger("start",d);a(f.appendTo).append(this.helper);this.helper.css({left:d.clientX,top:d.clientY,width:0,height:0});f.autoRefresh&&this.refresh();this.selectees.filter(".ui-selected").each(function(){var g=a.data(this,"selectable-item");g.startselected=true;if(!d.metaKey){g.$element.removeClass("ui-selected");g.selected=false;g.$element.addClass("ui-unselecting");g.unselecting=true;c._trigger("unselecting",
d,{unselecting:g.element})}});a(d.target).parents().andSelf().each(function(){var g=a.data(this,"selectable-item");if(g){var e=!d.metaKey||!g.$element.hasClass("ui-selected");g.$element.removeClass(e?"ui-unselecting":"ui-selected").addClass(e?"ui-selecting":"ui-unselecting");g.unselecting=!e;g.selecting=e;(g.selected=e)?c._trigger("selecting",d,{selecting:g.element}):c._trigger("unselecting",d,{unselecting:g.element});return false}})}},_mouseDrag:function(d){var c=this;this.dragged=true;if(!this.options.disabled){var f=
this.options,g=this.opos[0],e=this.opos[1],i=d.pageX,b=d.pageY;if(g>i){var h=i;i=g;g=h}if(e>b){h=b;b=e;e=h}this.helper.css({left:g,top:e,width:i-g,height:b-e});this.selectees.each(function(){var j=a.data(this,"selectable-item");if(!(!j||j.element==c.element[0])){var l=false;if(f.tolerance=="touch")l=!(j.left>i||j.right<g||j.top>b||j.bottom<e);else if(f.tolerance=="fit")l=j.left>g&&j.right<i&&j.top>e&&j.bottom<b;if(l){if(j.selected){j.$element.removeClass("ui-selected");j.selected=false}if(j.unselecting){j.$element.removeClass("ui-unselecting");
j.unselecting=false}if(!j.selecting){j.$element.addClass("ui-selecting");j.selecting=true;c._trigger("selecting",d,{selecting:j.element})}}else{if(j.selecting)if(d.metaKey&&j.startselected){j.$element.removeClass("ui-selecting");j.selecting=false;j.$element.addClass("ui-selected");j.selected=true}else{j.$element.removeClass("ui-selecting");j.selecting=false;if(j.startselected){j.$element.addClass("ui-unselecting");j.unselecting=true}c._trigger("unselecting",d,{unselecting:j.element})}if(j.selected)if(!d.metaKey&&
!j.startselected){j.$element.removeClass("ui-selected");j.selected=false;j.$element.addClass("ui-unselecting");j.unselecting=true;c._trigger("unselecting",d,{unselecting:j.element})}}}});return false}},_mouseStop:function(d){var c=this;this.dragged=false;a(".ui-unselecting",this.element[0]).each(function(){var f=a.data(this,"selectable-item");f.$element.removeClass("ui-unselecting");f.unselecting=false;f.startselected=false;c._trigger("unselected",d,{unselected:f.element})});a(".ui-selecting",this.element[0]).each(function(){var f=
a.data(this,"selectable-item");f.$element.removeClass("ui-selecting").addClass("ui-selected");f.selecting=false;f.selected=true;f.startselected=true;c._trigger("selected",d,{selected:f.element})});this._trigger("stop",d);this.helper.remove();return false}});a.extend(a.ui.selectable,{version:"1.8.13"})})(jQuery);
(function(a){a.widget("ui.sortable",a.ui.mouse,{widgetEventPrefix:"sort",options:{appendTo:"parent",axis:false,connectWith:false,containment:false,cursor:"auto",cursorAt:false,dropOnEmpty:true,forcePlaceholderSize:false,forceHelperSize:false,grid:false,handle:false,helper:"original",items:"> *",opacity:false,placeholder:false,revert:false,scroll:true,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1E3},_create:function(){var d=this.options;this.containerCache={};this.element.addClass("ui-sortable");
this.refresh();this.floating=this.items.length?d.axis==="x"||/left|right/.test(this.items[0].item.css("float"))||/inline|table-cell/.test(this.items[0].item.css("display")):false;this.offset=this.element.offset();this._mouseInit()},destroy:function(){this.element.removeClass("ui-sortable ui-sortable-disabled").removeData("sortable").unbind(".sortable");this._mouseDestroy();for(var d=this.items.length-1;d>=0;d--)this.items[d].item.removeData("sortable-item");return this},_setOption:function(d,c){if(d===
"disabled"){this.options[d]=c;this.widget()[c?"addClass":"removeClass"]("ui-sortable-disabled")}else a.Widget.prototype._setOption.apply(this,arguments)},_mouseCapture:function(d,c){if(this.reverting)return false;if(this.options.disabled||this.options.type=="static")return false;this._refreshItems(d);var f=null,g=this;a(d.target).parents().each(function(){if(a.data(this,"sortable-item")==g){f=a(this);return false}});if(a.data(d.target,"sortable-item")==g)f=a(d.target);if(!f)return false;if(this.options.handle&&
!c){var e=false;a(this.options.handle,f).find("*").andSelf().each(function(){if(this==d.target)e=true});if(!e)return false}this.currentItem=f;this._removeCurrentsFromItems();return true},_mouseStart:function(d,c,f){c=this.options;var g=this;this.currentContainer=this;this.refreshPositions();this.helper=this._createHelper(d);this._cacheHelperProportions();this._cacheMargins();this.scrollParent=this.helper.scrollParent();this.offset=this.currentItem.offset();this.offset={top:this.offset.top-this.margins.top,
left:this.offset.left-this.margins.left};this.helper.css("position","absolute");this.cssPosition=this.helper.css("position");a.extend(this.offset,{click:{left:d.pageX-this.offset.left,top:d.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()});this.originalPosition=this._generatePosition(d);this.originalPageX=d.pageX;this.originalPageY=d.pageY;c.cursorAt&&this._adjustOffsetFromHelper(c.cursorAt);this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]};
this.helper[0]!=this.currentItem[0]&&this.currentItem.hide();this._createPlaceholder();c.containment&&this._setContainment();if(c.cursor){if(a("body").css("cursor"))this._storedCursor=a("body").css("cursor");a("body").css("cursor",c.cursor)}if(c.opacity){if(this.helper.css("opacity"))this._storedOpacity=this.helper.css("opacity");this.helper.css("opacity",c.opacity)}if(c.zIndex){if(this.helper.css("zIndex"))this._storedZIndex=this.helper.css("zIndex");this.helper.css("zIndex",c.zIndex)}if(this.scrollParent[0]!=
document&&this.scrollParent[0].tagName!="HTML")this.overflowOffset=this.scrollParent.offset();this._trigger("start",d,this._uiHash());this._preserveHelperProportions||this._cacheHelperProportions();if(!f)for(f=this.containers.length-1;f>=0;f--)this.containers[f]._trigger("activate",d,g._uiHash(this));if(a.ui.ddmanager)a.ui.ddmanager.current=this;a.ui.ddmanager&&!c.dropBehaviour&&a.ui.ddmanager.prepareOffsets(this,d);this.dragging=true;this.helper.addClass("ui-sortable-helper");this._mouseDrag(d);
return true},_mouseDrag:function(d){this.position=this._generatePosition(d);this.positionAbs=this._convertPositionTo("absolute");if(!this.lastPositionAbs)this.lastPositionAbs=this.positionAbs;if(this.options.scroll){var c=this.options,f=false;if(this.scrollParent[0]!=document&&this.scrollParent[0].tagName!="HTML"){if(this.overflowOffset.top+this.scrollParent[0].offsetHeight-d.pageY<c.scrollSensitivity)this.scrollParent[0].scrollTop=f=this.scrollParent[0].scrollTop+c.scrollSpeed;else if(d.pageY-this.overflowOffset.top<
c.scrollSensitivity)this.scrollParent[0].scrollTop=f=this.scrollParent[0].scrollTop-c.scrollSpeed;if(this.overflowOffset.left+this.scrollParent[0].offsetWidth-d.pageX<c.scrollSensitivity)this.scrollParent[0].scrollLeft=f=this.scrollParent[0].scrollLeft+c.scrollSpeed;else if(d.pageX-this.overflowOffset.left<c.scrollSensitivity)this.scrollParent[0].scrollLeft=f=this.scrollParent[0].scrollLeft-c.scrollSpeed}else{if(d.pageY-a(document).scrollTop()<c.scrollSensitivity)f=a(document).scrollTop(a(document).scrollTop()-
c.scrollSpeed);else if(a(window).height()-(d.pageY-a(document).scrollTop())<c.scrollSensitivity)f=a(document).scrollTop(a(document).scrollTop()+c.scrollSpeed);if(d.pageX-a(document).scrollLeft()<c.scrollSensitivity)f=a(document).scrollLeft(a(document).scrollLeft()-c.scrollSpeed);else if(a(window).width()-(d.pageX-a(document).scrollLeft())<c.scrollSensitivity)f=a(document).scrollLeft(a(document).scrollLeft()+c.scrollSpeed)}f!==false&&a.ui.ddmanager&&!c.dropBehaviour&&a.ui.ddmanager.prepareOffsets(this,
d)}this.positionAbs=this._convertPositionTo("absolute");if(!this.options.axis||this.options.axis!="y")this.helper[0].style.left=this.position.left+"px";if(!this.options.axis||this.options.axis!="x")this.helper[0].style.top=this.position.top+"px";for(c=this.items.length-1;c>=0;c--){f=this.items[c];var g=f.item[0],e=this._intersectsWithPointer(f);if(e)if(g!=this.currentItem[0]&&this.placeholder[e==1?"next":"prev"]()[0]!=g&&!a.ui.contains(this.placeholder[0],g)&&(this.options.type=="semi-dynamic"?!a.ui.contains(this.element[0],
g):true)){this.direction=e==1?"down":"up";if(this.options.tolerance=="pointer"||this._intersectsWithSides(f))this._rearrange(d,f);else break;this._trigger("change",d,this._uiHash());break}}this._contactContainers(d);a.ui.ddmanager&&a.ui.ddmanager.drag(this,d);this._trigger("sort",d,this._uiHash());this.lastPositionAbs=this.positionAbs;return false},_mouseStop:function(d,c){if(d){a.ui.ddmanager&&!this.options.dropBehaviour&&a.ui.ddmanager.drop(this,d);if(this.options.revert){var f=this;c=f.placeholder.offset();
f.reverting=true;a(this.helper).animate({left:c.left-this.offset.parent.left-f.margins.left+(this.offsetParent[0]==document.body?0:this.offsetParent[0].scrollLeft),top:c.top-this.offset.parent.top-f.margins.top+(this.offsetParent[0]==document.body?0:this.offsetParent[0].scrollTop)},parseInt(this.options.revert,10)||500,function(){f._clear(d)})}else this._clear(d,c);return false}},cancel:function(){var d=this;if(this.dragging){this._mouseUp({target:null});this.options.helper=="original"?this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper"):
this.currentItem.show();for(var c=this.containers.length-1;c>=0;c--){this.containers[c]._trigger("deactivate",null,d._uiHash(this));if(this.containers[c].containerCache.over){this.containers[c]._trigger("out",null,d._uiHash(this));this.containers[c].containerCache.over=0}}}if(this.placeholder){this.placeholder[0].parentNode&&this.placeholder[0].parentNode.removeChild(this.placeholder[0]);this.options.helper!="original"&&this.helper&&this.helper[0].parentNode&&this.helper.remove();a.extend(this,{helper:null,
dragging:false,reverting:false,_noFinalSort:null});this.domPosition.prev?a(this.domPosition.prev).after(this.currentItem):a(this.domPosition.parent).prepend(this.currentItem)}return this},serialize:function(d){var c=this._getItemsAsjQuery(d&&d.connected),f=[];d=d||{};a(c).each(function(){var g=(a(d.item||this).attr(d.attribute||"id")||"").match(d.expression||/(.+)[-=_](.+)/);if(g)f.push((d.key||g[1]+"[]")+"="+(d.key&&d.expression?g[1]:g[2]))});!f.length&&d.key&&f.push(d.key+"=");return f.join("&")},
toArray:function(d){var c=this._getItemsAsjQuery(d&&d.connected),f=[];d=d||{};c.each(function(){f.push(a(d.item||this).attr(d.attribute||"id")||"")});return f},_intersectsWith:function(d){var c=this.positionAbs.left,f=c+this.helperProportions.width,g=this.positionAbs.top,e=g+this.helperProportions.height,i=d.left,b=i+d.width,h=d.top,j=h+d.height,l=this.offset.click.top,o=this.offset.click.left;l=g+l>h&&g+l<j&&c+o>i&&c+o<b;return this.options.tolerance=="pointer"||this.options.forcePointerForContainers||
this.options.tolerance!="pointer"&&this.helperProportions[this.floating?"width":"height"]>d[this.floating?"width":"height"]?l:i<c+this.helperProportions.width/2&&f-this.helperProportions.width/2<b&&h<g+this.helperProportions.height/2&&e-this.helperProportions.height/2<j},_intersectsWithPointer:function(d){var c=a.ui.isOverAxis(this.positionAbs.top+this.offset.click.top,d.top,d.height);d=a.ui.isOverAxis(this.positionAbs.left+this.offset.click.left,d.left,d.width);c=c&&d;d=this._getDragVerticalDirection();
var f=this._getDragHorizontalDirection();if(!c)return false;return this.floating?f&&f=="right"||d=="down"?2:1:d&&(d=="down"?2:1)},_intersectsWithSides:function(d){var c=a.ui.isOverAxis(this.positionAbs.top+this.offset.click.top,d.top+d.height/2,d.height);d=a.ui.isOverAxis(this.positionAbs.left+this.offset.click.left,d.left+d.width/2,d.width);var f=this._getDragVerticalDirection(),g=this._getDragHorizontalDirection();return this.floating&&g?g=="right"&&d||g=="left"&&!d:f&&(f=="down"&&c||f=="up"&&!c)},
_getDragVerticalDirection:function(){var d=this.positionAbs.top-this.lastPositionAbs.top;return d!=0&&(d>0?"down":"up")},_getDragHorizontalDirection:function(){var d=this.positionAbs.left-this.lastPositionAbs.left;return d!=0&&(d>0?"right":"left")},refresh:function(d){this._refreshItems(d);this.refreshPositions();return this},_connectWith:function(){var d=this.options;return d.connectWith.constructor==String?[d.connectWith]:d.connectWith},_getItemsAsjQuery:function(d){var c=[],f=[],g=this._connectWith();
if(g&&d)for(d=g.length-1;d>=0;d--)for(var e=a(g[d]),i=e.length-1;i>=0;i--){var b=a.data(e[i],"sortable");if(b&&b!=this&&!b.options.disabled)f.push([a.isFunction(b.options.items)?b.options.items.call(b.element):a(b.options.items,b.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),b])}f.push([a.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):a(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),
this]);for(d=f.length-1;d>=0;d--)f[d][0].each(function(){c.push(this)});return a(c)},_removeCurrentsFromItems:function(){for(var d=this.currentItem.find(":data(sortable-item)"),c=0;c<this.items.length;c++)for(var f=0;f<d.length;f++)d[f]==this.items[c].item[0]&&this.items.splice(c,1)},_refreshItems:function(d){this.items=[];this.containers=[this];var c=this.items,f=[[a.isFunction(this.options.items)?this.options.items.call(this.element[0],d,{item:this.currentItem}):a(this.options.items,this.element),
this]],g=this._connectWith();if(g)for(var e=g.length-1;e>=0;e--)for(var i=a(g[e]),b=i.length-1;b>=0;b--){var h=a.data(i[b],"sortable");if(h&&h!=this&&!h.options.disabled){f.push([a.isFunction(h.options.items)?h.options.items.call(h.element[0],d,{item:this.currentItem}):a(h.options.items,h.element),h]);this.containers.push(h)}}for(e=f.length-1;e>=0;e--){d=f[e][1];g=f[e][0];b=0;for(i=g.length;b<i;b++){h=a(g[b]);h.data("sortable-item",d);c.push({item:h,instance:d,width:0,height:0,left:0,top:0})}}},refreshPositions:function(d){if(this.offsetParent&&
this.helper)this.offset.parent=this._getParentOffset();for(var c=this.items.length-1;c>=0;c--){var f=this.items[c];if(!(f.instance!=this.currentContainer&&this.currentContainer&&f.item[0]!=this.currentItem[0])){var g=this.options.toleranceElement?a(this.options.toleranceElement,f.item):f.item;if(!d){f.width=g.outerWidth();f.height=g.outerHeight()}g=g.offset();f.left=g.left;f.top=g.top}}if(this.options.custom&&this.options.custom.refreshContainers)this.options.custom.refreshContainers.call(this);else for(c=
this.containers.length-1;c>=0;c--){g=this.containers[c].element.offset();this.containers[c].containerCache.left=g.left;this.containers[c].containerCache.top=g.top;this.containers[c].containerCache.width=this.containers[c].element.outerWidth();this.containers[c].containerCache.height=this.containers[c].element.outerHeight()}return this},_createPlaceholder:function(d){var c=d||this,f=c.options;if(!f.placeholder||f.placeholder.constructor==String){var g=f.placeholder;f.placeholder={element:function(){var e=
a(document.createElement(c.currentItem[0].nodeName)).addClass(g||c.currentItem[0].className+" ui-sortable-placeholder").removeClass("ui-sortable-helper")[0];if(!g)e.style.visibility="hidden";return e},update:function(e,i){if(!(g&&!f.forcePlaceholderSize)){i.height()||i.height(c.currentItem.innerHeight()-parseInt(c.currentItem.css("paddingTop")||0,10)-parseInt(c.currentItem.css("paddingBottom")||0,10));i.width()||i.width(c.currentItem.innerWidth()-parseInt(c.currentItem.css("paddingLeft")||0,10)-parseInt(c.currentItem.css("paddingRight")||
0,10))}}}}c.placeholder=a(f.placeholder.element.call(c.element,c.currentItem));c.currentItem.after(c.placeholder);f.placeholder.update(c,c.placeholder)},_contactContainers:function(d){for(var c=null,f=null,g=this.containers.length-1;g>=0;g--)if(!a.ui.contains(this.currentItem[0],this.containers[g].element[0]))if(this._intersectsWith(this.containers[g].containerCache)){if(!(c&&a.ui.contains(this.containers[g].element[0],c.element[0]))){c=this.containers[g];f=g}}else if(this.containers[g].containerCache.over){this.containers[g]._trigger("out",
d,this._uiHash(this));this.containers[g].containerCache.over=0}if(c)if(this.containers.length===1){this.containers[f]._trigger("over",d,this._uiHash(this));this.containers[f].containerCache.over=1}else if(this.currentContainer!=this.containers[f]){c=1E4;g=null;for(var e=this.positionAbs[this.containers[f].floating?"left":"top"],i=this.items.length-1;i>=0;i--)if(a.ui.contains(this.containers[f].element[0],this.items[i].item[0])){var b=this.items[i][this.containers[f].floating?"left":"top"];if(Math.abs(b-
e)<c){c=Math.abs(b-e);g=this.items[i]}}if(g||this.options.dropOnEmpty){this.currentContainer=this.containers[f];g?this._rearrange(d,g,null,true):this._rearrange(d,null,this.containers[f].element,true);this._trigger("change",d,this._uiHash());this.containers[f]._trigger("change",d,this._uiHash(this));this.options.placeholder.update(this.currentContainer,this.placeholder);this.containers[f]._trigger("over",d,this._uiHash(this));this.containers[f].containerCache.over=1}}},_createHelper:function(d){var c=
this.options;d=a.isFunction(c.helper)?a(c.helper.apply(this.element[0],[d,this.currentItem])):c.helper=="clone"?this.currentItem.clone():this.currentItem;d.parents("body").length||a(c.appendTo!="parent"?c.appendTo:this.currentItem[0].parentNode)[0].appendChild(d[0]);if(d[0]==this.currentItem[0])this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")};if(d[0].style.width==
""||c.forceHelperSize)d.width(this.currentItem.width());if(d[0].style.height==""||c.forceHelperSize)d.height(this.currentItem.height());return d},_adjustOffsetFromHelper:function(d){if(typeof d=="string")d=d.split(" ");if(a.isArray(d))d={left:+d[0],top:+d[1]||0};if("left"in d)this.offset.click.left=d.left+this.margins.left;if("right"in d)this.offset.click.left=this.helperProportions.width-d.right+this.margins.left;if("top"in d)this.offset.click.top=d.top+this.margins.top;if("bottom"in d)this.offset.click.top=
this.helperProportions.height-d.bottom+this.margins.top},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var d=this.offsetParent.offset();if(this.cssPosition=="absolute"&&this.scrollParent[0]!=document&&a.ui.contains(this.scrollParent[0],this.offsetParent[0])){d.left+=this.scrollParent.scrollLeft();d.top+=this.scrollParent.scrollTop()}if(this.offsetParent[0]==document.body||this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=="html"&&a.browser.msie)d=
{top:0,left:0};return{top:d.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:d.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if(this.cssPosition=="relative"){var d=this.currentItem.position();return{top:d.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:d.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}else return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.currentItem.css("marginLeft"),
10)||0,top:parseInt(this.currentItem.css("marginTop"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var d=this.options;if(d.containment=="parent")d.containment=this.helper[0].parentNode;if(d.containment=="document"||d.containment=="window")this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,a(d.containment=="document"?
document:window).width()-this.helperProportions.width-this.margins.left,(a(d.containment=="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];if(!/^(document|window|parent)$/.test(d.containment)){var c=a(d.containment)[0];d=a(d.containment).offset();var f=a(c).css("overflow")!="hidden";this.containment=[d.left+(parseInt(a(c).css("borderLeftWidth"),10)||0)+(parseInt(a(c).css("paddingLeft"),10)||0)-this.margins.left,d.top+(parseInt(a(c).css("borderTopWidth"),
10)||0)+(parseInt(a(c).css("paddingTop"),10)||0)-this.margins.top,d.left+(f?Math.max(c.scrollWidth,c.offsetWidth):c.offsetWidth)-(parseInt(a(c).css("borderLeftWidth"),10)||0)-(parseInt(a(c).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,d.top+(f?Math.max(c.scrollHeight,c.offsetHeight):c.offsetHeight)-(parseInt(a(c).css("borderTopWidth"),10)||0)-(parseInt(a(c).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top]}},_convertPositionTo:function(d,c){if(!c)c=
this.position;d=d=="absolute"?1:-1;var f=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&a.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,g=/(html|body)/i.test(f[0].tagName);return{top:c.top+this.offset.relative.top*d+this.offset.parent.top*d-(a.browser.safari&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():g?0:f.scrollTop())*d),left:c.left+this.offset.relative.left*d+this.offset.parent.left*d-(a.browser.safari&&
this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():g?0:f.scrollLeft())*d)}},_generatePosition:function(d){var c=this.options,f=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&a.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,g=/(html|body)/i.test(f[0].tagName);if(this.cssPosition=="relative"&&!(this.scrollParent[0]!=document&&this.scrollParent[0]!=this.offsetParent[0]))this.offset.relative=this._getRelativeOffset();
var e=d.pageX,i=d.pageY;if(this.originalPosition){if(this.containment){if(d.pageX-this.offset.click.left<this.containment[0])e=this.containment[0]+this.offset.click.left;if(d.pageY-this.offset.click.top<this.containment[1])i=this.containment[1]+this.offset.click.top;if(d.pageX-this.offset.click.left>this.containment[2])e=this.containment[2]+this.offset.click.left;if(d.pageY-this.offset.click.top>this.containment[3])i=this.containment[3]+this.offset.click.top}if(c.grid){i=this.originalPageY+Math.round((i-
this.originalPageY)/c.grid[1])*c.grid[1];i=this.containment?!(i-this.offset.click.top<this.containment[1]||i-this.offset.click.top>this.containment[3])?i:!(i-this.offset.click.top<this.containment[1])?i-c.grid[1]:i+c.grid[1]:i;e=this.originalPageX+Math.round((e-this.originalPageX)/c.grid[0])*c.grid[0];e=this.containment?!(e-this.offset.click.left<this.containment[0]||e-this.offset.click.left>this.containment[2])?e:!(e-this.offset.click.left<this.containment[0])?e-c.grid[0]:e+c.grid[0]:e}}return{top:i-
this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(a.browser.safari&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollTop():g?0:f.scrollTop()),left:e-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(a.browser.safari&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():g?0:f.scrollLeft())}},_rearrange:function(d,c,f,g){f?f[0].appendChild(this.placeholder[0]):c.item[0].parentNode.insertBefore(this.placeholder[0],
this.direction=="down"?c.item[0]:c.item[0].nextSibling);this.counter=this.counter?++this.counter:1;var e=this,i=this.counter;window.setTimeout(function(){i==e.counter&&e.refreshPositions(!g)},0)},_clear:function(d,c){this.reverting=false;var f=[];!this._noFinalSort&&this.currentItem[0].parentNode&&this.placeholder.before(this.currentItem);this._noFinalSort=null;if(this.helper[0]==this.currentItem[0]){for(var g in this._storedCSS)if(this._storedCSS[g]=="auto"||this._storedCSS[g]=="static")this._storedCSS[g]=
"";this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")}else this.currentItem.show();this.fromOutside&&!c&&f.push(function(e){this._trigger("receive",e,this._uiHash(this.fromOutside))});if((this.fromOutside||this.domPosition.prev!=this.currentItem.prev().not(".ui-sortable-helper")[0]||this.domPosition.parent!=this.currentItem.parent()[0])&&!c)f.push(function(e){this._trigger("update",e,this._uiHash())});if(!a.ui.contains(this.element[0],this.currentItem[0])){c||f.push(function(e){this._trigger("remove",
e,this._uiHash())});for(g=this.containers.length-1;g>=0;g--)if(a.ui.contains(this.containers[g].element[0],this.currentItem[0])&&!c){f.push(function(e){return function(i){e._trigger("receive",i,this._uiHash(this))}}.call(this,this.containers[g]));f.push(function(e){return function(i){e._trigger("update",i,this._uiHash(this))}}.call(this,this.containers[g]))}}for(g=this.containers.length-1;g>=0;g--){c||f.push(function(e){return function(i){e._trigger("deactivate",i,this._uiHash(this))}}.call(this,
this.containers[g]));if(this.containers[g].containerCache.over){f.push(function(e){return function(i){e._trigger("out",i,this._uiHash(this))}}.call(this,this.containers[g]));this.containers[g].containerCache.over=0}}this._storedCursor&&a("body").css("cursor",this._storedCursor);this._storedOpacity&&this.helper.css("opacity",this._storedOpacity);if(this._storedZIndex)this.helper.css("zIndex",this._storedZIndex=="auto"?"":this._storedZIndex);this.dragging=false;if(this.cancelHelperRemoval){if(!c){this._trigger("beforeStop",
d,this._uiHash());for(g=0;g<f.length;g++)f[g].call(this,d);this._trigger("stop",d,this._uiHash())}return false}c||this._trigger("beforeStop",d,this._uiHash());this.placeholder[0].parentNode.removeChild(this.placeholder[0]);this.helper[0]!=this.currentItem[0]&&this.helper.remove();this.helper=null;if(!c){for(g=0;g<f.length;g++)f[g].call(this,d);this._trigger("stop",d,this._uiHash())}this.fromOutside=false;return true},_trigger:function(){a.Widget.prototype._trigger.apply(this,arguments)===false&&this.cancel()},
_uiHash:function(d){var c=d||this;return{helper:c.helper,placeholder:c.placeholder||a([]),position:c.position,originalPosition:c.originalPosition,offset:c.positionAbs,item:c.currentItem,sender:d?d.element:null}}});a.extend(a.ui.sortable,{version:"1.8.13"})})(jQuery);
jQuery.effects||function(a,d){function c(n){var k;if(n&&n.constructor==Array&&n.length==3)return n;if(k=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(n))return[parseInt(k[1],10),parseInt(k[2],10),parseInt(k[3],10)];if(k=/rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(n))return[parseFloat(k[1])*2.55,parseFloat(k[2])*2.55,parseFloat(k[3])*2.55];if(k=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(n))return[parseInt(k[1],
16),parseInt(k[2],16),parseInt(k[3],16)];if(k=/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(n))return[parseInt(k[1]+k[1],16),parseInt(k[2]+k[2],16),parseInt(k[3]+k[3],16)];if(/rgba\(0, 0, 0, 0\)/.exec(n))return j.transparent;return j[a.trim(n).toLowerCase()]}function f(n,k){var m;do{m=a.curCSS(n,k);if(m!=""&&m!="transparent"||a.nodeName(n,"body"))break;k="backgroundColor"}while(n=n.parentNode);return c(m)}function g(){var n=document.defaultView?document.defaultView.getComputedStyle(this,null):this.currentStyle,
k={},m,p;if(n&&n.length&&n[0]&&n[n[0]])for(var q=n.length;q--;){m=n[q];if(typeof n[m]=="string"){p=m.replace(/\-(\w)/g,function(s,r){return r.toUpperCase()});k[p]=n[m]}}else for(m in n)if(typeof n[m]==="string")k[m]=n[m];return k}function e(n){var k,m;for(k in n){m=n[k];if(m==null||a.isFunction(m)||k in o||/scrollbar/.test(k)||!/color/i.test(k)&&isNaN(parseFloat(m)))delete n[k]}return n}function i(n,k){var m={_:0},p;for(p in k)if(n[p]!=k[p])m[p]=k[p];return m}function b(n,k,m,p){if(typeof n=="object"){p=
k;m=null;k=n;n=k.effect}if(a.isFunction(k)){p=k;m=null;k={}}if(typeof k=="number"||a.fx.speeds[k]){p=m;m=k;k={}}if(a.isFunction(m)){p=m;m=null}k=k||{};m=m||k.duration;m=a.fx.off?0:typeof m=="number"?m:m in a.fx.speeds?a.fx.speeds[m]:a.fx.speeds._default;p=p||k.complete;return[n,k,m,p]}function h(n){if(!n||typeof n==="number"||a.fx.speeds[n])return true;if(typeof n==="string"&&!a.effects[n])return true;return false}a.effects={};a.each(["backgroundColor","borderBottomColor","borderLeftColor","borderRightColor",
"borderTopColor","borderColor","color","outlineColor"],function(n,k){a.fx.step[k]=function(m){if(!m.colorInit){m.start=f(m.elem,k);m.end=c(m.end);m.colorInit=true}m.elem.style[k]="rgb("+Math.max(Math.min(parseInt(m.pos*(m.end[0]-m.start[0])+m.start[0],10),255),0)+","+Math.max(Math.min(parseInt(m.pos*(m.end[1]-m.start[1])+m.start[1],10),255),0)+","+Math.max(Math.min(parseInt(m.pos*(m.end[2]-m.start[2])+m.start[2],10),255),0)+")"}});var j={aqua:[0,255,255],azure:[240,255,255],beige:[245,245,220],black:[0,
0,0],blue:[0,0,255],brown:[165,42,42],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgrey:[169,169,169],darkgreen:[0,100,0],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkviolet:[148,0,211],fuchsia:[255,0,255],gold:[255,215,0],green:[0,128,0],indigo:[75,0,130],khaki:[240,230,140],lightblue:[173,216,230],lightcyan:[224,255,255],lightgreen:[144,238,144],lightgrey:[211,
211,211],lightpink:[255,182,193],lightyellow:[255,255,224],lime:[0,255,0],magenta:[255,0,255],maroon:[128,0,0],navy:[0,0,128],olive:[128,128,0],orange:[255,165,0],pink:[255,192,203],purple:[128,0,128],violet:[128,0,128],red:[255,0,0],silver:[192,192,192],white:[255,255,255],yellow:[255,255,0],transparent:[255,255,255]},l=["add","remove","toggle"],o={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};a.effects.animateClass=function(n,k,m,
p){if(a.isFunction(m)){p=m;m=null}return this.queue(function(){var q=a(this),s=q.attr("style")||" ",r=e(g.call(this)),u,v=q.attr("class");a.each(l,function(w,x){n[x]&&q[x+"Class"](n[x])});u=e(g.call(this));q.attr("class",v);q.animate(i(r,u),{queue:false,duration:k,easding:m,complete:function(){a.each(l,function(w,x){n[x]&&q[x+"Class"](n[x])});if(typeof q.attr("style")=="object"){q.attr("style").cssText="";q.attr("style").cssText=s}else q.attr("style",s);p&&p.apply(this,arguments);a.dequeue(this)}})})};
a.fn.extend({_addClass:a.fn.addClass,addClass:function(n,k,m,p){return k?a.effects.animateClass.apply(this,[{add:n},k,m,p]):this._addClass(n)},_removeClass:a.fn.removeClass,removeClass:function(n,k,m,p){return k?a.effects.animateClass.apply(this,[{remove:n},k,m,p]):this._removeClass(n)},_toggleClass:a.fn.toggleClass,toggleClass:function(n,k,m,p,q){return typeof k=="boolean"||k===d?m?a.effects.animateClass.apply(this,[k?{add:n}:{remove:n},m,p,q]):this._toggleClass(n,k):a.effects.animateClass.apply(this,
[{toggle:n},k,m,p])},switchClass:function(n,k,m,p,q){return a.effects.animateClass.apply(this,[{add:k,remove:n},m,p,q])}});a.extend(a.effects,{version:"1.8.13",save:function(n,k){for(var m=0;m<k.length;m++)k[m]!==null&&n.data("ec.storage."+k[m],n[0].style[k[m]])},restore:function(n,k){for(var m=0;m<k.length;m++)k[m]!==null&&n.css(k[m],n.data("ec.storage."+k[m]))},setMode:function(n,k){if(k=="toggle")k=n.is(":hidden")?"show":"hide";return k},getBaseline:function(n,k){var m;switch(n[0]){case "top":m=
0;break;case "middle":m=0.5;break;case "bottom":m=1;break;default:m=n[0]/k.height}switch(n[1]){case "left":n=0;break;case "center":n=0.5;break;case "right":n=1;break;default:n=n[1]/k.width}return{x:n,y:m}},createWrapper:function(n){if(n.parent().is(".ui-effects-wrapper"))return n.parent();var k={width:n.outerWidth(true),height:n.outerHeight(true),"float":n.css("float")},m=a("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0});
n.wrap(m);m=n.parent();if(n.css("position")=="static"){m.css({position:"relative"});n.css({position:"relative"})}else{a.extend(k,{position:n.css("position"),zIndex:n.css("z-index")});a.each(["top","left","bottom","right"],function(p,q){k[q]=n.css(q);if(isNaN(parseInt(k[q],10)))k[q]="auto"});n.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})}return m.css(k).show()},removeWrapper:function(n){if(n.parent().is(".ui-effects-wrapper"))return n.parent().replaceWith(n);return n},setTransition:function(n,
k,m,p){p=p||{};a.each(k,function(q,s){unit=n.cssUnit(s);if(unit[0]>0)p[s]=unit[0]*m+unit[1]});return p}});a.fn.extend({effect:function(n){var k=b.apply(this,arguments),m={options:k[1],duration:k[2],callback:k[3]};k=m.options.mode;var p=a.effects[n];if(a.fx.off||!p)return k?this[k](m.duration,m.callback):this.each(function(){m.callback&&m.callback.call(this)});return p.call(this,m)},_show:a.fn.show,show:function(n){if(h(n))return this._show.apply(this,arguments);else{var k=b.apply(this,arguments);
k[1].mode="show";return this.effect.apply(this,k)}},_hide:a.fn.hide,hide:function(n){if(h(n))return this._hide.apply(this,arguments);else{var k=b.apply(this,arguments);k[1].mode="hide";return this.effect.apply(this,k)}},__toggle:a.fn.toggle,toggle:function(n){if(h(n)||typeof n==="boolean"||a.isFunction(n))return this.__toggle.apply(this,arguments);else{var k=b.apply(this,arguments);k[1].mode="toggle";return this.effect.apply(this,k)}},cssUnit:function(n){var k=this.css(n),m=[];a.each(["em","px","%",
"pt"],function(p,q){if(k.indexOf(q)>0)m=[parseFloat(k),q]});return m}});a.easing.jswing=a.easing.swing;a.extend(a.easing,{def:"easeOutQuad",swing:function(n,k,m,p,q){return a.easing[a.easing.def](n,k,m,p,q)},easeInQuad:function(n,k,m,p,q){return p*(k/=q)*k+m},easeOutQuad:function(n,k,m,p,q){return-p*(k/=q)*(k-2)+m},easeInOutQuad:function(n,k,m,p,q){if((k/=q/2)<1)return p/2*k*k+m;return-p/2*(--k*(k-2)-1)+m},easeInCubic:function(n,k,m,p,q){return p*(k/=q)*k*k+m},easeOutCubic:function(n,k,m,p,q){return p*
((k=k/q-1)*k*k+1)+m},easeInOutCubic:function(n,k,m,p,q){if((k/=q/2)<1)return p/2*k*k*k+m;return p/2*((k-=2)*k*k+2)+m},easeInQuart:function(n,k,m,p,q){return p*(k/=q)*k*k*k+m},easeOutQuart:function(n,k,m,p,q){return-p*((k=k/q-1)*k*k*k-1)+m},easeInOutQuart:function(n,k,m,p,q){if((k/=q/2)<1)return p/2*k*k*k*k+m;return-p/2*((k-=2)*k*k*k-2)+m},easeInQuint:function(n,k,m,p,q){return p*(k/=q)*k*k*k*k+m},easeOutQuint:function(n,k,m,p,q){return p*((k=k/q-1)*k*k*k*k+1)+m},easeInOutQuint:function(n,k,m,p,q){if((k/=
q/2)<1)return p/2*k*k*k*k*k+m;return p/2*((k-=2)*k*k*k*k+2)+m},easeInSine:function(n,k,m,p,q){return-p*Math.cos(k/q*(Math.PI/2))+p+m},easeOutSine:function(n,k,m,p,q){return p*Math.sin(k/q*(Math.PI/2))+m},easeInOutSine:function(n,k,m,p,q){return-p/2*(Math.cos(Math.PI*k/q)-1)+m},easeInExpo:function(n,k,m,p,q){return k==0?m:p*Math.pow(2,10*(k/q-1))+m},easeOutExpo:function(n,k,m,p,q){return k==q?m+p:p*(-Math.pow(2,-10*k/q)+1)+m},easeInOutExpo:function(n,k,m,p,q){if(k==0)return m;if(k==q)return m+p;if((k/=
q/2)<1)return p/2*Math.pow(2,10*(k-1))+m;return p/2*(-Math.pow(2,-10*--k)+2)+m},easeInCirc:function(n,k,m,p,q){return-p*(Math.sqrt(1-(k/=q)*k)-1)+m},easeOutCirc:function(n,k,m,p,q){return p*Math.sqrt(1-(k=k/q-1)*k)+m},easeInOutCirc:function(n,k,m,p,q){if((k/=q/2)<1)return-p/2*(Math.sqrt(1-k*k)-1)+m;return p/2*(Math.sqrt(1-(k-=2)*k)+1)+m},easeInElastic:function(n,k,m,p,q){n=1.70158;var s=0,r=p;if(k==0)return m;if((k/=q)==1)return m+p;s||(s=q*0.3);if(r<Math.abs(p)){r=p;n=s/4}else n=s/(2*Math.PI)*Math.asin(p/
r);return-(r*Math.pow(2,10*(k-=1))*Math.sin((k*q-n)*2*Math.PI/s))+m},easeOutElastic:function(n,k,m,p,q){n=1.70158;var s=0,r=p;if(k==0)return m;if((k/=q)==1)return m+p;s||(s=q*0.3);if(r<Math.abs(p)){r=p;n=s/4}else n=s/(2*Math.PI)*Math.asin(p/r);return r*Math.pow(2,-10*k)*Math.sin((k*q-n)*2*Math.PI/s)+p+m},easeInOutElastic:function(n,k,m,p,q){n=1.70158;var s=0,r=p;if(k==0)return m;if((k/=q/2)==2)return m+p;s||(s=q*0.3*1.5);if(r<Math.abs(p)){r=p;n=s/4}else n=s/(2*Math.PI)*Math.asin(p/r);if(k<1)return-0.5*
r*Math.pow(2,10*(k-=1))*Math.sin((k*q-n)*2*Math.PI/s)+m;return r*Math.pow(2,-10*(k-=1))*Math.sin((k*q-n)*2*Math.PI/s)*0.5+p+m},easeInBack:function(n,k,m,p,q,s){if(s==d)s=1.70158;return p*(k/=q)*k*((s+1)*k-s)+m},easeOutBack:function(n,k,m,p,q,s){if(s==d)s=1.70158;return p*((k=k/q-1)*k*((s+1)*k+s)+1)+m},easeInOutBack:function(n,k,m,p,q,s){if(s==d)s=1.70158;if((k/=q/2)<1)return p/2*k*k*(((s*=1.525)+1)*k-s)+m;return p/2*((k-=2)*k*(((s*=1.525)+1)*k+s)+2)+m},easeInBounce:function(n,k,m,p,q){return p-a.easing.easeOutBounce(n,
q-k,0,p,q)+m},easeOutBounce:function(n,k,m,p,q){return(k/=q)<1/2.75?p*7.5625*k*k+m:k<2/2.75?p*(7.5625*(k-=1.5/2.75)*k+0.75)+m:k<2.5/2.75?p*(7.5625*(k-=2.25/2.75)*k+0.9375)+m:p*(7.5625*(k-=2.625/2.75)*k+0.984375)+m},easeInOutBounce:function(n,k,m,p,q){if(k<q/2)return a.easing.easeInBounce(n,k*2,0,p,q)*0.5+m;return a.easing.easeOutBounce(n,k*2-q,0,p,q)*0.5+p*0.5+m}})}(jQuery);
(function(a){a.effects.blind=function(d){return this.queue(function(){var c=a(this),f=["position","top","bottom","left","right"],g=a.effects.setMode(c,d.options.mode||"hide"),e=d.options.direction||"vertical";a.effects.save(c,f);c.show();var i=a.effects.createWrapper(c).css({overflow:"hidden"}),b=e=="vertical"?"height":"width";e=e=="vertical"?i.height():i.width();g=="show"&&i.css(b,0);var h={};h[b]=g=="show"?e:0;i.animate(h,d.duration,d.options.easing,function(){g=="hide"&&c.hide();a.effects.restore(c,
f);a.effects.removeWrapper(c);d.callback&&d.callback.apply(c[0],arguments);c.dequeue()})})}})(jQuery);
(function(a){a.effects.bounce=function(d){return this.queue(function(){var c=a(this),f=["position","top","bottom","left","right"],g=a.effects.setMode(c,d.options.mode||"effect"),e=d.options.direction||"up",i=d.options.distance||20,b=d.options.times||5,h=d.duration||250;/show|hide/.test(g)&&f.push("opacity");a.effects.save(c,f);c.show();a.effects.createWrapper(c);var j=e=="up"||e=="down"?"top":"left";e=e=="up"||e=="left"?"pos":"neg";i=d.options.distance||(j=="top"?c.outerHeight({margin:true})/3:c.outerWidth({margin:true})/
3);if(g=="show")c.css("opacity",0).css(j,e=="pos"?-i:i);if(g=="hide")i/=b*2;g!="hide"&&b--;if(g=="show"){var l={opacity:1};l[j]=(e=="pos"?"+=":"-=")+i;c.animate(l,h/2,d.options.easing);i/=2;b--}for(l=0;l<b;l++){var o={},n={};o[j]=(e=="pos"?"-=":"+=")+i;n[j]=(e=="pos"?"+=":"-=")+i;c.animate(o,h/2,d.options.easing).animate(n,h/2,d.options.easing);i=g=="hide"?i*2:i/2}if(g=="hide"){l={opacity:0};l[j]=(e=="pos"?"-=":"+=")+i;c.animate(l,h/2,d.options.easing,function(){c.hide();a.effects.restore(c,f);a.effects.removeWrapper(c);
d.callback&&d.callback.apply(this,arguments)})}else{o={};n={};o[j]=(e=="pos"?"-=":"+=")+i;n[j]=(e=="pos"?"+=":"-=")+i;c.animate(o,h/2,d.options.easing).animate(n,h/2,d.options.easing,function(){a.effects.restore(c,f);a.effects.removeWrapper(c);d.callback&&d.callback.apply(this,arguments)})}c.queue("fx",function(){c.dequeue()});c.dequeue()})}})(jQuery);
(function(a){a.effects.clip=function(d){return this.queue(function(){var c=a(this),f=["position","top","bottom","left","right","height","width"],g=a.effects.setMode(c,d.options.mode||"hide"),e=d.options.direction||"vertical";a.effects.save(c,f);c.show();var i=a.effects.createWrapper(c).css({overflow:"hidden"});i=c[0].tagName=="IMG"?i:c;var b={size:e=="vertical"?"height":"width",position:e=="vertical"?"top":"left"};e=e=="vertical"?i.height():i.width();if(g=="show"){i.css(b.size,0);i.css(b.position,
e/2)}var h={};h[b.size]=g=="show"?e:0;h[b.position]=g=="show"?0:e/2;i.animate(h,{queue:false,duration:d.duration,easing:d.options.easing,complete:function(){g=="hide"&&c.hide();a.effects.restore(c,f);a.effects.removeWrapper(c);d.callback&&d.callback.apply(c[0],arguments);c.dequeue()}})})}})(jQuery);
(function(a){a.effects.drop=function(d){return this.queue(function(){var c=a(this),f=["position","top","bottom","left","right","opacity"],g=a.effects.setMode(c,d.options.mode||"hide"),e=d.options.direction||"left";a.effects.save(c,f);c.show();a.effects.createWrapper(c);var i=e=="up"||e=="down"?"top":"left";e=e=="up"||e=="left"?"pos":"neg";var b=d.options.distance||(i=="top"?c.outerHeight({margin:true})/2:c.outerWidth({margin:true})/2);if(g=="show")c.css("opacity",0).css(i,e=="pos"?-b:b);var h={opacity:g==
"show"?1:0};h[i]=(g=="show"?e=="pos"?"+=":"-=":e=="pos"?"-=":"+=")+b;c.animate(h,{queue:false,duration:d.duration,easing:d.options.easing,complete:function(){g=="hide"&&c.hide();a.effects.restore(c,f);a.effects.removeWrapper(c);d.callback&&d.callback.apply(this,arguments);c.dequeue()}})})}})(jQuery);
(function(a){a.effects.explode=function(d){return this.queue(function(){var c=d.options.pieces?Math.round(Math.sqrt(d.options.pieces)):3,f=d.options.pieces?Math.round(Math.sqrt(d.options.pieces)):3;d.options.mode=d.options.mode=="toggle"?a(this).is(":visible")?"hide":"show":d.options.mode;var g=a(this).show().css("visibility","hidden"),e=g.offset();e.top-=parseInt(g.css("marginTop"),10)||0;e.left-=parseInt(g.css("marginLeft"),10)||0;for(var i=g.outerWidth(true),b=g.outerHeight(true),h=0;h<c;h++)for(var j=
0;j<f;j++)g.clone().appendTo("body").wrap("<div></div>").css({position:"absolute",visibility:"visible",left:-j*(i/f),top:-h*(b/c)}).parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:i/f,height:b/c,left:e.left+j*(i/f)+(d.options.mode=="show"?(j-Math.floor(f/2))*(i/f):0),top:e.top+h*(b/c)+(d.options.mode=="show"?(h-Math.floor(c/2))*(b/c):0),opacity:d.options.mode=="show"?0:1}).animate({left:e.left+j*(i/f)+(d.options.mode=="show"?0:(j-Math.floor(f/2))*(i/f)),top:e.top+
h*(b/c)+(d.options.mode=="show"?0:(h-Math.floor(c/2))*(b/c)),opacity:d.options.mode=="show"?1:0},d.duration||500);setTimeout(function(){d.options.mode=="show"?g.css({visibility:"visible"}):g.css({visibility:"visible"}).hide();d.callback&&d.callback.apply(g[0]);g.dequeue();a("div.ui-effects-explode").remove()},d.duration||500)})}})(jQuery);
(function(a){a.effects.fade=function(d){return this.queue(function(){var c=a(this),f=a.effects.setMode(c,d.options.mode||"hide");c.animate({opacity:f},{queue:false,duration:d.duration,easing:d.options.easing,complete:function(){d.callback&&d.callback.apply(this,arguments);c.dequeue()}})})}})(jQuery);
(function(a){a.effects.fold=function(d){return this.queue(function(){var c=a(this),f=["position","top","bottom","left","right"],g=a.effects.setMode(c,d.options.mode||"hide"),e=d.options.size||15,i=!!d.options.horizFirst,b=d.duration?d.duration/2:a.fx.speeds._default/2;a.effects.save(c,f);c.show();var h=a.effects.createWrapper(c).css({overflow:"hidden"}),j=g=="show"!=i,l=j?["width","height"]:["height","width"];j=j?[h.width(),h.height()]:[h.height(),h.width()];var o=/([0-9]+)%/.exec(e);if(o)e=parseInt(o[1],
10)/100*j[g=="hide"?0:1];if(g=="show")h.css(i?{height:0,width:e}:{height:e,width:0});i={};o={};i[l[0]]=g=="show"?j[0]:e;o[l[1]]=g=="show"?j[1]:0;h.animate(i,b,d.options.easing).animate(o,b,d.options.easing,function(){g=="hide"&&c.hide();a.effects.restore(c,f);a.effects.removeWrapper(c);d.callback&&d.callback.apply(c[0],arguments);c.dequeue()})})}})(jQuery);
(function(a){a.effects.highlight=function(d){return this.queue(function(){var c=a(this),f=["backgroundImage","backgroundColor","opacity"],g=a.effects.setMode(c,d.options.mode||"show"),e={backgroundColor:c.css("backgroundColor")};if(g=="hide")e.opacity=0;a.effects.save(c,f);c.show().css({backgroundImage:"none",backgroundColor:d.options.color||"#ffff99"}).animate(e,{queue:false,duration:d.duration,easing:d.options.easing,complete:function(){g=="hide"&&c.hide();a.effects.restore(c,f);g=="show"&&!a.support.opacity&&
this.style.removeAttribute("filter");d.callback&&d.callback.apply(this,arguments);c.dequeue()}})})}})(jQuery);
(function(a){a.effects.pulsate=function(d){return this.queue(function(){var c=a(this),f=a.effects.setMode(c,d.options.mode||"show");times=(d.options.times||5)*2-1;duration=d.duration?d.duration/2:a.fx.speeds._default/2;isVisible=c.is(":visible");animateTo=0;if(!isVisible){c.css("opacity",0).show();animateTo=1}if(f=="hide"&&isVisible||f=="show"&&!isVisible)times--;for(f=0;f<times;f++){c.animate({opacity:animateTo},duration,d.options.easing);animateTo=(animateTo+1)%2}c.animate({opacity:animateTo},duration,
d.options.easing,function(){animateTo==0&&c.hide();d.callback&&d.callback.apply(this,arguments)});c.queue("fx",function(){c.dequeue()}).dequeue()})}})(jQuery);
(function(a){a.effects.puff=function(d){return this.queue(function(){var c=a(this),f=a.effects.setMode(c,d.options.mode||"hide"),g=parseInt(d.options.percent,10)||150,e=g/100,i={height:c.height(),width:c.width()};a.extend(d.options,{fade:true,mode:f,percent:f=="hide"?g:100,from:f=="hide"?i:{height:i.height*e,width:i.width*e}});c.effect("scale",d.options,d.duration,d.callback);c.dequeue()})};a.effects.scale=function(d){return this.queue(function(){var c=a(this),f=a.extend(true,{},d.options),g=a.effects.setMode(c,
d.options.mode||"effect"),e=parseInt(d.options.percent,10)||(parseInt(d.options.percent,10)==0?0:g=="hide"?0:100),i=d.options.direction||"both",b=d.options.origin;if(g!="effect"){f.origin=b||["middle","center"];f.restore=true}b={height:c.height(),width:c.width()};c.from=d.options.from||(g=="show"?{height:0,width:0}:b);e={y:i!="horizontal"?e/100:1,x:i!="vertical"?e/100:1};c.to={height:b.height*e.y,width:b.width*e.x};if(d.options.fade){if(g=="show"){c.from.opacity=0;c.to.opacity=1}if(g=="hide"){c.from.opacity=
1;c.to.opacity=0}}f.from=c.from;f.to=c.to;f.mode=g;c.effect("size",f,d.duration,d.callback);c.dequeue()})};a.effects.size=function(d){return this.queue(function(){var c=a(this),f=["position","top","bottom","left","right","width","height","overflow","opacity"],g=["position","top","bottom","left","right","overflow","opacity"],e=["width","height","overflow"],i=["fontSize"],b=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"],h=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"],
j=a.effects.setMode(c,d.options.mode||"effect"),l=d.options.restore||false,o=d.options.scale||"both",n=d.options.origin,k={height:c.height(),width:c.width()};c.from=d.options.from||k;c.to=d.options.to||k;if(n){n=a.effects.getBaseline(n,k);c.from.top=(k.height-c.from.height)*n.y;c.from.left=(k.width-c.from.width)*n.x;c.to.top=(k.height-c.to.height)*n.y;c.to.left=(k.width-c.to.width)*n.x}var m={from:{y:c.from.height/k.height,x:c.from.width/k.width},to:{y:c.to.height/k.height,x:c.to.width/k.width}};
if(o=="box"||o=="both"){if(m.from.y!=m.to.y){f=f.concat(b);c.from=a.effects.setTransition(c,b,m.from.y,c.from);c.to=a.effects.setTransition(c,b,m.to.y,c.to)}if(m.from.x!=m.to.x){f=f.concat(h);c.from=a.effects.setTransition(c,h,m.from.x,c.from);c.to=a.effects.setTransition(c,h,m.to.x,c.to)}}if(o=="content"||o=="both")if(m.from.y!=m.to.y){f=f.concat(i);c.from=a.effects.setTransition(c,i,m.from.y,c.from);c.to=a.effects.setTransition(c,i,m.to.y,c.to)}a.effects.save(c,l?f:g);c.show();a.effects.createWrapper(c);
c.css("overflow","hidden").css(c.from);if(o=="content"||o=="both"){b=b.concat(["marginTop","marginBottom"]).concat(i);h=h.concat(["marginLeft","marginRight"]);e=f.concat(b).concat(h);c.find("*[width]").each(function(){child=a(this);l&&a.effects.save(child,e);var p={height:child.height(),width:child.width()};child.from={height:p.height*m.from.y,width:p.width*m.from.x};child.to={height:p.height*m.to.y,width:p.width*m.to.x};if(m.from.y!=m.to.y){child.from=a.effects.setTransition(child,b,m.from.y,child.from);
child.to=a.effects.setTransition(child,b,m.to.y,child.to)}if(m.from.x!=m.to.x){child.from=a.effects.setTransition(child,h,m.from.x,child.from);child.to=a.effects.setTransition(child,h,m.to.x,child.to)}child.css(child.from);child.animate(child.to,d.duration,d.options.easing,function(){l&&a.effects.restore(child,e)})})}c.animate(c.to,{queue:false,duration:d.duration,easing:d.options.easing,complete:function(){c.to.opacity===0&&c.css("opacity",c.from.opacity);j=="hide"&&c.hide();a.effects.restore(c,
l?f:g);a.effects.removeWrapper(c);d.callback&&d.callback.apply(this,arguments);c.dequeue()}})})}})(jQuery);
(function(a){a.effects.shake=function(d){return this.queue(function(){var c=a(this),f=["position","top","bottom","left","right"];a.effects.setMode(c,d.options.mode||"effect");var g=d.options.direction||"left",e=d.options.distance||20,i=d.options.times||3,b=d.duration||d.options.duration||140;a.effects.save(c,f);c.show();a.effects.createWrapper(c);var h=g=="up"||g=="down"?"top":"left",j=g=="up"||g=="left"?"pos":"neg";g={};var l={},o={};g[h]=(j=="pos"?"-=":"+=")+e;l[h]=(j=="pos"?"+=":"-=")+e*2;o[h]=
(j=="pos"?"-=":"+=")+e*2;c.animate(g,b,d.options.easing);for(e=1;e<i;e++)c.animate(l,b,d.options.easing).animate(o,b,d.options.easing);c.animate(l,b,d.options.easing).animate(g,b/2,d.options.easing,function(){a.effects.restore(c,f);a.effects.removeWrapper(c);d.callback&&d.callback.apply(this,arguments)});c.queue("fx",function(){c.dequeue()});c.dequeue()})}})(jQuery);
(function(a){a.effects.slide=function(d){return this.queue(function(){var c=a(this),f=["position","top","bottom","left","right"],g=a.effects.setMode(c,d.options.mode||"show"),e=d.options.direction||"left";a.effects.save(c,f);c.show();a.effects.createWrapper(c).css({overflow:"hidden"});var i=e=="up"||e=="down"?"top":"left";e=e=="up"||e=="left"?"pos":"neg";var b=d.options.distance||(i=="top"?c.outerHeight({margin:true}):c.outerWidth({margin:true}));if(g=="show")c.css(i,e=="pos"?isNaN(b)?"-"+b:-b:b);
var h={};h[i]=(g=="show"?e=="pos"?"+=":"-=":e=="pos"?"-=":"+=")+b;c.animate(h,{queue:false,duration:d.duration,easing:d.options.easing,complete:function(){g=="hide"&&c.hide();a.effects.restore(c,f);a.effects.removeWrapper(c);d.callback&&d.callback.apply(this,arguments);c.dequeue()}})})}})(jQuery);
(function(a){a.effects.transfer=function(d){return this.queue(function(){var c=a(this),f=a(d.options.to),g=f.offset();f={top:g.top,left:g.left,height:f.innerHeight(),width:f.innerWidth()};g=c.offset();var e=a('<div class="ui-effects-transfer"></div>').appendTo(document.body).addClass(d.options.className).css({top:g.top,left:g.left,height:c.innerHeight(),width:c.innerWidth(),position:"absolute"}).animate(f,d.duration,d.options.easing,function(){e.remove();d.callback&&d.callback.apply(c[0],arguments);
c.dequeue()})})}})(jQuery);
(function(a){a.widget("ui.accordion",{options:{active:0,animated:"slide",autoHeight:true,clearStyle:false,collapsible:false,event:"click",fillSpace:false,header:"> li > :first-child,> :not(li):even",icons:{header:"ui-icon-triangle-1-e",headerSelected:"ui-icon-triangle-1-s"},navigation:false,navigationFilter:function(){return this.href.toLowerCase()===location.href.toLowerCase()}},_create:function(){var d=this,c=d.options;d.running=0;d.element.addClass("ui-accordion ui-widget ui-helper-reset").children("li").addClass("ui-accordion-li-fix");d.headers=
d.element.find(c.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all").bind("mouseenter.accordion",function(){c.disabled||a(this).addClass("ui-state-hover")}).bind("mouseleave.accordion",function(){c.disabled||a(this).removeClass("ui-state-hover")}).bind("focus.accordion",function(){c.disabled||a(this).addClass("ui-state-focus")}).bind("blur.accordion",function(){c.disabled||a(this).removeClass("ui-state-focus")});d.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom");
if(c.navigation){var f=d.element.find("a").filter(c.navigationFilter).eq(0);if(f.length){var g=f.closest(".ui-accordion-header");d.active=g.length?g:f.closest(".ui-accordion-content").prev()}}d.active=d._findActive(d.active||c.active).addClass("ui-state-default ui-state-active").toggleClass("ui-corner-all").toggleClass("ui-corner-top");d.active.next().addClass("ui-accordion-content-active");d._createIcons();d.resize();d.element.attr("role","tablist");d.headers.attr("role","tab").bind("keydown.accordion",
function(e){return d._keydown(e)}).next().attr("role","tabpanel");d.headers.not(d.active||"").attr({"aria-expanded":"false","aria-selected":"false",tabIndex:-1}).next().hide();d.active.length?d.active.attr({"aria-expanded":"true","aria-selected":"true",tabIndex:0}):d.headers.eq(0).attr("tabIndex",0);a.browser.safari||d.headers.find("a").attr("tabIndex",-1);c.event&&d.headers.bind(c.event.split(" ").join(".accordion ")+".accordion",function(e){d._clickHandler.call(d,e,this);e.preventDefault()})},_createIcons:function(){var d=
this.options;if(d.icons){a("<span></span>").addClass("ui-icon "+d.icons.header).prependTo(this.headers);this.active.children(".ui-icon").toggleClass(d.icons.header).toggleClass(d.icons.headerSelected);this.element.addClass("ui-accordion-icons")}},_destroyIcons:function(){this.headers.children(".ui-icon").remove();this.element.removeClass("ui-accordion-icons")},destroy:function(){var d=this.options;this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role");this.headers.unbind(".accordion").removeClass("ui-accordion-header ui-accordion-disabled ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("tabIndex");
this.headers.find("a").removeAttr("tabIndex");this._destroyIcons();var c=this.headers.next().css("display","").removeAttr("role").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-accordion-disabled ui-state-disabled");if(d.autoHeight||d.fillHeight)c.css("height","");return a.Widget.prototype.destroy.call(this)},_setOption:function(d,c){a.Widget.prototype._setOption.apply(this,arguments);d=="active"&&this.activate(c);if(d=="icons"){this._destroyIcons();
c&&this._createIcons()}if(d=="disabled")this.headers.add(this.headers.next())[c?"addClass":"removeClass"]("ui-accordion-disabled ui-state-disabled")},_keydown:function(d){if(!(this.options.disabled||d.altKey||d.ctrlKey)){var c=a.ui.keyCode,f=this.headers.length,g=this.headers.index(d.target),e=false;switch(d.keyCode){case c.RIGHT:case c.DOWN:e=this.headers[(g+1)%f];break;case c.LEFT:case c.UP:e=this.headers[(g-1+f)%f];break;case c.SPACE:case c.ENTER:this._clickHandler({target:d.target},d.target);
d.preventDefault()}if(e){a(d.target).attr("tabIndex",-1);a(e).attr("tabIndex",0);e.focus();return false}return true}},resize:function(){var d=this.options,c;if(d.fillSpace){if(a.browser.msie){var f=this.element.parent().css("overflow");this.element.parent().css("overflow","hidden")}c=this.element.parent().height();a.browser.msie&&this.element.parent().css("overflow",f);this.headers.each(function(){c-=a(this).outerHeight(true)});this.headers.next().each(function(){a(this).height(Math.max(0,c-a(this).innerHeight()+
a(this).height()))}).css("overflow","auto")}else if(d.autoHeight){c=0;this.headers.next().each(function(){c=Math.max(c,a(this).height("").height())}).height(c)}return this},activate:function(d){this.options.active=d;d=this._findActive(d)[0];this._clickHandler({target:d},d);return this},_findActive:function(d){return d?typeof d==="number"?this.headers.filter(":eq("+d+")"):this.headers.not(this.headers.not(d)):d===false?a([]):this.headers.filter(":eq(0)")},_clickHandler:function(d,c){var f=this.options;
if(!f.disabled)if(d.target){d=a(d.currentTarget||c);c=d[0]===this.active[0];f.active=f.collapsible&&c?false:this.headers.index(d);if(!(this.running||!f.collapsible&&c)){var g=this.active;h=d.next();i=this.active.next();b={options:f,newHeader:c&&f.collapsible?a([]):d,oldHeader:this.active,newContent:c&&f.collapsible?a([]):h,oldContent:i};var e=this.headers.index(this.active[0])>this.headers.index(d[0]);this.active=c?a([]):d;this._toggle(h,i,b,c,e);g.removeClass("ui-state-active ui-corner-top").addClass("ui-state-default ui-corner-all").children(".ui-icon").removeClass(f.icons.headerSelected).addClass(f.icons.header);
if(!c){d.removeClass("ui-state-default ui-corner-all").addClass("ui-state-active ui-corner-top").children(".ui-icon").removeClass(f.icons.header).addClass(f.icons.headerSelected);d.next().addClass("ui-accordion-content-active")}}}else if(f.collapsible){this.active.removeClass("ui-state-active ui-corner-top").addClass("ui-state-default ui-corner-all").children(".ui-icon").removeClass(f.icons.headerSelected).addClass(f.icons.header);this.active.next().addClass("ui-accordion-content-active");var i=this.active.next(),
b={options:f,newHeader:a([]),oldHeader:f.active,newContent:a([]),oldContent:i},h=this.active=a([]);this._toggle(h,i,b)}},_toggle:function(d,c,f,g,e){var i=this,b=i.options;i.toShow=d;i.toHide=c;i.data=f;var h=function(){if(i)return i._completed.apply(i,arguments)};i._trigger("changestart",null,i.data);i.running=c.size()===0?d.size():c.size();if(b.animated){f={};f=b.collapsible&&g?{toShow:a([]),toHide:c,complete:h,down:e,autoHeight:b.autoHeight||b.fillSpace}:{toShow:d,toHide:c,complete:h,down:e,autoHeight:b.autoHeight||
b.fillSpace};if(!b.proxied)b.proxied=b.animated;if(!b.proxiedDuration)b.proxiedDuration=b.duration;b.animated=a.isFunction(b.proxied)?b.proxied(f):b.proxied;b.duration=a.isFunction(b.proxiedDuration)?b.proxiedDuration(f):b.proxiedDuration;g=a.ui.accordion.animations;var j=b.duration,l=b.animated;if(l&&!g[l]&&!a.easing[l])l="slide";g[l]||(g[l]=function(o){this.slide(o,{easing:l,duration:j||700})});g[l](f)}else{if(b.collapsible&&g)d.toggle();else{c.hide();d.show()}h(true)}c.prev().attr({"aria-expanded":"false",
"aria-selected":"false",tabIndex:-1}).blur();d.prev().attr({"aria-expanded":"true","aria-selected":"true",tabIndex:0}).focus()},_completed:function(d){this.running=d?0:--this.running;if(!this.running){this.options.clearStyle&&this.toShow.add(this.toHide).css({height:"",overflow:""});this.toHide.removeClass("ui-accordion-content-active");if(this.toHide.length)this.toHide.parent()[0].className=this.toHide.parent()[0].className;this._trigger("change",null,this.data)}}});a.extend(a.ui.accordion,{version:"1.8.13",
animations:{slide:function(d,c){d=a.extend({easing:"swing",duration:300},d,c);if(d.toHide.size())if(d.toShow.size()){var f=d.toShow.css("overflow"),g=0,e={},i={},b;c=d.toShow;b=c[0].style.width;c.width(parseInt(c.parent().width(),10)-parseInt(c.css("paddingLeft"),10)-parseInt(c.css("paddingRight"),10)-(parseInt(c.css("borderLeftWidth"),10)||0)-(parseInt(c.css("borderRightWidth"),10)||0));a.each(["height","paddingTop","paddingBottom"],function(h,j){i[j]="hide";h=(""+a.css(d.toShow[0],j)).match(/^([\d+-.]+)(.*)$/);
e[j]={value:h[1],unit:h[2]||"px"}});d.toShow.css({height:0,overflow:"hidden"}).show();d.toHide.filter(":hidden").each(d.complete).end().filter(":visible").animate(i,{step:function(h,j){if(j.prop=="height")g=j.end-j.start===0?0:(j.now-j.start)/(j.end-j.start);d.toShow[0].style[j.prop]=g*e[j.prop].value+e[j.prop].unit},duration:d.duration,easing:d.easing,complete:function(){d.autoHeight||d.toShow.css("height","");d.toShow.css({width:b,overflow:f});d.complete()}})}else d.toHide.animate({height:"hide",
paddingTop:"hide",paddingBottom:"hide"},d);else d.toShow.animate({height:"show",paddingTop:"show",paddingBottom:"show"},d)},bounceslide:function(d){this.slide(d,{easing:d.down?"easeOutBounce":"swing",duration:d.down?1E3:200})}}})})(jQuery);
(function(a){var d=0;a.widget("ui.autocomplete",{options:{appendTo:"body",autoFocus:false,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null},pending:0,_create:function(){var c=this,f=this.element[0].ownerDocument,g;this.element.addClass("ui-autocomplete-input").attr("autocomplete","off").attr({role:"textbox","aria-autocomplete":"list","aria-haspopup":"true"}).bind("keydown.autocomplete",function(e){if(!(c.options.disabled||c.element.attr("readonly"))){g=
false;var i=a.ui.keyCode;switch(e.keyCode){case i.PAGE_UP:c._move("previousPage",e);break;case i.PAGE_DOWN:c._move("nextPage",e);break;case i.UP:c._move("previous",e);e.preventDefault();break;case i.DOWN:c._move("next",e);e.preventDefault();break;case i.ENTER:case i.NUMPAD_ENTER:if(c.menu.active){g=true;e.preventDefault()}case i.TAB:if(!c.menu.active)return;c.menu.select(e);break;case i.ESCAPE:c.element.val(c.term);c.close(e);break;default:clearTimeout(c.searching);c.searching=setTimeout(function(){if(c.term!=
c.element.val()){c.selectedItem=null;c.search(null,e)}},c.options.delay);break}}}).bind("keypress.autocomplete",function(e){if(g){g=false;e.preventDefault()}}).bind("focus.autocomplete",function(){if(!c.options.disabled){c.selectedItem=null;c.previous=c.element.val()}}).bind("blur.autocomplete",function(e){if(!c.options.disabled){clearTimeout(c.searching);c.closing=setTimeout(function(){c.close(e);c._change(e)},150)}});this._initSource();this.response=function(){return c._response.apply(c,arguments)};
this.menu=a("<ul></ul>").addClass("ui-autocomplete").appendTo(a(this.options.appendTo||"body",f)[0]).mousedown(function(e){var i=c.menu.element[0];a(e.target).closest(".ui-menu-item").length||setTimeout(function(){a(document).one("mousedown",function(b){b.target!==c.element[0]&&b.target!==i&&!a.ui.contains(i,b.target)&&c.close()})},1);setTimeout(function(){clearTimeout(c.closing)},13)}).menu({focus:function(e,i){i=i.item.data("item.autocomplete");false!==c._trigger("focus",e,{item:i})&&/^key/.test(e.originalEvent.type)&&
c.element.val(i.value)},selected:function(e,i){var b=i.item.data("item.autocomplete"),h=c.previous;if(c.element[0]!==f.activeElement){c.element.focus();c.previous=h;setTimeout(function(){c.previous=h;c.selectedItem=b},1)}false!==c._trigger("select",e,{item:b})&&c.element.val(b.value);c.term=c.element.val();c.close(e);c.selectedItem=b},blur:function(){c.menu.element.is(":visible")&&c.element.val()!==c.term&&c.element.val(c.term)}}).zIndex(this.element.zIndex()+1).css({top:0,left:0}).hide().data("menu");
a.fn.bgiframe&&this.menu.element.bgiframe()},destroy:function(){this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete").removeAttr("role").removeAttr("aria-autocomplete").removeAttr("aria-haspopup");this.menu.element.remove();a.Widget.prototype.destroy.call(this)},_setOption:function(c,f){a.Widget.prototype._setOption.apply(this,arguments);c==="source"&&this._initSource();if(c==="appendTo")this.menu.element.appendTo(a(f||"body",this.element[0].ownerDocument)[0]);c==="disabled"&&
f&&this.xhr&&this.xhr.abort()},_initSource:function(){var c=this,f,g;if(a.isArray(this.options.source)){f=this.options.source;this.source=function(e,i){i(a.ui.autocomplete.filter(f,e.term))}}else if(typeof this.options.source==="string"){g=this.options.source;this.source=function(e,i){c.xhr&&c.xhr.abort();c.xhr=a.ajax({url:g,data:e,dataType:"json",autocompleteRequest:++d,success:function(b){this.autocompleteRequest===d&&i(b)},error:function(){this.autocompleteRequest===d&&i([])}})}}else this.source=
this.options.source},search:function(c,f){c=c!=null?c:this.element.val();this.term=this.element.val();if(c.length<this.options.minLength)return this.close(f);clearTimeout(this.closing);if(this._trigger("search",f)!==false)return this._search(c)},_search:function(c){this.pending++;this.element.addClass("ui-autocomplete-loading");this.source({term:c},this.response)},_response:function(c){if(!this.options.disabled&&c&&c.length){c=this._normalize(c);this._suggest(c);this._trigger("open")}else this.close();
this.pending--;this.pending||this.element.removeClass("ui-autocomplete-loading")},close:function(c){clearTimeout(this.closing);if(this.menu.element.is(":visible")){this.menu.element.hide();this.menu.deactivate();this._trigger("close",c)}},_change:function(c){this.previous!==this.element.val()&&this._trigger("change",c,{item:this.selectedItem})},_normalize:function(c){if(c.length&&c[0].label&&c[0].value)return c;return a.map(c,function(f){if(typeof f==="string")return{label:f,value:f};return a.extend({label:f.label||
f.value,value:f.value||f.label},f)})},_suggest:function(c){var f=this.menu.element.empty().zIndex(this.element.zIndex()+1);this._renderMenu(f,c);this.menu.deactivate();this.menu.refresh();f.show();this._resizeMenu();f.position(a.extend({of:this.element},this.options.position));this.options.autoFocus&&this.menu.next(new a.Event("mouseover"))},_resizeMenu:function(){var c=this.menu.element;c.outerWidth(Math.max(c.width("").outerWidth(),this.element.outerWidth()))},_renderMenu:function(c,f){var g=this;
a.each(f,function(e,i){g._renderItem(c,i)})},_renderItem:function(c,f){return a("<li></li>").data("item.autocomplete",f).append(a("<a></a>").text(f.label)).appendTo(c)},_move:function(c,f){if(this.menu.element.is(":visible"))if(this.menu.first()&&/^previous/.test(c)||this.menu.last()&&/^next/.test(c)){this.element.val(this.term);this.menu.deactivate()}else this.menu[c](f);else this.search(null,f)},widget:function(){return this.menu.element}});a.extend(a.ui.autocomplete,{escapeRegex:function(c){return c.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,
"\\$&")},filter:function(c,f){var g=new RegExp(a.ui.autocomplete.escapeRegex(f),"i");return a.grep(c,function(e){return g.test(e.label||e.value||e)})}})})(jQuery);
(function(a){a.widget("ui.menu",{_create:function(){var d=this;this.element.addClass("ui-menu ui-widget ui-widget-content ui-corner-all").attr({role:"listbox","aria-activedescendant":"ui-active-menuitem"}).click(function(c){if(a(c.target).closest(".ui-menu-item a").length){c.preventDefault();d.select(c)}});this.refresh()},refresh:function(){var d=this;this.element.children("li:not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role","menuitem").children("a").addClass("ui-corner-all").attr("tabindex",
-1).mouseenter(function(c){d.activate(c,a(this).parent())}).mouseleave(function(){d.deactivate()})},activate:function(d,c){this.deactivate();if(this.hasScroll()){var f=c.offset().top-this.element.offset().top,g=this.element.scrollTop(),e=this.element.height();if(f<0)this.element.scrollTop(g+f);else f>=e&&this.element.scrollTop(g+f-e+c.height())}this.active=c.eq(0).children("a").addClass("ui-state-hover").attr("id","ui-active-menuitem").end();this._trigger("focus",d,{item:c})},deactivate:function(){if(this.active){this.active.children("a").removeClass("ui-state-hover").removeAttr("id");
this._trigger("blur");this.active=null}},next:function(d){this.move("next",".ui-menu-item:first",d)},previous:function(d){this.move("prev",".ui-menu-item:last",d)},first:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length},last:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length},move:function(d,c,f){if(this.active){d=this.active[d+"All"](".ui-menu-item").eq(0);d.length?this.activate(f,d):this.activate(f,this.element.children(c))}else this.activate(f,
this.element.children(c))},nextPage:function(d){if(this.hasScroll())if(!this.active||this.last())this.activate(d,this.element.children(".ui-menu-item:first"));else{var c=this.active.offset().top,f=this.element.height(),g=this.element.children(".ui-menu-item").filter(function(){var e=a(this).offset().top-c-f+a(this).height();return e<10&&e>-10});g.length||(g=this.element.children(".ui-menu-item:last"));this.activate(d,g)}else this.activate(d,this.element.children(".ui-menu-item").filter(!this.active||
this.last()?":first":":last"))},previousPage:function(d){if(this.hasScroll())if(!this.active||this.first())this.activate(d,this.element.children(".ui-menu-item:last"));else{var c=this.active.offset().top,f=this.element.height();result=this.element.children(".ui-menu-item").filter(function(){var g=a(this).offset().top-c+f-a(this).height();return g<10&&g>-10});result.length||(result=this.element.children(".ui-menu-item:first"));this.activate(d,result)}else this.activate(d,this.element.children(".ui-menu-item").filter(!this.active||
this.first()?":last":":first"))},hasScroll:function(){return this.element.height()<this.element[a.fn.prop?"prop":"attr"]("scrollHeight")},select:function(d){this._trigger("selected",d,{item:this.active})}})})(jQuery);
(function(a){var d,c=function(g){a(":ui-button",g.target.form).each(function(){var e=a(this).data("button");setTimeout(function(){e.refresh()},1)})},f=function(g){var e=g.name,i=g.form,b=a([]);if(e)b=i?a(i).find("[name='"+e+"']"):a("[name='"+e+"']",g.ownerDocument).filter(function(){return!this.form});return b};a.widget("ui.button",{options:{disabled:null,text:true,label:null,icons:{primary:null,secondary:null}},_create:function(){this.element.closest("form").unbind("reset.button").bind("reset.button",
c);if(typeof this.options.disabled!=="boolean")this.options.disabled=this.element.attr("disabled");this._determineButtonType();this.hasTitle=!!this.buttonElement.attr("title");var g=this,e=this.options,i=this.type==="checkbox"||this.type==="radio",b="ui-state-hover"+(!i?" ui-state-active":"");if(e.label===null)e.label=this.buttonElement.html();if(this.element.is(":disabled"))e.disabled=true;this.buttonElement.addClass("ui-button ui-widget ui-state-default ui-corner-all").attr("role","button").bind("mouseenter.button",
function(){if(!e.disabled){a(this).addClass("ui-state-hover");this===d&&a(this).addClass("ui-state-active")}}).bind("mouseleave.button",function(){e.disabled||a(this).removeClass(b)}).bind("focus.button",function(){a(this).addClass("ui-state-focus")}).bind("blur.button",function(){a(this).removeClass("ui-state-focus")}).bind("click.button",function(h){e.disabled&&h.stopImmediatePropagation()});i&&this.element.bind("change.button",function(){g.refresh()});if(this.type==="checkbox")this.buttonElement.bind("click.button",
function(){if(e.disabled)return false;a(this).toggleClass("ui-state-active");g.buttonElement.attr("aria-pressed",g.element[0].checked)});else if(this.type==="radio")this.buttonElement.bind("click.button",function(){if(e.disabled)return false;a(this).addClass("ui-state-active");g.buttonElement.attr("aria-pressed",true);var h=g.element[0];f(h).not(h).map(function(){return a(this).button("widget")[0]}).removeClass("ui-state-active").attr("aria-pressed",false)});else{this.buttonElement.bind("mousedown.button",
function(){if(e.disabled)return false;a(this).addClass("ui-state-active");d=this;a(document).one("mouseup",function(){d=null})}).bind("mouseup.button",function(){if(e.disabled)return false;a(this).removeClass("ui-state-active")}).bind("keydown.button",function(h){if(e.disabled)return false;if(h.keyCode==a.ui.keyCode.SPACE||h.keyCode==a.ui.keyCode.ENTER)a(this).addClass("ui-state-active")}).bind("keyup.button",function(){a(this).removeClass("ui-state-active")});this.buttonElement.is("a")&&this.buttonElement.keyup(function(h){h.keyCode===
a.ui.keyCode.SPACE&&a(this).click()})}this._setOption("disabled",e.disabled)},_determineButtonType:function(){this.type=this.element.is(":checkbox")?"checkbox":this.element.is(":radio")?"radio":this.element.is("input")?"input":"button";if(this.type==="checkbox"||this.type==="radio"){var g=this.element.parents().filter(":last"),e="label[for="+this.element.attr("id")+"]";this.buttonElement=g.find(e);if(!this.buttonElement.length){g=g.length?g.siblings():this.element.siblings();this.buttonElement=g.filter(e);
if(!this.buttonElement.length)this.buttonElement=g.find(e)}this.element.addClass("ui-helper-hidden-accessible");(g=this.element.is(":checked"))&&this.buttonElement.addClass("ui-state-active");this.buttonElement.attr("aria-pressed",g)}else this.buttonElement=this.element},widget:function(){return this.buttonElement},destroy:function(){this.element.removeClass("ui-helper-hidden-accessible");this.buttonElement.removeClass("ui-button ui-widget ui-state-default ui-corner-all ui-state-hover ui-state-active  ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only").removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html());
this.hasTitle||this.buttonElement.removeAttr("title");a.Widget.prototype.destroy.call(this)},_setOption:function(g,e){a.Widget.prototype._setOption.apply(this,arguments);if(g==="disabled")e?this.element.attr("disabled",true):this.element.removeAttr("disabled");this._resetButton()},refresh:function(){var g=this.element.is(":disabled");g!==this.options.disabled&&this._setOption("disabled",g);if(this.type==="radio")f(this.element[0]).each(function(){a(this).is(":checked")?a(this).button("widget").addClass("ui-state-active").attr("aria-pressed",
true):a(this).button("widget").removeClass("ui-state-active").attr("aria-pressed",false)});else if(this.type==="checkbox")this.element.is(":checked")?this.buttonElement.addClass("ui-state-active").attr("aria-pressed",true):this.buttonElement.removeClass("ui-state-active").attr("aria-pressed",false)},_resetButton:function(){if(this.type==="input")this.options.label&&this.element.val(this.options.label);else{var g=this.buttonElement.removeClass("ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only"),
e=a("<span></span>").addClass("ui-button-text").html(this.options.label).appendTo(g.empty()).text(),i=this.options.icons,b=i.primary&&i.secondary,h=[];if(i.primary||i.secondary){if(this.options.text)h.push("ui-button-text-icon"+(b?"s":i.primary?"-primary":"-secondary"));i.primary&&g.prepend("<span class='ui-button-icon-primary ui-icon "+i.primary+"'></span>");i.secondary&&g.append("<span class='ui-button-icon-secondary ui-icon "+i.secondary+"'></span>");if(!this.options.text){h.push(b?"ui-button-icons-only":
"ui-button-icon-only");this.hasTitle||g.attr("title",e)}}else h.push("ui-button-text-only");g.addClass(h.join(" "))}}});a.widget("ui.buttonset",{options:{items:":button, :submit, :reset, :checkbox, :radio, a, :data(button)"},_create:function(){this.element.addClass("ui-buttonset")},_init:function(){this.refresh()},_setOption:function(g,e){g==="disabled"&&this.buttons.button("option",g,e);a.Widget.prototype._setOption.apply(this,arguments)},refresh:function(){this.buttons=this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function(){return a(this).button("widget")[0]}).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass("ui-corner-left").end().filter(":last").addClass("ui-corner-right").end().end()},
destroy:function(){this.element.removeClass("ui-buttonset");this.buttons.map(function(){return a(this).button("widget")[0]}).removeClass("ui-corner-left ui-corner-right").end().button("destroy");a.Widget.prototype.destroy.call(this)}})})(jQuery);
(function(a,d){function c(){this.debug=false;this._curInst=null;this._keyEvent=false;this._disabledInputs=[];this._inDialog=this._datepickerShowing=false;this._mainDivId="ui-datepicker-div";this._inlineClass="ui-datepicker-inline";this._appendClass="ui-datepicker-append";this._triggerClass="ui-datepicker-trigger";this._dialogClass="ui-datepicker-dialog";this._disableClass="ui-datepicker-disabled";this._unselectableClass="ui-datepicker-unselectable";this._currentClass="ui-datepicker-current-day";this._dayOverClass=
"ui-datepicker-days-cell-over";this.regional=[];this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su",
"Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:false,showMonthAfterYear:false,yearSuffix:""};this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:false,hideIfNoPrevNext:false,navigationAsDateFormat:false,gotoCurrent:false,changeMonth:false,changeYear:false,yearRange:"c-10:c+10",showOtherMonths:false,selectOtherMonths:false,showWeek:false,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",
minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:true,showButtonPanel:false,autoSize:false};a.extend(this._defaults,this.regional[""]);this.dpDiv=f(a('<div id="'+this._mainDivId+'" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>'))}function f(b){return b.delegate("button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a",
"mouseout",function(){a(this).removeClass("ui-state-hover");this.className.indexOf("ui-datepicker-prev")!=-1&&a(this).removeClass("ui-datepicker-prev-hover");this.className.indexOf("ui-datepicker-next")!=-1&&a(this).removeClass("ui-datepicker-next-hover")}).delegate("button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a","mouseover",function(){if(!a.datepicker._isDisabledDatepicker(i.inline?b.parent()[0]:i.input[0])){a(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover");
a(this).addClass("ui-state-hover");this.className.indexOf("ui-datepicker-prev")!=-1&&a(this).addClass("ui-datepicker-prev-hover");this.className.indexOf("ui-datepicker-next")!=-1&&a(this).addClass("ui-datepicker-next-hover")}})}function g(b,h){a.extend(b,h);for(var j in h)if(h[j]==null||h[j]==d)b[j]=h[j];return b}a.extend(a.ui,{datepicker:{version:"1.8.13"}});var e=(new Date).getTime(),i;a.extend(c.prototype,{markerClassName:"hasDatepicker",log:function(){this.debug&&console.log.apply("",arguments)},
_widgetDatepicker:function(){return this.dpDiv},setDefaults:function(b){g(this._defaults,b||{});return this},_attachDatepicker:function(b,h){var j=null;for(var l in this._defaults){var o=b.getAttribute("date:"+l);if(o){j=j||{};try{j[l]=eval(o)}catch(n){j[l]=o}}}l=b.nodeName.toLowerCase();o=l=="div"||l=="span";if(!b.id){this.uuid+=1;b.id="dp"+this.uuid}var k=this._newInst(a(b),o);k.settings=a.extend({},h||{},j||{});if(l=="input")this._connectDatepicker(b,k);else o&&this._inlineDatepicker(b,k)},_newInst:function(b,
h){return{id:b[0].id.replace(/([^A-Za-z0-9_-])/g,"\\\\$1"),input:b,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:h,dpDiv:!h?this.dpDiv:f(a('<div class="'+this._inlineClass+' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>'))}},_connectDatepicker:function(b,h){var j=a(b);h.append=a([]);h.trigger=a([]);if(!j.hasClass(this.markerClassName)){this._attachments(j,h);j.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp).bind("setData.datepicker",
function(l,o,n){h.settings[o]=n}).bind("getData.datepicker",function(l,o){return this._get(h,o)});this._autoSize(h);a.data(b,"datepicker",h)}},_attachments:function(b,h){var j=this._get(h,"appendText"),l=this._get(h,"isRTL");h.append&&h.append.remove();if(j){h.append=a('<span class="'+this._appendClass+'">'+j+"</span>");b[l?"before":"after"](h.append)}b.unbind("focus",this._showDatepicker);h.trigger&&h.trigger.remove();j=this._get(h,"showOn");if(j=="focus"||j=="both")b.focus(this._showDatepicker);
if(j=="button"||j=="both"){j=this._get(h,"buttonText");var o=this._get(h,"buttonImage");h.trigger=a(this._get(h,"buttonImageOnly")?a("<img/>").addClass(this._triggerClass).attr({src:o,alt:j,title:j}):a('<button type="button"></button>').addClass(this._triggerClass).html(o==""?j:a("<img/>").attr({src:o,alt:j,title:j})));b[l?"before":"after"](h.trigger);h.trigger.click(function(){a.datepicker._datepickerShowing&&a.datepicker._lastInput==b[0]?a.datepicker._hideDatepicker():a.datepicker._showDatepicker(b[0]);
return false})}},_autoSize:function(b){if(this._get(b,"autoSize")&&!b.inline){var h=new Date(2009,11,20),j=this._get(b,"dateFormat");if(j.match(/[DM]/)){var l=function(o){for(var n=0,k=0,m=0;m<o.length;m++)if(o[m].length>n){n=o[m].length;k=m}return k};h.setMonth(l(this._get(b,j.match(/MM/)?"monthNames":"monthNamesShort")));h.setDate(l(this._get(b,j.match(/DD/)?"dayNames":"dayNamesShort"))+20-h.getDay())}b.input.attr("size",this._formatDate(b,h).length)}},_inlineDatepicker:function(b,h){var j=a(b);
if(!j.hasClass(this.markerClassName)){j.addClass(this.markerClassName).append(h.dpDiv).bind("setData.datepicker",function(l,o,n){h.settings[o]=n}).bind("getData.datepicker",function(l,o){return this._get(h,o)});a.data(b,"datepicker",h);this._setDate(h,this._getDefaultDate(h),true);this._updateDatepicker(h);this._updateAlternate(h);h.dpDiv.show()}},_dialogDatepicker:function(b,h,j,l,o){b=this._dialogInst;if(!b){this.uuid+=1;this._dialogInput=a('<input type="text" id="'+("dp"+this.uuid)+'" style="position: absolute; top: -100px; width: 0px; z-index: -10;"/>');
this._dialogInput.keydown(this._doKeyDown);a("body").append(this._dialogInput);b=this._dialogInst=this._newInst(this._dialogInput,false);b.settings={};a.data(this._dialogInput[0],"datepicker",b)}g(b.settings,l||{});h=h&&h.constructor==Date?this._formatDate(b,h):h;this._dialogInput.val(h);this._pos=o?o.length?o:[o.pageX,o.pageY]:null;if(!this._pos)this._pos=[document.documentElement.clientWidth/2-100+(document.documentElement.scrollLeft||document.body.scrollLeft),document.documentElement.clientHeight/
2-150+(document.documentElement.scrollTop||document.body.scrollTop)];this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px");b.settings.onSelect=j;this._inDialog=true;this.dpDiv.addClass(this._dialogClass);this._showDatepicker(this._dialogInput[0]);a.blockUI&&a.blockUI(this.dpDiv);a.data(this._dialogInput[0],"datepicker",b);return this},_destroyDatepicker:function(b){var h=a(b),j=a.data(b,"datepicker");if(h.hasClass(this.markerClassName)){var l=b.nodeName.toLowerCase();a.removeData(b,
"datepicker");if(l=="input"){j.append.remove();j.trigger.remove();h.removeClass(this.markerClassName).unbind("focus",this._showDatepicker).unbind("keydown",this._doKeyDown).unbind("keypress",this._doKeyPress).unbind("keyup",this._doKeyUp)}else if(l=="div"||l=="span")h.removeClass(this.markerClassName).empty()}},_enableDatepicker:function(b){var h=a(b),j=a.data(b,"datepicker");if(h.hasClass(this.markerClassName)){var l=b.nodeName.toLowerCase();if(l=="input"){b.disabled=false;j.trigger.filter("button").each(function(){this.disabled=
false}).end().filter("img").css({opacity:"1.0",cursor:""})}else if(l=="div"||l=="span"){h=h.children("."+this._inlineClass);h.children().removeClass("ui-state-disabled");h.find("select.ui-datepicker-month, select.ui-datepicker-year").removeAttr("disabled")}this._disabledInputs=a.map(this._disabledInputs,function(o){return o==b?null:o})}},_disableDatepicker:function(b){var h=a(b),j=a.data(b,"datepicker");if(h.hasClass(this.markerClassName)){var l=b.nodeName.toLowerCase();if(l=="input"){b.disabled=
true;j.trigger.filter("button").each(function(){this.disabled=true}).end().filter("img").css({opacity:"0.5",cursor:"default"})}else if(l=="div"||l=="span"){h=h.children("."+this._inlineClass);h.children().addClass("ui-state-disabled");h.find("select.ui-datepicker-month, select.ui-datepicker-year").attr("disabled","disabled")}this._disabledInputs=a.map(this._disabledInputs,function(o){return o==b?null:o});this._disabledInputs[this._disabledInputs.length]=b}},_isDisabledDatepicker:function(b){if(!b)return false;
for(var h=0;h<this._disabledInputs.length;h++)if(this._disabledInputs[h]==b)return true;return false},_getInst:function(b){try{return a.data(b,"datepicker")}catch(h){throw"Missing instance data for this datepicker";}},_optionDatepicker:function(b,h,j){var l=this._getInst(b);if(arguments.length==2&&typeof h=="string")return h=="defaults"?a.extend({},a.datepicker._defaults):l?h=="all"?a.extend({},l.settings):this._get(l,h):null;var o=h||{};if(typeof h=="string"){o={};o[h]=j}if(l){this._curInst==l&&
this._hideDatepicker();var n=this._getDateDatepicker(b,true),k=this._getMinMaxDate(l,"min"),m=this._getMinMaxDate(l,"max");g(l.settings,o);if(k!==null&&o.dateFormat!==d&&o.minDate===d)l.settings.minDate=this._formatDate(l,k);if(m!==null&&o.dateFormat!==d&&o.maxDate===d)l.settings.maxDate=this._formatDate(l,m);this._attachments(a(b),l);this._autoSize(l);this._setDate(l,n);this._updateAlternate(l);this._updateDatepicker(l)}},_changeDatepicker:function(b,h,j){this._optionDatepicker(b,h,j)},_refreshDatepicker:function(b){(b=
this._getInst(b))&&this._updateDatepicker(b)},_setDateDatepicker:function(b,h){if(b=this._getInst(b)){this._setDate(b,h);this._updateDatepicker(b);this._updateAlternate(b)}},_getDateDatepicker:function(b,h){(b=this._getInst(b))&&!b.inline&&this._setDateFromField(b,h);return b?this._getDate(b):null},_doKeyDown:function(b){var h=a.datepicker._getInst(b.target),j=true,l=h.dpDiv.is(".ui-datepicker-rtl");h._keyEvent=true;if(a.datepicker._datepickerShowing)switch(b.keyCode){case 9:a.datepicker._hideDatepicker();
j=false;break;case 13:j=a("td."+a.datepicker._dayOverClass+":not(."+a.datepicker._currentClass+")",h.dpDiv);j[0]?a.datepicker._selectDay(b.target,h.selectedMonth,h.selectedYear,j[0]):a.datepicker._hideDatepicker();return false;case 27:a.datepicker._hideDatepicker();break;case 33:a.datepicker._adjustDate(b.target,b.ctrlKey?-a.datepicker._get(h,"stepBigMonths"):-a.datepicker._get(h,"stepMonths"),"M");break;case 34:a.datepicker._adjustDate(b.target,b.ctrlKey?+a.datepicker._get(h,"stepBigMonths"):+a.datepicker._get(h,
"stepMonths"),"M");break;case 35:if(b.ctrlKey||b.metaKey)a.datepicker._clearDate(b.target);j=b.ctrlKey||b.metaKey;break;case 36:if(b.ctrlKey||b.metaKey)a.datepicker._gotoToday(b.target);j=b.ctrlKey||b.metaKey;break;case 37:if(b.ctrlKey||b.metaKey)a.datepicker._adjustDate(b.target,l?+1:-1,"D");j=b.ctrlKey||b.metaKey;if(b.originalEvent.altKey)a.datepicker._adjustDate(b.target,b.ctrlKey?-a.datepicker._get(h,"stepBigMonths"):-a.datepicker._get(h,"stepMonths"),"M");break;case 38:if(b.ctrlKey||b.metaKey)a.datepicker._adjustDate(b.target,
-7,"D");j=b.ctrlKey||b.metaKey;break;case 39:if(b.ctrlKey||b.metaKey)a.datepicker._adjustDate(b.target,l?-1:+1,"D");j=b.ctrlKey||b.metaKey;if(b.originalEvent.altKey)a.datepicker._adjustDate(b.target,b.ctrlKey?+a.datepicker._get(h,"stepBigMonths"):+a.datepicker._get(h,"stepMonths"),"M");break;case 40:if(b.ctrlKey||b.metaKey)a.datepicker._adjustDate(b.target,+7,"D");j=b.ctrlKey||b.metaKey;break;default:j=false}else if(b.keyCode==36&&b.ctrlKey)a.datepicker._showDatepicker(this);else j=false;if(j){b.preventDefault();
b.stopPropagation()}},_doKeyPress:function(b){var h=a.datepicker._getInst(b.target);if(a.datepicker._get(h,"constrainInput")){h=a.datepicker._possibleChars(a.datepicker._get(h,"dateFormat"));var j=String.fromCharCode(b.charCode==d?b.keyCode:b.charCode);return b.ctrlKey||b.metaKey||j<" "||!h||h.indexOf(j)>-1}},_doKeyUp:function(b){b=a.datepicker._getInst(b.target);if(b.input.val()!=b.lastVal)try{if(a.datepicker.parseDate(a.datepicker._get(b,"dateFormat"),b.input?b.input.val():null,a.datepicker._getFormatConfig(b))){a.datepicker._setDateFromField(b);
a.datepicker._updateAlternate(b);a.datepicker._updateDatepicker(b)}}catch(h){a.datepicker.log(h)}return true},_showDatepicker:function(b){b=b.target||b;if(b.nodeName.toLowerCase()!="input")b=a("input",b.parentNode)[0];if(!(a.datepicker._isDisabledDatepicker(b)||a.datepicker._lastInput==b)){var h=a.datepicker._getInst(b);a.datepicker._curInst&&a.datepicker._curInst!=h&&a.datepicker._curInst.dpDiv.stop(true,true);var j=a.datepicker._get(h,"beforeShow");g(h.settings,j?j.apply(b,[b,h]):{});h.lastVal=
null;a.datepicker._lastInput=b;a.datepicker._setDateFromField(h);if(a.datepicker._inDialog)b.value="";if(!a.datepicker._pos){a.datepicker._pos=a.datepicker._findPos(b);a.datepicker._pos[1]+=b.offsetHeight}var l=false;a(b).parents().each(function(){l|=a(this).css("position")=="fixed";return!l});if(l&&a.browser.opera){a.datepicker._pos[0]-=document.documentElement.scrollLeft;a.datepicker._pos[1]-=document.documentElement.scrollTop}j={left:a.datepicker._pos[0],top:a.datepicker._pos[1]};a.datepicker._pos=
null;h.dpDiv.empty();h.dpDiv.css({position:"absolute",display:"block",top:"-1000px"});a.datepicker._updateDatepicker(h);j=a.datepicker._checkOffset(h,j,l);h.dpDiv.css({position:a.datepicker._inDialog&&a.blockUI?"static":l?"fixed":"absolute",display:"none",left:j.left+"px",top:j.top+"px"});if(!h.inline){j=a.datepicker._get(h,"showAnim");var o=a.datepicker._get(h,"duration"),n=function(){var k=h.dpDiv.find("iframe.ui-datepicker-cover");if(k.length){var m=a.datepicker._getBorders(h.dpDiv);k.css({left:-m[0],
top:-m[1],width:h.dpDiv.outerWidth(),height:h.dpDiv.outerHeight()})}};h.dpDiv.zIndex(a(b).zIndex()+1);a.datepicker._datepickerShowing=true;a.effects&&a.effects[j]?h.dpDiv.show(j,a.datepicker._get(h,"showOptions"),o,n):h.dpDiv[j||"show"](j?o:null,n);if(!j||!o)n();h.input.is(":visible")&&!h.input.is(":disabled")&&h.input.focus();a.datepicker._curInst=h}}},_updateDatepicker:function(b){var h=a.datepicker._getBorders(b.dpDiv);i=b;b.dpDiv.empty().append(this._generateHTML(b));var j=b.dpDiv.find("iframe.ui-datepicker-cover");
j.length&&j.css({left:-h[0],top:-h[1],width:b.dpDiv.outerWidth(),height:b.dpDiv.outerHeight()});b.dpDiv.find("."+this._dayOverClass+" a").mouseover();h=this._getNumberOfMonths(b);j=h[1];b.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width("");j>1&&b.dpDiv.addClass("ui-datepicker-multi-"+j).css("width",17*j+"em");b.dpDiv[(h[0]!=1||h[1]!=1?"add":"remove")+"Class"]("ui-datepicker-multi");b.dpDiv[(this._get(b,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl");
b==a.datepicker._curInst&&a.datepicker._datepickerShowing&&b.input&&b.input.is(":visible")&&!b.input.is(":disabled")&&b.input[0]!=document.activeElement&&b.input.focus();if(b.yearshtml){var l=b.yearshtml;setTimeout(function(){l===b.yearshtml&&b.yearshtml&&b.dpDiv.find("select.ui-datepicker-year:first").replaceWith(b.yearshtml);l=b.yearshtml=null},0)}},_getBorders:function(b){var h=function(j){return{thin:1,medium:2,thick:3}[j]||j};return[parseFloat(h(b.css("border-left-width"))),parseFloat(h(b.css("border-top-width")))]},
_checkOffset:function(b,h,j){var l=b.dpDiv.outerWidth(),o=b.dpDiv.outerHeight(),n=b.input?b.input.outerWidth():0,k=b.input?b.input.outerHeight():0,m=document.documentElement.clientWidth+a(document).scrollLeft(),p=document.documentElement.clientHeight+a(document).scrollTop();h.left-=this._get(b,"isRTL")?l-n:0;h.left-=j&&h.left==b.input.offset().left?a(document).scrollLeft():0;h.top-=j&&h.top==b.input.offset().top+k?a(document).scrollTop():0;h.left-=Math.min(h.left,h.left+l>m&&m>l?Math.abs(h.left+l-
m):0);h.top-=Math.min(h.top,h.top+o>p&&p>o?Math.abs(o+k):0);return h},_findPos:function(b){for(var h=this._get(this._getInst(b),"isRTL");b&&(b.type=="hidden"||b.nodeType!=1||a.expr.filters.hidden(b));)b=b[h?"previousSibling":"nextSibling"];b=a(b).offset();return[b.left,b.top]},_hideDatepicker:function(b){var h=this._curInst;if(!(!h||b&&h!=a.data(b,"datepicker")))if(this._datepickerShowing){b=this._get(h,"showAnim");var j=this._get(h,"duration"),l=function(){a.datepicker._tidyDialog(h);this._curInst=
null};a.effects&&a.effects[b]?h.dpDiv.hide(b,a.datepicker._get(h,"showOptions"),j,l):h.dpDiv[b=="slideDown"?"slideUp":b=="fadeIn"?"fadeOut":"hide"](b?j:null,l);b||l();if(b=this._get(h,"onClose"))b.apply(h.input?h.input[0]:null,[h.input?h.input.val():"",h]);this._datepickerShowing=false;this._lastInput=null;if(this._inDialog){this._dialogInput.css({position:"absolute",left:"0",top:"-100px"});if(a.blockUI){a.unblockUI();a("body").append(this.dpDiv)}}this._inDialog=false}},_tidyDialog:function(b){b.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")},
_checkExternalClick:function(b){if(a.datepicker._curInst){b=a(b.target);b[0].id!=a.datepicker._mainDivId&&b.parents("#"+a.datepicker._mainDivId).length==0&&!b.hasClass(a.datepicker.markerClassName)&&!b.hasClass(a.datepicker._triggerClass)&&a.datepicker._datepickerShowing&&!(a.datepicker._inDialog&&a.blockUI)&&a.datepicker._hideDatepicker()}},_adjustDate:function(b,h,j){b=a(b);var l=this._getInst(b[0]);if(!this._isDisabledDatepicker(b[0])){this._adjustInstDate(l,h+(j=="M"?this._get(l,"showCurrentAtPos"):
0),j);this._updateDatepicker(l)}},_gotoToday:function(b){b=a(b);var h=this._getInst(b[0]);if(this._get(h,"gotoCurrent")&&h.currentDay){h.selectedDay=h.currentDay;h.drawMonth=h.selectedMonth=h.currentMonth;h.drawYear=h.selectedYear=h.currentYear}else{var j=new Date;h.selectedDay=j.getDate();h.drawMonth=h.selectedMonth=j.getMonth();h.drawYear=h.selectedYear=j.getFullYear()}this._notifyChange(h);this._adjustDate(b)},_selectMonthYear:function(b,h,j){b=a(b);var l=this._getInst(b[0]);l._selectingMonthYear=
false;l["selected"+(j=="M"?"Month":"Year")]=l["draw"+(j=="M"?"Month":"Year")]=parseInt(h.options[h.selectedIndex].value,10);this._notifyChange(l);this._adjustDate(b)},_clickMonthYear:function(b){var h=this._getInst(a(b)[0]);h.input&&h._selectingMonthYear&&setTimeout(function(){h.input.focus()},0);h._selectingMonthYear=!h._selectingMonthYear},_selectDay:function(b,h,j,l){var o=a(b);if(!(a(l).hasClass(this._unselectableClass)||this._isDisabledDatepicker(o[0]))){o=this._getInst(o[0]);o.selectedDay=o.currentDay=
a("a",l).html();o.selectedMonth=o.currentMonth=h;o.selectedYear=o.currentYear=j;this._selectDate(b,this._formatDate(o,o.currentDay,o.currentMonth,o.currentYear))}},_clearDate:function(b){b=a(b);this._getInst(b[0]);this._selectDate(b,"")},_selectDate:function(b,h){b=this._getInst(a(b)[0]);h=h!=null?h:this._formatDate(b);b.input&&b.input.val(h);this._updateAlternate(b);var j=this._get(b,"onSelect");if(j)j.apply(b.input?b.input[0]:null,[h,b]);else b.input&&b.input.trigger("change");if(b.inline)this._updateDatepicker(b);
else{this._hideDatepicker();this._lastInput=b.input[0];typeof b.input[0]!="object"&&b.input.focus();this._lastInput=null}},_updateAlternate:function(b){var h=this._get(b,"altField");if(h){var j=this._get(b,"altFormat")||this._get(b,"dateFormat"),l=this._getDate(b),o=this.formatDate(j,l,this._getFormatConfig(b));a(h).each(function(){a(this).val(o)})}},noWeekends:function(b){b=b.getDay();return[b>0&&b<6,""]},iso8601Week:function(b){b=new Date(b.getTime());b.setDate(b.getDate()+4-(b.getDay()||7));var h=
b.getTime();b.setMonth(0);b.setDate(1);return Math.floor(Math.round((h-b)/864E5)/7)+1},parseDate:function(b,h,j){if(b==null||h==null)throw"Invalid arguments";h=typeof h=="object"?h.toString():h+"";if(h=="")return null;var l=(j?j.shortYearCutoff:null)||this._defaults.shortYearCutoff;l=typeof l!="string"?l:(new Date).getFullYear()%100+parseInt(l,10);for(var o=(j?j.dayNamesShort:null)||this._defaults.dayNamesShort,n=(j?j.dayNames:null)||this._defaults.dayNames,k=(j?j.monthNamesShort:null)||this._defaults.monthNamesShort,
m=(j?j.monthNames:null)||this._defaults.monthNames,p=j=-1,q=-1,s=-1,r=false,u=function(y){(y=G+1<b.length&&b.charAt(G+1)==y)&&G++;return y},v=function(y){var H=u(y);y=new RegExp("^\\d{1,"+(y=="@"?14:y=="!"?20:y=="y"&&H?4:y=="o"?3:2)+"}");y=h.substring(z).match(y);if(!y)throw"Missing number at position "+z;z+=y[0].length;return parseInt(y[0],10)},w=function(y,H,N){y=a.map(u(y)?N:H,function(D,E){return[[E,D]]}).sort(function(D,E){return-(D[1].length-E[1].length)});var J=-1;a.each(y,function(D,E){D=
E[1];if(h.substr(z,D.length).toLowerCase()==D.toLowerCase()){J=E[0];z+=D.length;return false}});if(J!=-1)return J+1;else throw"Unknown name at position "+z;},x=function(){if(h.charAt(z)!=b.charAt(G))throw"Unexpected literal at position "+z;z++},z=0,G=0;G<b.length;G++)if(r)if(b.charAt(G)=="'"&&!u("'"))r=false;else x();else switch(b.charAt(G)){case "d":q=v("d");break;case "D":w("D",o,n);break;case "o":s=v("o");break;case "m":p=v("m");break;case "M":p=w("M",k,m);break;case "y":j=v("y");break;case "@":var C=
new Date(v("@"));j=C.getFullYear();p=C.getMonth()+1;q=C.getDate();break;case "!":C=new Date((v("!")-this._ticksTo1970)/1E4);j=C.getFullYear();p=C.getMonth()+1;q=C.getDate();break;case "'":if(u("'"))x();else r=true;break;default:x()}if(j==-1)j=(new Date).getFullYear();else if(j<100)j+=(new Date).getFullYear()-(new Date).getFullYear()%100+(j<=l?0:-100);if(s>-1){p=1;q=s;do{l=this._getDaysInMonth(j,p-1);if(q<=l)break;p++;q-=l}while(1)}C=this._daylightSavingAdjust(new Date(j,p-1,q));if(C.getFullYear()!=
j||C.getMonth()+1!=p||C.getDate()!=q)throw"Invalid date";return C},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925))*24*60*60*1E7,formatDate:function(b,h,j){if(!h)return"";var l=(j?j.dayNamesShort:null)||this._defaults.dayNamesShort,o=(j?j.dayNames:null)||this._defaults.dayNames,
n=(j?j.monthNamesShort:null)||this._defaults.monthNamesShort;j=(j?j.monthNames:null)||this._defaults.monthNames;var k=function(u){(u=r+1<b.length&&b.charAt(r+1)==u)&&r++;return u},m=function(u,v,w){v=""+v;if(k(u))for(;v.length<w;)v="0"+v;return v},p=function(u,v,w,x){return k(u)?x[v]:w[v]},q="",s=false;if(h)for(var r=0;r<b.length;r++)if(s)if(b.charAt(r)=="'"&&!k("'"))s=false;else q+=b.charAt(r);else switch(b.charAt(r)){case "d":q+=m("d",h.getDate(),2);break;case "D":q+=p("D",h.getDay(),l,o);break;
case "o":q+=m("o",(h.getTime()-(new Date(h.getFullYear(),0,0)).getTime())/864E5,3);break;case "m":q+=m("m",h.getMonth()+1,2);break;case "M":q+=p("M",h.getMonth(),n,j);break;case "y":q+=k("y")?h.getFullYear():(h.getYear()%100<10?"0":"")+h.getYear()%100;break;case "@":q+=h.getTime();break;case "!":q+=h.getTime()*1E4+this._ticksTo1970;break;case "'":if(k("'"))q+="'";else s=true;break;default:q+=b.charAt(r)}return q},_possibleChars:function(b){for(var h="",j=false,l=function(n){(n=o+1<b.length&&b.charAt(o+
1)==n)&&o++;return n},o=0;o<b.length;o++)if(j)if(b.charAt(o)=="'"&&!l("'"))j=false;else h+=b.charAt(o);else switch(b.charAt(o)){case "d":case "m":case "y":case "@":h+="0123456789";break;case "D":case "M":return null;case "'":if(l("'"))h+="'";else j=true;break;default:h+=b.charAt(o)}return h},_get:function(b,h){return b.settings[h]!==d?b.settings[h]:this._defaults[h]},_setDateFromField:function(b,h){if(b.input.val()!=b.lastVal){var j=this._get(b,"dateFormat"),l=b.lastVal=b.input?b.input.val():null,
o,n;o=n=this._getDefaultDate(b);var k=this._getFormatConfig(b);try{o=this.parseDate(j,l,k)||n}catch(m){this.log(m);l=h?"":l}b.selectedDay=o.getDate();b.drawMonth=b.selectedMonth=o.getMonth();b.drawYear=b.selectedYear=o.getFullYear();b.currentDay=l?o.getDate():0;b.currentMonth=l?o.getMonth():0;b.currentYear=l?o.getFullYear():0;this._adjustInstDate(b)}},_getDefaultDate:function(b){return this._restrictMinMax(b,this._determineDate(b,this._get(b,"defaultDate"),new Date))},_determineDate:function(b,h,
j){var l=function(n){var k=new Date;k.setDate(k.getDate()+n);return k},o=function(n){try{return a.datepicker.parseDate(a.datepicker._get(b,"dateFormat"),n,a.datepicker._getFormatConfig(b))}catch(k){}var m=(n.toLowerCase().match(/^c/)?a.datepicker._getDate(b):null)||new Date,p=m.getFullYear(),q=m.getMonth();m=m.getDate();for(var s=/([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,r=s.exec(n);r;){switch(r[2]||"d"){case "d":case "D":m+=parseInt(r[1],10);break;case "w":case "W":m+=parseInt(r[1],10)*7;break;case "m":case "M":q+=
parseInt(r[1],10);m=Math.min(m,a.datepicker._getDaysInMonth(p,q));break;case "y":case "Y":p+=parseInt(r[1],10);m=Math.min(m,a.datepicker._getDaysInMonth(p,q));break}r=s.exec(n)}return new Date(p,q,m)};if(h=(h=h==null||h===""?j:typeof h=="string"?o(h):typeof h=="number"?isNaN(h)?j:l(h):new Date(h.getTime()))&&h.toString()=="Invalid Date"?j:h){h.setHours(0);h.setMinutes(0);h.setSeconds(0);h.setMilliseconds(0)}return this._daylightSavingAdjust(h)},_daylightSavingAdjust:function(b){if(!b)return null;
b.setHours(b.getHours()>12?b.getHours()+2:0);return b},_setDate:function(b,h,j){var l=!h,o=b.selectedMonth,n=b.selectedYear;h=this._restrictMinMax(b,this._determineDate(b,h,new Date));b.selectedDay=b.currentDay=h.getDate();b.drawMonth=b.selectedMonth=b.currentMonth=h.getMonth();b.drawYear=b.selectedYear=b.currentYear=h.getFullYear();if((o!=b.selectedMonth||n!=b.selectedYear)&&!j)this._notifyChange(b);this._adjustInstDate(b);if(b.input)b.input.val(l?"":this._formatDate(b))},_getDate:function(b){return!b.currentYear||
b.input&&b.input.val()==""?null:this._daylightSavingAdjust(new Date(b.currentYear,b.currentMonth,b.currentDay))},_generateHTML:function(b){var h=new Date;h=this._daylightSavingAdjust(new Date(h.getFullYear(),h.getMonth(),h.getDate()));var j=this._get(b,"isRTL"),l=this._get(b,"showButtonPanel"),o=this._get(b,"hideIfNoPrevNext"),n=this._get(b,"navigationAsDateFormat"),k=this._getNumberOfMonths(b),m=this._get(b,"showCurrentAtPos"),p=this._get(b,"stepMonths"),q=k[0]!=1||k[1]!=1,s=this._daylightSavingAdjust(!b.currentDay?
new Date(9999,9,9):new Date(b.currentYear,b.currentMonth,b.currentDay)),r=this._getMinMaxDate(b,"min"),u=this._getMinMaxDate(b,"max");m=b.drawMonth-m;var v=b.drawYear;if(m<0){m+=12;v--}if(u){var w=this._daylightSavingAdjust(new Date(u.getFullYear(),u.getMonth()-k[0]*k[1]+1,u.getDate()));for(w=r&&w<r?r:w;this._daylightSavingAdjust(new Date(v,m,1))>w;){m--;if(m<0){m=11;v--}}}b.drawMonth=m;b.drawYear=v;w=this._get(b,"prevText");w=!n?w:this.formatDate(w,this._daylightSavingAdjust(new Date(v,m-p,1)),this._getFormatConfig(b));
w=this._canAdjustMonth(b,-1,v,m)?'<a class="ui-datepicker-prev ui-corner-all" onclick="DP_jQuery_'+e+".datepicker._adjustDate('#"+b.id+"', -"+p+", 'M');\" title=\""+w+'"><span class="ui-icon ui-icon-circle-triangle-'+(j?"e":"w")+'">'+w+"</span></a>":o?"":'<a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="'+w+'"><span class="ui-icon ui-icon-circle-triangle-'+(j?"e":"w")+'">'+w+"</span></a>";var x=this._get(b,"nextText");x=!n?x:this.formatDate(x,this._daylightSavingAdjust(new Date(v,
m+p,1)),this._getFormatConfig(b));o=this._canAdjustMonth(b,+1,v,m)?'<a class="ui-datepicker-next ui-corner-all" onclick="DP_jQuery_'+e+".datepicker._adjustDate('#"+b.id+"', +"+p+", 'M');\" title=\""+x+'"><span class="ui-icon ui-icon-circle-triangle-'+(j?"w":"e")+'">'+x+"</span></a>":o?"":'<a class="ui-datepicker-next ui-corner-all ui-state-disabled" title="'+x+'"><span class="ui-icon ui-icon-circle-triangle-'+(j?"w":"e")+'">'+x+"</span></a>";p=this._get(b,"currentText");x=this._get(b,"gotoCurrent")&&
b.currentDay?s:h;p=!n?p:this.formatDate(p,x,this._getFormatConfig(b));n=!b.inline?'<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" onclick="DP_jQuery_'+e+'.datepicker._hideDatepicker();">'+this._get(b,"closeText")+"</button>":"";l=l?'<div class="ui-datepicker-buttonpane ui-widget-content">'+(j?n:"")+(this._isInRange(b,x)?'<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" onclick="DP_jQuery_'+
e+".datepicker._gotoToday('#"+b.id+"');\">"+p+"</button>":"")+(j?"":n)+"</div>":"";n=parseInt(this._get(b,"firstDay"),10);n=isNaN(n)?0:n;p=this._get(b,"showWeek");x=this._get(b,"dayNames");this._get(b,"dayNamesShort");var z=this._get(b,"dayNamesMin"),G=this._get(b,"monthNames"),C=this._get(b,"monthNamesShort"),y=this._get(b,"beforeShowDay"),H=this._get(b,"showOtherMonths"),N=this._get(b,"selectOtherMonths");this._get(b,"calculateWeek");for(var J=this._getDefaultDate(b),D="",E=0;E<k[0];E++){for(var P=
"",L=0;L<k[1];L++){var Q=this._daylightSavingAdjust(new Date(v,m,b.selectedDay)),B=" ui-corner-all",F="";if(q){F+='<div class="ui-datepicker-group';if(k[1]>1)switch(L){case 0:F+=" ui-datepicker-group-first";B=" ui-corner-"+(j?"right":"left");break;case k[1]-1:F+=" ui-datepicker-group-last";B=" ui-corner-"+(j?"left":"right");break;default:F+=" ui-datepicker-group-middle";B="";break}F+='">'}F+='<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix'+B+'">'+(/all|left/.test(B)&&E==0?j?
o:w:"")+(/all|right/.test(B)&&E==0?j?w:o:"")+this._generateMonthYearHeader(b,m,v,r,u,E>0||L>0,G,C)+'</div><table class="ui-datepicker-calendar"><thead><tr>';var I=p?'<th class="ui-datepicker-week-col">'+this._get(b,"weekHeader")+"</th>":"";for(B=0;B<7;B++){var A=(B+n)%7;I+="<th"+((B+n+6)%7>=5?' class="ui-datepicker-week-end"':"")+'><span title="'+x[A]+'">'+z[A]+"</span></th>"}F+=I+"</tr></thead><tbody>";I=this._getDaysInMonth(v,m);if(v==b.selectedYear&&m==b.selectedMonth)b.selectedDay=Math.min(b.selectedDay,
I);B=(this._getFirstDayOfMonth(v,m)-n+7)%7;I=q?6:Math.ceil((B+I)/7);A=this._daylightSavingAdjust(new Date(v,m,1-B));for(var R=0;R<I;R++){F+="<tr>";var S=!p?"":'<td class="ui-datepicker-week-col">'+this._get(b,"calculateWeek")(A)+"</td>";for(B=0;B<7;B++){var M=y?y.apply(b.input?b.input[0]:null,[A]):[true,""],K=A.getMonth()!=m,O=K&&!N||!M[0]||r&&A<r||u&&A>u;S+='<td class="'+((B+n+6)%7>=5?" ui-datepicker-week-end":"")+(K?" ui-datepicker-other-month":"")+(A.getTime()==Q.getTime()&&m==b.selectedMonth&&
b._keyEvent||J.getTime()==A.getTime()&&J.getTime()==Q.getTime()?" "+this._dayOverClass:"")+(O?" "+this._unselectableClass+" ui-state-disabled":"")+(K&&!H?"":" "+M[1]+(A.getTime()==s.getTime()?" "+this._currentClass:"")+(A.getTime()==h.getTime()?" ui-datepicker-today":""))+'"'+((!K||H)&&M[2]?' title="'+M[2]+'"':"")+(O?"":' onclick="DP_jQuery_'+e+".datepicker._selectDay('#"+b.id+"',"+A.getMonth()+","+A.getFullYear()+', this);return false;"')+">"+(K&&!H?"&#xa0;":O?'<span class="ui-state-default">'+A.getDate()+
"</span>":'<a class="ui-state-default'+(A.getTime()==h.getTime()?" ui-state-highlight":"")+(A.getTime()==s.getTime()?" ui-state-active":"")+(K?" ui-priority-secondary":"")+'" href="#">'+A.getDate()+"</a>")+"</td>";A.setDate(A.getDate()+1);A=this._daylightSavingAdjust(A)}F+=S+"</tr>"}m++;if(m>11){m=0;v++}F+="</tbody></table>"+(q?"</div>"+(k[0]>0&&L==k[1]-1?'<div class="ui-datepicker-row-break"></div>':""):"");P+=F}D+=P}D+=l+(a.browser.msie&&parseInt(a.browser.version,10)<7&&!b.inline?'<iframe src="javascript:false;" class="ui-datepicker-cover" frameborder="0"></iframe>':
"");b._keyEvent=false;return D},_generateMonthYearHeader:function(b,h,j,l,o,n,k,m){var p=this._get(b,"changeMonth"),q=this._get(b,"changeYear"),s=this._get(b,"showMonthAfterYear"),r='<div class="ui-datepicker-title">',u="";if(n||!p)u+='<span class="ui-datepicker-month">'+k[h]+"</span>";else{k=l&&l.getFullYear()==j;var v=o&&o.getFullYear()==j;u+='<select class="ui-datepicker-month" onchange="DP_jQuery_'+e+".datepicker._selectMonthYear('#"+b.id+"', this, 'M');\" onclick=\"DP_jQuery_"+e+".datepicker._clickMonthYear('#"+
b.id+"');\">";for(var w=0;w<12;w++)if((!k||w>=l.getMonth())&&(!v||w<=o.getMonth()))u+='<option value="'+w+'"'+(w==h?' selected="selected"':"")+">"+m[w]+"</option>";u+="</select>"}s||(r+=u+(n||!(p&&q)?"&#xa0;":""));if(!b.yearshtml){b.yearshtml="";if(n||!q)r+='<span class="ui-datepicker-year">'+j+"</span>";else{m=this._get(b,"yearRange").split(":");var x=(new Date).getFullYear();k=function(z){z=z.match(/c[+-].*/)?j+parseInt(z.substring(1),10):z.match(/[+-].*/)?x+parseInt(z,10):parseInt(z,10);return isNaN(z)?
x:z};h=k(m[0]);m=Math.max(h,k(m[1]||""));h=l?Math.max(h,l.getFullYear()):h;m=o?Math.min(m,o.getFullYear()):m;for(b.yearshtml+='<select class="ui-datepicker-year" onchange="DP_jQuery_'+e+".datepicker._selectMonthYear('#"+b.id+"', this, 'Y');\" onclick=\"DP_jQuery_"+e+".datepicker._clickMonthYear('#"+b.id+"');\">";h<=m;h++)b.yearshtml+='<option value="'+h+'"'+(h==j?' selected="selected"':"")+">"+h+"</option>";b.yearshtml+="</select>";r+=b.yearshtml;b.yearshtml=null}}r+=this._get(b,"yearSuffix");if(s)r+=
(n||!(p&&q)?"&#xa0;":"")+u;r+="</div>";return r},_adjustInstDate:function(b,h,j){var l=b.drawYear+(j=="Y"?h:0),o=b.drawMonth+(j=="M"?h:0);h=Math.min(b.selectedDay,this._getDaysInMonth(l,o))+(j=="D"?h:0);l=this._restrictMinMax(b,this._daylightSavingAdjust(new Date(l,o,h)));b.selectedDay=l.getDate();b.drawMonth=b.selectedMonth=l.getMonth();b.drawYear=b.selectedYear=l.getFullYear();if(j=="M"||j=="Y")this._notifyChange(b)},_restrictMinMax:function(b,h){var j=this._getMinMaxDate(b,"min");b=this._getMinMaxDate(b,
"max");h=j&&h<j?j:h;return h=b&&h>b?b:h},_notifyChange:function(b){var h=this._get(b,"onChangeMonthYear");if(h)h.apply(b.input?b.input[0]:null,[b.selectedYear,b.selectedMonth+1,b])},_getNumberOfMonths:function(b){b=this._get(b,"numberOfMonths");return b==null?[1,1]:typeof b=="number"?[1,b]:b},_getMinMaxDate:function(b,h){return this._determineDate(b,this._get(b,h+"Date"),null)},_getDaysInMonth:function(b,h){return 32-this._daylightSavingAdjust(new Date(b,h,32)).getDate()},_getFirstDayOfMonth:function(b,
h){return(new Date(b,h,1)).getDay()},_canAdjustMonth:function(b,h,j,l){var o=this._getNumberOfMonths(b);j=this._daylightSavingAdjust(new Date(j,l+(h<0?h:o[0]*o[1]),1));h<0&&j.setDate(this._getDaysInMonth(j.getFullYear(),j.getMonth()));return this._isInRange(b,j)},_isInRange:function(b,h){var j=this._getMinMaxDate(b,"min");b=this._getMinMaxDate(b,"max");return(!j||h.getTime()>=j.getTime())&&(!b||h.getTime()<=b.getTime())},_getFormatConfig:function(b){var h=this._get(b,"shortYearCutoff");h=typeof h!=
"string"?h:(new Date).getFullYear()%100+parseInt(h,10);return{shortYearCutoff:h,dayNamesShort:this._get(b,"dayNamesShort"),dayNames:this._get(b,"dayNames"),monthNamesShort:this._get(b,"monthNamesShort"),monthNames:this._get(b,"monthNames")}},_formatDate:function(b,h,j,l){if(!h){b.currentDay=b.selectedDay;b.currentMonth=b.selectedMonth;b.currentYear=b.selectedYear}h=h?typeof h=="object"?h:this._daylightSavingAdjust(new Date(l,j,h)):this._daylightSavingAdjust(new Date(b.currentYear,b.currentMonth,b.currentDay));
return this.formatDate(this._get(b,"dateFormat"),h,this._getFormatConfig(b))}});a.fn.datepicker=function(b){if(!this.length)return this;if(!a.datepicker.initialized){a(document).mousedown(a.datepicker._checkExternalClick).find("body").append(a.datepicker.dpDiv);a.datepicker.initialized=true}var h=Array.prototype.slice.call(arguments,1);if(typeof b=="string"&&(b=="isDisabled"||b=="getDate"||b=="widget"))return a.datepicker["_"+b+"Datepicker"].apply(a.datepicker,[this[0]].concat(h));if(b=="option"&&
arguments.length==2&&typeof arguments[1]=="string")return a.datepicker["_"+b+"Datepicker"].apply(a.datepicker,[this[0]].concat(h));return this.each(function(){typeof b=="string"?a.datepicker["_"+b+"Datepicker"].apply(a.datepicker,[this].concat(h)):a.datepicker._attachDatepicker(this,b)})};a.datepicker=new c;a.datepicker.initialized=false;a.datepicker.uuid=(new Date).getTime();a.datepicker.version="1.8.13";window["DP_jQuery_"+e]=a})(jQuery);
(function(a,d){var c={buttons:true,height:true,maxHeight:true,maxWidth:true,minHeight:true,minWidth:true,width:true},f={maxHeight:true,maxWidth:true,minHeight:true,minWidth:true},g=a.attrFn||{val:true,css:true,html:true,text:true,data:true,width:true,height:true,offset:true,click:true};a.widget("ui.dialog",{options:{autoOpen:true,buttons:{},closeOnEscape:true,closeText:"close",dialogClass:"",draggable:true,hide:null,height:"auto",maxHeight:false,maxWidth:false,minHeight:150,minWidth:150,modal:false,
position:{my:"center",at:"center",collision:"fit",using:function(e){var i=a(this).css(e).offset().top;i<0&&a(this).css("top",e.top-i)}},resizable:true,show:null,stack:true,title:"",width:300,zIndex:1E3},_create:function(){this.originalTitle=this.element.attr("title");if(typeof this.originalTitle!=="string")this.originalTitle="";this.options.title=this.options.title||this.originalTitle;var e=this,i=e.options,b=i.title||"&#160;",h=a.ui.dialog.getTitleId(e.element),j=(e.uiDialog=a("<div></div>")).appendTo(document.body).hide().addClass("ui-dialog ui-widget ui-widget-content ui-corner-all "+
i.dialogClass).css({zIndex:i.zIndex}).attr("tabIndex",-1).css("outline",0).keydown(function(n){if(i.closeOnEscape&&n.keyCode&&n.keyCode===a.ui.keyCode.ESCAPE){e.close(n);n.preventDefault()}}).attr({role:"dialog","aria-labelledby":h}).mousedown(function(n){e.moveToTop(false,n)});e.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(j);var l=(e.uiDialogTitlebar=a("<div></div>")).addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(j),
o=a('<a href="#"></a>').addClass("ui-dialog-titlebar-close ui-corner-all").attr("role","button").hover(function(){o.addClass("ui-state-hover")},function(){o.removeClass("ui-state-hover")}).focus(function(){o.addClass("ui-state-focus")}).blur(function(){o.removeClass("ui-state-focus")}).click(function(n){e.close(n);return false}).appendTo(l);(e.uiDialogTitlebarCloseText=a("<span></span>")).addClass("ui-icon ui-icon-closethick").text(i.closeText).appendTo(o);a("<span></span>").addClass("ui-dialog-title").attr("id",
h).html(b).prependTo(l);if(a.isFunction(i.beforeclose)&&!a.isFunction(i.beforeClose))i.beforeClose=i.beforeclose;l.find("*").add(l).disableSelection();i.draggable&&a.fn.draggable&&e._makeDraggable();i.resizable&&a.fn.resizable&&e._makeResizable();e._createButtons(i.buttons);e._isOpen=false;a.fn.bgiframe&&j.bgiframe()},_init:function(){this.options.autoOpen&&this.open()},destroy:function(){var e=this;e.overlay&&e.overlay.destroy();e.uiDialog.hide();e.element.unbind(".dialog").removeData("dialog").removeClass("ui-dialog-content ui-widget-content").hide().appendTo("body");
e.uiDialog.remove();e.originalTitle&&e.element.attr("title",e.originalTitle);return e},widget:function(){return this.uiDialog},close:function(e){var i=this,b,h;if(false!==i._trigger("beforeClose",e)){i.overlay&&i.overlay.destroy();i.uiDialog.unbind("keypress.ui-dialog");i._isOpen=false;if(i.options.hide)i.uiDialog.hide(i.options.hide,function(){i._trigger("close",e)});else{i.uiDialog.hide();i._trigger("close",e)}a.ui.dialog.overlay.resize();if(i.options.modal){b=0;a(".ui-dialog").each(function(){if(this!==
i.uiDialog[0]){h=a(this).css("z-index");isNaN(h)||(b=Math.max(b,h))}});a.ui.dialog.maxZ=b}return i}},isOpen:function(){return this._isOpen},moveToTop:function(e,i){var b=this,h=b.options;if(h.modal&&!e||!h.stack&&!h.modal)return b._trigger("focus",i);if(h.zIndex>a.ui.dialog.maxZ)a.ui.dialog.maxZ=h.zIndex;if(b.overlay){a.ui.dialog.maxZ+=1;b.overlay.$el.css("z-index",a.ui.dialog.overlay.maxZ=a.ui.dialog.maxZ)}e={scrollTop:b.element.attr("scrollTop"),scrollLeft:b.element.attr("scrollLeft")};a.ui.dialog.maxZ+=
1;b.uiDialog.css("z-index",a.ui.dialog.maxZ);b.element.attr(e);b._trigger("focus",i);return b},open:function(){if(!this._isOpen){var e=this,i=e.options,b=e.uiDialog;e.overlay=i.modal?new a.ui.dialog.overlay(e):null;e._size();e._position(i.position);b.show(i.show);e.moveToTop(true);i.modal&&b.bind("keypress.ui-dialog",function(h){if(h.keyCode===a.ui.keyCode.TAB){var j=a(":tabbable",this),l=j.filter(":first");j=j.filter(":last");if(h.target===j[0]&&!h.shiftKey){l.focus(1);return false}else if(h.target===
l[0]&&h.shiftKey){j.focus(1);return false}}});a(e.element.find(":tabbable").get().concat(b.find(".ui-dialog-buttonpane :tabbable").get().concat(b.get()))).eq(0).focus();e._isOpen=true;e._trigger("open");return e}},_createButtons:function(e){var i=this,b=false,h=a("<div></div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"),j=a("<div></div>").addClass("ui-dialog-buttonset").appendTo(h);i.uiDialog.find(".ui-dialog-buttonpane").remove();typeof e==="object"&&e!==null&&a.each(e,
function(){return!(b=true)});if(b){a.each(e,function(l,o){o=a.isFunction(o)?{click:o,text:l}:o;var n=a('<button type="button"></button>').click(function(){o.click.apply(i.element[0],arguments)}).appendTo(j);a.each(o,function(k,m){if(k!=="click")k in g?n[k](m):n.attr(k,m)});a.fn.button&&n.button()});h.appendTo(i.uiDialog)}},_makeDraggable:function(){function e(l){return{position:l.position,offset:l.offset}}var i=this,b=i.options,h=a(document),j;i.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",
handle:".ui-dialog-titlebar",containment:"document",start:function(l,o){j=b.height==="auto"?"auto":a(this).height();a(this).height(a(this).height()).addClass("ui-dialog-dragging");i._trigger("dragStart",l,e(o))},drag:function(l,o){i._trigger("drag",l,e(o))},stop:function(l,o){b.position=[o.position.left-h.scrollLeft(),o.position.top-h.scrollTop()];a(this).removeClass("ui-dialog-dragging").height(j);i._trigger("dragStop",l,e(o));a.ui.dialog.overlay.resize()}})},_makeResizable:function(e){function i(l){return{originalPosition:l.originalPosition,
originalSize:l.originalSize,position:l.position,size:l.size}}e=e===d?this.options.resizable:e;var b=this,h=b.options,j=b.uiDialog.css("position");e=typeof e==="string"?e:"n,e,s,w,se,sw,ne,nw";b.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:b.element,maxWidth:h.maxWidth,maxHeight:h.maxHeight,minWidth:h.minWidth,minHeight:b._minHeight(),handles:e,start:function(l,o){a(this).addClass("ui-dialog-resizing");b._trigger("resizeStart",l,i(o))},resize:function(l,o){b._trigger("resize",
l,i(o))},stop:function(l,o){a(this).removeClass("ui-dialog-resizing");h.height=a(this).height();h.width=a(this).width();b._trigger("resizeStop",l,i(o));a.ui.dialog.overlay.resize()}}).css("position",j).find(".ui-resizable-se").addClass("ui-icon ui-icon-grip-diagonal-se")},_minHeight:function(){var e=this.options;return e.height==="auto"?e.minHeight:Math.min(e.minHeight,e.height)},_position:function(e){var i=[],b=[0,0],h;if(e){if(typeof e==="string"||typeof e==="object"&&"0"in e){i=e.split?e.split(" "):
[e[0],e[1]];if(i.length===1)i[1]=i[0];a.each(["left","top"],function(j,l){if(+i[j]===i[j]){b[j]=i[j];i[j]=l}});e={my:i.join(" "),at:i.join(" "),offset:b.join(" ")}}e=a.extend({},a.ui.dialog.prototype.options.position,e)}else e=a.ui.dialog.prototype.options.position;(h=this.uiDialog.is(":visible"))||this.uiDialog.show();this.uiDialog.css({top:0,left:0}).position(a.extend({of:window},e));h||this.uiDialog.hide()},_setOptions:function(e){var i=this,b={},h=false;a.each(e,function(j,l){i._setOption(j,l);
if(j in c)h=true;if(j in f)b[j]=l});h&&this._size();this.uiDialog.is(":data(resizable)")&&this.uiDialog.resizable("option",b)},_setOption:function(e,i){var b=this,h=b.uiDialog;switch(e){case "beforeclose":e="beforeClose";break;case "buttons":b._createButtons(i);break;case "closeText":b.uiDialogTitlebarCloseText.text(""+i);break;case "dialogClass":h.removeClass(b.options.dialogClass).addClass("ui-dialog ui-widget ui-widget-content ui-corner-all "+i);break;case "disabled":i?h.addClass("ui-dialog-disabled"):
h.removeClass("ui-dialog-disabled");break;case "draggable":var j=h.is(":data(draggable)");j&&!i&&h.draggable("destroy");!j&&i&&b._makeDraggable();break;case "position":b._position(i);break;case "resizable":(j=h.is(":data(resizable)"))&&!i&&h.resizable("destroy");j&&typeof i==="string"&&h.resizable("option","handles",i);!j&&i!==false&&b._makeResizable(i);break;case "title":a(".ui-dialog-title",b.uiDialogTitlebar).html(""+(i||"&#160;"));break}a.Widget.prototype._setOption.apply(b,arguments)},_size:function(){var e=
this.options,i,b,h=this.uiDialog.is(":visible");this.element.show().css({width:"auto",minHeight:0,height:0});if(e.minWidth>e.width)e.width=e.minWidth;i=this.uiDialog.css({height:"auto",width:e.width}).height();b=Math.max(0,e.minHeight-i);if(e.height==="auto")if(a.support.minHeight)this.element.css({minHeight:b,height:"auto"});else{this.uiDialog.show();e=this.element.css("height","auto").height();h||this.uiDialog.hide();this.element.height(Math.max(e,b))}else this.element.height(Math.max(e.height-
i,0));this.uiDialog.is(":data(resizable)")&&this.uiDialog.resizable("option","minHeight",this._minHeight())}});a.extend(a.ui.dialog,{version:"1.8.13",uuid:0,maxZ:0,getTitleId:function(e){e=e.attr("id");if(!e){this.uuid+=1;e=this.uuid}return"ui-dialog-title-"+e},overlay:function(e){this.$el=a.ui.dialog.overlay.create(e)}});a.extend(a.ui.dialog.overlay,{instances:[],oldInstances:[],maxZ:0,events:a.map("focus,mousedown,mouseup,keydown,keypress,click".split(","),function(e){return e+".dialog-overlay"}).join(" "),
create:function(e){if(this.instances.length===0){setTimeout(function(){a.ui.dialog.overlay.instances.length&&a(document).bind(a.ui.dialog.overlay.events,function(b){if(a(b.target).zIndex()<a.ui.dialog.overlay.maxZ)return false})},1);a(document).bind("keydown.dialog-overlay",function(b){if(e.options.closeOnEscape&&b.keyCode&&b.keyCode===a.ui.keyCode.ESCAPE){e.close(b);b.preventDefault()}});a(window).bind("resize.dialog-overlay",a.ui.dialog.overlay.resize)}var i=(this.oldInstances.pop()||a("<div></div>").addClass("ui-widget-overlay")).appendTo(document.body).css({width:this.width(),
height:this.height()});a.fn.bgiframe&&i.bgiframe();this.instances.push(i);return i},destroy:function(e){var i=a.inArray(e,this.instances);i!=-1&&this.oldInstances.push(this.instances.splice(i,1)[0]);this.instances.length===0&&a([document,window]).unbind(".dialog-overlay");e.remove();var b=0;a.each(this.instances,function(){b=Math.max(b,this.css("z-index"))});this.maxZ=b},height:function(){var e,i;if(a.browser.msie&&a.browser.version<7){e=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight);
i=Math.max(document.documentElement.offsetHeight,document.body.offsetHeight);return e<i?a(window).height()+"px":e+"px"}else return a(document).height()+"px"},width:function(){var e,i;if(a.browser.msie&&a.browser.version<7){e=Math.max(document.documentElement.scrollWidth,document.body.scrollWidth);i=Math.max(document.documentElement.offsetWidth,document.body.offsetWidth);return e<i?a(window).width()+"px":e+"px"}else return a(document).width()+"px"},resize:function(){var e=a([]);a.each(a.ui.dialog.overlay.instances,
function(){e=e.add(this)});e.css({width:0,height:0}).css({width:a.ui.dialog.overlay.width(),height:a.ui.dialog.overlay.height()})}});a.extend(a.ui.dialog.overlay.prototype,{destroy:function(){a.ui.dialog.overlay.destroy(this.$el)}})})(jQuery);
(function(a){a.ui=a.ui||{};var d=/left|center|right/,c=/top|center|bottom/,f=a.fn.position,g=a.fn.offset;a.fn.position=function(e){if(!e||!e.of)return f.apply(this,arguments);e=a.extend({},e);var i=a(e.of),b=i[0],h=(e.collision||"flip").split(" "),j=e.offset?e.offset.split(" "):[0,0],l,o,n;if(b.nodeType===9){l=i.width();o=i.height();n={top:0,left:0}}else if(b.setTimeout){l=i.width();o=i.height();n={top:i.scrollTop(),left:i.scrollLeft()}}else if(b.preventDefault){e.at="left top";l=o=0;n={top:e.of.pageY,
left:e.of.pageX}}else{l=i.outerWidth();o=i.outerHeight();n=i.offset()}a.each(["my","at"],function(){var k=(e[this]||"").split(" ");if(k.length===1)k=d.test(k[0])?k.concat(["center"]):c.test(k[0])?["center"].concat(k):["center","center"];k[0]=d.test(k[0])?k[0]:"center";k[1]=c.test(k[1])?k[1]:"center";e[this]=k});if(h.length===1)h[1]=h[0];j[0]=parseInt(j[0],10)||0;if(j.length===1)j[1]=j[0];j[1]=parseInt(j[1],10)||0;if(e.at[0]==="right")n.left+=l;else if(e.at[0]==="center")n.left+=l/2;if(e.at[1]==="bottom")n.top+=
o;else if(e.at[1]==="center")n.top+=o/2;n.left+=j[0];n.top+=j[1];return this.each(function(){var k=a(this),m=k.outerWidth(),p=k.outerHeight(),q=parseInt(a.curCSS(this,"marginLeft",true))||0,s=parseInt(a.curCSS(this,"marginTop",true))||0,r=m+q+(parseInt(a.curCSS(this,"marginRight",true))||0),u=p+s+(parseInt(a.curCSS(this,"marginBottom",true))||0),v=a.extend({},n),w;if(e.my[0]==="right")v.left-=m;else if(e.my[0]==="center")v.left-=m/2;if(e.my[1]==="bottom")v.top-=p;else if(e.my[1]==="center")v.top-=
p/2;v.left=Math.round(v.left);v.top=Math.round(v.top);w={left:v.left-q,top:v.top-s};a.each(["left","top"],function(x,z){a.ui.position[h[x]]&&a.ui.position[h[x]][z](v,{targetWidth:l,targetHeight:o,elemWidth:m,elemHeight:p,collisionPosition:w,collisionWidth:r,collisionHeight:u,offset:j,my:e.my,at:e.at})});a.fn.bgiframe&&k.bgiframe();k.offset(a.extend(v,{using:e.using}))})};a.ui.position={fit:{left:function(e,i){var b=a(window);b=i.collisionPosition.left+i.collisionWidth-b.width()-b.scrollLeft();e.left=
b>0?e.left-b:Math.max(e.left-i.collisionPosition.left,e.left)},top:function(e,i){var b=a(window);b=i.collisionPosition.top+i.collisionHeight-b.height()-b.scrollTop();e.top=b>0?e.top-b:Math.max(e.top-i.collisionPosition.top,e.top)}},flip:{left:function(e,i){if(i.at[0]!=="center"){var b=a(window);b=i.collisionPosition.left+i.collisionWidth-b.width()-b.scrollLeft();var h=i.my[0]==="left"?-i.elemWidth:i.my[0]==="right"?i.elemWidth:0,j=i.at[0]==="left"?i.targetWidth:-i.targetWidth,l=-2*i.offset[0];e.left+=
i.collisionPosition.left<0?h+j+l:b>0?h+j+l:0}},top:function(e,i){if(i.at[1]!=="center"){var b=a(window);b=i.collisionPosition.top+i.collisionHeight-b.height()-b.scrollTop();var h=i.my[1]==="top"?-i.elemHeight:i.my[1]==="bottom"?i.elemHeight:0,j=i.at[1]==="top"?i.targetHeight:-i.targetHeight,l=-2*i.offset[1];e.top+=i.collisionPosition.top<0?h+j+l:b>0?h+j+l:0}}}};if(!a.offset.setOffset){a.offset.setOffset=function(e,i){if(/static/.test(a.curCSS(e,"position")))e.style.position="relative";var b=a(e),
h=b.offset(),j=parseInt(a.curCSS(e,"top",true),10)||0,l=parseInt(a.curCSS(e,"left",true),10)||0;h={top:i.top-h.top+j,left:i.left-h.left+l};"using"in i?i.using.call(e,h):b.css(h)};a.fn.offset=function(e){var i=this[0];if(!i||!i.ownerDocument)return null;if(e)return this.each(function(){a.offset.setOffset(this,e)});return g.call(this)}}})(jQuery);
(function(a,d){a.widget("ui.progressbar",{options:{value:0,max:100},min:0,_create:function(){this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({role:"progressbar","aria-valuemin":this.min,"aria-valuemax":this.options.max,"aria-valuenow":this._value()});this.valueDiv=a("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element);this.oldValue=this._value();this._refreshValue()},destroy:function(){this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow");
this.valueDiv.remove();a.Widget.prototype.destroy.apply(this,arguments)},value:function(c){if(c===d)return this._value();this._setOption("value",c);return this},_setOption:function(c,f){if(c==="value"){this.options.value=f;this._refreshValue();this._value()===this.options.max&&this._trigger("complete")}a.Widget.prototype._setOption.apply(this,arguments)},_value:function(){var c=this.options.value;if(typeof c!=="number")c=0;return Math.min(this.options.max,Math.max(this.min,c))},_percentage:function(){return 100*
this._value()/this.options.max},_refreshValue:function(){var c=this.value(),f=this._percentage();if(this.oldValue!==c){this.oldValue=c;this._trigger("change")}this.valueDiv.toggle(c>this.min).toggleClass("ui-corner-right",c===this.options.max).width(f.toFixed(0)+"%");this.element.attr("aria-valuenow",c)}});a.extend(a.ui.progressbar,{version:"1.8.13"})})(jQuery);
(function(a){a.widget("ui.slider",a.ui.mouse,{widgetEventPrefix:"slide",options:{animate:false,distance:0,max:100,min:0,orientation:"horizontal",range:false,step:1,value:0,values:null},_create:function(){var d=this,c=this.options,f=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),g=c.values&&c.values.length||1,e=[];this._mouseSliding=this._keySliding=false;this._animateOff=true;this._handleIndex=null;this._detectOrientation();this._mouseInit();this.element.addClass("ui-slider ui-slider-"+
this.orientation+" ui-widget ui-widget-content ui-corner-all"+(c.disabled?" ui-slider-disabled ui-disabled":""));this.range=a([]);if(c.range){if(c.range===true){if(!c.values)c.values=[this._valueMin(),this._valueMin()];if(c.values.length&&c.values.length!==2)c.values=[c.values[0],c.values[0]]}this.range=a("<div></div>").appendTo(this.element).addClass("ui-slider-range ui-widget-header"+(c.range==="min"||c.range==="max"?" ui-slider-range-"+c.range:""))}for(var i=f.length;i<g;i+=1)e.push("<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>");
this.handles=f.add(a(e.join("")).appendTo(d.element));this.handle=this.handles.eq(0);this.handles.add(this.range).filter("a").click(function(b){b.preventDefault()}).hover(function(){c.disabled||a(this).addClass("ui-state-hover")},function(){a(this).removeClass("ui-state-hover")}).focus(function(){if(c.disabled)a(this).blur();else{a(".ui-slider .ui-state-focus").removeClass("ui-state-focus");a(this).addClass("ui-state-focus")}}).blur(function(){a(this).removeClass("ui-state-focus")});this.handles.each(function(b){a(this).data("index.ui-slider-handle",
b)});this.handles.keydown(function(b){var h=true,j=a(this).data("index.ui-slider-handle"),l,o,n;if(!d.options.disabled){switch(b.keyCode){case a.ui.keyCode.HOME:case a.ui.keyCode.END:case a.ui.keyCode.PAGE_UP:case a.ui.keyCode.PAGE_DOWN:case a.ui.keyCode.UP:case a.ui.keyCode.RIGHT:case a.ui.keyCode.DOWN:case a.ui.keyCode.LEFT:h=false;if(!d._keySliding){d._keySliding=true;a(this).addClass("ui-state-active");l=d._start(b,j);if(l===false)return}break}n=d.options.step;l=d.options.values&&d.options.values.length?
(o=d.values(j)):(o=d.value());switch(b.keyCode){case a.ui.keyCode.HOME:o=d._valueMin();break;case a.ui.keyCode.END:o=d._valueMax();break;case a.ui.keyCode.PAGE_UP:o=d._trimAlignValue(l+(d._valueMax()-d._valueMin())/5);break;case a.ui.keyCode.PAGE_DOWN:o=d._trimAlignValue(l-(d._valueMax()-d._valueMin())/5);break;case a.ui.keyCode.UP:case a.ui.keyCode.RIGHT:if(l===d._valueMax())return;o=d._trimAlignValue(l+n);break;case a.ui.keyCode.DOWN:case a.ui.keyCode.LEFT:if(l===d._valueMin())return;o=d._trimAlignValue(l-
n);break}d._slide(b,j,o);return h}}).keyup(function(b){var h=a(this).data("index.ui-slider-handle");if(d._keySliding){d._keySliding=false;d._stop(b,h);d._change(b,h);a(this).removeClass("ui-state-active")}});this._refreshValue();this._animateOff=false},destroy:function(){this.handles.remove();this.range.remove();this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-slider-disabled ui-widget ui-widget-content ui-corner-all").removeData("slider").unbind(".slider");this._mouseDestroy();
return this},_mouseCapture:function(d){var c=this.options,f,g,e,i,b;if(c.disabled)return false;this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()};this.elementOffset=this.element.offset();f=this._normValueFromMouse({x:d.pageX,y:d.pageY});g=this._valueMax()-this._valueMin()+1;i=this;this.handles.each(function(h){var j=Math.abs(f-i.values(h));if(g>j){g=j;e=a(this);b=h}});if(c.range===true&&this.values(1)===c.min){b+=1;e=a(this.handles[b])}if(this._start(d,b)===false)return false;
this._mouseSliding=true;i._handleIndex=b;e.addClass("ui-state-active").focus();c=e.offset();this._clickOffset=!a(d.target).parents().andSelf().is(".ui-slider-handle")?{left:0,top:0}:{left:d.pageX-c.left-e.width()/2,top:d.pageY-c.top-e.height()/2-(parseInt(e.css("borderTopWidth"),10)||0)-(parseInt(e.css("borderBottomWidth"),10)||0)+(parseInt(e.css("marginTop"),10)||0)};this.handles.hasClass("ui-state-hover")||this._slide(d,b,f);return this._animateOff=true},_mouseStart:function(){return true},_mouseDrag:function(d){var c=
this._normValueFromMouse({x:d.pageX,y:d.pageY});this._slide(d,this._handleIndex,c);return false},_mouseStop:function(d){this.handles.removeClass("ui-state-active");this._mouseSliding=false;this._stop(d,this._handleIndex);this._change(d,this._handleIndex);this._clickOffset=this._handleIndex=null;return this._animateOff=false},_detectOrientation:function(){this.orientation=this.options.orientation==="vertical"?"vertical":"horizontal"},_normValueFromMouse:function(d){var c;if(this.orientation==="horizontal"){c=
this.elementSize.width;d=d.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)}else{c=this.elementSize.height;d=d.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)}c=d/c;if(c>1)c=1;if(c<0)c=0;if(this.orientation==="vertical")c=1-c;d=this._valueMax()-this._valueMin();return this._trimAlignValue(this._valueMin()+c*d)},_start:function(d,c){var f={handle:this.handles[c],value:this.value()};if(this.options.values&&this.options.values.length){f.value=this.values(c);
f.values=this.values()}return this._trigger("start",d,f)},_slide:function(d,c,f){var g;if(this.options.values&&this.options.values.length){g=this.values(c?0:1);if(this.options.values.length===2&&this.options.range===true&&(c===0&&f>g||c===1&&f<g))f=g;if(f!==this.values(c)){g=this.values();g[c]=f;d=this._trigger("slide",d,{handle:this.handles[c],value:f,values:g});this.values(c?0:1);d!==false&&this.values(c,f,true)}}else if(f!==this.value()){d=this._trigger("slide",d,{handle:this.handles[c],value:f});
d!==false&&this.value(f)}},_stop:function(d,c){var f={handle:this.handles[c],value:this.value()};if(this.options.values&&this.options.values.length){f.value=this.values(c);f.values=this.values()}this._trigger("stop",d,f)},_change:function(d,c){if(!this._keySliding&&!this._mouseSliding){var f={handle:this.handles[c],value:this.value()};if(this.options.values&&this.options.values.length){f.value=this.values(c);f.values=this.values()}this._trigger("change",d,f)}},value:function(d){if(arguments.length){this.options.value=
this._trimAlignValue(d);this._refreshValue();this._change(null,0)}else return this._value()},values:function(d,c){var f,g,e;if(arguments.length>1){this.options.values[d]=this._trimAlignValue(c);this._refreshValue();this._change(null,d)}else if(arguments.length)if(a.isArray(arguments[0])){f=this.options.values;g=arguments[0];for(e=0;e<f.length;e+=1){f[e]=this._trimAlignValue(g[e]);this._change(null,e)}this._refreshValue()}else return this.options.values&&this.options.values.length?this._values(d):
this.value();else return this._values()},_setOption:function(d,c){var f,g=0;if(a.isArray(this.options.values))g=this.options.values.length;a.Widget.prototype._setOption.apply(this,arguments);switch(d){case "disabled":if(c){this.handles.filter(".ui-state-focus").blur();this.handles.removeClass("ui-state-hover");this.handles.attr("disabled","disabled");this.element.addClass("ui-disabled")}else{this.handles.removeAttr("disabled");this.element.removeClass("ui-disabled")}break;case "orientation":this._detectOrientation();
this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation);this._refreshValue();break;case "value":this._animateOff=true;this._refreshValue();this._change(null,0);this._animateOff=false;break;case "values":this._animateOff=true;this._refreshValue();for(f=0;f<g;f+=1)this._change(null,f);this._animateOff=false;break}},_value:function(){var d=this.options.value;return d=this._trimAlignValue(d)},_values:function(d){var c,f;if(arguments.length){c=this.options.values[d];
return c=this._trimAlignValue(c)}else{c=this.options.values.slice();for(f=0;f<c.length;f+=1)c[f]=this._trimAlignValue(c[f]);return c}},_trimAlignValue:function(d){if(d<=this._valueMin())return this._valueMin();if(d>=this._valueMax())return this._valueMax();var c=this.options.step>0?this.options.step:1,f=(d-this._valueMin())%c;alignValue=d-f;if(Math.abs(f)*2>=c)alignValue+=f>0?c:-c;return parseFloat(alignValue.toFixed(5))},_valueMin:function(){return this.options.min},_valueMax:function(){return this.options.max},
_refreshValue:function(){var d=this.options.range,c=this.options,f=this,g=!this._animateOff?c.animate:false,e,i={},b,h,j,l;if(this.options.values&&this.options.values.length)this.handles.each(function(o){e=(f.values(o)-f._valueMin())/(f._valueMax()-f._valueMin())*100;i[f.orientation==="horizontal"?"left":"bottom"]=e+"%";a(this).stop(1,1)[g?"animate":"css"](i,c.animate);if(f.options.range===true)if(f.orientation==="horizontal"){if(o===0)f.range.stop(1,1)[g?"animate":"css"]({left:e+"%"},c.animate);
if(o===1)f.range[g?"animate":"css"]({width:e-b+"%"},{queue:false,duration:c.animate})}else{if(o===0)f.range.stop(1,1)[g?"animate":"css"]({bottom:e+"%"},c.animate);if(o===1)f.range[g?"animate":"css"]({height:e-b+"%"},{queue:false,duration:c.animate})}b=e});else{h=this.value();j=this._valueMin();l=this._valueMax();e=l!==j?(h-j)/(l-j)*100:0;i[f.orientation==="horizontal"?"left":"bottom"]=e+"%";this.handle.stop(1,1)[g?"animate":"css"](i,c.animate);if(d==="min"&&this.orientation==="horizontal")this.range.stop(1,
1)[g?"animate":"css"]({width:e+"%"},c.animate);if(d==="max"&&this.orientation==="horizontal")this.range[g?"animate":"css"]({width:100-e+"%"},{queue:false,duration:c.animate});if(d==="min"&&this.orientation==="vertical")this.range.stop(1,1)[g?"animate":"css"]({height:e+"%"},c.animate);if(d==="max"&&this.orientation==="vertical")this.range[g?"animate":"css"]({height:100-e+"%"},{queue:false,duration:c.animate})}}});a.extend(a.ui.slider,{version:"1.8.13"})})(jQuery);
(function(a,d){function c(){return++g}function f(){return++e}var g=0,e=0;a.widget("ui.tabs",{options:{add:null,ajaxOptions:null,cache:false,cookie:null,collapsible:false,disable:null,disabled:[],enable:null,event:"click",fx:null,idPrefix:"ui-tabs-",load:null,panelTemplate:"<div></div>",remove:null,select:null,show:null,spinner:"<em>Loading&#8230;</em>",tabTemplate:"<li><a href='#{href}'><span>#{label}</span></a></li>"},_create:function(){this._tabify(true)},_setOption:function(i,b){if(i=="selected")this.options.collapsible&&
b==this.options.selected||this.select(b);else{this.options[i]=b;this._tabify()}},_tabId:function(i){return i.title&&i.title.replace(/\s/g,"_").replace(/[^\w\u00c0-\uFFFF-]/g,"")||this.options.idPrefix+c()},_sanitizeSelector:function(i){return i.replace(/:/g,"\\:")},_cookie:function(){var i=this.cookie||(this.cookie=this.options.cookie.name||"ui-tabs-"+f());return a.cookie.apply(null,[i].concat(a.makeArray(arguments)))},_ui:function(i,b){return{tab:i,panel:b,index:this.anchors.index(i)}},_cleanup:function(){this.lis.filter(".ui-state-processing").removeClass("ui-state-processing").find("span:data(label.tabs)").each(function(){var i=
a(this);i.html(i.data("label.tabs")).removeData("label.tabs")})},_tabify:function(i){function b(r,u){r.css("display","");!a.support.opacity&&u.opacity&&r[0].style.removeAttribute("filter")}var h=this,j=this.options,l=/^#.+/;this.list=this.element.find("ol,ul").eq(0);this.lis=a(" > li:has(a[href])",this.list);this.anchors=this.lis.map(function(){return a("a",this)[0]});this.panels=a([]);this.anchors.each(function(r,u){var v=a(u).attr("href"),w=v.split("#")[0],x;if(w&&(w===location.toString().split("#")[0]||
(x=a("base")[0])&&w===x.href)){v=u.hash;u.href=v}if(l.test(v))h.panels=h.panels.add(h.element.find(h._sanitizeSelector(v)));else if(v&&v!=="#"){a.data(u,"href.tabs",v);a.data(u,"load.tabs",v.replace(/#.*$/,""));v=h._tabId(u);u.href="#"+v;u=h.element.find("#"+v);if(!u.length){u=a(j.panelTemplate).attr("id",v).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").insertAfter(h.panels[r-1]||h.list);u.data("destroy.tabs",true)}h.panels=h.panels.add(u)}else j.disabled.push(r)});if(i){this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all");
this.list.addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all");this.lis.addClass("ui-state-default ui-corner-top");this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom");if(j.selected===d){location.hash&&this.anchors.each(function(r,u){if(u.hash==location.hash){j.selected=r;return false}});if(typeof j.selected!=="number"&&j.cookie)j.selected=parseInt(h._cookie(),10);if(typeof j.selected!=="number"&&this.lis.filter(".ui-tabs-selected").length)j.selected=
this.lis.index(this.lis.filter(".ui-tabs-selected"));j.selected=j.selected||(this.lis.length?0:-1)}else if(j.selected===null)j.selected=-1;j.selected=j.selected>=0&&this.anchors[j.selected]||j.selected<0?j.selected:0;j.disabled=a.unique(j.disabled.concat(a.map(this.lis.filter(".ui-state-disabled"),function(r){return h.lis.index(r)}))).sort();a.inArray(j.selected,j.disabled)!=-1&&j.disabled.splice(a.inArray(j.selected,j.disabled),1);this.panels.addClass("ui-tabs-hide");this.lis.removeClass("ui-tabs-selected ui-state-active");
if(j.selected>=0&&this.anchors.length){h.element.find(h._sanitizeSelector(h.anchors[j.selected].hash)).removeClass("ui-tabs-hide");this.lis.eq(j.selected).addClass("ui-tabs-selected ui-state-active");h.element.queue("tabs",function(){h._trigger("show",null,h._ui(h.anchors[j.selected],h.element.find(h._sanitizeSelector(h.anchors[j.selected].hash))[0]))});this.load(j.selected)}a(window).bind("unload",function(){h.lis.add(h.anchors).unbind(".tabs");h.lis=h.anchors=h.panels=null})}else j.selected=this.lis.index(this.lis.filter(".ui-tabs-selected"));
this.element[j.collapsible?"addClass":"removeClass"]("ui-tabs-collapsible");j.cookie&&this._cookie(j.selected,j.cookie);i=0;for(var o;o=this.lis[i];i++)a(o)[a.inArray(i,j.disabled)!=-1&&!a(o).hasClass("ui-tabs-selected")?"addClass":"removeClass"]("ui-state-disabled");j.cache===false&&this.anchors.removeData("cache.tabs");this.lis.add(this.anchors).unbind(".tabs");if(j.event!=="mouseover"){var n=function(r,u){u.is(":not(.ui-state-disabled)")&&u.addClass("ui-state-"+r)},k=function(r,u){u.removeClass("ui-state-"+
r)};this.lis.bind("mouseover.tabs",function(){n("hover",a(this))});this.lis.bind("mouseout.tabs",function(){k("hover",a(this))});this.anchors.bind("focus.tabs",function(){n("focus",a(this).closest("li"))});this.anchors.bind("blur.tabs",function(){k("focus",a(this).closest("li"))})}var m,p;if(j.fx)if(a.isArray(j.fx)){m=j.fx[0];p=j.fx[1]}else m=p=j.fx;var q=p?function(r,u){a(r).closest("li").addClass("ui-tabs-selected ui-state-active");u.hide().removeClass("ui-tabs-hide").animate(p,p.duration||"normal",
function(){b(u,p);h._trigger("show",null,h._ui(r,u[0]))})}:function(r,u){a(r).closest("li").addClass("ui-tabs-selected ui-state-active");u.removeClass("ui-tabs-hide");h._trigger("show",null,h._ui(r,u[0]))},s=m?function(r,u){u.animate(m,m.duration||"normal",function(){h.lis.removeClass("ui-tabs-selected ui-state-active");u.addClass("ui-tabs-hide");b(u,m);h.element.dequeue("tabs")})}:function(r,u){h.lis.removeClass("ui-tabs-selected ui-state-active");u.addClass("ui-tabs-hide");h.element.dequeue("tabs")};
this.anchors.bind(j.event+".tabs",function(){var r=this,u=a(r).closest("li"),v=h.panels.filter(":not(.ui-tabs-hide)"),w=h.element.find(h._sanitizeSelector(r.hash));if(u.hasClass("ui-tabs-selected")&&!j.collapsible||u.hasClass("ui-state-disabled")||u.hasClass("ui-state-processing")||h.panels.filter(":animated").length||h._trigger("select",null,h._ui(this,w[0]))===false){this.blur();return false}j.selected=h.anchors.index(this);h.abort();if(j.collapsible)if(u.hasClass("ui-tabs-selected")){j.selected=
-1;j.cookie&&h._cookie(j.selected,j.cookie);h.element.queue("tabs",function(){s(r,v)}).dequeue("tabs");this.blur();return false}else if(!v.length){j.cookie&&h._cookie(j.selected,j.cookie);h.element.queue("tabs",function(){q(r,w)});h.load(h.anchors.index(this));this.blur();return false}j.cookie&&h._cookie(j.selected,j.cookie);if(w.length){v.length&&h.element.queue("tabs",function(){s(r,v)});h.element.queue("tabs",function(){q(r,w)});h.load(h.anchors.index(this))}else throw"jQuery UI Tabs: Mismatching fragment identifier.";
a.browser.msie&&this.blur()});this.anchors.bind("click.tabs",function(){return false})},_getIndex:function(i){if(typeof i=="string")i=this.anchors.index(this.anchors.filter("[href$="+i+"]"));return i},destroy:function(){var i=this.options;this.abort();this.element.unbind(".tabs").removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible").removeData("tabs");this.list.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all");this.anchors.each(function(){var b=
a.data(this,"href.tabs");if(b)this.href=b;var h=a(this).unbind(".tabs");a.each(["href","load","cache"],function(j,l){h.removeData(l+".tabs")})});this.lis.unbind(".tabs").add(this.panels).each(function(){a.data(this,"destroy.tabs")?a(this).remove():a(this).removeClass("ui-state-default ui-corner-top ui-tabs-selected ui-state-active ui-state-hover ui-state-focus ui-state-disabled ui-tabs-panel ui-widget-content ui-corner-bottom ui-tabs-hide")});i.cookie&&this._cookie(null,i.cookie);return this},add:function(i,
b,h){if(h===d)h=this.anchors.length;var j=this,l=this.options;b=a(l.tabTemplate.replace(/#\{href\}/g,i).replace(/#\{label\}/g,b));i=!i.indexOf("#")?i.replace("#",""):this._tabId(a("a",b)[0]);b.addClass("ui-state-default ui-corner-top").data("destroy.tabs",true);var o=j.element.find("#"+i);o.length||(o=a(l.panelTemplate).attr("id",i).data("destroy.tabs",true));o.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom ui-tabs-hide");if(h>=this.lis.length){b.appendTo(this.list);o.appendTo(this.list[0].parentNode)}else{b.insertBefore(this.lis[h]);
o.insertBefore(this.panels[h])}l.disabled=a.map(l.disabled,function(n){return n>=h?++n:n});this._tabify();if(this.anchors.length==1){l.selected=0;b.addClass("ui-tabs-selected ui-state-active");o.removeClass("ui-tabs-hide");this.element.queue("tabs",function(){j._trigger("show",null,j._ui(j.anchors[0],j.panels[0]))});this.load(0)}this._trigger("add",null,this._ui(this.anchors[h],this.panels[h]));return this},remove:function(i){i=this._getIndex(i);var b=this.options,h=this.lis.eq(i).remove(),j=this.panels.eq(i).remove();
if(h.hasClass("ui-tabs-selected")&&this.anchors.length>1)this.select(i+(i+1<this.anchors.length?1:-1));b.disabled=a.map(a.grep(b.disabled,function(l){return l!=i}),function(l){return l>=i?--l:l});this._tabify();this._trigger("remove",null,this._ui(h.find("a")[0],j[0]));return this},enable:function(i){i=this._getIndex(i);var b=this.options;if(a.inArray(i,b.disabled)!=-1){this.lis.eq(i).removeClass("ui-state-disabled");b.disabled=a.grep(b.disabled,function(h){return h!=i});this._trigger("enable",null,
this._ui(this.anchors[i],this.panels[i]));return this}},disable:function(i){i=this._getIndex(i);var b=this.options;if(i!=b.selected){this.lis.eq(i).addClass("ui-state-disabled");b.disabled.push(i);b.disabled.sort();this._trigger("disable",null,this._ui(this.anchors[i],this.panels[i]))}return this},select:function(i){i=this._getIndex(i);if(i==-1)if(this.options.collapsible&&this.options.selected!=-1)i=this.options.selected;else return this;this.anchors.eq(i).trigger(this.options.event+".tabs");return this},
load:function(i){i=this._getIndex(i);var b=this,h=this.options,j=this.anchors.eq(i)[0],l=a.data(j,"load.tabs");this.abort();if(!l||this.element.queue("tabs").length!==0&&a.data(j,"cache.tabs"))this.element.dequeue("tabs");else{this.lis.eq(i).addClass("ui-state-processing");if(h.spinner){var o=a("span",j);o.data("label.tabs",o.html()).html(h.spinner)}this.xhr=a.ajax(a.extend({},h.ajaxOptions,{url:l,success:function(n,k){b.element.find(b._sanitizeSelector(j.hash)).html(n);b._cleanup();h.cache&&a.data(j,
"cache.tabs",true);b._trigger("load",null,b._ui(b.anchors[i],b.panels[i]));try{h.ajaxOptions.success(n,k)}catch(m){}},error:function(n,k){b._cleanup();b._trigger("load",null,b._ui(b.anchors[i],b.panels[i]));try{h.ajaxOptions.error(n,k,i,j)}catch(m){}}}));b.element.dequeue("tabs");return this}},abort:function(){this.element.queue([]);this.panels.stop(false,true);this.element.queue("tabs",this.element.queue("tabs").splice(-2,2));if(this.xhr){this.xhr.abort();delete this.xhr}this._cleanup();return this},
url:function(i,b){this.anchors.eq(i).removeData("cache.tabs").data("load.tabs",b);return this},length:function(){return this.anchors.length}});a.extend(a.ui.tabs,{version:"1.8.13"});a.extend(a.ui.tabs.prototype,{rotation:null,rotate:function(i,b){var h=this,j=this.options,l=h._rotate||(h._rotate=function(o){clearTimeout(h.rotation);h.rotation=setTimeout(function(){var n=j.selected;h.select(++n<h.anchors.length?n:0)},i);o&&o.stopPropagation()});b=h._unrotate||(h._unrotate=!b?function(o){o.clientX&&
h.rotate(null)}:function(){t=j.selected;l()});if(i){this.element.bind("tabsshow",l);this.anchors.bind(j.event+".tabs",b);l()}else{clearTimeout(h.rotation);this.element.unbind("tabsshow",l);this.anchors.unbind(j.event+".tabs",b);delete this._rotate;delete this._unrotate}return this}})})(jQuery);
(function($, undefined) {

/**
 * Unobtrusive scripting adapter for jQuery
 * https://github.com/rails/jquery-ujs
 *
 * Requires jQuery 1.7.0 or later.
 *
 * Released under the MIT license
 *
 */

  // Cut down on the number if issues from people inadvertently including jquery_ujs twice
  // by detecting and raising an error when it happens.
  var alreadyInitialized = function() {
    var events = $._data(document, 'events');
    return events && events.click && $.grep(events.click, function(e) { return e.namespace === 'rails'; }).length;
  }

  if ( alreadyInitialized() ) {
    $.error('jquery-ujs has already been loaded!');
  }

  // Shorthand to make it a little easier to call public rails functions from within rails.js
  var rails;

  $.rails = rails = {
    // Link elements bound by jquery-ujs
    linkClickSelector: 'a[data-confirm], a[data-method], a[data-remote], a[data-disable-with]',

    // Select elements bound by jquery-ujs
    inputChangeSelector: 'select[data-remote], input[data-remote], textarea[data-remote]',

    // Form elements bound by jquery-ujs
    formSubmitSelector: 'form',

    // Form input elements bound by jquery-ujs
    formInputClickSelector: 'form input[type=submit], form input[type=image], form button[type=submit], form button:not([type])',

    // Form input elements disabled during form submission
    disableSelector: 'input[data-disable-with], button[data-disable-with], textarea[data-disable-with]',

    // Form input elements re-enabled after form submission
    enableSelector: 'input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled',

    // Form required input elements
    requiredInputSelector: 'input[name][required]:not([disabled]),textarea[name][required]:not([disabled])',

    // Form file input elements
    fileInputSelector: 'input[type=file]',

    // Link onClick disable selector with possible reenable after remote submission
    linkDisableSelector: 'a[data-disable-with]',

    // Make sure that every Ajax request sends the CSRF token
    CSRFProtection: function(xhr) {
      var token = $('meta[name="csrf-token"]').attr('content');
      if (token) xhr.setRequestHeader('X-CSRF-Token', token);
    },

    // Triggers an event on an element and returns false if the event result is false
    fire: function(obj, name, data) {
      var event = $.Event(name);
      obj.trigger(event, data);
      return event.result !== false;
    },

    // Default confirm dialog, may be overridden with custom confirm dialog in $.rails.confirm
    confirm: function(message) {
      return confirm(message);
    },

    // Default ajax function, may be overridden with custom function in $.rails.ajax
    ajax: function(options) {
      return $.ajax(options);
    },

    // Default way to get an element's href. May be overridden at $.rails.href.
    href: function(element) {
      return element.attr('href');
    },

    // Submits "remote" forms and links with ajax
    handleRemote: function(element) {
      var method, url, data, elCrossDomain, crossDomain, withCredentials, dataType, options;

      if (rails.fire(element, 'ajax:before')) {
        elCrossDomain = element.data('cross-domain');
        crossDomain = elCrossDomain === undefined ? null : elCrossDomain;
        withCredentials = element.data('with-credentials') || null;
        dataType = element.data('type') || ($.ajaxSettings && $.ajaxSettings.dataType);

        if (element.is('form')) {
          method = element.attr('method');
          url = element.attr('action');
          data = element.serializeArray();
          // memoized value from clicked submit button
          var button = element.data('ujs:submit-button');
          if (button) {
            data.push(button);
            element.data('ujs:submit-button', null);
          }
        } else if (element.is(rails.inputChangeSelector)) {
          method = element.data('method');
          url = element.data('url');
          data = element.serialize();
          if (element.data('params')) data = data + "&" + element.data('params');
        } else {
          method = element.data('method');
          url = rails.href(element);
          data = element.data('params') || null;
        }

        options = {
          type: method || 'GET', data: data, dataType: dataType,
          // stopping the "ajax:beforeSend" event will cancel the ajax request
          beforeSend: function(xhr, settings) {
            if (settings.dataType === undefined) {
              xhr.setRequestHeader('accept', '*/*;q=0.5, ' + settings.accepts.script);
            }
            return rails.fire(element, 'ajax:beforeSend', [xhr, settings]);
          },
          success: function(data, status, xhr) {
            element.trigger('ajax:success', [data, status, xhr]);
          },
          complete: function(xhr, status) {
            element.trigger('ajax:complete', [xhr, status]);
          },
          error: function(xhr, status, error) {
            element.trigger('ajax:error', [xhr, status, error]);
          },
          crossDomain: crossDomain
        };

        // There is no withCredentials for IE6-8 when
        // "Enable native XMLHTTP support" is disabled
        if (withCredentials) {
          options.xhrFields = {
            withCredentials: withCredentials
          };
        }

        // Only pass url to `ajax` options if not blank
        if (url) { options.url = url; }

        var jqxhr = rails.ajax(options);
        element.trigger('ajax:send', jqxhr);
        return jqxhr;
      } else {
        return false;
      }
    },

    // Handles "data-method" on links such as:
    // <a href="/users/5" data-method="delete" rel="nofollow" data-confirm="Are you sure?">Delete</a>
    handleMethod: function(link) {
      var href = rails.href(link),
        method = link.data('method'),
        target = link.attr('target'),
        csrf_token = $('meta[name=csrf-token]').attr('content'),
        csrf_param = $('meta[name=csrf-param]').attr('content'),
        form = $('<form method="post" action="' + href + '"></form>'),
        metadata_input = '<input name="_method" value="' + method + '" type="hidden" />';

      if (csrf_param !== undefined && csrf_token !== undefined) {
        metadata_input += '<input name="' + csrf_param + '" value="' + csrf_token + '" type="hidden" />';
      }

      if (target) { form.attr('target', target); }

      form.hide().append(metadata_input).appendTo('body');
      form.submit();
    },

    /* Disables form elements:
      - Caches element value in 'ujs:enable-with' data store
      - Replaces element text with value of 'data-disable-with' attribute
      - Sets disabled property to true
    */
    disableFormElements: function(form) {
      form.find(rails.disableSelector).each(function() {
        var element = $(this), method = element.is('button') ? 'html' : 'val';
        element.data('ujs:enable-with', element[method]());
        element[method](element.data('disable-with'));
        element.prop('disabled', true);
      });
    },

    /* Re-enables disabled form elements:
      - Replaces element text with cached value from 'ujs:enable-with' data store (created in `disableFormElements`)
      - Sets disabled property to false
    */
    enableFormElements: function(form) {
      form.find(rails.enableSelector).each(function() {
        var element = $(this), method = element.is('button') ? 'html' : 'val';
        if (element.data('ujs:enable-with')) element[method](element.data('ujs:enable-with'));
        element.prop('disabled', false);
      });
    },

   /* For 'data-confirm' attribute:
      - Fires `confirm` event
      - Shows the confirmation dialog
      - Fires the `confirm:complete` event

      Returns `true` if no function stops the chain and user chose yes; `false` otherwise.
      Attaching a handler to the element's `confirm` event that returns a `falsy` value cancels the confirmation dialog.
      Attaching a handler to the element's `confirm:complete` event that returns a `falsy` value makes this function
      return false. The `confirm:complete` event is fired whether or not the user answered true or false to the dialog.
   */
    allowAction: function(element) {
      var message = element.data('confirm'),
          answer = false, callback;
      if (!message) { return true; }

      if (rails.fire(element, 'confirm')) {
        answer = rails.confirm(message);
        callback = rails.fire(element, 'confirm:complete', [answer]);
      }
      return answer && callback;
    },

    // Helper function which checks for blank inputs in a form that match the specified CSS selector
    blankInputs: function(form, specifiedSelector, nonBlank) {
      var inputs = $(), input, valueToCheck,
          selector = specifiedSelector || 'input,textarea',
          allInputs = form.find(selector);

      allInputs.each(function() {
        input = $(this);
        valueToCheck = input.is('input[type=checkbox],input[type=radio]') ? input.is(':checked') : input.val();
        // If nonBlank and valueToCheck are both truthy, or nonBlank and valueToCheck are both falsey
        if (!valueToCheck === !nonBlank) {

          // Don't count unchecked required radio if other radio with same name is checked
          if (input.is('input[type=radio]') && allInputs.filter('input[type=radio]:checked[name="' + input.attr('name') + '"]').length) {
            return true; // Skip to next input
          }

          inputs = inputs.add(input);
        }
      });
      return inputs.length ? inputs : false;
    },

    // Helper function which checks for non-blank inputs in a form that match the specified CSS selector
    nonBlankInputs: function(form, specifiedSelector) {
      return rails.blankInputs(form, specifiedSelector, true); // true specifies nonBlank
    },

    // Helper function, needed to provide consistent behavior in IE
    stopEverything: function(e) {
      $(e.target).trigger('ujs:everythingStopped');
      e.stopImmediatePropagation();
      return false;
    },

    // find all the submit events directly bound to the form and
    // manually invoke them. If anyone returns false then stop the loop
    callFormSubmitBindings: function(form, event) {
      var events = form.data('events'), continuePropagation = true;
      if (events !== undefined && events['submit'] !== undefined) {
        $.each(events['submit'], function(i, obj){
          if (typeof obj.handler === 'function') return continuePropagation = obj.handler(event);
        });
      }
      return continuePropagation;
    },

    //  replace element's html with the 'data-disable-with' after storing original html
    //  and prevent clicking on it
    disableElement: function(element) {
      element.data('ujs:enable-with', element.html()); // store enabled state
      element.html(element.data('disable-with')); // set to disabled state
      element.bind('click.railsDisable', function(e) { // prevent further clicking
        return rails.stopEverything(e);
      });
    },

    // restore element to its original state which was disabled by 'disableElement' above
    enableElement: function(element) {
      if (element.data('ujs:enable-with') !== undefined) {
        element.html(element.data('ujs:enable-with')); // set to old enabled state
        // this should be element.removeData('ujs:enable-with')
        // but, there is currently a bug in jquery which makes hyphenated data attributes not get removed
        element.data('ujs:enable-with', false); // clean up cache
      }
      element.unbind('click.railsDisable'); // enable element
    }

  };

  if (rails.fire($(document), 'rails:attachBindings')) {

    $.ajaxPrefilter(function(options, originalOptions, xhr){ if ( !options.crossDomain ) { rails.CSRFProtection(xhr); }});

    $(document).delegate(rails.linkDisableSelector, 'ajax:complete', function() {
        rails.enableElement($(this));
    });

    $(document).delegate(rails.linkClickSelector, 'click.rails', function(e) {
      var link = $(this), method = link.data('method'), data = link.data('params');
      if (!rails.allowAction(link)) return rails.stopEverything(e);

      if (link.is(rails.linkDisableSelector)) rails.disableElement(link);

      if (link.data('remote') !== undefined) {
        if ( (e.metaKey || e.ctrlKey) && (!method || method === 'GET') && !data ) { return true; }

        var handleRemote = rails.handleRemote(link);
        // response from rails.handleRemote() will either be false or a deferred object promise.
        if (handleRemote === false) {
          rails.enableElement(link);
        } else {
          handleRemote.error( function() { rails.enableElement(link); } );
        }
        return false;

      } else if (link.data('method')) {
        rails.handleMethod(link);
        return false;
      }
    });

    $(document).delegate(rails.inputChangeSelector, 'change.rails', function(e) {
      var link = $(this);
      if (!rails.allowAction(link)) return rails.stopEverything(e);

      rails.handleRemote(link);
      return false;
    });

    $(document).delegate(rails.formSubmitSelector, 'submit.rails', function(e) {
      var form = $(this),
        remote = form.data('remote') !== undefined,
        blankRequiredInputs = rails.blankInputs(form, rails.requiredInputSelector),
        nonBlankFileInputs = rails.nonBlankInputs(form, rails.fileInputSelector);

      if (!rails.allowAction(form)) return rails.stopEverything(e);

      // skip other logic when required values are missing or file upload is present
      if (blankRequiredInputs && form.attr("novalidate") == undefined && rails.fire(form, 'ajax:aborted:required', [blankRequiredInputs])) {
        return rails.stopEverything(e);
      }

      if (remote) {
        if (nonBlankFileInputs) {
          // slight timeout so that the submit button gets properly serialized
          // (make it easy for event handler to serialize form without disabled values)
          setTimeout(function(){ rails.disableFormElements(form); }, 13);
          var aborted = rails.fire(form, 'ajax:aborted:file', [nonBlankFileInputs]);

          // re-enable form elements if event bindings return false (canceling normal form submission)
          if (!aborted) { setTimeout(function(){ rails.enableFormElements(form); }, 13); }

          return aborted;
        }

        // If browser does not support submit bubbling, then this live-binding will be called before direct
        // bindings. Therefore, we should directly call any direct bindings before remotely submitting form.
        if (!$.support.submitBubbles && $().jquery < '1.7' && rails.callFormSubmitBindings(form, e) === false) return rails.stopEverything(e);

        rails.handleRemote(form);
        return false;

      } else {
        // slight timeout so that the submit button gets properly serialized
        setTimeout(function(){ rails.disableFormElements(form); }, 13);
      }
    });

    $(document).delegate(rails.formInputClickSelector, 'click.rails', function(event) {
      var button = $(this);

      if (!rails.allowAction(button)) return rails.stopEverything(event);

      // register the pressed submit button
      var name = button.attr('name'),
        data = name ? {name:name, value:button.val()} : null;

      button.closest('form').data('ujs:submit-button', data);
    });

    $(document).delegate(rails.formSubmitSelector, 'ajax:beforeSend.rails', function(event) {
      if (this == event.target) rails.disableFormElements($(this));
    });

    $(document).delegate(rails.formSubmitSelector, 'ajax:complete.rails', function(event) {
      if (this == event.target) rails.enableFormElements($(this));
    });

    $(function(){
      // making sure that all forms have actual up-to-date token(cached forms contain old one)
      var csrf_token = $('meta[name=csrf-token]').attr('content');
      var csrf_param = $('meta[name=csrf-param]').attr('content');
      $('form input[name="' + csrf_param + '"]').val(csrf_token);
    });
  }

})( jQuery );
/*
* jQuery timepicker addon
* By: Trent Richardson [http://trentrichardson.com]
* Version 0.9.5
* Last Modified: 05/25/2011
* 
* Copyright 2011 Trent Richardson
* Dual licensed under the MIT and GPL licenses.
* http://trentrichardson.com/Impromptu/GPL-LICENSE.txt
* http://trentrichardson.com/Impromptu/MIT-LICENSE.txt
* 
* HERES THE CSS:
* .ui-timepicker-div .ui-widget-header{ margin-bottom: 8px; }
* .ui-timepicker-div dl{ text-align: left; }
* .ui-timepicker-div dl dt{ height: 25px; }
* .ui-timepicker-div dl dd{ margin: -25px 10px 10px 65px; }
* .ui-timepicker-div td { font-size: 90%; }
*/

(function($) {

$.extend($.ui, { timepicker: { version: "0.9.5" } });

/* Time picker manager.
   Use the singleton instance of this class, $.timepicker, to interact with the time picker.
   Settings for (groups of) time pickers are maintained in an instance object,
   allowing multiple different settings on the same page. */

function Timepicker() {
	this.regional = []; // Available regional settings, indexed by language code
	this.regional[''] = { // Default regional settings
		currentText: 'Now',
		closeText: 'Done',
		ampm: false,
		timeFormat: 'hh:mm tt',
		timeOnlyTitle: 'Choose Time',
		timeText: 'Time',
		hourText: 'Hour',
		minuteText: 'Minute',
		secondText: 'Second',
		timezoneText: 'Time Zone'
	};
	this._defaults = { // Global defaults for all the datetime picker instances
		showButtonPanel: true,
		timeOnly: false,
		showHour: true,
		showMinute: true,
		showSecond: false,
		showTimezone: false,
		showTime: true,
		stepHour: 0.05,
		stepMinute: 0.05,
		stepSecond: 0.05,
		hour: 0,
		minute: 0,
		second: 0,
		timezone: '+0000',
		hourMin: 0,
		minuteMin: 0,
		secondMin: 0,
		hourMax: 23,
		minuteMax: 59,
		secondMax: 59,
		minDateTime: null,
		maxDateTime: null,
		hourGrid: 0,
		minuteGrid: 0,
		secondGrid: 0,
		alwaysSetTime: true,
		separator: ' ',
		altFieldTimeOnly: true,
		showTimepicker: true,
		timezoneList: ["-1100", "-1000", "-0900", "-0800", "-0700", "-0600",
			       "-0500", "-0400", "-0300", "-0200", "-0100", "+0000",
			       "+0100", "+0200", "+0300", "+0400", "+0500", "+0600",
			       "+0700", "+0800", "+0900", "+1000", "+1100", "+1200"]
	};
	$.extend(this._defaults, this.regional['']);
}

$.extend(Timepicker.prototype, {
	$input: null,
	$altInput: null,
	$timeObj: null,
	inst: null,
	hour_slider: null,
	minute_slider: null,
	second_slider: null,
	timezone_select: null,
	hour: 0,
	minute: 0,
	second: 0,
	timezone: '+0000',
	hourMinOriginal: null,
	minuteMinOriginal: null,
	secondMinOriginal: null,
	hourMaxOriginal: null,
	minuteMaxOriginal: null,
	secondMaxOriginal: null,
	ampm: '',
	formattedDate: '',
	formattedTime: '',
	formattedDateTime: '',
	timezoneList: ["-1100", "-1000", "-0900", "-0800", "-0700", "-0600",
			"-0500", "-0400", "-0300", "-0200", "-0100", "+0000",
			"+0100", "+0200", "+0300", "+0400", "+0500", "+0600",
			"+0700", "+0800", "+0900", "+1000", "+1100", "+1200"],

	/* Override the default settings for all instances of the time picker.
	   @param  settings  object - the new settings to use as defaults (anonymous object)
	   @return the manager object */
	setDefaults: function(settings) {
		extendRemove(this._defaults, settings || {});
		return this;
	},

	//########################################################################
	// Create a new Timepicker instance
	//########################################################################
	_newInst: function($input, o) {
		var tp_inst = new Timepicker(),
			inlineSettings = {};
			
		for (var attrName in this._defaults) {
			var attrValue = $input.attr('time:' + attrName);
			if (attrValue) {
				try {
					inlineSettings[attrName] = eval(attrValue);
				} catch (err) {
					inlineSettings[attrName] = attrValue;
				}
			}
		}
		tp_inst._defaults = $.extend({}, this._defaults, inlineSettings, o, {
			beforeShow: function(input, dp_inst) {
				if ($.isFunction(o.beforeShow))
					o.beforeShow(input, dp_inst, tp_inst);
			},
			onChangeMonthYear: function(year, month, dp_inst) {
				// Update the time as well : this prevents the time from disappearing from the $input field.
				tp_inst._updateDateTime(dp_inst);
				if ($.isFunction(o.onChangeMonthYear))
					o.onChangeMonthYear.call($input[0], year, month, dp_inst, tp_inst);
			},
			onClose: function(dateText, dp_inst) {
				if (tp_inst.timeDefined === true && $input.val() != '')
					tp_inst._updateDateTime(dp_inst);
				if ($.isFunction(o.onClose))
					o.onClose.call($input[0], dateText, dp_inst, tp_inst);
			},
			timepicker: tp_inst // add timepicker as a property of datepicker: $.datepicker._get(dp_inst, 'timepicker');
		});

		tp_inst.hour = tp_inst._defaults.hour;
		tp_inst.minute = tp_inst._defaults.minute;
		tp_inst.second = tp_inst._defaults.second;
		tp_inst.ampm = '';
		tp_inst.$input = $input;

		if (o.altField)
			tp_inst.$altInput = $(o.altField)
				.css({ cursor: 'pointer' })
				.focus(function(){ $input.trigger("focus"); });
						
		// datepicker needs minDate/maxDate, timepicker needs minDateTime/maxDateTime..
		if(tp_inst._defaults.minDate !== undefined && tp_inst._defaults.minDate instanceof Date)
			tp_inst._defaults.minDateTime = new Date(tp_inst._defaults.minDate.getTime());
		if(tp_inst._defaults.minDateTime !== undefined && tp_inst._defaults.minDateTime instanceof Date)
			tp_inst._defaults.minDate = new Date(tp_inst._defaults.minDateTime.getTime());
		if(tp_inst._defaults.maxDate !== undefined && tp_inst._defaults.maxDate instanceof Date)
			tp_inst._defaults.maxDateTime = new Date(tp_inst._defaults.maxDate.getTime());
		if(tp_inst._defaults.maxDateTime !== undefined && tp_inst._defaults.maxDateTime instanceof Date)
			tp_inst._defaults.maxDate = new Date(tp_inst._defaults.maxDateTime.getTime());
			
		return tp_inst;
	},

	//########################################################################
	// add our sliders to the calendar
	//########################################################################
	_addTimePicker: function(dp_inst) {
		var currDT = (this.$altInput && this._defaults.altFieldTimeOnly) ?
				this.$input.val() + ' ' + this.$altInput.val() : 
				this.$input.val();

		this.timeDefined = this._parseTime(currDT);
		this._limitMinMaxDateTime(dp_inst, false);
		this._injectTimePicker();
	},

	//########################################################################
	// parse the time string from input value or _setTime
	//########################################################################
	_parseTime: function(timeString, withDate) {
		var regstr = this._defaults.timeFormat.toString()
				.replace(/h{1,2}/ig, '(\\d?\\d)')
				.replace(/m{1,2}/ig, '(\\d?\\d)')
				.replace(/s{1,2}/ig, '(\\d?\\d)')
				.replace(/t{1,2}/ig, '(am|pm|a|p)?')
				.replace(/z{1}/ig, '((\\+|-)\\d\\d\\d\\d)?')
				.replace(/\s/g, '\\s?') + '$',
			order = this._getFormatPositions(),
			treg;

		if (!this.inst) this.inst = $.datepicker._getInst(this.$input[0]);

		if (withDate || !this._defaults.timeOnly) {
			// the time should come after x number of characters and a space.
			// x = at least the length of text specified by the date format
			var dp_dateFormat = $.datepicker._get(this.inst, 'dateFormat');
			// escape special regex characters in the seperator
			var specials = new RegExp("[.*+?|()\\[\\]{}\\\\]", "g");
			regstr = '.{' + dp_dateFormat.length + ',}' + this._defaults.separator.replace(specials, "\\$&") + regstr;
		}
		
		treg = timeString.match(new RegExp(regstr, 'i'));

		if (treg) {
			if (order.t !== -1)
				this.ampm = ((treg[order.t] === undefined || treg[order.t].length === 0) ?
					'' :
					(treg[order.t].charAt(0).toUpperCase() == 'A') ? 'AM' : 'PM').toUpperCase();

			if (order.h !== -1) {
				if (this.ampm == 'AM' && treg[order.h] == '12') 
					this.hour = 0; // 12am = 0 hour
				else if (this.ampm == 'PM' && treg[order.h] != '12') 
					this.hour = (parseFloat(treg[order.h]) + 12).toFixed(0); // 12pm = 12 hour, any other pm = hour + 12
				else this.hour = Number(treg[order.h]);
			}

			if (order.m !== -1) this.minute = Number(treg[order.m]);
			if (order.s !== -1) this.second = Number(treg[order.s]);
			if (order.z !== -1) this.timezone = treg[order.z];
			
			return true;

		}
		return false;
	},

	//########################################################################
	// figure out position of time elements.. cause js cant do named captures
	//########################################################################
	_getFormatPositions: function() {
		var finds = this._defaults.timeFormat.toLowerCase().match(/(h{1,2}|m{1,2}|s{1,2}|t{1,2}|z)/g),
			orders = { h: -1, m: -1, s: -1, t: -1, z: -1 };

		if (finds)
			for (var i = 0; i < finds.length; i++)
				if (orders[finds[i].toString().charAt(0)] == -1)
					orders[finds[i].toString().charAt(0)] = i + 1;

		return orders;
	},

	//########################################################################
	// generate and inject html for timepicker into ui datepicker
	//########################################################################
	_injectTimePicker: function() {
		var $dp = this.inst.dpDiv,
			o = this._defaults,
			tp_inst = this,
			// Added by Peter Medeiros:
			// - Figure out what the hour/minute/second max should be based on the step values.
			// - Example: if stepMinute is 15, then minMax is 45.
			hourMax = (o.hourMax - (o.hourMax % o.stepHour)).toFixed(0),
			minMax  = (o.minuteMax - (o.minuteMax % o.stepMinute)).toFixed(0),
			secMax  = (o.secondMax - (o.secondMax % o.stepSecond)).toFixed(0),
			dp_id = this.inst.id.toString().replace(/([^A-Za-z0-9_])/g, '');

		// Prevent displaying twice
		//if ($dp.find("div#ui-timepicker-div-"+ dp_id).length === 0) {
		if ($dp.find("div#ui-timepicker-div-"+ dp_id).length === 0 && o.showTimepicker) {
			var noDisplay = ' style="display:none;"',
				html =	'<div class="ui-timepicker-div" id="ui-timepicker-div-' + dp_id + '"><dl>' +
						'<dt class="ui_tpicker_time_label" id="ui_tpicker_time_label_' + dp_id + '"' +
						((o.showTime) ? '' : noDisplay) + '>' + o.timeText + '</dt>' +
						'<dd class="ui_tpicker_time" id="ui_tpicker_time_' + dp_id + '"' +
						((o.showTime) ? '' : noDisplay) + '></dd>' +
						'<dt class="ui_tpicker_hour_label" id="ui_tpicker_hour_label_' + dp_id + '"' +
						((o.showHour) ? '' : noDisplay) + '>' + o.hourText + '</dt>',
				hourGridSize = 0,
				minuteGridSize = 0,
				secondGridSize = 0,
				size;
 
			if (o.showHour && o.hourGrid > 0) {
				html += '<dd class="ui_tpicker_hour">' +
						'<div id="ui_tpicker_hour_' + dp_id + '"' + ((o.showHour)   ? '' : noDisplay) + '></div>' +
						'<div style="padding-left: 1px"><table><tr>';

				for (var h = o.hourMin; h < hourMax; h += o.hourGrid) {
					hourGridSize++;
					var tmph = (o.ampm && h > 12) ? h-12 : h;
					if (tmph < 10) tmph = '0' + tmph;
					if (o.ampm) {
						if (h == 0) tmph = 12 +'a';
						else if (h < 12) tmph += 'a';
						else tmph += 'p';
					}
					html += '<td>' + tmph + '</td>';
				}

				html += '</tr></table></div>' +
						'</dd>';
			} else html += '<dd class="ui_tpicker_hour" id="ui_tpicker_hour_' + dp_id + '"' +
							((o.showHour) ? '' : noDisplay) + '></dd>';

			html += '<dt class="ui_tpicker_minute_label" id="ui_tpicker_minute_label_' + dp_id + '"' +
					((o.showMinute) ? '' : noDisplay) + '>' + o.minuteText + '</dt>';

			if (o.showMinute && o.minuteGrid > 0) {
				html += '<dd class="ui_tpicker_minute ui_tpicker_minute_' + o.minuteGrid + '">' +
						'<div id="ui_tpicker_minute_' + dp_id + '"' +
						((o.showMinute) ? '' : noDisplay) + '></div>' +
						'<div style="padding-left: 1px"><table><tr>';

				for (var m = o.minuteMin; m < minMax; m += o.minuteGrid) {
					minuteGridSize++;
					html += '<td>' + ((m < 10) ? '0' : '') + m + '</td>';
				}

				html += '</tr></table></div>' +
						'</dd>';
			} else html += '<dd class="ui_tpicker_minute" id="ui_tpicker_minute_' + dp_id + '"' +
							((o.showMinute) ? '' : noDisplay) + '></dd>';

			html += '<dt class="ui_tpicker_second_label" id="ui_tpicker_second_label_' + dp_id + '"' +
					((o.showSecond) ? '' : noDisplay) + '>' + o.secondText + '</dt>';

			if (o.showSecond && o.secondGrid > 0) {
				html += '<dd class="ui_tpicker_second ui_tpicker_second_' + o.secondGrid + '">' +
						'<div id="ui_tpicker_second_' + dp_id + '"' +
						((o.showSecond) ? '' : noDisplay) + '></div>' +
						'<div style="padding-left: 1px"><table><tr>';

				for (var s = o.secondMin; s < secMax; s += o.secondGrid) {
					secondGridSize++;
					html += '<td>' + ((s < 10) ? '0' : '') + s + '</td>';
				}

				html += '</tr></table></div>' +
						'</dd>';
			} else html += '<dd class="ui_tpicker_second" id="ui_tpicker_second_' + dp_id + '"'	+
							((o.showSecond) ? '' : noDisplay) + '></dd>';
							
			html += '<dt class="ui_tpicker_timezone_label" id="ui_tpicker_timezone_label_' + dp_id + '"' +
					((o.showTimezone) ? '' : noDisplay) + '>' + o.timezoneText + '</dt>';
			html += '<dd class="ui_tpicker_timezone" id="ui_tpicker_timezone_' + dp_id + '"'	+
							((o.showTimezone) ? '' : noDisplay) + '></dd>';

			html += '</dl></div>';
			$tp = $(html);

				// if we only want time picker...
			if (o.timeOnly === true) {
				$tp.prepend(
					'<div class="ui-widget-header ui-helper-clearfix ui-corner-all">' +
						'<div class="ui-datepicker-title">' + o.timeOnlyTitle + '</div>' +
					'</div>');
				$dp.find('.ui-datepicker-header, .ui-datepicker-calendar').hide();
			}

			this.hour_slider = $tp.find('#ui_tpicker_hour_'+ dp_id).slider({
				orientation: "horizontal",
				value: this.hour,
				min: o.hourMin,
				max: hourMax,
				step: o.stepHour,
				slide: function(event, ui) {
					tp_inst.hour_slider.slider( "option", "value", ui.value);
					tp_inst._onTimeChange();
				}
			});

			// Updated by Peter Medeiros:
			// - Pass in Event and UI instance into slide function
			this.minute_slider = $tp.find('#ui_tpicker_minute_'+ dp_id).slider({
				orientation: "horizontal",
				value: this.minute,
				min: o.minuteMin,
				max: minMax,
				step: o.stepMinute,
				slide: function(event, ui) {
					// update the global minute slider instance value with the current slider value
					tp_inst.minute_slider.slider( "option", "value", ui.value);
					tp_inst._onTimeChange();
				}
			});

			this.second_slider = $tp.find('#ui_tpicker_second_'+ dp_id).slider({
				orientation: "horizontal",
				value: this.second,
				min: o.secondMin,
				max: secMax,
				step: o.stepSecond,
				slide: function(event, ui) {
					tp_inst.second_slider.slider( "option", "value", ui.value);
					tp_inst._onTimeChange();
				}
			});
			
			
			this.timezone_select = $tp.find('#ui_tpicker_timezone_'+ dp_id).append('<select></select>').find("select");
			$.fn.append.apply(this.timezone_select,
				$.map(o.timezoneList, function(val, idx) {
					return $("<option />")
						.val(typeof val == "object" ? val.value : val)
						.text(typeof val == "object" ? val.label : val);
				})
			);
			this.timezone_select.val((typeof this.timezone != "undefined" && this.timezone != null && this.timezone != "") ? this.timezone : o.timezone);
			this.timezone_select.change(function() {
				tp_inst._onTimeChange();
			});

			// Add grid functionality
			if (o.showHour && o.hourGrid > 0) {
				size = 100 * hourGridSize * o.hourGrid / (hourMax - o.hourMin);

				$tp.find(".ui_tpicker_hour table").css({
					width: size + "%",
					marginLeft: (size / (-2 * hourGridSize)) + "%",
					borderCollapse: 'collapse'
				}).find("td").each( function(index) {
					$(this).click(function() {
						var h = $(this).html();
						if(o.ampm)	{
							var ap = h.substring(2).toLowerCase(),
								aph = parseInt(h.substring(0,2));
							if (ap == 'a') {
								if (aph == 12) h = 0;
								else h = aph;
							} else if (aph == 12) h = 12;
							else h = aph + 12;
						}
						tp_inst.hour_slider.slider("option", "value", h);
						tp_inst._onTimeChange();
						tp_inst._onSelectHandler();
					}).css({
						cursor: 'pointer',
						width: (100 / hourGridSize) + '%',
						textAlign: 'center',
						overflow: 'hidden'
					});
				});
			}

			if (o.showMinute && o.minuteGrid > 0) {
				size = 100 * minuteGridSize * o.minuteGrid / (minMax - o.minuteMin);
				$tp.find(".ui_tpicker_minute table").css({
					width: size + "%",
					marginLeft: (size / (-2 * minuteGridSize)) + "%",
					borderCollapse: 'collapse'
				}).find("td").each(function(index) {
					$(this).click(function() {
						tp_inst.minute_slider.slider("option", "value", $(this).html());
						tp_inst._onTimeChange();
						tp_inst._onSelectHandler();
					}).css({
						cursor: 'pointer',
						width: (100 / minuteGridSize) + '%',
						textAlign: 'center',
						overflow: 'hidden'
					});
				});
			}

			if (o.showSecond && o.secondGrid > 0) {
				$tp.find(".ui_tpicker_second table").css({
					width: size + "%",
					marginLeft: (size / (-2 * secondGridSize)) + "%",
					borderCollapse: 'collapse'
				}).find("td").each(function(index) {
					$(this).click(function() {
						tp_inst.second_slider.slider("option", "value", $(this).html());
						tp_inst._onTimeChange();
						tp_inst._onSelectHandler();
					}).css({
						cursor: 'pointer',
						width: (100 / secondGridSize) + '%',
						textAlign: 'center',
						overflow: 'hidden'
					});
				});
			}

			var $buttonPanel = $dp.find('.ui-datepicker-buttonpane');
			if ($buttonPanel.length) $buttonPanel.before($tp);
			else $dp.append($tp);

			this.$timeObj = $tp.find('#ui_tpicker_time_'+ dp_id);

			if (this.inst !== null) {
				var timeDefined = this.timeDefined;
				this._onTimeChange();
				this.timeDefined = timeDefined;
			}

			//Emulate datepicker onSelect behavior. Call on slidestop.
			var onSelectDelegate = function() {
				tp_inst._onSelectHandler();
			};
			this.hour_slider.bind('slidestop',onSelectDelegate);
			this.minute_slider.bind('slidestop',onSelectDelegate);
			this.second_slider.bind('slidestop',onSelectDelegate);
		}
	},

	//########################################################################
	// This function tries to limit the ability to go outside the 
	// min/max date range
	//########################################################################
	_limitMinMaxDateTime: function(dp_inst, adjustSliders){
		var o = this._defaults,
			dp_date = new Date(dp_inst.selectedYear, dp_inst.selectedMonth, dp_inst.selectedDay);

		if(!this._defaults.showTimepicker) return; // No time so nothing to check here

		if(this._defaults.minDateTime !== null && dp_date){
			var minDateTime = this._defaults.minDateTime,
				minDateTimeDate = new Date(minDateTime.getFullYear(), minDateTime.getMonth(), minDateTime.getDate(), 0, 0, 0, 0);

			if(this.hourMinOriginal === null || this.minuteMinOriginal === null || this.secondMinOriginal === null){
				this.hourMinOriginal = o.hourMin;
				this.minuteMinOriginal = o.minuteMin;
				this.secondMinOriginal = o.secondMin;
			}

			if(dp_inst.settings.timeOnly || minDateTimeDate.getTime() == dp_date.getTime()) {
				this._defaults.hourMin = minDateTime.getHours();
				if (this.hour <= this._defaults.hourMin) {
					this.hour = this._defaults.hourMin;
					this._defaults.minuteMin = minDateTime.getMinutes();
					if (this.minute <= this._defaults.minuteMin) {
						this.minute = this._defaults.minuteMin;
						this._defaults.secondMin = minDateTime.getSeconds();
					} else {
						if(this.second < this._defaults.secondMin) this.second = this._defaults.secondMin;
						this._defaults.secondMin = this.secondMinOriginal;
					}
				} else {
					this._defaults.minuteMin = this.minuteMinOriginal;
					this._defaults.secondMin = this.secondMinOriginal;
				}
			}else{
				this._defaults.hourMin = this.hourMinOriginal;
				this._defaults.minuteMin = this.minuteMinOriginal;
				this._defaults.secondMin = this.secondMinOriginal;
			}
		}

		if(this._defaults.maxDateTime !== null && dp_date){
			var maxDateTime = this._defaults.maxDateTime,
				maxDateTimeDate = new Date(maxDateTime.getFullYear(), maxDateTime.getMonth(), maxDateTime.getDate(), 0, 0, 0, 0);
	
			if(this.hourMaxOriginal === null || this.minuteMaxOriginal === null || this.secondMaxOriginal === null){
				this.hourMaxOriginal = o.hourMax;
				this.minuteMaxOriginal = o.minuteMax;
				this.secondMaxOriginal = o.secondMax;
			}

			if(dp_inst.settings.timeOnly || maxDateTimeDate.getTime() == dp_date.getTime()){
				this._defaults.hourMax = maxDateTime.getHours();
				if (this.hour >= this._defaults.hourMax) {
					this.hour = this._defaults.hourMax;
					this._defaults.minuteMax = maxDateTime.getMinutes();
					if (this.minute >= this._defaults.minuteMax) {
						this.minute = this._defaults.minuteMax;
						this._defaults.secondMin = maxDateTime.getSeconds();
					} else {
						if(this.second > this._defaults.secondMax) this.second = this._defaults.secondMax;
						this._defaults.secondMax = this.secondMaxOriginal;
					}
				} else {
					this._defaults.minuteMax = this.minuteMaxOriginal;
					this._defaults.secondMax = this.secondMaxOriginal;
				}
			}else{
				this._defaults.hourMax = this.hourMaxOriginal;
				this._defaults.minuteMax = this.minuteMaxOriginal;
				this._defaults.secondMax = this.secondMaxOriginal;
			}
		}

		if(adjustSliders !== undefined && adjustSliders === true){
			this.hour_slider.slider("option", { min: this._defaults.hourMin, max: this._defaults.hourMax }).slider('value', this.hour);
			this.minute_slider.slider("option", { min: this._defaults.minuteMin, max: this._defaults.minuteMax }).slider('value', this.minute);
			this.second_slider.slider("option", { min: this._defaults.secondMin, max: this._defaults.secondMax }).slider('value', this.second);
		}

	},

	
	//########################################################################
	// when a slider moves, set the internal time...
	// on time change is also called when the time is updated in the text field
	//########################################################################
	_onTimeChange: function() {
		var hour   = (this.hour_slider) ? this.hour_slider.slider('value') : false,
			minute = (this.minute_slider) ? this.minute_slider.slider('value') : false,
			second = (this.second_slider) ? this.second_slider.slider('value') : false,
			timezone = (this.timezone_select) ? this.timezone_select.val() : false;
		
		if (hour !== false) hour = parseInt(hour,10);
		if (minute !== false) minute = parseInt(minute,10);
		if (second !== false) second = parseInt(second,10);

		var ampm = (hour < 12) ? 'AM' : 'PM';
			
		// If the update was done in the input field, the input field should not be updated.
		// If the update was done using the sliders, update the input field.
		var hasChanged = (hour != this.hour || minute != this.minute || second != this.second || (this.ampm.length > 0 && this.ampm != ampm) || timezone != this.timezone);
		
		if (hasChanged) {

			if (hour !== false)this.hour = hour;
			if (minute !== false) this.minute = minute;
			if (second !== false) this.second = second;
			if (timezone !== false) this.timezone = timezone;
			this._limitMinMaxDateTime(this.inst, true);
		}
		if (this._defaults.ampm) this.ampm = ampm;
		
		this._formatTime();
		if (this.$timeObj) this.$timeObj.text(this.formattedTime);
		this.timeDefined = true;
		if (hasChanged) this._updateDateTime();
	},
    
	//########################################################################
	// call custom onSelect. 
	// bind to sliders slidestop, and grid click.
	//########################################################################
	_onSelectHandler: function() {
		var onSelect = this._defaults['onSelect'];
		var inputEl = this.$input ? this.$input[0] : null;
		if (onSelect && inputEl) {
			onSelect.apply(inputEl, [this.formattedDateTime, this]);
		}
	},

	//########################################################################
	// format the time all pretty...
	//########################################################################
	_formatTime: function(time, format, ampm) {
		if (ampm == undefined) ampm = this._defaults.ampm;
		time = time || { hour: this.hour, minute: this.minute, second: this.second, ampm: this.ampm, timezone: this.timezone };
		var tmptime = format || this._defaults.timeFormat.toString();

		if (ampm) {
			var hour12 = ((time.ampm == 'AM') ? (time.hour) : (time.hour % 12));
			hour12 = (Number(hour12) === 0) ? 12 : hour12;
			tmptime = tmptime.toString()
				.replace(/hh/g, ((hour12 < 10) ? '0' : '') + hour12)
				.replace(/h/g, hour12)
				.replace(/mm/g, ((time.minute < 10) ? '0' : '') + time.minute)
				.replace(/m/g, time.minute)
				.replace(/ss/g, ((time.second < 10) ? '0' : '') + time.second)
				.replace(/s/g, time.second)
				.replace(/TT/g, time.ampm.toUpperCase())
				.replace(/Tt/g, time.ampm.toUpperCase())
				.replace(/tT/g, time.ampm.toLowerCase())
				.replace(/tt/g, time.ampm.toLowerCase())
				.replace(/T/g, time.ampm.charAt(0).toUpperCase())
				.replace(/t/g, time.ampm.charAt(0).toLowerCase())
				.replace(/z/g, time.timezone);
		} else {
			tmptime = tmptime.toString()
				.replace(/hh/g, ((time.hour < 10) ? '0' : '') + time.hour)
				.replace(/h/g, time.hour)
				.replace(/mm/g, ((time.minute < 10) ? '0' : '') + time.minute)
				.replace(/m/g, time.minute)
				.replace(/ss/g, ((time.second < 10) ? '0' : '') + time.second)
				.replace(/s/g, time.second)
				.replace(/z/g, time.timezone);
			tmptime = $.trim(tmptime.replace(/t/gi, ''));
		}

		if (arguments.length) return tmptime;
		else this.formattedTime = tmptime;
	},

	//########################################################################
	// update our input with the new date time..
	//########################################################################
	_updateDateTime: function(dp_inst) {
		dp_inst = this.inst || dp_inst,
			dt = new Date(dp_inst.selectedYear, dp_inst.selectedMonth, dp_inst.selectedDay),
			dateFmt = $.datepicker._get(dp_inst, 'dateFormat'),
			formatCfg = $.datepicker._getFormatConfig(dp_inst),
			timeAvailable = dt !== null && this.timeDefined;
		this.formattedDate = $.datepicker.formatDate(dateFmt, (dt === null ? new Date() : dt), formatCfg);
		var formattedDateTime = this.formattedDate;
		if (dp_inst.lastVal !== undefined && (dp_inst.lastVal.length > 0 && this.$input.val().length === 0))
			return;

		if (this._defaults.timeOnly === true) {
			formattedDateTime = this.formattedTime;
		} else if (this._defaults.timeOnly !== true && (this._defaults.alwaysSetTime || timeAvailable)) {
			formattedDateTime += this._defaults.separator + this.formattedTime;
		}

		this.formattedDateTime = formattedDateTime;

		if(!this._defaults.showTimepicker) {
			this.$input.val(this.formattedDate);
		} else if (this.$altInput && this._defaults.altFieldTimeOnly === true) {
			this.$altInput.val(this.formattedTime);
			this.$input.val(this.formattedDate);
		} else if(this.$altInput) {
			this.$altInput.val(formattedDateTime);
			this.$input.val(formattedDateTime);
		} else {
			this.$input.val(formattedDateTime);
		}
		
		this.$input.trigger("change");
	}

});

$.fn.extend({
	//########################################################################
	// shorthand just to use timepicker..
	//########################################################################
	timepicker: function(o) {
		o = o || {};
		var tmp_args = arguments;

		if (typeof o == 'object') tmp_args[0] = $.extend(o, { timeOnly: true });

		return $(this).each(function() {
			$.fn.datetimepicker.apply($(this), tmp_args);
		});
	},

	//########################################################################
	// extend timepicker to datepicker
	//########################################################################
	datetimepicker: function(o) {
		o = o || {};
		var $input = this,
		tmp_args = arguments;

		if (typeof(o) == 'string'){
			if(o == 'getDate') 
				return $.fn.datepicker.apply($(this[0]), tmp_args);
			else 
				return this.each(function() {
					var $t = $(this);
					$t.datepicker.apply($t, tmp_args);
				});
		}
		else
			return this.each(function() {
				var $t = $(this);
				$t.datepicker($.timepicker._newInst($t, o)._defaults);
			});
	}
});

//########################################################################
// the bad hack :/ override datepicker so it doesnt close on select
// inspired: http://stackoverflow.com/questions/1252512/jquery-datepicker-prevent-closing-picker-when-clicking-a-date/1762378#1762378
//########################################################################
$.datepicker._base_selectDate = $.datepicker._selectDate;
$.datepicker._selectDate = function (id, dateStr) {
	var inst = this._getInst($(id)[0]),
		tp_inst = this._get(inst, 'timepicker');

	if (tp_inst) {
		tp_inst._limitMinMaxDateTime(inst, true);
		inst.inline = inst.stay_open = true;
		//This way the onSelect handler called from calendarpicker get the full dateTime
		this._base_selectDate(id, dateStr + tp_inst._defaults.separator + tp_inst.formattedTime);
		inst.inline = inst.stay_open = false;
		this._notifyChange(inst);
		this._updateDatepicker(inst);
	}
	else this._base_selectDate(id, dateStr);
};

//#############################################################################################
// second bad hack :/ override datepicker so it triggers an event when changing the input field
// and does not redraw the datepicker on every selectDate event
//#############################################################################################
$.datepicker._base_updateDatepicker = $.datepicker._updateDatepicker;
$.datepicker._updateDatepicker = function(inst) {
	if (typeof(inst.stay_open) !== 'boolean' || inst.stay_open === false) {
				
		this._base_updateDatepicker(inst);
		
		// Reload the time control when changing something in the input text field.
		var tp_inst = this._get(inst, 'timepicker');
		if(tp_inst) tp_inst._addTimePicker(inst);
	}
};

//#######################################################################################
// third bad hack :/ override datepicker so it allows spaces and colan in the input field
//#######################################################################################
$.datepicker._base_doKeyPress = $.datepicker._doKeyPress;
$.datepicker._doKeyPress = function(event) {
	var inst = $.datepicker._getInst(event.target),
		tp_inst = $.datepicker._get(inst, 'timepicker');

	if (tp_inst) {
		if ($.datepicker._get(inst, 'constrainInput')) {
			var ampm = tp_inst._defaults.ampm,
				datetimeChars = tp_inst._defaults.timeFormat.toString()
								.replace(/[hms]/g, '')
								.replace(/TT/g, ampm ? 'APM' : '')
								.replace(/Tt/g, ampm ? 'AaPpMm' : '')
								.replace(/tT/g, ampm ? 'AaPpMm' : '')
								.replace(/T/g, ampm ? 'AP' : '')
								.replace(/tt/g, ampm ? 'apm' : '')
								.replace(/t/g, ampm ? 'ap' : '') +
								" " +
								tp_inst._defaults.separator +
								$.datepicker._possibleChars($.datepicker._get(inst, 'dateFormat')),
				chr = String.fromCharCode(event.charCode === undefined ? event.keyCode : event.charCode);
			return event.ctrlKey || (chr < ' ' || !datetimeChars || datetimeChars.indexOf(chr) > -1);
		}
	}
	
	return $.datepicker._base_doKeyPress(event);
};

//#######################################################################################
// Override key up event to sync manual input changes.
//#######################################################################################
$.datepicker._base_doKeyUp = $.datepicker._doKeyUp;
$.datepicker._doKeyUp = function (event) {
	var inst = $.datepicker._getInst(event.target),
		tp_inst = $.datepicker._get(inst, 'timepicker');

	if (tp_inst) {
		if (tp_inst._defaults.timeOnly && (inst.input.val() != inst.lastVal)) {
			try {
				$.datepicker._updateDatepicker(inst);
			}
			catch (err) {
				$.datepicker.log(err);
			}
		}
	}

	return $.datepicker._base_doKeyUp(event);
};

//#######################################################################################
// override "Today" button to also grab the time.
//#######################################################################################
$.datepicker._base_gotoToday = $.datepicker._gotoToday;
$.datepicker._gotoToday = function(id) {
	this._base_gotoToday(id);
	this._setTime(this._getInst($(id)[0]), new Date());
};

//#######################################################################################
// Disable & enable the Time in the datetimepicker
//#######################################################################################
$.datepicker._disableTimepickerDatepicker = function(target, date, withDate) {
	var inst = this._getInst(target),
	tp_inst = this._get(inst, 'timepicker');
	$(target).datepicker('getDate'); // Init selected[Year|Month|Day]
	if (tp_inst) {
		tp_inst._defaults.showTimepicker = false;
		tp_inst._updateDateTime(inst);
	}
};

$.datepicker._enableTimepickerDatepicker = function(target, date, withDate) {
	var inst = this._getInst(target),
	tp_inst = this._get(inst, 'timepicker');
	$(target).datepicker('getDate'); // Init selected[Year|Month|Day]
	if (tp_inst) {
		tp_inst._defaults.showTimepicker = true;
		tp_inst._addTimePicker(inst); // Could be disabled on page load
		tp_inst._updateDateTime(inst);
	}
};

//#######################################################################################
// Create our own set time function
//#######################################################################################
$.datepicker._setTime = function(inst, date) {
	var tp_inst = this._get(inst, 'timepicker');
	if (tp_inst) {
		var defaults = tp_inst._defaults,
			// calling _setTime with no date sets time to defaults
			hour = date ? date.getHours() : defaults.hour,
			minute = date ? date.getMinutes() : defaults.minute,
			second = date ? date.getSeconds() : defaults.second;

		//check if within min/max times..
		if ((hour < defaults.hourMin || hour > defaults.hourMax) || (minute < defaults.minuteMin || minute > defaults.minuteMax) || (second < defaults.secondMin || second > defaults.secondMax)) {
			hour = defaults.hourMin;
			minute = defaults.minuteMin;
			second = defaults.secondMin;
		}

		if (tp_inst.hour_slider) tp_inst.hour_slider.slider('value', hour);
		else tp_inst.hour = hour;
		if (tp_inst.minute_slider) tp_inst.minute_slider.slider('value', minute);
		else tp_inst.minute = minute;
		if (tp_inst.second_slider) tp_inst.second_slider.slider('value', second);
		else tp_inst.second = second;

		tp_inst._onTimeChange();
		tp_inst._updateDateTime(inst);
	}
};

//#######################################################################################
// Create new public method to set only time, callable as $().datepicker('setTime', date)
//#######################################################################################
$.datepicker._setTimeDatepicker = function(target, date, withDate) {
	var inst = this._getInst(target),
		tp_inst = this._get(inst, 'timepicker');

	if (tp_inst) {
		this._setDateFromField(inst);
		var tp_date;
		if (date) {
			if (typeof date == "string") {
				tp_inst._parseTime(date, withDate);
				tp_date = new Date();
				tp_date.setHours(tp_inst.hour, tp_inst.minute, tp_inst.second);
			}
			else tp_date = new Date(date.getTime());
			if (tp_date.toString() == 'Invalid Date') tp_date = undefined;
			this._setTime(inst, tp_date);
		}
	}

};

//#######################################################################################
// override setDate() to allow setting time too within Date object
//#######################################################################################
$.datepicker._base_setDateDatepicker = $.datepicker._setDateDatepicker;
$.datepicker._setDateDatepicker = function(target, date) {
	var inst = this._getInst(target),
	tp_date = (date instanceof Date) ? new Date(date.getTime()) : date;

	this._updateDatepicker(inst);
	this._base_setDateDatepicker.apply(this, arguments);
	this._setTimeDatepicker(target, tp_date, true);
};

//#######################################################################################
// override getDate() to allow getting time too within Date object
//#######################################################################################
$.datepicker._base_getDateDatepicker = $.datepicker._getDateDatepicker;
$.datepicker._getDateDatepicker = function(target, noDefault) {
	var inst = this._getInst(target),
		tp_inst = this._get(inst, 'timepicker');

	if (tp_inst) {
		this._setDateFromField(inst, noDefault);
		var date = this._getDate(inst);
		if (date && tp_inst._parseTime($(target).val(), tp_inst.timeOnly)) date.setHours(tp_inst.hour, tp_inst.minute, tp_inst.second);
		return date;
	}
	return this._base_getDateDatepicker(target, noDefault);
};

//#######################################################################################
// jQuery extend now ignores nulls!
//#######################################################################################
function extendRemove(target, props) {
	$.extend(target, props);
	for (var name in props)
		if (props[name] === null || props[name] === undefined)
			target[name] = props[name];
	return target;
}

$.timepicker = new Timepicker(); // singleton instance
$.timepicker.version = "0.9.5";

})(jQuery);
/*
 * jQuery hashchange event - v1.3 - 7/21/2010
 * http://benalman.com/projects/jquery-hashchange-plugin/
 * 
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
(function($,e,b){var c="hashchange",h=document,f,g=$.event.special,i=h.documentMode,d="on"+c in e&&(i===b||i>7);function a(j){j=j||location.href;return"#"+j.replace(/^[^#]*#?(.*)$/,"$1")}$.fn[c]=function(j){return j?this.bind(c,j):this.trigger(c)};$.fn[c].delay=50;g[c]=$.extend(g[c],{setup:function(){if(d){return false}$(f.start)},teardown:function(){if(d){return false}$(f.stop)}});f=(function(){var j={},p,m=a(),k=function(q){return q},l=k,o=k;j.start=function(){p||n()};j.stop=function(){p&&clearTimeout(p);p=b};function n(){var r=a(),q=o(m);if(r!==m){l(m=r,q);$(e).trigger(c)}else{if(q!==m){location.href=location.href.replace(/#.*/,"")+q}}p=setTimeout(n,$.fn[c].delay)}$.browser.msie&&!d&&(function(){var q,r;j.start=function(){if(!q){r=$.fn[c].src;r=r&&r+a();q=$('<iframe tabindex="-1" title="empty"/>').hide().one("load",function(){r||l(a());n()}).attr("src",r||"javascript:0").insertAfter("body")[0].contentWindow;h.onpropertychange=function(){try{if(event.propertyName==="title"){q.document.title=h.title}}catch(s){}}}};j.stop=k;o=function(){return a(q.location.href)};l=function(v,s){var u=q.document,t=$.fn[c].domain;if(v!==s){u.title=h.title;u.open();t&&u.write('<script>document.domain="'+t+'"<\/script>');u.close();q.location.hash=v}}})();return j})()})(jQuery,this);(function() {
  var FIXED, STATIC, Stick;
  STATIC = 'static';
  FIXED = 'fixed';
  $.fn.stick = function(args) {
    var s;
    return s = new Stick(this, args);
  };
  Stick = (function() {
    function Stick(target, args) {
      this.target = target;
      this.container = window;
      this.offset = typeof args === "number" ? args : 0;
      if (typeof args === "object") {
        $.extend(this, args);
      }
      this.state = STATIC;
      this.resize();
      (function(s) {
        return $(args.container).scroll(function() {
          return s.scroll(this);
        }).resize(function() {
          return s.resize(this);
        });
      })(this);
    }
    Stick.prototype.position = function() {
      return this.target.css({
        "position": this.state,
        "top": this.offset + "px",
        "left": this.targetLeft + "px"
      });
    };
    Stick.prototype.resize = function() {
      var targetBottom;
      this.targetOffset = parseInt(this.target.offset().top);
      this.targetLeft = parseInt(this.target.offset().left);
      targetBottom = this.targetOffset + this.target.height();
      console.log($(this.container).height());
      if ($(this.container).height() < targetBottom) {
        this.disabled = true;
        if (this.state === FIXED) {
          return this.position();
        }
      } else {
        this.disabled = false;
        return this.scroll();
      }
    };
    Stick.prototype.scroll = function(self) {
      if (this.disabled) {
        return;
      }
      if ((this.targetOffset - $(self).scrollTop()) - this.offset <= 0) {
        if (this.state === STATIC) {
          if (typeof this.onStick === "function") {
            this.onStick();
          }
        }
        this.state = FIXED;
      } else {
        if (this.state === FIXED) {
          if (typeof this.onUnstick === "function") {
            this.onUnstick();
          }
        }
        this.state = STATIC;
      }
      return this.position();
    };
    return Stick;
  })();
}).call(this);
/*
    http://www.JSON.org/json2.js
    2011-02-23

    Public Domain.

    NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.

    See http://www.JSON.org/js.html


    This code should be minified before deployment.
    See http://javascript.crockford.com/jsmin.html

    USE YOUR OWN COPY. IT IS EXTREMELY UNWISE TO LOAD CODE FROM SERVERS YOU DO
    NOT CONTROL.


    This file creates a global JSON object containing two methods: stringify
    and parse.

        JSON.stringify(value, replacer, space)
            value       any JavaScript value, usually an object or array.

            replacer    an optional parameter that determines how object
                        values are stringified for objects. It can be a
                        function or an array of strings.

            space       an optional parameter that specifies the indentation
                        of nested structures. If it is omitted, the text will
                        be packed without extra whitespace. If it is a number,
                        it will specify the number of spaces to indent at each
                        level. If it is a string (such as '\t' or '&nbsp;'),
                        it contains the characters used to indent at each level.

            This method produces a JSON text from a JavaScript value.

            When an object value is found, if the object contains a toJSON
            method, its toJSON method will be called and the result will be
            stringified. A toJSON method does not serialize: it returns the
            value represented by the name/value pair that should be serialized,
            or undefined if nothing should be serialized. The toJSON method
            will be passed the key associated with the value, and this will be
            bound to the value

            For example, this would serialize Dates as ISO strings.

                Date.prototype.toJSON = function (key) {
                    function f(n) {
                        // Format integers to have at least two digits.
                        return n < 10 ? '0' + n : n;
                    }

                    return this.getUTCFullYear()   + '-' +
                         f(this.getUTCMonth() + 1) + '-' +
                         f(this.getUTCDate())      + 'T' +
                         f(this.getUTCHours())     + ':' +
                         f(this.getUTCMinutes())   + ':' +
                         f(this.getUTCSeconds())   + 'Z';
                };

            You can provide an optional replacer method. It will be passed the
            key and value of each member, with this bound to the containing
            object. The value that is returned from your method will be
            serialized. If your method returns undefined, then the member will
            be excluded from the serialization.

            If the replacer parameter is an array of strings, then it will be
            used to select the members to be serialized. It filters the results
            such that only members with keys listed in the replacer array are
            stringified.

            Values that do not have JSON representations, such as undefined or
            functions, will not be serialized. Such values in objects will be
            dropped; in arrays they will be replaced with null. You can use
            a replacer function to replace those with JSON values.
            JSON.stringify(undefined) returns undefined.

            The optional space parameter produces a stringification of the
            value that is filled with line breaks and indentation to make it
            easier to read.

            If the space parameter is a non-empty string, then that string will
            be used for indentation. If the space parameter is a number, then
            the indentation will be that many spaces.

            Example:

            text = JSON.stringify(['e', {pluribus: 'unum'}]);
            // text is '["e",{"pluribus":"unum"}]'


            text = JSON.stringify(['e', {pluribus: 'unum'}], null, '\t');
            // text is '[\n\t"e",\n\t{\n\t\t"pluribus": "unum"\n\t}\n]'

            text = JSON.stringify([new Date()], function (key, value) {
                return this[key] instanceof Date ?
                    'Date(' + this[key] + ')' : value;
            });
            // text is '["Date(---current time---)"]'


        JSON.parse(text, reviver)
            This method parses a JSON text to produce an object or array.
            It can throw a SyntaxError exception.

            The optional reviver parameter is a function that can filter and
            transform the results. It receives each of the keys and values,
            and its return value is used instead of the original value.
            If it returns what it received, then the structure is not modified.
            If it returns undefined then the member is deleted.

            Example:

            // Parse the text. Values that look like ISO date strings will
            // be converted to Date objects.

            myData = JSON.parse(text, function (key, value) {
                var a;
                if (typeof value === 'string') {
                    a =
/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/.exec(value);
                    if (a) {
                        return new Date(Date.UTC(+a[1], +a[2] - 1, +a[3], +a[4],
                            +a[5], +a[6]));
                    }
                }
                return value;
            });

            myData = JSON.parse('["Date(09/09/2001)"]', function (key, value) {
                var d;
                if (typeof value === 'string' &&
                        value.slice(0, 5) === 'Date(' &&
                        value.slice(-1) === ')') {
                    d = new Date(value.slice(5, -1));
                    if (d) {
                        return d;
                    }
                }
                return value;
            });


    This is a reference implementation. You are free to copy, modify, or
    redistribute.
*/

/*jslint evil: true, strict: false, regexp: false */

/*members "", "\b", "\t", "\n", "\f", "\r", "\"", JSON, "\\", apply,
    call, charCodeAt, getUTCDate, getUTCFullYear, getUTCHours,
    getUTCMinutes, getUTCMonth, getUTCSeconds, hasOwnProperty, join,
    lastIndex, length, parse, prototype, push, replace, slice, stringify,
    test, toJSON, toString, valueOf
*/


// Create a JSON object only if one does not already exist. We create the
// methods in a closure to avoid creating global variables.

var JSON;
if (!JSON) {
    JSON = {};
}

(function () {
    "use strict";

    function f(n) {
        // Format integers to have at least two digits.
        return n < 10 ? '0' + n : n;
    }

    if (typeof Date.prototype.toJSON !== 'function') {

        Date.prototype.toJSON = function (key) {

            return isFinite(this.valueOf()) ?
                this.getUTCFullYear()     + '-' +
                f(this.getUTCMonth() + 1) + '-' +
                f(this.getUTCDate())      + 'T' +
                f(this.getUTCHours())     + ':' +
                f(this.getUTCMinutes())   + ':' +
                f(this.getUTCSeconds())   + 'Z' : null;
        };

        String.prototype.toJSON      =
            Number.prototype.toJSON  =
            Boolean.prototype.toJSON = function (key) {
                return this.valueOf();
            };
    }

    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        gap,
        indent,
        meta = {    // table of character substitutions
            '\b': '\\b',
            '\t': '\\t',
            '\n': '\\n',
            '\f': '\\f',
            '\r': '\\r',
            '"' : '\\"',
            '\\': '\\\\'
        },
        rep;


    function quote(string) {

// If the string contains no control characters, no quote characters, and no
// backslash characters, then we can safely slap some quotes around it.
// Otherwise we must also replace the offending characters with safe escape
// sequences.

        escapable.lastIndex = 0;
        return escapable.test(string) ? '"' + string.replace(escapable, function (a) {
            var c = meta[a];
            return typeof c === 'string' ? c :
                '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
        }) + '"' : '"' + string + '"';
    }


    function str(key, holder) {

// Produce a string from holder[key].

        var i,          // The loop counter.
            k,          // The member key.
            v,          // The member value.
            length,
            mind = gap,
            partial,
            value = holder[key];

// If the value has a toJSON method, call it to obtain a replacement value.

        if (value && typeof value === 'object' &&
                typeof value.toJSON === 'function') {
            value = value.toJSON(key);
        }

// If we were called with a replacer function, then call the replacer to
// obtain a replacement value.

        if (typeof rep === 'function') {
            value = rep.call(holder, key, value);
        }

// What happens next depends on the value's type.

        switch (typeof value) {
        case 'string':
            return quote(value);

        case 'number':

// JSON numbers must be finite. Encode non-finite numbers as null.

            return isFinite(value) ? String(value) : 'null';

        case 'boolean':
        case 'null':

// If the value is a boolean or null, convert it to a string. Note:
// typeof null does not produce 'null'. The case is included here in
// the remote chance that this gets fixed someday.

            return String(value);

// If the type is 'object', we might be dealing with an object or an array or
// null.

        case 'object':

// Due to a specification blunder in ECMAScript, typeof null is 'object',
// so watch out for that case.

            if (!value) {
                return 'null';
            }

// Make an array to hold the partial results of stringifying this object value.

            gap += indent;
            partial = [];

// Is the value an array?

            if (Object.prototype.toString.apply(value) === '[object Array]') {

// The value is an array. Stringify every element. Use null as a placeholder
// for non-JSON values.

                length = value.length;
                for (i = 0; i < length; i += 1) {
                    partial[i] = str(i, value) || 'null';
                }

// Join all of the elements together, separated with commas, and wrap them in
// brackets.

                v = partial.length === 0 ? '[]' : gap ?
                    '[\n' + gap + partial.join(',\n' + gap) + '\n' + mind + ']' :
                    '[' + partial.join(',') + ']';
                gap = mind;
                return v;
            }

// If the replacer is an array, use it to select the members to be stringified.

            if (rep && typeof rep === 'object') {
                length = rep.length;
                for (i = 0; i < length; i += 1) {
                    if (typeof rep[i] === 'string') {
                        k = rep[i];
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            } else {

// Otherwise, iterate through all of the keys in the object.

                for (k in value) {
                    if (Object.prototype.hasOwnProperty.call(value, k)) {
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            }

// Join all of the member texts together, separated with commas,
// and wrap them in braces.

            v = partial.length === 0 ? '{}' : gap ?
                '{\n' + gap + partial.join(',\n' + gap) + '\n' + mind + '}' :
                '{' + partial.join(',') + '}';
            gap = mind;
            return v;
        }
    }

// If the JSON object does not yet have a stringify method, give it one.

    if (typeof JSON.stringify !== 'function') {
        JSON.stringify = function (value, replacer, space) {

// The stringify method takes a value and an optional replacer, and an optional
// space parameter, and returns a JSON text. The replacer can be a function
// that can replace values, or an array of strings that will select the keys.
// A default replacer method can be provided. Use of the space parameter can
// produce text that is more easily readable.

            var i;
            gap = '';
            indent = '';

// If the space parameter is a number, make an indent string containing that
// many spaces.

            if (typeof space === 'number') {
                for (i = 0; i < space; i += 1) {
                    indent += ' ';
                }

// If the space parameter is a string, it will be used as the indent string.

            } else if (typeof space === 'string') {
                indent = space;
            }

// If there is a replacer, it must be a function or an array.
// Otherwise, throw an error.

            rep = replacer;
            if (replacer && typeof replacer !== 'function' &&
                    (typeof replacer !== 'object' ||
                    typeof replacer.length !== 'number')) {
                throw new Error('JSON.stringify');
            }

// Make a fake root object containing our value under the key of ''.
// Return the result of stringifying the value.

            return str('', {'': value});
        };
    }


// If the JSON object does not yet have a parse method, give it one.

    if (typeof JSON.parse !== 'function') {
        JSON.parse = function (text, reviver) {

// The parse method takes a text and an optional reviver function, and returns
// a JavaScript value if the text is a valid JSON text.

            var j;

            function walk(holder, key) {

// The walk method is used to recursively walk the resulting structure so
// that modifications can be made.

                var k, v, value = holder[key];
                if (value && typeof value === 'object') {
                    for (k in value) {
                        if (Object.prototype.hasOwnProperty.call(value, k)) {
                            v = walk(value, k);
                            if (v !== undefined) {
                                value[k] = v;
                            } else {
                                delete value[k];
                            }
                        }
                    }
                }
                return reviver.call(holder, key, value);
            }


// Parsing happens in four stages. In the first stage, we replace certain
// Unicode characters with escape sequences. JavaScript handles many characters
// incorrectly, either silently deleting them, or treating them as line endings.

            text = String(text);
            cx.lastIndex = 0;
            if (cx.test(text)) {
                text = text.replace(cx, function (a) {
                    return '\\u' +
                        ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
                });
            }

// In the second stage, we run the text against regular expressions that look
// for non-JSON patterns. We are especially concerned with '()' and 'new'
// because they can cause invocation, and '=' because it can cause mutation.
// But just to be safe, we want to reject all unexpected forms.

// We split the second stage into 4 regexp operations in order to work around
// crippling inefficiencies in IE's and Safari's regexp engines. First we
// replace the JSON backslash pairs with '@' (a non-JSON character). Second, we
// replace all simple value tokens with ']' characters. Third, we delete all
// open brackets that follow a colon or comma or that begin the text. Finally,
// we look to see that the remaining characters are only whitespace or ']' or
// ',' or ':' or '{' or '}'. If that is so, then the text is safe for eval.

            if (/^[\],:{}\s]*$/
                    .test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@')
                        .replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']')
                        .replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {

// In the third stage we use the eval function to compile the text into a
// JavaScript structure. The '{' operator is subject to a syntactic ambiguity
// in JavaScript: it can begin a block or an object literal. We wrap the text
// in parens to eliminate the ambiguity.

                j = eval('(' + text + ')');

// In the optional fourth stage, we recursively walk the new structure, passing
// each name/value pair to a reviver function for possible transformation.

                return typeof reviver === 'function' ?
                    walk({'': j}, '') : j;
            }

// If the text is not JSON parseable, then a SyntaxError is thrown.

            throw new SyntaxError('JSON.parse');
        };
    }
}());
/* Copyright (c) 2010-2011 Marcus Westin */
var store=function(){var b={},e=window,g=e.document,c;b.disabled=false;b.set=function(){};b.get=function(){};b.remove=function(){};b.clear=function(){};b.transact=function(a,d){var f=b.get(a);if(typeof f=="undefined")f={};d(f);b.set(a,f)};b.serialize=function(a){return JSON.stringify(a)};b.deserialize=function(a){if(typeof a=="string")return JSON.parse(a)};var h;try{h="localStorage"in e&&e.localStorage}catch(k){h=false}if(h){c=e.localStorage;b.set=function(a,d){c.setItem(a,b.serialize(d))};b.get=
function(a){return b.deserialize(c.getItem(a))};b.remove=function(a){c.removeItem(a)};b.clear=function(){c.clear()}}else{var i;try{i="globalStorage"in e&&e.globalStorage&&e.globalStorage[e.location.hostname]}catch(l){i=false}if(i){c=e.globalStorage[e.location.hostname];b.set=function(a,d){c[a]=b.serialize(d)};b.get=function(a){return b.deserialize(c[a]&&c[a].value)};b.remove=function(a){delete c[a]};b.clear=function(){for(var a in c)delete c[a]}}else if(g.documentElement.addBehavior){c=g.createElement("div");
e=function(a){return function(){var d=Array.prototype.slice.call(arguments,0);d.unshift(c);g.body.appendChild(c);c.addBehavior("#default#userData");c.load("localStorage");d=a.apply(b,d);g.body.removeChild(c);return d}};b.set=e(function(a,d,f){a.setAttribute(d,b.serialize(f));a.save("localStorage")});b.get=e(function(a,d){return b.deserialize(a.getAttribute(d))});b.remove=e(function(a,d){a.removeAttribute(d);a.save("localStorage")});b.clear=e(function(a){var d=a.XMLDocument.documentElement.attributes;
a.load("localStorage");for(var f=0,j;j=d[f];f++)a.removeAttribute(j.name);a.save("localStorage")})}}try{b.set("__storejs__","__storejs__");if(b.get("__storejs__")!="__storejs__")b.disabled=true;b.remove("__storejs__")}catch(m){b.disabled=true}return b}();
// http://whatcodecraves.com/articles/2009/01/11/rails_like_javascript_date_helpers/index.html

Date.prototype.between = function(start, end) {
  return (start <= this) && (end >= this);
};

Date.prototype.beginningOfDay = function() {
  var newDate = new Date(this);
  newDate.setHours(0);
  newDate.setMinutes(0);
  newDate.setSeconds(0);
  return newDate;
};

Date.prototype.endOfDay = function() {
  var newDate = new Date(this);
  newDate.setHours(23);
  newDate.setMinutes(59);
  newDate.setSeconds(59);
  return newDate;
};

Date.prototype.beginningOfWeek = function() {
  var newDate = new Date(this);
  var offsetToBeginning = newDate.getDay();
  newDate.setDate(newDate.getDate() - offsetToBeginning);
  return newDate.beginningOfDay();
};

Date.prototype.endOfWeek = function() {
  var newDate = new Date(this);
  // Saturday = 6
  var offsetToEnd = (6 - newDate.getDay());
  newDate.setDate(newDate.getDate() + offsetToEnd);
  return newDate.endOfDay();
};

// 0 = january, 1 = feb, ...
// does not account for leap years
Date.DAYS_OF_MONTH_MAP = [
  31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31
];

Date.MINUTE = 1000 * 60;
Date.HOUR = Date.MINUTE * 60;
Date.DAY = Date.HOUR * 24;

Date.prototype.daysAgo = function(number) {
  return new Date(this - number * Date.DAY);
}

Date.prototype.daysInMonth = function() {
  var year = this.getYear() + 1900;
  var isLeapYear = (year % 4 === 0) && ((year % 100 !== 0) || (year % 400 === 0));

  if (this.getMonth() == 1 && isLeapYear) {
    return 29;
  } else {
    return Date.DAYS_OF_MONTH_MAP[this.getMonth()];
  }
}

Date.prototype.beginningOfMonth = function() {
  var newDate = new Date(this);
  newDate.setDate(1);
  return newDate.beginningOfDay();
};

Date.prototype.lastMonth = function() {
  var newDate = new Date(this);
  if (newDate.getMonth() <= 0) {
    newDate.setYear(newDate.getFullYear() - 1);
    newDate.setMonth(11);
  } else {
    newDate.setMonth(newDate.getMonth() - 1);
  }
  return newDate;
}

Date.prototype.beginningOfLastMonth = function() {
  var newDate = new Date(this);
  return newDate.lastMonth().beginningOfMonth().beginningOfDay();
}

Date.prototype.endOfMonth = function() {
  var newDate = new Date(this);
  newDate.setDate(newDate.daysInMonth());
  return newDate.endOfDay();
};

Date.prototype.endOfLastMonth = function() {
  var newDate = new Date(this);
  return newDate.lastMonth().endOfMonth().endOfDay();
}

Date.prototype.beginningOfYear = function() {
  var newDate = new Date(this);
  newDate.setMonth(0);
  newDate.setDate(1);
  return newDate.beginningOfDay();
};

Date.prototype.endOfYear = function() {
  var newDate = new Date(this);
  newDate.setMonth(11);
  newDate.setDate(31);
  return newDate.endOfDay();
};
// http://github.com/xaviershay/jquery-enumerable/tree/master
// HEAD at time of vendoring: 75997a08c5d94587ea5716e4d67c87cd02403788

(function ( $ ) {
  var methods = {
    // $([1,2,3]).collect(function() { return this * this }) // => [1, 4, 9]
    collect: function(enumerable, callback) {
      var result = [];
      $.each(enumerable, function(index) {
        result.push(callback.call(this, index));
      });
      return result;
    },

    // $([1,2,3]).inject(0, function(a) { return a + this }) // => 6
    inject: function(enumerable, initialValue, callback) {
      var accumulator = initialValue;

      $.each(enumerable, function (index) {
        accumulator = callback.call(this, accumulator, index);
      });
      return accumulator;
    },

    // $([1,2,3]).select(function() { return this % 2 == 1 }) // => [1, 3]
    select: function(enumerable, callback) {
      var result = [];
      $.each(enumerable, function(index) {
        if (callback.call(this, index))
          result.push(this);
      });
      return result;
    },

    // $([1,2,3]).reject(function() { return this % 2 == 1 }) // => [2]
    reject: function(enumerable, callback) {
      return $.select(enumerable, negate(callback));
    },

    // $([1,2]).any(function() { return this == 1 }) // => true
    any: function(enumerable, callback) {
      return $.inject(enumerable, false, function(accumulator, index) {
        return accumulator || callback.call(this, index);
      });
    },

    // $([1,1]).any(function() { return this == 1 }) // => true
    all: function(enumerable, callback) {
      return $.inject(enumerable, true, function(accumulator, index) {
        return accumulator && callback.call(this, index);
      });
    },

    // $([1,2,3]).sum() // => 6
    sum: function(enumerable) {
      return $.inject(enumerable, 0, function(accumulator) {
        return accumulator + this;
      });
    }
  };

  var staticFunctions = {};
  var iteratorFunctions = {};
  $.each( methods, function(name, f){
    staticFunctions[name]   = makeStaticFunction(f);
    iteratorFunctions[name] = makeIteratorFunction(staticFunctions[name]);
  });
  $.extend(staticFunctions);
  $.fn.extend(iteratorFunctions);

  // Private methods
  function makeStaticFunction(f) {
    return function() {
      if (arguments.length > 1) // The first argument is the enumerable
        validateCallback(arguments[arguments.length - 1]);

      return f.apply(this, arguments);
    }
  }

  function makeIteratorFunction(staticFunction) {
    return function() {
      // arguments isn't a real array, concat doesn't work
      // unless you explicitly convert it
      function toArray() {
        var result = []
        for (var i = 0; i < this.length; i++)
          result.push(this[i])
        return(result)
      }
      return staticFunction.apply(this, [this].concat(toArray.apply(arguments)))
    }
  }

  function validateCallback(callback) {
    if (!jQuery.isFunction(callback))
      throw("callback needs to be a function, it was: " + callback);
  }

  function negate(f) {
    return function() {
      return !f.apply(this, arguments)
    }
  }
})( jQuery );
(function($) {
	$.extend({
		placeholder : {
			settings : {
				focusClass: 'placeholderFocus',
				activeClass: 'placeholder',
				overrideSupport: false,
				preventRefreshIssues: true
			},
			debug : false,
			log : function(msg){
				if(!$.placeholder.debug) return;
				msg = "[Placeholder] " + msg;
				$.placeholder.hasFirebug ?
				console.log(msg) :
				$.placeholder.hasConsoleLog ?
					window.console.log(msg) :
					alert(msg);
			},
			hasFirebug : "console" in window && "firebug" in window.console,
			hasConsoleLog: "console" in window && "log" in window.console
		}

	});

    // check browser support for placeholder
    $.support.placeholder = 'placeholder' in document.createElement('input');

	// Replace the val function to never return placeholders
	$.fn.plVal = $.fn.val;
	$.fn.val = function(value) {
		$.placeholder.log('in val');
		if(this[0]) {
			$.placeholder.log('have found an element');
			var el = $(this[0]);
			if(value != undefined)
			{
				$.placeholder.log('in setter');
				var currentValue = el.plVal();
				var returnValue = $(this).plVal(value);
				if(el.hasClass($.placeholder.settings.activeClass) && currentValue == el.attr('placeholder')){
					el.removeClass($.placeholder.settings.activeClass);
				}
				return returnValue;
			}

			if(el.hasClass($.placeholder.settings.activeClass) && el.plVal() == el.attr('placeholder')) {
				$.placeholder.log('returning empty because its a placeholder');
				return '';
			} else {
				$.placeholder.log('returning original val');
				return el.plVal();
			}
		}
		$.placeholder.log('returning undefined');
		return undefined;
	};

	// Clear placeholder values upon page reload
	$(window).bind('beforeunload.placeholder', function() {
		var els = $('input.placeholderActive' );
		if(els.length > 0)
			els.val('').attr('autocomplete','off');
	});


    // plugin code
	$.fn.placeholder = function(opts) {
		opts = $.extend({},$.placeholder.settings, opts);

		// we don't have to do anything if the browser supports placeholder
		if(!opts.overrideSupport && $.support.placeholder)
		    return this;
			
        return this.each(function() {
            var $el = $(this);

            // skip if we do not have the placeholder attribute
            if(!$el.is('[placeholder]'))
                return;

            // we cannot do password fields, but supported browsers can
            if($el.is(':password'))
                return;
			
			// Prevent values from being reapplied on refresh
			if(opts.preventRefreshIssues)
				$el.attr('autocomplete','off');

            $el.bind('focus.placeholder', function(){
                var $el = $(this);
                if(this.value == $el.attr('placeholder') && $el.hasClass(opts.activeClass))
                    $el.val('')
                       .removeClass(opts.activeClass)
                       .addClass(opts.focusClass);
            });
            $el.bind('blur.placeholder', function(){
                var $el = $(this);
				
				$el.removeClass(opts.focusClass);

                if(this.value == '')
                  $el.val($el.attr('placeholder'))
                     .addClass(opts.activeClass);
            });

            $el.triggerHandler('blur');
			
			// Prevent incorrect form values being posted
			$el.parents('form').submit(function(){
				$el.triggerHandler('focus.placeholder');
			});

        });
    };
})(jQuery);
/*
 *
 * Copyright (c) 2006-2009 Sam Collett (http://www.texotela.co.uk)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * Version 2.2.4
 * Demo: http://www.texotela.co.uk/code/jquery/select/
 *
 * $LastChangedDate: 2009-02-08 00:28:12 +0000 (Sun, 08 Feb 2009) $
 * $Rev: 6185 $
 *
 */
 
;(function($) {
 
/**
 * Adds (single/multiple) options to a select box (or series of select boxes)
 *
 * @name     addOption
 * @author   Sam Collett (http://www.texotela.co.uk)
 * @type     jQuery
 * @example  $("#myselect").addOption("Value", "Text"); // add single value (will be selected)
 * @example  $("#myselect").addOption("Value 2", "Text 2", false); // add single value (won't be selected)
 * @example  $("#myselect").addOption({"foo":"bar","bar":"baz"}, false); // add multiple values, but don't select
 *
 */
$.fn.addOption = function()
{
	var add = function(el, v, t, sO)
	{
		var option = document.createElement("option");
		option.value = v, option.text = t;
		// get options
		var o = el.options;
		// get number of options
		var oL = o.length;
		if(!el.cache)
		{
			el.cache = {};
			// loop through existing options, adding to cache
			for(var i = 0; i < oL; i++)
			{
				el.cache[o[i].value] = i;
			}
		}
		// add to cache if it isn't already
		if(typeof el.cache[v] == "undefined") el.cache[v] = oL;
		el.options[el.cache[v]] = option;
		if(sO)
		{
			option.selected = true;
		}
	};
	
	var a = arguments;
	if(a.length == 0) return this;
	// select option when added? default is true
	var sO = true;
	// multiple items
	var m = false;
	// other variables
	var items, v, t;
	if(typeof(a[0]) == "object")
	{
		m = true;
		items = a[0];
	}
	if(a.length >= 2)
	{
		if(typeof(a[1]) == "boolean") sO = a[1];
		else if(typeof(a[2]) == "boolean") sO = a[2];
		if(!m)
		{
			v = a[0];
			t = a[1];
		}
	}
	this.each(
		function()
		{
			if(this.nodeName.toLowerCase() != "select") return;
			if(m)
			{
				for(var item in items)
				{
					add(this, item, items[item], sO);
				}
			}
			else
			{
				add(this, v, t, sO);
			}
		}
	);
	return this;
};

/**
 * Add options via ajax
 *
 * @name     ajaxAddOption
 * @author   Sam Collett (http://www.texotela.co.uk)
 * @type     jQuery
 * @param    String url      Page to get options from (must be valid JSON)
 * @param    Object params   (optional) Any parameters to send with the request
 * @param    Boolean select  (optional) Select the added options, default true
 * @param    Function fn     (optional) Call this function with the select object as param after completion
 * @param    Array args      (optional) Array with params to pass to the function afterwards
 * @example  $("#myselect").ajaxAddOption("myoptions.php");
 * @example  $("#myselect").ajaxAddOption("myoptions.php", {"code" : "007"});
 * @example  $("#myselect").ajaxAddOption("myoptions.php", {"code" : "007"}, false, sortoptions, [{"dir": "desc"}]);
 *
 */
$.fn.ajaxAddOption = function(url, params, select, fn, args)
{
	if(typeof(url) != "string") return this;
	if(typeof(params) != "object") params = {};
	if(typeof(select) != "boolean") select = true;
	this.each(
		function()
		{
			var el = this;
			$.getJSON(url,
				params,
				function(r)
				{
					$(el).addOption(r, select);
					if(typeof fn == "function")
					{
						if(typeof args == "object")
						{
							fn.apply(el, args);
						} 
						else
						{
							fn.call(el);
						}
					}
				}
			);
		}
	);
	return this;
};

/**
 * Removes an option (by value or index) from a select box (or series of select boxes)
 *
 * @name     removeOption
 * @author   Sam Collett (http://www.texotela.co.uk)
 * @type     jQuery
 * @param    String|RegExp|Number what  Option to remove
 * @param    Boolean selectedOnly       (optional) Remove only if it has been selected (default false)   
 * @example  $("#myselect").removeOption("Value"); // remove by value
 * @example  $("#myselect").removeOption(/^val/i); // remove options with a value starting with 'val'
 * @example  $("#myselect").removeOption(/./); // remove all options
 * @example  $("#myselect").removeOption(/./, true); // remove all options that have been selected
 * @example  $("#myselect").removeOption(0); // remove by index
 * @example  $("#myselect").removeOption(["myselect_1","myselect_2"]); // values contained in passed array
 *
 */
$.fn.removeOption = function()
{
	var a = arguments;
	if(a.length == 0) return this;
	var ta = typeof(a[0]);
	var v, index;
	// has to be a string or regular expression (object in IE, function in Firefox)
	if(ta == "string" || ta == "object" || ta == "function" )
	{
		v = a[0];
		// if an array, remove items
		if(v.constructor == Array)
		{
			var l = v.length;
			for(var i = 0; i<l; i++)
			{
				this.removeOption(v[i], a[1]); 
			}
			return this;
		}
	}
	else if(ta == "number") index = a[0];
	else return this;
	this.each(
		function()
		{
			if(this.nodeName.toLowerCase() != "select") return;
			// clear cache
			if(this.cache) this.cache = null;
			// does the option need to be removed?
			var remove = false;
			// get options
			var o = this.options;
			if(!!v)
			{
				// get number of options
				var oL = o.length;
				for(var i=oL-1; i>=0; i--)
				{
					if(v.constructor == RegExp)
					{
						if(o[i].value.match(v))
						{
							remove = true;
						}
					}
					else if(o[i].value == v)
					{
						remove = true;
					}
					// if the option is only to be removed if selected
					if(remove && a[1] === true) remove = o[i].selected;
					if(remove)
					{
						o[i] = null;
					}
					remove = false;
				}
			}
			else
			{
				// only remove if selected?
				if(a[1] === true)
				{
					remove = o[index].selected;
				}
				else
				{
					remove = true;
				}
				if(remove)
				{
					this.remove(index);
				}
			}
		}
	);
	return this;
};

/**
 * Sort options (ascending or descending) in a select box (or series of select boxes)
 *
 * @name     sortOptions
 * @author   Sam Collett (http://www.texotela.co.uk)
 * @type     jQuery
 * @param    Boolean ascending   (optional) Sort ascending (true/undefined), or descending (false)
 * @example  // ascending
 * $("#myselect").sortOptions(); // or $("#myselect").sortOptions(true);
 * @example  // descending
 * $("#myselect").sortOptions(false);
 *
 */
$.fn.sortOptions = function(ascending)
{
	// get selected values first
	var sel = $(this).selectedValues();
	var a = typeof(ascending) == "undefined" ? true : !!ascending;
	this.each(
		function()
		{
			if(this.nodeName.toLowerCase() != "select") return;
			// get options
			var o = this.options;
			// get number of options
			var oL = o.length;
			// create an array for sorting
			var sA = [];
			// loop through options, adding to sort array
			for(var i = 0; i<oL; i++)
			{
				sA[i] = {
					v: o[i].value,
					t: o[i].text
				}
			}
			// sort items in array
			sA.sort(
				function(o1, o2)
				{
					// option text is made lowercase for case insensitive sorting
					o1t = o1.t.toLowerCase(), o2t = o2.t.toLowerCase();
					// if options are the same, no sorting is needed
					if(o1t == o2t) return 0;
					if(a)
					{
						return o1t < o2t ? -1 : 1;
					}
					else
					{
						return o1t > o2t ? -1 : 1;
					}
				}
			);
			// change the options to match the sort array
			for(var i = 0; i<oL; i++)
			{
				o[i].text = sA[i].t;
				o[i].value = sA[i].v;
			}
		}
	).selectOptions(sel, true); // select values, clearing existing ones
	return this;
};
/**
 * Selects an option by value
 *
 * @name     selectOptions
 * @author   Mathias Bank (http://www.mathias-bank.de), original function
 * @author   Sam Collett (http://www.texotela.co.uk), addition of regular expression matching
 * @type     jQuery
 * @param    String|RegExp|Array value  Which options should be selected
 * can be a string or regular expression, or an array of strings / regular expressions
 * @param    Boolean clear  Clear existing selected options, default false
 * @example  $("#myselect").selectOptions("val1"); // with the value 'val1'
 * @example  $("#myselect").selectOptions(["val1","val2","val3"]); // with the values 'val1' 'val2' 'val3'
 * @example  $("#myselect").selectOptions(/^val/i); // with the value starting with 'val', case insensitive
 *
 */
$.fn.selectOptions = function(value, clear)
{
	var v = value;
	var vT = typeof(value);
	// handle arrays
	if(vT == "object" && v.constructor == Array)
	{
		var $this = this;
		$.each(v, function()
			{
      				$this.selectOptions(this, clear);
    			}
		);
	};
	var c = clear || false;
	// has to be a string or regular expression (object in IE, function in Firefox)
	if(vT != "string" && vT != "function" && vT != "object") return this;
	this.each(
		function()
		{
			if(this.nodeName.toLowerCase() != "select") return this;
			// get options
			var o = this.options;
			// get number of options
			var oL = o.length;
			for(var i = 0; i<oL; i++)
			{
				if(v.constructor == RegExp)
				{
					if(o[i].value.match(v))
					{
						o[i].selected = true;
					}
					else if(c)
					{
						o[i].selected = false;
					}
				}
				else
				{
					if(o[i].value == v)
					{
						o[i].selected = true;
					}
					else if(c)
					{
						o[i].selected = false;
					}
				}
			}
		}
	);
	return this;
};

/**
 * Copy options to another select
 *
 * @name     copyOptions
 * @author   Sam Collett (http://www.texotela.co.uk)
 * @type     jQuery
 * @param    String to  Element to copy to
 * @param    String which  (optional) Specifies which options should be copied - 'all' or 'selected'. Default is 'selected'
 * @example  $("#myselect").copyOptions("#myselect2"); // copy selected options from 'myselect' to 'myselect2'
 * @example  $("#myselect").copyOptions("#myselect2","selected"); // same as above
 * @example  $("#myselect").copyOptions("#myselect2","all"); // copy all options from 'myselect' to 'myselect2'
 *
 */
$.fn.copyOptions = function(to, which)
{
	var w = which || "selected";
	if($(to).size() == 0) return this;
	this.each(
		function()
		{
			if(this.nodeName.toLowerCase() != "select") return this;
			// get options
			var o = this.options;
			// get number of options
			var oL = o.length;
			for(var i = 0; i<oL; i++)
			{
				if(w == "all" || (w == "selected" && o[i].selected))
				{
					$(to).addOption(o[i].value, o[i].text);
				}
			}
		}
	);
	return this;
};

/**
 * Checks if a select box has an option with the supplied value
 *
 * @name     containsOption
 * @author   Sam Collett (http://www.texotela.co.uk)
 * @type     Boolean|jQuery
 * @param    String|RegExp value  Which value to check for. Can be a string or regular expression
 * @param    Function fn          (optional) Function to apply if an option with the given value is found.
 * Use this if you don't want to break the chaining
 * @example  if($("#myselect").containsOption("val1")) alert("Has an option with the value 'val1'");
 * @example  if($("#myselect").containsOption(/^val/i)) alert("Has an option with the value starting with 'val'");
 * @example  $("#myselect").containsOption("val1", copyoption).doSomethingElseWithSelect(); // calls copyoption (user defined function) for any options found, chain is continued
 *
 */
$.fn.containsOption = function(value, fn)
{
	var found = false;
	var v = value;
	var vT = typeof(v);
	var fT = typeof(fn);
	// has to be a string or regular expression (object in IE, function in Firefox)
	if(vT != "string" && vT != "function" && vT != "object") return fT == "function" ? this: found;
	this.each(
		function()
		{
			if(this.nodeName.toLowerCase() != "select") return this;
			// option already found
			if(found && fT != "function") return false;
			// get options
			var o = this.options;
			// get number of options
			var oL = o.length;
			for(var i = 0; i<oL; i++)
			{
				if(v.constructor == RegExp)
				{
					if (o[i].value.match(v))
					{
						found = true;
						if(fT == "function") fn.call(o[i], i);
					}
				}
				else
				{
					if (o[i].value == v)
					{
						found = true;
						if(fT == "function") fn.call(o[i], i);
					}
				}
			}
		}
	);
	return fT == "function" ? this : found;
};

/**
 * Returns values which have been selected
 *
 * @name     selectedValues
 * @author   Sam Collett (http://www.texotela.co.uk)
 * @type     Array
 * @example  $("#myselect").selectedValues();
 *
 */
$.fn.selectedValues = function()
{
	var v = [];
	this.selectedOptions().each(
		function()
		{
			v[v.length] = this.value;
		}
	);
	return v;
};

/**
 * Returns text which has been selected
 *
 * @name     selectedTexts
 * @author   Sam Collett (http://www.texotela.co.uk)
 * @type     Array
 * @example  $("#myselect").selectedTexts();
 *
 */
$.fn.selectedTexts = function()
{
	var t = [];
	this.selectedOptions().each(
		function()
		{
			t[t.length] = this.text;
		}
	);
	return t;
};

/**
 * Returns options which have been selected
 *
 * @name     selectedOptions
 * @author   Sam Collett (http://www.texotela.co.uk)
 * @type     jQuery
 * @example  $("#myselect").selectedOptions();
 *
 */
$.fn.selectedOptions = function()
{
	return this.find("option:selected");
};

})(jQuery);// version 0.11 by Daniel Rench
// More information: http://dren.ch/strftime/
// This is public domain software

Number.prototype.pad =
	function (n,p) {
		var s = '' + this;
		p = p || '0';
		while (s.length < n) s = p + s;
		return s;
	};

Date.prototype.months = [
		'January', 'February', 'March', 'April', 'May', 'June', 'July',
		'August', 'September', 'October', 'November', 'December'
	];
Date.prototype.weekdays = [
		'Sunday', 'Monday', 'Tuesday', 'Wednesday',
		'Thursday', 'Friday', 'Saturday'
	];
Date.prototype.dpm = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];

Date.prototype.strftime_f = {
		A: function (d) { return d.weekdays[d.getDay()] },
		a: function (d) { return d.weekdays[d.getDay()].substring(0,3) },
		B: function (d) { return d.months[d.getMonth()] },
		b: function (d) { return d.months[d.getMonth()].substring(0,3) },
		C: function (d) { return Math.floor(d.getFullYear()/100); },
		c: function (d) { return d.toString() },
		D: function (d) {
				return d.strftime_f.m(d) + '/' +
					d.strftime_f.d(d) + '/' + d.strftime_f.y(d);
			},
		d: function (d) { return d.getDate().pad(2,'0') },
		e: function (d) { return d.getDate().pad(2,' ') },
		F: function (d) {
				return d.strftime_f.Y(d) + '-' + d.strftime_f.m(d) + '-' +
					d.strftime_f.d(d);
			},
		H: function (d) { return d.getHours().pad(2,'0') },
		I: function (d) { return ((d.getHours() % 12 || 12).pad(2)) },
		j: function (d) {
				var t = d.getDate();
				var m = d.getMonth() - 1;
				if (m > 1) {
					var y = d.getYear();
					if (((y % 100) == 0) && ((y % 400) == 0)) ++t;
					else if ((y % 4) == 0) ++t;
				}
				while (m > -1) t += d.dpm[m--];
				return t.pad(3,'0');
			},
		k: function (d) { return d.getHours().pad(2,' ') },
		l: function (d) { return ((d.getHours() % 12 || 12).pad(2,' ')) },
		M: function (d) { return d.getMinutes().pad(2,'0') },
		m: function (d) { return (d.getMonth()+1).pad(2,'0') },
		n: function (d) { return "\n" },
		p: function (d) { return (d.getHours() > 11) ? 'PM' : 'AM' },
		R: function (d) { return d.strftime_f.H(d) + ':' + d.strftime_f.M(d) },
		r: function (d) {
				return d.strftime_f.I(d) + ':' + d.strftime_f.M(d) + ':' +
					d.strftime_f.S(d) + ' ' + d.strftime_f.p(d);
			},
		S: function (d) { return d.getSeconds().pad(2,'0') },
		s: function (d) { return Math.floor(d.getTime()/1000) },
		T: function (d) {
				return d.strftime_f.H(d) + ':' + d.strftime_f.M(d) + ':' +
					d.strftime_f.S(d);
			},
		t: function (d) { return "\t" },
/*		U: function (d) { return false }, */
		u: function (d) { return(d.getDay() || 7) },
/*		V: function (d) { return false }, */
		v: function (d) {
				return d.strftime_f.e(d) + '-' + d.strftime_f.b(d) + '-' +
					d.strftime_f.Y(d);
			},
/*		W: function (d) { return false }, */
		w: function (d) { return d.getDay() },
		X: function (d) { return d.toTimeString() }, // wrong?
		x: function (d) { return d.toDateString() }, // wrong?
		Y: function (d) { return d.getFullYear() },
		y: function (d) { return (d.getYear() % 100).pad(2) },
//		Z: function (d) { return d.toString().match(/\((.+)\)$/)[1]; },
//		z: function (d) { return d.getTimezoneOffset() }, // wrong
//		z: function (d) { return d.toString().match(/\sGMT([+-]\d+)/)[1]; },
		'%': function (d) { return '%' }
	};

Date.prototype.strftime_f['+'] = Date.prototype.strftime_f.c;
Date.prototype.strftime_f.h = Date.prototype.strftime_f.b;

Date.prototype.strftime =
	function (fmt) {
		var r = '';
		var n = 0;
		while(n < fmt.length) {
			var c = fmt.substring(n, n+1);
			if (c == '%') {
				c = fmt.substring(++n, n+1);
				r += (this.strftime_f[c]) ? this.strftime_f[c](this) : c;
			} else r += c;
			++n;
		}
		return r;
	};
if(jQuery)(function($){$.extend($.fn,{miniColors:function(o,data){var create=function(input,o,data){var color=cleanHex(input.val());if(!color)color='FFFFFF';var hsb=hex2hsb(color);var trigger=$('<a class="miniColors-trigger" style="background-color: #'+color+'" href="#"></a>');trigger.insertAfter(input);input.addClass('miniColors').attr('maxlength',7).attr('autocomplete','off');input.data('trigger',trigger);input.data('hsb',hsb);if(o.change)input.data('change',o.change);if(o.readonly)input.attr('readonly',true);if(o.disabled)disable(input);trigger.bind('click.miniColors',function(event){event.preventDefault();input.trigger('focus');});input.bind('focus.miniColors',function(event){show(input);});input.bind('blur.miniColors',function(event){var hex=cleanHex(input.val());input.val(hex?'#'+hex:'');});input.bind('keydown.miniColors',function(event){if(event.keyCode===9)hide(input);});input.bind('keyup.miniColors',function(event){var filteredHex=input.val().replace(/[^A-F0-9#]/ig,'');input.val(filteredHex);if(!setColorFromInput(input)){input.data('trigger').css('backgroundColor','#FFF');}});input.bind('paste.miniColors',function(event){setTimeout(function(){input.trigger('keyup');},5);});};var destroy=function(input){hide();input=$(input);input.data('trigger').remove();input.removeAttr('autocomplete');input.removeData('trigger');input.removeData('selector');input.removeData('hsb');input.removeData('huePicker');input.removeData('colorPicker');input.removeData('mousebutton');input.removeData('moving');input.unbind('click.miniColors');input.unbind('focus.miniColors');input.unbind('blur.miniColors');input.unbind('keyup.miniColors');input.unbind('keydown.miniColors');input.unbind('paste.miniColors');$(document).unbind('mousedown.miniColors');$(document).unbind('mousemove.miniColors');};var enable=function(input){input.attr('disabled',false);input.data('trigger').css('opacity',1);};var disable=function(input){hide(input);input.attr('disabled',true);input.data('trigger').css('opacity',.5);};var show=function(input){if(input.attr('disabled'))return false;hide();var selector=$('<div class="miniColors-selector"></div>');selector.append('<div class="miniColors-colors" style="background-color: #FFF;"><div class="miniColors-colorPicker"></div></div>');selector.append('<div class="miniColors-hues"><div class="miniColors-huePicker"></div></div>');selector.css({top:input.is(':visible')?input.offset().top+input.outerHeight():input.data('trigger').offset().top+input.data('trigger').outerHeight(),left:input.is(':visible')?input.offset().left:input.data('trigger').offset().left,display:'none'}).addClass(input.attr('class'));var hsb=input.data('hsb');selector.find('.miniColors-colors').css('backgroundColor','#'+hsb2hex({h:hsb.h,s:100,b:100}));var colorPosition=input.data('colorPosition');if(!colorPosition)colorPosition=getColorPositionFromHSB(hsb);selector.find('.miniColors-colorPicker').css('top',colorPosition.y+'px').css('left',colorPosition.x+'px');var huePosition=input.data('huePosition');if(!huePosition)huePosition=getHuePositionFromHSB(hsb);selector.find('.miniColors-huePicker').css('top',huePosition.y+'px');input.data('selector',selector);input.data('huePicker',selector.find('.miniColors-huePicker'));input.data('colorPicker',selector.find('.miniColors-colorPicker'));input.data('mousebutton',0);$('BODY').append(selector);selector.fadeIn(100);selector.bind('selectstart',function(){return false;});$(document).bind('mousedown.miniColors',function(event){input.data('mousebutton',1);if($(event.target).parents().andSelf().hasClass('miniColors-colors')){event.preventDefault();input.data('moving','colors');moveColor(input,event);}
if($(event.target).parents().andSelf().hasClass('miniColors-hues')){event.preventDefault();input.data('moving','hues');moveHue(input,event);}
if($(event.target).parents().andSelf().hasClass('miniColors-selector')){event.preventDefault();return;}
if($(event.target).parents().andSelf().hasClass('miniColors'))return;hide(input);});$(document).bind('mouseup.miniColors',function(event){input.data('mousebutton',0);input.removeData('moving');});$(document).bind('mousemove.miniColors',function(event){if(input.data('mousebutton')===1){if(input.data('moving')==='colors')moveColor(input,event);if(input.data('moving')==='hues')moveHue(input,event);}});};var hide=function(input){if(!input)input='.miniColors';$(input).each(function(){var selector=$(this).data('selector');$(this).removeData('selector');$(selector).fadeOut(100,function(){$(this).remove();});});$(document).unbind('mousedown.miniColors');$(document).unbind('mousemove.miniColors');};var moveColor=function(input,event){var colorPicker=input.data('colorPicker');colorPicker.hide();var position={x:event.clientX-input.data('selector').find('.miniColors-colors').offset().left+$(document).scrollLeft()-5,y:event.clientY-input.data('selector').find('.miniColors-colors').offset().top+$(document).scrollTop()-5};if(position.x<=-5)position.x=-5;if(position.x>=144)position.x=144;if(position.y<=-5)position.y=-5;if(position.y>=144)position.y=144;input.data('colorPosition',position);colorPicker.css('left',position.x).css('top',position.y).show();var s=Math.round((position.x+5)*.67);if(s<0)s=0;if(s>100)s=100;var b=100-Math.round((position.y+5)*.67);if(b<0)b=0;if(b>100)b=100;var hsb=input.data('hsb');hsb.s=s;hsb.b=b;setColor(input,hsb,true);};var moveHue=function(input,event){var huePicker=input.data('huePicker');huePicker.hide();var position={y:event.clientY-input.data('selector').find('.miniColors-colors').offset().top+$(document).scrollTop()-1};if(position.y<=-1)position.y=-1;if(position.y>=149)position.y=149;input.data('huePosition',position);huePicker.css('top',position.y).show();var h=Math.round((150-position.y-1)*2.4);if(h<0)h=0;if(h>360)h=360;var hsb=input.data('hsb');hsb.h=h;setColor(input,hsb,true);};var setColor=function(input,hsb,updateInputValue){input.data('hsb',hsb);var hex=hsb2hex(hsb);if(updateInputValue)input.val('#'+hex);input.data('trigger').css('backgroundColor','#'+hex);if(input.data('selector'))input.data('selector').find('.miniColors-colors').css('backgroundColor','#'+hsb2hex({h:hsb.h,s:100,b:100}));if(input.data('change')){input.data('change').call(input,'#'+hex,hsb2rgb(hsb));}};var setColorFromInput=function(input){var hex=cleanHex(input.val());if(!hex)return false;var hsb=hex2hsb(hex);var currentHSB=input.data('hsb');if(hsb.h===currentHSB.h&&hsb.s===currentHSB.s&&hsb.b===currentHSB.b)return true;var colorPosition=getColorPositionFromHSB(hsb);var colorPicker=$(input.data('colorPicker'));colorPicker.css('top',colorPosition.y+'px').css('left',colorPosition.x+'px');var huePosition=getHuePositionFromHSB(hsb);var huePicker=$(input.data('huePicker'));huePicker.css('top',huePosition.y+'px');setColor(input,hsb,false);return true;};var getColorPositionFromHSB=function(hsb){var x=Math.ceil(hsb.s/.67);if(x<0)x=0;if(x>150)x=150;var y=150-Math.ceil(hsb.b/.67);if(y<0)y=0;if(y>150)y=150;return{x:x-5,y:y-5};}
var getHuePositionFromHSB=function(hsb){var y=150-(hsb.h/2.4);if(y<0)h=0;if(y>150)h=150;return{y:y-1};}
var cleanHex=function(hex){hex=hex.replace(/[^A-Fa-f0-9]/,'');if(hex.length==3){hex=hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2];}
return hex.length===6?hex:null;};var hsb2rgb=function(hsb){var rgb={};var h=Math.round(hsb.h);var s=Math.round(hsb.s*255/100);var v=Math.round(hsb.b*255/100);if(s==0){rgb.r=rgb.g=rgb.b=v;}else{var t1=v;var t2=(255-s)*v/255;var t3=(t1-t2)*(h%60)/60;if(h==360)h=0;if(h<60){rgb.r=t1;rgb.b=t2;rgb.g=t2+t3;}
else if(h<120){rgb.g=t1;rgb.b=t2;rgb.r=t1-t3;}
else if(h<180){rgb.g=t1;rgb.r=t2;rgb.b=t2+t3;}
else if(h<240){rgb.b=t1;rgb.r=t2;rgb.g=t1-t3;}
else if(h<300){rgb.b=t1;rgb.g=t2;rgb.r=t2+t3;}
else if(h<360){rgb.r=t1;rgb.g=t2;rgb.b=t1-t3;}
else{rgb.r=0;rgb.g=0;rgb.b=0;}}
return{r:Math.round(rgb.r),g:Math.round(rgb.g),b:Math.round(rgb.b)};};var rgb2hex=function(rgb){var hex=[rgb.r.toString(16),rgb.g.toString(16),rgb.b.toString(16)];$.each(hex,function(nr,val){if(val.length==1)hex[nr]='0'+val;});return hex.join('');};var hex2rgb=function(hex){var hex=parseInt(((hex.indexOf('#')>-1)?hex.substring(1):hex),16);return{r:hex>>16,g:(hex&0x00FF00)>>8,b:(hex&0x0000FF)};};var rgb2hsb=function(rgb){var hsb={h:0,s:0,b:0};var min=Math.min(rgb.r,rgb.g,rgb.b);var max=Math.max(rgb.r,rgb.g,rgb.b);var delta=max-min;hsb.b=max;hsb.s=max!=0?255*delta/max:0;if(hsb.s!=0){if(rgb.r==max){hsb.h=(rgb.g-rgb.b)/delta;}else if(rgb.g==max){hsb.h=2+(rgb.b-rgb.r)/delta;}else{hsb.h=4+(rgb.r-rgb.g)/delta;}}else{hsb.h=-1;}
hsb.h*=60;if(hsb.h<0){hsb.h+=360;}
hsb.s*=100/255;hsb.b*=100/255;return hsb;};var hex2hsb=function(hex){var hsb=rgb2hsb(hex2rgb(hex));if(hsb.s===0)hsb.h=360;return hsb;};var hsb2hex=function(hsb){return rgb2hex(hsb2rgb(hsb));};switch(o){case'readonly':$(this).each(function(){$(this).attr('readonly',data);});return $(this);break;case'disabled':$(this).each(function(){if(data){disable($(this));}else{enable($(this));}});return $(this);case'value':$(this).each(function(){$(this).val(data).trigger('keyup');});return $(this);break;case'destroy':$(this).each(function(){destroy($(this));});return $(this);default:if(!o)o={};$(this).each(function(){if($(this)[0].tagName.toLowerCase()!=='input')return;if($(this).data('trigger'))return;create($(this),o,data);});return $(this);}}});})(jQuery);// Chosen, a Select Box Enhancer for jQuery and Protoype
// by Patrick Filler for Harvest, http://getharvest.com
//
// Version 0.9.8
// Full source at https://github.com/harvesthq/chosen
// Copyright (c) 2011 Harvest http://getharvest.com

// MIT License, https://github.com/harvesthq/chosen/blob/master/LICENSE.md
// This file is generated by `cake build`, do not edit it by hand.
((function(){var a;a=function(){function a(){this.options_index=0,this.parsed=[]}return a.prototype.add_node=function(a){return a.nodeName==="OPTGROUP"?this.add_group(a):this.add_option(a)},a.prototype.add_group=function(a){var b,c,d,e,f,g;b=this.parsed.length,this.parsed.push({array_index:b,group:!0,label:a.label,children:0,disabled:a.disabled}),f=a.childNodes,g=[];for(d=0,e=f.length;d<e;d++)c=f[d],g.push(this.add_option(c,b,a.disabled));return g},a.prototype.add_option=function(a,b,c){if(a.nodeName==="OPTION")return a.text!==""?(b!=null&&(this.parsed[b].children+=1),this.parsed.push({array_index:this.parsed.length,options_index:this.options_index,value:a.value,text:a.text,html:a.innerHTML,selected:a.selected,disabled:c===!0?c:a.disabled,group_array_index:b,classes:a.className,style:a.style.cssText})):this.parsed.push({array_index:this.parsed.length,options_index:this.options_index,empty:!0}),this.options_index+=1},a}(),a.select_to_array=function(b){var c,d,e,f,g;d=new a,g=b.childNodes;for(e=0,f=g.length;e<f;e++)c=g[e],d.add_node(c);return d.parsed},this.SelectParser=a})).call(this),function(){var a,b;b=this,a=function(){function a(a,b){this.form_field=a,this.options=b!=null?b:{},this.set_default_values(),this.is_multiple=this.form_field.multiple,this.set_default_text(),this.setup(),this.set_up_html(),this.register_observers(),this.finish_setup()}return a.prototype.set_default_values=function(){var a=this;return this.click_test_action=function(b){return a.test_active_click(b)},this.activate_action=function(b){return a.activate_field(b)},this.active_field=!1,this.mouse_on_container=!1,this.results_showing=!1,this.result_highlighted=null,this.result_single_selected=null,this.allow_single_deselect=this.options.allow_single_deselect!=null&&this.form_field.options[0]!=null&&this.form_field.options[0].text===""?this.options.allow_single_deselect:!1,this.disable_search_threshold=this.options.disable_search_threshold||0,this.search_contains=this.options.search_contains||!1,this.choices=0,this.single_backstroke_delete=this.options.single_backstroke_delete||!1,this.max_selected_options=this.options.max_selected_options||Infinity},a.prototype.set_default_text=function(){return this.form_field.getAttribute("data-placeholder")?this.default_text=this.form_field.getAttribute("data-placeholder"):this.is_multiple?this.default_text=this.options.placeholder_text_multiple||this.options.placeholder_text||"Select Some Options":this.default_text=this.options.placeholder_text_single||this.options.placeholder_text||"Select an Option",this.results_none_found=this.form_field.getAttribute("data-no_results_text")||this.options.no_results_text||"No results match"},a.prototype.mouse_enter=function(){return this.mouse_on_container=!0},a.prototype.mouse_leave=function(){return this.mouse_on_container=!1},a.prototype.input_focus=function(a){var b=this;if(!this.active_field)return setTimeout(function(){return b.container_mousedown()},50)},a.prototype.input_blur=function(a){var b=this;if(!this.mouse_on_container)return this.active_field=!1,setTimeout(function(){return b.blur_test()},100)},a.prototype.result_add_option=function(a){var b,c;return a.disabled?"":(a.dom_id=this.container_id+"_o_"+a.array_index,b=a.selected&&this.is_multiple?[]:["active-result"],a.selected&&b.push("result-selected"),a.group_array_index!=null&&b.push("group-option"),a.classes!==""&&b.push(a.classes),c=a.style.cssText!==""?' style="'+a.style+'"':"",'<li id="'+a.dom_id+'" class="'+b.join(" ")+'"'+c+">"+a.html+"</li>")},a.prototype.results_update_field=function(){return this.is_multiple||this.results_reset_cleanup(),this.result_clear_highlight(),this.result_single_selected=null,this.results_build()},a.prototype.results_toggle=function(){return this.results_showing?this.results_hide():this.results_show()},a.prototype.results_search=function(a){return this.results_showing?this.winnow_results():this.results_show()},a.prototype.keyup_checker=function(a){var b,c;b=(c=a.which)!=null?c:a.keyCode,this.search_field_scale();switch(b){case 8:if(this.is_multiple&&this.backstroke_length<1&&this.choices>0)return this.keydown_backstroke();if(!this.pending_backstroke)return this.result_clear_highlight(),this.results_search();break;case 13:a.preventDefault();if(this.results_showing)return this.result_select(a);break;case 27:return this.results_showing&&this.results_hide(),!0;case 9:case 38:case 40:case 16:case 91:case 17:break;default:return this.results_search()}},a.prototype.generate_field_id=function(){var a;return a=this.generate_random_id(),this.form_field.id=a,a},a.prototype.generate_random_char=function(){var a,b,c;return a="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",c=Math.floor(Math.random()*a.length),b=a.substring(c,c+1)},a}(),b.AbstractChosen=a}.call(this),function(){var a,b,c,d,e=Object.prototype.hasOwnProperty,f=function(a,b){function d(){this.constructor=a}for(var c in b)e.call(b,c)&&(a[c]=b[c]);return d.prototype=b.prototype,a.prototype=new d,a.__super__=b.prototype,a};d=this,a=jQuery,a.fn.extend({chosen:function(c){return!a.browser.msie||a.browser.version!=="6.0"&&a.browser.version!=="7.0"?this.each(function(d){var e;e=a(this);if(!e.hasClass("chzn-done"))return e.data("chosen",new b(this,c))}):this}}),b=function(b){function e(){e.__super__.constructor.apply(this,arguments)}return f(e,b),e.prototype.setup=function(){return this.form_field_jq=a(this.form_field),this.current_value=this.form_field_jq.val(),this.is_rtl=this.form_field_jq.hasClass("chzn-rtl")},e.prototype.finish_setup=function(){return this.form_field_jq.addClass("chzn-done")},e.prototype.set_up_html=function(){var b,d,e,f;return this.container_id=this.form_field.id.length?this.form_field.id.replace(/[^\w]/g,"_"):this.generate_field_id(),this.container_id+="_chzn",this.f_width=this.form_field_jq.outerWidth(),b=a("<div />",{id:this.container_id,"class":"chzn-container"+(this.is_rtl?" chzn-rtl":""),style:"width: "+this.f_width+"px;"}),this.is_multiple?b.html('<ul class="chzn-choices"><li class="search-field"><input type="text" value="'+this.default_text+'" class="default" autocomplete="off" style="width:25px;" /></li></ul><div class="chzn-drop" style="left:-9000px;"><ul class="chzn-results"></ul></div>'):b.html('<a href="javascript:void(0)" class="chzn-single chzn-default"><span>'+this.default_text+'</span><div><b></b></div></a><div class="chzn-drop" style="left:-9000px;"><div class="chzn-search"><input type="text" autocomplete="off" /></div><ul class="chzn-results"></ul></div>'),this.form_field_jq.hide().after(b),this.container=a("#"+this.container_id),this.container.addClass("chzn-container-"+(this.is_multiple?"multi":"single")),this.dropdown=this.container.find("div.chzn-drop").first(),d=this.container.height(),e=this.f_width-c(this.dropdown),this.dropdown.css({width:e+"px",top:d+"px"}),this.search_field=this.container.find("input").first(),this.search_results=this.container.find("ul.chzn-results").first(),this.search_field_scale(),this.search_no_results=this.container.find("li.no-results").first(),this.is_multiple?(this.search_choices=this.container.find("ul.chzn-choices").first(),this.search_container=this.container.find("li.search-field").first()):(this.search_container=this.container.find("div.chzn-search").first(),this.selected_item=this.container.find(".chzn-single").first(),f=e-c(this.search_container)-c(this.search_field),this.search_field.css({width:f+"px"})),this.results_build(),this.set_tab_index(),this.form_field_jq.trigger("liszt:ready",{chosen:this})},e.prototype.register_observers=function(){var a=this;return this.container.mousedown(function(b){return a.container_mousedown(b)}),this.container.mouseup(function(b){return a.container_mouseup(b)}),this.container.mouseenter(function(b){return a.mouse_enter(b)}),this.container.mouseleave(function(b){return a.mouse_leave(b)}),this.search_results.mouseup(function(b){return a.search_results_mouseup(b)}),this.search_results.mouseover(function(b){return a.search_results_mouseover(b)}),this.search_results.mouseout(function(b){return a.search_results_mouseout(b)}),this.form_field_jq.bind("liszt:updated",function(b){return a.results_update_field(b)}),this.search_field.blur(function(b){return a.input_blur(b)}),this.search_field.keyup(function(b){return a.keyup_checker(b)}),this.search_field.keydown(function(b){return a.keydown_checker(b)}),this.is_multiple?(this.search_choices.click(function(b){return a.choices_click(b)}),this.search_field.focus(function(b){return a.input_focus(b)})):this.container.click(function(a){return a.preventDefault()})},e.prototype.search_field_disabled=function(){this.is_disabled=this.form_field_jq[0].disabled;if(this.is_disabled)return this.container.addClass("chzn-disabled"),this.search_field[0].disabled=!0,this.is_multiple||this.selected_item.unbind("focus",this.activate_action),this.close_field();this.container.removeClass("chzn-disabled"),this.search_field[0].disabled=!1;if(!this.is_multiple)return this.selected_item.bind("focus",this.activate_action)},e.prototype.container_mousedown=function(b){var c;if(!this.is_disabled)return c=b!=null?a(b.target).hasClass("search-choice-close"):!1,b&&b.type==="mousedown"&&!this.results_showing&&b.stopPropagation(),!this.pending_destroy_click&&!c?(this.active_field?!this.is_multiple&&b&&(a(b.target)[0]===this.selected_item[0]||a(b.target).parents("a.chzn-single").length)&&(b.preventDefault(),this.results_toggle()):(this.is_multiple&&this.search_field.val(""),a(document).click(this.click_test_action),this.results_show()),this.activate_field()):this.pending_destroy_click=!1},e.prototype.container_mouseup=function(a){if(a.target.nodeName==="ABBR"&&!this.is_disabled)return this.results_reset(a)},e.prototype.blur_test=function(a){if(!this.active_field&&this.container.hasClass("chzn-container-active"))return this.close_field()},e.prototype.close_field=function(){return a(document).unbind("click",this.click_test_action),this.is_multiple||(this.selected_item.attr("tabindex",this.search_field.attr("tabindex")),this.search_field.attr("tabindex",-1)),this.active_field=!1,this.results_hide(),this.container.removeClass("chzn-container-active"),this.winnow_results_clear(),this.clear_backstroke(),this.show_search_field_default(),this.search_field_scale()},e.prototype.activate_field=function(){return!this.is_multiple&&!this.active_field&&(this.search_field.attr("tabindex",this.selected_item.attr("tabindex")),this.selected_item.attr("tabindex",-1)),this.container.addClass("chzn-container-active"),this.active_field=!0,this.search_field.val(this.search_field.val()),this.search_field.focus()},e.prototype.test_active_click=function(b){return a(b.target).parents("#"+this.container_id).length?this.active_field=!0:this.close_field()},e.prototype.results_build=function(){var a,b,c,e,f;this.parsing=!0,this.results_data=d.SelectParser.select_to_array(this.form_field),this.is_multiple&&this.choices>0?(this.search_choices.find("li.search-choice").remove(),this.choices=0):this.is_multiple||(this.selected_item.addClass("chzn-default").find("span").text(this.default_text),this.form_field.options.length<=this.disable_search_threshold?this.container.addClass("chzn-container-single-nosearch"):this.container.removeClass("chzn-container-single-nosearch")),a="",f=this.results_data;for(c=0,e=f.length;c<e;c++)b=f[c],b.group?a+=this.result_add_group(b):b.empty||(a+=this.result_add_option(b),b.selected&&this.is_multiple?this.choice_build(b):b.selected&&!this.is_multiple&&(this.selected_item.removeClass("chzn-default").find("span").text(b.text),this.allow_single_deselect&&this.single_deselect_control_build()));return this.search_field_disabled(),this.show_search_field_default(),this.search_field_scale(),this.search_results.html(a),this.parsing=!1},e.prototype.result_add_group=function(b){return b.disabled?"":(b.dom_id=this.container_id+"_g_"+b.array_index,'<li id="'+b.dom_id+'" class="group-result">'+a("<div />").text(b.label).html()+"</li>")},e.prototype.result_do_highlight=function(a){var b,c,d,e,f;if(a.length){this.result_clear_highlight(),this.result_highlight=a,this.result_highlight.addClass("highlighted"),d=parseInt(this.search_results.css("maxHeight"),10),f=this.search_results.scrollTop(),e=d+f,c=this.result_highlight.position().top+this.search_results.scrollTop(),b=c+this.result_highlight.outerHeight();if(b>=e)return this.search_results.scrollTop(b-d>0?b-d:0);if(c<f)return this.search_results.scrollTop(c)}},e.prototype.result_clear_highlight=function(){return this.result_highlight&&this.result_highlight.removeClass("highlighted"),this.result_highlight=null},e.prototype.results_show=function(){var a;if(!this.is_multiple)this.selected_item.addClass("chzn-single-with-drop"),this.result_single_selected&&this.result_do_highlight(this.result_single_selected);else if(this.max_selected_options<=this.choices)return this.form_field_jq.trigger("liszt:maxselected",{chosen:this}),!1;return a=this.is_multiple?this.container.height():this.container.height()-1,this.form_field_jq.trigger("liszt:showing_dropdown",{chosen:this}),this.dropdown.css({top:a+"px",left:0}),this.results_showing=!0,this.search_field.focus(),this.search_field.val(this.search_field.val()),this.winnow_results()},e.prototype.results_hide=function(){return this.is_multiple||this.selected_item.removeClass("chzn-single-with-drop"),this.result_clear_highlight(),this.form_field_jq.trigger("liszt:hiding_dropdown",{chosen:this}),this.dropdown.css({left:"-9000px"}),this.results_showing=!1},e.prototype.set_tab_index=function(a){var b;if(this.form_field_jq.attr("tabindex"))return b=this.form_field_jq.attr("tabindex"),this.form_field_jq.attr("tabindex",-1),this.is_multiple?this.search_field.attr("tabindex",b):(this.selected_item.attr("tabindex",b),this.search_field.attr("tabindex",-1))},e.prototype.show_search_field_default=function(){return this.is_multiple&&this.choices<1&&!this.active_field?(this.search_field.val(this.default_text),this.search_field.addClass("default")):(this.search_field.val(""),this.search_field.removeClass("default"))},e.prototype.search_results_mouseup=function(b){var c;c=a(b.target).hasClass("active-result")?a(b.target):a(b.target).parents(".active-result").first();if(c.length)return this.result_highlight=c,this.result_select(b)},e.prototype.search_results_mouseover=function(b){var c;c=a(b.target).hasClass("active-result")?a(b.target):a(b.target).parents(".active-result").first();if(c)return this.result_do_highlight(c)},e.prototype.search_results_mouseout=function(b){if(a(b.target).hasClass("active-result"))return this.result_clear_highlight()},e.prototype.choices_click=function(b){b.preventDefault();if(this.active_field&&!a(b.target).hasClass("search-choice")&&!this.results_showing)return this.results_show()},e.prototype.choice_build=function(b){var c,d,e=this;return this.is_multiple&&this.max_selected_options<=this.choices?(this.form_field_jq.trigger("liszt:maxselected",{chosen:this}),!1):(c=this.container_id+"_c_"+b.array_index,this.choices+=1,this.search_container.before('<li class="search-choice" id="'+c+'"><span>'+b.html+'</span><a href="javascript:void(0)" class="search-choice-close" rel="'+b.array_index+'"></a></li>'),d=a("#"+c).find("a").first(),d.click(function(a){return e.choice_destroy_link_click(a)}))},e.prototype.choice_destroy_link_click=function(b){return b.preventDefault(),this.is_disabled?b.stopPropagation:(this.pending_destroy_click=!0,this.choice_destroy(a(b.target)))},e.prototype.choice_destroy=function(a){return this.choices-=1,this.show_search_field_default(),this.is_multiple&&this.choices>0&&this.search_field.val().length<1&&this.results_hide(),this.result_deselect(a.attr("rel")),a.parents("li").first().remove()},e.prototype.results_reset=function(){this.form_field.options[0].selected=!0,this.selected_item.find("span").text(this.default_text),this.is_multiple||this.selected_item.addClass("chzn-default"),this.show_search_field_default(),this.results_reset_cleanup(),this.form_field_jq.trigger("change");if(this.active_field)return this.results_hide()},e.prototype.results_reset_cleanup=function(){return this.selected_item.find("abbr").remove()},e.prototype.result_select=function(a){var b,c,d,e;if(this.result_highlight)return b=this.result_highlight,c=b.attr("id"),this.result_clear_highlight(),this.is_multiple?this.result_deactivate(b):(this.search_results.find(".result-selected").removeClass("result-selected"),this.result_single_selected=b,this.selected_item.removeClass("chzn-default")),b.addClass("result-selected"),e=c.substr(c.lastIndexOf("_")+1),d=this.results_data[e],d.selected=!0,this.form_field.options[d.options_index].selected=!0,this.is_multiple?this.choice_build(d):(this.selected_item.find("span").first().text(d.text),this.allow_single_deselect&&this.single_deselect_control_build()),(!a.metaKey||!this.is_multiple)&&this.results_hide(),this.search_field.val(""),(this.is_multiple||this.form_field_jq.val()!==this.current_value)&&this.form_field_jq.trigger("change",{selected:this.form_field.options[d.options_index].value}),this.current_value=this.form_field_jq.val(),this.search_field_scale()},e.prototype.result_activate=function(a){return a.addClass("active-result")},e.prototype.result_deactivate=function(a){return a.removeClass("active-result")},e.prototype.result_deselect=function(b){var c,d;return d=this.results_data[b],d.selected=!1,this.form_field.options[d.options_index].selected=!1,c=a("#"+this.container_id+"_o_"+b),c.removeClass("result-selected").addClass("active-result").show(),this.result_clear_highlight(),this.winnow_results(),this.form_field_jq.trigger("change",{deselected:this.form_field.options[d.options_index].value}),this.search_field_scale()},e.prototype.single_deselect_control_build=function(){if(this.allow_single_deselect&&this.selected_item.find("abbr").length<1)return this.selected_item.find("span").first().after('<abbr class="search-choice-close"></abbr>')},e.prototype.winnow_results=function(){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;this.no_results_clear(),j=0,k=this.search_field.val()===this.default_text?"":a("<div/>").text(a.trim(this.search_field.val())).html(),g=this.search_contains?"":"^",f=new RegExp(g+k.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&"),"i"),n=new RegExp(k.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&"),"i"),s=this.results_data;for(o=0,q=s.length;o<q;o++){c=s[o];if(!c.disabled&&!c.empty)if(c.group)a("#"+c.dom_id).css("display","none");else if(!this.is_multiple||!c.selected){b=!1,i=c.dom_id,h=a("#"+i);if(f.test(c.html))b=!0,j+=1;else if(c.html.indexOf(" ")>=0||c.html.indexOf("[")===0){e=c.html.replace(/\[|\]/g,"").split(" ");if(e.length)for(p=0,r=e.length;p<r;p++)d=e[p],f.test(d)&&(b=!0,j+=1)}b?(k.length?(l=c.html.search(n),m=c.html.substr(0,l+k.length)+"</em>"+c.html.substr(l+k.length),m=m.substr(0,l)+"<em>"+m.substr(l)):m=c.html,h.html(m),this.result_activate(h),c.group_array_index!=null&&a("#"+this.results_data[c.group_array_index].dom_id).css("display","list-item")):(this.result_highlight&&i===this.result_highlight.attr("id")&&this.result_clear_highlight(),this.result_deactivate(h))}}return j<1&&k.length?this.no_results(k):this.winnow_results_set_highlight()},e.prototype.winnow_results_clear=function(){var b,c,d,e,f;this.search_field.val(""),c=this.search_results.find("li"),f=[];for(d=0,e=c.length;d<e;d++)b=c[d],b=a(b),b.hasClass("group-result")?f.push(b.css("display","auto")):!this.is_multiple||!b.hasClass("result-selected")?f.push(this.result_activate(b)):f.push(void 0);return f},e.prototype.winnow_results_set_highlight=function(){var a,b;if(!this.result_highlight){b=this.is_multiple?[]:this.search_results.find(".result-selected.active-result"),a=b.length?b.first():this.search_results.find(".active-result").first();if(a!=null)return this.result_do_highlight(a)}},e.prototype.no_results=function(b){var c;return c=a('<li class="no-results">'+this.results_none_found+' "<span></span>"</li>'),c.find("span").first().html(b),this.search_results.append(c)},e.prototype.no_results_clear=function(){return this.search_results.find(".no-results").remove()},e.prototype.keydown_arrow=function(){var b,c;this.result_highlight?this.results_showing&&(c=this.result_highlight.nextAll("li.active-result").first(),c&&this.result_do_highlight(c)):(b=this.search_results.find("li.active-result").first(),b&&this.result_do_highlight(a(b)));if(!this.results_showing)return this.results_show()},e.prototype.keyup_arrow=function(){var a;if(!this.results_showing&&!this.is_multiple)return this.results_show();if(this.result_highlight)return a=this.result_highlight.prevAll("li.active-result"),a.length?this.result_do_highlight(a.first()):(this.choices>0&&this.results_hide(),this.result_clear_highlight())},e.prototype.keydown_backstroke=function(){return this.pending_backstroke?(this.choice_destroy(this.pending_backstroke.find("a").first()),this.clear_backstroke()):(this.pending_backstroke=this.search_container.siblings("li.search-choice").last(),this.single_backstroke_delete?this.keydown_backstroke():this.pending_backstroke.addClass("search-choice-focus"))},e.prototype.clear_backstroke=function(){return this.pending_backstroke&&this.pending_backstroke.removeClass("search-choice-focus"),this.pending_backstroke=null},e.prototype.keydown_checker=function(a){var b,c;b=(c=a.which)!=null?c:a.keyCode,this.search_field_scale(),b!==8&&this.pending_backstroke&&this.clear_backstroke();switch(b){case 8:this.backstroke_length=this.search_field.val().length;break;case 9:this.results_showing&&!this.is_multiple&&this.result_select(a),this.mouse_on_container=!1;break;case 13:a.preventDefault();break;case 38:a.preventDefault(),this.keyup_arrow();break;case 40:this.keydown_arrow()}},e.prototype.search_field_scale=function(){var b,c,d,e,f,g,h,i,j;if(this.is_multiple){d=0,h=0,f="position:absolute; left: -1000px; top: -1000px; display:none;",g=["font-size","font-style","font-weight","font-family","line-height","text-transform","letter-spacing"];for(i=0,j=g.length;i<j;i++)e=g[i],f+=e+":"+this.search_field.css(e)+";";return c=a("<div />",{style:f}),c.text(this.search_field.val()),a("body").append(c),h=c.width()+25,c.remove(),h>this.f_width-10&&(h=this.f_width-10),this.search_field.css({width:h+"px"}),b=this.container.height(),this.dropdown.css({top:b+"px"})}},e.prototype.generate_random_id=function(){var b;b="sel"+this.generate_random_char()+this.generate_random_char()+this.generate_random_char();while(a("#"+b).length>0)b+=this.generate_random_char();return b},e}(AbstractChosen),c=function(a){var b;return b=a.outerWidth()-a.width()},d.get_side_border_padding=c}.call(this);
function ActivityLogForm(initialVisibility){
  this.initialVisibility = initialVisibility;
  this.form = "#activity_log_form";
  this.setup();
}

ActivityLogForm.prototype.setup = function(){
  var that=this;
  if (that.initialVisibility) {
    $(that.form).show();
  } else {
    $(that.form).hide();
  }
  $('.datepicker').btDatepicker({minDate: '-90d', maxDate: '+1d'});
  $("#filter_toggle_link").click(function() {
    $(that.form).toggle();
    return false;
  });
};
function AddressForm(container_id) {
  var that = this;
  that.container_id = container_id;
}

AddressForm.prototype.toggleAddressSource = function() {
  var radio_button = $(this.container_id + " input[type=radio][value=new]");
  if (radio_button.is(':checked') && !radio_button.is(':disabled')) {
    $(this.container_id + " .toggleable_address_fields").show();
    $(this.container_id + " .toggleable_address_fields input").enable();
    $(this.container_id + " .toggleable_address_fields select").enable();
  }
  else {
    $(this.container_id + " .toggleable_address_fields").hide();
    $(this.container_id + " .toggleable_address_fields input").disable();
    $(this.container_id + " .toggleable_address_fields select").disable();
  }

  radio_button = $(this.container_id + " input[type=radio][value=billing]");
  if (radio_button.is(':checked') && !radio_button.is(':disabled')) {
    $(this.container_id + " .use_billing_address[type=hidden]").val("true");
  } else {
    $(this.container_id + " .use_billing_address[type=hidden]").val("false");
  }

  radio_button = $(this.container_id + " input[type=radio][value=none]");
  if (radio_button.is(':checked') && !radio_button.is(':disabled')) {
    $(this.container_id + " .toggleable_address_none input").enable();
  } else {
    $(this.container_id + " .toggleable_address_none input").disable();
  }

  radio_button = $(this.container_id + " input[type=radio][value=saved]");
  if (radio_button.is(':checked') && !radio_button.is(':disabled')) {
    $(this.container_id + " .toggleable_address_selection select").enable();
    $(this.container_id + " .toggleable_address_selection").show();
    $(this.container_id + " .saved_address_id").enable();
  }
  else {
    $(this.container_id + " .toggleable_address_selection").hide();
    $(this.container_id + " .toggleable_address_selection select").disable();
    $(this.container_id + " .saved_address_id").disable();
  }
};

AddressForm.prototype.showErrors = function() {
  if($(this.container_id + " .toggleable_address_fields .formError").length > 0) {
    $(this.container_id + " input[type=radio][value=new]").check();
  }
};
function AdvancedSearchForm() {
}

AdvancedSearchForm.prototype.setup = function() {
  var form = this;
  this.checkAllBoxesIfAllValuesChecked();

  var date_range_helper = new DateRangeHelper();
  date_range_helper.setupDatePicker();
  date_range_helper.setupDateHelpers();

  $("#search_text_fields .text_field_inputs select").each(function(index, element) {
    form.initializeSearchField(element);
  });

  this.setupSearchTextFields($("#search_text_fields"));
  this.setupRemoveTextFieldActions();
  $(".search_category_all_checkbox").click(function() { form.allCheckboxToggled(this); } );
  $(".search_category_any_checkbox").click(function() { form.allCheckboxToggled(this); } );
  $(".search_criteria_value").click(function() { form.searchCriteriaValueToggled(this); } );
  $("#add_text_field").click(function() { form.addTextField(); return false; });
  if ($("#search_text_fields div").length === 0) {
    this.addTextField();
  } else {
    this.conditionallyShowRemoveCriteriaLinks();
  }

};

AdvancedSearchForm.prototype.initializeSearchField = function(element) {
  var form = this;
  var inputs = $(element).closest(".text_field_inputs");
  form.removeInappropriateOptions(inputs, form);
  form.updateTextInputName(inputs);
};

AdvancedSearchForm.prototype.setupSearchTextFields = function(scope) {
  var form = this;
  scope.find(".text_field_inputs select").change(function() {
    form.initializeSearchField(this);
    if ($(this).hasClass("text_field_field")) {
      $(this).closest(".text_field_inputs").find("input[type=text]").val("");
    }
  });
};

AdvancedSearchForm.prototype.updateTextInputName = function(inputs) {
  var field = inputs.find(".text_field_field");
  var comparison = inputs.find(".text_field_operator");
  var text_input = inputs.find("input[type=text]");

  if (field.val() === "select_field") {
    text_input.removeAttr("name");
  }
  else {
    text_input.attr("name", "search[" + field.val() + "][" + comparison.val() + "]");
  }
};

AdvancedSearchForm.prototype.removeInappropriateOptions = function(inputs, form) {
  var field = inputs.find(".text_field_field");
  var comparison = inputs.find(".text_field_operator");
  var help = inputs.find(".text_field_value_help");

  form.restoreAllOperatorOptions(comparison);
  help.text("");
  if (field.val() === "credit_card_number") {
    comparison.find("option[value=contains]").remove();
  }
  else if (field.val() === "credit_card_expiration_date") {
    help.text("Format: MM/YYYY");
    comparison.find("option[value=contains]").remove();
    comparison.find("option[value=starts_with]").remove();
    comparison.find("option[value=ends_with]").remove();
  }
};

AdvancedSearchForm.prototype.restoreAllOperatorOptions = function(element) {
  if (element.find("option[value=starts_with]").length === 0) {
    element.append("<option value=\"starts_with\">starts with</option>");
  }
  if (element.find("option[value=ends_with]").length === 0) {
    element.append("<option value=\"ends_with\">ends with</option>");
  }
  if (element.find("option[value=contains]").length === 0) {
    element.append("<option value=\"contains\">contains</option>");
  }
  if (element.find("option[value=is_not]").length === 0) {
    element.append("<option value=\"is_not\">is not</option>");
  }
};

AdvancedSearchForm.prototype.addTextField = function() {
  var html, random_dom_id, wrapped_html;
  html = $("#text_field_template").html();
  random_dom_id = "text_field_" + Math.random().toString().replace(".", "");
  wrapped_html = "<div id=\"" + random_dom_id + "\">" + html + "</div>";
  $("#search_text_fields").append(wrapped_html);
  this.setupSearchTextFields($("#" + random_dom_id));
  this.conditionallyShowRemoveCriteriaLinks();
};

AdvancedSearchForm.prototype.conditionallyShowRemoveCriteriaLinks = function() {
  var text_field_inputs = $("#search_text_fields").children();
  if (text_field_inputs.size() > 1) {
    $(".remove_criteria_link").css('display', 'inline-block');
  }
};

AdvancedSearchForm.prototype.setupRemoveTextFieldActions = function () {
  var form = this;
  $('.remove_criteria_link').unbind().live('click', function(e) {
    var row = $(this).parents(".text_field_inputs").parent();
    row.fadeOut(500, function() {
      row.remove();
    });

    var text_field_inputs = $("#search_text_fields").children();
    if (text_field_inputs.size() <= 2) {
      $(".remove_criteria_link").hide();
    }

    return false;
  });
};

AdvancedSearchForm.prototype.checkAllBoxesIfAllValuesChecked = function() {
  var form = this;
  $.each($('.search_category_all_checkbox'), function(index, allCheckbox) {
    if (form.areAllValuesChecked(allCheckbox)) {
      $(allCheckbox).check();
    }
    else {
      $(allCheckbox).uncheck();
    }
  });
};

AdvancedSearchForm.prototype.checkAnyBoxesIfAnyValuesChecked = function() {
  var form = this;
  $.each($('.search_category_any_checkbox'), function(index, anyCheckbox) {
    if (form.areAnyValuesChecked(anyCheckbox)) {
      $(anyCheckbox).check();
    }
    else {
      $(anyCheckbox).uncheck();
    }
  });
};

AdvancedSearchForm.prototype.allCheckboxToggled = function(allCheckbox) {
  var checked = $(allCheckbox).is(":checked");
  this.childrenForCheckbox(allCheckbox).attr("checked", checked);
  this.checkAllBoxesIfAllValuesChecked();
  this.checkAnyBoxesIfAnyValuesChecked();
};

AdvancedSearchForm.prototype.anyCheckboxToggled = function(anyCheckbox) {
  var checked = $(anyCheckbox).is(":checked");
  this.childrenForCheckbox(anyCheckbox).attr("checked", checked);
  this.checkAnyBoxesIfAnyValuesChecked();
};

AdvancedSearchForm.prototype.areAllValuesChecked = function(allCheckbox) {
  return (this.childrenForCheckbox(allCheckbox).all(function() { return $(this).is(":checked"); }));
};

AdvancedSearchForm.prototype.areAnyValuesChecked = function(anyCheckbox) {
  return (this.childrenForCheckbox(anyCheckbox).is(":checked"));
};

AdvancedSearchForm.prototype.childrenForCheckbox = function(checkbox) {
  // first parent = div around all box, 2nd parent contains all box and children
  return ($(checkbox).parent().parent().find(".search_criteria_value"));
};

AdvancedSearchForm.prototype.searchCriteriaValueToggled = function(criteriaCheckbox) {
  this.checkAllBoxesIfAllValuesChecked();
  this.checkAnyBoxesIfAnyValuesChecked();
};


function AdvancedSearchResults() {
}

AdvancedSearchResults.prototype.setup = function() {
  var paging_form = $('#paging_form');

  $('div.form-post-pagination').find('a').click(function() {
    var page = $(this).attr("href").replace('#', '');
    paging_form.append("<input type='hidden' value='" + page + "' name='page' />");
    paging_form.submit();
    return false;
  });

  $('form.link_submittable_form').find('a.submit_link').click(function() {
    var link = $(this);
    var form = link.closest('form');
    if (!link.hasClass('disabled_button')) {
      link.addClass("disabled_button");
      setTimeout(function() {
        link.removeClass("disabled_button");
      }, 10000);
      form.submit();
    }
    return false;
  });
};
$.fn.setupSearchClearOnFocus = function() {
  this.setupClearOnFocus('Search');
};

$.fn.setupClearOnFocus = function(initial_value) {
  if (initial_value === undefined) {
    this.data('initial_value', this.val());
  } else {
    this.data('initial_value', initial_value);
  }

  this.focus(function() {
    var field = $(this);
    if(field.data('initial_value') === field.val()) {
      field.val('');
      field.removeClass("default_text");
    }
  });
};

$.fn.check = function() {
  $(this).attr("checked", "checked");
};

$.fn.uncheck = function() {
  $(this).removeAttr("checked");
};

$.fn.disable = function() {
  $(this).attr("disabled", "disabled");
};

$.fn.enable = function() {
  $(this).removeAttr("disabled");
};

$.fn.togglesVisibilityOf = function(selector_to_toggle) {
  var checkbox = this;
  var toggleFn = function() {
    if ($(checkbox).is(":checked")) {
      $(selector_to_toggle).show();
    } else {
      $(selector_to_toggle).hide();
    }
  };
  toggleFn();
  $(checkbox).change(toggleFn);
};

function infoHover() {
  $(".info").hover(function(){ $(this).siblings(".help").fadeIn(300); },
                   function(){ $(this).siblings(".help").fadeOut(100); });
}

function setupSelectAllAndNone() {
  $('.select_all').click(function() { 
    $(this).parent().find('input[type=checkbox]').check();
  });
  $('.select_none').click(function() {
    var checkboxes = $(this).parent().find('input[type=checkbox]');
    checkboxes.attr('checked', false);
  });
}

$(document).ready( function() {
  $('input.clear_on_focus').setupClearOnFocus();
  $('input.search_clear_on_focus').setupSearchClearOnFocus();
  $('.no_autocomplete').attr("autocomplete", "off");
  $.each($(".box"), function(index, element) {
    if ($(element).find("a").length === 0) {
      $(element).remove();
    }
  });
  infoHover();
});

/* <3 JS (formerly in separate file called script.js) */
var bt      = {},
    spinner = null;

Modernizr.addTest('cookies', function () {
  // Quick test if browser has cookieEnabled host property
  if (navigator.cookieEnabled) { return true; }
  // Create cookie
  document.cookie = "cookietest=1";
  var ret = document.cookie.indexOf("cookietest=") !== -1;
  // Delete cookie
  document.cookie = "cookietest=1; expires=Thu, 01-Jan-1970 00:00:01 GMT";
  return ret;
});

bt.init = function() {
  bt.fluid();
  //bt.activeNav();
  bt.navigation();
  bt.zippies();
  bt.expandies();
  bt.formies();
  bt.tabbies();
  bt.scrolled();
  bt.clickDowns();

  var preload_spinner = new Image();
  preload_spinner.src = '/images/loader-sprite.png';

  var container = "#app-center .app-center-wrap";
};

bt.clickDowns = function(a){
  var self = this,
      collection = [],
      toggles = $('.account .dropdown > a'),
      cssClass = 'open';

  $.each(toggles,function(i,e){
    var toggle = $(e),
        reveal = toggle.siblings('.sub'),
        first = reveal.find('li:first-child a'),
        point = reveal.find('.point span');

    collection.push({
      toggle : toggle,
      index : i,
      over : false
    });

    toggle.click(function(){
      if ( reveal.is(':visible') ) {
        reveal.removeClass(cssClass);
        toggle.removeClass(cssClass);
      } else {
        window.setTimeout(function(){
          reveal.addClass(cssClass);
          toggle.addClass(cssClass);
        },1);
      }
    });

    reveal.mouseenter(function(){
      collection[i].over = true;
    }).mouseleave(function(){
      collection[i].over = false;
    });

    first.mouseenter(function(){
      point.addClass('a');
    }).mouseleave(function(){
      point.removeClass('a');
    });
    
  });

  function closeAll(forceClose){
    var force = (!(typeof forceClose === 'undefined')) ? true : false ;
    $.each(collection,function(i,o){
      if ( !collection[i].over || force ) {
        collection[i].toggle.removeClass(cssClass).siblings('.sub').removeClass(cssClass);
      }
    });
  }

  $(document).keyup(function(e) {
    if (e.keyCode === 27) {
      closeAll(true);
    }
  });

  $('body').click(function(e){
    closeAll();
  });
};

bt.activeNav = function(){ /* SO */
  var loc = window.location.pathname,
      parts = loc.split('/'),
      strict = '',
      loose = '',
      matches = [],
      links = $('#app-west .sub a'),
      cssClass = 'active';


  if ( parts[parts.length - 1] === 'home' ) {
    $('.welcome-link').addClass(cssClass); 
    return;
  }

  // set strict check
  for (var si=0; si < parts.length; si+=1 ) { // combine url parts
    strict += parts[si];
    strict += ( si < parts.length - 1 ) ? '/' : ''; // add slash but not for last
  }

  // set loose check
  parts.splice(parts.length - 1,1); // remove last
  for (var li=0; li < parts.length; li+=1 ) { // combine url parts
    loose += parts[li];
    loose += ( li < parts.length - 1 ) ? '/' : ''; // add slash but not for last
  }

  // search for matches and add class
  links.each(function(){
    var el = $(this),
        href = el.attr('href');

    if ( href.indexOf(loose) === 0 ) {
      matches.push(el);
    }
  });

  if (matches.length > 1) {
    matches = [];
    links.each(function(){
      var el = $(this),
          href = el.attr('href');

      if ( href.indexOf(strict) === 0 ) {
        matches.push(el);
      }
    });
  }

  $(matches[0]).addClass(cssClass);
};

bt.zippies = function(){
  var nav_state = store.get('nav-state');

  $('.toplevel').click(function () {
    var state  = {};

    $('.parent').each(function () {
      var id = $(this).find('a.toplevel')[0].id;
      state[id] = $(this).hasClass('open');
    });

    store.set('nav-state', state);
  });

  $('li.support').each(function() {
    var $tab = $(this).find('a.toplevel');
    bt.openTab(null, $tab);
  });

  if (nav_state) {
    $.each(nav_state, function (el, opened) {
      if (opened) {
        bt.openTab(null, $("#"+el));
      }
    });
  }
};

spinner = function (e) {
  var self = $(this);

  setInterval(function() {
    var orig = parseInt(self.css('backgroundPosition').split(' ')[0], 10),
          x = (orig <= -285) ? 0 : orig - 95;

    self.css({'backgroundPosition': x + 'px 0'});
  }, 250);
};

bt.resizeScrollPane = function(){
  var jsp = $('.app-center-inner').data('jsp');
  jsp.reinitialise();
};

bt.tabbies = function(){
  $("ul.tabs li:first").addClass("current");
  $(".tabs-content div.pane").each(function(){ $(this).hide(); });
  $(".tabs-content div.pane:first").show();
  $("ul.tabs li a").click(function(e){
    e.preventDefault();

    $("ul.tabs li").removeClass("current");
    $(this).closest("li").addClass("current");

    var content = this.hash.slice(1);

    $(".tabs-content div.pane").each(function(){
      $(this).hide();
    });

    $("#" + content).show();
  });
};

bt.formies = function(){
  // Load Uniform on the following elements
  // $("select, input:checkbox, input:radio, input:file").uniform();
};

bt.expandies = function(){
  $("dl.expand dt").click(function(e){
    e.preventDefault();
    $(this).next("dd").slideToggle(200, function(){
      $(this).closest("dl").toggleClass("open");
    });
  });
};

bt.openTab = function (e, $tab) {
  $.fn.toggleTab = function () { this.slideToggle(80); };

  if ($tab === undefined) { $tab = $(this); }
  else { $.fn.toggleTab = function () { this.toggle(); }; }

  $tab.next().toggleTab();
  $tab.parent().toggleClass("open");
  return false;
};

bt.navigation = function() {
  var current_page = $('body').attr('class');
  $('li.parent a.toplevel').click(bt.openTab).next().hide();
};

bt.fluid = function() {
  //setup for fluid layout w/ fixed left column
  var windowSize = {
    height: 0,
    width: 0,
    headersHeight: 0,
    mainHeight: 0,
    contentBodyHeight: 0,
    contentBodyWidth: 0,
    leftNavHeight: 0,
    contentDetailsWidth: 0,
    setDimensions: function(){
      windowSize.height = $('body').height();
      windowSize.width = $('body').width();
      windowSize.headersHeight = $('#app-north').outerHeight();
      windowSize.mainHeight = windowSize.height - windowSize.headersHeight;
      //BODY HEIGHT
      windowSize.contentBodyHeight = windowSize.mainHeight; //TAKE AWAY APP-HEAD and APP-FOOTER IF PRESENT
      windowSize.contentBodyWidth = windowSize.width - $("#app-west").width();
      windowSize.contentBodyWidth = windowSize.contentBodyWidth;
      windowSize.leftNavHeight = windowSize.mainHeight;
      windowSize.updateSizes();
    },
    updateSizes: function(){
      $('#fluid').css('height',windowSize.mainHeight+'px');
      $('#app-center').css('height',(windowSize.contentBodyHeight)+'px');
      $('#app-center').find(".jspContainer").css('height',(windowSize.contentBodyHeight)+'px');
      //$('#app-center').css('width',(windowSize.contentBodyWidth)+'px');
      //$('#app-center').find(".jspContainer").css('width',(windowSize.contentBodyWidth)+'px');
      //$('#app-center').find(".jspPane").css('width',(windowSize.contentBodyWidth)+'px');
      $('#app-west').css('height',windowSize.leftNavHeight+'px');
    },
    init: function(){
      if($('.app-wrapper').length){
        //$('.app-center-inner').jScrollPane();
        windowSize.setDimensions();
        //$('.app-center-inner').jScrollPane();
        $(window).resize(function() {
          windowSize.setDimensions();
          //$('.app-center-inner').jScrollPane();
        });
      }
    }
  };
  windowSize.init();
};

bt.scrolled = function(){
  var pane = $('#app-center'),
      head = $('#app-north'),
      css = 'shadow',
      pos;

  pane.scroll(function(e){
    pos = $(this).scrollTop();
    if (pos === 0) {
      head.removeClass(css);
    } else {
      head.addClass(css);
    }
  });
};


$(function() { bt.init(); });
function BasicSearchBar() {
}

BasicSearchBar.prototype.setup = function() {
  $("#basic_search_input").placeholder();
};
function CollapsableTable(table_id) {
  this.table_id = table_id;
}

CollapsableTable.prototype.setup = function () {
  var level_count = 0;
  $(this.table_id + " tr").each (function(i) {
    if ($(this).hasClass("section_level1")) {

      // Add the link to top row
      level_count = level_count + 1;
      $(this).children("td:first").each (function(td) {
        $(this).prepend("<span id='collapse_button__expand_" + level_count + "'><a class='collapsable_link' href='#' onclick='CollapsableTable.expand(" + level_count + "); false;'><img src='/images/icons/plus.gif'></a><span> ");
        $(this).prepend("<span id='collapse_button__collapse_" + level_count + "'><a class='collapsable_link' href='#' onclick='CollapsableTable.collapse(" + level_count + "); false;'><img src='/images/icons/minus.gif'></a><span> ");
      });
      CollapsableTable.expand(level_count);
    } else {

      // Add a class to children rows
      $(this).addClass("collapse_" + level_count);
    }
  });
};

CollapsableTable.collapse = function(i) {
  $(".collapse_" + i).hide();
  $("#collapse_button__collapse_" + i).hide();
  $("#collapse_button__expand_" + i).show();
};

CollapsableTable.expand = function(i) {
  $(".collapse_" + i).show();
  $("#collapse_button__collapse_" + i).show();
  $("#collapse_button__expand_" + i).hide();
};
function CreditCardBillingAddressForm() {
}

CreditCardBillingAddressForm.prototype.setup = function() {
  var form = this;

  $("#billing_address_fields .address_source_option").change(function() { form.toggleAddressSource(); });
  form.toggleAddressSource();
};

CreditCardBillingAddressForm.prototype.toggleAddressSource = function() {
  var address_form = new AddressForm('#billing_address_fields');
  address_form.toggleAddressSource();
};
function CreditCardForm() {
}

CreditCardForm.prototype.setup = function() {
  var form = this;

  $(".credit_card_options_verify_card").togglesVisibilityOf(".credit_card_cvv_container");
  $(".credit_card_options_verify_card").togglesVisibilityOf(".verification_merchant_account_id_container");
};
function CustomerForm() {
}

CustomerForm.prototype.setup = function() {
  var form = this;

  form.setupPaymentMethodToggle();
  form.togglePaymentMethodSection();

  var credit_card_form = new CreditCardForm();
  credit_card_form.setup();
};

CustomerForm.prototype.setupPaymentMethodToggle = function() {
  var form = this;
  $("#toggleable_payment_method_present_false, #toggleable_payment_method_present_true").click(function() {
    form.togglePaymentMethodSection();
  });
};

CustomerForm.prototype.togglePaymentMethodSection = function() {
  var payment_method_present = $("#toggleable_payment_method_present_true").is(':checked');

  if (payment_method_present) {
    $("#payment_method_details").show();
    $("#payment_method_details :input").enable();
  } else {
    $("#payment_method_details").hide();
    $("#payment_method_details :input").disable();
  }
  var billing_address_form = new CreditCardBillingAddressForm();
  billing_address_form.toggleAddressSource();
};
function CustomerSearchForm() {
}

CustomerSearchForm.prototype.setup = function() {
  var form = this;

  var generic_advanced_search;
  generic_advanced_search = new AdvancedSearchForm();
  generic_advanced_search.setup();
  this.setupCreatedAtCheckbox();
};

CustomerSearchForm.prototype.setupCreatedAtCheckbox = function() {
  var form = this;
  $('input.status_at[type=checkbox]').each(function() {
    form.toggleCreatedAt(this);
  });
  $('input.status_at[type=checkbox]').click(function() {
    form.toggleCreatedAt(this);
  });
};

CustomerSearchForm.prototype.toggleCreatedAt = function(checkbox) {
  var container = $(checkbox).parents('.date_range');
  var text_fields = container.find('input[type=text]');
  var selects = container.find('select');
  var date_fields = container.find('.date_fields');
  if ($(checkbox).is(':checked')) {
    text_fields.enable();
    selects.enable();
    date_fields.show();
  } else {
    text_fields.disable();
    selects.disable();
    date_fields.hide();
  }
};
function DateRangeHelper() {
}

DateRangeHelper.prototype.setupDateHelpers = function() {
  $('.last_month_link').click(function() {
    var container = $(this).parents('.date_range');
    container.find('.search_min').val(new Date().beginningOfLastMonth().strftime("%m/%d/%Y"));
    container.find('.search_max').val(new Date().endOfLastMonth().strftime("%m/%d/%Y"));
  });

  $('.today_link').click(function() {
    var container = $(this).parents('.date_range');
    container.find('.search_min').val(new Date().strftime("%m/%d/%Y"));
    container.find('.search_max').val(new Date().strftime("%m/%d/%Y"));
  });

  $('.this_year_link').click(function() {
    var container = $(this).parents('.date_range');
    container.find('.search_min').val(new Date().beginningOfYear().strftime("%m/%d/%Y"));
    container.find('.search_max').val(new Date().endOfYear().strftime("%m/%d/%Y"));
  });

  $('.past_thirty_days').click(function() {
    var container = $(this).parents('.date_range');
    container.find('.search_min').val(new Date().daysAgo(30).strftime("%m/%d/%Y"));
    container.find('.search_max').val(new Date().endOfDay().strftime("%m/%d/%Y"));
  });
};

DateRangeHelper.prototype.setupDatePicker = function() {
  $('.datepicker').btDatepicker();
};

$.fn.btDatepicker = function(opts) {
  var options = {
    showOn: 'both',
    buttonImage: '/images/icon-cal.png',
    buttonImageOnly: true
  };
  if (opts !== undefined) {
    jQuery.extend(options, opts);
  }
  $(this).datepicker(options);
};
function DownloadsShow() {
  var interval, merchantId;
}

DownloadsShow.prototype.setup = function (merchantId) {
  var self = this;
  this.merchantId = merchantId;
  this.interval = setInterval(function () {
    self.pollForChanges.call(self);
  }, 3000);
};

DownloadsShow.prototype.hasPendingDownloads = function() {
  return $('div[data-complete=false]').length > 0;
};

DownloadsShow.prototype.updateDownloads = function() {
  $('#categorized-downloads').load('/merchants/' + this.merchantId + '/categorized_downloads');
};

DownloadsShow.prototype.pollForChanges = function() {
  if (this.hasPendingDownloads()) {
    this.updateDownloads();
  } else {
    clearInterval(this.interval);
  }
};
function EnableVaultDialog() {
}

EnableVaultDialog.prototype.setup = function() {
  var dialog = this;
  $('#enable_vault_dialog').dialog({autoOpen:false, width:325});
  $('#learn_more').click(function() { $('#enable_vault_dialog').dialog('open'); });
};
function ExportsFilterForm() {
}

ExportsFilterForm.prototype.setup = function() {
  $('.datepicker').btDatepicker();
};
function HostedPageForm() {
}

HostedPageForm.prototype.setup = function() {
  var form = this;
  $('.displayed-checkbox').bind('click', form.toggleRequired);
  $('.displayed-checkbox').each(form.toggleRequired);
  form.ensureChecked('#hosted_page_fields_credit_card_number_displayed');
  form.ensureChecked('#hosted_page_fields_credit_card_number_required');
  form.ensureChecked('#hosted_page_fields_expiration_date_displayed');
  form.ensureChecked('#hosted_page_fields_expiration_date_required');
  $(".colorpicker").miniColors();
  form.setupPreviewButton();
};

HostedPageForm.prototype.toggleRequired = function() {
  var checkbox = $(this);
  if (checkbox.attr('checked')) {
    checkbox.parent().find('.required-checkbox').enable();
  } else {
    checkbox.parent().find('.required-checkbox').attr('checked', false);
    checkbox.parent().find('.required-checkbox').disable();
  }
};

HostedPageForm.prototype.ensureChecked = function(id) {
  $(id + '_hidden').val('1');
  $(id).attr('checked', 'checked').disable();
};

HostedPageForm.prototype.setupPreviewButton = function() {
  $('#hosted_page_preview_link').click(function() {
    $.ajax({
      type: 'POST',
      url: $('.hosted-pages-form').attr('action'),
      data: $('.hosted-pages-form').serialize(),
      async: false
    });
  });
};
function IPRestrictionsForm() {
}

IPRestrictionsForm.prototype.setup = function() {
  $("#finished_editing_ip_restrictions_button").click(function() {
    $("input[name=finished_editing_ip_restrictions]").val("true");
  });
};

function MerchantAccountAllOptionExclusivity(element_id) {
  var form = $(element_id);
  var changeCallback = function (e, object) {
    if (!object.hasOwnProperty('selected')) { return; }
    var isAll = /^\s*$/.test(object.selected);
    var removeChoice = function () {
      var optionText = $(this).children('span').text();
      var optionTextIsAll = /^all\s*$/.test(optionText);
      if(isAll !== optionTextIsAll) {
        $(this).children('a').trigger('click');
      }
    };
    $('.chzn-choices .search-choice').each(removeChoice);
  };
  form.chosen().change(changeCallback);
}
function MerchantAccountForm(options) {
  this.options = options;
}

MerchantAccountForm.prototype.setup = function() {
  var form = this;

  $(".processor_settings_type_select").change(function() {
    form.processorSettingsChanged($(this));
  });

  $(".processor_settings_type_select").each(function(index, element) {
    form.processorSettingsChanged($(element));
  });

  form.wellsChanged($("#merchant_account_processor_settings_fields_wells"));
  form.wellsChanged($("#merchant_account_processor_settings_two_fields_wells"));
  $("#merchant_account_processor_settings_fields_wells, #merchant_account_processor_settings_two_fields_wells").change(function() {
    form.wellsChanged($(this));
  });

  $(".merchant_account_nab_fields .dynamic_descriptors_enabled").each(form.onNabDescriptorToggled).change(form.onNabDescriptorToggled);
};

MerchantAccountForm.prototype.onNabDescriptorToggled = function() {
  var descriptorCheckbox = $(this);
  var container = descriptorCheckbox.parents(".merchant_account_nab_fields");
  var descriptor_input_containers = $(".show_if_checked", container);
  if (descriptorCheckbox.is(":checked")) {
    descriptor_input_containers.show();
  } else {
    descriptor_input_containers.hide();
    descriptor_input_containers.find('input').val("");
  }
};


MerchantAccountForm.prototype.wellsChanged = function(wellsCheckbox) {
  var container = wellsCheckbox.parents(".merchant_account_first_data_fields");

  if (container.is(":visible")) {
    if (wellsCheckbox.is(":checked")) {
      $(".hide_if_wells", container).hide();
    } else {
      $(".hide_if_wells", container).show();
    }
  }
};

MerchantAccountForm.prototype.processorSettingsChanged = function(select) {
  var scope = select.parents(".processor_settings_wrapper");
  var value = select.val();

  scope.find(".processor_fields").hide();
  scope.find(".processor_fields :input").disable();

  var processorName = select.val().split("::")[0];
  var processorSettingsFields = scope.find(".merchant_account_" + this.lowercaseProcessorName(processorName) + "_fields");

  if (typeof(processorSettingsFields) !== "undefined") {
    processorSettingsFields.show();
    processorSettingsFields.find(":input").enable();
    var weightField = processorSettingsFields.find("#merchant_account_processor_settings_fields_weight");

    if (this.options.newRecord === true) {
      if (weightField.length > 0 && weightField.val() === "") {
        weightField.val("100");
      }
    }
  }
};

MerchantAccountForm.prototype.lowercaseProcessorName = function(processorName) {
  var mapping = {
    "FakeProcessor"      : "fake_processor",
    "FirstData"          : "first_data",
    "FirstDataNashville" : "ipcommerce",
    "MerchanteSolutions" : "merchante_solutions",
    "WorldPay"           : "world_pay"
  };

  return mapping[processorName] || processorName.toLowerCase();
};
function MerchantForm() {}

MerchantForm.prototype.setup = function() {
  var form = this;

  $('#merchant_master_card_secure_code_enabled').click(function () {
    form.masterCardSecureCodeToggled();
  });

  form.masterCardSecureCodeToggled();
};

MerchantForm.prototype.masterCardSecureCodeToggled = function () {
  if ($('#merchant_master_card_secure_code_enabled').attr('checked')) {
    this.enableMasterCardSecureCodeDetailFields();
  } else {
    this.disableMasterCardSecureCodeDetailFields();
  }
};

MerchantForm.prototype.enableMasterCardSecureCodeDetailFields = function () {
  $('#master_card_secure_code_details').show();
};

MerchantForm.prototype.disableMasterCardSecureCodeDetailFields = function () {
  $('#master_card_secure_code_details').hide();
  $('#merchant_master_card_secure_code_provider').val('');
  $('#merchant_master_card_secure_code_aav').val('');
};
function ModificationForm() {
}

ModificationForm.prototype.setup = function() {
  var form = this;

  this.toggleableDurationChanged();

  $("#toggleable_duration_never").click(function() {
    form.toggleableDurationChanged();
  });

  $("#toggleable_duration_specified").click(function() {
    form.toggleableDurationChanged();
  });
};

ModificationForm.prototype.toggleableDurationChanged = function() {
  if ($("#toggleable_duration_never").is(":checked")) {
    $("#modification_number_of_billing_cycles").val("");
    $("#modification_number_of_billing_cycles").disable();
  }
  else {
    $("#modification_number_of_billing_cycles").enable();
  }
};

function MultiSelectDialog(fieldName) {
  this.fieldName = fieldName;
  this.wrapperDiv = "#" + fieldName + "_multi_select";
  this.dialogId = "#" + fieldName + "_multi_select_dialog";
}

MultiSelectDialog.prototype.setup = function() {
  this.setupDialog();
  this.copySelectedValuesFromDialog();
  this.setupAllCheckbox();
};

MultiSelectDialog.prototype.setupDialog = function() {
  var form = this;
  $(form.dialogId).dialog({
    autoOpen: false, model: true, scroll: true,
    width: 350, height: 350,
    buttons: {
      "Cancel": function() { $(form.dialogId).dialog("close"); },
      "OK": function() { form.selectValuesFromDialog(); }
    }
  });
  $(form.wrapperDiv).find(".multi_select_dialog_link").click(function() {
    $(form.dialogId).dialog("open");
    return false;
  });
};

MultiSelectDialog.prototype.setupAllCheckbox = function() {
  var form = this;
  var allCheckbox = $(form.wrapperDiv).find(".multi_select_all_checkbox");

  allCheckbox.click(function() { form.allCheckboxChecked(); });

  if ($(form.wrapperDiv).find(".multi_select_selected_values").children().length > 0) {
    allCheckbox.uncheck();
    allCheckbox.removeAttr("disabled");
  }
  else {
    allCheckbox.check();
    allCheckbox.attr("disabled", "disabled");
  }
};

MultiSelectDialog.prototype.copySelectedValuesFromDialog = function() {
  var form = this;

  $(form.wrapperDiv).find(".multi_select_selected_values").empty();
  $.each($(form.dialogId + " :checked"), function(index, element) {
    var value, name, div, hidden;
    value = $(element).val();
    name = $(element).parent().find("." + form.fieldName).text();
    div = $("<div></div>");
    div.text(name);
    div.prepend("<input type=\"checkbox\" disabled=\"disabled\" checked=\"checked\" />");
    hidden = $("<input type=\"hidden\" name=\"search[" + form.fieldName +"][]\" />");
    hidden.val(value);
    hidden.appendTo(div);
    $(form.wrapperDiv).find(".multi_select_selected_values").append(div);
  });
};

MultiSelectDialog.prototype.allCheckboxChecked = function() {
  var form = this;
  $(form.wrapperDiv).find(".multi_select_all_checkbox").attr("disabled", "disabled");
  $(form.wrapperDiv).find(".multi_select_selected_values").empty();
};

MultiSelectDialog.prototype.selectValuesFromDialog = function() {
  var form = this;
  form.copySelectedValuesFromDialog();
  form.setupAllCheckbox();
  $(form.dialogId).dialog("close");
};
function OptionalDateRangeHelper() {
}

OptionalDateRangeHelper.prototype.setup = function() {
  var form = this;
  $('input.status_at[type=checkbox]').each(function() {
    form.toggle(this);
  });
  $('input.status_at[type=checkbox]').click(function() {
    form.toggle(this);
  });
};

OptionalDateRangeHelper.prototype.toggle = function(checkbox) {
  var container = $(checkbox).parents('.date_range');
  var text_fields = container.find('input[type=text]');
  var selects = container.find('select');
  var date_fields = container.find('.date_fields');
  if ($(checkbox).is(':checked')) {
    text_fields.enable();
    selects.enable();
    date_fields.show();
  } else {
    text_fields.disable();
    selects.disable();
    date_fields.hide();
  }
};

function PlanForm() {
}

PlanForm.prototype.setup = function() {
  $("#toggleable_end_date_never").click(function() {
    $("#plan_number_of_billing_cycles").val("");
    $("#plan_number_of_billing_cycles").disable();
  });

  $("#toggleable_end_date_after").click(function() {
    $("#plan_number_of_billing_cycles").enable();
  });

  this.setupModificationDialog("add_on");
  this.setupModificationDialog("discount");
  this.setupModificationRemoveLinks("add_on");
  this.setupModificationRemoveLinks("discount");
  this.setupFirstBillDate();
  this.setupTrialPeriod();
};

PlanForm.prototype.toggleFirstBillDate = function() {
  var checked_id = $(".first_bill_date_radio:checked").attr("id");

  if (checked_id === "toggleable_first_bill_date_specified") {
    $("#immediately").disable();
    $("#plan_billing_day_of_month").enable();
  } else {
    $("#plan_billing_day_of_month").disable();
    $("#immediately").enable();
  }
};

PlanForm.prototype.toggleTrialPeriod = function() {
  var form = this;

  if ($("#plan_trial_period").is(":checked")) {
    $("#first_bill_date_container").hide();
    $("#toggleable_first_bill_date_immediately").click();
    form.toggleFirstBillDate();
    $("#immediately").disable();
  } else {
    $("#first_bill_date_container").show();
    $("#immediately").enable();
  }
};

PlanForm.prototype.setupFirstBillDate = function() {
  var form = this;

  $("#toggleable_first_bill_date_specified").click(function() {
    form.toggleFirstBillDate();
  });

  $("#toggleable_first_bill_date_immediately").click(function() {
    form.toggleFirstBillDate();
  });

  form.toggleFirstBillDate();
};

PlanForm.prototype.setupModificationDialog = function(kind) {
  var form = this;

  $("#add_" + kind + "_dialog").dialog({
    autoOpen: false, model: true, scroll: true,
    width: 350, height: 350,
    buttons: {
      "Cancel": function() { $("#add_" + kind + "_dialog").dialog("close"); },
      "OK": function() { form.selectModificationsFromDialog(kind); }
    }
  });

  $("#select_" + kind + "_link").click(function() {
    $("tr." + kind).each(function() {
      $("#dialog_row_" + $(this).attr("id")).hide();
    });
    $("#add_" + kind + "_dialog").dialog("open");
    return false;
  });
};

PlanForm.prototype.setupTrialPeriod = function() {
  var form = this;

  $("#plan_trial_period").togglesVisibilityOf($("#plan_trial_duration"));
  $("#plan_trial_period").click(function() {
    form.toggleTrialPeriod();
  });

  form.toggleTrialPeriod();
};

PlanForm.prototype.selectModificationsFromDialog = function(kind) {
  var form = this;

  $("#add_" + kind + "_dialog :checked").each(function(index, element) {
    var token = $(element).val();
    form.addModificationToForm(kind, token);
  });
  $("#add_" + kind + "_dialog").dialog("close");
  $("#add_" + kind + "_dialog input").uncheck();
};

PlanForm.prototype.addModificationToForm = function(kind, token) {
  var content = $("#modification_template_" + token).html();
  content = '<tr style="display: none" class="' + kind + '" id="' + token + '">' + content + '</tr>';
  $("#plan_" + kind + "s tbody").append(content);

  var remove_link = $("#plan_" + kind + "s tr:last a." + kind + "_remove_link");
  var new_remove_link_id = remove_link.attr("id").replace("template_", "");
  remove_link.attr("id", new_remove_link_id);

  $("#plan_" + kind + "s tr:last :input").enable();
  $("#plan_" + kind + "s tr:last").fadeIn(500);
};

PlanForm.prototype.setupModificationRemoveLinks = function (kind) {
  $('.' + kind + '_remove_link').live('click', function() {
    $(this).parents("tr").fadeOut(500, function() {
      $("#dialog_row_" + $(this).attr("id")).show();
      $(this).remove();
    });
    return false;
  });
};
function PlanShow() {
}

PlanShow.prototype.setup = function () {
  $(".add_on_dialog, .discount_dialog").dialog({
    autoOpen: false, model: true, scroll: true,
    width: 550, height: 350,
    buttons: {
      "OK": function() { $(this).dialog("close"); }
    }
  });

  $('a.show_add_ons').click(function() {
    var id = $(this).attr("href").replace('#', '');
    $("#add_on_history_" + id + "_dialog").dialog("open");
    return false;
  });

  $('a.show_discounts').click(function() {
    var id = $(this).attr("href").replace('#', '');
    $("#discount_history_" + id + "_dialog").dialog("open");
    return false;
  });
};
function PurgeSandboxDataForm() {
}

PurgeSandboxDataForm.prototype.setup = function() {
  $('.purge_sandbox_data_link').click(function(event) { $('#purge_sandbox_data_form').submit(); });
  var dialog = new SubmitConfirmationDialog("purge_sandbox_data_dialog", "purge_sandbox_data_form");
  dialog.setup();
};
function RecurringBillingOptionsForm() {
  this.$el = $("#dunning-management-options");
  this.$check = $("#merchant_options_dunning_management_enabled");
}

RecurringBillingOptionsForm.prototype.setup = function () {
  var form = this;
  this.$check.click(function () {
    form.toggleDunningManagementOptions();
  });
  form.toggleDunningManagementOptions();
};

RecurringBillingOptionsForm.prototype.toggleDunningManagementOptions = function () {
  if (this.$check.is(":checked")) {
    this.$el.show();
    this.$el.find(":input").removeAttr('disabled');
  } else {
    this.$el.hide();
    this.$el.find(":input").attr('disabled', 'disabled');
  }
};
function ReportForm() {
}

ReportForm.prototype.setup = function() {
  var date_range_helper = new DateRangeHelper();
  date_range_helper.setupDatePicker();
  date_range_helper.setupDateHelpers();
};
function RoleForm() {
}

RoleForm.prototype.setup = function() {
  var form = this;
  $('.right_group_checkbox').click(function() { form.rightGroupChanged(this); });
  $('.right_checkbox').click(function() { form.rightChanged(); });
  $('.right_group_toggle').click(function() { form.toggleGroupClicked(this); return false; });
  form.checkRightGroupsIfAllRightsChecked();
};

RoleForm.prototype.checkRightGroupsIfAllRightsChecked = function() {
  var form = this;
  $.each($(".right_group"), function(index, element) {
    var right_group_checkbox = $(element).find(".right_group_checkbox");
    if (form.areAllRightsCheckedForGroup($(element))) {
      right_group_checkbox.check();
    }
    else {
      right_group_checkbox.uncheck();
    }
  });
};

RoleForm.prototype.expandOrCollapseRightGroups = function() {
  var form = this;
  $.each($(".right_group"), function(index, element) {
    var group = $(element);
    if (form.areAnyRightsCheckedForGroup(group)) {
      form.expandGroup(group);
    }
    else {
      form.collapseGroup(group);
    }
  });
};

RoleForm.prototype.toggleGroupClicked = function(element) {
  var group = $(element).closest(".right_group");
  if (group.find(".right_group_children").is(':visible')) {
    this.collapseGroup(group);
  }
  else {
    this.expandGroup(group);
  }
};

RoleForm.prototype.expandGroup = function(group) {
  group.find('.collapse').show();
  group.find('.expand').hide();
  group.find('.right_group_children').show();
};

RoleForm.prototype.collapseGroup = function(group) {
  group.find('.collapse').hide();
  group.find('.expand').show();
  group.find('.right_group_children').hide();
};

RoleForm.prototype.areAllRightsCheckedForGroup = function(groupElement) {
  var total_number_of_checkboxes = groupElement.find(".right_group_children input.right_checkbox").length;
  var number_of_checkboxes_checked = groupElement.find(".right_group_children input.right_checkbox:checked").length;
  return (total_number_of_checkboxes === number_of_checkboxes_checked);
};

RoleForm.prototype.areAnyRightsCheckedForGroup = function(group) {
  var number_of_checkboxes_checked = group.find(".right_group_children input.right_checkbox:checked").length;
  return (number_of_checkboxes_checked > 0);
};

RoleForm.prototype.rightGroupChanged = function(rightGroupCheckbox) {
  var group = $(rightGroupCheckbox).closest(".right_group");
  var checkedValue = $(rightGroupCheckbox).is(":checked");
  group.find(".right_checkbox").attr("checked", checkedValue);
};

RoleForm.prototype.rightChanged = function() {
  this.checkRightGroupsIfAllRightsChecked();
};

function SessionInactivityDialog() {}

SessionInactivityDialog.prototype.setup = function(sessionTimeoutInMinutes) {
  var dialog = this;
  this.sessionTimeoutInMinutes = sessionTimeoutInMinutes;

   $('#session_inactivity_dialog').dialog( { autoOpen: false, width: 325, modal: true , closeOnEscape: false } );
   $('#session_inactivity_dialog').closest(".ui-dialog").find('.ui-dialog-titlebar-close').css("display", "none");
   $("#session_inactivity_dialog_form").submit(function() { dialog.submitForm(); return false; });

   $('#session_inactivity_logout').click(function() {
     dialog.doLogout();
   });
   dialog.setTimeout();
};

SessionInactivityDialog.prototype.submitForm = function() {
  var dialog, password, authenticityToken, postTo;
  dialog = this;
  password = $("#session_inactivity_dialog_form input[id=user_password]").val();
  authenticityToken = $("input[name=authenticity_token]").val();
  postTo = $("#session_inactivity_dialog_form").attr("action");
  $.post(
    postTo,
    {
      "authenticity_token": authenticityToken,
      "user_password": password
    },
    function(response) { dialog.processResponse(response); }
  );

  $("#user_password").val("");
};

SessionInactivityDialog.prototype.processResponse = function(response) {
  if (response["success?"]) {
    $('#session_inactivity_dialog').dialog("close");
    this.setTimeout();
  } else if (response["logout?"]) {
    this.doLogout();
  } else {
    $('#ui-dialog-title-session_inactivity_dialog').html('Invalid password. Please try again');
  }
};

SessionInactivityDialog.prototype.doLogout = function() {
  $('#session_inactivity_dialog').dialog("close");
  window.location = "/logout";
};

SessionInactivityDialog.prototype.setTimeout = function() {
  var dialog = this;
  window.clearTimeout(dialog.timeout);
  window.setTimeout(function() {
    if ($("#is_braintree_user").length > 0) {
      $('#session_inactivity_dialog').html('Your session has expired due to inactivity. You must log in through Braintree Login.');
    }
    $('#session_inactivity_dialog').dialog('open');
    $('.ui-widget-overlay').css({ opacity:0.99 });
    dialog.timeout = window.setTimeout(function() {
      window.location = "/logout";
    }, 900000);
  }, dialog.sessionTimeoutInMinutes * 60 * 1000);
};
function SettlingTransactionsIndex(publicIds) {
  this.publicIds = publicIds;
}

SettlingTransactionsIndex.prototype.setup = function() {
  $('.first-data-response-description').each(function() {
    $(this).dialog({autoOpen: false, model: true, scroll: true});

  });
  $('.first-data-response-code').click(function() {
    var code = $(this).text();
    $('#first-data-response-code-' + code + '-dialog').dialog('open');
  });

  $.each(this.publicIds, function(i, publicId) {
    var voidDialog = new SubmitConfirmationDialog(
      "void_" + publicId + "_dialog",
      "void_" + publicId + "_form"
    );
    voidDialog.setup();

    var resubmitDialog = new SubmitConfirmationDialog(
      "resubmit_" + publicId + "_dialog",
      "resubmit_" + publicId + "_form"
    );
    resubmitDialog.setup();
  });
};
function ShowRoleView() {
}

ShowRoleView.prototype.setup = function() {
  this.hideEmptyGroups();
};

ShowRoleView.prototype.hideEmptyGroups = function() {
  $.each($('.right_group'), function(index, rightGroup) {
    if ($(rightGroup).find('li').length === 0) {
      $(rightGroup).hide();
    }
  });
};

function SubmitAlertDialog(dialog_div, form) {
  this.dialog_div = dialog_div;
  this.form = '#' + form + ', .' + form;
}

SubmitAlertDialog.prototype.setup = function() {
  var dialog = this;
  this.really_submit = false;
  $("#" + this.dialog_div).dialog( { autoOpen:false, width:350, height:240,
                                     modal:true, scroll:false});
  $(this.form).submit(function() { return dialog.confirm(); });
};

SubmitAlertDialog.prototype.confirm = function() {
  if (!this.really_submit) {
    $("#" + this.dialog_div).dialog('open');
    return false;
  }
  else {
    return true;
  }
};
function SubmitConfirmationDialog(dialog_div, form, preConfirmFunction, preSubmitFunction) {
  this.dialog_div = dialog_div;
  this.form = '#' + form + ', .' + form;
  this.preConfirmFunction = preConfirmFunction;
  this.preSubmitFunction = preSubmitFunction;
}

SubmitConfirmationDialog.prototype.setup = function() {
  var dialog = this;
  this.really_submit = false;
  $("#" + this.dialog_div).dialog( { autoOpen:false, width:350, height:240,
                                     modal:true, scroll:false,
                                     buttons: {'Yes': function (){ dialog.continueFn(); },
                                               'No': function (){ dialog.cancelFn(); }} });
  $(this.form).submit(function() { return dialog.confirm(); });
};

SubmitConfirmationDialog.prototype.confirm = function() {
  if (!this.really_submit && this.preConfirmFunction) {
    this.really_submit = this.preConfirmFunction();
  }

  if (!this.really_submit) {
    $("#" + this.dialog_div).dialog('open');
    return false;
  }
  else {
    if (this.preSubmitFunction) {
      this.preSubmitFunction();
    }
    return true;
  }
};

SubmitConfirmationDialog.prototype.continueFn = function(){
  if (this.preSubmitFunction) {
    this.preSubmitFunction();
  }
  this.really_submit = true;
  $(this.form).submit();
  this.really_submit = false;
  return true;
};

SubmitConfirmationDialog.prototype.cancelFn = function() {
  $("#" + this.dialog_div).dialog('close');
  this.really_submit = false;
};
function SubscriptionForm(plan_trial_info, plan_prices, new_subscription, show_trial_period, currency_by_merchant_account_id, plans_by_merchant_account_id, end_date_by_plan, plan_add_ons, plan_discounts, proration_message_path, plan_billing_days, initial_plan_id) {
  this.plan_trial_info = plan_trial_info;
  this.plan_prices = plan_prices;
  this.new_subscription = new_subscription;
  this.show_trial_period = show_trial_period;
  this.currency_by_merchant_account_id = currency_by_merchant_account_id;
  this.plans_by_merchant_account_id = plans_by_merchant_account_id;
  this.end_date_by_plan = end_date_by_plan;
  this.plan_add_ons = plan_add_ons;
  this.plan_discounts = plan_discounts;
  this.proration_message_path = proration_message_path;
  this.plan_billing_days = plan_billing_days;
  this.initial_plan_id = initial_plan_id;
}

SubscriptionForm.prototype.setup = function() {
  var form = this;

  $('#subscription_options_prorate_charges').click(function () {
    if ($(this).is(":checked")) {
      $('#proration_options').show();
    } else {
      $('#proration_options').hide();
    }
  });

  $('.datepicker').btDatepicker({minDate: '-0d'});

  $('#subscription_merchant_account_id').change(function() { form.merchantAccountChanged(true); });
  this.merchantAccountChanged(this.new_subscription);

  $("#subscription_trial_period").togglesVisibilityOf($("#subscription_trial_duration_info"));

  form.prepopulatePlan();

  $("#subscription_plan_id").change(function() {
    form.updatePlan(true);
  });

  $("#add_add_on_select").change(function () {
    form.addModification("add_on");
    $("#add_add_on_select").val("");
    return false;
  });

  $("#add_discount_select").change(function () {
    form.addModification("discount");
    $("#add_discount_select").val("");
    return false;
  });

  form.setupModificationRemoveLinks("add_on");
  form.setupModificationRemoveLinks("discount");
  form.setupEndDateRadioButtons();
  form.setupModificationNeverExpiresButtons();

  $('.modification_never_expires').each(function() {
    form.clickNeverExpires($(this));
  });

  if (form.new_subscription) {
    form.prepopulatePriceField();
    form.prepopulateModifications();
    form.prepopulateEndDateFields();
    if (form.show_trial_period) {
      form.prepopulateTrialFields();
      form.prepopulateFirstBillDate();
    }
  }

  form.setupModificationDialog("add_on");
  form.setupModificationDialog("discount");

  form.setupFirstBillDate();
  form.setupTrialPeriod();

  if (this.proration_message_path) {
    var submitConfirmationDialog = new SubmitConfirmationDialog(
      "confirm_proration_dialog",
      "subscription_form",
      function() { return form.fetchProrationMessage(); },
      function() {
        $("#update_subscription_btn").attr("value", "Please wait...");
        $("#update_subscription_btn").disable();
        form.copyStopProrationConfirmation(); }
    );
    submitConfirmationDialog.setup();
  }
};

SubscriptionForm.prototype.setupFirstBillDate = function() {
  var form = this;

  $(".first_bill_date_radio").click(function() {
    form.updateFirstBillDate();
  });

  form.updateFirstBillDate();
};

SubscriptionForm.prototype.updateFirstBillDate = function() {
  var checked_id = $(".first_bill_date_radio:checked").attr("id");

  if (checked_id === "toggleable_first_bill_date_specified_day") {
    $("#immediately").disable();
    $("#subscription_first_billing_date").disable();
    $("#subscription_first_billing_date_container img.ui-datepicker-trigger").hide();
    $("#subscription_billing_day_of_month").enable();
  } else if (checked_id === "toggleable_first_bill_date_specified_date"){
    $("#immediately").disable();
    $("#specific").disable();
    $("#subscription_billing_day_of_month").disable();
    $("#subscription_first_billing_date").enable();
    $("#subscription_first_billing_date_container img.ui-datepicker-trigger").show();
  } else {
    $("#specific").disable();
    $("#subscription_billing_day_of_month").disable();
    $("#subscription_first_billing_date").disable();
    $("#subscription_first_billing_date_container img.ui-datepicker-trigger").hide();
    $("#immediately").enable();
  }
};

SubscriptionForm.prototype.setupModificationRemoveLinks = function (kind) {
  var form = this;
  $('.add_' + kind + '_remove_link').live('click', function() {
    $(this).parents("tr").fadeOut(500, function() {
      $("#dialog_" + $(this).attr("id")).show();
      $(this).remove();
    });
    return false;
  });

  $('.update_' + kind + '_remove_link').live('click', function() {
    var public_id = $(this).attr('id').substring(7);

    $(this).parents("tr").fadeOut(500, function() {
      $("#dialog_" + $(this).attr("id")).show();
      $(this).remove();
    });

    form.addModificationRemoveFormRow(kind, public_id);

    return false;
  });
};

SubscriptionForm.prototype.setupEndDateRadioButtons = function() {
  $("#subscription_never_expires_true").click(function() {
    $("#subscription_number_of_billing_cycles").disable();
    $("#subscription_number_of_billing_cycles").val("");
  });

  $("#subscription_never_expires_false").click(function() {
    $("#subscription_number_of_billing_cycles").enable();
  });
};

SubscriptionForm.prototype.setupModificationNeverExpiresButtons = function() {
  var form = this;
  $('.modification_never_expires').live('click', function() {
    form.clickNeverExpires($(this));
  });
};

SubscriptionForm.prototype.addModification = function (kind) {
  var selected_token = $("#add_" + kind + "_select").val();
  this.addModificationToForm(kind, selected_token);
};

SubscriptionForm.prototype.clickNeverExpires = function(checkbox) {
  var parent = checkbox.parents(".modifications .expiration_fields");
  var expiration_input = parent.find("input[type=text]");
  if (checkbox.is(':checked')) {
    expiration_input.val("");
    expiration_input.disable();
  } else {
    expiration_input.enable();
  }
};

SubscriptionForm.prototype.setupTrialPeriod = function() {
  var form = this;

  $("#subscription_trial_period").togglesVisibilityOf($("#subscription_trial_duration_info"));
  $("#subscription_trial_period").click(function() {
    form.updateTrialPeriod();
  });

  form.updateTrialPeriod();
};

SubscriptionForm.prototype.updateTrialPeriod = function() {
  var form = this;
  var checked_id = $(".first_bill_date_radio:checked").attr("id");

  if ($("#subscription_trial_period").is(":checked"))
  {
    $("#first_bill_date_container").hide();
    $("#toggleable_first_bill_date_immediately").click();
    form.updateFirstBillDate();
    $("#immediately").disable();
  }
  else
  {
    if (checked_id === 'toggleable_first_bill_date_immediately')
    {
      $('#immediately').enable();
    }
    $("#first_bill_date_container").show();
  }
};

SubscriptionForm.prototype.updatePlan = function(do_price_update) {
  this.prepopulateTrialFields();
  this.prepopulateFirstBillDate();
  this.prepopulateEndDateFields();
  this.prepopulateModifications();
  this.updateTrialPeriod();
  if (do_price_update === true)
  {
    this.prepopulatePriceField();
  }
};

SubscriptionForm.prototype.plan_id = function() {
  return $("#subscription_plan_id").val();
};

SubscriptionForm.prototype.prepopulatePlan = function () {
  if (this.initial_plan_id !== null) {
    $("#subscription_plan_id").val(this.initial_plan_id);
  }
};

SubscriptionForm.prototype.prepopulateModifications = function () {
  var form = this;
  var plan_id = this.plan_id();
  var add_on_tokens = this.plan_add_ons[plan_id];
  var discount_tokens = this.plan_discounts[plan_id];
  if (this.new_subscription) {
    $("#subscription_add_ons tbody tr").remove();
    $.each(add_on_tokens, function (index, token) {
      form.addModificationToForm("add_on", token);
    });

    $("#subscription_discounts tbody tr").remove();
    $.each(discount_tokens, function (index, token) {
      form.addModificationToForm("discount", token);
    });
  }
};

SubscriptionForm.prototype.setupModificationDialog = function(kind) {
  var form = this;
  $("#add_" + kind + "_dialog").dialog({
    autoOpen: false, model: true, scroll: true,
    width: 350, height: 350,
    buttons: {
      "Cancel": function() { $("#add_" + kind + "_dialog").dialog("close"); },
      "OK": function() { form.selectModificationsFromDialog(kind); }
    }
  });
  $("#select_" + kind + "_link").click(function() {
    $("tr." + kind).each(function() {
      $("#dialog_" + $(this).attr("id")).hide();
    });
    $("#add_" + kind + "_dialog").dialog("open");
    return false;
  });
};

SubscriptionForm.prototype.selectModificationsFromDialog = function(kind) {
  var form = this;

  $.each($("#add_" + kind + "_dialog :checked"), function(index, element) {
    var token = $(element).val();
    form.addModificationToForm(kind, token);
  });
  $("#add_" + kind + "_dialog").dialog("close");
  $("#add_" + kind + "_dialog input").uncheck();
};

SubscriptionForm.prototype.addModificationToForm = function(kind, token) {
  var content = $("#modification_template_" + token).html();
  $("#subscription_" + kind + "s tbody").append("<tr class='" + kind + "' id='row_" + token + "' style='display:none'>" + content + "</tr>");
  $("#subscription_" + kind + "s tr:last :input").enable();
  var form = this;
  $("#subscription_" + kind + "s tr:last").find('.modification_never_expires').each(function() {
    form.clickNeverExpires($(this));
  });
  $("#subscription_" + kind + "s tr:last").fadeIn(500);
};

SubscriptionForm.prototype.addModificationRemoveFormRow = function(kind, public_id) {
  var content = '<input type="hidden" value="' + public_id + '" name="subscription[' + kind + 's][remove][]"/>';
  $("#remove_" + kind + "_modifications").append(content);
};

SubscriptionForm.prototype.prepopulateFirstBillDate = function() {
  var form = this;
  var plan_id = this.plan_id();
  var billing_day = this.plan_billing_days[plan_id];

  if (billing_day !== null) {
    $("#subscription_first_billing_date").val("");
    $("#subscription_billing_day_of_month").val(billing_day);
    $("#toggleable_first_bill_date_specified_day").click();
    form.updateFirstBillDate();
  } else {
    $("#subscription_first_billing_date").val("");
    $("#subscription_billing_day_of_month").val("");
    $("#toggleable_first_bill_date_immediately").click();
  }
};

SubscriptionForm.prototype.prepopulateTrialFields = function() {
  var plan_id = this.plan_id();
  var trial_info = this.plan_trial_info[plan_id];

  if (trial_info && trial_info.trial_period) {
    $("#subscription_trial_period").check();
    $("#subscription_trial_duration").val(trial_info.trial_duration);
    $("#subscription_trial_duration_unit").val(trial_info.trial_duration_unit);
    $("#first_bill_date_container").hide();
  }
  else {
    $("#subscription_trial_period").uncheck();
    $("#subscription_trial_duration").val("");
    $("#subscription_trial_duration_unit").val("");
    $("#first_bill_date_container").show();
  }
  $("#subscription_trial_period").change();
};

SubscriptionForm.prototype.prepopulateEndDateFields = function() {
  var plan_id = this.plan_id();
  var number_of_billing_period_cycles = this.end_date_by_plan[plan_id];

  if (this.new_subscription) {
    if (number_of_billing_period_cycles === null) {
      $("#subscription_never_expires_true").click();
    } else {
      $("#subscription_never_expires_false").click();
      $("#subscription_number_of_billing_cycles").val(number_of_billing_period_cycles);
    }
  }
};

SubscriptionForm.prototype.prepopulatePriceField = function() {
  var plan_id = this.plan_id();
  var plan_price = this.plan_prices[plan_id];

  $("#subscription_price").val(plan_price || "");
};

SubscriptionForm.prototype.merchantAccountChanged = function(should_update_plan) {
  if ($('#subscription_merchant_account_id').length === 0) {
    return;
  }

  var merchant_account_id = $('#subscription_merchant_account_id').val();
  $("#currency_iso_code").text(this.currency_by_merchant_account_id[merchant_account_id]);

  var current_plan_id = this.plan_id();

  $('#subscription_plan_id option').remove();
  $('#subscription_plan_id').addOption(this.plans_by_merchant_account_id[merchant_account_id]);

  var current_plan_exists_for_merchant_account = $('#subscription_plan_id option[value='+current_plan_id+']').length;
  if (current_plan_exists_for_merchant_account > 0)
  {
    $('#subscription_plan_id').val(current_plan_id);
  }

  if (should_update_plan) {
    var do_price_update = (current_plan_id !== this.plan_id());
    this.updatePlan(do_price_update);
  }
};

SubscriptionForm.prototype.fetchProrationMessage = function() {
  var dont_display_dialog = false;

  $.ajax({
    type: 'PUT',
    async: false,
    url: this.proration_message_path,
    data: $("#subscription_form").serialize(),
    success: function(response) {
      if (response === "") {
        dont_display_dialog = true;
      } else {
        $('#confirm_proration_dialog .message').html(response);
      }
    },
    error: function() { dont_display_dialog = true; }
  });

  return dont_display_dialog;
};

SubscriptionForm.prototype.copyStopProrationConfirmation = function() {
  if ($('#stop_proration_confirmation').is(':checked')) {
    var input = $('#stop_proration_confirmation').clone();
    input.attr('type', 'hidden');
    $('#subscription_form').prepend(input);
  }
};
function SubscriptionSearchForm() {
}

SubscriptionSearchForm.prototype.setup = function() {
  var form = this;

  var generic_advanced_search = new AdvancedSearchForm();
  generic_advanced_search.setup();

  var plan_dialog = new MultiSelectDialog('plan_id');
  plan_dialog.setup();

  var optional_date_range_helper = new OptionalDateRangeHelper();
  optional_date_range_helper.setup();
};
function SubscriptionShow() {
}

SubscriptionShow.prototype.setup = function () {
  var dialog = new SubmitConfirmationDialog("subscription_cancel_form_dialog","subscription_cancel_form");
  dialog.setup();

  $(".add_on_dialog, .discount_dialog").dialog({
    autoOpen: false, model: true, scroll: true,
    width: 550, height: 350,
    buttons: {
      "OK": function() { $(this).dialog("close"); }
    }
  });

  $('a.show_add_ons').click(function() {
    var id = $(this).attr("href").replace('#', '');
    $("#add_on_history_" + id + "_dialog").dialog("open");
    return false;
  });

  $('a.show_discounts').click(function() {
    var id = $(this).attr("href").replace('#', '');
    $("#discount_history_" + id + "_dialog").dialog("open");
    return false;
  });
};
function confirmCreditTransaction(elements) {
  function submitCredit() {
    if ($('#stop_credit_confirmation').is(':checked')) {
      var input = $('#stop_credit_confirmation').clone();
      input.attr('type', 'hidden');
      $('#transaction_form').prepend(input);
    }
    $('#transaction_form').submit();
  }

  function submitSubscriptionRenewal() {
    $('#transaction_form').submit();
  }

  function closeCreditDialog() {
    $('#credit_dialog').dialog('close');
  }

  function closeRenewalDialog() {
    $('#subscription_renewal_dialog').dialog('close');
  }

  function confirm_subscription_renewal() {
    $('#subscription_renewal_dialog').dialog('open');
    return false;
  }

  function confirm() {
    var last_4, amount;
    last_4 = $.trim(elements.number.val()).substr(-4,4);
    amount = $('#transaction_amount').val();
    if (elements.kind.val() === 'credit' && last_4 !== "" && amount !== "" && amount > 0) {
      $('#credit_last_4').html(last_4);
      $('#credit_amount').html(amount);
      $('#credit_dialog').dialog('open');
      return false;
    } else {
      return true;
    }
  }

  function setup() {
    if ($('#credit_dialog').size() > 0) {
      $('#credit_dialog').dialog({
        autoOpen:false, width:350, modal:true, scroll:false,
        buttons: { 'Yes': submitCredit, 'No': closeCreditDialog }
      });
      $('#create_transaction_btn').click(confirm);
    }

    if ($('#subscription_renewal_dialog').size() > 0) {
      $('#subscription_renewal_dialog').dialog({
        autoOpen:false, width:350, modal:true, scroll:false,
        buttons: { 'Yes': submitSubscriptionRenewal, 'No': closeRenewalDialog }
      });
      $('#create_transaction_btn').click(confirm_subscription_renewal);
    }
  }

  setup();
}

function TransactionForm(currency_by_merchant_account_id) {
  this.currency_by_merchant_account_id = currency_by_merchant_account_id;
}

TransactionForm.prototype.toggleShippingAddressSource = function() {
  var address_form = new AddressForm('#shipping_address_fields');
  address_form.toggleAddressSource();
};

TransactionForm.prototype.createAddressSource = function(containerId) {
  var addressForm = new AddressForm(containerId);
  addressForm.showErrors();
  addressForm.toggleAddressSource();
  return addressForm;
};

TransactionForm.prototype.showCreditDialog = function() {
  return $('#credit_dialog').size() > 0 && $("#transaction_type").val() === 'credit';
};

TransactionForm.prototype.showSubscriptionDialog = function() {
  return $('#subscription_renewal_dialog').size() > 0;
};

TransactionForm.prototype.setup = function() {
  var form = this;
  var shippingSource = form.createAddressSource('#shipping_address_fields');
  var billingSource = form.createAddressSource('#billing_address_fields');

  $("#shipping_address_fields .address_source_option").change(function() { shippingSource.toggleAddressSource(); });
  $("#billing_address_fields .address_source_option").change(function() { billingSource.toggleAddressSource(); });

  $('#transaction_merchant_account_id').change(function() { form.updateCurrencies(); });
  this.updateCurrencies();

  $('#transaction_options_store_in_vault_on_success').change(function() {
   if (this.checked) {
      $('#transaction_options_add_billing_address_to_payment_method').check();
    }
    form.setTokenVisibility(this.checked, 'fast');
  });
  if ($("#transaction_options_store_in_vault_on_success").is(':checked') || $("#transaction_options_store_in_vault_on_success").length===0) {
    this.setTokenVisibility(true, "fast");
  } else {
    this.setTokenVisibility(false, "fast");
  }

  $("#transaction_type").change(function() { form.transactionTypeChanged(); });

  if ($("#transaction_clone").length === 0) {
    this.transactionTypeChanged();
  }

  $("#transaction_voice_authorization").change(function() { form.transactionVoiceAuthorizationChanged(); });
  this.transactionVoiceAuthorizationChanged();


  $("#transaction_form").submit(function () {
    if (!form.showSubscriptionDialog() && !form.showCreditDialog()) {
      $("#create_transaction_btn").attr("value", "Please wait...");
      $("#create_transaction_btn").disable();
    }
  });

  confirmCreditTransaction({ kind: $('#transaction_type'), number: $('#transaction_credit_card_number')});
};

TransactionForm.prototype.updateCurrencies = function() {
  if ($('#transaction_merchant_account_id').length === 0) {
    return;
  }

  var merchant_account_id = $('#transaction_merchant_account_id').val();
  $("#currency_iso_code").text(this.currency_by_merchant_account_id[merchant_account_id]);
};

TransactionForm.prototype.setTokenVisibility = function(visible, speed) {
  $("#credit_card_token_div").toggle(visible);
  $("#customer_token_div").toggle(visible);
  $("#billing_address_vault_option").toggle(visible);
  $("#shipping_address_vault_option").toggle(visible);
  if (!visible) {
    $("#transaction_credit_card_token").val('');
    $("#transaction_customer_token").val('');
  }
};

TransactionForm.prototype.transactionTypeChanged = function() {
  var sale = $("#transaction_type").val() === 'sale';
  $("#transaction_voice_authorization_container").toggle(sale);
  $("#transaction_options_submit_for_settlement_container").toggle(sale);
  if (sale) {
    $("#toggleable_address_source_new").click();
    $("#toggleable_address_source_new").change();
  } else {
    $("#toggleable_address_source_none").click();
    $("#toggleable_address_source_none").change();
  }
  this.transactionVoiceAuthorizationChanged();
};

TransactionForm.prototype.transactionVoiceAuthorizationChanged = function() {
  var voice_auth = $("#transaction_voice_authorization:checked").length === 1;
  var sale = $("#transaction_type").val() === 'sale';
  $("#transaction_processor_authorization_code_container").toggle(sale && voice_auth);
  if (sale) {
    $("#transaction_voice_authorization").enable();
  } else {
    $("#transaction_voice_authorization").disable();
  }

  if (voice_auth) {
    $("#transaction_options_submit_for_settlement").attr("checked", "checked");
    $("#transaction_options_submit_for_settlement").attr("disabled", "disabled");
  }
  else {
    $("#transaction_options_submit_for_settlement").removeAttr("disabled");
    $("#transaction_processor_authorization_code").val("");
  }
};

function TransactionReportForm() {
}

TransactionReportForm.prototype.setup = function() {
  var form = this;
  $(".group_by_dropdown").change(function() { form.toggleGroupByDropdownOptions(); });
  form.toggleGroupByDropdownOptions();
};

TransactionReportForm.prototype.toggleGroupByDropdownOptions = function() {
  this.resetEnabledOptions();
  var first_value = $("#report_criteria_first_group_by").val();
  this.hideFromGroupBy($("#report_criteria_second_group_by"), first_value);
  this.hideFromGroupBy($("#report_criteria_third_group_by"), first_value);

  var second_value = $("#report_criteria_second_group_by").val();
  this.hideFromGroupBy($("#report_criteria_third_group_by"), second_value);
};

TransactionReportForm.prototype.resetEnabledOptions = function() {
  $(".group_by_dropdown").enable();
  $(".group_by_dropdown option").show();
};

TransactionReportForm.prototype.hideFromGroupBy = function(group_by_element, value_to_hide) {
  if (value_to_hide === "") {
    group_by_element.val("");
    group_by_element.disable();
    return;
  }
  var current_value = group_by_element.val();
  if (current_value === value_to_hide) {
    group_by_element.val("");
  }
  group_by_element.find("option[value=" + value_to_hide + "]").hide();
};

function TransactionRuleSetForm() {
}

TransactionRuleSetForm.prototype.setup = function() {
  var form = this;
  $(".transaction_rule_checkbox").change(function() { form.transactionRuleCheckboxChanged(this); });
  $(".transaction_rule_scope").change(function() { form.transactionRuleScopeChanged(this); });
  this.setupConditionElementsBehavior($("body"));
  $(".transaction_rule_checkbox").change();
  this.initializeTransactionRuleConditionVisibility();
  this.checkAllValueBoxesIfAnyBoxIsChecked();
  this.toggleOrTextAndDeleteButtons();
  $(".transaction_rule_add_condition_link a").click(function() {
    var container = $(this).closest(".transaction_rule_children_container");
    form.copyConditionTemplateFormToConditionsContainer(container);
  });
  $(".transaction_rule_conditions_template input").attr("disabled", "disabled");
};

TransactionRuleSetForm.prototype.setupConditionElementsBehavior = function() {
  var form = this;
  $(".transaction_rule_condition_any").change(function() { form.anyCheckboxChanged(this); });
  $(".transaction_rule_condition_value").change(function() { form.valueCheckboxChanged(this); });
  $(".amount_any_checkbox").change(function() { form.amountAnyCheckboxChanged(this); });
  $(".amount_greater_than_checkbox").change(function() { form.amountGreaterThanOrLessThanCheckboxChanged(this); });
  $(".amount_less_than_checkbox").change(function() { form.amountGreaterThanOrLessThanCheckboxChanged(this); });
  $(".transaction_rule_condition_delete").click(function() { form.removeCondition(this); });
  infoHover();
};

TransactionRuleSetForm.prototype.amountAnyCheckboxChanged = function(element) {
  var amount_group = $(element).closest(".transaction_rule_condition_group");
  if ($(element).is(":checked")) {
    amount_group.find(".amount_greater_than_checkbox").uncheck();
    amount_group.find(".amount_less_than_checkbox").uncheck();
  }
  else {
    amount_group.find(".amount_greater_than_checkbox").check();
    amount_group.find(".amount_less_than_checkbox").check();
  }
};

TransactionRuleSetForm.prototype.amountGreaterThanOrLessThanCheckboxChanged = function(element) {
  var amount_group = $(element).closest(".transaction_rule_condition_group");
  var any_checkbox = amount_group.find(".amount_any_checkbox");
  var greater_than_checkbox = amount_group.find(".amount_greater_than_checkbox");
  var less_than_checkbox = amount_group.find(".amount_less_than_checkbox");
  if (greater_than_checkbox.is(":checked") || less_than_checkbox.is(":checked")) {
    any_checkbox.uncheck();
  }
  else {
    any_checkbox.check();
  }
};

TransactionRuleSetForm.prototype.anyCheckboxChanged = function(element) {
  var valueCheckboxes = $(element).closest(".transaction_rule_condition_group")
    .find(".transaction_rule_condition_value");
  if ($(element).is(":checked")) {
    valueCheckboxes.check();
  }
  else {
    valueCheckboxes.uncheck();
  }
};

TransactionRuleSetForm.prototype.checkAllValueBoxesIfAnyBoxIsChecked = function() {
  // needed in case a value (like a new merchant account) is added after the
  // rule is created.
  $(".transaction_rule_condition_any").each(function() {
    if ($(this).is(":checked")) {
      $(this).closest(".transaction_rule_condition_group")
        .find(".transaction_rule_condition_value").attr("checked", "checked");
    }
  });
};

TransactionRuleSetForm.prototype.copyConditionTemplateFormToConditionsContainer = function(container) {
  var counter = $(container).find("input[name=conditions_counter]");
  var next_counter_value = parseInt(counter.attr("value"), 10);
  counter.attr("value", (next_counter_value + 1).toString());
  var html = $(container).find(".transaction_rule_conditions_template").html();
  var random_dom_id = "conditions_" + Math.random().toString().replace(".", "");
  var wrapped_html = "<div class=\"transaction_rule_condition\" id=\"" + random_dom_id + "\">" + html + "</div>";
  wrapped_html = wrapped_html.replace(/\[template\]/g, "[" + next_counter_value + "]");
  $(container).find(".transaction_rule_conditions_container").append(wrapped_html);
  var new_conditions = $("#" + random_dom_id);
  new_conditions.find("input").removeAttr("disabled");
  new_conditions.find(".transaction_rule_condition_value").check();
  this.setupConditionElementsBehavior(new_conditions);
  this.toggleOrTextAndDeleteButtons();
};

TransactionRuleSetForm.prototype.transactionRuleCheckboxChanged = function(element) {
  if ($(element).is(":checked")) {
    $(element).closest(".transaction_rule_container").find(".transaction_rule_children_container").show();
  }
  else {
    $(element).closest(".transaction_rule_container").find(".transaction_rule_children_container").hide();
    $(element).closest(".transaction_rule_container").find(".transaction_rule_scope[value=all]").attr("checked", "checked");
    this.transactionRuleScopeChanged($(element).closest(".transaction_rule_container").find(".transaction_rule_scope[value=all]"));
  }
};

TransactionRuleSetForm.prototype.transactionRuleScopeChanged = function(element) {
  if (!($(element).is(":checked"))) {
    return;
  }
  if ($(element).val() === "specific") {
    var container = $(element).closest(".transaction_rule_children_container");
    this.copyConditionTemplateFormToConditionsContainer(container);
  }
  this.initializeTransactionRuleConditionVisibility();
};

TransactionRuleSetForm.prototype.initializeTransactionRuleConditionVisibility = function() {
  $(".transaction_rule_scope").each(function(index, element) {
    if (!($(element).is(":checked"))) {
      return;
    }
    if ($(element).val() === "specific") {
      var container = $(element).closest(".transaction_rule_children_container");
      container.find(".transaction_rule_add_condition_link").show();
    }
    if ($(element).val() === "all") {
      var top_container = $(element).closest(".transaction_rule_children_container");
      top_container.find(".transaction_rule_conditions_container").empty();
      top_container.find(".transaction_rule_add_condition_link").hide();
    }
  });
};

TransactionRuleSetForm.prototype.removeCondition = function(deleteButtonElement) {
  var condition = $(deleteButtonElement).closest(".transaction_rule_condition");
  condition.remove();
  this.toggleOrTextAndDeleteButtons();
};

TransactionRuleSetForm.prototype.toggleOrTextAndDeleteButtons = function() {
  $(".transaction_rule_conditions_container").each(function(index, container) {
    if ($(container).find(".transaction_rule_condition").length === 1) {
      $(container).find(".transaction_rule_condition_or_text").hide();
      $(container).find(".transaction_rule_condition_delete").hide();
    }
    else {
      $(container).find(".transaction_rule_condition_delete").show();
      $(container).find(".transaction_rule_condition_or_text").show();
      var first_or_text = $(container).find(".transaction_rule_condition_or_text")[0];
      if (first_or_text) {
        $($(container).find(".transaction_rule_condition_or_text")[0]).hide();
      }
    }
  });
};

TransactionRuleSetForm.prototype.valueCheckboxChanged = function(element) {
  var group = $(element).closest(".transaction_rule_condition_group");
  var valueCheckboxes = group.find(".transaction_rule_condition_value");
  var anyCheckbox = group.find(".transaction_rule_condition_any");
  if (valueCheckboxes.all(function() { return $(this).is(":checked"); })) {
    anyCheckbox.check();
  }
  else {
    anyCheckbox.uncheck();
  }
};

function TransactionSearchForm() {
}

TransactionSearchForm.prototype.setup = function() {
  var form = this;

  var generic_advanced_search = new AdvancedSearchForm();
  generic_advanced_search.setup();

  var optional_date_range_helper = new OptionalDateRangeHelper();
  optional_date_range_helper.setup();

  var user_dialog = new MultiSelectDialog('user');
  user_dialog.setup();

  $("#search_type_credit").click(form.toggleCredit);
  $("#search_type_refund").click(form.toggleCredit);
  $("#all_types").click(form.toggleCredit);
};

TransactionSearchForm.prototype.toggleCredit = function() {
  var refund = $("#search_type_refund").attr("checked") === "checked";
  var noRefund = $("#search_type_credit").attr("checked") === "checked";

  if (refund || noRefund) {
    $("#credit").enable();
  } else {
    $("#credit").disable();
  }
};

function UserForm() {
  this.all_merchant_accounts = $("#all_merchant_accounts");
}

UserForm.prototype.toggleMerchantAccounts = function() {
  var form = this;
  if(form.all_merchant_accounts[0].checked) {
    $('.toggleable input').disable();
  } else {
    $('.toggleable input').enable();
  }
};


UserForm.prototype.setup = function() {
  var form = this;
  form.all_merchant_accounts.click(function() { form.toggleMerchantAccounts(); });
  form.toggleMerchantAccounts();
};
$(document).ready(function() {
  $('#tos-link').click(function(e) { 
    e.preventDefault(); 
    $('#tos-iframe').show(); 
  });
});

function VerificationSearchForm() {
}

VerificationSearchForm.prototype.setup = function() {
  var form = this;

  var generic_advanced_search = new AdvancedSearchForm();
  generic_advanced_search.setup();
  this.setupCreatedAtCheckbox();
};

VerificationSearchForm.prototype.setupCreatedAtCheckbox = function() {
  var form = this;
  $('input.status_at[type=checkbox]').each(function() {
    form.toggleCreatedAt(this);
  });
  $('input.status_at[type=checkbox]').click(function() {
    form.toggleCreatedAt(this);
  });
};

VerificationSearchForm.prototype.toggleCreatedAt = function(checkbox) {
  var container = $(checkbox).parents('.date_range');
  var text_fields = container.find('input[type=text]');
  var selects = container.find('select');
  var date_fields = container.find('.date_fields');
  if ($(checkbox).is(':checked')) {
    text_fields.enable();
    selects.enable();
    date_fields.show();
  } else {
    text_fields.disable();
    selects.disable();
    date_fields.hide();
  }
};
