const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const RobotstxtPlugin = require("robotstxt-webpack-plugin");
const SitemapPlugin = require("sitemap-webpack-plugin").default;
var fs = require("fs");

const isProduction = process.env.NODE_ENV == "production";

const stylesHandler = isProduction
	? MiniCssExtractPlugin.loader
	: "style-loader";

const robotstxtOptions = {
	policy: [
		{
			userAgent: "*",
			allow: "/",
			disallow: ["/Goplay", "/Sinksen2022"],
			crawlDelay: 2,
		},
	],
};

const paths = [
	{
		path: "/",
		lastmod: "2024-06-17",
		priority: 1,
		changefreq: "monthly",
	},
	{
		path: "/Goplay/",
		lastmod: "2024-06-17",
		priority: 0.1,
		changefreq: "yearly",
	},
	{
		path: "/Sinksen2022/",
		lastmod: "2024-06-17",
		priority: 0.1,
		changefreq: "yearly",
	},
];

const config = {
	entry: "./src/assets/index.js",
	output: {
		// The global variable name any `exports` from `index.js` will be available at
		library: "SITE",
		// Where webpack will compile the assets
		path: path.resolve(__dirname, "src/compiled-assets"),
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
		// new FaviconsWebpackPlugin({
		// 	logo: "src/assets/img/favicon.png",
		// 	cache: true,
		// 	prefix: "assets/favicon/",
		// 	favicons: {
		// 		appName: "Jesse Demiddels portfolio",
		// 		appDescription: "Portfolio of full stack developer - Jesse Demiddel",
		// 		developerName: "Jesse Demiddel",
		// 		developerURL: null, // prevent retrieving from the nearest package.json
		// 		background: "#000000",
		// 		theme_color: "#171717",
		// 		icons: {
		// 			android: [
		// 				"android-chrome-144x144.png",
		// 				"android-chrome-192x192.png",
		// 				"android-chrome-256x256.png",
		// 				"android-chrome-512x512.png",
		// 			],
		// 			appleIcon: [
		// 				"apple-touch-icon-57x57.png",
		// 				"apple-touch-icon-76x76.png",
		// 				"apple-touch-icon-120x120.png",
		// 				"apple-touch-icon-180x180.png",
		// 			],
		// 			favicons: [
		// 				"favicon-16x16.png",
		// 				"favicon-32x32.png",
		// 				"favicon-48x48.png",
		// 				"favicon.ico",
		// 			],
		// 			// android: true,
		// 			// appleIcon: true,
		// 			// favicons: true
		// 			appleStartup: false,
		// 			windows: false,
		// 			yandex: false,
		// 		},
		// 	},
		// }),
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
					filename: "assets/fonts/[name]-[hash][ext][query]",
				},
			},
		],
	},
	// Any `import`s from `node_modules` will compiled in to a `vendor.js` file.
	optimization: {
		splitChunks: {
			cacheGroups: {
				commons: {
					test: /[\\/]node_modules[\\/]/,
					name: "vendor",
					chunks: "all",
				},
			},
		},
	},
	// watch: true,
	watchOptions: {
		aggregateTimeout: 1200,
	},
};

module.exports = () => {
	if (isProduction) {
		config.mode = "production";

		config.plugins.push(
			new MiniCssExtractPlugin({
				filename: "[name].css",
			})
		);
		// config.plugins.push(
		// 	new CopyPlugin({
		// 		patterns: [
		// 			// just to include only necessary files from Goplay folder
		// 			{
		// 				from: path.resolve(__dirname, "./Goplay/dist", "*.css"),
		// 				to: "./",
		// 			},
		// 			{
		// 				from: path.resolve(__dirname, "./Goplay/dist", "*.js"),
		// 				to: "./",
		// 			},
		// 			{
		// 				from: path.resolve(__dirname, "./Goplay/assets/img", "*"),
		// 				to: "./",
		// 			},
		// 			{
		// 				from: path.resolve(__dirname, "./Goplay/assets/svg", "*"),
		// 				to: "./",
		// 			},
		// 			{
		// 				from: path.resolve(__dirname, "./Goplay/json", "*"),
		// 				to: "./",
		// 			},
		// 			{
		// 				from: path.resolve(__dirname, "./Goplay", "*.html"),
		// 				to: "./",
		// 			},
		// 			{
		// 				from: path.resolve(__dirname, "./Goplay", "*.png"),
		// 				to: "./",
		// 			},
		// 			{
		// 				from: path.resolve(__dirname, "./Goplay", "*.ico"),
		// 				to: "./",
		// 			},
		// 			{
		// 				from: path.resolve(__dirname, "./Goplay", "*.svg"),
		// 				to: "./",
		// 			},
		// 			{
		// 				from: path.resolve(__dirname, "./Goplay", "*.xml"),
		// 				to: "./",
		// 			},
		// 			{
		// 				from: path.resolve(__dirname, "./Goplay", "*.webmanifest"),
		// 				to: "./",
		// 			},
		// 			// copy sinksen project
		// 			{
		// 				from: path.resolve(__dirname, "./Sinksen2022", "*.html"),
		// 				to: "./",
		// 			},
		// 			{
		// 				from: path.resolve(__dirname, "./Sinksen2022/css", "*.css"),
		// 				to: "./",
		// 			},
		// 			{
		// 				from: path.resolve(__dirname, "./Sinksen2022/img", "*.png"),
		// 				to: "./",
		// 			},
		// 			{
		// 				from: path.resolve(__dirname, "./Sinksen2022/img", "*.svg"),
		// 				to: "./",
		// 			},
		// 			{
		// 				from: path.resolve(__dirname, "./Sinksen2022/img", "*.gif"),
		// 				to: "./",
		// 			},
		// 			{
		// 				from: path.resolve(__dirname, "./Sinksen2022/img", "*.jpg"),
		// 				to: "./",
		// 			},
		// 			{
		// 				from: path.resolve(__dirname, "./Sinksen2022/script", "*.js"),
		// 				to: "./",
		// 			},
		// 		],
		// 	})
		// );
		config.plugins.push(
			new SitemapPlugin({
				base: "https://jesse-demiddels-portfolio.vercel.app",
				paths,
				options: {
					filename: "sitemap.xml",
					lastmod: true,
					changefreq: "monthly",
					priority: 1,
				},
			})
		);
		config.plugins.push(new RobotstxtPlugin(robotstxtOptions));
	} else {
		config.mode = "development";
	}

	return config;
};
