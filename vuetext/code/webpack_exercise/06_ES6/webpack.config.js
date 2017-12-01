module.exports = {

    entry: {
        'main2': './main.js'
    },
    output: {
        filename: './build.js'
    },
    //声明一个模块（对象）
    module: {
        //加载器
        loaders: [{
            test: /\.css$/,
            // loader的加载顺序是从右向左
            loader: 'style-loader!css-loader', //这里是固定
        }, {
            test: /\.less$/,
            loader: 'style-loader!css-loader!less-loader', //这里是固定
        },{
            test:/\.(jpg|png|svg|gif|ttf)$/,
            // loader:'url-loader?limit=4096&name=1.jpg'
            loader:'url-loader',
            options:{
                limit:4096,
                name:'my_[name].[ext]'
            }

        },{
            test:/\.js$/,
            loader:'babel-loader',
            exclude:/node_modules/,//排除node_modules下面的资源
            options:{
                presets:['env'],//处理语法
                plugins:['transform-runtime']//处理函数
            }
        }]
    }

}