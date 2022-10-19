(()=>{"use strict";var t={426:(t,e,n)=>{n.d(e,{Z:()=>c});var o=n(81),i=n.n(o),r=n(645),a=n.n(r)()(i());a.push([t.id,"html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n\tdisplay: inherit;\n}\nbody{\n\tdisplay:flex;\n\tflex-direction: column;\n\tfont-size: 20px;\n\tfont-family: sans-serif;\n}\n#headerCon{\n\tposition: fixed;\n\tjustify-content: center;\n\tbackground-color: rgba(0,0,0,1);\n\tz-index: 1;\n\tcolor: rgba(255,255,255,1);\n\twidth: 100%;\n\theight: 7rem;\n}\nheader{\n\tflex-direction: row;\n\twidth: 70rem;\n}\nul{\n\tlist-style-type: none;\n\tflex-direction: row;\n\talign-items: center;\n\tjustify-content: right;\n\twidth: 63rem;\n}\nli{\n\twidth: 10rem;\n\theight: 7rem;\n\talign-items: center;\n\tjustify-content: center;\n\tborder-top-left-radius: 0.5rem;\n\tborder-top-right-radius: 0.5rem;\n}\nli:hover{\n\tcursor: pointer;\n\tcolor: rgba(0,0,0,1);\n\tbackground-color: rgba(255,255,255,1);\n}\n#contentCon{\n\tjustify-content: center;\n}\n#content{\n\tflex-direction: column;\n\talign-items: center;\n\twidth: 70rem;\n\tposition:relative;\n\tpadding-top: 7rem;\n\tbackground-color: rgba(0,0,0,0.1);\n}\n.sections{\n\tpadding: 4rem 0rem 4rem 0rem;\n\tgap: 2rem;\n}\n.textCon{\n\tflex-direction: column;\n\tgap: 2rem;\n}\n#team{\n\tflex-direction: row-reverse;\n}\n#logo{\n\twidth: 7rem;\n\theight: 7rem;\n}\n.sectionImg{\n\twidth: 20rem;\n\theight: 20rem;\n}\n.menuContent{\n\tposition: relative;\n\ttop:1rem;\n}\n#menuHeaderCon > h1{\n\tfont-size: 4rem;\n}\n.itemCon{\n\tgap: 1rem;\n\twidth: 65rem;\n\tpadding: 2rem 0rem 2rem 0rem; \n}\n.itemImg{\n\twidth: 10rem;\n\theight: 10rem;\n}\n.itemTextCon{\n\tflex-direction: column;\n\tgap: 1rem;\n}\n.itemTextCon > h1{\n\tfont-weight: bolder;\n}\n.itemTextCon > p{\n\tfont-size: 1rem;\n\tfont-style: italic;\n}\n.contactContent{\n\tposition:relative;\n\ttop: 2rem;\n\tgap: 3rem;\n}\n#map{\n\theight: 28rem;\n\twidth: 28rem;\n\tz-index: -1;\n}\n#detailsCon{\n\tflex-direction: column;\n\tgap: 1rem;\n}\n#address{\n\tflex-direction: column;\n}\n#contactForm{\n\tflex-direction: column;\n}\n\ntextarea{\n\tresize: none;\n}\n",""]);const c=a},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",o=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),o&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),o&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,o,i,r){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var d=0;d<t.length;d++){var u=[].concat(t[d]);o&&a[u[0]]||(void 0!==r&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=r),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),i&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=i):u[4]="".concat(i)),e.push(u))}},e}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function n(t){for(var n=-1,o=0;o<e.length;o++)if(e[o].identifier===t){n=o;break}return n}function o(t,o){for(var r={},a=[],c=0;c<t.length;c++){var s=t[c],d=o.base?s[0]+o.base:s[0],u=r[d]||0,m="".concat(d," ").concat(u);r[d]=u+1;var l=n(m),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==l)e[l].references++,e[l].updater(p);else{var b=i(p,o);o.byIndex=c,e.splice(c,0,{identifier:m,updater:b,references:1})}a.push(m)}return a}function i(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,i){var r=o(t=t||[],i=i||{});return function(t){t=t||[];for(var a=0;a<r.length;a++){var c=n(r[a]);e[c].references--}for(var s=o(t,i),d=0;d<r.length;d++){var u=n(r[d]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}r=s}}},569:t=>{var e={};t.exports=function(t,n){var o=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var i=void 0!==n.layer;i&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,i&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(o,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(o){var i=e[o];if(void 0!==i)return i.exports;var r=e[o]={id:o,exports:{}};return t[o](r,r.exports,n),r.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0,(()=>{var t=n(379),e=n.n(t),o=n(795),i=n.n(o),r=n(569),a=n.n(r),c=n(565),s=n.n(c),d=n(216),u=n.n(d),m=n(589),l=n.n(m),p=n(426),b={};b.styleTagTransform=l(),b.setAttributes=s(),b.insert=a().bind(null,"head"),b.domAPI=i(),b.insertStyleElement=u(),e()(p.Z,b),p.Z&&p.Z.locals&&p.Z.locals;const f=(t,e,n)=>{const o=document.createElement("div");o.setAttribute("id",t.split(" ").join("")+"Con"),o.setAttribute("class","itemCon");const i=document.createElement("div");i.setAttribute("id",t.split(" ").join("")+"ImgCon"),i.setAttribute("class","itemImgCon");const r=document.createElement("img");r.setAttribute("src",t.split(" ").join("")+".png"),r.setAttribute("class","itemImg");const a=document.createElement("div");a.setAttribute("id",t.split(" ").join("")+"TextCon"),a.setAttribute("class","itemTextCon");const c=document.createElement("h1");c.setAttribute("id",t.split(" ").join("")+"TextHeader"),c.textContent=t;const s=document.createElement("p");s.setAttribute("id",t.split(" ").join("")+"TextPara"),s.textContent=e,a.append(c,s),i.append(r),o.append(i,a),n.append(o)},h=(t,e)=>({name:()=>t,description:()=>e});let v=[h("First Item","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),h("Second Item","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),h("Third Item","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),h("Fourth Item","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")];const g=(t,e)=>{const n=document.createElement("div");n.setAttribute("id",t+"Con");const o=document.createElement("input");o.setAttribute("id",t),o.setAttribute("type","text"),o.setAttribute("class","inputField"),o.setAttribute("name",t.toLowerCase()),o.setAttribute("placeholder",t),o.setAttribute("required","true"),o.setAttribute("minlength","1"),n.append(o),e.append(n)},A=()=>{const t=document.createElement("div");t.setAttribute("id","contentCon");const e=document.createElement("div");e.setAttribute("id","content"),e.setAttribute("class","homeContent");for(let t=0;t<y.length;t++)C(y[t].type(),y[t].header(),y[t].para(),"img",e);t.append(e),document.body.appendChild(t)},C=(t,e,n,o,i)=>{const r=document.createElement("div");r.setAttribute("id",t.toLowerCase()),r.setAttribute("class","sections");const a=document.createElement("img");a.setAttribute("class","sectionImg"),a.setAttribute("src",o+".png");const c=document.createElement("div");c.setAttribute("id",t.toLowerCase()+"TextCon"),c.setAttribute("class","textCon");const s=document.createElement("h1");s.textContent=e;const d=document.createElement("p");d.textContent=n,c.append(s,d),r.append(a,c),i.append(r)},x=()=>{document.getElementById("contentCon").remove()},E=(t,e,n)=>({type:()=>t,header:()=>e,para:()=>n});let y=[E("Goal","Our Purpose","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),E("Team","Meet the Team","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")];(()=>{const t=document.createElement("div");t.setAttribute("id","headerCon");const e=document.createElement("header"),n=document.createElement("div");n.setAttribute("id","imgDiv");const o=document.createElement("img");o.setAttribute("id","logo"),n.append(o);const i=document.createElement("ul"),r=document.createElement("li");r.textContent="Home",r.addEventListener("click",(()=>{x(),A()}));const a=document.createElement("li");a.textContent="Menu",a.addEventListener("click",(()=>{x(),(()=>{const t=document.createElement("div");t.setAttribute("id","contentCon");const e=document.createElement("div");e.setAttribute("id","content"),e.setAttribute("class","menuContent");const n=document.createElement("div");n.setAttribute("id","menuHeaderCon");const o=document.createElement("h1");o.textContent="Top Sellers",n.append(o),e.append(n);for(let t=0;t<v.length;t++)f(v[t].name(),v[t].description(),e);t.append(e),document.body.append(t)})()}));const c=document.createElement("li");c.textContent="Contact",c.addEventListener("click",(()=>{x(),(()=>{const t=document.createElement("div");t.setAttribute("id","contentCon");const e=document.createElement("div");e.setAttribute("id","content"),e.setAttribute("class","contactContent"),(t=>{const e=document.createElement("div");e.setAttribute("id","map");const n=document.createElement("iframe");n.setAttribute("height","450rem"),n.setAttribute("width","450rem"),n.setAttribute("allowfullscreen","true"),n.setAttribute("loading","lazy"),n.setAttribute("src","https://www.google.com/maps/embed/v1/place?key=AIzaSyATaCCAPbYWTfSDfkQlMTua29Tqslm2UI4&q=Melbourne+Central,Melbourne+VIC"),e.append(n),t.append(e)})(e),(t=>{const e=document.createElement("div");e.setAttribute("id","detailsCon");const n=document.createElement("div");n.setAttribute("id","addressCon");const o=document.createElement("div");o.setAttribute("id","address");const i=document.createElement("p");i.setAttribute("id","streetName");const r=document.createElement("p");r.setAttribute("id","subrurbName");const a=document.createElement("p");a.setAttribute("id","countryName"),i.textContent="123 Placeholder Street,",r.textContent="Placeholder 0000,",a.textContent="Melbourne, VIC",o.append(i,r,a);const c=document.createElement("div");c.setAttribute("id","numberCon");const s=document.createElement("p");s.setAttribute("id","number"),s.textContent="0412 345 678",n.append(o),c.append(s),e.append(n,c),t.append(e)})(e),(t=>{const e=document.createElement("div");e.setAttribute("id","formCon");const n=document.createElement("form");n.setAttribute("id","contactForm"),e.append(n),g("Name",n),g("Email",n),g("Subject",n);const o=document.createElement("div");o.setAttribute("id","commentSectionCon");const i=document.createElement("textArea");i.setAttribute("id","commentSection"),i.setAttribute("name","feedback"),i.setAttribute("rows","14"),i.setAttribute("cols","100"),i.setAttribute("placeholder","Enter your comments here...");const r=document.createElement("div");r.setAttribute("id","submitButtonCon");const a=document.createElement("button");a.setAttribute("id","submitButton"),a.setAttribute("type","button"),a.setAttribute("value","Submit"),a.textContent="Submit",r.append(a),o.append(i),n.append(o,r),t.append(e)})(e),t.append(e),document.body.appendChild(t)})()})),i.append(r,a,c),e.append(n,i),t.append(e),document.body.append(t)})(),A()})()})();