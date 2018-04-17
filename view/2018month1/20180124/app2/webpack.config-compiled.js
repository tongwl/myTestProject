const webpack = require('webpack');

module.exports = {
    entry: './run1.js',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        }]
    },
    plugins: [new webpack.BannerPlugin('我只是一个注释')]
};

//# sourceMappingURL=webpack.config-compiled.js.map