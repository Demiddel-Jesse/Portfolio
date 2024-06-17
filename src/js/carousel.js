"use strict";

const addActive = function (slide) {
	slide.classList.add("c-carousel__item--active");
};

const removeActive = function (slide) {
	slide.classList.remove("c-carousel__item--active");
};

if (document.querySelector(".js-carousel")) {
	// console.log("carousel");
	const carousel = document.querySelector(".js-carousel");
	const slides = document.querySelectorAll(".js-carousel__item");

	addActive(slides[0]);

	setInterval(function () {
		for (let i = 0; i < slides.length; i++) {
			if (i + 1 == slides.length) {
				addActive(slides[0]);
				slides[0].style.zIndex = 100;
				setTimeout(removeActive, 350, slides[i]);
				break;
			}
			if (slides[i].classList.contains("c-carousel__item--active")) {
				slides[i].removeAttribute("style");
				setTimeout(removeActive, 350, slides[i]);
				addActive(slides[i + 1]);
				break;
			}
		}
	}, 8000);
}
