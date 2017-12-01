import Vue from '../vue.js';
import VueRouter from '../vue-router.js';
import Home from './Home.js';
import App from './App.js';


//安装插件
Vue.use(VueRouter);

var router = new VueRouter();
router.addRoutes([
    {name:'home',path:'/home',component:Home,meta:{
        name:'jack'
    }}
]);

router.beforeEach( (to,from,next)=>{
    window.to = to;
    console.log(to);
    next();
})


new Vue({
    el:'#app',
    render:c=>c(App),
    router
})