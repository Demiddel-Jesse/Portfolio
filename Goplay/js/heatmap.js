'use strict';

const checkHeatmap = function () {
	if (document.getElementById('heatmapContainer')) {
		// console.log('yes heatmap');
		createHeatmap();
	} else {
		// console.log('no heatmap');
	}
};

const createHeatmap = function () {
	// create map
	var map = anychart.map();

	// create data set
	var dataSet = anychart.data.set([
		// limburg
		{ id: 'BE.490', value: 320000, newUsers: 10000, returningUsers: 200000 },
		// brussel
		{ id: 'BE.BU', value: 100000, newUsers: 20000, returningUsers: 180000 },
		// vlaams brabant
		{ id: 'BE.VB', value: 250000, newUsers: 50000, returningUsers: 200000 },
		// oost vlaanderen
		{ id: 'BE.OV', value: 400000, newUsers: 20000 },
		// west vlaanderen
		{ id: 'BE.3534', value: 500000, newUsers: 30000, returningUsers: 200000 },
		// antwerpen
		{ id: 'BE.3535', value: 24000, newUsers: 4000, returningUsers: 20000 },
	]);

	// create choropleth series
	var series = map.choropleth(dataSet);
	series.tooltip().format(function (e) {
		return 'nieuwe gebruikers: ' + e.getData('newUsers').toLocaleString('nl-BE') + '\n' + 'terugkerende gebruikers: ' + e.getData('returningUsers').toLocaleString('nl-BE');
	});

	// set geoIdField to 'id', this field contains in geo data meta properties
	series.geoIdField('id');

	// set map color settings
	// set the colors and ranges for the scale
	series.colorScale(anychart.scales.linearColor());

	//set the single hue progression
	var colors = anychart.color.bipolarHueProgression('#ff8d90', '#00f0c8');

	// define the colors
	series.colorScale().colors(colors);

	series.hovered().fill('#addd8e');

	// set geo data, you can find this map in our geo maps collection
	// https://cdn.anychart.com/#maps-collection
	map.geoData(anychart.maps['belgium']);

	//set map container id (div)
	map.container('heatmapContainer');

	map.background().fill('transparent');
	// colorRange
	var colorRange = map.colorRange();
	colorRange.enabled(true);

	// put the colorRange to the right from the map
	colorRange.orientation('left');

	colorRange.length(250);

	colorRange.labels(false);

	//initiate map drawing
	map.draw();
};

document.addEventListener('DOMContentLoaded', checkHeatmap());
