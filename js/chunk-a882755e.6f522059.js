(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a882755e"],{"130a":function(t,e,n){"use strict";var o=n("d977"),r=n.n(o);r.a},"262e":function(t,e,n){"use strict";n.d(e,"a",function(){return r});var o=n("b380");function r(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Object(o["a"])(t,e)}},"2fdb":function(t,e,n){"use strict";var o=n("5ca1"),r=n("d2c8"),a="includes";o(o.P+o.F*n("5147")(a),"String",{includes:function(t){return!!~r(this,t,a).indexOf(t,arguments.length>1?arguments[1]:void 0)}})},5147:function(t,e,n){var o=n("2b4c")("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[o]=!1,!"/./"[t](e)}catch(r){}}return!0}},"5dbc":function(t,e,n){var o=n("d3f4"),r=n("8b97").set;t.exports=function(t,e,n){var a,s=e.constructor;return s!==n&&"function"==typeof s&&(a=s.prototype)!==n.prototype&&o(a)&&r&&r(t,a),t}},6762:function(t,e,n){"use strict";var o=n("5ca1"),r=n("c366")(!0);o(o.P,"Array",{includes:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),n("9c6c")("includes")},"7e84":function(t,e,n){"use strict";function o(t){return o=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},o(t)}n.d(e,"a",function(){return o})},"8b97":function(t,e,n){var o=n("d3f4"),r=n("cb7c"),a=function(t,e){if(r(t),!o(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,o){try{o=n("9b43")(Function.call,n("11e9").f(Object.prototype,"__proto__").set,2),o(t,[]),e=!(t instanceof Array)}catch(r){e=!0}return function(t,n){return a(t,n),e?t.__proto__=n:o(t,n),t}}({},!1):void 0),check:a}},"8c34":function(module,__webpack_exports__,__webpack_require__){"use strict";var core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("c5f6"),core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_0__),core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("2fdb"),core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_1__),core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("6762"),core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_2__),_com_SosButton__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("e3a5");__webpack_exports__["a"]={data:function(){return{display:"0",opt:[],forceUpdate:!0}},mounted:function(){document.addEventListener("keyup",this.handleKeyup)},beforeDestroy:function(){document.removeEventListener("keyup",this.handleKeyup)},methods:{handleKeyup:function(t){this.handleInput(t.key)},handleInput:function handleInput(key){var operators=["/","*","-","+"],digitals=["0","1","2","3","4","5","6","7","8","9","."],final=["=","Enter"],opt=this.opt;if(operators.includes(key))opt.length&&(operators.includes(opt[opt.length-1])?opt[opt.length-1]=key:opt.includes("=")?(opt=[String(opt[opt.length-1])],opt.push(key),this.opt=opt,this.doForceUpdate()):opt.push(key));else if(digitals.includes(key))0===opt.length?opt.push(key):operators.includes(opt[opt.length-1])?opt.push(key):opt[opt.length-1]+=key;else if(final.includes(key)&&opt.length){var str=opt.join(""),last=str[str.length-1];operators.includes(last)&&(str=str.slice(0,-1),opt.pop());try{var result=eval(str);opt.push("=",result)}catch(e){throw e}}else"Delete"===key?this.clear():"Backspace"===key&&this.backspace();this.display=this.getLastNumber(opt)},getLastNumber:function(t){return Array.isArray(t)&&t.length?isNaN(Number(t[t.length-1]))?this.getLastNumber(t.slice(0,-1)):t[t.length-1]:"0"},clear:function(){this.opt=[],this.display="0"},backspace:function(){var t=this.opt;if(t.includes("="))this.clear();else if(Array.isArray(t)&&t.length){var e=t[t.length-1];e.length>1?t[t.length-1]=e.slice(0,-1):t.pop(),this.display=this.getLastNumber(t),this.doForceUpdate()}},doForceUpdate:function(){var t=this;this.forceUpdate=!1,this.$nextTick(function(){t.forceUpdate=!0})}}}},"99de":function(t,e,n){"use strict";function o(t){return o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function r(t){return r="function"===typeof Symbol&&"symbol"===o(Symbol.iterator)?function(t){return o(t)}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":o(t)},r(t)}function a(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function s(t,e){return!e||"object"!==r(e)&&"function"!==typeof e?a(t):e}n.d(e,"a",function(){return s})},aa77:function(t,e,n){var o=n("5ca1"),r=n("be13"),a=n("79e5"),s=n("fdef"),c="["+s+"]",i="​",l=RegExp("^"+c+c+"*"),u=RegExp(c+c+"*$"),f=function(t,e,n){var r={},c=a(function(){return!!s[t]()||i[t]()!=i}),l=r[t]=c?e(d):s[t];n&&(r[n]=l),o(o.P+o.F*c,"String",r)},d=f.trim=function(t,e){return t=String(r(t)),1&e&&(t=t.replace(l,"")),2&e&&(t=t.replace(u,"")),t};t.exports=f},aae3:function(t,e,n){var o=n("d3f4"),r=n("2d95"),a=n("2b4c")("match");t.exports=function(t){var e;return o(t)&&(void 0!==(e=t[a])?!!e:"RegExp"==r(t))}},b28c:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page"},[n("div",{staticClass:"cal"},[n("div",{staticClass:"cal-head"},[n("div",{staticClass:"cal-monitor"},[t._v("\n                "+t._s(t.display)+"\n            ")])]),n("div",{staticClass:"cal-body"},[n("Row",{staticClass:"btn-row",attrs:{gutter:20}},[n("Col",{attrs:{span:6}},[n("sos-button",{attrs:{label:"mc",bgcolor:"linear-gradient(#6f6e6e, #30312f)",color:"#ddd"}})],1),n("Col",{attrs:{span:6}},[n("sos-button",{attrs:{label:"m+",bgcolor:"linear-gradient(#6f6e6e, #30312f)",color:"#ddd"}})],1),n("Col",{attrs:{span:6}},[n("sos-button",{attrs:{label:"m-",bgcolor:"linear-gradient(#6f6e6e, #30312f)",color:"#ddd"}})],1),n("Col",{attrs:{span:6}},[n("sos-button",{attrs:{label:"mr",bgcolor:"linear-gradient(#6f6e6e, #30312f)",color:"#ddd"}})],1)],1),n("Row",{staticClass:"btn-row",attrs:{gutter:20}},[n("Col",{attrs:{span:6}},[n("sos-button",{attrs:{label:"AC",bgcolor:"linear-gradient(#909090, #5d5d5d)",color:"#ddd"},on:{click:t.clear}})],1),n("Col",{attrs:{span:6}},[n("sos-button",{attrs:{label:"←",bgcolor:"linear-gradient(#909090, #5d5d5d)",color:"#ddd"},on:{click:t.backspace}})],1),n("Col",{attrs:{span:6}},[n("sos-button",{attrs:{label:"±",bgcolor:"linear-gradient(#909090, #5d5d5d)",color:"#ddd"}})],1),n("Col",{attrs:{span:6}},[n("sos-button",{attrs:{label:"÷",bgcolor:"linear-gradient(#909090, #5d5d5d)",color:"#ddd"},on:{click:function(e){t.handleInput("/")}}})],1)],1),n("Row",{staticClass:"btn-row",attrs:{gutter:20}},[n("Col",{attrs:{span:6}},[n("sos-button",{attrs:{label:"7",bgcolor:"linear-gradient(#fdfcfb, #efeeeb)"},on:{click:function(e){t.handleInput("7")}}})],1),n("Col",{attrs:{span:6}},[n("sos-button",{attrs:{label:"8",bgcolor:"linear-gradient(#fdfcfb, #efeeeb)"},on:{click:function(e){t.handleInput("8")}}})],1),n("Col",{attrs:{span:6}},[n("sos-button",{attrs:{label:"9",bgcolor:"linear-gradient(#fdfcfb, #efeeeb)"},on:{click:function(e){t.handleInput("9")}}})],1),n("Col",{attrs:{span:6}},[n("sos-button",{attrs:{label:"×",bgcolor:"linear-gradient(#909090, #5d5d5d)",color:"#ddd"},on:{click:function(e){t.handleInput("*")}}})],1)],1),n("Row",{staticClass:"btn-row",attrs:{gutter:20}},[n("Col",{attrs:{span:6}},[n("sos-button",{attrs:{label:"4",bgcolor:"linear-gradient(#fdfcfb, #efeeeb)"},on:{click:function(e){t.handleInput("4")}}})],1),n("Col",{attrs:{span:6}},[n("sos-button",{attrs:{label:"5",bgcolor:"linear-gradient(#fdfcfb, #efeeeb)"},on:{click:function(e){t.handleInput("5")}}})],1),n("Col",{attrs:{span:6}},[n("sos-button",{attrs:{label:"6",bgcolor:"linear-gradient(#fdfcfb, #efeeeb)"},on:{click:function(e){t.handleInput("6")}}})],1),n("Col",{attrs:{span:6}},[n("sos-button",{attrs:{label:"-",bgcolor:"linear-gradient(#909090, #5d5d5d)",color:"#ddd"},on:{click:function(e){t.handleInput("-")}}})],1)],1),n("Row",{staticClass:"btn-row",attrs:{gutter:20}},[n("Col",{attrs:{span:6}},[n("sos-button",{attrs:{label:"1",bgcolor:"linear-gradient(#fdfcfb, #efeeeb)"},on:{click:function(e){t.handleInput("1")}}})],1),n("Col",{attrs:{span:6}},[n("sos-button",{attrs:{label:"2",bgcolor:"linear-gradient(#fdfcfb, #efeeeb)"},on:{click:function(e){t.handleInput("2")}}})],1),n("Col",{attrs:{span:6}},[n("sos-button",{attrs:{label:"3",bgcolor:"linear-gradient(#fdfcfb, #efeeeb)"},on:{click:function(e){t.handleInput("3")}}})],1),n("Col",{attrs:{span:6}},[n("sos-button",{attrs:{label:"+",bgcolor:"linear-gradient(#909090, #5d5d5d)",color:"#ddd"},on:{click:function(e){t.handleInput("+")}}})],1)],1),n("Row",{staticClass:"btn-row",attrs:{gutter:20}},[n("Col",{attrs:{span:12}},[n("sos-button",{attrs:{label:"0",bgcolor:"linear-gradient(#fdfcfb, #efeeeb)"},on:{click:function(e){t.handleInput("0")}}})],1),n("Col",{attrs:{span:6}},[n("sos-button",{attrs:{label:".",bgcolor:"linear-gradient(#fdfcfb, #efeeeb)"},on:{click:function(e){t.handleInput(".")}}})],1),n("Col",{attrs:{span:6}},[n("sos-button",{attrs:{label:"=",bgcolor:"linear-gradient(#fd9966, #eb6a3f)",color:"#ddd"},on:{click:function(e){t.handleInput("=")}}})],1)],1)],1),t.forceUpdate?n("div",{directives:[{name:"show",rawName:"v-show",value:t.opt.length,expression:"opt.length"}],staticClass:"list"},t._l(t.opt,function(e){return n("div",{key:e,staticClass:"atom"},[t._v(t._s(e))])}),0):t._e()])])},r=[],a=n("8c34"),s=a["a"],c=(n("130a"),n("2877")),i=Object(c["a"])(s,o,r,!1,null,"5139e2fb",null);i.options.__file="Calculator.vue";e["default"]=i.exports},b380:function(t,e,n){"use strict";function o(t,e){return o=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},o(t,e)}n.d(e,"a",function(){return o})},bee2:function(t,e,n){"use strict";function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function r(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}n.d(e,"a",function(){return r})},c5f6:function(t,e,n){"use strict";var o=n("7726"),r=n("69a8"),a=n("2d95"),s=n("5dbc"),c=n("6a99"),i=n("79e5"),l=n("9093").f,u=n("11e9").f,f=n("86cc").f,d=n("aa77").trim,p="Number",b=o[p],_=b,h=b.prototype,g=a(n("2aeb")(h))==p,y="trim"in String.prototype,v=function(t){var e=c(t,!1);if("string"==typeof e&&e.length>2){e=y?e.trim():d(e,3);var n,o,r,a=e.charCodeAt(0);if(43===a||45===a){if(n=e.charCodeAt(2),88===n||120===n)return NaN}else if(48===a){switch(e.charCodeAt(1)){case 66:case 98:o=2,r=49;break;case 79:case 111:o=8,r=55;break;default:return+e}for(var s,i=e.slice(2),l=0,u=i.length;l<u;l++)if(s=i.charCodeAt(l),s<48||s>r)return NaN;return parseInt(i,o)}}return+e};if(!b(" 0o1")||!b("0b1")||b("+0x1")){b=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof b&&(g?i(function(){h.valueOf.call(n)}):a(n)!=p)?s(new _(v(e)),n,b):v(e)};for(var m,k=n("9e1e")?l(_):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),w=0;k.length>w;w++)r(_,m=k[w])&&!r(b,m)&&f(b,m,u(_,m));b.prototype=h,h.constructor=b,n("2aba")(o,p,b)}},d2c8:function(t,e,n){var o=n("aae3"),r=n("be13");t.exports=function(t,e,n){if(o(e))throw TypeError("String#"+n+" doesn't accept regex!");return String(r(t))}},d4ec:function(t,e,n){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",function(){return o})},d977:function(t,e,n){},e3a5:function(t,e,n){"use strict";var o=n("d4ec"),r=n("bee2"),a=n("99de"),s=n("7e84"),c=n("262e"),i=n("b380");function l(t){return-1!==Function.toString.call(t).indexOf("[native code]")}function u(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}function f(t,e,n){return f=u()?Reflect.construct:function(t,e,n){var o=[null];o.push.apply(o,e);var r=Function.bind.apply(t,o),a=new r;return n&&Object(i["a"])(a,n.prototype),a},f.apply(null,arguments)}function d(t){var e="function"===typeof Map?new Map:void 0;return d=function(t){if(null===t||!l(t))return t;if("function"!==typeof t)throw new TypeError("Super expression must either be null or a function");if("undefined"!==typeof e){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return f(t,arguments,Object(s["a"])(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),Object(i["a"])(n,t)},d(t)}var p=document.createElement("template");p.innerHTML='\n<style>\n.wrapper {\n    border: 0px solid #f0f0f0;\n    border-radius: 8px;\n    background-color: #f2f1ed;\n    box-shadow: 0px 3px 5px #00000030;\n    text-shadow: 0px -1px 0px #00000040;\n    width: 100%;\n    height: 60px;\n    font-family: sans-serif;\n    font-size: 32px;\n    font-weight: 900;\n    color: #777;\n    line-height: 60px;\n    text-align: center;\n    user-select: none;\n    cursor: pointer;\n}\n</style>\n<div class="wrapper">\n</div>\n';var b=function(t){function e(){var t;Object(o["a"])(this,e),t=Object(a["a"])(this,Object(s["a"])(e).call(this));var n=t.attachShadow({mode:"closed"}),r=p.content.cloneNode(!0);return n.appendChild(r),t.$body=n.querySelector(".wrapper"),t.$body.addEventListener("mousedown",function(){t.$body.style.boxShadow="0px 1px 1px #00000030"}),t.$body.addEventListener("mouseup",function(){t.$body.style.boxShadow="0px 3px 5px #00000030"}),t}return Object(c["a"])(e,t),Object(r["a"])(e,[{key:"attributeChangedCallback",value:function(t,e,n){this[t]=n,this.render()}},{key:"render",value:function(){this.$body.innerHTML=this.label,this.$body.style.background=this.bgcolor,this.$body.style.borderColor=this.bgcolor,this.$body.style.color=this.color,this.$body.style.height=this.height,this.$body.style.lineHeight=this.lineheight}}],[{key:"observedAttributes",get:function(){return["label","bgcolor","color","height","lineheight"]}}]),e}(d(HTMLElement));window.customElements.define("sos-button",b)},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);