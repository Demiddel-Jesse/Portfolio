const openTab = function () {
	const tabs = document.querySelectorAll("[data-tab-target]");
	const tabContents = document.querySelectorAll("[data-tab-content]");

	tabs.forEach((tab) => {
		tab.addEventListener("click", () => {
			const target = document.querySelector(tab.dataset.tabTarget);
			tabContents.forEach((tabContent) => {
				tabContent.classList.remove("active");
			});
			tabs.forEach((tab) => {
				tab.classList.remove("active");
			});
			tab.classList.add("active");
			target.classList.add("active");
		});
	});
};


const showUser = function (user) {
  console.log(user.voornaam)

	let htmlString = `
  <div class="c-detailuser__tabcontent">
    <div id="home" data-tab-content class="active c-detailuser__gebruikerkolomcontainer js-userdetails">
    <h3 class="c-detailuser__smalltitle">Basis informatie: </h3>
      <div class="c-detailuser__contactcontainer">
        <div class="c-detailuser__avatar">
          <svg xmlns="http://www.w3.org/2000/svg" class="c-detailuser__contactsvg" width="68.285" height="73.536" viewBox="0 0 68.285 73.536">
            <g  class="c-detailuser__contactsvgpath" id="person" transform="translate(-3.374 -2.25)">
              <path id="Path_461" data-name="Path 461" d="M40.339,7.6A16.9,16.9,0,0,0,27.758,2.25,16.938,16.938,0,0,0,15.152,7.566a17.377,17.377,0,0,0-4.412,13.26c.728,10.031,8.362,18.192,17.018,18.192s16.276-8.159,17.016-18.19A17.309,17.309,0,0,0,40.336,7.6Z" transform="translate(9.759 0)" fill="#fff"/>
              <path id="Path_462" data-name="Path 462" d="M66.407,51.765H8.629a5.089,5.089,0,0,1-3.973-1.828,5.8,5.8,0,0,1-1.179-4.779A28.11,28.11,0,0,1,15.982,26.488,39.163,39.163,0,0,1,37.518,20.25a39.163,39.163,0,0,1,21.535,6.238,28.093,28.093,0,0,1,12.5,18.671,5.8,5.8,0,0,1-1.179,4.779A5.089,5.089,0,0,1,66.407,51.765Z" transform="translate(0 24.02)" fill="#fff"/>
            </g>
            </svg>
        </div>
        <div class="c-detailuser__basicinformatieform">
          <form action="" class="c-detailuser__basicinformatieform">
            <label for="naam" class="c-detailuser__label">Naam:</label>
            <input type="text" class="c-detailuser__input js-input" disabled value="${user.voornaam}" />
          </form>
          <form action="" class="c-detailuser__basicinformatieform">
          <label for="achternaam" class="c-detailuser__label">Achternaam:</label>
          <input type="text" disabled class="c-detailuser__input js-input" value="${user.achternaam}">
        </form>
        </div>
        <div class="c-detailuser__basicinformatieform">
          <form action="" class="c-detailuser__basicinformatieform">
            <label for="mail" class="c-detailuser__label">Mail:</label>
            <input type="text" disabled class="c-detailuser__input js-input" value="${user.mail}">
          </form>
          <form action="" class="c-detailuser__basicinformatieform">
            <label for="Telefoon" class="c-detailuser__label">Telefoon:</label>
            <input type="text" class="c-detailuser__input js-input" disabled value="${user.phone}">
        </form>
        </div>
      </div>

      
      <h3 class="c-detailuser__smalltitle">Extra informatie: </h3>
      <div class="c-detailuser__formcontainers">
        <div class="c-detailuser__gebruikerkolom">
        <form action="" class="c-detailuser__detailform">
          <label for="gemeente" class="c-detailuser__label">Gemeente:</label>
          <input type="text" class="c-detailuser__input js-input" disabled value="${user.gemeente}">
        </form>
        <form action="" class="c-detailuser__detailform">
          <label for="nr" class="c-detailuser__label">Nr</label>
          <input type="text" class="c-detailuser__input js-input" disabled value="${user.nr}">
        </form>

          
          <label for="geslacht" class="c-detailuser__label">Geslacht:</label>	
          <select name="geslacht" class="c-detailuser__input js-input" disabled id="geslacht">
            <option value="man">man</option>
            <option value="vrouw">vrouw</option>
            <option value="non-binair">non-binair</option>
          </select>
        </div>
        <div class="c-detailuser__gebruikerkolom">


          <form action="" class="c-detailuser__detailform">
            <label for="postcode" class="c-detailuser__label">Postcode:</label>
            <input type="text" class="c-detailuser__input js-input" disabled value="${user.postcode}">
          </form>
          <form action="" class="c-detailuser__detailform">
            <label for="bus" class="c-detailuser__label">Bus:</label>
            <input type="text" class="c-detailuser__input js-input" disabled value="${user.bus}">
          </form>
          <form action="" class="c-detailuser__detailform">
          <label for="reclame" class="c-detailuser__label">Reclame:</label>
          <select name="reclame" class="c-detailuser__input js-input" disabled id="reclame">
            <option value="yes">yes</option>
            <option value="no">no</option>
          </select>
        </form>





        </div>
        <div class="c-detailuser__gebruikerkolom">
        <form action="" class="c-detailuser__detailform">
          <label for="straatnaam" class="c-detailuser__label">Straatnaam:</label>
          <input type="text" class="c-detailuser__input js-input" disabled value="${user.straatnaam}">
        </form>


        <form action="" class="c-detailuser__detailform">
        <label for="geboortedatum" class="c-detailuser__label">Geboortedatum</label>
        <input type="text" class="c-detailuser__input js-input" disabled value="${user.geboortedatum}" />
      </form>
      <form action="" class="c-detailuser__detailform">
      <label for="nieuwsbrief" class="c-detailuser__label">Nieuwsbrief:</label>
      <select name="nieuwsbrief" class="c-detailuser__input js-input" disabled id="nieuwsbrief">
        <option value="yes">yes</option>
        <option value="no">no</option>
      </select>
    </form>

        </div>
        <div class="c-detailuser__gebruikerkolom">
          
        <form action="" class="c-detailuser__detailform">
        <label for="admin" class="c-detailuser__label">Admin:</label>
        <select name="admin" class="c-detailuser__input js-input" disabled id="admin">
          <option value="yes">yes</option>
          <option value="no">no</option>
        </select>
      </form>
        </div>
    </div>
      </div>
      <div class="c-detailuser__buttonscontainer">
        <div class="c-detailuser__editbuttoncontainer js-edit">
          <svg xmlns="http://www.w3.org/2000/svg" class="c-detailuser__editbuttonsvg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
            <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
          </svg>
          <p class="c-detailuser__bewerkentext">Bewerken</p>
        </div>	
        <div class="c-detailuser__deletebuttoncontainer js-delete">
          <svg xmlns="http://www.w3.org/2000/svg" class="c-detailuser__deletebuttonsvg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
          </svg>
          <p class="c-detailuser__verwijderentext">Verwijderen</p>
        </div>
      </div>	
    </div>
      
    <a href="./users.html" class="c-detailuser__gobacklink">
      <p class="c-detailuser__gobacktext">Go back</p>
    </a>
    <div id="about" data-tab-content>
      <h1>About</h1>
      <p>Let me tell you about me</p>
    </div>
    <div id="news" data-tab-content>
      <h1>News</h1>
      <p>News is great.</p>
    </div>

  </div>`;


  
  const userHtml = document.querySelector(".js-user")
  userHtml.innerHTML = htmlString

  openTab();
  editModal();
  buttons();

};

