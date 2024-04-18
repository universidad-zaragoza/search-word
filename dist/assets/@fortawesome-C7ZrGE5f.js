import{P as b}from"./prop-types-BiVUseAU.js";import{R as ca}from"./react-BsEMT7Jt.js";var be={prefix:"fas",iconName:"bullhorn",icon:[512,512,[128226,128363],"f0a1","M480 32c0-12.9-7.8-24.6-19.8-29.6s-25.7-2.2-34.9 6.9L381.7 53c-48 48-113.1 75-181 75H192 160 64c-35.3 0-64 28.7-64 64v96c0 35.3 28.7 64 64 64l0 128c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32V352l8.7 0c67.9 0 133 27 181 75l43.6 43.6c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6V300.4c18.6-8.8 32-32.5 32-60.4s-13.4-51.6-32-60.4V32zm-64 76.7V240 371.3C357.2 317.8 280.5 288 200.7 288H192V192h8.7c79.8 0 156.5-29.8 215.3-83.3z"]},ve={prefix:"fas",iconName:"code",icon:[640,512,[],"f121","M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"]},ge={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]};function la(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),e.push.apply(e,n)}return e}function l(t){for(var a=1;a<arguments.length;a++){var e=arguments[a]!=null?arguments[a]:{};a%2?la(Object(e),!0).forEach(function(n){x(t,n,e[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):la(Object(e)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))})}return t}function mt(t){"@babel/helpers - typeof";return mt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},mt(t)}function he(t,a){if(!(t instanceof a))throw new TypeError("Cannot call a class as a function")}function ua(t,a){for(var e=0;e<a.length;e++){var n=a[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function ye(t,a,e){return a&&ua(t.prototype,a),e&&ua(t,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function x(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function Mt(t,a){return we(t)||Oe(t,a)||ma(t,a)||Pe()}function tt(t){return ke(t)||xe(t)||ma(t)||Ae()}function ke(t){if(Array.isArray(t))return It(t)}function we(t){if(Array.isArray(t))return t}function xe(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Oe(t,a){var e=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(e!=null){var n=[],r=!0,i=!1,o,s;try{for(e=e.call(t);!(r=(o=e.next()).done)&&(n.push(o.value),!(a&&n.length===a));r=!0);}catch(f){i=!0,s=f}finally{try{!r&&e.return!=null&&e.return()}finally{if(i)throw s}}return n}}function ma(t,a){if(t){if(typeof t=="string")return It(t,a);var e=Object.prototype.toString.call(t).slice(8,-1);if(e==="Object"&&t.constructor&&(e=t.constructor.name),e==="Map"||e==="Set")return Array.from(t);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return It(t,a)}}function It(t,a){(a==null||a>t.length)&&(a=t.length);for(var e=0,n=new Array(a);e<a;e++)n[e]=t[e];return n}function Ae(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Pe(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var da=function(){},Lt={},pa={},ba=null,va={mark:da,measure:da};try{typeof window<"u"&&(Lt=window),typeof document<"u"&&(pa=document),typeof MutationObserver<"u"&&(ba=MutationObserver),typeof performance<"u"&&(va=performance)}catch{}var Ne=Lt.navigator||{},ga=Ne.userAgent,ha=ga===void 0?"":ga,T=Lt,g=pa,ya=ba,dt=va;T.document;var M=!!g.documentElement&&!!g.head&&typeof g.addEventListener=="function"&&typeof g.createElement=="function",ka=~ha.indexOf("MSIE")||~ha.indexOf("Trident/"),pt,bt,vt,gt,ht,I="___FONT_AWESOME___",Rt=16,wa="fa",xa="svg-inline--fa",V="data-fa-i2svg",Yt="data-fa-pseudo-element",je="data-fa-pseudo-element-pending",Tt="data-prefix",Dt="data-icon",Oa="fontawesome-i2svg",Se="async",Ce=["HTML","HEAD","STYLE","SCRIPT"],Aa=function(){try{return!0}catch{return!1}}(),h="classic",y="sharp",Ft=[h,y];function at(t){return new Proxy(t,{get:function(a,e){return e in a?a[e]:a[h]}})}var et=at((pt={},x(pt,h,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),x(pt,y,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),pt)),nt=at((bt={},x(bt,h,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),x(bt,y,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),bt)),rt=at((vt={},x(vt,h,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),x(vt,y,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),vt)),Ee=at((gt={},x(gt,h,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),x(gt,y,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),gt)),ze=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,Pa="fa-layers-text",Me=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Ie=at((ht={},x(ht,h,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),x(ht,y,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),ht)),Na=[1,2,3,4,5,6,7,8,9,10],Le=Na.concat([11,12,13,14,15,16,17,18,19,20]),Re=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],_={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},it=new Set;Object.keys(nt[h]).map(it.add.bind(it)),Object.keys(nt[y]).map(it.add.bind(it));var Ye=[].concat(Ft,tt(it),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",_.GROUP,_.SWAP_OPACITY,_.PRIMARY,_.SECONDARY]).concat(Na.map(function(t){return"".concat(t,"x")})).concat(Le.map(function(t){return"w-".concat(t)})),ot=T.FontAwesomeConfig||{};function Te(t){var a=g.querySelector("script["+t+"]");if(a)return a.getAttribute(t)}function De(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(g&&typeof g.querySelector=="function"){var Fe=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Fe.forEach(function(t){var a=Mt(t,2),e=a[0],n=a[1],r=De(Te(e));r!=null&&(ot[n]=r)})}var ja={styleDefault:"solid",familyDefault:"classic",cssPrefix:wa,replacementClass:xa,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};ot.familyPrefix&&(ot.cssPrefix=ot.familyPrefix);var q=l(l({},ja),ot);q.autoReplaceSvg||(q.observeMutations=!1);var m={};Object.keys(ja).forEach(function(t){Object.defineProperty(m,t,{enumerable:!0,set:function(a){q[t]=a,st.forEach(function(e){return e(m)})},get:function(){return q[t]}})}),Object.defineProperty(m,"familyPrefix",{enumerable:!0,set:function(t){q.cssPrefix=t,st.forEach(function(a){return a(m)})},get:function(){return q.cssPrefix}}),T.FontAwesomeConfig=m;var st=[];function He(t){return st.push(t),function(){st.splice(st.indexOf(t),1)}}var D=Rt,z={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function We(t){if(!(!t||!M)){var a=g.createElement("style");a.setAttribute("type","text/css"),a.innerHTML=t;for(var e=g.head.childNodes,n=null,r=e.length-1;r>-1;r--){var i=e[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(n=i)}return g.head.insertBefore(a,n),t}}var Ue="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function ft(){for(var t=12,a="";t-- >0;)a+=Ue[Math.random()*62|0];return a}function G(t){for(var a=[],e=(t||[]).length>>>0;e--;)a[e]=t[e];return a}function Ht(t){return t.classList?G(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(a){return a})}function Sa(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Ve(t){return Object.keys(t||{}).reduce(function(a,e){return a+"".concat(e,'="').concat(Sa(t[e]),'" ')},"").trim()}function yt(t){return Object.keys(t||{}).reduce(function(a,e){return a+"".concat(e,": ").concat(t[e].trim(),";")},"")}function Wt(t){return t.size!==z.size||t.x!==z.x||t.y!==z.y||t.rotate!==z.rotate||t.flipX||t.flipY}function _e(t){var a=t.transform,e=t.containerWidth,n=t.iconWidth,r={transform:"translate(".concat(e/2," 256)")},i="translate(".concat(a.x*32,", ").concat(a.y*32,") "),o="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),s="rotate(".concat(a.rotate," 0 0)"),f={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(n/2*-1," -256)")};return{outer:r,inner:f,path:c}}function Xe(t){var a=t.transform,e=t.width,n=e===void 0?Rt:e,r=t.height,i=r===void 0?Rt:r,o=t.startCentered,s=o===void 0?!1:o,f="";return s&&ka?f+="translate(".concat(a.x/D-n/2,"em, ").concat(a.y/D-i/2,"em) "):s?f+="translate(calc(-50% + ".concat(a.x/D,"em), calc(-50% + ").concat(a.y/D,"em)) "):f+="translate(".concat(a.x/D,"em, ").concat(a.y/D,"em) "),f+="scale(".concat(a.size/D*(a.flipX?-1:1),", ").concat(a.size/D*(a.flipY?-1:1),") "),f+="rotate(".concat(a.rotate,"deg) "),f}var Be=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, 0));
          transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Ca(){var t=wa,a=xa,e=m.cssPrefix,n=m.replacementClass,r=Be;if(e!==t||n!==a){var i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(a),"g");r=r.replace(i,".".concat(e,"-")).replace(o,"--".concat(e,"-")).replace(s,".".concat(n))}return r}var Ea=!1;function Ut(){m.autoAddCss&&!Ea&&(We(Ca()),Ea=!0)}var qe={mixout:function(){return{dom:{css:Ca,insertCss:Ut}}},hooks:function(){return{beforeDOMElementCreation:function(){Ut()},beforeI2svg:function(){Ut()}}}},L=T||{};L[I]||(L[I]={}),L[I].styles||(L[I].styles={}),L[I].hooks||(L[I].hooks={}),L[I].shims||(L[I].shims=[]);var E=L[I],za=[],Ge=function t(){g.removeEventListener("DOMContentLoaded",t),kt=1,za.map(function(a){return a()})},kt=!1;M&&(kt=(g.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(g.readyState),kt||g.addEventListener("DOMContentLoaded",Ge));function Ke(t){M&&(kt?setTimeout(t,0):za.push(t))}function ct(t){var a=t.tag,e=t.attributes,n=e===void 0?{}:e,r=t.children,i=r===void 0?[]:r;return typeof t=="string"?Sa(t):"<".concat(a," ").concat(Ve(n),">").concat(i.map(ct).join(""),"</").concat(a,">")}function Ma(t,a,e){if(t&&t[a]&&t[a][e])return{prefix:a,iconName:e,icon:t[a][e]}}var $e=function(t,a){return function(e,n,r,i){return t.call(a,e,n,r,i)}},Vt=function(t,a,e,n){var r=Object.keys(t),i=r.length,o=n!==void 0?$e(a,n):a,s,f,c;for(e===void 0?(s=1,c=t[r[0]]):(s=0,c=e);s<i;s++)f=r[s],c=o(c,t[f],f,t);return c};function Je(t){for(var a=[],e=0,n=t.length;e<n;){var r=t.charCodeAt(e++);if(r>=55296&&r<=56319&&e<n){var i=t.charCodeAt(e++);(i&64512)==56320?a.push(((r&1023)<<10)+(i&1023)+65536):(a.push(r),e--)}else a.push(r)}return a}function Ia(t){var a=Je(t);return a.length===1?a[0].toString(16):null}function Qe(t,a){var e=t.length,n=t.charCodeAt(a),r;return n>=55296&&n<=56319&&e>a+1&&(r=t.charCodeAt(a+1),r>=56320&&r<=57343)?(n-55296)*1024+r-56320+65536:n}function La(t){return Object.keys(t).reduce(function(a,e){var n=t[e],r=!!n.icon;return r?a[n.iconName]=n.icon:a[e]=n,a},{})}function _t(t,a){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=e.skipHooks,r=n===void 0?!1:n,i=La(a);typeof E.hooks.addPack=="function"&&!r?E.hooks.addPack(t,La(a)):E.styles[t]=l(l({},E.styles[t]||{}),i),t==="fas"&&_t("fa",a)}var wt,xt,Ot,K=E.styles,Ze=E.shims,tn=(wt={},x(wt,h,Object.values(rt[h])),x(wt,y,Object.values(rt[y])),wt),Xt=null,Ra={},Ya={},Ta={},Da={},Fa={},an=(xt={},x(xt,h,Object.keys(et[h])),x(xt,y,Object.keys(et[y])),xt);function en(t){return~Ye.indexOf(t)}function nn(t,a){var e=a.split("-"),n=e[0],r=e.slice(1).join("-");return n===t&&r!==""&&!en(r)?r:null}var Ha=function(){var t=function(n){return Vt(K,function(r,i,o){return r[o]=Vt(i,n,{}),r},{})};Ra=t(function(n,r,i){if(r[3]&&(n[r[3]]=i),r[2]){var o=r[2].filter(function(s){return typeof s=="number"});o.forEach(function(s){n[s.toString(16)]=i})}return n}),Ya=t(function(n,r,i){if(n[i]=i,r[2]){var o=r[2].filter(function(s){return typeof s=="string"});o.forEach(function(s){n[s]=i})}return n}),Fa=t(function(n,r,i){var o=r[2];return n[i]=i,o.forEach(function(s){n[s]=i}),n});var a="far"in K||m.autoFetchSvg,e=Vt(Ze,function(n,r){var i=r[0],o=r[1],s=r[2];return o==="far"&&!a&&(o="fas"),typeof i=="string"&&(n.names[i]={prefix:o,iconName:s}),typeof i=="number"&&(n.unicodes[i.toString(16)]={prefix:o,iconName:s}),n},{names:{},unicodes:{}});Ta=e.names,Da=e.unicodes,Xt=At(m.styleDefault,{family:m.familyDefault})};He(function(t){Xt=At(t.styleDefault,{family:m.familyDefault})}),Ha();function Bt(t,a){return(Ra[t]||{})[a]}function rn(t,a){return(Ya[t]||{})[a]}function X(t,a){return(Fa[t]||{})[a]}function Wa(t){return Ta[t]||{prefix:null,iconName:null}}function on(t){var a=Da[t],e=Bt("fas",t);return a||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function F(){return Xt}var qt=function(){return{prefix:null,iconName:null,rest:[]}};function At(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.family,n=e===void 0?h:e,r=et[n][t],i=nt[n][t]||nt[n][r],o=t in E.styles?t:null;return i||o||null}var Ua=(Ot={},x(Ot,h,Object.keys(rt[h])),x(Ot,y,Object.keys(rt[y])),Ot);function Pt(t){var a,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.skipLookups,r=n===void 0?!1:n,i=(a={},x(a,h,"".concat(m.cssPrefix,"-").concat(h)),x(a,y,"".concat(m.cssPrefix,"-").concat(y)),a),o=null,s=h;(t.includes(i[h])||t.some(function(c){return Ua[h].includes(c)}))&&(s=h),(t.includes(i[y])||t.some(function(c){return Ua[y].includes(c)}))&&(s=y);var f=t.reduce(function(c,u){var d=nn(m.cssPrefix,u);if(K[u]?(u=tn[s].includes(u)?Ee[s][u]:u,o=u,c.prefix=u):an[s].indexOf(u)>-1?(o=u,c.prefix=At(u,{family:s})):d?c.iconName=d:u!==m.replacementClass&&u!==i[h]&&u!==i[y]&&c.rest.push(u),!r&&c.prefix&&c.iconName){var p=o==="fa"?Wa(c.iconName):{},v=X(c.prefix,c.iconName);p.prefix&&(o=null),c.iconName=p.iconName||v||c.iconName,c.prefix=p.prefix||c.prefix,c.prefix==="far"&&!K.far&&K.fas&&!m.autoFetchSvg&&(c.prefix="fas")}return c},qt());return(t.includes("fa-brands")||t.includes("fab"))&&(f.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(f.prefix="fad"),!f.prefix&&s===y&&(K.fass||m.autoFetchSvg)&&(f.prefix="fass",f.iconName=X(f.prefix,f.iconName)||f.iconName),(f.prefix==="fa"||o==="fa")&&(f.prefix=F()||"fas"),f}var sn=function(){function t(){he(this,t),this.definitions={}}return ye(t,[{key:"add",value:function(){for(var a=this,e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];var i=n.reduce(this._pullDefinitions,{});Object.keys(i).forEach(function(o){a.definitions[o]=l(l({},a.definitions[o]||{}),i[o]),_t(o,i[o]);var s=rt[h][o];s&&_t(s,i[o]),Ha()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(a,e){var n=e.prefix&&e.iconName&&e.icon?{0:e}:e;return Object.keys(n).map(function(r){var i=n[r],o=i.prefix,s=i.iconName,f=i.icon,c=f[2];a[o]||(a[o]={}),c.length>0&&c.forEach(function(u){typeof u=="string"&&(a[o][u]=f)}),a[o][s]=f}),a}}]),t}(),Va=[],$={},J={},fn=Object.keys(J);function cn(t,a){var e=a.mixoutsTo;return Va=t,$={},Object.keys(J).forEach(function(n){fn.indexOf(n)===-1&&delete J[n]}),Va.forEach(function(n){var r=n.mixout?n.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(e[o]=r[o]),mt(r[o])==="object"&&Object.keys(r[o]).forEach(function(s){e[o]||(e[o]={}),e[o][s]=r[o][s]})}),n.hooks){var i=n.hooks();Object.keys(i).forEach(function(o){$[o]||($[o]=[]),$[o].push(i[o])})}n.provides&&n.provides(J)}),e}function Gt(t,a){for(var e=arguments.length,n=new Array(e>2?e-2:0),r=2;r<e;r++)n[r-2]=arguments[r];var i=$[t]||[];return i.forEach(function(o){a=o.apply(null,[a].concat(n))}),a}function B(t){for(var a=arguments.length,e=new Array(a>1?a-1:0),n=1;n<a;n++)e[n-1]=arguments[n];var r=$[t]||[];r.forEach(function(i){i.apply(null,e)})}function R(){var t=arguments[0],a=Array.prototype.slice.call(arguments,1);return J[t]?J[t].apply(null,a):void 0}function Kt(t){t.prefix==="fa"&&(t.prefix="fas");var a=t.iconName,e=t.prefix||F();if(a)return a=X(e,a)||a,Ma(_a.definitions,e,a)||Ma(E.styles,e,a)}var _a=new sn,ln=function(){m.autoReplaceSvg=!1,m.observeMutations=!1,B("noAuto")},un={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return M?(B("beforeI2svg",t),R("pseudoElements2svg",t),R("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=t.autoReplaceSvgRoot;m.autoReplaceSvg===!1&&(m.autoReplaceSvg=!0),m.observeMutations=!0,Ke(function(){dn({autoReplaceSvgRoot:a}),B("watch",t)})}},mn={icon:function(t){if(t===null)return null;if(mt(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:X(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var a=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],e=At(t[0]);return{prefix:e,iconName:X(e,a)||a}}if(typeof t=="string"&&(t.indexOf("".concat(m.cssPrefix,"-"))>-1||t.match(ze))){var n=Pt(t.split(" "),{skipLookups:!0});return{prefix:n.prefix||F(),iconName:X(n.prefix,n.iconName)||n.iconName}}if(typeof t=="string"){var r=F();return{prefix:r,iconName:X(r,t)||t}}}},C={noAuto:ln,config:m,dom:un,parse:mn,library:_a,findIconDefinition:Kt,toHtml:ct},dn=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=t.autoReplaceSvgRoot,e=a===void 0?g:a;(Object.keys(E.styles).length>0||m.autoFetchSvg)&&M&&m.autoReplaceSvg&&C.dom.i2svg({node:e})};function Nt(t,a){return Object.defineProperty(t,"abstract",{get:a}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(e){return ct(e)})}}),Object.defineProperty(t,"node",{get:function(){if(M){var e=g.createElement("div");return e.innerHTML=t.html,e.children}}}),t}function pn(t){var a=t.children,e=t.main,n=t.mask,r=t.attributes,i=t.styles,o=t.transform;if(Wt(o)&&e.found&&!n.found){var s=e.width,f=e.height,c={x:s/f/2,y:.5};r.style=yt(l(l({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:a}]}function bn(t){var a=t.prefix,e=t.iconName,n=t.children,r=t.attributes,i=t.symbol,o=i===!0?"".concat(a,"-").concat(m.cssPrefix,"-").concat(e):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:l(l({},r),{},{id:o}),children:n}]}]}function $t(t){var a=t.icons,e=a.main,n=a.mask,r=t.prefix,i=t.iconName,o=t.transform,s=t.symbol,f=t.title,c=t.maskId,u=t.titleId,d=t.extra,p=t.watchable,v=p===void 0?!1:p,w=n.found?n:e,O=w.width,k=w.height,A=r==="fak",P=[m.replacementClass,i?"".concat(m.cssPrefix,"-").concat(i):""].filter(function(Y){return d.classes.indexOf(Y)===-1}).filter(function(Y){return Y!==""||!!Y}).concat(d.classes).join(" "),N={children:[],attributes:l(l({},d.attributes),{},{"data-prefix":r,"data-icon":i,class:P,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(O," ").concat(k)})},S=A&&!~d.classes.indexOf("fa-fw")?{width:"".concat(O/k*16*.0625,"em")}:{};v&&(N.attributes[V]=""),f&&(N.children.push({tag:"title",attributes:{id:N.attributes["aria-labelledby"]||"title-".concat(u||ft())},children:[f]}),delete N.attributes.title);var j=l(l({},N),{},{prefix:r,iconName:i,main:e,mask:n,maskId:c,transform:o,symbol:s,styles:l(l({},S),d.styles)}),U=n.found&&e.found?R("generateAbstractMask",j)||{children:[],attributes:{}}:R("generateAbstractIcon",j)||{children:[],attributes:{}},Z=U.children,zt=U.attributes;return j.children=Z,j.attributes=zt,s?bn(j):pn(j)}function Xa(t){var a=t.content,e=t.width,n=t.height,r=t.transform,i=t.title,o=t.extra,s=t.watchable,f=s===void 0?!1:s,c=l(l(l({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});f&&(c[V]="");var u=l({},o.styles);Wt(r)&&(u.transform=Xe({transform:r,startCentered:!0,width:e,height:n}),u["-webkit-transform"]=u.transform);var d=yt(u);d.length>0&&(c.style=d);var p=[];return p.push({tag:"span",attributes:c,children:[a]}),i&&p.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),p}function vn(t){var a=t.content,e=t.title,n=t.extra,r=l(l(l({},n.attributes),e?{title:e}:{}),{},{class:n.classes.join(" ")}),i=yt(n.styles);i.length>0&&(r.style=i);var o=[];return o.push({tag:"span",attributes:r,children:[a]}),e&&o.push({tag:"span",attributes:{class:"sr-only"},children:[e]}),o}var Jt=E.styles;function Qt(t){var a=t[0],e=t[1],n=t.slice(4),r=Mt(n,1),i=r[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(m.cssPrefix,"-").concat(_.GROUP)},children:[{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(_.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(_.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:a,height:e,icon:o}}var gn={found:!1,width:512,height:512};function hn(t,a){!Aa&&!m.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(a,'" is missing.'))}function Zt(t,a){var e=a;return a==="fa"&&m.styleDefault!==null&&(a=F()),new Promise(function(n,r){if(R("missingIconAbstract"),e==="fa"){var i=Wa(t)||{};t=i.iconName||t,a=i.prefix||a}if(t&&a&&Jt[a]&&Jt[a][t]){var o=Jt[a][t];return n(Qt(o))}hn(t,a),n(l(l({},gn),{},{icon:m.showMissingIcons&&t?R("missingIconAbstract")||{}:{}}))})}var Ba=function(){},ta=m.measurePerformance&&dt&&dt.mark&&dt.measure?dt:{mark:Ba,measure:Ba},lt='FA "6.5.2"',yn=function(t){return ta.mark("".concat(lt," ").concat(t," begins")),function(){return qa(t)}},qa=function(t){ta.mark("".concat(lt," ").concat(t," ends")),ta.measure("".concat(lt," ").concat(t),"".concat(lt," ").concat(t," begins"),"".concat(lt," ").concat(t," ends"))},aa={begin:yn,end:qa},jt=function(){};function Ga(t){var a=t.getAttribute?t.getAttribute(V):null;return typeof a=="string"}function kn(t){var a=t.getAttribute?t.getAttribute(Tt):null,e=t.getAttribute?t.getAttribute(Dt):null;return a&&e}function wn(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(m.replacementClass)}function xn(){if(m.autoReplaceSvg===!0)return St.replace;var t=St[m.autoReplaceSvg];return t||St.replace}function On(t){return g.createElementNS("http://www.w3.org/2000/svg",t)}function An(t){return g.createElement(t)}function Ka(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.ceFn,n=e===void 0?t.tag==="svg"?On:An:e;if(typeof t=="string")return g.createTextNode(t);var r=n(t.tag);Object.keys(t.attributes||[]).forEach(function(o){r.setAttribute(o,t.attributes[o])});var i=t.children||[];return i.forEach(function(o){r.appendChild(Ka(o,{ceFn:n}))}),r}function Pn(t){var a=" ".concat(t.outerHTML," ");return a="".concat(a,"Font Awesome fontawesome.com "),a}var St={replace:function(t){var a=t[0];if(a.parentNode)if(t[1].forEach(function(n){a.parentNode.insertBefore(Ka(n),a)}),a.getAttribute(V)===null&&m.keepOriginalSource){var e=g.createComment(Pn(a));a.parentNode.replaceChild(e,a)}else a.remove()},nest:function(t){var a=t[0],e=t[1];if(~Ht(a).indexOf(m.replacementClass))return St.replace(t);var n=new RegExp("".concat(m.cssPrefix,"-.*"));if(delete e[0].attributes.id,e[0].attributes.class){var r=e[0].attributes.class.split(" ").reduce(function(o,s){return s===m.replacementClass||s.match(n)?o.toSvg.push(s):o.toNode.push(s),o},{toNode:[],toSvg:[]});e[0].attributes.class=r.toSvg.join(" "),r.toNode.length===0?a.removeAttribute("class"):a.setAttribute("class",r.toNode.join(" "))}var i=e.map(function(o){return ct(o)}).join(`
`);a.setAttribute(V,""),a.innerHTML=i}};function $a(t){t()}function Ja(t,a){var e=typeof a=="function"?a:jt;if(t.length===0)e();else{var n=$a;m.mutateApproach===Se&&(n=T.requestAnimationFrame||$a),n(function(){var r=xn(),i=aa.begin("mutate");t.map(r),i(),e()})}}var ea=!1;function Qa(){ea=!0}function na(){ea=!1}var Ct=null;function Za(t){if(ya&&m.observeMutations){var a=t.treeCallback,e=a===void 0?jt:a,n=t.nodeCallback,r=n===void 0?jt:n,i=t.pseudoElementsCallback,o=i===void 0?jt:i,s=t.observeMutationsRoot,f=s===void 0?g:s;Ct=new ya(function(c){if(!ea){var u=F();G(c).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!Ga(d.addedNodes[0])&&(m.searchPseudoElements&&o(d.target),e(d.target)),d.type==="attributes"&&d.target.parentNode&&m.searchPseudoElements&&o(d.target.parentNode),d.type==="attributes"&&Ga(d.target)&&~Re.indexOf(d.attributeName))if(d.attributeName==="class"&&kn(d.target)){var p=Pt(Ht(d.target)),v=p.prefix,w=p.iconName;d.target.setAttribute(Tt,v||u),w&&d.target.setAttribute(Dt,w)}else wn(d.target)&&r(d.target)})}}),M&&Ct.observe(f,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Nn(){Ct&&Ct.disconnect()}function jn(t){var a=t.getAttribute("style"),e=[];return a&&(e=a.split(";").reduce(function(n,r){var i=r.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(n[o]=s.join(":").trim()),n},{})),e}function Sn(t){var a=t.getAttribute("data-prefix"),e=t.getAttribute("data-icon"),n=t.innerText!==void 0?t.innerText.trim():"",r=Pt(Ht(t));return r.prefix||(r.prefix=F()),a&&e&&(r.prefix=a,r.iconName=e),r.iconName&&r.prefix||(r.prefix&&n.length>0&&(r.iconName=rn(r.prefix,t.innerText)||Bt(r.prefix,Ia(t.innerText))),!r.iconName&&m.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function Cn(t){var a=G(t.attributes).reduce(function(r,i){return r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r},{}),e=t.getAttribute("title"),n=t.getAttribute("data-fa-title-id");return m.autoA11y&&(e?a["aria-labelledby"]="".concat(m.replacementClass,"-title-").concat(n||ft()):(a["aria-hidden"]="true",a.focusable="false")),a}function En(){return{iconName:null,title:null,titleId:null,prefix:null,transform:z,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function te(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},e=Sn(t),n=e.iconName,r=e.prefix,i=e.rest,o=Cn(t),s=Gt("parseNodeAttributes",{},t),f=a.styleParser?jn(t):[];return l({iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:z,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:f,attributes:o}},s)}var zn=E.styles;function ae(t){var a=m.autoReplaceSvg==="nest"?te(t,{styleParser:!1}):te(t);return~a.extra.classes.indexOf(Pa)?R("generateLayersText",t,a):R("generateSvgReplacementMutation",t,a)}var H=new Set;Ft.map(function(t){H.add("fa-".concat(t))}),Object.keys(et[h]).map(H.add.bind(H)),Object.keys(et[y]).map(H.add.bind(H)),H=tt(H);function ee(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!M)return Promise.resolve();var e=g.documentElement.classList,n=function(u){return e.add("".concat(Oa,"-").concat(u))},r=function(u){return e.remove("".concat(Oa,"-").concat(u))},i=m.autoFetchSvg?H:Ft.map(function(u){return"fa-".concat(u)}).concat(Object.keys(zn));i.includes("fa")||i.push("fa");var o=[".".concat(Pa,":not([").concat(V,"])")].concat(i.map(function(u){return".".concat(u,":not([").concat(V,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=G(t.querySelectorAll(o))}catch{}if(s.length>0)n("pending"),r("complete");else return Promise.resolve();var f=aa.begin("onTree"),c=s.reduce(function(u,d){try{var p=ae(d);p&&u.push(p)}catch(v){Aa||v.name==="MissingIcon"&&console.error(v)}return u},[]);return new Promise(function(u,d){Promise.all(c).then(function(p){Ja(p,function(){n("active"),n("complete"),r("pending"),typeof a=="function"&&a(),f(),u()})}).catch(function(p){f(),d(p)})})}function Mn(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;ae(t).then(function(e){e&&Ja([e],a)})}function In(t){return function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=(a||{}).icon?a:Kt(a||{}),r=e.mask;return r&&(r=(r||{}).icon?r:Kt(r||{})),t(n,l(l({},e),{},{mask:r}))}}var Ln=function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.transform,n=e===void 0?z:e,r=a.symbol,i=r===void 0?!1:r,o=a.mask,s=o===void 0?null:o,f=a.maskId,c=f===void 0?null:f,u=a.title,d=u===void 0?null:u,p=a.titleId,v=p===void 0?null:p,w=a.classes,O=w===void 0?[]:w,k=a.attributes,A=k===void 0?{}:k,P=a.styles,N=P===void 0?{}:P;if(t){var S=t.prefix,j=t.iconName,U=t.icon;return Nt(l({type:"icon"},t),function(){return B("beforeDOMElementCreation",{iconDefinition:t,params:a}),m.autoA11y&&(d?A["aria-labelledby"]="".concat(m.replacementClass,"-title-").concat(v||ft()):(A["aria-hidden"]="true",A.focusable="false")),$t({icons:{main:Qt(U),mask:s?Qt(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:S,iconName:j,transform:l(l({},z),n),symbol:i,title:d,maskId:c,titleId:v,extra:{attributes:A,styles:N,classes:O}})})}},Rn={mixout:function(){return{icon:In(Ln)}},hooks:function(){return{mutationObserverCallbacks:function(t){return t.treeCallback=ee,t.nodeCallback=Mn,t}}},provides:function(t){t.i2svg=function(a){var e=a.node,n=e===void 0?g:e,r=a.callback,i=r===void 0?function(){}:r;return ee(n,i)},t.generateSvgReplacementMutation=function(a,e){var n=e.iconName,r=e.title,i=e.titleId,o=e.prefix,s=e.transform,f=e.symbol,c=e.mask,u=e.maskId,d=e.extra;return new Promise(function(p,v){Promise.all([Zt(n,o),c.iconName?Zt(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(w){var O=Mt(w,2),k=O[0],A=O[1];p([a,$t({icons:{main:k,mask:A},prefix:o,iconName:n,transform:s,symbol:f,maskId:u,title:r,titleId:i,extra:d,watchable:!0})])}).catch(v)})},t.generateAbstractIcon=function(a){var e=a.children,n=a.attributes,r=a.main,i=a.transform,o=a.styles,s=yt(o);s.length>0&&(n.style=s);var f;return Wt(i)&&(f=R("generateAbstractTransformGrouping",{main:r,transform:i,containerWidth:r.width,iconWidth:r.width})),e.push(f||r.icon),{children:e,attributes:n}}}},Yn={mixout:function(){return{layer:function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.classes,n=e===void 0?[]:e;return Nt({type:"layer"},function(){B("beforeDOMElementCreation",{assembler:t,params:a});var r=[];return t(function(i){Array.isArray(i)?i.map(function(o){r=r.concat(o.abstract)}):r=r.concat(i.abstract)}),[{tag:"span",attributes:{class:["".concat(m.cssPrefix,"-layers")].concat(tt(n)).join(" ")},children:r}]})}}}},Tn={mixout:function(){return{counter:function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.title,n=e===void 0?null:e,r=a.classes,i=r===void 0?[]:r,o=a.attributes,s=o===void 0?{}:o,f=a.styles,c=f===void 0?{}:f;return Nt({type:"counter",content:t},function(){return B("beforeDOMElementCreation",{content:t,params:a}),vn({content:t.toString(),title:n,extra:{attributes:s,styles:c,classes:["".concat(m.cssPrefix,"-layers-counter")].concat(tt(i))}})})}}}},Dn={mixout:function(){return{text:function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.transform,n=e===void 0?z:e,r=a.title,i=r===void 0?null:r,o=a.classes,s=o===void 0?[]:o,f=a.attributes,c=f===void 0?{}:f,u=a.styles,d=u===void 0?{}:u;return Nt({type:"text",content:t},function(){return B("beforeDOMElementCreation",{content:t,params:a}),Xa({content:t,transform:l(l({},z),n),title:i,extra:{attributes:c,styles:d,classes:["".concat(m.cssPrefix,"-layers-text")].concat(tt(s))}})})}}},provides:function(t){t.generateLayersText=function(a,e){var n=e.title,r=e.transform,i=e.extra,o=null,s=null;if(ka){var f=parseInt(getComputedStyle(a).fontSize,10),c=a.getBoundingClientRect();o=c.width/f,s=c.height/f}return m.autoA11y&&!n&&(i.attributes["aria-hidden"]="true"),Promise.resolve([a,Xa({content:a.innerHTML,width:o,height:s,transform:r,title:n,extra:i,watchable:!0})])}}},Fn=new RegExp('"',"ug"),ne=[1105920,1112319];function Hn(t){var a=t.replace(Fn,""),e=Qe(a,0),n=e>=ne[0]&&e<=ne[1],r=a.length===2?a[0]===a[1]:!1;return{value:Ia(r?a[0]:a),isSecondary:n||r}}function re(t,a){var e="".concat(je).concat(a.replace(":","-"));return new Promise(function(n,r){if(t.getAttribute(e)!==null)return n();var i=G(t.children),o=i.filter(function(Z){return Z.getAttribute(Yt)===a})[0],s=T.getComputedStyle(t,a),f=s.getPropertyValue("font-family").match(Me),c=s.getPropertyValue("font-weight"),u=s.getPropertyValue("content");if(o&&!f)return t.removeChild(o),n();if(f&&u!=="none"&&u!==""){var d=s.getPropertyValue("content"),p=~["Sharp"].indexOf(f[2])?y:h,v=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(f[2])?nt[p][f[2].toLowerCase()]:Ie[p][c],w=Hn(d),O=w.value,k=w.isSecondary,A=f[0].startsWith("FontAwesome"),P=Bt(v,O),N=P;if(A){var S=on(O);S.iconName&&S.prefix&&(P=S.iconName,v=S.prefix)}if(P&&!k&&(!o||o.getAttribute(Tt)!==v||o.getAttribute(Dt)!==N)){t.setAttribute(e,N),o&&t.removeChild(o);var j=En(),U=j.extra;U.attributes[Yt]=a,Zt(P,v).then(function(Z){var zt=$t(l(l({},j),{},{icons:{main:Z,mask:qt()},prefix:v,iconName:N,extra:U,watchable:!0})),Y=g.createElementNS("http://www.w3.org/2000/svg","svg");a==="::before"?t.insertBefore(Y,t.firstChild):t.appendChild(Y),Y.outerHTML=zt.map(function(pe){return ct(pe)}).join(`
`),t.removeAttribute(e),n()}).catch(r)}else n()}else n()})}function Wn(t){return Promise.all([re(t,"::before"),re(t,"::after")])}function Un(t){return t.parentNode!==document.head&&!~Ce.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Yt)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function ie(t){if(M)return new Promise(function(a,e){var n=G(t.querySelectorAll("*")).filter(Un).map(Wn),r=aa.begin("searchPseudoElements");Qa(),Promise.all(n).then(function(){r(),na(),a()}).catch(function(){r(),na(),e()})})}var Vn={hooks:function(){return{mutationObserverCallbacks:function(t){return t.pseudoElementsCallback=ie,t}}},provides:function(t){t.pseudoElements2svg=function(a){var e=a.node,n=e===void 0?g:e;m.searchPseudoElements&&ie(n)}}},oe=!1,_n={mixout:function(){return{dom:{unwatch:function(){Qa(),oe=!0}}}},hooks:function(){return{bootstrap:function(){Za(Gt("mutationObserverCallbacks",{}))},noAuto:function(){Nn()},watch:function(t){var a=t.observeMutationsRoot;oe?na():Za(Gt("mutationObserverCallbacks",{observeMutationsRoot:a}))}}}},se=function(t){var a={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(e,n){var r=n.toLowerCase().split("-"),i=r[0],o=r.slice(1).join("-");if(i&&o==="h")return e.flipX=!0,e;if(i&&o==="v")return e.flipY=!0,e;if(o=parseFloat(o),isNaN(o))return e;switch(i){case"grow":e.size=e.size+o;break;case"shrink":e.size=e.size-o;break;case"left":e.x=e.x-o;break;case"right":e.x=e.x+o;break;case"up":e.y=e.y-o;break;case"down":e.y=e.y+o;break;case"rotate":e.rotate=e.rotate+o;break}return e},a)},Xn={mixout:function(){return{parse:{transform:function(t){return se(t)}}}},hooks:function(){return{parseNodeAttributes:function(t,a){var e=a.getAttribute("data-fa-transform");return e&&(t.transform=se(e)),t}}},provides:function(t){t.generateAbstractTransformGrouping=function(a){var e=a.main,n=a.transform,r=a.containerWidth,i=a.iconWidth,o={transform:"translate(".concat(r/2," 256)")},s="translate(".concat(n.x*32,", ").concat(n.y*32,") "),f="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),c="rotate(".concat(n.rotate," 0 0)"),u={transform:"".concat(s," ").concat(f," ").concat(c)},d={transform:"translate(".concat(i/2*-1," -256)")},p={outer:o,inner:u,path:d};return{tag:"g",attributes:l({},p.outer),children:[{tag:"g",attributes:l({},p.inner),children:[{tag:e.icon.tag,children:e.icon.children,attributes:l(l({},e.icon.attributes),p.path)}]}]}}}},ra={x:0,y:0,width:"100%",height:"100%"};function fe(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||a)&&(t.attributes.fill="black"),t}function Bn(t){return t.tag==="g"?t.children:[t]}var qn={hooks:function(){return{parseNodeAttributes:function(t,a){var e=a.getAttribute("data-fa-mask"),n=e?Pt(e.split(" ").map(function(r){return r.trim()})):qt();return n.prefix||(n.prefix=F()),t.mask=n,t.maskId=a.getAttribute("data-fa-mask-id"),t}}},provides:function(t){t.generateAbstractMask=function(a){var e=a.children,n=a.attributes,r=a.main,i=a.mask,o=a.maskId,s=a.transform,f=r.width,c=r.icon,u=i.width,d=i.icon,p=_e({transform:s,containerWidth:u,iconWidth:f}),v={tag:"rect",attributes:l(l({},ra),{},{fill:"white"})},w=c.children?{children:c.children.map(fe)}:{},O={tag:"g",attributes:l({},p.inner),children:[fe(l({tag:c.tag,attributes:l(l({},c.attributes),p.path)},w))]},k={tag:"g",attributes:l({},p.outer),children:[O]},A="mask-".concat(o||ft()),P="clip-".concat(o||ft()),N={tag:"mask",attributes:l(l({},ra),{},{id:A,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[v,k]},S={tag:"defs",children:[{tag:"clipPath",attributes:{id:P},children:Bn(d)},N]};return e.push(S,{tag:"rect",attributes:l({fill:"currentColor","clip-path":"url(#".concat(P,")"),mask:"url(#".concat(A,")")},ra)}),{children:e,attributes:n}}}},Gn={provides:function(t){var a=!1;T.matchMedia&&(a=T.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var e=[],n={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};e.push({tag:"path",attributes:l(l({},n),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var i=l(l({},r),{},{attributeName:"opacity"}),o={tag:"circle",attributes:l(l({},n),{},{cx:"256",cy:"364",r:"28"}),children:[]};return a||o.children.push({tag:"animate",attributes:l(l({},r),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:l(l({},i),{},{values:"1;0;1;1;0;1;"})}),e.push(o),e.push({tag:"path",attributes:l(l({},n),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:a?[]:[{tag:"animate",attributes:l(l({},i),{},{values:"1;0;0;0;0;1;"})}]}),a||e.push({tag:"path",attributes:l(l({},n),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:l(l({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:e}}}},Kn={hooks:function(){return{parseNodeAttributes:function(t,a){var e=a.getAttribute("data-fa-symbol"),n=e===null?!1:e===""?!0:e;return t.symbol=n,t}}}},$n=[qe,Rn,Yn,Tn,Dn,Vn,_n,Xn,qn,Gn,Kn];cn($n,{mixoutsTo:C}),C.noAuto,C.config,C.library,C.dom;var ia=C.parse;C.findIconDefinition,C.toHtml;var Jn=C.icon;C.layer,C.text,C.counter;function ce(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),e.push.apply(e,n)}return e}function W(t){for(var a=1;a<arguments.length;a++){var e=arguments[a]!=null?arguments[a]:{};a%2?ce(Object(e),!0).forEach(function(n){Q(t,n,e[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):ce(Object(e)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))})}return t}function Et(t){"@babel/helpers - typeof";return Et=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},Et(t)}function Q(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function Qn(t,a){if(t==null)return{};var e={},n=Object.keys(t),r,i;for(i=0;i<n.length;i++)r=n[i],!(a.indexOf(r)>=0)&&(e[r]=t[r]);return e}function Zn(t,a){if(t==null)return{};var e=Qn(t,a),n,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],!(a.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(t,n)&&(e[n]=t[n])}return e}function oa(t){return tr(t)||ar(t)||er(t)||nr()}function tr(t){if(Array.isArray(t))return sa(t)}function ar(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function er(t,a){if(t){if(typeof t=="string")return sa(t,a);var e=Object.prototype.toString.call(t).slice(8,-1);if(e==="Object"&&t.constructor&&(e=t.constructor.name),e==="Map"||e==="Set")return Array.from(t);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return sa(t,a)}}function sa(t,a){(a==null||a>t.length)&&(a=t.length);for(var e=0,n=new Array(a);e<a;e++)n[e]=t[e];return n}function nr(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function rr(t){var a,e=t.beat,n=t.fade,r=t.beatFade,i=t.bounce,o=t.shake,s=t.flash,f=t.spin,c=t.spinPulse,u=t.spinReverse,d=t.pulse,p=t.fixedWidth,v=t.inverse,w=t.border,O=t.listItem,k=t.flip,A=t.size,P=t.rotation,N=t.pull,S=(a={"fa-beat":e,"fa-fade":n,"fa-beat-fade":r,"fa-bounce":i,"fa-shake":o,"fa-flash":s,"fa-spin":f,"fa-spin-reverse":u,"fa-spin-pulse":c,"fa-pulse":d,"fa-fw":p,"fa-inverse":v,"fa-border":w,"fa-li":O,"fa-flip":k===!0,"fa-flip-horizontal":k==="horizontal"||k==="both","fa-flip-vertical":k==="vertical"||k==="both"},Q(a,"fa-".concat(A),typeof A<"u"&&A!==null),Q(a,"fa-rotate-".concat(P),typeof P<"u"&&P!==null&&P!==0),Q(a,"fa-pull-".concat(N),typeof N<"u"&&N!==null),Q(a,"fa-swap-opacity",t.swapOpacity),a);return Object.keys(S).map(function(j){return S[j]?j:null}).filter(function(j){return j})}function ir(t){return t=t-0,t===t}function le(t){return ir(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(a,e){return e?e.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var or=["style"];function sr(t){return t.charAt(0).toUpperCase()+t.slice(1)}function fr(t){return t.split(";").map(function(a){return a.trim()}).filter(function(a){return a}).reduce(function(a,e){var n=e.indexOf(":"),r=le(e.slice(0,n)),i=e.slice(n+1).trim();return r.startsWith("webkit")?a[sr(r)]=i:a[r]=i,a},{})}function ue(t,a){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof a=="string")return a;var n=(a.children||[]).map(function(f){return ue(t,f)}),r=Object.keys(a.attributes||{}).reduce(function(f,c){var u=a.attributes[c];switch(c){case"class":f.attrs.className=u,delete a.attributes.class;break;case"style":f.attrs.style=fr(u);break;default:c.indexOf("aria-")===0||c.indexOf("data-")===0?f.attrs[c.toLowerCase()]=u:f.attrs[le(c)]=u}return f},{attrs:{}}),i=e.style,o=i===void 0?{}:i,s=Zn(e,or);return r.attrs.style=W(W({},r.attrs.style),o),t.apply(void 0,[a.tag,W(W({},r.attrs),s)].concat(oa(n)))}var me=!1;try{me=!0}catch{}function cr(){if(!me&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function de(t){if(t&&Et(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(ia.icon)return ia.icon(t);if(t===null)return null;if(t&&Et(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function fa(t,a){return Array.isArray(a)&&a.length>0||!Array.isArray(a)&&a?Q({},t,a):{}}var ut=ca.forwardRef(function(t,a){var e=t.icon,n=t.mask,r=t.symbol,i=t.className,o=t.title,s=t.titleId,f=t.maskId,c=de(e),u=fa("classes",[].concat(oa(rr(t)),oa(i.split(" ")))),d=fa("transform",typeof t.transform=="string"?ia.transform(t.transform):t.transform),p=fa("mask",de(n)),v=Jn(c,W(W(W(W({},u),d),p),{},{symbol:r,title:o,titleId:s,maskId:f}));if(!v)return cr("Could not find icon",c),null;var w=v.abstract,O={ref:a};return Object.keys(t).forEach(function(k){ut.defaultProps.hasOwnProperty(k)||(O[k]=t[k])}),lr(w[0],O)});ut.displayName="FontAwesomeIcon",ut.propTypes={beat:b.bool,border:b.bool,beatFade:b.bool,bounce:b.bool,className:b.string,fade:b.bool,flash:b.bool,mask:b.oneOfType([b.object,b.array,b.string]),maskId:b.string,fixedWidth:b.bool,inverse:b.bool,flip:b.oneOf([!0,!1,"horizontal","vertical","both"]),icon:b.oneOfType([b.object,b.array,b.string]),listItem:b.bool,pull:b.oneOf(["right","left"]),pulse:b.bool,rotation:b.oneOf([0,90,180,270]),shake:b.bool,size:b.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:b.bool,spinPulse:b.bool,spinReverse:b.bool,symbol:b.oneOfType([b.bool,b.string]),title:b.string,titleId:b.string,transform:b.oneOfType([b.string,b.object]),swapOpacity:b.bool},ut.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var lr=ue.bind(null,ca.createElement);export{ut as F,be as a,ge as b,ve as f};
