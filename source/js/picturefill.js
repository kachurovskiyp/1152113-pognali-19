window.matchMedia||(window.matchMedia=function(){"use strict";var e=window.styleMedia||window.media;if(!e){var t,r=document.createElement("style"),n=document.getElementsByTagName("script")[0];r.type="text/css",r.id="matchmediajs-test",n.parentNode.insertBefore(r,n),t="getComputedStyle"in window&&window.getComputedStyle(r,null)||r.currentStyle,e={matchMedium:function(e){var n="@media "+e+"{ #matchmediajs-test { width: 1px; } }";return r.styleSheet?r.styleSheet.cssText=n:r.textContent=n,"1px"===t.width}}}return function(t){return{matches:e.matchMedium(t||"all"),media:t||"all"}}}()),function(e,t,r){"use strict";function n(t){"object"==typeof module&&"object"==typeof module.exports?module.exports=t:"function"==typeof define&&define.amd&&define("picturefill",function(){return t}),"object"==typeof e&&(e.picturefill=t)}if(e.HTMLPictureElement)n(function(){});else{t.createElement("picture");var i,s,o,a=e.picturefill||{},c=/\s+\+?\d+(e\d+)?w/;a.ns="picturefill",a.srcsetSupported="srcset"in r,a.sizesSupported="sizes"in r,a.curSrcSupported="currentSrc"in r,a.trim=function(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")},a.makeUrl=(i=t.createElement("a"),function(e){return i.href=e,i.href}),a.restrictsMixedContent=function(){return"https:"===e.location.protocol},a.matchesMedia=function(t){return e.matchMedia&&e.matchMedia(t).matches},a.getDpr=function(){return e.devicePixelRatio||1},a.getWidthFromLength=function(e){var r;if(!e||e.indexOf("%")>-1!=!1||!(parseFloat(e)>0||e.indexOf("calc(")>-1))return!1;e=e.replace("vw","%"),a.lengthEl||(a.lengthEl=t.createElement("div"),a.lengthEl.style.cssText="border:0;display:block;font-size:1em;left:0;margin:0;padding:0;position:absolute;visibility:hidden",a.lengthEl.className="helper-from-picturefill-js"),a.lengthEl.style.width="0px";try{a.lengthEl.style.width=e}catch(e){}return t.body.appendChild(a.lengthEl),(r=a.lengthEl.offsetWidth)<=0&&(r=!1),t.body.removeChild(a.lengthEl),r},a.detectTypeSupport=function(t,r){var n=new e.Image;return n.onerror=function(){a.types[t]=!1,l()},n.onload=function(){a.types[t]=1===n.width,l()},n.src=r,"pending"},a.types=a.types||{},a.initTypeDetects=function(){a.types["image/jpeg"]=!0,a.types["image/gif"]=!0,a.types["image/png"]=!0,a.types["image/svg+xml"]=t.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"),a.types["image/webp"]=a.detectTypeSupport("image/webp","data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=")},a.verifyTypeSupport=function(e){var t=e.getAttribute("type");if(null===t||""===t)return!0;var r=a.types[t];return"string"==typeof r&&"pending"!==r?(a.types[t]=a.detectTypeSupport(t,r),"pending"):"function"==typeof r?(r(),"pending"):r},a.parseSize=function(e){var t=/(\([^)]+\))?\s*(.+)/g.exec(e);return{media:t&&t[1],length:t&&t[2]}},a.findWidthFromSourceSize=function(r){for(var n,i=a.trim(r).split(/\s*,\s*/),s=0,o=i.length;s<o;s++){var c=i[s],l=a.parseSize(c),u=l.length,d=l.media;if(u&&((!d||a.matchesMedia(d))&&(n=a.getWidthFromLength(u))))break}return n||Math.max(e.innerWidth||0,t.documentElement.clientWidth)},a.parseSrcset=function(e){for(var t=[];""!==e;){var r,n=(e=e.replace(/^\s+/g,"")).search(/\s/g),i=null;if(-1!==n){if(","!==(r=e.slice(0,n)).slice(-1)&&""!==r||(r=r.replace(/,+$/,""),i=""),e=e.slice(n+1),null===i){var s=e.indexOf(",");-1!==s?(i=e.slice(0,s),e=e.slice(s+1)):(i=e,e="")}}else r=e,e="";(r||i)&&t.push({url:r,descriptor:i})}return t},a.parseDescriptor=function(e,t){var r,n=t||"100vw",i=e&&e.replace(/(^\s+|\s+$)/g,""),s=a.findWidthFromSourceSize(n);if(i)for(var o=i.split(" "),c=o.length-1;c>=0;c--){var l=o[c],u=l&&l.slice(l.length-1);if("h"!==u&&"w"!==u||a.sizesSupported){if("x"===u){var d=l&&parseFloat(l,10);r=d&&!isNaN(d)?d:1}}else r=parseFloat(parseInt(l,10)/s)}return r||1},a.getCandidatesFromSourceSet=function(e,t){for(var r=a.parseSrcset(e),n=[],i=0,s=r.length;i<s;i++){var o=r[i];n.push({url:o.url,resolution:a.parseDescriptor(o.descriptor,t)})}return n},a.dodgeSrcset=function(e){e.srcset&&(e[a.ns].srcset=e.srcset,e.srcset="",e.setAttribute("data-pfsrcset",e[a.ns].srcset))},a.processSourceSet=function(e){var t=e.getAttribute("srcset"),r=e.getAttribute("sizes"),n=[];return"IMG"===e.nodeName.toUpperCase()&&e[a.ns]&&e[a.ns].srcset&&(t=e[a.ns].srcset),t&&(n=a.getCandidatesFromSourceSet(t,r)),n},a.backfaceVisibilityFix=function(e){var t=e.style||{},r="webkitBackfaceVisibility"in t,n=t.zoom;r&&(t.zoom=".999",r=e.offsetWidth,t.zoom=n)},a.setIntrinsicSize=(s={},o=function(e,t,r){t&&e.setAttribute("width",parseInt(t/r,10))},function(r,n){var i;r[a.ns]&&!e.pfStopIntrinsicSize&&(void 0===r[a.ns].dims&&(r[a.ns].dims=r.getAttribute("width")||r.getAttribute("height")),r[a.ns].dims||(n.url in s?o(r,s[n.url],n.resolution):((i=t.createElement("img")).onload=function(){if(s[n.url]=i.width,!s[n.url])try{t.body.appendChild(i),s[n.url]=i.width||i.offsetWidth,t.body.removeChild(i)}catch(e){}r.src===n.url&&o(r,s[n.url],n.resolution),r=null,i.onload=null,i=null},i.src=n.url)))}),a.applyBestCandidate=function(e,t){var r,n,i;e.sort(a.ascendingSort),i=e[(n=e.length)-1];for(var s=0;s<n;s++)if((r=e[s]).resolution>=a.getDpr()){i=r;break}i&&(i.url=a.makeUrl(i.url),t.src!==i.url&&(a.restrictsMixedContent()&&"http:"===i.url.substr(0,"http:".length).toLowerCase()?void 0!==window.console&&console.warn("Blocked mixed content image "+i.url):(t.src=i.url,a.curSrcSupported||(t.currentSrc=t.src),a.backfaceVisibilityFix(t))),a.setIntrinsicSize(t,i))},a.ascendingSort=function(e,t){return e.resolution-t.resolution},a.removeVideoShim=function(e){var t=e.getElementsByTagName("video");if(t.length){for(var r=t[0],n=r.getElementsByTagName("source");n.length;)e.insertBefore(n[0],r);r.parentNode.removeChild(r)}},a.getAllElements=function(){for(var e=[],r=t.getElementsByTagName("img"),n=0,i=r.length;n<i;n++){var s=r[n];("PICTURE"===s.parentNode.nodeName.toUpperCase()||null!==s.getAttribute("srcset")||s[a.ns]&&null!==s[a.ns].srcset)&&e.push(s)}return e},a.getMatch=function(e,t){for(var r,n=t.childNodes,i=0,s=n.length;i<s;i++){var o=n[i];if(1===o.nodeType){if(o===e)return r;if("SOURCE"===o.nodeName.toUpperCase()){null!==o.getAttribute("src")&&void 0!==typeof console&&console.warn("The `src` attribute is invalid on `picture` `source` element; instead, use `srcset`.");var c=o.getAttribute("media");if(o.getAttribute("srcset")&&(!c||a.matchesMedia(c))){var l=a.verifyTypeSupport(o);if(!0===l){r=o;break}if("pending"===l)return!1}}}}return r},function(){a.initTypeDetects(),l();var r,n=setInterval(function(){l(),/^loaded|^i|^c/.test(t.readyState)&&clearInterval(n)},250),i=function(){l({reevaluate:!0})};function s(){clearTimeout(r),r=setTimeout(i,60)}e.addEventListener?e.addEventListener("resize",s,!1):e.attachEvent&&e.attachEvent("onresize",s)}(),l._=a,n(l)}function l(e){for(var t,r,n,i,s,o=e||{},l=0,u=(t=o.elements||a.getAllElements()).length;l<u;l++)if(n=(r=t[l]).parentNode,i=void 0,s=void 0,"IMG"===r.nodeName.toUpperCase()&&(r[a.ns]||(r[a.ns]={}),o.reevaluate||!r[a.ns].evaluated)){if(n&&"PICTURE"===n.nodeName.toUpperCase()){if(a.removeVideoShim(n),!1===(i=a.getMatch(r,n)))continue}else i=void 0;(n&&"PICTURE"===n.nodeName.toUpperCase()||!a.sizesSupported&&r.srcset&&c.test(r.srcset))&&a.dodgeSrcset(r),i?(s=a.processSourceSet(i),a.applyBestCandidate(s,r)):(s=a.processSourceSet(r),(void 0===r.srcset||r[a.ns].srcset)&&a.applyBestCandidate(s,r)),r[a.ns].evaluated=!0}}}(window,window.document,new window.Image);
