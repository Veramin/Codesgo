<template>
    <div class="WeChat_commerce">
        <div class="banner_box">
            <div class="banner">
                <div class="des_box">
                    <p class="main_title">Magento Commerce</p>
                    <p class="sub_title">Reduce Business Costs, Get to Market Quickly</p>
                    <p class="sub_title">Drive New Revenue Growth, Transform Customer Experiences</p>
                    <button type="button">Get More</button>
                    </div>
                    <!-- <img src="../../../../static/images/wechat_logo.png" alt=""> -->
                </div>
            
        </div>

        <div class="main_content">
            <p class="title">WHY MAGENTO FOR ECOMMERCE PLATFORMS</p>
            <p class="text">Magento Commerce is Part of Adobe Experience Cloud.Magento is a modern cloud eCommerce platform. Magento extends beyond the shopping cart for every shoppable experience, including email, mobile, in-store, and more. Now, as a part of Adobe Experience Cloud, Magento joins the only integrated platform for analytics, advertising, content creation, and commerce — everything you need for customer experience management.</p>
            
            <ShowProduct2></ShowProduct2>
            <ShowProduct></ShowProduct>
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
    name: "WeChat",
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
            background url('../../../../static/images/Magento-adobe-background.jpg')
            .banner
                width 80%
                height 80%
                padding-top 42px
                min-width 1100px
                margin 0 auto
                display flex
                flex-direction row
                // background-color pink
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
                        color #F86613
                        cursor pointer
                        outline none
                        border-radius 5px
                        background-color #ffffff
                        border none
                        margin-top 70px
                    button:hover
                        background-color #F66111
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
