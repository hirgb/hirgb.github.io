(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-dbe8f5a4"],{3334:function(t,e,n){"use strict";var i=n("9b1b"),r=n.n(i);r.a},"9b1b":function(t,e,n){},affa:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("canvas")},r=[],h=(n("6c7b"),n("d4ec")),s=n("bee2"),a=function(){function t(e,n){Object(h["a"])(this,t),this.x=e||0,this.y=n||0}return Object(s["a"])(t,[{key:"add",value:function(t){return this.x+=t.x,this.y+=t.y,this}},{key:"length",value:function(){return Math.sqrt(this.x*this.x+this.y*this.y)}},{key:"rotate",value:function(t){return this.x=Math.cos(t)*this.x-Math.sin(t)*this.y,this.y=Math.sin(t)*this.x+Math.cos(t)*this.y,this}},{key:"mult",value:function(t){return this.x*=t,this.y*=t,this}}]),t}(),o=function(){function t(e,n,i,r){Object(h["a"])(this,t),this.p=e||null,this.r=n||0,this.c=i||"rgba(255,255,255,1.0)",this.ctx=r}return Object(s["a"])(t,[{key:"render",value:function(){for(var t=this,e=this.ctx,n=0;n<5;n++)(function(n){setTimeout(function(){e.beginPath(),e.fillStyle=t.color,e.moveTo(t.p.x,t.p.y),e.arc(t.p.x,t.p.y,n,0,this.circle,!0),e.fill()},60*n)})(n)}}]),t}(),c=function(){function t(e,n,i,r,s){Object(h["a"])(this,t),this.p=e||null,this.v=n||null,this.r=i||0,this.length=0,this.generation=1,this.tree=s||null,this.color=r||"rgba(255,255,255,1.0)",this.circle=2*Math.PI,this.register()}return Object(s["a"])(t,[{key:"register",value:function(){this.tree.addBranch(this)}},{key:"draw",value:function(){var t=this.tree.ctx;t.beginPath(),t.fillStyle=this.color,t.moveTo(this.p.x,this.p.y),t.arc(this.p.x,this.p.y,this.r,0,this.circle,!0),t.fill()}},{key:"modify",value:function(){var t=.18-.1/this.generation;if(this.p.add(this.v),this.length+=this.v.length(),this.r*=.99,this.v.rotate(l(-t,t)),this.r<.8||this.generation>10){this.tree.removeBranch(this);var e=new o(this.p,10,this.color,this.tree.ctx);e.render()}}},{key:"grow",value:function(){this.draw(),this.modify(),this.fork()}},{key:"fork",value:function(){var t=this.length-l(100,200);if(t>0){var e=Math.round(l(1,3));this.tree.stat.fork+=e-1;for(var n=0;n<e;n++)this.clone(this);this.tree.removeBranch(this)}}},{key:"clone",value:function(e){var n=new t(new a(e.p.x,e.p.y),new a(e.v.x,e.v.y),e.r,e.color,e.tree);return n.generation=e.generation+1,n}}]),t}(),u=function(){function t(){Object(h["a"])(this,t),this.branches=[],this.timer=null,this.stat={fork:0,length:0}}return Object(s["a"])(t,[{key:"addBranch",value:function(t){this.branches.push(t)}},{key:"removeBranch",value:function(t){for(var e=0;e<this.branches.length;e++)if(this.branches[e]===t)return void this.branches.splice(e,1)}},{key:"render",value:function(){var t=this;this.timer=setInterval(function(){if(t.branches.length>0)for(var e=0;e<t.branches.length;e++)t.branches[e].grow()},1e3/30)}},{key:"init",value:function(t){this.ctx=t}},{key:"abort",value:function(){this.branches=[],this.stat={fork:0,length:0}}}]),t}();function l(t,e){return Math.random()*(e-t)+t}function f(t,e,n,i){return"rgba("+t+","+e+","+n+","+i+")"}function v(t,e,n){return f(Math.round(l(t,e)),Math.round(l(t,e)),Math.round(l(t,e)),n)}var b={mounted:function(){this.init()},methods:{init:function(){var t=window.innerWidth,e=window.innerHeight,n=t/2,i=600/e,r=3/i,h=document.querySelector("canvas");h.width=t,h.height=e;var s=h.getContext("2d");s.globalCompositeOperation="lighter";var o=new u;o.init(s);for(var l=0;l<3;l++)new c(new a(n,e),new a(Math.random(-1,1),-r),15/i,v(0,255,.3),o);o.render()}}},d=b,y=(n("3334"),n("2877")),g=Object(y["a"])(d,i,r,!1,null,"1cb8fa8b",null);g.options.__file="Tree.vue";e["default"]=g.exports},bee2:function(t,e,n){"use strict";function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function r(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}n.d(e,"a",function(){return r})},d4ec:function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",function(){return i})}}]);