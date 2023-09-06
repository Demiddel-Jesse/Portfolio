'use strict';

const createGenreGraph = function () {
	if (document.getElementById('genreGraph')) {
		const data = {
			labels: ['actie', 'misdaad', 'kinder', 'komedie', 'reality', 'soaps'],
			datasets: [
				{
					label: 'Popularity',
					data: [1, 4, 3, 2, 1, 4],
					fill: true,
					backgroundColor: 'rgba(0, 240, 200, 0.5)',
					borderColor: '#00f0c8',
					pointBackgroundColor: '#00f0c8',
					pointBorderColor: '#00f0c8',
					pointHoverBackgroundColor: '#fff',
					pointHoverBorderColor: '#00f0c8',
				},
			],
		};

		const options = {
			scales: {
				r: {
					angleLines: {
						display: false,
					},
					suggestedMin: 0,
					suggestedMax: 4,
					ticks: {
						display: false,
						stepSize: 1,
					},
					grid: {
						color: 'rgba(0, 240, 200, 0.5)',
					},
					pointLabels: {
						color: '#00F0C8',
						font: {
							size: 14,
						},
					},
				},
			},
			y: {
				beginAtZero: true,
			},
			bezierCurve: true,
			elements: {
				line: {
					tension: 0.5,
				},
			},
			plugins: {
				legend: {
					display: false,
				},
			},
			responsive: true,
		};

		const ctx = document.getElementById('genreGraph');

		new Chart(ctx, {
			type: 'radar',
			data: data,
			options: options,
		});
	} else {
		// console.log('no genre graph');
	}
};

document.addEventListener('DOMContentLoaded', createGenreGraph());
