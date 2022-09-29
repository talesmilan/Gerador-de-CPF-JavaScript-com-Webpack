(()=>{"use strict";var n,r,e,t,o,a,i,s,c,u,p,d,f,l,A={122:(n,r,e)=>{e.d(r,{Z:()=>s});var t=e(537),o=e.n(t),a=e(645),i=e.n(a)()(o());i.push([n.id,"\r\n* {\r\n    box-sizing: border-box;\r\n    outline: 0;\r\n  }\r\n  \r\n  body {\r\n    margin: 0;\r\n    padding: 0;\r\n    background: rgb(45, 95, 60);\r\n    font-family: sans-serif;\r\n    font-size: 1.3em;\r\n    line-height: 1.5em;\r\n  }\r\n  \r\n  .container {\r\n    max-width: 640px;\r\n    margin: 50px auto;\r\n    background: #fff;\r\n    padding: 20px;\r\n    border-radius: 10px;\r\n  }\r\n","",{version:3,sources:["webpack://./src/assets/css/style.css"],names:[],mappings:";AACA;IACI,sBAAsB;IACtB,UAAU;EACZ;;EAEA;IACE,SAAS;IACT,UAAU;IACV,2BAA2B;IAC3B,uBAAuB;IACvB,gBAAgB;IAChB,kBAAkB;EACpB;;EAEA;IACE,gBAAgB;IAChB,iBAAiB;IACjB,gBAAgB;IAChB,aAAa;IACb,mBAAmB;EACrB",sourcesContent:["\r\n* {\r\n    box-sizing: border-box;\r\n    outline: 0;\r\n  }\r\n  \r\n  body {\r\n    margin: 0;\r\n    padding: 0;\r\n    background: rgb(45, 95, 60);\r\n    font-family: sans-serif;\r\n    font-size: 1.3em;\r\n    line-height: 1.5em;\r\n  }\r\n  \r\n  .container {\r\n    max-width: 640px;\r\n    margin: 50px auto;\r\n    background: #fff;\r\n    padding: 20px;\r\n    border-radius: 10px;\r\n  }\r\n"],sourceRoot:""}]);const s=i},645:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e="",t=void 0!==r[5];return r[4]&&(e+="@supports (".concat(r[4],") {")),r[2]&&(e+="@media ".concat(r[2]," {")),t&&(e+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),e+=n(r),t&&(e+="}"),r[2]&&(e+="}"),r[4]&&(e+="}"),e})).join("")},r.i=function(n,e,t,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(t)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var u=0;u<n.length;u++){var p=[].concat(n[u]);t&&i[p[0]]||(void 0!==a&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=a),e&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=e):p[2]=e),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),r.push(p))}},r}},537:n=>{n.exports=function(n){var r=n[1],e=n[3];if(!e)return r;if("function"==typeof btoa){var t=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t),a="/*# ".concat(o," */"),i=e.sources.map((function(n){return"/*# sourceURL=".concat(e.sourceRoot||"").concat(n," */")}));return[r].concat(i).concat([a]).join("\n")}return[r].join("\n")}},379:n=>{var r=[];function e(n){for(var e=-1,t=0;t<r.length;t++)if(r[t].identifier===n){e=t;break}return e}function t(n,t){for(var a={},i=[],s=0;s<n.length;s++){var c=n[s],u=t.base?c[0]+t.base:c[0],p=a[u]||0,d="".concat(u," ").concat(p);a[u]=p+1;var f=e(d),l={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==f)r[f].references++,r[f].updater(l);else{var A=o(l,t);t.byIndex=s,r.splice(s,0,{identifier:d,updater:A,references:1})}i.push(d)}return i}function o(n,r){var e=r.domAPI(r);return e.update(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap&&r.supports===n.supports&&r.layer===n.layer)return;e.update(n=r)}else e.remove()}}n.exports=function(n,o){var a=t(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=e(a[i]);r[s].references--}for(var c=t(n,o),u=0;u<a.length;u++){var p=e(a[u]);0===r[p].references&&(r[p].updater(),r.splice(p,1))}a=c}}},569:n=>{var r={};n.exports=function(n,e){var t=function(n){if(void 0===r[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}r[n]=e}return r[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},216:n=>{n.exports=function(n){var r=document.createElement("style");return n.setAttributes(r,n.attributes),n.insert(r,n.options),r}},565:(n,r,e)=>{n.exports=function(n){var r=e.nc;r&&n.setAttribute("nonce",r)}},795:n=>{n.exports=function(n){var r=n.insertStyleElement(n);return{update:function(e){!function(n,r,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,o&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),r.styleTagTransform(t,n,r.options)}(r,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)}}}},589:n=>{n.exports=function(n,r){if(r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}}},v={};function m(n){var r=v[n];if(void 0!==r)return r.exports;var e=v[n]={id:n,exports:{}};return A[n](e,e.exports,m),e.exports}m.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return m.d(r,{a:r}),r},m.d=(n,r)=>{for(var e in r)m.o(r,e)&&!m.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:r[e]})},m.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),m.nc=void 0,n=m(379),r=m.n(n),e=m(795),t=m.n(e),o=m(569),a=m.n(o),i=m(565),s=m.n(i),c=m(216),u=m.n(c),p=m(589),d=m.n(p),f=m(122),(l={}).styleTagTransform=d(),l.setAttributes=s(),l.insert=a().bind(null,"head"),l.domAPI=t(),l.insertStyleElement=u(),r()(f.Z,l),f.Z&&f.Z.locals&&f.Z.locals})();
//# sourceMappingURL=bundle.js.map