const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
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
						// keyword: { name: "keywords", content: "..." },
						"og:title": {
							property: "og:title",
							content: "Jesse Demiddels Portfolio",
						},
						"og:description": {
							property: "og:description",
							content: "Portfolio of Jesse Demiddel",
						},
						"og:type": { property: "og:type", content: "website" },
						"og:url": {
							property: "og:url",
							content:
								"https://jesse-demiddels-portfolio-b7ikaqri8-demiddel-jesses-projects.vercel.app/index.html",
						},
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
						"twitter:image:alt": {
							name: "twitter:image:alt",
							content: "Alt text",
						},
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
					android: [
						"android-chrome-144x144.png",
						"android-chrome-192x192.png",
						"android-chrome-256x256.png",
						"android-chrome-512x512.png",
					],
					appleIcon: [
						"apple-touch-icon-57x57.png",
						"apple-touch-icon-76x76.png",
						"apple-touch-icon-120x120.png",
						"apple-touch-icon-180x180.png",
					],
					favicons: [
						"favicon-16x16.png",
						"favicon-32x32.png",
						"favicon-48x48.png",
						"favicon.ico",
					],
					// android: true,
					// appleIcon: true,
					// favicons: true
					appleStartup: false,
					windows: false,
					yandex: false,
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
		config.plugins.push(
			new CopyPlugin({
				patterns: [
					// just to include only necessary files from Goplay folder
					{
						from: path.resolve(__dirname, "./Goplay/dist", "*.css"),
						to: "./",
					},
					{
						from: path.resolve(__dirname, "./Goplay/dist", "*.js"),
						to: "./",
					},
					{
						from: path.resolve(__dirname, "./Goplay/assets/img", "*"),
						to: "./",
					},
					{
						from: path.resolve(__dirname, "./Goplay/assets/svg", "*"),
						to: "./",
					},
					{
						from: path.resolve(__dirname, "./Goplay/json", "*"),
						to: "./",
					},
					{
						from: path.resolve(__dirname, "./Goplay", "*.html"),
						to: "./",
					},
					{
						from: path.resolve(__dirname, "./Goplay", "*.png"),
						to: "./",
					},
					{
						from: path.resolve(__dirname, "./Goplay", "*.ico"),
						to: "./",
					},
					{
						from: path.resolve(__dirname, "./Goplay", "*.svg"),
						to: "./",
					},
					{
						from: path.resolve(__dirname, "./Goplay", "*.xml"),
						to: "./",
					},
					{
						from: path.resolve(__dirname, "./Goplay", "*.webmanifest"),
						to: "./",
					},
					// copy sinksen project
					{
						from: path.resolve(__dirname, "./Sinksen2022", "*.html"),
						to: "./",
					},
					{
						from: path.resolve(__dirname, "./Sinksen2022/css", "*.css"),
						to: "./",
					},
					{
						from: path.resolve(__dirname, "./Sinksen2022/img", "*.png"),
						to: "./",
					},
					{
						from: path.resolve(__dirname, "./Sinksen2022/img", "*.svg"),
						to: "./",
					},
					{
						from: path.resolve(__dirname, "./Sinksen2022/img", "*.gif"),
						to: "./",
					},
					{
						from: path.resolve(__dirname, "./Sinksen2022/img", "*.jpg"),
						to: "./",
					},
					{
						from: path.resolve(__dirname, "./Sinksen2022/script", "*.js"),
						to: "./",
					},
				],
			})
		);
	} else {
		config.mode = "development";
	}
	return config;
};
