import Vue from '../vue.js';
import VueRouter from '../vue-router.js';

import App from './App.js';
import Home from './Home.js';


Vue.use(VueRouter);
//创建路由对象配置规则
var router = new VueRouter();
router.addRoutes([
        {name:'home',path:'/home',component:Home},
        { name:'show',path:'/show',component:{
            template:`<div style="background-color:yellowgreen;">
                        我是show
            </div>`,
            created(){
                console.log(this.$route.query)
            }
        }}
])

//启动
new Vue({
    el:'#app',
    render:c=>c(App),
    router
})