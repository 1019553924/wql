// var cal = require('./cal.js');
// ES6模块导入

//默认导出导出
import cal from './cal.js'; //export default '我是计算器';
console.log(cal);

//声明式导出（声明并导出）
// export var num = 1;
// export var num2 = 2;
// (声明再导出)
// var num3 = 3;
// export {num3};
//声明式导入
import {num,num2,num3} from './cal.js'; 
console.log(num);
console.log(num2);
console.log(num3);

//全部导入
import * as obj from './cal.js';
console.log('全部导入的数据');
console.log(obj);

//'import' and 'export' may only appear at the top level
// import和export只能在顶级
// if(true){
//     import {num} from './cal.js'; 
// }

//ES6中部分简写
var name ='abc';
var obj = {
    // name:name 以下是简写
    name,
    //ES6函数简写,给对象的属性声明函数时使用
    show(){  //:function
        alert('show')
    },
    // show1:function(){

    // }
}

obj.show();