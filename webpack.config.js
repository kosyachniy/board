module.exports = {
	context: __dirname,
	devtool: "source-map",
	entry: "./index.js",
	mode: "development",
	output: {
		path: __dirname + "/build",
		filename: "index.js"
	},
	devServer: {
		inline: true,
		port: 10000
	}
}