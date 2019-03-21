<template>
    <div class="WeChat_commerce">
        <div class="banner_box">
            <div class="banner">
                <div class="des_box">
                    <p class="main_title">WeChat Store Development</p>
                    <p class="sub_title">A software to solve all problems in online shop</p>
                    <button type="button">Get More</button>
                    </div>
                    <img src="../../../../static/images/wechat_logo.png" alt="">
                </div>
            
        </div>

        <div class="main_content">
            <!-- <p class="title">WeChat Store Development</p> -->
            <p class="text">Web app used to be only a concept before WeChat came out; since WeChat eCommerce has been widely accepted by Chinese customers, the time of web app has come. In general, WeChat store is a web app: featuring attractive front-end development and matching WeChat UI design, web app is a website that can give user an app-like user experience, while no longer requiring downloading or installing.</p>
            

            <p class="title">WeChat Store UI Design</p>
            <p class="text">Our WeChat UI/UX Design will find the perfect mix between your user’s experiences and WeChat platform itself. Our keen focus on how customers will interact with your WeChat eCommerce will boost interest, demand and sales.</p>

                <p class="title">WeChat Function Development</p>
            <p class="text">We will develop WeChat built-in functions that will bring a brand new shopping experience to your customers on WeChat.</p>
            <ShowProduct2></ShowProduct2>
            <!-- <ShowProduct></ShowProduct>
            <ShowProduct3></ShowProduct3> -->

        </div>
    </div>
</template>

<script>
// 引入组件
import ShowProduct from "./ShowProduct"
import ShowProduct2 from "./ShowProduct2"
import ShowProduct3 from "./ShowProduct3"


export default {
    name: "WeChat_Store_Development",
    data() {
        return {

        }
    },
    components: {
        ShowProduct,
        ShowProduct2,
        ShowProduct3
    },
}
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
    .WeChat_commerce 
        width 100%
        .banner_box
            width 100%
            height 420px
            background url('../../../../static/images/582c9fff826203d20a4d32c1698faf51.jpg')
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
                        color #F3594F
                        cursor pointer
                        outline none
                        border-radius 5px
                        background-color #ffffff
                        border none
                        margin-top 70px
                    button:hover {
                        background-color #F3594F
                        color #fff
                        border 1px solid #ccc
                    }
                        

                        
                img 
                    width 457px
                    height 330px
    
                    
        .main_content
            width 100%
            .title
                width 80%
                margin 0 auto
                padding-top 30px
                font-size 36px
                font-weight: 300;
                font-style: normal;
                text-align left
            .text
                width 80%
                margin 0 auto
                margin-top: 30px;
                font-weight: 300;
                font-style: normal;
                font-size: 20px;
                line-height: 28px;
                margin-bottom 45px
    
</style>
