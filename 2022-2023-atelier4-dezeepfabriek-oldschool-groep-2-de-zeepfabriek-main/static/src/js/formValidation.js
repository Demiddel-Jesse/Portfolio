const validateForm = function () {
	const form = document.getElementById('form');
	const submit = document.querySelector('.js-submit');

	submit.addEventListener('click', function (e) {
		if (!form.checkValidity()) {
			console.log('idk');
			e.preventDefault();
			e.stopPropagation();
		} else {
			console.log('succes?');
		}

		form.classList.add('was-validated');
	});
};

const validationInit = function () {
	if (document.querySelector('.js-contact-page')) {
		validateForm();
	}
};

document.addEventListener('DOMContentLoaded', validationInit);
