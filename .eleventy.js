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
	eleventyConfig.addPassthroughCopy({ "src/compiled-assets": "" });
	// Copy all images
	eleventyConfig.addPassthroughCopy("src/images");
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
