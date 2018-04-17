var path=require('path');
module.exports={
    entry:path.resolve(__dirname,'../app/index/index.js'),
    output:{
        path:path.resolve(__dirname,'../app/output/static'),
        publicPath:'static/',
        filename:'[name].[hash:8].js',
        chunkFilename:'[id].[chunkhash].js',
    },
    resolve:{
        extensions: ['', '.js', '.vue']
    },
    module:{
        loaders:[
            {
                test:/\.vue$/,
                loader:'vue'
            }
        ]
    },
};