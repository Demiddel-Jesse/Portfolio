'use strict';

// Creating the data used by the chart
var data = [
	{
		values: [1845, 695, 2460],
		labels: ['13-30 jaar', '30-54 jaar', '55+ jaar'],
		domain: { column: 0 },
		name: 'Sex',
		textinfo: 'none',
		hoverinfo: 'value+label+percent',
		hole: 0.7,
		type: 'pie',
		marker: {
			colors: ['#14191e', '#00f0c8', '#dcdcdc'],
		},
	},
];

// creating the layout for the chart
var layout = {
	// margins to put it off the sides
	margin: {
		l: 5,
		r: 5,
		b: 5,
		t: 5,
		pad: 4,
	},
	// width and height of chart
	height: 175,
	width: 175,
	// disable legend (we create custom)
	showlegend: false,
	// adjust background color to transparent so it is always the color of the actual background
	paper_bgcolor: 'transparent',
};

const createAgeGraph = function () {
	// first checks if age-chart exists
	if (document.getElementById('age-chart')) {
		// console.log('yes user age chart');
		// create the chart
		Plotly.newPlot('age-chart', data, layout);
	} else {
		// console.log('no user age chart');
	}
};

document.addEventListener('DOMContentLoaded', createAgeGraph());
