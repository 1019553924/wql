// module.exports = '我是计算器';

//ES6导出
export default '我是计算器';

//声明式导出(声明并导出)
export var num = 1;
export var num2 = 2;

//声明再导出
var num3 = 3;
export {num3};
