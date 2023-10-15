const path = require('path');

module.exports = {
	mode: 'development',

	entry: ['./src/js/helloworld.js', './src/js/searchbar.js', './src/js/map.js', './src/js/navscroll.js', './src/js/carousel.js', './src/js/animaties.js', './src/js/alert.js', './src/js/formValidation.js'],

	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, '../wordpress/wp-content/themes/zeepfabriek/js'),
	},
};
