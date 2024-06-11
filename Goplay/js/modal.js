'use strict';

// toggles the class u-hidden on the selected modal
const modalToggle = function (modal, close, graphname) {
    if (modal) {
        modal.classList.remove('u-hidden');

        close.addEventListener('click', function () {
            modal.classList.add('u-hidden');
        });
    } else {
        // console.log(`${graphname} not pressable`);
    }
};

// listens to all graphs for their clicks
const listenToGraphs = function () {
    console.log('listening to graphs');
    // selects the graphs

    // geting everything for sex graph
    const sexGraph = document.querySelector('.js-sex');
    // getting the modal stuff
    const modalSex = document.getElementById('modalSex');
    const modalSexClose = document.getElementById('modalSexClose');

    // getting everything for age graph
    const ageGraph = document.querySelector('.js-age');
    // getting the modal stuff
    const modalAge = document.getElementById('modalAge');
    const modalAgeClose = document.getElementById('modalAgeClose');

    // getting everything for growth graph
    const growthGraph = document.querySelector('.js-growth');
    // getting the modal stuff
    const modalGrowth = document.getElementById('modalGrowth');
    const modalGrowthClose = document.getElementById('modalGrowthClose');

    // getting everything for daily users graph
    const dailyGraph = document.querySelector('.js-daily');
    // getting the modal stuff
    const modalDaily = document.getElementById('modalDaily');
    const modalDailyClose = document.getElementById('modalDailyClose');

    // getting everything for new users graph
    const newGraph = document.querySelector('.js-new');
    // getting the modal stuff
    const modalNew = document.getElementById('modalNew');
    const modalNewClose = document.getElementById('modalNewClose');

    // getting everything for map graph
    const mapGraph = document.querySelector('.js-map');
    // getting the modal stuff
    const modalMap = document.getElementById('modalMap');
    const modalMapClose = document.getElementById('modalMapClose');

    // getting everything for genre graph
    const genreGraph = document.querySelector('.js-genre');
    // getting the modal stuff
    const modalGenre = document.getElementById('modalGenre');
    const modalGenreClose = document.getElementById('modalGenreClose');

    // getting everything for income graph
    const incomeGraph = document.querySelector('.js-income');
    // getting the modal stuff
    const modalIncome = document.getElementById('modalIncome');
    const modalIncomeClose = document.getElementById('modalIncomeClose');

    // getting everything for costs graph
    const costsGraph = document.querySelector('.js-costs');
    // getting the modal stuff
    const modalCosts = document.getElementById('modalCosts');
    const modalCostsClose = document.getElementById('modalCostsClose');

    // array of graph dictionarys
    const graphArr = [
        {graph: sexGraph, modal: modalSex, modalClose: modalSexClose, name: 'sex'},
        {graph: ageGraph, modal: modalAge, modalClose: modalAgeClose, name: 'age'},
        {graph: growthGraph, modal: modalGrowth, modalClose: modalGrowthClose, name: 'growth'},
        {graph: dailyGraph, modal: modalDaily, modalClose: modalDailyClose, name: 'daily'},
        {graph: newGraph, modal: modalNew, modalClose: modalNewClose, name: 'new'},
        {graph: mapGraph, modal: modalMap, modalClose: modalMapClose, name: 'map'},
        {graph: genreGraph, modal: modalGenre, modalClose: modalGenreClose, name: 'genre'},
        {graph: incomeGraph, modal: modalIncome, modalClose: modalIncomeClose, name: 'income'},
        {graph: costsGraph, modal: modalCosts, modalClose: modalCostsClose, name: 'costs'},
    ];

    // for loop which loops over the graph dictionary
    for (let n = 0; n < graphArr.length; n++) {
        // listens to graph to display modal

        let graphModule = graphArr[n];

        if (graphModule.graph) {
            graphModule.graph.addEventListener('click', function () {
                modalToggle(graphModule.modal, graphModule.modalClose, graphModule.name, graphModule.function);
            });
        } else {
            // console.log(`no ${graphModule.graph}  graph to press`);
        }
    }
};

