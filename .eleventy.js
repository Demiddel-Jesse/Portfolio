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
	return {
		dir: {
			includes: "_components",
			input: "src",
			layouts: "_layouts",
			output: "dist",
		},
		// Allows using markup and EJS features in markdown
		markdownTemplateEngine: "ejs",
		htmlTemplateEngine: "ejs",
	};
};
