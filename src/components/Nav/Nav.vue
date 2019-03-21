<template>
    <header id="head">
        <div class="nav_box">
            <!-- logo -->
            <div class="img_box" @click="enterPage('/home')">
                <img src="../../../static/images/logo.png" alt="brand logo" title="brand logo">
            </div>
                
            <!-- 头部导航 -->
            <ul class="nav">
                <li v-for="(item, index) in fir_nav_list" :key="index" @click="enterPage(item.url), active(index)" :class="{active: activeClass == index}">
                    <span>{{item.title}}</span>
                    
                    <!-- 解决方案二级导航 -->
                    <div class="solutions_box">
                        <div class="solutions">
                            <ul class="item">
                                <li v-for="(sec_item, index_) in item.sec_nav_list" :key="index_" @click="enterPage(sec_item.url), active_(index_)" :class="{active: active_Class == index_}">
                                    <p class="main_title">{{sec_item.main_title}}</p>
                                    <p class="sub_title">{{sec_item.sub_title}}</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>
            </ul>
    
        </div>
    </header>

</template>



<script>
export default {
    name: 'Nav',
    data() {
        return { 
            activeClass: 0,
            active_Class: -1,
            fir_nav_list: [
                {
                    url: '/home',
                    title: 'Home'
                },
                {
                    // url: '/solutions/china-eCommerce',
                    title: 'Solutions',
                    sec_nav_list: [
                        {
                            url: '/solutions/china-eCommerce',
                            main_title: 'China eCommerce',
                            sub_title: 'Quick access to the Chinese market'
                        },
                        {
                            url: '/solutions/weChat-eCommerce',
                            main_title: 'WeChat eCommerce',
                            sub_title: 'Focus on the WeChat ecosystem'
                        },
                        {
                            url: '/solutions/mobile-eCommerce',
                            main_title: 'Mobile ECommerce',
                            sub_title: 'Fast consumption with smartphone'
                        },
                        {
                            url: '/solutions/Magento-eCommerce',
                            main_title: 'Magento eCommerce',
                            sub_title: 'Create unique and engaging shopping experiences'
                        },
                        // {
                        //     url: '/solutions/china-eCommerce',
                        //     main_title: 'O2O eCommerce',
                        //     sub_title: 'Online and offline shopping experience'
                        // },
                        // {
                        //     url: '/solutions/china-eCommerce',
                        //     main_title: 'Cloud eCommerce',
                        //     sub_title: 'Online Solutions for Quick Listing'
                        // }
                    ]
                },
                {
                    // url: '/services',
                    title: 'Services',
                    sec_nav_list: [
                        {
                            url: '/services/ecommerce-consultancy-strategy',
                            main_title: 'eCommerce Consultancy & Strategy',
                            sub_title: 'Provide real-time market knowledge and consultancy'
                        },
                        {
                            url: '/services/ux-ui-design',
                            main_title: 'UX / UI Design',
                            sub_title: 'Optimize the User Experience'
                        },
                        {
                            url: '/services/china-ecommerce-website-development-2',
                            main_title: 'eCommerce Website Development',
                            sub_title: 'Focus on e-commerce website development'
                        },
                        {
                            url: '/services/wechat-store-development',
                            main_title: 'WeChat Store Development',
                            sub_title: 'A software to solve all problems in online shop'
                        },
                        // {
                        //     url: '/Services/marketplace-store-setup-china-asia-europe',
                        //     main_title: 'Marketplace Store Setup',
                        //     sub_title: 'Online and offline shopping experience'
                        // },
                        // {
                        //     url: '/Services/cloud-hosting-and-support',
                        //     main_title: 'Cloud Hosting',
                        //     sub_title: 'Online Solutions for Quick Listing'
                        // },
                        // {
                        //     url: '/Services/managed-services',
                        //     main_title: 'Managed Services',
                        //     sub_title: 'Online Solutions for Quick Listing'
                        // }
                    ]
                },
                {
                    url: '/work',
                    title: 'Work'
                },
                {
                    url: '/process',
                    title: 'Process'
                },
                
            ],

        }

    },
    methods: {
        enterPage(url) {
            this.$router.push({
                path: url
            });
            
        },
        active(index) {
            this.activeClass = index;
            console.log(index);
        },
        active_(index_) {
            
            const url =- window.location.href.split("#")[1];
            if(this.$route.path == url) {
                this.active_Class = index_;
                
            }
            
        }
    },
    watch: {
        $route: {
            handler: function(val, oldVal){
            },
            // 深度观察监听
            deep: true
        }
    }
}
</script>


<style lang="stylus" scoped ref="stylesheet/stylus">
    #head
        width 100%
        .nav_box
            width 80%
            height 65px
            margin 0 auto
            background-color #fff
            display flex
            flex-direction row
            align-items center
            .img_box
                width  300px
                height 100%
                display flex
                justify-content center
                align-items center
                img 
                    width 200px
                    height 80%
            .nav   
                width 800px
                max-width 900px
                height 100%
                display flex
                flex-direction row
                line-height 65px
                margin-left 100px
                li
                    font-size 18px
                    height 100%
                    width 20%
                    cursor pointer
                    .solutions_box
                        background-color #fff
                        opacity 0.9
                        width 100%
                        height 400px
                        z-index 999
                        color #333
                        border-top 1px solid #f1eded
                        box-shadow 0 10px 15px -5px #f1eded inset
                        border-bottom 1px solid #f1eded
                        white-space: nowrap;
                        position: absolute;
                        top: -336px;
                        left 0
                        display none
                        .solutions
                            width 80%
                            margin 0 auto
                            .item
                                width 100%
                                margin-top 35px
                                display flex
                                flex-direction row
                                flex-wrap wrap
                                justify-content space-around
                                li
                                    width 30%
                                    height 65px
                                    margin-left 20px
                                    display flex
                                    flex-direction column
                                    line-height 30px
                                    
                                    .main_title
                                        width calc(100%- 15px)
                                        height 28%

                                    .sub_title
                                        font-size 14px
                                        color #b1adad
                                        height 50%
                                li:hover .main_title
                                    color #3DA3F6
                                        

                li:hover .solutions_box
                    display block
                    top 65px
                    left 0
                    transition all 0.2s linear






</style>

<style scoped>
    /* #head > .nav_box  > .nav > li:nth-child(1),
    #head > .nav_box  > .nav > li:nth-child(4),
    #head > .nav_box  > .nav > li:nth-child(5) {
        width: 13%;
    } */

    .get_more:after {
    content: " ";
    display: inline-block;
    height: 16px;
    width: 16px;
    
    background: url(../../../static/images/arrow_down.png) no-repeat;
    background-size: 100%;

    
}
    .active {
        color: #3DA3F6;
    }

    #head > .nav_box  > .nav > li:hover span{
        color:  #3DA3F6;
    }

    #head > .nav_box  > .nav > li:hover:after {
        background: url(../../../static/images/arrow_right_hover.png) no-repeat;
    }

    .solution_box > .solutions > ul >li:hover {
        color: #ccc!important;
    }

    a {
        text-decoration: none;
        color: #333;
        display: inline-block;
        width: 30%;
    }
</style>



