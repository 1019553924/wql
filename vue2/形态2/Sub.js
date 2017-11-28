var vm = require('./Vm.js');
module.exports = {
            template:`
                <div>
                    我是子组件
                    <button @click="callDaddy">呼叫父亲</button>
                </div>
            `,
            methods:{
                callDaddy:function(){
                    vm.$emit('123456','a',1);
                }
            }
}