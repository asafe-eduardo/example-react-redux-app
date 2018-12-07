var webpack = require('webpack');
const DotenvPlugin = require('webpack-dotenv-plugin');

var config = require('./webpack.config');
var buildPath = __dirname + '/../src/template/';

config.output = {
    path: buildPath,
    filename: 'dev.[hash].bundle.js'
};

config.module.rules.push({
    test: /\.s?css/,
    use: [
        {loader: 'style-loader'},
        {loader: 'css-loader', options: {sourceMap: true}},
        {loader: 'sass-loader', options: {sourceMap: true}}
    ]
});

config.plugins.push(new webpack.HotModuleReplacementPlugin());
config.plugins.push(new DotenvPlugin({
    path: './.env.production',
    sample:'./.env.sample'
}));
config.plugins.push(
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify('development')
        }
    })
);

config.devtool = 'source-map';

config.devServer = {
    contentBase: buildPath,
    hot: true,
    compress: true,
    inline: true,
    port: 3000,
    watchOptions: {
        ignored: /node_modules/
    },
    proxy: {
        "/treinamento": "http://localhost:8080"
    }
};

module.exports = config;
