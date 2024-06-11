'use strict';

// Creating the data used by the chart
var data = [
	{
		values: [2485, 2485, 30],
		labels: ['Mannen', 'Vrouwen', 'Non-binair'],
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

// creating data and layout for modal
var dataM = [
	{
		values: [2485, 2485, 30],
		labels: ['Mannen', 'Vrouwen', 'Non-binair'],
		domain: { column: 0 },
		name: 'Sex',
		textinfo: 'value+percent',
		text: 'Sex',
		textposition: 'inside',
		hoverinfo: 'value+label+percent',
		hole: 0.5,
		type: 'pie',
		marker: {
			colors: ['#14191e', '#00f0c8', '#dcdcdc'],
		},
	},
];

var layoutM = {
	// margins to put it off the sides
	margin: {
		l: 5,
		r: 5,
		b: 5,
		t: 5,
		pad: 4,
	},
	// width and height of chart
	height: 400,
	width: 400,
	text: 'Sex',
	// disable legend (we create custom)
	showlegend: false,
	// adjust background color to transparent so it is always the color of the actual background
	paper_bgcolor: 'transparent',
};

const createSexGraph = function () {
	// first checks if sex-chart exists
	if (document.getElementById('sex-chart')) {
		// console.log('yes user sex chart');
		// create the chart
		Plotly.newPlot('sex-chart', data, layout);
		Plotly.newPlot('sex-chart-modal', dataM, layoutM);
	} else {
		// console.log('no user sex chart');
	}
};

document.addEventListener('DOMContentLoaded', createSexGraph());
