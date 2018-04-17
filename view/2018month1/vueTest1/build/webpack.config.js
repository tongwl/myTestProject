var path=require('path');


module.exports={
    entry:path.resolve(__dirname,'../app/index/index.js'),
    output:{
        path:path.resolve(__dirname,'../output/static'),
        publicPath:'static/',
        filename:'[name].[hash:8].js',
        chunkFilename:'[id].[chunkhash:8].js'
    },
    resolve:{
        extensions:['.js','.vue']
    },
    module:{
        loaders:[
            {
                test:/\.vue$/,
                loader:'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader?presets=es2015',
                exclude: /node_modules/
            }
        ]
    }
};