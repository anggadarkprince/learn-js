const path = require('path');

module.exports = {
    entry: {
        app: [
            'babel-polyfill',
            './src/app.js',
        ],
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'app.bundle.js',
    },
    devtool: 'source-map',
    module: {
        rules: [{
            test: /\.js?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['env', 'stage-0']
            }
        }]
    }
};