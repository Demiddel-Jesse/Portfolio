'use strict';

// Creating the data used by the chart
var data = [
	{
		values: [20000, 5000],
		labels: ['maken account', 'geen account'],
		domain: { column: 0 },
		name: 'daily visitors',
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

const createNewGraph = function () {
	// first checks if new-graph exists
	if (document.getElementById('new-graph')) {
		// console.log('yes user new graph');
		// create the chart
		Plotly.newPlot('new-graph', data, layout);
	} else {
		// console.log('no user new graph');
	}
};

document.addEventListener('DOMContentLoaded', createNewGraph());
