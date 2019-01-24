<template>
<div id="main">
    <div id="background" :style="bg">
        <svg id="logo" width="604" height="128" xmlns="http://www.w3.org/2000/svg" v-show="logoShow">
            <metadata id="metadata12">image/svg+xml</metadata>
            <g>
                <title>background</title>
                <rect fill="none" id="canvas_background" height="130" width="606" y="-1" x="-1"/>
            </g>
            <g>
                <title>Layer 1</title>
                <g id="logo-group">
                    <g font-style="normal" font-weight="300" font-size="72px" font-family="'Montserrat Light Alt1'" text-anchor="middle" id="title">
                        <path fill="#ffffff" transform="translate(0,308.0249938964844) " d="m96.586863,-293.039997l-7.344,0l0,46.368l-67.39198,0l0,-46.368l-7.34402,0l0,100.8l7.34402,0l0,-47.952l67.39198,0l0,47.952l7.344,0l0,-100.8z" id="path14"/>
                        <path fill="#ffffff" transform="translate(0,308.0249938964844) " d="m161.788123,-293.039997l0,100.8l7.344,0l0,-100.8l-7.344,0z" id="path16"/>
                        <path fill="#ffffff" transform="translate(0,308.0249938964844) " d="m287.392863,-227.519997c7.488,-2.16 13.392,-5.904 17.424,-11.376c4.03202,-5.472 6.192,-12.096 6.192,-20.16c0,-10.512 -3.59998,-18.864 -10.8,-24.912c-7.19998,-6.048 -17.136,-9.072 -29.808,-9.072l-36.144,0l0,6.624l36.144,0c10.656,0 18.864,2.448 24.624,7.2c5.616,4.752 8.496,11.52 8.496,20.16c0,8.784 -2.88,15.552 -8.496,20.304c-5.76,4.752 -13.968,7.056 -24.624,7.056l-36.144,0l0,39.456l7.34402,0l0,-32.976l28.79998,0c2.88,0 6.192,-0.144 9.792,-0.72l24.048,33.696l8.352,0l-25.2,-35.28z" id="path18"/>
                        <path fill="#ffffff" transform="translate(0,308.0249938964844) " d="m440.038093,-242.208003l0,34.704c-7.632,6.192 -17.136,9.216 -28.656,9.216c-8.64,0 -16.416,-1.872 -23.328,-5.76c-6.912,-3.888 -12.384,-9.216 -16.416,-15.984c-4.032,-6.768 -5.904,-14.256 -5.904,-22.608c0,-8.352 1.872,-15.84 5.904,-22.608c3.888,-6.768 9.36,-12.096 16.272,-15.984c6.912,-3.744 14.832,-5.76 23.472,-5.76c6.336,0 12.096,1.008 17.28,2.88c5.184,1.872 9.936,4.896 14.256,9.072l4.608,-4.896c-4.464,-4.464 -9.792,-7.92 -15.984,-10.224c-6.192,-2.304 -12.96,-3.6 -20.304,-3.6c-10.08,0 -19.152,2.304 -27.216,6.624c-8.064,4.464 -14.256,10.512 -18.864,18.288c-4.608,7.776 -6.768,16.56 -6.768,26.208c0,9.792 2.16,18.432 6.768,26.208c4.608,7.776 10.8,13.968 18.864,18.288c8.064,4.464 16.992,6.624 27.072,6.624c6.912,0 13.536,-1.008 19.872,-3.312c6.336,-2.16 11.664,-5.328 16.128,-9.648l0,-37.728l-7.056,0z" id="path20"/>
                        <path fill="#ffffff" transform="translate(0,308.0249938964844) " d="m585.733154,-235.727997c-3.744,-4.32 -9.216,-7.056 -16.416,-8.496c5.04,-1.584 9.216,-4.464 12.24,-8.496c3.024,-3.888 4.608,-8.64 4.608,-14.544c0,-8.208 -3.168,-14.544 -9.216,-19.008c-6.048,-4.464 -14.544,-6.768 -25.488,-6.768l-42.048,0l0,6.336l41.76,0c8.784,0 15.552,1.728 20.304,5.184c4.752,3.456 7.2,8.352 7.2,14.832c0,6.624 -2.448,11.664 -7.2,15.12c-4.752,3.456 -11.52,5.04 -20.304,5.04l-41.76,0l0,6.336l44.928,0c9.648,0 17.136,1.728 22.176,5.04c5.04,3.456 7.632,8.64 7.632,15.696c0,7.2 -2.592,12.384 -7.632,15.84c-5.04,3.456 -12.384,5.04 -22.176,5.04l-44.928,0l0,6.336l44.928,0c12.24,0 21.456,-2.304 27.792,-6.912c6.192,-4.608 9.36,-11.088 9.36,-19.728c0,-6.768 -2.016,-12.384 -5.76,-16.848z" id="path22"/>
                    </g>
                </g>
            </g>
        </svg>
    </div>
    <div class="help">
        <a href="/docs/" target="_blank"><i class="fa fa-info-circle"></i></a>
    </div>
    <transition name="fade">
        <Search ref="search" v-show="searchMode" />
    </transition>
    <transition name="fade">
        <Application ref="application" v-show="applicationMode" />
    </transition>
