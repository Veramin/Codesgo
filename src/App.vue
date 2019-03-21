<template>
    <div id="app">
        <Nav></Nav>
        <router-view></router-view>
        <Footer class="footer"></Footer>
    </div>
</template>

<script>
// 引入组件
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
export default {
    name: "App",
    components: {
        Nav,
        Footer
    }
}
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
    #app 
        width 100%
        height 100%
    
</style>