const buttons = function () {
	const deleteButton = document.querySelector(".js-delete");
	const editButton = document.querySelector(".js-edit");
	const inputs = document.querySelectorAll(".js-input");
	const modal = document.querySelector(".js-modal");

	editButton.addEventListener("click", function () {
		console.log("clickity edit");
		for (const input of inputs) {
			input.toggleAttribute("disabled");
		}
	});

	deleteButton.addEventListener("click", function () {
		modal.classList.remove("u-hidden");
	});
};

const editModal = function () {
	const modalClose = document.querySelector(".js-modalclose");
	const modalDelete = document.querySelector(".js-delete");
	const modalCancel = document.querySelector(".js-cancel");
	const modal = document.querySelector(".js-modal");

	modalClose.addEventListener("click", function () {
		modal.classList.toggle("u-hidden");
	});

	modalDelete.addEventListener("click", function () {
		modal.classList.toggle("u-hidden");
	});
  
	modalCancel.addEventListener("click", function () {
		modal.classList.toggle("u-hidden");
	});
};

const getUserById = function (id) {
	console.log(id);
	fetch("../json/users.json")
		.then((response) => response.json())
		.then((json) => {
			users = json.users;
			for (const user of users) {
				if (user.UID == id) {
					showUser(user);
				}
			}
		});
};

const userdetailinit = function () {
	const url = window.location.href;
	// check if you are on the content page
	if (url.includes("users_detail.html")) {
		const url = document.URL;
		const urlId = url.split("?");
		const id = urlId.at(-1);

		getUserById(id);



	} else {
		//do nothing cause not on the right page
	}
};
document.addEventListener("DOMContentLoaded", userdetailinit);
