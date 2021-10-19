const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = [{
	// game.js
	mode: 'development',
	devtool: 'inline-source-map',
    /* for production builds, comment the 2 lines above and uncomment mode: 'production' and optimization */
    // mode: 'production',
    // optimization: {
    //     minimize: true,
    //     minimizer: [new TerserPlugin()],
    // },
	entry: './src/game.js',
	output: {
		filename: 'game.js',
		path: path.resolve(__dirname, 'dist'),
	},

	devServer: {
		contentBase: path.join(__dirname, '.'),
		compress: true,
		port: 3000,
        host: '0.0.0.0',
	},
},
// {	// asset-editor.js
//     mode: 'development',
//     devtool: 'inline-source-map',
// 	entry: './src/asset-editor.js',
// 	output: {
// 		filename: 'asset-editor.js',
// 		path: path.resolve(__dirname, 'dist'),
// 	},
// }
];