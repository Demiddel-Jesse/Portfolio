const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
var fs = require("fs");

const isProduction = process.env.NODE_ENV == "production";

const stylesHandler = isProduction
	? MiniCssExtractPlugin.loader
	: "style-loader";

var htmlFiles = [];
var directories = ["src"];

while (directories.length > 0) {
	var directory = directories.pop();
	var dirContents = fs
		.readdirSync(directory)
		.map((file) => path.join(directory, file));

	htmlFiles.push(...dirContents.filter((file) => file.endsWith(".html")));
	directories.push(
		...dirContents.filter((file) => fs.statSync(file).isDirectory())
	);
}

const config = {
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname, "dist"),
		clean: true,
	},
	devServer: {
		static: {
			directory: path.join(__dirname, ""),
		},
		compress: true,
		port: 9000,
		open: true,
		host: "localhost",
	},
	plugins: [
		...htmlFiles.map(
			(htmlFile) =>
				new HtmlWebpackPlugin({
					template: htmlFile,
					filename: htmlFile.replace(path.normalize("src/"), ""),
					inject: true,
					meta: {
						// description: { name: "description", content: "..." },
						keyword: { name: "keywords", content: "..." },
						"og:title": {
							property: "og:title",
							content: "Jesse Demiddels Portfolio",
						},
						"og:description": {
							property: "og:description",
							content: "Portfolio of Jesse Demiddel",
						},
						"og:type": { property: "og:type", content: "website" },
						"og:url": { property: "og:url", content: "..." },
						"og:image": { property: "og:image", content: "..." },
						"twitter:card": {
							name: "twitter:card",
							content: "summary_large_image",
						},
						"twitter:title": {
							name: "twitter:title",
							content: "Jesse Demiddels Portfolio",
						},
						"twitter:description": {
							name: "twitter:description",
							content: "Portfolio of Jesse Demiddel",
						},
						"twitter:image": { name: "twitter:image", content: "..." },
					},
				})
		),
		new FaviconsWebpackPlugin({
			logo: "src/assets/img/favicon.png",
			cache: true,
			prefix: "assets/favicon/",
			favicons: {
				appName: "Jesse Demiddels portfolio",
				appDescription: "Portfolio of full stack developer - Jesse Demiddel",
				developerName: "Jesse Demiddel",
				developerURL: null, // prevent retrieving from the nearest package.json
				background: "#000000",
				theme_color: "#171717",
				icons: {
					//! need to make a more specific set for icons bc like 50 favicons is too much
					android: true,
					appleIcon: true,
					appleStartup: true,
					favicons: true,
					windows: true,
					yandex: true,
				},
			},
		}),
	],
	module: {
		rules: [
			{
				test: /\.html$/i,
				use: "html-loader",
			},
			{
				test: /\.(sa|sc|c)ss$/i,
				use: [
					stylesHandler,
					"css-loader",
					"postcss-loader",
					"resolve-url-loader",
					{
						loader: "sass-loader",
						options: {
							sourceMap: true,
						},
					},
				],
			},
			{
				test: /\.(png|jpeg|jpg|gif)$/i,
				type: "asset/resource",
				generator: {
					filename: "assets/img/[name]-[hash][ext][query]",
				},
			},
			{
				test: /\.(svg)$/i,
				type: "asset",
				generator: {
					filename: "assets/svg/[name]-[hash][ext][query]",
				},
			},
			{
				test: /\.(eot|ttf|woff|woff2)$/i,
				type: "asset",
				generator: {
					filename: "assets/font/[name]-[hash][ext][query]",
				},
			},
		],
	},
	// watch: true,
	watchOptions: {
		aggregateTimeout: 1200,
	},
};

module.exports = () => {
	if (isProduction) {
		config.mode = "production";

		config.plugins.push(new MiniCssExtractPlugin());
	} else {
		config.mode = "development";
	}
	return config;
};
