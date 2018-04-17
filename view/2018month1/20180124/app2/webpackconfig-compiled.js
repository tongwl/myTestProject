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
    }
};

//# sourceMappingURL=webpackconfig-compiled.js.map