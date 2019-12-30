module.exports = {
	context: __dirname,
	devtool: "source-map",
	entry: "./canvas/canvas-designer-widget.js",
	mode: "production",
	output: {
		path: __dirname + "/build",
		filename: "index.js"
	},
}


// 'use strict';

// /* eslint-env node */

// const path = require( 'path' );
// const webpack = require( 'webpack' );

// module.exports = {
// 	devtool: 'source-map',
// 	performance: { hints: false },

// 	entry: path.resolve( __dirname, 'index.js' ),

// 	output: {
// 		// The name under which the editor will be exported.
// 		library: 'Board',

// 		path: path.resolve( __dirname, 'build' ),
// 		filename: 'index.js',
// 		libraryTarget: 'umd',
// 		libraryExport: 'default'
// 	},
// };