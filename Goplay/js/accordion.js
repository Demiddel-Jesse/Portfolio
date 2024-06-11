'use strict';

// creates the functionality of the accordions
const createAccordionFunc = function () {
	var accordions = document.querySelectorAll('.js-accordion');

	for (var i = 0; i < accordions.length; i++) {
		accordions[i].addEventListener('click', function () {
			/* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
			this.classList.toggle('c-accordion--active');

			/* Toggle between hiding and showing the active panel */
			var panel = this.nextElementSibling;
			if (panel.style.maxHeight) {
				panel.style.maxHeight = null;
				panel.classList.toggle('c-panel--active');
			} else {
				panel.style.maxHeight = panel.scrollHeight + 50 + 'px';
				panel.classList.toggle('c-panel--active');
			}
		});
	}
};

// checks if there is an accordion in the file
const checkAccordion = function () {
	if (document.querySelector('.js-accordion')) {
		createAccordionFunc();
	} else {
		// console.log('no accordion here');
	}
};

document.addEventListener('DOMContentLoaded', checkAccordion());
