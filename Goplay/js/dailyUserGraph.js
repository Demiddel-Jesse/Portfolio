'use strict';

// Creating the data used by the chart
var data = [
	{
		values: [20000, 130000],
		labels: ['nieuwe gebruikers', 'terugkerende gebruikers'],
		domain: { column: 0 },
		name: 'dagelijkese gebruikers',
		textinfo: 'value+percent',
		hoverinfo: 'label',
		hole: 0,
		type: 'pie',
		marker: {
			colors: ['#14191e', '#00f0c8'],
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

const createDailyGraph = function () {
	// first checks if daily-graph exists
	if (document.getElementById('daily-graph')) {
		// console.log('yes user daily graph');
		// create the chart
		Plotly.newPlot('daily-graph', data, layout);
	} else {
		// console.log('no user daily graph');
	}
};

document.addEventListener('DOMContentLoaded', createDailyGraph());
