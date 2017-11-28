var App = require('./App.js');
var Vue = require('../vue.js');

 //启动
new Vue({
    el:'#app',
    render:c=>c(App)
})  