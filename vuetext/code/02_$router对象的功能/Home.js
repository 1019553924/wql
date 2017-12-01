export default {
    template:`
        <div style="background-color:red;">
            我是home首页

            <button @click="goback">返回上一个记录</button>
        </div>
    `,
    methods:{
        goback(){
            this.$router.go(-1); //根据浏览器记录后退1步
        }
    }
}