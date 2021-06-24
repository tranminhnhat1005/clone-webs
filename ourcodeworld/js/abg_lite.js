(function(){/* 
 
 Copyright The Closure Library Authors. 
 SPDX-License-Identifier: Apache-2.0 
*/ 
function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a}; 
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}var p=ca(this);function da(a,b){if(b)a:{var c=p;a=a.split(".");for(var e=0;e<a.length-1;e++){var g=a[e];if(!(g in c))break a;c=c[g]}a=a[a.length-1];e=c[a];b=b(e);b!=e&&null!=b&&ba(c,a,{configurable:!0,writable:!0,value:b})}} 
function ea(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}var fa="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},q;if("function"==typeof Object.setPrototypeOf)q=Object.setPrototypeOf;else{var ha;a:{var ia={a:!0},ja={};try{ja.__proto__=ia;ha=ja.a;break a}catch(a){}ha=!1}q=ha?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ka=q; 
function la(a,b){a.prototype=fa(b.prototype);a.prototype.constructor=a;if(ka)ka(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var e=Object.getOwnPropertyDescriptor(b,c);e&&Object.defineProperty(a,c,e)}else a[c]=b[c];a.Y=b.prototype} 
da("Promise",function(a){function b(d){this.h=0;this.i=void 0;this.g=[];this.o=!1;var f=this.j();try{d(f.resolve,f.reject)}catch(h){f.reject(h)}}function c(){this.g=null}function e(d){return d instanceof b?d:new b(function(f){f(d)})}if(a)return a;c.prototype.h=function(d){if(null==this.g){this.g=[];var f=this;this.i(function(){f.l()})}this.g.push(d)};var g=p.setTimeout;c.prototype.i=function(d){g(d,0)};c.prototype.l=function(){for(;this.g&&this.g.length;){var d=this.g;this.g=[];for(var f=0;f<d.length;++f){var h= 
d[f];d[f]=null;try{h()}catch(l){this.j(l)}}}this.g=null};c.prototype.j=function(d){this.i(function(){throw d;})};b.prototype.j=function(){function d(l){return function(m){h||(h=!0,l.call(f,m))}}var f=this,h=!1;return{resolve:d(this.B),reject:d(this.l)}};b.prototype.B=function(d){if(d===this)this.l(new TypeError("A Promise cannot resolve to itself"));else if(d instanceof b)this.D(d);else{a:switch(typeof d){case "object":var f=null!=d;break a;case "function":f=!0;break a;default:f=!1}f?this.A(d):this.m(d)}}; 
b.prototype.A=function(d){var f=void 0;try{f=d.then}catch(h){this.l(h);return}"function"==typeof f?this.F(f,d):this.m(d)};b.prototype.l=function(d){this.s(2,d)};b.prototype.m=function(d){this.s(1,d)};b.prototype.s=function(d,f){if(0!=this.h)throw Error("Cannot settle("+d+", "+f+"): Promise already settled in state"+this.h);this.h=d;this.i=f;2===this.h&&this.C();this.u()};b.prototype.C=function(){var d=this;g(function(){if(d.v()){var f=p.console;"undefined"!==typeof f&&f.error(d.i)}},1)};b.prototype.v= 
function(){if(this.o)return!1;var d=p.CustomEvent,f=p.Event,h=p.dispatchEvent;if("undefined"===typeof h)return!0;"function"===typeof d?d=new d("unhandledrejection",{cancelable:!0}):"function"===typeof f?d=new f("unhandledrejection",{cancelable:!0}):(d=p.document.createEvent("CustomEvent"),d.initCustomEvent("unhandledrejection",!1,!0,d));d.promise=this;d.reason=this.i;return h(d)};b.prototype.u=function(){if(null!=this.g){for(var d=0;d<this.g.length;++d)k.h(this.g[d]);this.g=null}};var k=new c;b.prototype.D= 
function(d){var f=this.j();d.G(f.resolve,f.reject)};b.prototype.F=function(d,f){var h=this.j();try{d.call(f,h.resolve,h.reject)}catch(l){h.reject(l)}};b.prototype.then=function(d,f){function h(n,v){return"function"==typeof n?function(u){try{l(n(u))}catch(J){m(J)}}:v}var l,m,r=new b(function(n,v){l=n;m=v});this.G(h(d,l),h(f,m));return r};b.prototype.catch=function(d){return this.then(void 0,d)};b.prototype.G=function(d,f){function h(){switch(l.h){case 1:d(l.i);break;case 2:f(l.i);break;default:throw Error("Unexpected state: "+ 
l.h);}}var l=this;null==this.g?k.h(h):this.g.push(h);this.o=!0};b.resolve=e;b.reject=function(d){return new b(function(f,h){h(d)})};b.race=function(d){return new b(function(f,h){for(var l=ea(d),m=l.next();!m.done;m=l.next())e(m.value).G(f,h)})};b.all=function(d){var f=ea(d),h=f.next();return h.done?e([]):new b(function(l,m){function r(u){return function(J){n[u]=J;v--;0==v&&l(n)}}var n=[],v=0;do n.push(void 0),v++,e(h.value).G(r(n.length-1),m),h=f.next();while(!h.done)})};return b});var t=this||self; 
function ma(a){return a};function pa(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}};var qa=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},ra=Array.prototype.forEach?function(a,b){Array.prototype.forEach.call(a,b,void 0)}:function(a,b){for(var c=a.length,e="string"===typeof a?a.split(""):a,g=0;g<c;g++)g in e&&b.call(void 0,e[g],g,a)};var w;function x(a,b){this.g=b===sa?a:""}x.prototype.toString=function(){return this.g+""};var sa={};function ta(a){if(void 0===w){var b=null;var c=t.trustedTypes;if(c&&c.createPolicy){try{b=c.createPolicy("goog#html",{createHTML:ma,createScript:ma,createScriptURL:ma})}catch(e){t.console&&t.console.error(e.message)}w=b}else w=b}a=(b=w)?b.createScriptURL(a):a;return new x(a,sa)};function ua(a){ua[" "](a);return a}ua[" "]=function(){};var va="function"===typeof Uint8Array,wa={W:{value:!0,configurable:!0}};function y(a){Array.isArray(a)&&!Object.isFrozen(a)&&Object.defineProperties(a,wa);return a};function xa(){}var ya;function za(a,b,c){a.i=null;ya&&(b||(b=ya),ya=null);var e=a.constructor.X;b||(b=e?[e]:[]);a.j=e?0:-1;a.g=b;a:{if(b=a.g.length)if(--b,e=a.g[b],!(null===e||"object"!=typeof e||Array.isArray(e)||va&&e instanceof Uint8Array)){a.l=b-a.j;a.h=e;break a}a.l=Number.MAX_VALUE}a.m={};if(c)for(b=0;b<c.length;b++)if(e=c[b],e<a.l){e+=a.j;var g=a.g[e];g?y(g):a.g[e]=z}else g=a.l+a.j,a.g[g]||(a.h=a.g[g]={}),(g=a.h[e])?y(g):a.h[e]=z}var z=Object.freeze(y([])); 
function A(a,b){if(b<a.l){b+=a.j;var c=a.g[b];return c!==z?c:a.g[b]=y([])}if(a.h)return c=a.h[b],c!==z?c:a.h[b]=y([])}function Aa(a,b){a=A(a,b);return null==a?0:a}function B(a,b){a=A(a,b);return null==a?"":a}function C(a,b){var c=void 0===c?!1:c;a=A(a,b);a=null==a?a:!!a;return null==a?c:a}function Ba(a){var b=Ca;a.i||(a.i={});if(!a.i[1]){var c=A(a,1);c&&(a.i[1]=new b(c))}return a.i[1]};function Ca(a){za(this,a,Da)}la(Ca,xa);var Da=[28];function Ea(a){za(this,a,Fa)}la(Ea,xa);var Fa=[21];function Ga(a,b){var c=void 0===c?{}:c;this.error=a;this.context=b.context;this.msg=b.message||"";this.id=b.id||"jserror";this.meta=c};var Ha={passive:!0},Ia=pa(function(){var a=!1;try{var b=Object.defineProperty({},"passive",{get:function(){a=!0}});t.addEventListener("test",null,b)}catch(c){}return a});function D(a,b,c,e){if(a.addEventListener){var g=a.addEventListener;e=e?e.passive&&Ia()?e:e.capture||!1:!1;g.call(a,b,c,e)}};function F(a){var b=document;return"string"===typeof a?b.getElementById(a):a}function Ja(a){var b=document;b.getElementsByClassName?a=b.getElementsByClassName(a)[0]:(b=document,a=b.querySelectorAll&&b.querySelector&&a?b.querySelector(a?"."+a:""):Ka(b,a)[0]||null);return a||null} 
function Ka(a,b){var c,e;if(a.querySelectorAll&&a.querySelector&&b)return a.querySelectorAll(b?"."+b:"");if(b&&a.getElementsByClassName){var g=a.getElementsByClassName(b);return g}g=a.getElementsByTagName("*");if(b){var k={};for(c=e=0;a=g[c];c++){var d=a.className,f;if(f="function"==typeof d.split)f=0<=qa(d.split(/\s+/),b);f&&(k[e++]=a)}k.length=e;return k}return g}function La(a){a&&a.parentNode&&a.parentNode.removeChild(a)};var Ma=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function G(a){try{var b;if(b=!!a&&null!=a.location.href)a:{try{ua(a.foo);b=!0;break a}catch(c){}b=!1}return b}catch(c){return!1}}function Na(a,b){if(a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(void 0,a[c],c,a)}function H(a){a.preventDefault?a.preventDefault():a.returnValue=!1};function Oa(a,b){a.google_image_requests||(a.google_image_requests=[]);var c=a.document.createElement("img");c.src=b;a.google_image_requests.push(c)};var Pa=0;function Qa(a){var b=document.currentScript;return(a=(b=void 0===b?null:b)&&b.getAttribute("data-jc")===String(a)?b:document.querySelector('[data-jc="'+a+'"]'))&&a.getAttribute("data-jc-version")||"unknown"} 
function Ra(){var a=void 0===a?.01:a;if(!(Math.random()>a)){a="https://pagead2.googlesyndication.com/pagead/gen_204?id=jca&jc=60&version="+Qa(60)+"&sample="+a;var b=window,c;if(c=b.navigator)c=b.navigator.userAgent,c=/Chrome/.test(c)&&!/Edge/.test(c)?!0:!1;c&&b.navigator.sendBeacon?b.navigator.sendBeacon(a):Oa(b,a)}};var I=document,K=window;function Sa(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""}function Ta(a,b){a.classList?b=a.classList.contains(b):(a=a.classList?a.classList:Sa(a).match(/\S+/g)||[],b=0<=qa(a,b));return b}function L(a,b){if(a.classList)a.classList.add(b);else if(!Ta(a,b)){var c=Sa(a);b=c+(0<c.length?" "+b:b);"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)}};function Ya(a){this.g=(this.serializedAttributionData=a)?new Ea(a):null;this.isMutableImpression=null!=A(this.g,1)&&!!C(Ba(this.g),33);B(this.g,30);this.T=!!C(this.g,11);this.hasUserFeedbackData=!!this.g&&null!=A(this.g,1);this.L=!!C(this.g,4);this.O=!!C(this.g,6);this.K=!!C(this.g,13);Aa(this.g,8);this.creativeIndexSuffix=1<Aa(this.g,8)?Aa(this.g,7).toString():"";this.U=!!C(this.g,17);this.R=!!C(this.g,18);this.J=!!C(this.g,14);this.enableMultiplexThirdPartyAttribution=!!C(this.g,32);this.B=!!C(this.g, 
15);this.V=!!C(this.g,31);this.P=1==C(this.g,9);this.openAttributionInline=1==C(this.g,10);this.isMobileDevice=!!C(this.g,12);this.S=null;this.N=(a=I.querySelector("[data-slide]"))?"true"===a.getAttribute("data-slide"):!1;(this.D=""!==this.creativeIndexSuffix)&&void 0===K.goog_multislot_cache&&(K.goog_multislot_cache={});if(this.D&&!this.N){if(a=K.goog_multislot_cache.hd,void 0===a){a=!1;var b=I.querySelector("[data-dim]");if(b)if(b=b.getBoundingClientRect(),150<=b.right-b.left&&150<=b.bottom-b.top)a= 
!1;else{var c=document.body.getBoundingClientRect();150>(1>=Math.abs(c.left-b.left)&&1>=Math.abs(c.right-b.right)?b.bottom-b.top:b.right-b.left)&&(a=!0)}else a=!1;window.goog_multislot_cache.hd=a}}else a=!1;this.C=a;this.u=F("abgcp"+this.creativeIndexSuffix);this.s=F("abgc"+this.creativeIndexSuffix);this.h=F("abgs"+this.creativeIndexSuffix);F("abgl"+this.creativeIndexSuffix);this.o=F("abgb"+this.creativeIndexSuffix);this.A=F("abgac"+this.creativeIndexSuffix);F("mute_panel"+this.creativeIndexSuffix); 
this.v=Ja("goog_delegate_attribution"+this.creativeIndexSuffix);this.isDelegateAttributionActive=!!this.v&&!!this.J&&!Ja("goog_delegate_disabled")&&!this.B;if(this.h)a:{a=this.h;b="A";c=a.childNodes;for(var e=0;e<c.length;e++){var g=c.item(e);if("undefined"!=typeof g.tagName&&g.tagName.toUpperCase()==b){a=g;break a}}}else a=null;this.j=a;this.l=this.isDelegateAttributionActive?this.v:F("cbb"+this.creativeIndexSuffix);this.M=this.C?"0"===this.creativeIndexSuffix:!0;this.enableDelegateDismissableMenu= 
!!this.l&&Ta(this.l,"goog_dismissable_menu");this.m=null;this.F=0;this.i=this.isDelegateAttributionActive?this.v:this.O&&this.u?this.u:this.s;this.I=!!C(this.g,19);this.adbadgeEnabled=!!C(this.g,24);this.enableNativeJakeUi=!!C(this.g,27);B(this.g,33)};function Za(a,b,c){if(!a)throw Error("bad conv util ctor args");this.h=a;this.g=c};function $a(a,b){if(a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(void 0,a[c],c,a)}var ab=!!window.google_async_iframe_id,M=ab&&window.parent||window;function N(a,b){a&&$a(b,function(c,e){a.style[e]=c})};var bb=/^https?:\/\/(\w|-)+\.cdn\.ampproject\.(net|org)(\?|\/|$)/;function cb(a,b){this.g=a;this.h=b}function db(a,b){this.url=a;this.H=!!b;this.depth=null};function eb(){this.i="&";this.h={};this.j=0;this.g=[]}function O(a,b){var c={};c[a]=b;return[c]}function fb(a,b,c,e,g){var k=[];Na(a,function(d,f){(d=gb(d,b,c,e,g))&&k.push(f+"="+d)});return k.join(b)} 
function gb(a,b,c,e,g){if(null==a)return"";b=b||"&";c=c||",$";"string"==typeof c&&(c=c.split(""));if(a instanceof Array){if(e=e||0,e<c.length){for(var k=[],d=0;d<a.length;d++)k.push(gb(a[d],b,c,e+1,g));return k.join(c[e])}}else if("object"==typeof a)return g=g||0,2>g?encodeURIComponent(fb(a,b,c,e,g+1)):"...";return encodeURIComponent(String(a))} 
function hb(a,b,c){b=b+"//pagead2.googlesyndication.com"+c;var e=ib(a)-c.length;if(0>e)return"";a.g.sort(function(m,r){return m-r});c=null;for(var g="",k=0;k<a.g.length;k++)for(var d=a.g[k],f=a.h[d],h=0;h<f.length;h++){if(!e){c=null==c?d:c;break}var l=fb(f[h],a.i,",$");if(l){l=g+l;if(e>=l.length){e-=l.length;b+=l;g=a.i;break}c=null==c?d:c}}a="";null!=c&&(a=g+"trn="+c);return b+a}function ib(a){var b=1,c;for(c in a.h)b=c.length>b?c.length:b;return 3997-b-a.i.length-1};function jb(a,b,c,e,g){if((e?a.g:Math.random())<(g||.01))try{if(c instanceof eb)var k=c;else k=new eb,Na(c,function(f,h){var l=k,m=l.j++;f=O(h,f);l.g.push(m);l.h[m]=f});var d=hb(k,a.h,"/pagead/gen_204?id="+b+"&");d&&Oa(t,d)}catch(f){}};var P=null;function kb(){var a=t.performance;return a&&a.now&&a.timing?Math.floor(a.now()+a.timing.navigationStart):Date.now()}function lb(){var a=void 0===a?t:a;return(a=a.performance)&&a.now?a.now():null};function mb(a,b){var c=lb()||kb();this.label=a;this.type=b;this.value=c;this.duration=0;this.uniqueId=Math.random();this.slotId=void 0};var Q=t.performance,nb=!!(Q&&Q.mark&&Q.measure&&Q.clearMarks),R=pa(function(){var a;if(a=nb){var b;if(null===P){P="";try{a="";try{a=t.top.location.hash}catch(c){a=t.location.hash}a&&(P=(b=a.match(/\bdeid=([\d,]+)/))?b[1]:"")}catch(c){}}b=P;a=!!b.indexOf&&0<=b.indexOf("1337")}return a}); 
function ob(){var a=S;this.h=[];this.i=a||t;var b=null;a&&(a.google_js_reporting_queue=a.google_js_reporting_queue||[],this.h=a.google_js_reporting_queue,b=a.google_measure_js_timing);this.g=R()||(null!=b?b:1>Math.random())}function pb(a){a&&Q&&R()&&(Q.clearMarks("goog_"+a.label+"_"+a.uniqueId+"_start"),Q.clearMarks("goog_"+a.label+"_"+a.uniqueId+"_end"))}ob.prototype.start=function(a,b){if(!this.g)return null;a=new mb(a,b);b="goog_"+a.label+"_"+a.uniqueId+"_start";Q&&R()&&Q.mark(b);return a}; 
ob.prototype.end=function(a){if(this.g&&"number"===typeof a.value){a.duration=(lb()||kb())-a.value;var b="goog_"+a.label+"_"+a.uniqueId+"_end";Q&&R()&&Q.mark(b);!this.g||2048<this.h.length||this.h.push(a)}};function qb(){var a=rb;this.l=sb;this.h=null;this.m=this.j;this.g=void 0===a?null:a;this.i=!1}function tb(a,b,c){try{if(a.g&&a.g.g){var e=a.g.start(b.toString(),3);var g=c();a.g.end(e)}else g=c()}catch(f){c=!0;try{pb(e),c=a.m(b,new Ga(f,{message:ub(f)}),void 0,void 0)}catch(h){a.j(217,h)}if(c){var k,d;null==(k=window.console)||null==(d=k.error)||d.call(k,f)}else throw f;}return g} 
function vb(a,b){var c=T;return function(e){for(var g=[],k=0;k<arguments.length;++k)g[k]=arguments[k];return tb(c,a,function(){return b.apply(void 0,g)})}} 
qb.prototype.j=function(a,b,c,e,g){g=g||"jserror";try{var k=new eb;k.g.push(1);k.h[1]=O("context",a);b.error&&b.meta&&b.id||(b=new Ga(b,{message:ub(b)}));if(b.msg){var d=b.msg.substring(0,512);k.g.push(2);k.h[2]=O("msg",d)}var f=b.meta||{};if(this.h)try{this.h(f)}catch(X){}if(e)try{e(f)}catch(X){}b=[f];k.g.push(3);k.h[3]=b;e=t;b=[];d=null;do{var h=e;if(G(h)){var l=h.location.href;d=h.document&&h.document.referrer||null}else l=d,d=null;b.push(new db(l||""));try{e=h.parent}catch(X){e=null}}while(e&& 
h!=e);l=0;for(var m=b.length-1;l<=m;++l)b[l].depth=m-l;h=t;if(h.location&&h.location.ancestorOrigins&&h.location.ancestorOrigins.length==b.length-1)for(m=1;m<b.length;++m){var r=b[m];r.url||(r.url=h.location.ancestorOrigins[m-1]||"",r.H=!0)}var n=new db(t.location.href,!1);h=null;var v=b.length-1;for(r=v;0<=r;--r){var u=b[r];!h&&bb.test(u.url)&&(h=u);if(u.url&&!u.H){n=u;break}}u=null;var J=b.length&&b[v].url;0!=n.depth&&J&&(u=b[v]);var E=new cb(n,u);if(E.h){var Eb=E.h.url||"";k.g.push(4);k.h[4]=O("top", 
Eb)}var na={url:E.g.url||""};if(E.g.url){var oa=E.g.url.match(Ma),Ua=oa[1],Va=oa[3],Wa=oa[4];n="";Ua&&(n+=Ua+":");Va&&(n+="//",n+=Va,Wa&&(n+=":"+Wa));var Xa=n}else Xa="";na=[na,{url:Xa}];k.g.push(5);k.h[5]=na;jb(this.l,g,k,this.i,c)}catch(X){try{jb(this.l,g,{context:"ecmserr",rctx:a,msg:ub(X),url:E&&E.g.url},this.i,c)}catch(Qb){}}return!0}; 
function ub(a){var b=a.toString();a.name&&-1==b.indexOf(a.name)&&(b+=": "+a.name);a.message&&-1==b.indexOf(a.message)&&(b+=": "+a.message);if(a.stack){a=a.stack;try{-1==a.indexOf(b)&&(a=b+"\n"+a);for(var c;a!=c;)c=a,a=a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/,"$1");b=a.replace(/\n */g,"\n")}catch(e){}}return b};var sb,T;if(ab&&!G(M)){var U="."+I.domain;try{for(;2<U.split(".").length&&!G(M);)I.domain=U=U.substr(U.indexOf(".")+1),M=window.parent}catch(a){}G(M)||(M=window)}var S=M,rb=new ob;function wb(){if(!S.google_measure_js_timing){var a=rb;a.g=!1;a.h!=a.i.google_js_reporting_queue&&(R()&&ra(a.h,pb),a.h.length=0)}}sb=new function(){var a=void 0===a?K:a;this.h="http:"===a.location.protocol?"http:":"https:";this.g=Math.random()};"number"!==typeof S.google_srt&&(S.google_srt=Math.random());var xb=sb,yb=S.google_srt; 
0<=yb&&1>=yb&&(xb.g=yb);T=new qb;T.h=function(a){var b=Pa;0!==b&&(a.jc=String(b),a.shv=Qa(b))};T.i=!0;"complete"==S.document.readyState?wb():rb.g&&D(S,"load",function(){wb()});function V(a,b){return vb(a,b)};function zb(a,b){var c=this;this.g=a;this.h=b;this.g.U||(this.j=!1,this.i=null,!this.g.C||this.g.adbadgeEnabled||this.g.M?Ab(this):(a={display:"none"},b={width:"15px",height:"15px"},this.g.isMobileDevice?(N(this.g.o,a),N(this.g.h,a),N(this.g.u,b),N(this.g.s,b)):N(this.g.s,a)),Bb(this),this.g.enableNativeJakeUi&&L(this.g.A,"abgnac"),this.g.isDelegateAttributionActive?(L(document.body,"goog_delegate_active"),L(document.body,"jaa")):(!this.g.isMutableImpression&&this.g.l&&La(this.g.l),setTimeout(function(){L(document.body, 
"jar")},this.g.K?750:100)),this.g.B&&L(document.body,"goog_delegate_disabled"),this.g.I&&K.addEventListener("load",function(){return c.h()}))} 
function Bb(a){if(a.g.T)D(a.g.i,"click",V(365,function(c){var e=K.goog_interstitial_display;e&&(e(c),c&&(c.stopPropagation(),c.preventDefault()))}));else if(a.g.isMutableImpression&&a.g.isMobileDevice)D(a.g.i,"click",function(){return a.h()});else if(a.g.isMutableImpression&&!a.g.isMobileDevice&&(a.g.l&&D(a.g.l,"click",function(){return a.h()}),a.g.V&&a.g.h&&D(a.g.h,"click",function(){return a.h()})),a.g.L)Cb(a);else{D(a.g.i,"mouseover",V(367,function(){return Cb(a)}));D(a.g.i,"mouseout",V(369,function(){return Db(a, 
500)}));D(a.g.i,"touchstart",V(368,function(){return Cb(a)}),Ha);var b=V(370,function(){return Db(a,4E3)});D(a.g.i,"mouseup",b);D(a.g.i,"touchend",b);D(a.g.i,"touchcancel",b);a.g.j&&D(a.g.j,"click",V(371,function(c){return a.preventDefault(c)}))}} 
function Ab(a){if(a.g.j&&a.g.R){var b=Ba(a.g.g);b&&null!=A(b,5)&&null!=A(b,6)&&(a.i=new Za(B(b,5),B(b,6),B(b,19)));D(a.g.j,"click",V(452,function(){if(!a.j&&(a.j=!0,a.i)){var c=a.i,e=c.h+"&label=closebutton_whythisad_click";e+="&label_instance=1";c.g&&(e+="&cid="+c.g);Oa(window,e)}}))}}function Fb(a){var b=a.g.A;b.style.display="block";a.g.enableNativeJakeUi&&window.requestAnimationFrame(function(){L(b,"abgacfo")})} 
function Cb(a){window.clearTimeout(a.g.m);a.g.m=null;a.g.h&&"block"==a.g.h.style.display||(a.g.F=Date.now(),a.g.o&&a.g.h&&(a.g.o.style.display="none",a.g.h.style.display="block"))}function Db(a,b){window.clearTimeout(a.g.m);a.g.m=window.setTimeout(function(){return Gb(a)},b)}function Gb(a){window.clearTimeout(a.g.m);a.g.m=null;a.g.o&&a.g.h&&(a.g.o.style.display="block",a.g.h.style.display="none")} 
zb.prototype.preventDefault=function(a){if(this.g.h&&"block"==this.g.h.style.display&&500>Date.now()-this.g.F)H(a);else if(this.g.openAttributionInline){var b=this.g.j.getAttribute("href");window.adSlot?window.adSlot.openAttribution(b)&&H(a):window.openAttribution&&(window.openAttribution(b),H(a))}else this.g.P&&(b=this.g.j.getAttribute("href"),window.adSlot?window.adSlot.openSystemBrowser(b)&&H(a):window.openSystemBrowser&&(window.openSystemBrowser(b),H(a)))};function Hb(a){var b=Ib,c=this;if(!b)throw Error("bad ctor");this.i=b;this.h=a;this.g=!1;Ja("goog_delegate_deferred")?void 0!==K.goog_delegate_deferred_token?Jb(this):(a=function(){Jb(c)},K.goog_delegate_deferred_token=a,setTimeout(a,5E3)):Jb(this)}function Jb(a){if(!a.g&&(a.g=!0,K.goog_delegate_deferred_token=void 0,a.h)){var b=a.i;a=a.h;if(!a)throw Error("bad attrdata");a=new Ya(a);new b(a)}};function Kb(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})};function Lb(){var a=new Kb;this.promise=a.promise;this.resolve=a.resolve}function Mb(a,b){a.google_llp||(a.google_llp={});a=a.google_llp;a[5]||(a[5]=new Lb,b&&b());return a[5]} 
function Nb(a,b){return Mb(a,function(){var c=a.document,e=c.createElement("script");e.src=b instanceof x&&b.constructor===x?b.g:"type_error:TrustedResourceUrl";var g,k=(e.ownerDocument&&e.ownerDocument.defaultView||window).document;(g=(k=null===(g=k.querySelector)||void 0===g?void 0:g.call(k,"script[nonce]"))?k.nonce||k.getAttribute("nonce")||"":"")&&e.setAttribute("nonce",g);(c=c.getElementsByTagName("script")[0])&&c.parentNode&&c.parentNode.insertBefore(e,c)}).promise};function Ib(a){var b=this;this.g=a;this.h=new zb(this.g,V(359,function(){return Ob(b)}))}function Ob(a){tb(T,373,function(){Gb(a.h);Fb(a.h)});Nb(window,ta(["https://pagead2.googlesyndication.com","/pagead/js/"+B(a.g.g,33)+"/abg_survey.js"].join(""))).then(function(b){b.createAttributionCard(a.g);a.g.S=b;b.expandAttributionCard()});Ra()};Pa=60;function Pb(a){var b=[a];b=void 0===b?[]:b;t.google_logging_queue||(t.google_logging_queue=[]);t.google_logging_queue.push([11,b]);new Hb(a)}var W=["buildAttribution"],Y=t;W[0]in Y||"undefined"==typeof Y.execScript||Y.execScript("var "+W[0]);for(var Z;W.length&&(Z=W.shift());)W.length||void 0===Pb?Y[Z]&&Y[Z]!==Object.prototype[Z]?Y=Y[Z]:Y=Y[Z]={}:Y[Z]=Pb;}).call(this);