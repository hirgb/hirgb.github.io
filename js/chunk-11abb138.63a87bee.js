(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-11abb138"],{"1da1":function(t,e,n){"use strict";function r(t,e,n,r,o,i,a){try{var s=t[i](a),l=s.value}catch(c){return void n(c)}s.done?e(l):Promise.resolve(l).then(r,o)}function o(t){return function(){var e=this,n=arguments;return new Promise(function(o,i){var a=t.apply(e,n);function s(t){r(a,o,i,s,l,"next",t)}function l(t){r(a,o,i,s,l,"throw",t)}s(void 0)})}}n.d(e,"a",function(){return o})},"2fdb":function(t,e,n){"use strict";var r=n("5ca1"),o=n("d2c8"),i="includes";r(r.P+r.F*n("5147")(i),"String",{includes:function(t){return!!~o(this,t,i).indexOf(t,arguments.length>1?arguments[1]:void 0)}})},"49c3":function(t,e,n){"use strict";var r=this&&this.__assign||function(){return r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n],e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},r.apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t){this.element=t}return t.prototype.getHorizontalScroll=function(){return this.element.scrollLeft},t.prototype.getVerticalScroll=function(){return this.element.scrollTop},t.prototype.getMaxHorizontalScroll=function(){return this.element.scrollWidth-this.element.clientWidth},t.prototype.getMaxVerticalScroll=function(){return this.element.scrollHeight-this.element.clientHeight},t.prototype.getHorizontalElementScrollOffset=function(t){return t.getBoundingClientRect().left+this.element.scrollLeft-this.element.getBoundingClientRect().left},t.prototype.getVerticalElementScrollOffset=function(t){return t.getBoundingClientRect().top+this.element.scrollTop-this.element.getBoundingClientRect().top},t.prototype.scrollTo=function(t,e){this.element.scrollLeft=t,this.element.scrollTop=e},t}(),i=function(){function t(){}return t.prototype.getHorizontalScroll=function(){return window.scrollX||document.documentElement.scrollLeft},t.prototype.getVerticalScroll=function(){return window.scrollY||document.documentElement.scrollTop},t.prototype.getMaxHorizontalScroll=function(){return Math.max(document.body.scrollWidth,document.documentElement.scrollWidth,document.body.offsetWidth,document.documentElement.offsetWidth,document.body.clientWidth,document.documentElement.clientWidth)-window.innerWidth},t.prototype.getMaxVerticalScroll=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)-window.innerHeight},t.prototype.getHorizontalElementScrollOffset=function(t){var e=window.scrollX||document.documentElement.scrollLeft;return e+t.getBoundingClientRect().left},t.prototype.getVerticalElementScrollOffset=function(t){var e=window.scrollY||document.documentElement.scrollTop;return e+t.getBoundingClientRect().top},t.prototype.scrollTo=function(t,e){window.scrollTo(t,e)},t}(),a={elements:[],cancelMethods:[],add:function(t,e){a.elements.push(t),a.cancelMethods.push(e)},stop:function(t){var e=a.elements.indexOf(t);e>-1&&(a.cancelMethods[e](),a.elements.splice(e,1),a.cancelMethods.splice(e,1))}},s="undefined"!==typeof window,l={cancelOnUserAction:!0,easing:function(t){return--t*t*t+1},elementToScroll:s?window:null,horizontalOffset:0,maxDuration:3e3,minDuration:250,speed:500,verticalOffset:0};function c(t,e){if(void 0===e&&(e={}),!s)return new Promise(function(t){t(!1)});if(!window.Promise)throw"Browser doesn't support Promises, and animated-scroll-to depends on it, please provide a polyfill.";var n,c,u,h=r(r({},l),e),f=h.elementToScroll===window,d=!!h.elementToScroll.nodeName;if(!f&&!d)throw"Element to scroll needs to be either window or DOM element.";var m=f?new i:new o(h.elementToScroll);if(t instanceof Element)u=t,n=m.getHorizontalElementScrollOffset(u),c=m.getVerticalElementScrollOffset(u);else if("number"===typeof t)n=m.getHorizontalScroll(),c=t;else{if(!Array.isArray(t)||2!==t.length)throw"Wrong function signature. Check documentation.\nAvailable method signatures are:\n  animateScrollTo(y:number, options)\n  animateScrollTo([x:number | null, y:number | null], options)\n  animateScrollTo(scrollToElement:Element, options)";n=null===t[0]?m.getHorizontalScroll():t[0],c=null===t[1]?m.getVerticalScroll():t[1]}n+=h.horizontalOffset,c+=h.verticalOffset;var g=m.getMaxHorizontalScroll(),v=m.getHorizontalScroll();n>g&&(n=g);var p=n-v,w=m.getMaxVerticalScroll(),y=m.getVerticalScroll();c>w&&(c=w);var b=c-y,x=Math.abs(Math.round(p/1e3*h.speed)),T=Math.abs(Math.round(b/1e3*h.speed)),L=x>T?x:T;return L<h.minDuration?L=h.minDuration:L>h.maxDuration&&(L=h.maxDuration),new Promise(function(t,e){var r;0===p&&0===b&&t(!0),a.stop(h.elementToScroll);var o=function(){f(),cancelAnimationFrame(r),t(!1)};a.add(h.elementToScroll,o);var i=function(t){return t.preventDefault()},s=h.cancelOnUserAction?o:i,l=h.cancelOnUserAction?{passive:!0}:{passive:!1},u=["wheel","touchstart","keydown","mousedown"],f=function(){u.forEach(function(t){h.elementToScroll.removeEventListener(t,s)})};u.forEach(function(t){h.elementToScroll.addEventListener(t,s,l)});var d=Date.now(),g=function(){var e=Date.now()-d,o=e/L,i=Math.round(v+p*h.easing(o)),a=Math.round(y+b*h.easing(o));e<L&&(i!==n||a!==c)?(m.scrollTo(i,a),r=requestAnimationFrame(g)):(m.scrollTo(n,c),cancelAnimationFrame(r),f(),t(!0))};r=requestAnimationFrame(g)})}e.default=c,s&&(window.animateScrollTo=c)},5147:function(t,e,n){var r=n("2b4c")("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[r]=!1,!"/./"[t](e)}catch(o){}}return!0}},6762:function(t,e,n){"use strict";var r=n("5ca1"),o=n("c366")(!0);r(r.P,"Array",{includes:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),n("9c6c")("includes")},"96cf":function(t,e,n){var r=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function l(t,e,n,r){var o=e&&e.prototype instanceof g?e:g,i=Object.create(o.prototype),a=new k(r||[]);return i._invoke=S(t,n,a),i}function c(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(r){return{type:"throw",arg:r}}}t.wrap=l;var u="suspendedStart",h="suspendedYield",f="executing",d="completed",m={};function g(){}function v(){}function p(){}var w={};w[i]=function(){return this};var y=Object.getPrototypeOf,b=y&&y(y(M([])));b&&b!==n&&r.call(b,i)&&(w=b);var x=p.prototype=g.prototype=Object.create(w);function T(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function L(t,e){function n(o,i,a,s){var l=c(t[o],t,i);if("throw"!==l.type){var u=l.arg,h=u.value;return h&&"object"===typeof h&&r.call(h,"__await")?e.resolve(h.__await).then(function(t){n("next",t,a,s)},function(t){n("throw",t,a,s)}):e.resolve(h).then(function(t){u.value=t,a(u)},function(t){return n("throw",t,a,s)})}s(l.arg)}var o;function i(t,r){function i(){return new e(function(e,o){n(t,r,e,o)})}return o=o?o.then(i,i):i()}this._invoke=i}function S(t,e,n){var r=u;return function(o,i){if(r===f)throw new Error("Generator is already running");if(r===d){if("throw"===o)throw i;return P()}n.method=o,n.arg=i;while(1){var a=n.delegate;if(a){var s=E(a,n);if(s){if(s===m)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===u)throw r=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=f;var l=c(t,e,n);if("normal"===l.type){if(r=n.done?d:h,l.arg===m)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r=d,n.method="throw",n.arg=l.arg)}}}function E(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator["return"]&&(n.method="return",n.arg=e,E(t,n),"throw"===n.method))return m;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var o=c(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,m;var i=o.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,m):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,m)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function I(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function M(t){if(t){var n=t[i];if(n)return n.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function n(){while(++o<t.length)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return a.next=a}}return{next:P}}function P(){return{value:e,done:!0}}return v.prototype=x.constructor=p,p.constructor=v,p[s]=v.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,s in t||(t[s]="GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},T(L.prototype),L.prototype[a]=function(){return this},t.AsyncIterator=L,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new L(l(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then(function(t){return t.done?t.value:a.next()})},T(x),x[s]="Generator",x[i]=function(){return this},x.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=M,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(I),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return s.type="throw",s.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var l=r.call(a,"catchLoc"),c=r.call(a,"finallyLoc");if(l&&c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,m):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),I(n),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;I(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:M(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),m}},t}(t.exports);try{regeneratorRuntime=r}catch(o){Function("r","regeneratorRuntime = r")(r)}},aae3:function(t,e,n){var r=n("d3f4"),o=n("2d95"),i=n("2b4c")("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[i])?!!e:"RegExp"==o(t))}},c639:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"container",staticClass:"container"},[n("div",{staticClass:"bg"}),n("div",{staticClass:"buttons"},[n("div",{directives:[{name:"show",rawName:"v-show",value:!t.isFavoriteMode,expression:"!isFavoriteMode"}],staticClass:"button",on:{click:t.prevPage}},[t._v(t._s(t.isAtTop?"上一页":"顶部"))]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.isFavoriteMode,expression:"isFavoriteMode"}],staticClass:"button",on:{click:t.gotoTop}},[t._v(t._s("顶部"))]),n("div",{staticClass:"button",on:{click:t.$utils.toggleFullScreen}},[t._v("全屏")]),n("div",{staticClass:"button",on:{click:function(e){t.isFavoriteMode=!t.isFavoriteMode}}},[t._v(t._s(t.isFavoriteMode?"返回":"收藏"))]),n("div",{directives:[{name:"show",rawName:"v-show",value:!t.isFavoriteMode,expression:"!isFavoriteMode"}],staticClass:"button",on:{click:t.jumpToAlbum}},[t._v("跳转")]),n("div",{directives:[{name:"show",rawName:"v-show",value:!t.isFavoriteMode,expression:"!isFavoriteMode"}],staticClass:"button",on:{click:t.nextPage}},[t._v(t._s(t.isAtBottom?"下一页":"底部"))]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.isFavoriteMode,expression:"isFavoriteMode"}],staticClass:"button",on:{click:t.gotoBottom}},[t._v(t._s("底部"))])]),n("div",{staticClass:"main"},[n("h1",{staticClass:"main-title"},[t._v("BeautifulGirls")]),n("Row",t._l(t.albums,function(e){return n("i-col",{key:e,staticStyle:{"text-align":"center",margin:"30px 0"},attrs:{lg:6,md:12,sm:24,xs:24}},[n("div",{staticClass:"album"},[n("span",{staticClass:"album-index"},[t._v("#"+t._s(e))]),e>5?n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.imageBaseUrl+e+"/1.jpg",expression:"imageBaseUrl + i + '/1.jpg'"}],attrs:{onerror:"this.style.display = 'none'"},on:{click:function(n){t.showAlbumBrowser(e)}}}):t._e()])])}),1),n("h1",{staticClass:"main-title"},[t._v("BeautifulGirls")])],1),n("album-browser",{ref:"albumBrowser",attrs:{favorite:t.beautifulGirls.favorite},on:{"toggle-favorite":t.toggleFavorite}})],1)},o=[],i=(n("96cf"),n("1da1")),a=(n("6762"),n("2fdb"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"browser",staticClass:"wraper",on:{touchmove:function(t){t.preventDefault()},scroll:function(t){t.preventDefault()}}},[n("img",{ref:"img",class:{"v-center":!t.realLarge},style:{maxHeight:t.realLarge?null:"100%",maxWidth:t.realLarge?null:"100%"},attrs:{src:""+t.imageBaseUrl+t.albumIndex+"/"+t.imageIndex+".jpg"},on:{load:t.imgLoaded,error:t.imgError,click:t.onImageClick,touchstart:t.onImageTouchStart,touchend:t.onImageTouchEnd,touchmove:t.onImageDragging}}),n("span",{directives:[{name:"show",rawName:"v-show",value:t.isPlaying,expression:"isPlaying"}],staticClass:"status"},[t._v("播放中...")]),n("Row",{ref:"controlPanel",staticClass:"control-panel"},[n("i-col",{attrs:{lg:7,md:4,sm:0,xs:0}},[t._v(" ")]),n("i-col",{attrs:{lg:10,md:16,sm:24,xs:24}},[n("div",{staticClass:"control-buttons"},[n("div",{staticClass:"button small-button favorite-btn",on:{click:t.toggleFavorite}},[t._v(t._s(t.isInFavorite?"已收藏":"收藏"))]),n("div",{staticClass:"button small-button prev-btn",on:{click:t.prev}},[t._v("上一张")]),n("div",{staticClass:"button big-button play-btn",on:{click:t.togglePlay}},[t._v("播放")]),n("div",{staticClass:"button small-button next-btn",on:{click:t.next}},[t._v("下一张")]),n("div",{staticClass:"button small-button close-btn",on:{click:t.hide}},[t._v("关闭")])])]),n("i-col",{attrs:{lg:7,md:4,sm:0,xs:0}},[t._v(" ")])],1),t.loading?n("Spin",{attrs:{size:"large",fix:""}}):t._e()],1)}),s=[],l={props:{favorite:{type:Array,required:!0}},data:function(){return{albumIndex:32610,imageBaseUrl:"https://ii.hywly.com/a/1/",imageIndex:1,loading:!1,realLarge:!1,isPlaying:!1,playTimer:null,isImageDragging:!1,touch:{lastX:0,lastY:0,time:0},nextTimer:null}},computed:{isInFavorite:function(){return this.favorite.includes(this.albumIndex)}},methods:{show:function(t){this.albumIndex=t,this.imageIndex=1,this.$refs.browser.style.display="block",this.$refs.browser.style.opacity="1",window.addEventListener("keydown",this.keydownWatcher)},hide:function(){this.$refs.browser.style.display="none",this.$refs.browser.style.opacity="0",this.imageIndex=1,this.realLarge=!1,this.playTimer&&window.clearInterval(this.playTimer),this.playTimer=null,this.isPlaying=!1,window.removeEventListener("keydown",this.keydownWatcher)},toggleFavorite:function(){this.$emit("toggle-favorite",this.albumIndex)},next:function(){this.imageIndex++,this.loading=!0,this.realLarge=!1},prev:function(){this.imageIndex>1?(this.imageIndex--,this.loading=!0,this.realLarge=!1):this.$Message.info("已经是第一张")},toggleRealLarge:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;this.realLarge=!this.realLarge,this.realLarge&&setTimeout(function(){t.$refs.browser.scrollTo(e,n)})},onImageClick:function(t){var e=this;this.isPlaying&&this.togglePlay();var n=t.x,r=(t.y,t.target),o=t.offsetX,i=t.offsetY,a=this.touch.time;this.touch.time=Date.now(),this.nextTimer&&window.clearTimeout(this.nextTimer),this.nextTimer=setTimeout(function(){e.realLarge||(n>window.screen.width/2?e.next():e.prev())},500),this.touch.time-a<500&&(this.nextTimer&&(window.clearTimeout(this.nextTimer),this.nextTimer=null),this.toggleRealLarge(o/r.width*r.naturalWidth-window.screen.width/2,i/r.height*r.naturalHeight-window.screen.height/2))},onImageTouchStart:function(t){this.realLarge&&(this.isImageDragging=!0,this.touch.lastX=0,this.touch.lastY=0)},onImageTouchEnd:function(t){this.isImageDragging=!1},onImageDragging:function(t){if(this.realLarge){var e=t.touches||t.targetTouches||t.changedTouches,n=e[0].screenX,r=e[0].screenY;if(0!==this.touch.lastX||0!==this.touch.lastY){var o=n-this.touch.lastX,i=r-this.touch.lastY,a=this.$refs.browser;a.scrollBy(-o,-i)}this.touch.lastX=n,this.touch.lastY=r}},imgLoaded:function(){this.loading=!1},imgError:function(){this.$Message.error("已达相册末尾"),this.isPlaying?this.imageIndex=1:this.imageIndex--},togglePlay:function(){var t=this;this.isPlaying=!this.isPlaying,this.isPlaying?(this.playTimer=window.setInterval(this.next,3e3),setTimeout(function(){t.$refs.controlPanel.$el.style.bottom="-80px",t.$refs.closeBtn.style.top="-80px"},1e3)):(window.clearInterval(this.playTimer),this.playTimer=null,setTimeout(function(){t.$refs.controlPanel.$el.style.bottom="0px",t.$refs.closeBtn.style.top="10px"}))},keydownWatcher:function(t){var e=t.code;switch(e){case"ArrowRight":this.next();break;case"ArrowLeft":this.prev();break;case"Digit1":this.realLarge=!this.realLarge;break;case"Space":this.togglePlay();break;case"KeyC":this.hide();break;default:break}}}},c=l,u=(n("ef80"),n("e65d"),n("2877")),h=Object(u["a"])(c,a,s,!1,null,"271f092c",null);h.options.__file="AlbumBrowser.vue";var f=h.exports,d=n("49c3"),m=n.n(d),g=1e3,v={components:{AlbumBrowser:f},data:function(){return{pageSize:24,startIndex:1,endIndex:24,imageBaseUrl:"https://ii.hywly.com/a/1/",jumpToAlbumIndex:1,isAtTop:!0,isAtBottom:!1,beautifulGirls:{favorite:[]},isFavoriteMode:!1}},computed:{albums:function(){if(this.isFavoriteMode)return this.beautifulGirls.favorite;for(var t=[],e=this.startIndex;e<=this.endIndex;e++)t.push(e);return t}},mounted:function(){this.$refs.container.addEventListener("scroll",this.checkPosition),this.initStore()},beforeDestroy:function(){this.$refs.container.removeEventListener("scroll",this.checkPosition)},methods:{checkPosition:function(){var t=this.$refs.container;this.isAtTop=0===t.scrollTop,this.isAtBottom=t.scrollTop===t.scrollHeight-t.clientHeight},prevPage:function(){this.isAtTop?this.startIndex>this.pageSize?this.startIndex-=this.pageSize:this.startIndex=1:this.gotoTop()},nextPage:function(){this.isAtBottom?(this.endIndex+=this.pageSize,this.isAtBottom=!1):this.gotoBottom()},gotoTop:function(){var t=this.$refs.container;t.scrollTop>g&&t.scrollTo(0,g),m()(0,{elementToScroll:this.$refs.container,maxDuration:1500,minDuration:500})},gotoBottom:function(){var t=this.$refs.container,e=t.scrollHeight-t.clientHeight;t.scrollTop<e-g&&t.scrollTo(0,e-g),m()(e,{elementToScroll:this.$refs.container,maxDuration:1500,minDuration:500})},jumpToAlbum:function(){var t=this;this.$Modal.confirm({title:"跳转到相册",render:function(e){return e("Input",{props:{autofocus:!0,placeholder:"输入相册数字序号"},on:{input:function(e){t.jumpToAlbumIndex=parseInt(e.trim())}}})},onOk:function(){var e=t.jumpToAlbumIndex;!isNaN(e)&&e>0&&(t.startIndex=e,t.endIndex=e+t.pageSize-1,t.gotoTop())}})},showAlbumBrowser:function(t){this.$refs.albumBrowser.show(t)},toggleFavorite:function(t){this.beautifulGirls.favorite.includes(t)?this.beautifulGirls.favorite=this.beautifulGirls.favorite.filter(function(e){return e!==t}):(this.beautifulGirls.favorite.push(t),this.beautifulGirls.favorite.sort()),this.updateStore()},initStore:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark(function e(){var n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$vlf.getItem("beautifulGirls");case 2:if(n=e.sent,!n){e.next=7;break}t.beautifulGirls=n,e.next=9;break;case 7:return e.next=9,t.$vlf.setItem("beautifulGirls",t.beautifulGirls);case 9:case"end":return e.stop()}},e)}))()},updateStore:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$vlf.setItem("beautifulGirls",t.beautifulGirls);case 2:case"end":return e.stop()}},e)}))()}}},p=v,w=(n("e406"),Object(u["a"])(p,r,o,!1,null,"5b5d3fc2",null));w.options.__file="index.vue";e["default"]=w.exports},cf4b:function(t,e,n){},d2c8:function(t,e,n){var r=n("aae3"),o=n("be13");t.exports=function(t,e,n){if(r(e))throw TypeError("String#"+n+" doesn't accept regex!");return String(o(t))}},d3ae:function(t,e,n){},e406:function(t,e,n){"use strict";var r=n("fbf4"),o=n.n(r);o.a},e65d:function(t,e,n){"use strict";var r=n("cf4b"),o=n.n(r);o.a},ef80:function(t,e,n){"use strict";var r=n("d3ae"),o=n.n(r);o.a},fbf4:function(t,e,n){}}]);