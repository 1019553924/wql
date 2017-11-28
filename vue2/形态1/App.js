 var App = {
            template:`
                <div>
                    <sub-vue></sub-vue>
                    我是父组件
                </div>
            `,
            created(){
                console.log('父组件被创建了');
                var count = 1;
                vm.$on('123456',function(str,num){
                    console.log(count);
                    if(count == 3){
                        //手动关闭事件 $off
                        vm.$off('123456');
                    }
                    console.log('收到孩子的求救了');
                    count++;
                });

            },
            components:{
                'sub-vue':Sub
            }     
        }