const path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: './src/game.js',
    output: {
        filename: 'game.js',
        path: path.resolve(__dirname, 'dist'),
    },

    devServer: {
        contentBase: path.join(__dirname, '.'),
        compress: true,
        port: 3000,
    },
};