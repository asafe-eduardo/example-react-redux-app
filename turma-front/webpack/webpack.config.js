const HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {};
config.entry = {
    app: './src/js/index.js'
};
config.module = {
    rules: []
};
config.module.rules.push({
    test: /\.jsx?$/,
    exclude: /node_modules/,
    loader: 'babel-loader',
    query: {
        presets: ['es2015', 'react'],
        plugins:['transform-object-rest-spread']
    }
});
config.module.rules.push({
    test: /\.(jpg|jpeg|gif)$/,
    loaders: ['file-loader?name=assets/images/[hash].[ext]']
});
config.module.rules.push({
    test: /\.png$/,
    loaders: ['url-loader?limit=1000000&name=assets/images/[hash].[ext]']
});
config.module.rules.push({
    test: /\.(ttf|eot|woff|woff2|svg)(\?\S*)?$/,
    loaders: ['url-loader?limit=1000000&name=assets/fonts/[hash].[ext]']
});
config.module.rules.push({
    test: /index\.html$/,
    loaders: [
        {loader: 'file-loader', options: {name: '[name].[ext]'}},
        {loader: 'extract-loader'}, {loader: 'html-loader'}
    ]
});
config.plugins = [];
config.plugins.push(
    new HtmlWebpackPlugin({
        template: __dirname + '/../src/template/index.ejs',
        inject: 'body'
    })
);
module.exports = config;
