<template>
    <div id="caseList">
        <div class="caseList-item">
            <div class="caseList-item">
                <!-- 页面标题部分 -->
                <p class="title">{{CaseLists.title}}</p>
                <!-- 内容盒子 -->
                <div class="item item_box">
                    <div class="case-box" v-for="(item, index) in CaseLists.CaseList" :key="index">
                        
                        <div class="mask">
                            <img :src="item.imgMaskUrl" alt="">
                        </div>
                        <img :src="item.imgUrl" alt="" class="main_picture">
                        <div class="text-box">
                            <p class="name">{{item.text1}}</p>
                            <button type="button">{{item.text2}}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CaseList',
    data() {
        return {
            CaseLists: {
                title: '我们的服务',
                CaseList: [
                    {
                        imgUrl: "../../../static/images/case01.png",
                        imgMaskUrl: "../../../static/images/case01_mask.png",
                        text1: "Consultancy & Strategy",
                        text2: 'Get More'
                    },
                    {
                        imgUrl: "../../../static/images/case02.png",
                        imgMaskUrl: "../../../static/images/case02_mask.png",
                        text1: "UX / UI Design",
                        text2: 'Get More'
                    },
                    {
                        imgUrl: "../../../static/images/case03.png",
                        imgMaskUrl: "../../../static/images/case03_mask.png",
                        text1: "WeChat e-Commerce",
                        text2: 'Get More'
                    },
                    {
                        imgUrl: "../../../static/images/case04.png",
                        imgMaskUrl: "../../../static/images/case04_mask.png",
                        text1: "E-commerce Website Development",
                        text2: 'Get More'
                    },
                    {
                        imgUrl: "../../../static/images/case05.png",
                        imgMaskUrl: "../../../static/images/case05_mask.png",
                        text1: "E-commerce platform settled",
                        text2: 'Get More'
                    },
                    {
                        imgUrl: "../../../static/images/case06.png",
                        imgMaskUrl: "../../../static/images/case06_mask.png",
                        text1: "云托管",
                        text2: 'Get More'
                    },
                    {
                        imgUrl: "../../../static/images/case07.png",
                        imgMaskUrl: "../../../static/images/case08_mask.png",
                        text1: "Cloud Hosting",
                        text2: 'Get More'
                    },
                    {
                        imgUrl: "../../../static/images/case01.png",
                        imgMaskUrl: "../../../static/images/case01_mask.png",
                        text1: "User Insight Platform",
                        text2: 'Get More'
                    },

                ]
            }
                

            
        }

    }
}
</script>


<style lang="stylus" scoped ref="stylesheet/stylus">
    #caseList
        margin-top 65px
        width 100%
        .caseList-item
            width 80%
            margin 0 auto
            .caseList-item
                width 100%
                height 606px
                .title
                    width 100%
                    padding 30px 0
                    text-align center
                    font-weight 500
                    font-size 30px
                    background-color #fff
                .item
                    width 100%
                    height 516px
                    display flex
                    flex-wrap wrap
                    .case-box
                        width 273px
                        border 1px solid #ccc
                        background-color #fff
                        position relative 
                        .main_picture
                            width 100%
                            height 65%
                            
                        .mask
                            width 100%
                            height 65%
                            position absolute
                            top 0
                            left 0
                            img
                                width 60px
                                height 60px
                                margin-top 50px
                                margin-left calc((275px - 60px) / 2)
                        .text-box
                            width 100%
                            height 35%
                            .name
                                width 100%
                                height 63%
                                font-size 20px
                                line-height 45px
                                display flex
                                justify-content center
                            button
                                width 100%
                                height 35%
                                border none
                                outline none
                                font-size 12px
                                cursor pointer
                                color #3388FF
                                background-color #fff
                                
                    .case-box:hover
                        border-color #3388FF
                    .case-box:hover .mask
                        background-color #333
                        opacity: 0.7

</style>


<style scoped>
    .case-box:not(:nth-child(4n)) {
        margin-right: calc((100% - 275px *4) / 3);
        margin-bottom: 20px;
    }
    .case-box{
        margin-bottom: 20px;
    }
    .case-box:nth-child(-n+8):nth-child(n+5) {
        margin-bottom: 0px;
    }


</style>

