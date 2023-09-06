'use strict';
// all script for settings.html are here

const createValues = function () {
	const inputs = document.querySelectorAll('.js-color-input');

	for (let index = 0; index < inputs.length; index++) {
		const input = inputs[index];
		let value = input.value;
		let inputID = input.id;
		// console.log(value);
		let valueDescriptor = document.getElementById(`${inputID}-value`);
		changeValues(valueDescriptor, value);

		input.addEventListener('change', function () {
			let AELvalue = input.value;
			let AELinputID = input.id;
			// console.log(value);
			let AELvalueDescriptor = document.getElementById(`${AELinputID}-value`);
			changeValues(AELvalueDescriptor, AELvalue);
			// console.log('change');
		});
	}
};

const changeValues = function (valueDescriptor, value) {
	valueDescriptor.innerHTML = `value: ${value}`;
	// valueDescriptor.style.color = value;
	// console.log('change');
};

// js from users.js listenToEdit
const listenToSubscriptionEdit = function () {
	const editSubs = document.querySelectorAll('.js-settings-editSub'); // edit button
	for (const editSub of editSubs) {
		// overlopen van alle editbutton
		// console.log(edituser);

		editSub.addEventListener('click', function () {
			// console.log('click');
			const inputs = document.querySelectorAll('.js-sub-input');
			for (const input of inputs) {
				// console.log('disableing');
				input.toggleAttribute('disabled');
				let svg = editSub.children;
				listenToSettingsEditChange(svg);
			}
		});
	}
};

const listenToPromoEdit = function () {
	const editPromos = document.querySelectorAll('.js-settings-editPromo'); // edit button
	for (const editPromo of editPromos) {
		// overlopen van alle editbutton
		// console.log(edituser);

		editPromo.addEventListener('click', function () {
			// console.log('click');
			const inputs = document.querySelectorAll('.js-promo-input');
			for (const input of inputs) {
				// console.log('disableing');
				input.toggleAttribute('disabled');
				let svg = editPromo.children;
				listenToSettingsEditChange(svg);
			}
		});
	}
};

const listenToEditSettings = function () {
	const editSettings1 = document.querySelectorAll('.js-settings-edit--1');
	const editSettings2 = document.querySelectorAll('.js-settings-edit--2');
	const editSettings3 = document.querySelectorAll('.js-settings-edit--3');
	const editSettings4 = document.querySelectorAll('.js-settings-edit--4');

	const deleteModal = document.getElementById('js-modal-delete');
	const deleteModalClose = document.getElementById('js-modal-delete-close');

	const mainDeletes = document.querySelectorAll('.js-sub-delete--settings');

	// first section
	for (const editSetting of editSettings1) {
		editSetting.addEventListener('click', function () {
			// console.log('click');
			const inputs = document.querySelectorAll('.js-settings-input--1');
			const deletes = document.querySelectorAll('.js-setting--1-delete');

			let svg = editSetting.children;
			listenToSettingsEditChange(svg);

			for (const input of inputs) {
				// console.log('disableing');
				input.toggleAttribute('disabled');
			}
			for (const del of deletes) {
				del.classList.toggle('u-hidden');

				del.addEventListener('click', function () {
					modalToggle(deleteModal, deleteModalClose, 'delete');
					listenToSettingsDeleteButtons(deleteModal);
				});
			}
		});
	}
	// second section
	for (const editSetting of editSettings2) {
		editSetting.addEventListener('click', function () {
			// console.log('click');
			const inputs = document.querySelectorAll('.js-settings-input--2');
			const deletes = document.querySelectorAll('.js-setting--2-delete');

			let svg = editSetting.children;
			listenToSettingsEditChange(svg);

			for (const input of inputs) {
				// console.log('disableing');
				input.toggleAttribute('disabled');
			}
			for (const del of deletes) {
				// console.log('disableing');
				del.classList.toggle('u-hidden');

				del.addEventListener('click', function () {
					modalToggle(deleteModal, deleteModalClose, 'delete');
					listenToSettingsDeleteButtons(deleteModal);
				});
			}
		});
	}
	// third section
	for (const editSetting of editSettings3) {
		editSetting.addEventListener('click', function () {
			// console.log('click');
			const inputs = document.querySelectorAll('.js-settings-input--3');
			const deletes = document.querySelectorAll('.js-setting--3-delete');

			let svg = editSetting.children;
			listenToSettingsEditChange(svg);

			for (const input of inputs) {
				// console.log('disableing');
				input.toggleAttribute('disabled');
			}
			for (const del of deletes) {
				// console.log('disableing');
				del.classList.toggle('u-hidden');

				del.addEventListener('click', function () {
					modalToggle(deleteModal, deleteModalClose, 'delete');
					listenToSettingsDeleteButtons(deleteModal);
				});
			}
		});
	}
	// fourth section
	for (const editSetting of editSettings4) {
		editSetting.addEventListener('click', function () {
			// console.log('click');
			const inputs = document.querySelectorAll('.js-settings-input--4');
			const deletes = document.querySelectorAll('.js-setting--4-delete');

			let svg = editSetting.children;
			listenToSettingsEditChange(svg);

			for (const input of inputs) {
				// console.log('disableing');
				input.toggleAttribute('disabled');
			}
			for (const del of deletes) {
				// console.log('disableing');
				del.classList.toggle('u-hidden');

				del.addEventListener('click', function () {
					modalToggle(deleteModal, deleteModalClose, 'delete');
					listenToSettingsDeleteButtons(deleteModal);
				});
			}
		});
	}
	// main deletes
	for (const del of mainDeletes) {
		del.addEventListener('click', function () {
			modalToggle(deleteModal, deleteModalClose, 'delete');
			listenToSettingsDeleteButtons(deleteModal);
		});
	}
};

