(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-832ff6f2"],{2621:function(t,e){e.f=Object.getOwnPropertySymbols},"262e":function(t,e,n){"use strict";n.d(e,"a",function(){return i});var r=n("b380");function i(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Object(r["a"])(t,e)}},"37c8":function(t,e,n){e.f=n("2b4c")},"3a72":function(t,e,n){var r=n("7726"),i=n("8378"),o=n("2d00"),c=n("37c8"),a=n("86cc").f;t.exports=function(t){var e=i.Symbol||(i.Symbol=o?{}:r.Symbol||{});"_"==t.charAt(0)||t in e||a(e,t,{value:c.f(t)})}},"593b":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("canvas")},i=[],o=(n("ac4d"),n("8a81"),n("ac6a"),n("6c7b"),n("bee2")),c=n("99de"),a=n("7e84"),u=n("262e"),s=n("d4ec"),f=window.innerWidth,l=window.innerHeight,h=function t(e){Object(s["a"])(this,t),this.ctx=e},y=function(t){function e(t){var n,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;return Object(s["a"])(this,e),n=Object(c["a"])(this,Object(a["a"])(e).call(this,t)),n.x=r,n.y=i,n.r=o,n}return Object(u["a"])(e,t),Object(o["a"])(e,[{key:"setPosition",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;this.x=t,this.y=e}},{key:"move",value:function(t){var e=t.x,n=t.y;this.x+=parseInt(e),this.y+=parseInt(n)}},{key:"render",value:function(){var t=this.ctx;t.beginPath(),t.arc(this.x,this.y,this.r,0,2*Math.PI,!1),t.fillStyle="green",t.fill()}}]),e}(h),b={data:function(){return{}},mounted:function(){this.init()},methods:{init:function(){var t=document.querySelector("canvas");this.ctx=t.getContext("2d");var e=this.$utils.getPixelRatio(this.ctx);t.width=f*e,t.height=l*e,t.style.width=f+"px",t.style.height=l+"px",this.ctx.scale(e,e),this.start()},start:function(){this.genCircles(),window.requestAnimationFrame(this.clear),window.requestAnimationFrame(this.animate)},genCircles:function(){for(var t=[],e=0;e<10;e++)t.push({circle:new y(this.ctx,this.$utils.random(0,f),this.$utils.random(0,l),this.$utils.random(0,20)),move:{x:this.$utils.random(-5,5),y:this.$utils.random(-5,5)}});this.circles=t},animate:function(){if(this.circles.length){var t=!0,e=!1,n=void 0;try{for(var r,i=this.circles[Symbol.iterator]();!(t=(r=i.next()).done);t=!0){var o=r.value;o.circle.move(o.move),o.circle.render(),(o.circle.x>f||o.circle.x<0||o.circle.y>l||o.circle.y<0)&&o.circle.setPosition(this.$utils.random(0,f),this.$utils.random(0,l))}}catch(c){e=!0,n=c}finally{try{t||null==i.return||i.return()}finally{if(e)throw n}}}window.requestAnimationFrame(this.animate)},clear:function(){this.ctx.clearRect(0,0,f,l),window.requestAnimationFrame(this.clear)},drawCircle:function(t,e,n){var r=new y(this.ctx,t,e,n);r.render()}}},p=b,d=(n("dd87"),n("2877")),m=Object(d["a"])(p,r,i,!1,null,"13ce3a14",null);m.options.__file="Lab.vue";e["default"]=m.exports},"67ab":function(t,e,n){var r=n("ca5a")("meta"),i=n("d3f4"),o=n("69a8"),c=n("86cc").f,a=0,u=Object.isExtensible||function(){return!0},s=!n("79e5")(function(){return u(Object.preventExtensions({}))}),f=function(t){c(t,r,{value:{i:"O"+ ++a,w:{}}})},l=function(t,e){if(!i(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!o(t,r)){if(!u(t))return"F";if(!e)return"E";f(t)}return t[r].i},h=function(t,e){if(!o(t,r)){if(!u(t))return!0;if(!e)return!1;f(t)}return t[r].w},y=function(t){return s&&b.NEED&&u(t)&&!o(t,r)&&f(t),t},b=t.exports={KEY:r,NEED:!1,fastKey:l,getWeak:h,onFreeze:y}},"7bbc":function(t,e,n){var r=n("6821"),i=n("9093").f,o={}.toString,c="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],a=function(t){try{return i(t)}catch(e){return c.slice()}};t.exports.f=function(t){return c&&"[object Window]"==o.call(t)?a(t):i(r(t))}},"7e84":function(t,e,n){"use strict";function r(t){return r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},r(t)}n.d(e,"a",function(){return r})},"8a81":function(t,e,n){"use strict";var r=n("7726"),i=n("69a8"),o=n("9e1e"),c=n("5ca1"),a=n("2aba"),u=n("67ab").KEY,s=n("79e5"),f=n("5537"),l=n("7f20"),h=n("ca5a"),y=n("2b4c"),b=n("37c8"),p=n("3a72"),d=n("d4c0"),m=n("1169"),v=n("cb7c"),S=n("d3f4"),g=n("4bf8"),w=n("6821"),O=n("6a99"),x=n("4630"),L=n("2aeb"),j=n("7bbc"),P=n("11e9"),E=n("2621"),T=n("86cc"),_=n("0d58"),k=P.f,C=T.f,F=j.f,M=r.Symbol,N=r.JSON,A=N&&N.stringify,$="prototype",D=y("_hidden"),I=y("toPrimitive"),G={}.propertyIsEnumerable,R=f("symbol-registry"),V=f("symbols"),q=f("op-symbols"),J=Object[$],H="function"==typeof M&&!!E.f,W=r.QObject,K=!W||!W[$]||!W[$].findChild,Y=o&&s(function(){return 7!=L(C({},"a",{get:function(){return C(this,"a",{value:7}).a}})).a})?function(t,e,n){var r=k(J,e);r&&delete J[e],C(t,e,n),r&&t!==J&&C(J,e,r)}:C,z=function(t){var e=V[t]=L(M[$]);return e._k=t,e},B=H&&"symbol"==typeof M.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof M},Q=function(t,e,n){return t===J&&Q(q,e,n),v(t),e=O(e,!0),v(n),i(V,e)?(n.enumerable?(i(t,D)&&t[D][e]&&(t[D][e]=!1),n=L(n,{enumerable:x(0,!1)})):(i(t,D)||C(t,D,x(1,{})),t[D][e]=!0),Y(t,e,n)):C(t,e,n)},U=function(t,e){v(t);var n,r=d(e=w(e)),i=0,o=r.length;while(o>i)Q(t,n=r[i++],e[n]);return t},X=function(t,e){return void 0===e?L(t):U(L(t),e)},Z=function(t){var e=G.call(this,t=O(t,!0));return!(this===J&&i(V,t)&&!i(q,t))&&(!(e||!i(this,t)||!i(V,t)||i(this,D)&&this[D][t])||e)},tt=function(t,e){if(t=w(t),e=O(e,!0),t!==J||!i(V,e)||i(q,e)){var n=k(t,e);return!n||!i(V,e)||i(t,D)&&t[D][e]||(n.enumerable=!0),n}},et=function(t){var e,n=F(w(t)),r=[],o=0;while(n.length>o)i(V,e=n[o++])||e==D||e==u||r.push(e);return r},nt=function(t){var e,n=t===J,r=F(n?q:w(t)),o=[],c=0;while(r.length>c)!i(V,e=r[c++])||n&&!i(J,e)||o.push(V[e]);return o};H||(M=function(){if(this instanceof M)throw TypeError("Symbol is not a constructor!");var t=h(arguments.length>0?arguments[0]:void 0),e=function(n){this===J&&e.call(q,n),i(this,D)&&i(this[D],t)&&(this[D][t]=!1),Y(this,t,x(1,n))};return o&&K&&Y(J,t,{configurable:!0,set:e}),z(t)},a(M[$],"toString",function(){return this._k}),P.f=tt,T.f=Q,n("9093").f=j.f=et,n("52a7").f=Z,E.f=nt,o&&!n("2d00")&&a(J,"propertyIsEnumerable",Z,!0),b.f=function(t){return z(y(t))}),c(c.G+c.W+c.F*!H,{Symbol:M});for(var rt="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),it=0;rt.length>it;)y(rt[it++]);for(var ot=_(y.store),ct=0;ot.length>ct;)p(ot[ct++]);c(c.S+c.F*!H,"Symbol",{for:function(t){return i(R,t+="")?R[t]:R[t]=M(t)},keyFor:function(t){if(!B(t))throw TypeError(t+" is not a symbol!");for(var e in R)if(R[e]===t)return e},useSetter:function(){K=!0},useSimple:function(){K=!1}}),c(c.S+c.F*!H,"Object",{create:X,defineProperty:Q,defineProperties:U,getOwnPropertyDescriptor:tt,getOwnPropertyNames:et,getOwnPropertySymbols:nt});var at=s(function(){E.f(1)});c(c.S+c.F*at,"Object",{getOwnPropertySymbols:function(t){return E.f(g(t))}}),N&&c(c.S+c.F*(!H||s(function(){var t=M();return"[null]"!=A([t])||"{}"!=A({a:t})||"{}"!=A(Object(t))})),"JSON",{stringify:function(t){var e,n,r=[t],i=1;while(arguments.length>i)r.push(arguments[i++]);if(n=e=r[1],(S(e)||void 0!==t)&&!B(t))return m(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!B(e))return e}),r[1]=e,A.apply(N,r)}}),M[$][I]||n("32e9")(M[$],I,M[$].valueOf),l(M,"Symbol"),l(Math,"Math",!0),l(r.JSON,"JSON",!0)},"99de":function(t,e,n){"use strict";function r(t){return r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function i(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function o(t,e){return!e||"object"!==r(e)&&"function"!==typeof e?i(t):e}n.d(e,"a",function(){return o})},ac4d:function(t,e,n){n("3a72")("asyncIterator")},ac6a:function(t,e,n){for(var r=n("cadf"),i=n("0d58"),o=n("2aba"),c=n("7726"),a=n("32e9"),u=n("84f2"),s=n("2b4c"),f=s("iterator"),l=s("toStringTag"),h=u.Array,y={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},b=i(y),p=0;p<b.length;p++){var d,m=b[p],v=y[m],S=c[m],g=S&&S.prototype;if(g&&(g[f]||a(g,f,h),g[l]||a(g,l,m),u[m]=h,v))for(d in r)g[d]||o(g,d,r[d],!0)}},b380:function(t,e,n){"use strict";function r(t,e){return r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},r(t,e)}n.d(e,"a",function(){return r})},bee2:function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}n.d(e,"a",function(){return i})},d4c0:function(t,e,n){var r=n("0d58"),i=n("2621"),o=n("52a7");t.exports=function(t){var e=r(t),n=i.f;if(n){var c,a=n(t),u=o.f,s=0;while(a.length>s)u.call(t,c=a[s++])&&e.push(c)}return e}},d4ec:function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",function(){return r})},d91a:function(t,e,n){},dd87:function(t,e,n){"use strict";var r=n("d91a"),i=n.n(r);i.a}}]);