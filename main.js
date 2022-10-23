(()=>{"use strict";var t={426:(t,e,n)=>{n.d(e,{Z:()=>c});var r=n(81),o=n.n(r),i=n(645),a=n.n(i)()(o());a.push([t.id,"html, body, div, span, applet, object, iframe,\r\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\r\na, abbr, acronym, address, big, cite, code,\r\ndel, dfn, em, img, ins, kbd, q, s, samp,\r\nsmall, strike, strong, sub, sup, tt, var,\r\nb, u, i, center,\r\ndl, dt, dd, ol, ul, li,\r\nfieldset, form, label, legend,\r\ntable, caption, tbody, tfoot, thead, tr, th, td,\r\narticle, aside, canvas, details, embed, \r\nfigure, figcaption, footer, header, hgroup, \r\nmenu, nav, output, ruby, section, summary,\r\ntime, mark, audio, video {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tborder: 0;\r\n\tfont-size: 100%;\r\n\tfont: inherit;\r\n\tvertical-align: baseline;\r\n\tdisplay: inherit;\r\n}\r\n:root{\r\n\t--first-prio-color: #A27B5C;\r\n\t--second-prio-color: #3F4E4F;\r\n\t--third-prio-color:#2C3639;\r\n\t--fourth-prio-color:#DCD7C9; \r\n\t--highlight-color: #4c5b5c;\r\n\t--input-field-width: 30rem;\r\n}\r\nbody{\r\n\tdisplay:flex;\r\n\tflex-direction: column;\r\n\tfont-size: 20px;\r\n\tfont-family: sans-serif;\r\n\tbackground-color: var(--fourth-prio-color);\r\n}\r\n#headerCon{\r\n\tposition: fixed;\r\n\tjustify-content: center;\r\n\tbackground-color: var(--third-prio-color);\r\n\tz-index: 1;\r\n\tcolor: var(--first-prio-color);\r\n\twidth: 100%;\r\n\theight: 7rem;\r\n}\r\nheader{\r\n\tflex-direction: row;\r\n\twidth: 70rem;\r\n}\r\nul{\r\n\tlist-style-type: none;\r\n\tflex-direction: row;\r\n\talign-items: center;\r\n\tjustify-content: right;\r\n\twidth: 63rem;\r\n}\r\nli{\r\n\twidth: 10rem;\r\n\theight: 7rem;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\tborder-top-left-radius: 0.5rem;\r\n\tborder-top-right-radius: 0.5rem;\r\n}\r\nli:hover{\r\n\tcursor: pointer;\r\n\tbackground-color: var(--highlight-color);\r\n}\r\n#contentCon{\r\n\tjustify-content: center;\r\n}\r\n#content{\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n\twidth: 70rem;\r\n\tposition:relative;\r\n\tpadding-top: 7rem;\r\n\tcolor: var(--second-prio-color);\r\n}\r\n.sections{\r\n\tpadding: 4rem 0rem 4rem 0rem;\r\n\tgap: 2rem;\r\n}\r\n.textCon{\r\n\tflex-direction: column;\r\n\tgap: 2rem;\r\n}\r\n#team{\r\n\tflex-direction: row-reverse;\r\n}\r\n#logo{\r\n\twidth: 7rem;\r\n\theight: 7rem;\r\n}\r\n.sectionImg{\r\n\twidth: 20rem;\r\n\theight: 20rem;\r\n}\r\n#menuHeaderCon > h1{\r\n\tfont-size: 4rem;\r\n}\r\nh1{\r\n\tcolor: var(--first-prio-color);\r\n\tfont-size: larger;\r\n\tfont-weight: bolder;\r\n}\r\n.itemCon{\r\n\tgap: 1rem;\r\n\twidth: 65rem;\r\n\tpadding: 2rem 0rem 2rem 0rem; \r\n}\r\n.itemImg{\r\n\twidth: 10rem;\r\n\theight: 10rem;\r\n}\r\n.itemTextCon{\r\n\tflex-direction: column;\r\n\tgap: 1rem;\r\n}\r\n.itemTextCon > h1{\r\n\tfont-weight: bolder;\r\n}\r\n.itemTextCon > p{\r\n\tfont-size: 1rem;\r\n\tfont-style: italic;\r\n}\r\n.contactContent{\r\n\tgap: 3rem;\r\n}\r\n#locationCon{\r\n\theight: 28rem;\r\n\twidth: 28rem;\r\n\tz-index: 0;\r\n}\r\n#detailsCon{\r\n\tflex-direction: column;\r\n\tgap: 1rem;\r\n}\r\n#openingTimes{\r\n\tflex-direction: column;\r\n}\r\n#contactForm{\r\n\tflex-direction: column;\r\n\tgap: .5rem;\r\n}\r\n.inputField{\r\n\tbackground-color: var(--fourth-prio-color);\r\n\twidth: var(--input-field-width);\r\n\tborder: 1px solid var(--first-prio-color);\r\n\tborder-radius: 0.5rem;\r\n}\r\ntextarea{\r\n\tresize: none;\r\n\tbackground-color: var(--fourth-prio-color);\r\n\twidth: var(--input-field-width);\r\n\theight: 10rem;\r\n\tborder: 1px solid var(--first-prio-color);\r\n\tborder-radius: 0.5rem;\r\n\r\n}\r\n#submitButton{\r\n\tbackground-color: var(--first-prio-color);\r\n\tcolor: var(--fourth-prio-color);\r\n\tborder: 1px solid var(--first-prio-color);\r\n\tborder-radius: 0.5rem;\r\n\theight: 2rem;\r\n\twidth: var(--input-field-width);\r\n}\r\n#submitButton:hover{\r\n\tcursor: pointer;\r\n}\r\n#footerCon{\r\n\tdisplay:flex;\r\n\tjustify-content: center;\r\n\tbackground-color: var(--third-prio-color);\r\n\twidth: 100%;\r\n\theight: 2rem;\r\n\tposition:fixed;\r\n\tbottom: 0;\r\n\r\n}\r\nfooter{\r\n\tdisplay: flex;\r\n\tflex-direction: row;\r\n\tcolor: var(--first-prio-color);\r\n\tgap: 0.3rem;\r\n}\r\n\r\n.github{\r\n\tcolor: var(--first-prio-color);\r\n\ttext-decoration-line: none;\r\n}",""]);const c=a},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,o,i){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(a[d]=!0)}for(var s=0;s<t.length;s++){var u=[].concat(t[s]);r&&a[u[0]]||(void 0!==i&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=i),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),e.push(u))}},e}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var i={},a=[],c=0;c<t.length;c++){var d=t[c],s=r.base?d[0]+r.base:d[0],u=i[s]||0,l="".concat(s," ").concat(u);i[s]=u+1;var m=n(l),p={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==m)e[m].references++,e[m].updater(p);else{var b=o(p,r);r.byIndex=c,e.splice(c,0,{identifier:l,updater:b,references:1})}a.push(l)}return a}function o(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,o){var i=r(t=t||[],o=o||{});return function(t){t=t||[];for(var a=0;a<i.length;a++){var c=n(i[a]);e[c].references--}for(var d=r(t,o),s=0;s<i.length;s++){var u=n(i[s]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}i=d}}},569:t=>{var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return t[r](i,i.exports,n),i.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0,(()=>{var t=n(379),e=n.n(t),r=n(795),o=n.n(r),i=n(569),a=n.n(i),c=n(565),d=n.n(c),s=n(216),u=n.n(s),l=n(589),m=n.n(l),p=n(426),b={};b.styleTagTransform=m(),b.setAttributes=d(),b.insert=a().bind(null,"head"),b.domAPI=o(),b.insertStyleElement=u(),e()(p.Z,b),p.Z&&p.Z.locals&&p.Z.locals;const h=(t,e,n)=>{const r=document.createElement("div");r.setAttribute("id",t.split(" ").join("")+"Con"),r.setAttribute("class","itemCon");const o=document.createElement("div");o.setAttribute("id",t.split(" ").join("")+"ImgCon"),o.setAttribute("class","itemImgCon");const i=document.createElement("img");i.setAttribute("src",t.split(" ").join("")+".png"),i.setAttribute("class","itemImg");const a=document.createElement("div");a.setAttribute("id",t.split(" ").join("")+"TextCon"),a.setAttribute("class","itemTextCon");const c=document.createElement("h1");c.setAttribute("id",t.split(" ").join("")+"TextHeader"),c.textContent=t;const d=document.createElement("p");d.setAttribute("id",t.split(" ").join("")+"TextPara"),d.textContent=e,a.append(c,d),o.append(i),r.append(o,a),n.append(r)},f=(t,e)=>({name:()=>t,description:()=>e});let g=[f("First Item","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),f("Second Item","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),f("Third Item","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),f("Fourth Item","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),f("Fifth Item","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),f("Sixth Item","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),f("Seventh Item","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),f("Eighth Item","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),f("Nineth Item","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")];const v=(t,e)=>{const n=document.createElement("div");n.setAttribute("id",t+"Con");const r=document.createElement("input");r.setAttribute("id",t),r.setAttribute("type","text"),r.setAttribute("class","inputField"),r.setAttribute("name",t.toLowerCase()),r.setAttribute("placeholder",t),r.setAttribute("required","true"),r.setAttribute("minlength","1"),n.append(r),e.append(n)},C=()=>{const t=document.createElement("div");t.setAttribute("id","contentCon");const e=document.createElement("div");e.setAttribute("id","content"),e.setAttribute("class","homeContent");for(let t=0;t<w.length;t++)A(w[t].type(),w[t].header(),w[t].para(),w[t].type().toLowerCase(),e);t.append(e),document.body.appendChild(t)},A=(t,e,n,r,o)=>{const i=document.createElement("div");i.setAttribute("id",t.toLowerCase()),i.setAttribute("class","sections");const a=document.createElement("img");a.setAttribute("class","sectionImg"),a.setAttribute("src",r+".png");const c=document.createElement("div");c.setAttribute("id",t.toLowerCase()+"TextCon"),c.setAttribute("class","textCon");const d=document.createElement("h1");d.textContent=e;const s=document.createElement("p");s.textContent=n,c.append(d,s),i.append(a,c),o.append(i)},x=()=>{document.getElementById("contentCon").remove(),document.getElementById("footerCon").remove()},E=(t,e,n)=>({type:()=>t,header:()=>e,para:()=>n}),y=()=>{const t=document.createElement("div");t.setAttribute("id","footerCon");const e=document.createElement("footer"),n=document.createElement("p");n.textContent="Copyright ©";const r=document.createElement("a");r.textContent="xNapha",r.setAttribute("href","https://github.com/xNapha"),r.setAttribute("target","_blank"),r.setAttribute("class","github"),e.append(n,r),t.append(e),document.body.append(t)};let w=[E("Goal","Our Purpose","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),E("Team","Meet the Team","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")];(()=>{const t=document.createElement("div");t.setAttribute("id","headerCon");const e=document.createElement("header"),n=document.createElement("div");n.setAttribute("id","imgDiv");const r=document.createElement("img");r.setAttribute("id","logo"),n.append(r);const o=document.createElement("ul"),i=document.createElement("li");i.textContent="Home",i.addEventListener("click",(()=>{x(),C(),y()}));const a=document.createElement("li");a.textContent="Menu",a.addEventListener("click",(()=>{x(),(()=>{const t=document.createElement("div");t.setAttribute("id","contentCon");const e=document.createElement("div");e.setAttribute("id","content"),e.setAttribute("class","menuContent");const n=document.createElement("div");n.setAttribute("id","menuHeaderCon");const r=document.createElement("h1");r.textContent="Top Sellers",n.append(r),e.append(n);for(let t=0;t<g.length;t++)h(g[t].name(),g[t].description(),e);t.append(e),document.body.append(t)})(),y()}));const c=document.createElement("li");c.textContent="Contact",c.addEventListener("click",(()=>{x(),(()=>{const t=document.createElement("div");t.setAttribute("id","contentCon");const e=document.createElement("div");e.setAttribute("id","content"),e.setAttribute("class","contactContent"),(t=>{const e=document.createElement("div");e.setAttribute("id","locationCon");const n=document.createElement("iframe");n.setAttribute("height","450rem"),n.setAttribute("width","450rem"),n.setAttribute("allowfullscreen","true"),n.setAttribute("loading","lazy"),n.setAttribute("src","https://www.google.com/maps/embed/v1/place?key=AIzaSyATaCCAPbYWTfSDfkQlMTua29Tqslm2UI4&q=Melbourne+Central,Melbourne+VIC"),e.append(n),t.append(e)})(e),(t=>{const e=document.createElement("div");e.setAttribute("id","detailsCon");const n=document.createElement("div");n.setAttribute("id","openingTimesCon");const r=document.createElement("div");r.setAttribute("id","openingTimes");const o=document.createElement("p");o.setAttribute("id","head");const i=document.createElement("p");i.setAttribute("id","subrurbName");const a=document.createElement("p");a.setAttribute("id","countryName"),o.textContent="Opening Hours:",i.textContent="Weekdays: 8 AM - 9PM",a.textContent="Weekends: 8 AM - 11PM",r.append(o,i,a);const c=document.createElement("div");c.setAttribute("id","numberCon");const d=document.createElement("p");d.setAttribute("id","number"),d.textContent="0412 345 678",n.append(r),c.append(d),e.append(n,c),t.append(e)})(e),(t=>{const e=document.createElement("div");e.setAttribute("id","formCon");const n=document.createElement("form");n.setAttribute("id","contactForm"),e.append(n),v("Name",n),v("Email",n),v("Subject",n);const r=document.createElement("div");r.setAttribute("id","commentSectionCon");const o=document.createElement("textArea");o.setAttribute("id","commentSection"),o.setAttribute("name","feedback"),o.setAttribute("placeholder","Enter your comments here...");const i=document.createElement("div");i.setAttribute("id","submitButtonCon");const a=document.createElement("button");a.setAttribute("id","submitButton"),a.setAttribute("type","button"),a.setAttribute("value","Submit"),a.textContent="Submit",i.append(a),r.append(o),n.append(r,i),t.append(e)})(e),t.append(e),document.body.appendChild(t)})(),y()})),o.append(i,a,c),e.append(n,o),t.append(e),document.body.append(t)})(),C(),y()})()})();