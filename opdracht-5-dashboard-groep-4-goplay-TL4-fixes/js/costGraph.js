'use strict';

const createCostGraph = function () {
	// first checks if cost-graph exists
	if (document.getElementById('cost-graph')) {
		// console.log('yes user cost graph');
		// create the chart
		var graphWidth = document.querySelector('.js-costs').clientWidth;

		// creating the layout for the chart
		var layout = {
			// margins to put it off the sides
			margin: {
				l: 0,
				r: 0,
				b: 0,
				t: 5,
				pad: 4,
			},
			// width and height of chart
			height: 100,
			width: graphWidth,
			// disable legend (we create custom)
			showlegend: false,
			xaxis: {
				autorange: true,
				showgrid: false,
				zeroline: false,
				showline: false,
				autotick: true,
				ticks: '',
				showticklabels: false,
			},
			yaxis: {
				autorange: true,
				showgrid: false,
				zeroline: false,
				showline: false,
				autotick: true,
				ticks: '',
				showticklabels: false,
			},
			showgrid: false,
			// adjust background color to transparent so it is always the color of the actual background
			paper_bgcolor: 'transparent',
			plot_bgcolor: 'transparent',
			colorway: ['#FF8D90'],
		};

		var traces = [
			{
				x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
				y: [2, 1, 4, 5, 2, 4, 8, 6, 9, 3, 4],
				fill: 'tozeroy',
				type: 'scatter',
				line: {
					shape: 'spline',
				},
				mode: 'lines',
				hoverinfo: 'none',
			},
		];
		Plotly.newPlot('cost-graph', traces, layout);
	} else {
		// console.log('no user cost graph');
	}
};

document.addEventListener('DOMContentLoaded', createCostGraph);
