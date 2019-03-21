import Vue from 'vue'
import App from './App'


// 引入路由
import router from "./router/index"


new Vue({
    el: "#app",
    // 声明router
    router,   //  全局范围内使用该路由
    // 声明store
    // store,
    render: h => h(App)
})
