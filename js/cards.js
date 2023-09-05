'use strict'

function cardInit(jsonData) {
    const cardContainer = document.querySelector('.js-cardgroup')
    let innerhtml = ``
    let i = 0
    jsonData.projects.forEach(project => {
        const name = project.name
        const summary = project.smallSummary
        const image = project.smallImage

        innerhtml += `
        <div class="c-card">
            <div class="c-card__top">
                <img src="${image}" alt="${name}" class="c-card__img">
                <h2 class="c-card__heading">${name}</h2>
            </div>
            <p class="c-card__text">${summary}</p>
            <div class="c-card__button">
                <a href="detail.html?${i}" class="c-card__link">More Info</a>
            </div>
        </div>
        `
        i++
        cardContainer.innerHTML = innerhtml
    });
}



