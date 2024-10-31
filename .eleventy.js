const ejs = require("ejs");
const ejsPlugin = require("@11ty/eleventy-plugin-ejs");

module.exports = function (eleventyConfig) {
	eleventyConfig.addPlugin(ejsPlugin, {
		async: false, // default
		// Override the `ejs` library instance
		eleventyLibraryOverride: ejs,
	});
	eleventyConfig.addUrlTransform((page) => {
		if (page.url.length !== "/" && page.url.endsWith("/")) {
			return page.url.slice(0, -1);
		}
	});
	// Watch our compiled assets for changes
	eleventyConfig.addWatchTarget("./src/compiled-assets/main.css");
	eleventyConfig.addWatchTarget("./src/compiled-assets/main.js");
	// eleventyConfig.addWatchTarget('./src/compiled-assets/vendor.js');// Copy src/compiled-assets to /assets
	eleventyConfig.addPassthroughCopy({ "src/compiled-assets": "/" });
	// Copy all images
	eleventyConfig.addPassthroughCopy("src/assets/images");

	// passthroughCopy for Sinksen static files
	eleventyConfig.addPassthroughCopy({ "Sinksen2022/css": "/Sinksen2022/css" });
	eleventyConfig.addPassthroughCopy({ "Sinksen2022/img": "/Sinksen2022/img" });
	eleventyConfig.addPassthroughCopy({
		"Sinksen2022/script": "/Sinksen2022/script",
	});
	eleventyConfig.addPassthroughCopy({ "Sinksen2022/*.html": "/Sinksen2022/" });

	// passthroughCopy for Goplay static files
	eleventyConfig.addPassthroughCopy({ "Goplay/assets": "/Goplay/assets" });
	eleventyConfig.addPassthroughCopy({ "Goplay/dist": "/Goplay/dist" });
	eleventyConfig.addPassthroughCopy({ "Goplay/json": "/Goplay/json" });
	eleventyConfig.addPassthroughCopy({ "Goplay/*.png": "/Goplay/" });
	eleventyConfig.addPassthroughCopy({ "Goplay/*.html": "/Goplay/" });
	eleventyConfig.addPassthroughCopy({ "Goplay/*.xml": "/Goplay/" });
	eleventyConfig.addPassthroughCopy({ "Goplay/*.ico": "/Goplay/" });
	eleventyConfig.addPassthroughCopy({ "Goplay/*.svg": "/Goplay/" });
	eleventyConfig.addPassthroughCopy({ "Goplay/*.webmanifest": "/Goplay/" });

	return {
		dir: {
			includes: "_components",
			input: "src",
			layouts: "_layouts",
			data: "_data",
			output: "dist",
		},
		// Allows using markup and EJS features in markdown
		markdownTemplateEngine: "ejs",
		htmlTemplateEngine: "ejs",
	};
};