// creates modal for logo adjusting settings.html
const listenToLogo = function () {
    const logoLight = document.querySelector('.js-logo-light');
    const logoLightModal = document.getElementById('js-logo-light-modal');
    const logoLightModalClose = document.getElementById('js-logo-light-modal-close');
    const logoDark = document.querySelector('.js-logo-dark');
    const logoDarkModal = document.getElementById('js-logo-dark-modal');
    const logoDarkModalClose = document.getElementById('js-logo-dark-modal-close');

    if (logoLight) {
        logoLight.addEventListener('click', function () {
            modalToggle(logoLightModal, logoLightModalClose, 'light logo');
        });
    } else {
        // console.log(`no Logo light to press`);
    }

    if (logoDark) {
        logoDark.addEventListener('click', function () {
            modalToggle(logoDarkModal, logoDarkModalClose, 'light logo');
        });
    } else {
        // console.log(`no Logo light to press`);
    }
};

const listenToSettingsDeleteButtons = function (modal) {
    const deleteButton = document.getElementById('js-delete');
    const noButton = document.getElementById('js-keep');

    deleteButton.addEventListener('click', function () {
        modal.classList.toggle('u-hidden');
    });
    noButton.addEventListener('click', function () {
        modal.classList.toggle('u-hidden');
    });
};

// creates modals for deleting things in settings.html
const listenToSettingsDelete = function () {
    const subDelete = document.getElementById('js-sub-delete');
    const PromoDelete = document.getElementById('js-promo-delete');
    const deleteModal = document.getElementById('js-modal-delete');
    const deleteModalClose = document.getElementById('js-modal-delete-close');

    if (subDelete) {
        subDelete.addEventListener('click', function () {
            modalToggle(deleteModal, deleteModalClose, 'delete');
            listenToSettingsDeleteButtons(deleteModal);
        });
    }
    if (PromoDelete) {
        PromoDelete.addEventListener('click', function () {
            modalToggle(deleteModal, deleteModalClose, 'delete');
            listenToSettingsDeleteButtons(deleteModal);
        });
    }
};

// creates modal for when you want to add new subscription in settings.html
const newSub = function () {
    const newSubPanel = document.querySelector('.c-subscription--new');
    const newSubModal = document.getElementById('modalAddSubscription');
    const newSubModalClose = document.getElementById('modalAddSubscriptionClose');

    if (newSubPanel) {
        newSubPanel.addEventListener('click', function () {
            modalToggle(newSubModal, newSubModalClose, 'newSubModal');
            listenToSettingsNewSubButtons(newSubModal);
        });
    }
};

const listenToSettingsNewSubButtons = function (modal) {
    const deleteButton = document.getElementById('js-save');
    const noButton = document.getElementById('js-cancel');

    deleteButton.addEventListener('click', function () {
        modal.classList.toggle('u-hidden');
    });
    noButton.addEventListener('click', function () {
        modal.classList.toggle('u-hidden');
    });
};

const newPromo = function () {
    const newSubPanel = document.querySelector('.c-promo--new');
    const newSubModal = document.getElementById('modalAddPromo');
    const newSubModalClose = document.getElementById('modalAddPromoClose');

    if (newSubPanel) {
        newSubPanel.addEventListener('click', function () {
            modalToggle(newSubModal, newSubModalClose, 'newSubModal');
            listenToSettingsNewPromoButtons(newSubModal);
        });
    }
};

const listenToSettingsNewPromoButtons = function (modal) {
    const deleteButton = document.getElementById('js-save-promo');
    const noButton = document.getElementById('js-cancel-promo');

    deleteButton.addEventListener('click', function () {
        modal.classList.toggle('u-hidden');
    });
    noButton.addEventListener('click', function () {
        modal.classList.toggle('u-hidden');
    });
};

const checksModals = function () {
    if (document.querySelector('.js-page-settings')) {
        listenToLogo();
        listenToSettingsDelete();
        newSub();
        newPromo();
    } else if (document.querySelector('.js-page-index')) {
        // listenToGraphs();
    }
};

document.addEventListener('DOMContentLoaded', checksModals);
