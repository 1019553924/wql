export default {
    template:`
        <div>
            我是home
        </div>
    `,
    created(){
        console.log(this.$route);
        console.log(this.$route === window.to);
    }
}