export default {
    template:`
        <div>
            我是App，下面是坑
            <button @click="go">前进</button>
            <button @click="goShow">去看show组件</button>
            <router-view></router-view>
        </div>

    `,
    methods:{
        go(){
            this.$router.go(1);
        },
        goShow(){
            // <router-link :to="{name:'show',query:{id:1} }" ></router-link>
            this.$router.push({
                name:'show',
                query:{
                    id:1
                }
            })
        }
    }
}