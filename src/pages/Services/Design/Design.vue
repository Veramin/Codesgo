<template>
    <div class="WeChat_commerce">
        <div class="banner_box">
            <div class="banner">
                <div class="des_box">
                    <p class="main_title">UI/UX Design</p>
                    <p class="sub_title">Let us bring you User interface to the next level and make it Convert.</p>
                    <button type="button">Get More</button>
                    </div>
                </div>
            
        </div>

        <div class="main_content">
            <p class="title">WHAT CAN WE PROVIDE?</p>
            <p class="text">Let us bring you User interface to the next level and make it Convert. Mobile-centric approach moving from Smart Phone - Table to Desktop.we will lead you through the digitial jungle.</p>
            
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
    name: "Design",
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
            height 600px
            background url('../../../../static/images/ui_banner.jpg')  no-repeat fixed bottom center/cover transparent;
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
                    margin-top 45px
                    color #fff
                    
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
                        background-color #717B7D
                        color #fff
                        

                        
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
