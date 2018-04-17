const path = require('path');
const extractTextWebpackPlugin = require('extract-text-webpack-plugin');
module.exports = {
    entry: './main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist')
    },
    module: {
        rules: [{
            test: /\.css$/,
            /*use:extractTextWebpackPlugin.extract({
                //转换.css文件需要使用的loader
                use:['css-loader']
            })*/
            use: ['style-loader', 'css-loader']
        }]
    }, /*,
       plugins:[
         new extractTextWebpackPlugin({
             filename:`[name]_[contenthash:8].css`
           })
       ]*/
    devServer: {
        port: 8888,
        compress: true
    }
};

//# sourceMappingURL=webpack.config-compiled.js.map