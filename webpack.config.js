import path from 'path'

module.exports = {
	mode: '',
	input: [],
	output: {
		path: 'dist',
		filename: 'js/[name].[contenthash:8].js',
		publicPath: '/',
		chunkFilename: 'js/[name].[contenthash:8].js'
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src')
		},
		extension: ['.js', '.css', 'jsx', 'json'],
		modules: ["node_modules"]
	},
	module: {
		noParse: /^(vue|vue-router|vuex|vuex-router-sync)$/,
		rules: [{
			test: /\.vue$/,
			use: ['vue-loader'],
		}],
	},
	devServer: {
		contentBase: path.join(__dirname, 'public'),
		compress: true,
		historyApiFallback: true,
		hot: true,
		https: false,
		noInfo: true,
		port: 8080,
	},
	plugins: []
}