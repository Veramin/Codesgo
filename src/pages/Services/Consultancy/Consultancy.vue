<template>
    <div class="China_commerce">
        <div class="banner_box">
            <div class="banner">
                <div class="des_box">
                    <p class="main_title">eCommerce Consultancy & Strategy</p>
                    <p class="sub_title">Provide real-time market knowledge and consultancy from our quarterly audited country market and platform localization data</p>
                    <button type="button">Get More</button>
                </div>
                    <img src="../../../../static/images/wechat_logo.png" alt="">
            </div>
        </div>
        <div class="main_content">
            <p class="title">eCommerce Consultancy & Strategy</p>
            <p class="text">Each market offers different opportunities. Therefore, we provide eCommerce consultancy and strategy to make your venture a success. Before taking your first step into a new market, it is vital to gain knowledge of the target market and define your eCommerce proposition and localization requirements.</p>
            <p class="text">Our eCommerce experts provide real-time market knowledge and consultancy from our quarterly audited country market and platform localization data.</p>
            <ShowProduct2></ShowProduct2>
            <!-- <ShowProduct></ShowProduct> -->
            <!-- <ShowProduct3></ShowProduct3> -->

        </div>
    </div>
</template>

<script>
// 引入组件
import ShowProduct from "./ShowProduct"
import ShowProduct2 from "./ShowProduct2"
import ShowProduct3 from "./ShowProduct3"

export default {
    name: "Consultancy",
    components: {
        ShowProduct,
        ShowProduct2,
        ShowProduct3
    },
    watch: {
    },
}
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
    .China_commerce 
        width 100%
        .banner_box
            width 100%
            height 420px
            background-color #3DA3F6
            .banner
                width 80%
                height 80%
                padding-top 42px
                min-width 1100px
                margin 0 auto
                display flex
                flex-direction row
                .des_box
                    width calc(60% - 30px)
                    margin-left 30px
                    // background-color pink
                    color #fff
                    // display flex
                    // flex-direction column
                    // justify-content top 
                    // align-items left
                    
                    .main_title
                        font-size 36px
                        
                        padding-top 45px
                    .sub_title
                        font-size 18px
                        padding 10px 0px
                    button
                        width 150px
                        height 45px
                        color #3DA3F6
                        cursor pointer
                        outline none
                        border-radius 5px
                        background-color #ffffff
                        border none
                        margin-top 70px
                    button:hover
                        background-color #3DA3F6
                        color #fff
                        border 1px solid #ccc
                        

                        
                img 
                    width 457px
                    height 330px
            
        .main_content
            width 100%
            .title
                padding 30px
                font-size 36px
                font-weight: 300;
                font-style: normal;
                text-align center
            .text
                width 80%
                margin 0 auto
                font-weight: 300;
                font-style: normal;
                font-size: 20px;
                line-height: 28px; 
                margin-bottom 45px
    
</style>