/*! For license information please see common.74e62dfb3c1e2da9.esm.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([[8592],{47177:(e,t,n)=>{"use strict";n.r(t),n.d(t,{detectEnv:()=>v,detectOS:()=>y,formatIOSMobile:()=>U,formatMobileRegistry:()=>H,formatMobileRegistryEntry:()=>z,getClientMeta:()=>I,getCrypto:()=>$,getCryptoOrThrow:()=>B,getDappRegistryUrl:()=>Y,getDocument:()=>L,getDocumentOrThrow:()=>k,getFromWindow:()=>W,getFromWindowOrThrow:()=>A,getLocal:()=>V,getLocalStorage:()=>P,getLocalStorageOrThrow:()=>E,getLocation:()=>x,getLocationOrThrow:()=>T,getMobileLinkRegistry:()=>J,getMobileRegistryEntry:()=>G,getNavigator:()=>N,getNavigatorOrThrow:()=>_,getWalletRegistryUrl:()=>F,isAndroid:()=>O,isBrowser:()=>S,isIOS:()=>b,isMobile:()=>C,isNode:()=>M,mobileLinkChoiceKey:()=>Q,removeLocal:()=>K,safeJsonParse:()=>j,safeJsonStringify:()=>D,saveMobileLinkInfo:()=>X,setLocal:()=>R});var o=n(76036),r=n(98053),i=n(13158),s=function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var o=Array(e),r=0;for(t=0;t<n;t++)for(var i=arguments[t],s=0,a=i.length;s<a;s++,r++)o[r]=i[s];return o},a=function(e,t,n){this.name=e,this.version=t,this.os=n,this.type="browser"},u=function(e){this.version=e,this.type="node",this.name="node",this.os=i.platform},c=function(e,t,n,o){this.name=e,this.version=t,this.os=n,this.bot=o,this.type="bot-device"},f=function(){this.type="bot",this.bot=!0,this.name="bot",this.version=null,this.os=null},l=function(){this.type="react-native",this.name="react-native",this.version=null,this.os=null},d=/(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,h=[["aol",/AOLShield\/([0-9\._]+)/],["edge",/Edge\/([0-9\._]+)/],["edge-ios",/EdgiOS\/([0-9\._]+)/],["yandexbrowser",/YaBrowser\/([0-9\._]+)/],["kakaotalk",/KAKAOTALK\s([0-9\.]+)/],["samsung",/SamsungBrowser\/([0-9\.]+)/],["silk",/\bSilk\/([0-9._-]+)\b/],["miui",/MiuiBrowser\/([0-9\.]+)$/],["beaker",/BeakerBrowser\/([0-9\.]+)/],["edge-chromium",/EdgA?\/([0-9\.]+)/],["chromium-webview",/(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["chrome",/(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["phantomjs",/PhantomJS\/([0-9\.]+)(:?\s|$)/],["crios",/CriOS\/([0-9\.]+)(:?\s|$)/],["firefox",/Firefox\/([0-9\.]+)(?:\s|$)/],["fxios",/FxiOS\/([0-9\.]+)/],["opera-mini",/Opera Mini.*Version\/([0-9\.]+)/],["opera",/Opera\/([0-9\.]+)(?:\s|$)/],["opera",/OPR\/([0-9\.]+)(:?\s|$)/],["ie",/Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],["ie",/MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],["ie",/MSIE\s(7\.0)/],["bb10",/BB10;\sTouch.*Version\/([0-9\.]+)/],["android",/Android\s([0-9\.]+)/],["ios",/Version\/([0-9\._]+).*Mobile.*Safari.*/],["safari",/Version\/([0-9\._]+).*Safari/],["facebook",/FBAV\/([0-9\.]+)/],["instagram",/Instagram\s([0-9\.]+)/],["ios-webview",/AppleWebKit\/([0-9\.]+).*Mobile/],["ios-webview",/AppleWebKit\/([0-9\.]+).*Gecko\)$/],["searchbot",/alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/]],p=[["iOS",/iP(hone|od|ad)/],["Android OS",/Android/],["BlackBerry OS",/BlackBerry|BB10/],["Windows Mobile",/IEMobile/],["Amazon OS",/Kindle/],["Windows 3.11",/Win16/],["Windows 95",/(Windows 95)|(Win95)|(Windows_95)/],["Windows 98",/(Windows 98)|(Win98)/],["Windows 2000",/(Windows NT 5.0)|(Windows 2000)/],["Windows XP",/(Windows NT 5.1)|(Windows XP)/],["Windows Server 2003",/(Windows NT 5.2)/],["Windows Vista",/(Windows NT 6.0)/],["Windows 7",/(Windows NT 6.1)/],["Windows 8",/(Windows NT 6.2)/],["Windows 8.1",/(Windows NT 6.3)/],["Windows 10",/(Windows NT 10.0)/],["Windows ME",/Windows ME/],["Open BSD",/OpenBSD/],["Sun OS",/SunOS/],["Chrome OS",/CrOS/],["Linux",/(Linux)|(X11)/],["Mac OS",/(Mac_PowerPC)|(Macintosh)/],["QNX",/QNX/],["BeOS",/BeOS/],["OS/2",/OS\/2/]];function w(e){return e?m(e):"undefined"==typeof document&&"undefined"!=typeof navigator&&"ReactNative"===navigator.product?new l:"undefined"!=typeof navigator?m(navigator.userAgent):void 0!==i&&i.version?new u(i.version.slice(1)):null}function g(e){return""!==e&&h.reduce((function(t,n){var o=n[0],r=n[1];if(t)return t;var i=r.exec(e);return!!i&&[o,i]}),!1)}function m(e){var t=g(e);if(!t)return null;var n=t[0],o=t[1];if("searchbot"===n)return new f;var r=o[1]&&o[1].split(/[._]/).slice(0,3);r?r.length<3&&(r=s(r,function(e){for(var t=[],n=0;n<e;n++)t.push("0");return t}(3-r.length))):r=[];var i=r.join("."),u=function(e){for(var t=0,n=p.length;t<n;t++){var o=p[t],r=o[0];if(o[1].exec(e))return r}return null}(e),l=d.exec(e);return l&&l[1]?new c(n,i,u,l[1]):new a(n,i,u)}function v(e){return w(e)}function y(){const e=v();return e&&e.os?e.os:void 0}function O(){const e=y();return!!e&&e.toLowerCase().includes("android")}function b(){const e=y();return!!e&&(e.toLowerCase().includes("ios")||e.toLowerCase().includes("mac")&&navigator.maxTouchPoints>1)}function C(){return!!y()&&(O()||b())}function M(){const e=v();return!(!e||!e.name)&&"node"===e.name.toLowerCase()}function S(){return!M()&&!!N()}const W=r.sD,A=r.$2,k=r.uT,L=r.Me,_=r.Gw,N=r.jW,T=r.UO,x=r.k$,B=r.VQ,$=r.MX,E=r.xP,P=r.$o;function I(){return o.D()}const j=function(e){if("string"!=typeof e)throw new Error("Cannot safe json parse value of type "+typeof e);try{return JSON.parse(e)}catch(t){return e}},D=function(e){return"string"==typeof e?e:JSON.stringify(e)};function R(e,t){const n=D(t),o=P();o&&o.setItem(e,n)}function V(e){let t=null,n=null;const o=P();return o&&(n=o.getItem(e)),t=n?j(n):n,t}function K(e){const t=P();t&&t.removeItem(e)}const Q="WALLETCONNECT_DEEPLINK_CHOICE";function U(e,t){const n=encodeURIComponent(e);return t.universalLink?`${t.universalLink}/wc?uri=${n}`:t.deepLink?`${t.deepLink}${t.deepLink.endsWith(":")?"//":"/"}wc?uri=${n}`:""}function X(e){const t=e.href.split("?")[0];R(Q,Object.assign(Object.assign({},e),{href:t}))}function G(e,t){return e.filter((e=>e.name.toLowerCase().includes(t.toLowerCase())))[0]}function J(e,t){let n=e;return t&&(n=t.map((t=>G(e,t))).filter(Boolean)),n}const q="https://registry.walletconnect.com";function F(){return q+"/api/v2/wallets"}function Y(){return q+"/api/v2/dapps"}function z(e,t="mobile"){var n;return{name:e.name||"",shortName:e.metadata.shortName||"",color:e.metadata.colors.primary||"",logo:null!==(n=e.image_url.sm)&&void 0!==n?n:"",universalLink:e[t].universal||"",deepLink:e[t].native||""}}function H(e,t="mobile"){return Object.values(e).filter((e=>!!e[t].universal||!!e[t].native)).map((e=>z(e,t)))}},98053:(e,t)=>{"use strict";function n(e){let t;return"undefined"!=typeof window&&void 0!==window[e]&&(t=window[e]),t}function o(e){const t=n(e);if(!t)throw new Error(`${e} is not defined in Window`);return t}t.$o=t.xP=t.MX=t.VQ=t.k$=t.UO=t.jW=t.Gw=t.Me=t.uT=t.$2=t.sD=void 0,t.sD=n,t.$2=o,t.uT=function(){return o("document")},t.Me=function(){return n("document")},t.Gw=function(){return o("navigator")},t.jW=function(){return n("navigator")},t.UO=function(){return o("location")},t.k$=function(){return n("location")},t.VQ=function(){return o("crypto")},t.MX=function(){return n("crypto")},t.xP=function(){return o("localStorage")},t.$o=function(){return n("localStorage")}},76036:(e,t,n)=>{"use strict";t.D=void 0;const o=n(69589);t.D=function(){let e,t;try{e=o.getDocumentOrThrow(),t=o.getLocationOrThrow()}catch(i){return null}function n(...t){const n=e.getElementsByTagName("meta");for(let e=0;e<n.length;e++){const o=n[e],r=["itemprop","property","name"].map((e=>o.getAttribute(e))).filter((e=>!!e&&t.includes(e)));if(r.length&&r){const e=o.getAttribute("content");if(e)return e}}return""}const r=function(){let t=n("name","og:site_name","og:title","twitter:title");return t||(t=e.title),t}();return{description:n("description","og:description","twitter:description","keywords"),url:t.origin,icons:function(){const n=e.getElementsByTagName("link"),o=[];for(let e=0;e<n.length;e++){const r=n[e],i=r.getAttribute("rel");if(i&&i.toLowerCase().indexOf("icon")>-1){const e=r.getAttribute("href");if(e)if(-1===e.toLowerCase().indexOf("https:")&&-1===e.toLowerCase().indexOf("http:")&&0!==e.indexOf("//")){let n=t.protocol+"//"+t.host;if(0===e.indexOf("/"))n+=e;else{const o=t.pathname.split("/");o.pop();n+=o.join("/")+"/"+e}o.push(n)}else if(0===e.indexOf("//")){const n=t.protocol+e;o.push(n)}else o.push(e)}}return o}(),name:r}}},97421:(e,t)=>{"use strict";t.byteLength=function(e){var t=u(e),n=t[0],o=t[1];return 3*(n+o)/4-o},t.toByteArray=function(e){var t,n,i=u(e),s=i[0],a=i[1],c=new r(function(e,t,n){return 3*(t+n)/4-n}(0,s,a)),f=0,l=a>0?s-4:s;for(n=0;n<l;n+=4)t=o[e.charCodeAt(n)]<<18|o[e.charCodeAt(n+1)]<<12|o[e.charCodeAt(n+2)]<<6|o[e.charCodeAt(n+3)],c[f++]=t>>16&255,c[f++]=t>>8&255,c[f++]=255&t;2===a&&(t=o[e.charCodeAt(n)]<<2|o[e.charCodeAt(n+1)]>>4,c[f++]=255&t);1===a&&(t=o[e.charCodeAt(n)]<<10|o[e.charCodeAt(n+1)]<<4|o[e.charCodeAt(n+2)]>>2,c[f++]=t>>8&255,c[f++]=255&t);return c},t.fromByteArray=function(e){for(var t,o=e.length,r=o%3,i=[],s=16383,a=0,u=o-r;a<u;a+=s)i.push(c(e,a,a+s>u?u:a+s));1===r?(t=e[o-1],i.push(n[t>>2]+n[t<<4&63]+"==")):2===r&&(t=(e[o-2]<<8)+e[o-1],i.push(n[t>>10]+n[t>>4&63]+n[t<<2&63]+"="));return i.join("")};for(var n=[],o=[],r="undefined"!=typeof Uint8Array?Uint8Array:Array,i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",s=0,a=i.length;s<a;++s)n[s]=i[s],o[i.charCodeAt(s)]=s;function u(e){var t=e.length;if(t%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var n=e.indexOf("=");return-1===n&&(n=t),[n,n===t?0:4-n%4]}function c(e,t,o){for(var r,i,s=[],a=t;a<o;a+=3)r=(e[a]<<16&16711680)+(e[a+1]<<8&65280)+(255&e[a+2]),s.push(n[(i=r)>>18&63]+n[i>>12&63]+n[i>>6&63]+n[63&i]);return s.join("")}o["-".charCodeAt(0)]=62,o["_".charCodeAt(0)]=63},48137:e=>{"use strict";var t={single_source_shortest_paths:function(e,n,o){var r={},i={};i[n]=0;var s,a,u,c,f,l,d,h=t.PriorityQueue.make();for(h.push(n,0);!h.empty();)for(u in a=(s=h.pop()).value,c=s.cost,f=e[a]||{})f.hasOwnProperty(u)&&(l=c+f[u],d=i[u],(void 0===i[u]||d>l)&&(i[u]=l,h.push(u,l),r[u]=a));if(void 0!==o&&void 0===i[o]){var p=["Could not find a path from ",n," to ",o,"."].join("");throw new Error(p)}return r},extract_shortest_path_from_predecessor_list:function(e,t){for(var n=[],o=t;o;)n.push(o),e[o],o=e[o];return n.reverse(),n},find_path:function(e,n,o){var r=t.single_source_shortest_paths(e,n,o);return t.extract_shortest_path_from_predecessor_list(r,o)},PriorityQueue:{make:function(e){var n,o=t.PriorityQueue,r={};for(n in e=e||{},o)o.hasOwnProperty(n)&&(r[n]=o[n]);return r.queue=[],r.sorter=e.sorter||o.default_sorter,r},default_sorter:function(e,t){return e.cost-t.cost},push:function(e,t){var n={value:e,cost:t};this.queue.push(n),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return 0===this.queue.length}}};e.exports=t},89540:(e,t)=>{t.read=function(e,t,n,o,r){var i,s,a=8*r-o-1,u=(1<<a)-1,c=u>>1,f=-7,l=n?r-1:0,d=n?-1:1,h=e[t+l];for(l+=d,i=h&(1<<-f)-1,h>>=-f,f+=a;f>0;i=256*i+e[t+l],l+=d,f-=8);for(s=i&(1<<-f)-1,i>>=-f,f+=o;f>0;s=256*s+e[t+l],l+=d,f-=8);if(0===i)i=1-c;else{if(i===u)return s?NaN:1/0*(h?-1:1);s+=Math.pow(2,o),i-=c}return(h?-1:1)*s*Math.pow(2,i-o)},t.write=function(e,t,n,o,r,i){var s,a,u,c=8*i-r-1,f=(1<<c)-1,l=f>>1,d=23===r?Math.pow(2,-24)-Math.pow(2,-77):0,h=o?0:i-1,p=o?1:-1,w=t<0||0===t&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(a=isNaN(t)?1:0,s=f):(s=Math.floor(Math.log(t)/Math.LN2),t*(u=Math.pow(2,-s))<1&&(s--,u*=2),(t+=s+l>=1?d/u:d*Math.pow(2,1-l))*u>=2&&(s++,u/=2),s+l>=f?(a=0,s=f):s+l>=1?(a=(t*u-1)*Math.pow(2,r),s+=l):(a=t*Math.pow(2,l-1)*Math.pow(2,r),s=0));r>=8;e[n+h]=255&a,h+=p,a/=256,r-=8);for(s=s<<r|a,c+=r;c>0;e[n+h]=255&s,h+=p,s/=256,c-=8);e[n+h-p]|=128*w}}}]);