"use strict";

if (document.querySelector(".js-carousel")) {
	const slides = document.querySelectorAll(".js-carousel__item");
	const modal = document.querySelector(".js-modal");

	slides.forEach((slide) => {
		slide.addEventListener("click", function () {
			modal.innerHTML = `<span class="js-close">&times;</span>`;
			const img = slide.childNodes[1].cloneNode(true);
			img.classList.add("c-modal__img");
			modal.appendChild(img);
			modal.style.display = "flex";

			var span = document.querySelector(".js-close");

			span.onclick = function () {
				modal.style.display = "none";
			};

			window.addEventListener("click", function (event) {
				if (event.target == modal) {
					modal.style.display = "none";
				}
			});
		});
	});
}
