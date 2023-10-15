const navScroll = function () {
	const nav = document.querySelector('.js-nav');
	const navHeight = nav.clientHeight;

	window.addEventListener('scroll', function () {
		let scrollPosition = window.scrollY;

		if (scrollPosition > navHeight) {
			nav.classList.add('c-nav--scrolled');
		} else {
			nav.classList.remove('c-nav--scrolled');
		}
	});
};

const navScrollInit = function () {
	navScroll();
};

document.addEventListener('DOMContentLoaded', navScrollInit);
