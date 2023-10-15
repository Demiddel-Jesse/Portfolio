const createAlert = function () {
	alert('Dit is een schoolproject van studenten van Howest');
};

const alertInit = function () {
	// createCarousel();
	if (document.querySelector('.c-topbanner')) {
		setTimeout(() => {
			createAlert();
		}, 200);
	}
};

document.addEventListener('DOMContentLoaded', alertInit);
