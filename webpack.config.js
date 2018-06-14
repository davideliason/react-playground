var webpack = require('webpack');
var path = require('path');

var DEV = path.resolve(__dirname, "dev");
var PRODUCTION = path.resolve(__dirname,"production");

var config = {
	entry: DEV + "/index.jsx",
	output: {
		path: PRODUCTION,
		filename: "myCode.js"
	},
	module: {
		loaders: [{
			include: DEV,
			loader: "babel"
		}]
	}
}

module.exports = config;