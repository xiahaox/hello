import VueRouter from 'vue-router'


//导入对应的路由组件
import HomeContainer from './components/tabbar/HomeContainer.vue'
import MembarContainer from './components/tabbar/MembarContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue'
import newList from './components/news/newsList.vue'
import newsInfo from './components/news/newsInfo.vue'
import Photolist from './components/Photo/Photolist.vue'
import photoInfo from './components/Photo/photeInfo.vue'

var router = new VueRouter({
    routes: [//路由规则
        { path: '/', redirect: '/home' },
        { path: '/home', component: HomeContainer },
        { path: '/membar', component: MembarContainer },
        { path: '/shopcar', component: SearchContainer },
        { path: '/search', component: ShopcarContainer },
        { path: '/home/newsList', component: newList },
        { path: '/home/newsInfo/:id', component: newsInfo },
        { path: '/home/photolist', component: Photolist },
        { path: '/home/photoInfo/:id', component: photoInfo }
    ],
    linkActiveClass: 'mui-active' //覆盖默认的路由高亮，默认的类叫router-link-active
})

export default router


