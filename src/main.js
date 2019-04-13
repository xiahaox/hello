
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

//导入vuex
import Vuex from 'vuex'
Vue.use(Vuex)
//每次进入网站,将localstorage里数据提到状态管理仓库 store中
var car = JSON.parse(localStorage.getItem('car') || '[]')
const store = new Vuex.Store({
    state: {
        // 商品的信息
        car: car
    },
    getters: {  //类似computed 获取 所需的数据 只读的
        getAllCount(state) {
            var sum = 0;
            state.car.forEach(element => {
                sum += element.count
            });
            return sum
        },
        //拿到购物车里 id和所对应的count {id:  , count:  }
        getIdCount(state) {
            var obj = {};
            state.car.forEach(element => {
                obj[element.id] = element.count;
            })
            return obj

        },
        //把store中选中的状态同步到页面上
        getGoodsSelected(state) {
            var obj = {};
            state.car.forEach(element => {
                obj[element.id] = element.selected
            })
            return obj
        },
        //结算 总价和件数
        getTotalValue(state) {
            var obj = { total: 0, count: 0 }
            state.car.forEach(element => {
                if (element.selected) {
                    obj.total += element.price;
                    obj.count += element.count;
                }
            })
            return obj

        }
    },
    mutations: {  //改变state里数据  增删改  $store.commit 调用mutation里方法
        addCar: function (state, obj) {
            // console.log(obj);
            var flag = false
            for (var i = 0; i < state.car.length; i++) {
                if (state.car[i].id == obj.id) {
                    state.car[i].count += obj.count;
                    flag = true;
                    break
                }
            }
            if (!flag) {
                state.car.push(obj)
            }
            //当 car 数据更新后，进行数据本地存储
            localStorage.setItem('car', JSON.stringify(state.car))


        },
        //修改商品数量值
        updateCarCount(state, obj) {
            console.log(obj);
            state.car.some(element => {
                if (element.id == obj.id) {
                    element.count = Number(obj.count);
                    return true;
                }
            })
            //保存到本地存储
            localStorage.setItem('car', JSON.stringify(state.car))

        },
        //删除数项
        removeFormCar(state, id) {
            state.car.some((item, index) => {
                if (item.id == id) {
                    state.car.splice(index, 1);
                    return true
                }
            })
            localStorage.setItem('car', JSON.stringify(car))
        },
        //同步selected值 
        updateGoodsSelected(state, obj) {
            state.car.some(element => {
                if (element.id == obj.id) {
                    element.selected = obj.selected;
                    return true
                }
            })
            localStorage.setItem('car', JSON.stringify(car))
        }

    },
    action: {}  //$store.dispatch 调用action里方法

})

import App from './App.vue'
import { log } from 'util';
// import moment = require('_moment@2.24.0@moment');
const vm = new Vue({
    el: '#app',
    render: function (createElement) {
        return createElement(App)

    },
    router,
    store
})