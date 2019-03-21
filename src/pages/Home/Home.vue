<template>
    <div class="home">
        <!-- 1. 首页轮播图 -->
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item, index) in homecasual" :key="index">
                    <img :src="item" alt="" width="100%" height="100%">
                </div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>

            <!-- 如果需要导航按钮 -->
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
        </div>

        <!-- 2. 方案展示 -->
        <ShowList></ShowList>

        <!-- 3. 多行业解决方案展示 -->
        <CaseList></CaseList>

        <!-- 4. 我们的客户 -->
        <Clients></Clients>


    </div>
</template>

<script>
// 引入组件
import Swiper from "swiper"
import "swiper/dist/css/swiper.min.css"

import ShowList from "./ShowList"
import CaseList from "./CaseList"
import Clients from "./Clients"

export default {
    name: "Home",
    data() {
        return {
            homecasual: [
                "../../../static/images/01.jpg",
                "../../../static/images/02.jpg",
                "../../../static/images/03.jpg",
                "../../../static/images/04.jpg",
                "../../../static/images/05.jpg",
                "../../../static/images/06.jpg",
            ]
        }
    },
    components: {
        ShowList,
        CaseList,
        Clients
    },
    mounted(){
     new Swiper ('.swiper-container', {
        autoplay: true, 
        loop: true, // 循环模式选项

        // 如果需要分页器
        pagination: {
        el: '.swiper-pagination',
        },

        // 如果需要前进后退按钮
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        })        
    }
}
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
    .home 
        width 100%
        background-color #fff
        .swiper-container
            width: 100%
            height 700px
            .swiper-pagination
                bottom 20px
            .swiper-button-prev
                display none
                left 30px
                background-image: url("../../../static/images/arrow-left.png")
            .swiper-button-next
                display none
                right 30px
                background-image: url("../../../static/images/arrow-right.png")
        .swiper-container:hover .swiper-button-prev,
        .swiper-container:hover .swiper-button-next {
            display inline-block
            background-color #d3d3d3
            opacity 0.6
            width 45px
            height 70px
        }
    
</style>