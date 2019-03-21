// 1. 引入对应模块
import Vue from "vue"
import VueRouter from "vue-router"

// 1.1 引入一级路由
import Home from "../pages/Home/Home"
// import Services from "../pages/Services/Services"

import Work from "../pages/Work/Work"
import Process from "../pages/Process/Process"

// 1.2 引入二级路由
import China_commerce from "../pages/Solutions/China_commerce/China_commerce"
import WeChat_commerce from "../pages/Solutions/WeChat_commerce/WeChat_commerce"
import Mobile_commerce from "../pages/Solutions/Mobile_commerce/Mobile_commerce"
import Magento_commerce from "../pages/Solutions/Magento_commerce/Magento_commerce"

import Consultancy from "../pages/Services/Consultancy/Consultancy"
import Design from "../pages/Services/Design/Design"
import Cloud_Hosting from "../pages/Services/Cloud_Hosting/Cloud_Hosting"
import eCommerce_Website_Development from "../pages/Services/eCommerce_Website_Development/eCommerce_Website_Development"
import Marketplace_Store_Setup from "../pages/Services/Marketplace_Store_Setup/Marketplace_Store_Setup"
import WeChat_Store_Development from "../pages/Services/WeChat_Store_Development/WeChat_Store_Development"
import Managed_Services from "../pages/Services/Managed_Services/Managed_Services"



// 2. 声明使用
Vue.use(VueRouter);

// 3. 输出路由对象
export default new VueRouter({
    // 3.1 配置一级路由
    routes: [
        {
            path: "/home",
            component: Home
        },
        {
            path: "/solutions/china-eCommerce",
            component: China_commerce,
            // children: [
            //     {
            //         path:'/china-eCommerce',
            //         component: China_commerce,
            //     },
        },
        {
            path:'/solutions/weChat-eCommerce',
            component: WeChat_commerce,
        },
        {
            path:'/solutions/mobile-eCommerce',
            component: Mobile_commerce,
        },
        {
            path:'/solutions/Magento-eCommerce',
            component: Magento_commerce,
        },



        {
            path: "/services/ecommerce-consultancy-strategy",
            component: Consultancy,
            // children: [
            //     {
            //         path:'/china-eCommerce',
            //         component: China_commerce,
            //     },
        },
        {
            path:'/services/ux-ui-design',
            component: Design,
        },
        {
            path:'/services/china-ecommerce-website-development-2',
            component: eCommerce_Website_Development,
        },
        {
            path:'/services/wechat-store-development',
            component: WeChat_Store_Development,
        },
        {
            path:'/services/marketplace-store-setup-china-asia-europe',
            component: Marketplace_Store_Setup,
        },
        {
            path:'/services/cloud-hosting-and-support',
            component: Cloud_Hosting,
        },
        {
            path:'/services/managed-services',
            component: Managed_Services,
        },
        // {
        //     path: "/services",
        //     component: Services,
        //     children: [
                
        //     ]
        // },
        {
            path: "/work",
            component: Work
        },
        {
            path: "/process",
            component: Process
        },
        {
            // 当用户访问莫名其妙的路径时，都重定向到首页
            path: "/",
            redirect: "/home"
        },
    ]
        

})