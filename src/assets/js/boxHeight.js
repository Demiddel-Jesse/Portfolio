"use strict";

if (document.querySelector(".c-homepage__about")) {
	const aboutElement = document.querySelector(".c-homepage__about");

	// Initial calculation
	updateRowCount(aboutElement);

	// Recalculate on page resize
	let resizeTimeout;
	window.addEventListener("resize", () => {
		clearTimeout(resizeTimeout);
		resizeTimeout = setTimeout(updateRowCount(aboutElement), 100);
	});
}

/**
 * Updates the row count CSS variable on the given element.
 *
 * @param {HTMLElement} element
 * @param {number} height
 */
function updateRowCount(element) {
	const rowHeight = window.innerWidth > 425 ? 90 : 80;
	console.log(rowHeight);
	const rowCount = Math.ceil(
		Array.from(element.children).reduce(
			(totalHeight, child) => totalHeight + child.scrollHeight,
			0
		) / rowHeight
	);
	console.log(element.scrollHeight);
	console.log(rowCount);
	element.style.setProperty("--row-count", rowCount);
}
