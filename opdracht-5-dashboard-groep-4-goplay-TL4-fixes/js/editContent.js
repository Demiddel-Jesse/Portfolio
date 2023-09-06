const showUpdateContent = function (dataObj) {
    let htmlContent = document.querySelector(".js-contentdata")
    htmlContent.innerHTML = ""
    let htmlString = `
        <div class="c-addContentDetails__header"><h1>1. Voeg Informatie van de Film/TVShow toe</h1></div>
        <div class="c-addContentDetails__details">
            <form action="">
                <label for="title">Titel</label><br>
                <input type="text" id="title" class="c-addContentDetails__details--input" placeholder="Titel" value="${dataObj.title}"><br>
                <label for="description">Beschrijving</label><br>
                <textarea name="description" id="description" class="c-addContentDetails__details--input"
                          placeholder="Description">${dataObj.description}</textarea><br>
                <label for="Director">Regie</label><br>
                <input type="text" id="Director" class="c-addContentDetails__details--input" placeholder="Regie" value="Steven Spielberg"><br>
                <label for="Cast">Cast</label><br>
                <input type="text" id="Cast" class="c-addContentDetails__details--input" placeholder="Cast" value="Leonardo Di Caprio, jenna ortega"><br>
            </form>
            <div class="c-addContentDetails__details--select">
                <div><label for="type">Type</label><br>
                    <select id="type">
                        <option selected>TVShow</option>
                        <option>Film</option>
                    </select>
                </div>
                <div><label for="genre">Genre</label><br>
                    <select id="genre">
                        <option>Entertainment</option>
                        <option>test2</option>
                        <option>test3</option>
                    </select>
                </div>
                <div><label for="language">Taal</label><br>
                    <select id="language">
                        <option>Nederlands</option>
                        <option>Engels</option>
                        <option>Frans</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="c-addContentDetails__settings">
            <div><label for="release_date">Release Datum</label><br>
                <input class="js-release-date" type="datetime-local" placeholder="Maak Beschikbaar Op"
                       id="release_date">
            </div>
            <div><label for="release_date">Beschikbaar tot Datum</label><br>
                <input class="js-availbleTill-date" type="datetime-local" placeholder="${dataObj.availableTill}">
            </div>

            <div>
                <label for="switch">Staat Online</label><br>
                <label class="switch">
                    <input type="checkbox" id="switch">
                    <span class="slider round"></span>
                </label>
            </div>
        </div>
        <div class="c-addContentDetails__buttons">
            <a href="content.html">
                <button class="c-button">Terug</button>
            </a>
            <a href="create_new_seasons.html">
                <button class="c-button">Volgende</button>
            </a>
        </div>`
    htmlContent.innerHTML = htmlString
    showDateSelector()
}

const showDateSelector = function () {
    //add the date selector
    flatpickr(".js-release-date", {
        enableTime: true,
        dateFormat: "Y-m-d H:i",
        minDate: "today",
        time_24hr: true,
        disableMobile: "true"
    })

    flatpickr(".js-availbleTill-date", {
        enableTime: true,
        dateFormat: "Y-m-d H:i",
        minDate: "today",
        time_24hr: true,
        disableMobile: "true"
    })
}

const getShowById = function (id) {
    handleData(`https://goplayhowestapifunction.azurewebsites.net/api/getshowbyid?_id=${id}`, showUpdateContent);
}

const getMovieById = function (id) {
    handleData(`https://goplayhowestapifunction.azurewebsites.net/api/getmoviebyid?_id=${id}`, showUpdateContent);
}

const editContent = function () {
    let url = window.location.href;
    //check if you are on the right page
    if (url.includes("create_new_details.html")) {
        //get the url and split it on ? and & then put it in to variables
        let [url, id, movie] = window.location.href.split(/[?&]/);
        //check if there is an id if not new show or movie
        if (!id) {
            //new
        }
        //Check if it is a movie
        else if (id && movie === "movie=true") {
            getMovieById(id)
        }
        //Check if it is a tvshow
        else if (id && movie === "movie=false") {
            getShowById(id)
        } else {
            //should not be possible to get here
            console.log("idk buddy you did something wrong")
        }
        showDateSelector()
    } else {
        //do nothing cause not on the right page
    }
}

document.addEventListener('DOMContentLoaded', editContent);