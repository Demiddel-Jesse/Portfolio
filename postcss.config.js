const autoprefixer = require("autoprefixer");

module.exports = {
	plugins: [
		autoprefixer(),
		require("cssnano")({
			preset: ["cssnano-preset-advanced", { discardComments: false }],
		}),
		require("@hail2u/css-mqpacker")(),
		require("postcss-uncss")({
			html: ["./src/**/*.ejs"],
		}),
	],
};
