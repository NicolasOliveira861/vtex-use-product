const webpack = require("webpack");
const path = require("path");
var shopName = require("./package.json").shopName;
/**
 * Configuração do webpack
 * @tutorial https://github.com/webpack/webpack.js.org/tree/v3.11.0/src/content
 * @tutorial https://medium.com/netscape/webpack-3-react-production-build-tips-d20507dba99a
 */
module.exports = {
	entry: {
		checkout: "./checkout/src/arquivos/js/checkout.js",
	},
	output: {
		path: path.resolve(__dirname, "checkout/dist/arquivos"),
		filename: shopName + "--[name]-bundle.js",
		chunkLoading: false,
		wasmLoading: false,
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env", "@babel/preset-react"],
					},
				},
			},
		],
	},
	plugins: [
		new webpack.ProvidePlugin({
			$: "jquery",
			jQuery: "jquery",
		}),
	],
};
