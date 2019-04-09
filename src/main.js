
import Vue from 'vue'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)



//导入mint-ui
// import { Header } from 'mint-ui';
// Vue.component(Header.name, Header);
//导入mui
import "./lib/mui/css/mui.css";
import "./lib/mui/css/icons-extra.css";
//导入轮播图
// import { Swipe, SwipeItem, Button } from 'mint-ui';
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.component(Button.name, Button);
//导入路由
import VueRouter from 'vue-router'
//安装路由
Vue.use(VueRouter)
import router from './router.js'

//vue-resource --发送ajax
import VueResource from 'vue-resource'
Vue.use(VueResource)
//配置一个api请求的url地址
Vue.http.options.root = 'http://www.liulongbin.top:3005'
Vue.http.options.emulateJSON = true
// 缩略图
import VuePreview from 'vue-preview'
Vue.use(VuePreview)

//全局定义过滤器 格式化时间
import moment from 'moment'
Vue.filter('dateFormat', function (dateStr, pattern = 'YYYY-MM-DD HH:mm:ss') {
    return moment(dateStr).format(pattern)
})

import App from './App.vue'
// import moment = require('_moment@2.24.0@moment');
const vm = new Vue({
    el: '#app',
    render: function (createElement) {
        return createElement(App)

    },
    router
})