'use strict';
const http = require('http');


http.createServer((req,res)=>{
    if(req.url.startsWith('/test-jsonp')){
        //url : http://localhost:8888/test-jsonp?callback=test
        let callbackname = req.url.split('?')[1].split('=')[1];


        // res.end('var test = 123;');
        // res.end(JSON.stringify({name:'jack'}));
        // 调用函数，并传递参数
        let data = {name:'jack'};
        res.end(`${callbackname}(${JSON.stringify(data)})`);
    }
}).listen(8888,()=>{
    console.log('服务器启动在8888端口');
});