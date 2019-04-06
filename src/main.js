
import Vue from 'vue'

// import MintUI from 'mint-ui'
// import 'mint-ui/lib/style.css'
// Vue.use(MintUI)



//导入mint-ui
import { Header } from 'mint-ui';
Vue.component(Header.name, Header);
//导入mui
import "./lib/mui/css/mui.css";
import "./lib/mui/css/icons-extra.css";
//导入轮播图
import { Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

//导入路由
import VueRouter from 'vue-router'
//安装路由
Vue.use(VueRouter)
import router from './router.js'

//vue-resource --发送ajax
import VueResource from 'vue-resource' 
Vue.use(VueResource)


import App from './App.vue'
const vm = new Vue({
    el: '#app',
    render: function (createElement) {
        return createElement(App)

    },
    router
})