(function(){/* 
 
 Copyright The Closure Library Authors. 
 SPDX-License-Identifier: Apache-2.0 
*/ 
var e={s:{value:!0,configurable:!0}};var g=Object,h=g.freeze,k=[];Array.isArray(k)&&!Object.isFrozen(k)&&Object.defineProperties(k,e);h.call(g,k);function l(a,b,d){a.addEventListener&&a.addEventListener(b,d,!1)};function m(a,b,d){if(Array.isArray(b))for(var c=0;c<b.length;c++)m(a,String(b[c]),d);else null!=b&&d.push(a+(""===b?"":"="+encodeURIComponent(String(b))))};function n(a,b){a.google_image_requests||(a.google_image_requests=[]);var d=a.document.createElement("img");d.src=b;a.google_image_requests.push(d)};function p(){var a=document.currentScript;return(a=void 0===a?null:a)&&"22"===a.getAttribute("data-jc")?a:document.querySelector('[data-jc="22"]')};var q=document,r=window;function t(){var a=u["gws-id"],b=u["qem-id"];this.l=u.url;this.m=a;this.o=b;this.i=!1;a=v(q.hidden)?{g:"hidden",h:"visibilitychange"}:v(q.mozHidden)?{g:"mozHidden",h:"mozvisibilitychange"}:v(q.msHidden)?{g:"msHidden",h:"msvisibilitychange"}:v(q.webkitHidden)?{g:"webkitHidden",h:"webkitvisibilitychange"}:{g:"hidden",h:"visibilitychange"};this.g=a.g;this.h=a.h;this.j=-1;q[this.g]&&w(this,2);y(this);z(this)} 
function y(a){l(q,a.h,function(){if(q[a.g])a.i&&(a.i=!1,a.j=Date.now(),w(a,0));else{if(-1!==a.j){var b=Date.now()-a.j;0<b&&(a.j=-1,w(a,1,b))}w(a,3)}})}function z(a){l(r,"click",function(b){a.handleClick(b)})}t.prototype.handleClick=function(){var a=this;this.i=!0;r.setTimeout(function(){a.i=!1},5E3)}; 
function w(a,b,d){d=void 0===d?0:d;var c={gqid:a.m,qqid:a.o};0===b&&(c["return"]=0);1===b&&(c["return"]=1,c.timeDelta=d);2===b&&(c.bgload=1);3===b&&(c.fg=1);b=[];for(var x in c)m(x,c[x],b);n(r,a.l+"&label=window_focus&"+b.join("&"));var f=void 0===f?.01:f;if(!(Math.random()>f)){a=p();f="https://pagead2.googlesyndication.com/pagead/gen_204?id=jca&jc=22&version="+(a&&a.getAttribute("data-jc-version")||"unknown")+"&sample="+f;a=window;if(c=a.navigator)c=a.navigator.userAgent,c=/Chrome/.test(c)&&!/Edge/.test(c)? 
!0:!1;c&&a.navigator.sendBeacon?a.navigator.sendBeacon(f):n(a,f)}}function v(a){return"undefined"!==typeof a};var A=p();if(null==A)throw Error("JSC not found 22");for(var u={},B=A.attributes,C=B.length-1;0<=C;C--){var D=B[C].name;0===D.indexOf("data-jcp-")&&(u[D.substring(9)]=B[C].value)}window.window_focus_for_click=new t;}).call(this);
