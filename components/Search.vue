<template>
<div id="search">
    <div id="input-wrap">
        <input ref="input" type="text" v-model="searchWord" @keyup.enter="search">
        <div id="engines-scroll" :style="scrollStyle">
            <span v-for="(i, index) in enginesScroll" :key="i" v-text="i" :style="engineStyle(index)"></span>
        </div>
    </div>
</div>
</template>

<script>
import {
    engines,
    getEngine
} from '@/assets/js/engines.js'

export default {
    name: 'Search',
    data() {
        return {
            searchWord: '',
            searchPre: '',
            engine: 'https://www.google.com/search?q=',
            engineIndex: 0,
            enginesScroll: Object.keys(engines),
        }
    },
    mounted() {},
    computed: {
        scrollStyle: function(){
            let top = '-' + this.engineIndex * 48 + 'px'
            return {
                top
            }
        }
    },
    methods: {
        search() {
            if(!this.searchWord) return

            let {engine, q} = getEngine(this.engine, this.searchWord)

            window.open(engine + q)
        },
        selectContent() {
            this.$refs.input.select()
        },
        clearAndFocus() {
            this.searchWord = ''
            this.$refs.input.focus()
        },
        engineStyle(i) {
            let trans = ['FF', 'DD', '88', '44', '11']
            let c = Math.abs(i - this.engineIndex)
            // let s = 1 - c / 10
            return {
                color: '#999999' + (!!trans[c] ? trans[c]: '00'),
                // transform: `scaleY(${s})`
            }
        },

        changeEngine(key) {
            if (key == 'ArrowDown') {
                (this.engineIndex < this.enginesScroll.length - 1) && this.engineIndex++
            } else if (key == 'ArrowUp') {
                (this.engineIndex > 0) && this.engineIndex--
            }
            this.engine = engines[this.enginesScroll[this.engineIndex]]
        }
        // 00, 11, 22, 33, 44, 55, 66, 77, 88, 99, AA, BB, DD, CC, DD, EE, FF
    }
}
</script>

<style scoped lang="stylus">
#search
    position: absolute
    top: 320px
    left: 0
    width: 100%
    #input-wrap
        position: relative
        display: block
        width: 610px
        height: 48px
        margin: 0 auto
        input
            display: block
            width: 100%
            height: 100%
            border: none
            background-color: rgba(255, 255, 255, 0.9)
            padding: 0 10px
            font-size: 24px
            line-height: 24px
            outline: none
            box-shadow: 0 5px 5px rgba(0, 0, 0, .3)
        #engines-scroll
            position: absolute
            width: 120px
            left: -140px
            top: 0
            transition: all .3s ease
            user-select: none
            span
                display: block
                text-align: right
                font-size: 24px
                line-height: 48px
                height: 48px
                color: #999
</style>
