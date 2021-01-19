const path = require('path');

module.exports = [{
	// game.js
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
},
{	// asset-editor.js
    mode: 'development',
    devtool: 'inline-source-map',
	entry: './src/asset-editor.js',
	output: {
		filename: 'asset-editor.js',
		path: path.resolve(__dirname, 'dist'),
	},
}];