</div>
</template>

<script>
import Search from './Search.vue'
import Application from './Application.vue'
import {wps} from '../assets/js/wallpaper'


export default {
    name: 'Main',
    components: {
        Search,
        Application,
    },
    data() {
        return {
            logoShow: true,
            fullscreen: false,
            searchMode: false,
            applicationMode: false,
            bg: {backgroundImage: ''},
        }
    },
    mounted() {
        document.addEventListener('keydown', (e) => {
            // console.log(e.code);
            let key = e.code
            let activeTag = document.activeElement.tagName
            if (key === 'Space' && activeTag !== 'INPUT') {
                this.searchMode = false
                this.applicationMode = !this.applicationMode
            } else if (key === 'Slash' && (activeTag !== 'INPUT' || e.metaKey)) {
                this.logoShow = !this.logoShow
                this.applicationMode = false
                this.searchMode = !this.searchMode
                this.$refs.search.selectContent()
            } else if (key === 'KeyF' && activeTag !== 'INPUT') {
                this.toggleFullScreen()
            } else if (key === 'Escape') {
                // this.searchMode = false
                // this.applicationMode = false
            } else if (key === 'KeyU' && e.metaKey) {
                this.$refs.search.clearAndFocus()
            } else if (['ArrowDown', 'ArrowUp'].includes(key) && this.searchMode) {
                this.$refs.search.changeEngine(key)
            }
        })

        this.bg = this.getRandomWallPaper()
    },
    watch: {
        searchMode: function(newVal) {
            let filter = 'brightness(0.3)'
            let bgStyle = document.querySelector('#background').style
            newVal ? bgStyle.filter = filter : bgStyle.filter = ''
            if (newVal) {
                setTimeout(()=>{
                    this.$refs.search.$refs.input.focus()
                }, 100)
            }
        },
        applicationMode: function(newVal) {
            let filter = 'blur(40px)'
            let bgStyle = document.querySelector('#background').style
            newVal ? bgStyle.filter = filter : bgStyle.filter = ''
        },
    },
    methods: {
        toggleFullScreen() {
            let element = document.documentElement;
            if (this.fullscreen) {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                } else if (document.webkitCancelFullScreen) {
                    document.webkitCancelFullScreen();
                } else if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen();
                } else if (document.msExitFullscreen) {
                    document.msExitFullscreen();
                }
            } else {
                if (element.requestFullscreen) {
                    element.requestFullscreen();
                } else if (element.webkitRequestFullScreen) {
                    element.webkitRequestFullScreen();
                } else if (element.mozRequestFullScreen) {
                    element.mozRequestFullScreen();
                } else if (element.msRequestFullscreen) {
                    // IE11
                    element.msRequestFullscreen();
                }
            }
            this.fullscreen = !this.fullscreen;
        },
        getRandomWallPaper() {
            let r = Math.floor(Math.random() * wps.length)
            let img = wps[r]
            return {
                backgroundImage: `url(${img})`,
            }
        },
    }
}
</script>

<style scoped lang="stylus">
#main
    height: 100vh
    width: 100vw
    overflow: hidden
    position: relative
    #background
        height: 100%
        width: 100%
        overflow: hidden
        background-repeat: no-repeat
        background-size: cover
        background-position: center
        transition: all .3s ease
        #logo
            display: block
            margin: 150px auto 0 auto
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.help
    position: absolute
    top: 0
    right: 0
    width: 30px
    height: 30px
    font-size: 18px
    line-height: 30px
    text-align: center
    a
        color: #fff

</style>
