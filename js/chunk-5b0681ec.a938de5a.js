(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5b0681ec"],{"16ff":function(e,t,i){"use strict";var s=i("5303"),n=i.n(s);n.a},"3ee0":function(e,t,i){},5303:function(e,t,i){},c639:function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{ref:"container",staticClass:"container"},[i("div",{staticClass:"bg"}),i("div",{staticClass:"buttons"},[i("div",{staticClass:"button",on:{click:e.toggleFullscreen}},[e._v("全屏")]),i("div",{staticClass:"button",on:{click:e.gotoTop}},[e._v("顶部")]),i("div",{staticClass:"button",on:{click:e.jumpToAlbum}},[e._v("跳转")]),i("div",{staticClass:"button",on:{click:e.restorePage}},[e._v("恢复")])]),i("div",{staticClass:"main"},[i("h1",{staticClass:"main-title"},[e._v("BeautifulGirls")]),i("Row",e._l(e.albums,function(t){return i("i-col",{key:t,staticStyle:{"text-align":"center",margin:"30px 0"},attrs:{span:"6"}},[i("div",{staticClass:"album"},[i("span",{staticClass:"album-index"},[e._v("#"+e._s(t))]),t>5?i("img",{attrs:{src:e.imageBaseUrl+t+"/1.jpg",onerror:"this.style.display = 'none'"},on:{click:function(i){e.showAlbumBrowser(t)}}}):e._e()])])}),1)],1),i("div",{staticClass:"loader",on:{click:e.nextPage}},[e._v("Page "+e._s(e.page)+" - Load More")]),i("album-browser",{ref:"albumBrowser"})],1)},n=[],a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{ref:"browser",staticClass:"wraper",on:{touchmove:function(e){e.preventDefault()},scroll:function(e){e.preventDefault()}}},[i("img",{ref:"img",style:{maxHeight:e.realLarge?"":"100%",maxWidth:e.realLarge?"":"100%"},attrs:{src:""+e.imageBaseUrl+e.albumIndex+"/"+e.imageIndex+".jpg"},on:{load:e.imgLoaded,error:e.imgError}}),i("div",{staticClass:"button small-button close-btn",on:{click:e.hide}},[e._v("关闭")]),i("span",{directives:[{name:"show",rawName:"v-show",value:e.isPlaying,expression:"isPlaying"}],staticClass:"status"},[e._v("播放中...")]),i("div",{staticClass:"control-buttons"},[i("div",{staticClass:"button small-button prev-btn",on:{click:e.prev}},[e._v("上一张")]),i("div",{staticClass:"button big-button play-btn",on:{click:e.togglePlay}},[e._v("播放")]),i("div",{staticClass:"button small-button next-btn",on:{click:e.next}},[e._v("下一张")]),i("div",{staticClass:"button small-button real-large-btn",on:{click:function(t){e.realLarge=!e.realLarge}}},[e._v("1 : 1")])]),e.loading?i("Spin",{attrs:{size:"large",fix:""}}):e._e()],1)},l=[],r={data:function(){return{albumIndex:32610,imageBaseUrl:"https://ii.hywly.com/a/1/",imageIndex:1,loading:!1,realLarge:!1,isPlaying:!1,playTimer:null}},methods:{show:function(e){this.albumIndex=e,this.imageIndex=1,this.$refs.browser.style.display="block",this.$refs.browser.style.opacity="1",window.addEventListener("keydown",this.keydownWatcher)},hide:function(){this.$refs.browser.style.display="none",this.$refs.browser.style.opacity="0",this.imageIndex=1,this.realLarge=!1,this.playTimer&&window.clearInterval(this.playTimer),this.playTimer=null,this.isPlaying=!1,window.removeEventListener("keydown",this.keydownWatcher)},next:function(){this.imageIndex++,this.loading=!0,this.realLarge=!1},prev:function(){this.imageIndex>1?(this.imageIndex--,this.loading=!0,this.realLarge=!1):this.$Message.info("已经是第一张")},imgLoaded:function(){this.loading=!1},imgError:function(){this.$Message.error("已达相册末尾"),this.isPlaying?this.imageIndex=1:this.imageIndex--},togglePlay:function(){this.isPlaying=!this.isPlaying,this.isPlaying?this.playTimer=window.setInterval(this.next,3e3):(window.clearInterval(this.playTimer),this.playTimer=null)},keydownWatcher:function(e){var t=e.code;switch(t){case"ArrowRight":this.next();break;case"ArrowLeft":this.prev();break;case"Digit1":this.realLarge=!this.realLarge;break;case"Space":this.togglePlay();break;default:break}}}},o=r,c=(i("ef80"),i("d73f"),i("2877")),u=Object(c["a"])(o,a,l,!1,null,"05d0a8b2",null);u.options.__file="AlbumBrowser.vue";var m=u.exports,d={components:{AlbumBrowser:m},data:function(){return{page:0,albums:[],imageBaseUrl:"https://ii.hywly.com/a/1/",fullscreen:!1,restore:{page:0},mode:"browse",isInitial:!0,jumpToAlbumIndex:1,jumpStartIndex:1}},watch:{page:function(e){var t;"browse"===this.mode?t=1:"jump"===this.mode&&this.isInitial?(t=24*(e-1)+1,this.jumpStartIndex=t):"jump"!==this.mode||this.isInitial||(t=this.jumpStartIndex);for(var i=24*(e-1)+24,s=[],n=t;n<=i;n++)s.push(n);this.albums=s}},mounted:function(){this.page=1},methods:{nextPage:function(){this.isInitial=!1,this.page++},gotoTop:function(){this.$refs.container.scrollTo(0,0)},jumpToAlbum:function(){var e=this;this.$Modal.confirm({title:"跳转到相册",render:function(t){return t("Input",{props:{autofocus:!0,placeholder:"输入相册数字序号"},on:{input:function(t){e.jumpToAlbumIndex=parseInt(t.trim())}}})},onOk:function(){var t=e.jumpToAlbumIndex;if(!isNaN(t)&&t>0){"browse"===e.mode&&(e.restore.page=e.page),e.mode="jump",e.isInitial=!0;var i=Math.ceil(t/24);e.startIndex=24*(i-1)+1,e.page=i}}})},restorePage:function(){"jump"===this.mode&&(this.mode="browse",this.isInitial=!0,this.page=this.restore.page)},toggleFullscreen:function(){var e=document.documentElement;this.fullscreen?document.exitFullscreen?document.exitFullscreen():document.webkitCancelFullScreen?document.webkitCancelFullScreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen():e.requestFullscreen?e.requestFullscreen():e.webkitRequestFullScreen?e.webkitRequestFullScreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.msRequestFullscreen&&e.msRequestFullscreen(),this.fullscreen=!this.fullscreen},showAlbumBrowser:function(e){this.$refs.albumBrowser.show(e)}}},h=d,g=(i("16ff"),Object(c["a"])(h,s,n,!1,null,"4de86b8e",null));g.options.__file="index.vue";t["default"]=g.exports},d3ae:function(e,t,i){},d73f:function(e,t,i){"use strict";var s=i("3ee0"),n=i.n(s);n.a},ef80:function(e,t,i){"use strict";var s=i("d3ae"),n=i.n(s);n.a}}]);