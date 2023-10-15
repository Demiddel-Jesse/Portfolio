const expandSearch = function () {
	let searchBar = document.querySelector('.c-search__input');

	searchBar.classList.add('c-search__input--expand');
};

const listenToSearchIcon = function () {
	var searchIcon = document.querySelector('.c-search__button');

	searchIcon.addEventListener('click', function () {
		console.log('clicked');
		expandSearch();
	});
};

const searchInit = function () {
	listenToSearchIcon();
};

document.addEventListener('DOMContentLoaded', searchInit);
