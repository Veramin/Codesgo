<template>
    <div id="clientsList">
        <div class="clientsList-item">
            <!-- 页面标题 -->
            <p class="title">我们的客户</p>
            <div class="clientsList-item">
                <!-- 内容盒子 -->
                <!-- <div class="item item_box"> -->
                    <div class="case-box">
                        <img class="show_pic" src="../../../static/images/gozo.jpg" alt="">
                        <div class="text-box">
                            <div>
                                <img src="../../../static/images/gozo_.png" alt="" class="small_logo">
                                <p class="desc">Business category: Clothing industry</p>
                                <p class="detail">“我们也试过自己找团队开发，结果一次促销，瞬间涌入几万笔订单一下就把系统冲垮了。后来决定用有赞微商城，专业的事交给专业的人，做生意还得用有赞。”</p>
                            </div>

                        </div>
                    </div>

                    <div class="case-box">
                        <img class="show_pic" src="../../../static/images/chazitang.png" alt="">
                        <div class="text-box">
                            <div>
                                <img src="../../../static/images/chazitang_logo.png" alt="" class="small_logo">
                                <p class="desc">Business category: Others industry</p>
                                <p class="detail">“我们也试过自己找团队开发，结果一次促销，瞬间涌入几万笔订单一下就把系统冲垮了。后来决定用有赞微商城，专业的事交给专业的人，做生意还得用有赞。”</p>
                            </div>

                        </div>
                    </div>

                    <div class="case-box">
                        <img class="show_pic" src="../../../static/images/michelin.png" alt="">
                        <div class="text-box">
                            <div>
                                <img src="../../../static/images/logo_m.jpg" alt="" class="small_logo">
                                <p class="desc">Business category: Automobile industry</p>
                                <p class="detail">“我们也试过自己找团队开发，结果一次促销，瞬间涌入几万笔订单一下就把系统冲垮了。后来决定用有赞微商城，专业的事交给专业的人，做生意还得用有赞。”</p>
                            </div>

                        </div>
                    </div>

                    <div class="case-box">
                        <img class="show_pic" src="../../../static/images/Carrefour.jpg" alt="">
                        <div class="text-box">
                            <div>
                                <img src="../../../static/images/carrefour.png" alt="" class="small_logo">
                                <p class="desc">Business category: Retail industry</p>
                                <p class="detail">“我们也试过自己找团队开发，结果一次促销，瞬间涌入几万笔订单一下就把系统冲垮了。后来决定用有赞微商城，专业的事交给专业的人，做生意还得用有赞。”</p>
                            </div>

                        </div>
                    </div>

                    <div class="case-box">
                        <img class="show_pic" src="../../../static/images/juicy.jpg" alt="">
                        <div class="text-box">
                            <div>
                                <img src="../../../static/images/jctr-logo-master.png" alt="" class="small_logo">
                                <p class="desc">Business category: Clothing industry</p>
                                <p class="detail">“我们也试过自己找团队开发，结果一次促销，瞬间涌入几万笔订单一下就把系统冲垮了。后来决定用有赞微商城，专业的事交给专业的人，做生意还得用有赞。”</p>
                            </div>

                        </div>
                    </div>

                    <div class="case-box">
                        <img class="show_pic" src="../../../static/images/acer.jpg" alt="">
                        <div class="text-box">
                            <div>
                                <img src="../../../static/images/13e8d541d74ed1b43876c3da0b44c3b9.png" alt="" class="small_logo">
                                <p class="desc">Business category: Electronic product</p>
                                <p class="detail">“我们也试过自己找团队开发，结果一次促销，瞬间涌入几万笔订单一下就把系统冲垮了。后来决定用有赞微商城，专业的事交给专业的人，做生意还得用有赞。”</p>
                            </div>

                        </div>
                    </div>
                <!-- </div> -->
            </div>
            
            <router-link to="/more"><button type="button" >更多案例</button></router-link>
        </div>


    </div>
    
</template>

<script>
export default {
    name: "Clients", 
    data() {
        return {
            clientsList: [
                {
                    bgcImg: "",
                    sImg: "",
                    desc: "",
                    detail: ""
                },
            ]
        }
    }
}
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
    #clientsList
        width 100%
        background-color #f8f8f8
        .clientsList-item
            width 100%
            display flex
            flex-direction column
            justify-content center
            align-items center
            .title
                width 100%
                padding 65px 0px
                font-size 30px
                font-weight 500
                text-align center
            .clientsList-item
                width 1190px
                height 650px
                display flex
                flex-direction row
                flex-wrap wrap
                .case-box
                    width 350px
                    height 300px
                    position relative
                    overflow hidden
                    img.show_pic
                        width 100%
                        height 150px
                    .text-box
                        position absolute 
                        width 100%
                        height 100%
                        top 150px
                        padding-right 20px 
                        background-color #fff
                        transition all .2s linear
                        div
                            position: relative;
                            width: 100%;
                            height: 100%;
                            .small_logo
                                width: 118px;
                                height: 22px;
                                position: absolute;
                                left: 30px;
                                top: 35px;
                                background-repeat: no-repeat;
                                background-size: contain;
                            .desc
                                position: absolute
                                font-size: 14px
                                color: #666
                                top: 95px
                                left: 30px
                            .detail
                                position absolute
                                font-size 14px
                                color #666
                                line-height 28px
                                top 150px
                                margin-left 30px
                                margin-right 30px
                                text-align justify
                .case-box:hover .text-box
                    top: 0;

                .case-box:hover
                    box-shadow 10px 10px 20px #d3d3d3

        button
            width 150px
            height 45px
            color #3388FF
            cursor pointer
            border-radius 5px
            background-color #fff
            border 1px solid #3388FF
            outline none
            margin 20px 0px 27.5px 0
        button:hover
            background-color #3388FF
            color #fff


</style>

<style scoped>
    .case-box:not(:nth-child(3n)) {
        margin-right: calc((1190px - 350px *3) / 2)
    }


</style>
