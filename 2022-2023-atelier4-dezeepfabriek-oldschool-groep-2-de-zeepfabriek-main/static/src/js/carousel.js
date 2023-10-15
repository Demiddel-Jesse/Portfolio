import Glide from '@glidejs/glide';

const getCarousels = function () {
	const carousels = document.querySelectorAll('.glide');
	// console.log(carousels);

	for (let i = 0; i < carousels.length; i++) {
		let carousel = carousels[i];
		// console.log(carousel);
		createCarousel(carousel);
	}
};

const createCarousel = function (carousel) {
	// console.log('mounting glide');
	new Glide(carousel, {
		type: 'carousel',
		autoplay: false,
		perView: 3,
		perTouch: 2,
		gap: 15,
		hoverpause: true,
		breakpoints: {
			1400: {
				perView: 3,
			},
			1024: {
				perView: 2,
			},
			750: {
				perView: 1,
			},
		},
	}).mount();
};

const CarouselInit = function () {
	// createCarousel();
	if (document.querySelector('.glide')) {
		getCarousels();
	}
};

document.addEventListener('DOMContentLoaded', CarouselInit);