// js from users.js listenToEditChange
const listenToSettingsEditChange = function (editSvgs) {
	// timeout so that the svg doesnt get reset before it actually changes
	for (const editSvg of editSvgs) {
		if (editSvg.classList.contains('c-users__editsvg--edit')) {
			setTimeout(() => {
				// console.log('edit');
				// console.log(editSvg);
				editSvg.classList.remove('c-users__editsvg--edit');
				editSvg.classList.add('c-users__editsvg--save');
				editSvg.innerHTML = `<path class="c-users__editpath" d="M15,9H5V5H15M12,19A3,3 0 0,1 9,16A3,3 0 0,1 12,13A3,3 0 0,1 15,16A3,3 0 0,1 12,19M17,3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V7L17,3Z" />`;
				// console.log(editSvg);
			}, 10);
		} else if (editSvg.classList.contains('c-users__editsvg--save')) {
			setTimeout(() => {
				editSvg.classList.add('c-users__editsvg--edit');
				editSvg.classList.remove('c-users__editsvg--save');
				editSvg.innerHTML = `<path fill="currentColor" class="c-users__editpath" d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" />`;
			}, 10);

			// console.log(editSvg);
		}
	}
};

const listenToAddNewSection = function () {
	const AddNewSection = document.querySelector('.js-settings--addSection');
	const addSectionModal = document.getElementById('js-settings-modal-addSection');
	const addSectionModalClose = document.getElementById('js-settings-modal-addSection-close');

	AddNewSection.addEventListener('click', function () {
		modalToggle(addSectionModal, addSectionModalClose, 'section');
	});
};

const listenToAddNewSetting = function () {
	const addNewSettings = document.querySelectorAll('.js-settings--add');
	// console.log(addNewSettings);
	const addSettingModal = document.getElementById('js-settings-modal-addSetting');
	const addSettingModalClose = document.getElementById('js-settings-modal-addSetting-close');

	for (const addSetting of addNewSettings) {
		// console.log(addSetting);
		addSetting.addEventListener('click', function () {
			modalToggle(addSettingModal, addSettingModalClose, 'setting');
		});
	}
};

// checks if you are on the settings page
const checkSetting = function () {
	if (document.querySelector('.js-page-settings')) {
		createValues();
		listenToSubscriptionEdit();
		listenToPromoEdit();
		listenToEditSettings();
		listenToAddNewSection();
		listenToAddNewSetting();
	}
};

document.addEventListener('DOMContentLoaded', checkSetting());
