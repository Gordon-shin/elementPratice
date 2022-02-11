import Vue from 'vue';
import VueRouter from 'vue-router';
//import Home from '@/views/home'
//管理前端路由的配置
//一个前端路由对应一个页面
//
Vue.use(VueRouter)

const routes =[
    {
        path:'/',
        name:'Home',
        //按需引入组件
        component:()=> import ('@/views/Home.vue')
    },
    {
        path:'/user',
        name:'User',
        //按需引入组件
        component:()=> import ('@/views/User.vue')
    }
]

const router = new VueRouter({
    mode:'history',
    routes:routes
})

export default router