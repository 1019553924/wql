import Vue from '../vue.js';
import VueRouter from '../vue-router.js';

import App from './App.js';
import Home from './Home.js';

var NotFound = {
    template:`
        <div>
            您要查看的页面去旅行了.....
        </div>
    `
}



Vue.use(VueRouter);
//创建路由对象配置规则
var router = new VueRouter();
router.addRoutes([
        //默认锚点值 是/  重定向到 /home
        { path:'/',redirect:{
            name:'home'
        }},
        {name:'home',path:'/home',component:Home},
        //写在规则的最后
        { path:'*',component:NotFound }

])

//启动
new Vue({
    el:'#app',
    render:c=>c(App),
    router
})