import Vue from '../vue.js';
import VueRouter from '../vue-router.js';

Vue.use(VueRouter);

var App = { template: `<div> <router-view></router-view> </div>` }
var Home = { template: `
        <div>
            <a href="#/home/a/a">页面A</a> 
            <a href="#/home/b/b">页面B</a> 
            <a href="#/show/b">复用组件页面</a> 
            <router-view></router-view>
            <router-view></router-view>
        </div>

    ` };
var A = {
    template: `
        <div>
            <router-view></router-view>
            <!--为了表明A与B不一致，绿色在下面-->
             <div style="background-color:yellowgreen;height:100px;">   
            </div>
        </div>
    `
}
var AA = {
    template: `
        <div>
             <div style="background-color:hotpink;height:100px;">   
            </div>
            <div style="background-color:skyblue;height:100px;">   
            </div>
        </div>
    `
}

var B = {
    template: `
        <div>
            <!--为了表明A与B不一致，绿色在上面-->
             <div style="background-color:yellowgreen;height:100px;">   
             </div>
                <router-view></router-view>
        </div>
    `
}
var BB = {
    template: `
        <div>
             <div style="background-color:white;height:100px;">   
            </div>
            <div style="background-color:pink;height:100px;">   
            </div>
             <div style="background-color:white;height:100px;">   
            </div>
        </div>
    `
}
//配置路由
var router = new VueRouter();
router.addRoutes([{
    path: '/home',// /home
    component: Home,
    children: [
        { path: 'a', component: A ,// /home/a
            children:[
                { path:'a',component:AA} // /home/a/a
            ]
        },
        { path: 'b', component:B ,// /home/b
            children:[
                { path:'b',component:BB}// /home/b/b
            ]
        }
    ]
},
//利用原有组件做一个路由
    {
        path:'/show',
        component:A,children:[
            {path:'b',component:BB}
        ]
    }


]);

new Vue({
    el: '#app',
    render: c => c(App),
    router
})