<template>
    <div id="shopList">
        <div class="shopList-item">
            <p class="case_title">Our Solutions</p>
            <div class="shopList-item" v-for="(item, index) in shopList" :key="index">
                <!-- 版块标题 -->
                <p class="title">{{item.title}}</p>
                <div class="item">
                    <!-- 文字介绍 -->
                    <div class="shopDetails">
                        <div class="details_text" v-for="(detail, index) in item.details" :key="index">
                            <p class="mainT">{{detail.mainTitle}}</p>
                            <p class="subT">{{detail.subTtile}}</p>
                        </div>
                        <div class="details_btn">
                            <button class="free_use" type="button">Get More</button>
                        </div>
                    </div>
                

                <!-- 图片信息 -->
                <div class="shopImg">
                    <img :src="item.imgUrl" alt="">
                </div>
            </div>
        </div>
        </div>

    </div>
    
</template>

<script>
export default {
    name: "ShowList", 
    data() {
        return {
            shopList: [
                {
                    "title": "China eCommerce Solutions",
                    imgUrl: '../../../static/images/001.png',
                    details: [
                        {
                            mainTitle: 'China eCommerce Strategy',
                            subTtile: 'analyzing your strategy from a Market – Industry – Brand approach'
                        },
                        {
                            mainTitle: 'China Unified Design',
                            subTtile: 'Create an international UI/UX design & Innovative interactive experience'
                        },
                        {
                            mainTitle: 'China Localization',
                            subTtile: 'Make sure your Chinese audience can easily browse your website and enjoy a enjoyable shopping experience'
                        }
                    ]
                },
                {
                    "title": "WeChat eCommerce Solutions",
                    imgUrl: '../../../static/images/002.png',
                    details: [
                        {
                            mainTitle: 'e-Business Models',
                            subTtile: 'Come up with multiple eBusiness models to meet your companies and online demands'
                        },
                        {
                            mainTitle: 'Wechat Storefront Setup',
                            subTtile: 'Offer the user a more fluent user experience, additional hardware functions '
                        },
                        {
                            mainTitle: 'Channel Promotions',
                            subTtile: 'Benefit from WeChat e-commerce approach'
                        },
                    ]
                },
                {
                    "title": "Mobile Commerce Solutions",
                    imgUrl: '../../../static/images/003.png',
                    details: [
                        {
                            mainTitle: 'Dedicated Mobile Design',
                            subTtile: ' Focused on ease-of-use, simple navigation flow and quick check-out process'
                        },
                        {
                            mainTitle: 'Mobile Payment Methods',
                            subTtile: 'Help customers customize the payment method that meets people\'s daily consumption habits'
                        },
                        {
                            mainTitle: 'Mobile Authentication',
                            subTtile: 'Support multi-channel integrations and social media login'
                        }
                    ]
                },
                {
                    "title": "Magento Commerce Solutions",
                    imgUrl: '../../../static/images/004.png',
                    details: [
                        {
                            mainTitle: 'Reduce Business Costs'
                        },
                        {
                            mainTitle: 'Get to Market Quickly'
                        },
                        {
                            mainTitle: 'Drive New Revenue Growth'
                        },
                        {
                            mainTitle: 'Transform Customer Experiences'
                        },
                    ]
                }
            ],
            detailsList: []
        }
    },
    created() {
        // for(var i =0;i < this.shopList.length;i++) {
           
        //     this.detailsList = this.shopList[i].details;
        //      console.log(this.detailsList)
        // }
    }
}
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
    #shopList
        width 100%
        .shopList-item
            width 100%
            .case_title
                width 100%
                padding 35px 0px
                font-size 30px
                font-weight bolder
                text-align center
            .shopList-item
                width 80%
                margin 0 auto
                background-color #fff
                border-bottom 1px solid #f8f8f8
                .title
                    padding 30px 0
                    text-align left
                    font-weight bolder
                    font-size 22px
                .item
                    width 100%
                    height 416px
                    .shopDetails
                        width calc(50% - 100px)
                        padding-top 15px
                        height 95%
                        padding-left 100px
                        float left
                        text-align left
                        .details_text
                            width 100%
                            height 18%
                            .mainT
                                font-size 18px
                                padding-bottom 10px
                            .subT
                                font-size 14px
                                color #ccc
                        .details_btn
                            width 100%
                            height 28%
                            display flex
                            flex-direction row
                            justify-content left
                            align-items center
                            button
                                width 150px
                                height 45px
                                color #3388FF
                                cursor pointer
                                border-radius 5px
                                background-color #fff
                                border 1px solid #3388FF
                                outline none
                            .free_use
                                margin-right 40px
                                background-color #3388FF
                                color #fff
                                border 1px solid transparent
                    .shopImg
                        float right
                        width 50%
                        height 100%
                        background-color #fff
                        img 
                         width 100%
                         height 100%

</style>

<style scoped>
    .shopList-item:nth-child(2n) > .item > .shopDetails{
        float: right!important;
    }
</style>
