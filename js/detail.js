function detailInit(jsonData) {
    const detailContainer = document.querySelector('.c-detail')
    const id = document.URL;
	const arrid = id.split('?');
    const project = jsonData.projects[arrid[1]]
    document.querySelector('.js-detailName').innerHTML = project.name
    const tasks = document.querySelector('.js-detailTasks')
    const techs = document.querySelector('.js-detailTechs')
    const summary = document.querySelector('.js-detailSummary')
    const buttonContainer = document.querySelector('.c-detail__buttons')

    let taskhtml = ``
    let techhtml = ``
    let summaryhtml = ``
    let buttonhtml = ``

    document.title = project.name;

    project.tasks.forEach(task => {
        taskhtml += `
            <li>${task}</li>
        ` 
    });

    project.techs.forEach(tech => {
        techhtml += `
            <li>${tech}</li>
        ` 
    });

    project.summary.forEach(line => {
        summaryhtml += `
            ${line}
            <br>
            <br>
        ` 
    });

    project.buttons.forEach(button => {
        if(button.visibility === 1){
            buttonhtml += `
                <a href="${button.button_link}" class="c-card__link">${button.button_text}</a>
            `
        }
    });

    tasks.innerHTML = taskhtml
    techs.innerHTML = techhtml
    summary.innerHTML = summaryhtml
    buttonContainer.innerHTML = buttonhtml

    document.querySelector('.js-image').innerHTML = `<img src="${project.mainImage}" alt="${project.name}">`
}