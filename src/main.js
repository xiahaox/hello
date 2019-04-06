
import Vue from 'vue'

// import MintUI from 'mint-ui'
// import 'mint-ui/lib/style.css'
// Vue.use(MintUI)

import { Header } from 'mint-ui';
Vue.component(Header.name, Header);
//导入mui
import './lib/mui/css/mui.css'

import App from './App.vue'
const vm = new Vue({
    el: '#app',
    render: function (createElement) {
        return createElement(App)

    }
})