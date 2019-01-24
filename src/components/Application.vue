<template>
    <div class="app-page">
        <grid :draggable="true" :sortable="true" :items="apps" :cellWidth="150" :cellHeight="150">
            <template slot="cell" scope="props">
                <div class="app-item" @click="goto(props.item.href)">
                    <div class="pic" :style="getIcon(props.item)"></div>
                    <span class="title" v-text="props.item.title"></span>
                </div>
            </template>
        </grid>
    </div>
<!-- <div class="app-page">
    <div class="app-item" v-for="i in apps" :key="i.name" @click="goto(i.href)">
            <div class="pic" :style="getIcon(i)"></div>
            <span class="title" v-text="i.title"></span>
        </div>
</div> -->
</template>

<script>
import {
    apps
} from '../assets/js/apps'
export default {
    name: "Application",
    data() {
        return {
            apps,
        }
    },
    methods: {
        getIcon(i) {
            return {
                backgroundImage: `url(${i.icon})`,
            }
        },
        goto(href) {
            if (href) {
                window.open(href)
            }
        }
    }
}
</script>

<style scoped lang="stylus">
.app-page
    height: 80vh
    width: 100vw
    position: absolute
    top: 10vh
    left: 0
    // background-color: #ffffff50
    // display: flex
    // flex-wrap: wrap
    // justify-content: flex-start
    // align-items: flex-start
    // align-content: flex-start
    user-select: none
    .app-item
        width: 150px
        height: 150px
        cursor: pointer
        .pic
            width: 100%
            height: calc(100% - 50px)
            background-size: 80px 80px
            background-repeat: no-repeat
            background-position: center center
        .title
            display: block
            width: 100%
            height: 50px
            font-size: 16px
            font-weight: 500
            line-height: 50px
            text-align: center
            overflow: hidden
            text-overflow: ellipsis
            white-space: nowrap
            color: #fff
            text-shadow: 1px 1px 3px #00000080
        &:hover
            background-color: #ffffff20
            .title
                text-shadow: 1px 1px 3px #00000000
</style>
