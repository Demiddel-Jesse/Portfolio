let modal;
let sect;
let id;

let users;
let list = [];

const loadJson = function () {



	fetch("../json/users.json")
		.then((response) => response.json())
		.then((json) => {
			users = json.users;
			list = users; 
			ShowTable(users)

		
		

			return json;
		});
};

const ShowTable = function(users){
	const getElement = document.getElementById("menu");
	let htmlString = ``; 
	const htmlheaders = `<tr class="c-users__tablemainrow">
		<th class="c-users__id c-users__id--active js-filterid">
			Id
			<span class="c-users__active "><svg xmlns="http://www.w3.org/2000/svg" class="c-users__activesvg js-filtersvg" viewBox="0 0 24 24"><path class="c-users__activesvgpath" d="M7,10L12,15L17,10H7Z" /></svg></span>
		</th>
		<th class="c-users__achternaam js-filteranaam">
			Achternaam
			<span class="c-users__active "><svg xmlns="http://www.w3.org/2000/svg" class="c-users__activesvg js-filtersvg" viewBox="0 0 24 24"><path class="c-users__activesvgpath" d="M7,10L12,15L17,10H7Z" /></svg></span>
		</th>
		<th class="c-users__voornaam js-filtervnaam">
			Voornaam
			<span class="c-users__active "><svg xmlns="http://www.w3.org/2000/svg" class="c-users__activesvg js-filtersvg" viewBox="0 0 24 24"><path class="c-users__activesvgpath" d="M7,10L12,15L17,10H7Z" /></svg></span>
		</th>
			
		<th class="c-users__mail js-filtermail">
			Mail
			<span class="c-users__active "><svg xmlns="http://www.w3.org/2000/svg" class="c-users__activesvg js-filtersvg" viewBox="0 0 24 24"><path class="c-users__activesvgpath" d="M7,10L12,15L17,10H7Z" /></svg></span>
		</th>
		<th class="c-users__expand js-filter"></th>
	</tr>`; 
	for (let user of users) {
		id = user.UID;
		const voornaam = user.voornaam;
		const achternaam = user.achternaam;
		const mail = user.mail;

		// dit is de htmlstring also known as the moshpit
		htmlString += `
			
			<tr  class="c-users__tablerow js-background c-users__tablerow--first  js-deleteuser js-adduser " data-deleteuser="${id}" id="userdelete${id}">
				<td class="c-users__category js-id"><input class="c-users__input  js-adduser  js-geboortedatum js-disable" type="text" value="${id}" disabled /></td>
				<td class="c-users__category js-achternaam"><input class="c-users__input js-adduser  js-geboortedatum js-disable" data-disabledid="${id}" type="text" value="${achternaam}" disabled /></td>
				<td class="c-users__category js-voornaam"><input class="c-users__input js-adduser  js-geboortedatum js-disable" data-disabledid="${id}" type="text" value="${voornaam}" disabled /></td>
				<td class="c-users__category js-mail"><input class="c-users__input js-adduser  js-geboortedatum js-disable" data-disabledid="${id}" type="text" value="${mail}" disabled /></td>
				<td class="c-users__category ">
					<a href="users_detail.html?${id}" id="js-expandid${id}" class="c-users__expandbutton js-expand " data-id="${id}">
						<svg id="${id}" class="c-users__expandicon js-expandbutton js-expandbutton${id}" viewBox="0 0 24 24">
							<path fill="currentColor" d="M7,10L12,15L17,10H7Z" />
						</svg>
					</a>
				</td>
				<div id="extraMenu${id}" class="c-users__extracontainer " style="overflow-x:auto;" >
					<td id="js-extra${id}" class="c-users__extradata u-hidden  d-flex js-extra c-expandborder" >
					</td>
				</div>
			</tr>
			`;

		



	}
	getElement.innerHTML = htmlheaders + htmlString;

	listenToFilterId()
	listenToFilterAchternaam()
	listenToFilterVoornaamButton()
	listenToFilterMailButton()
}

const sortById = function(){
	let sortedIdsList = list.sort(
		(p1, p2) => (p1.UID < p2.UID) ? 1 : (p1.UID > p2.UID) ? -1 : 0);
	console.log(sortedIdsList)
	ShowTable(sortedIdsList)
}
const sortByAchternaam = function(){

	let sortedAchternaamlist = list.sort(
		(p1,p2) => (p1.achternaam < p2.achternaam) ? 1 : (p1.achternaam > p2.achternaam) ? -1 : 0);
	console.log(sortedAchternaamlist)
	ShowTable(sortedAchternaamlist)
}

const sortByVoornaam = function(){
	let sortedVoornaamList = list.sort(
		(p1,p2) => (p1.voornaam < p2.voornaam) ? 1 : (p1.voornaam > p2.voornaam) ? -1 : 0);
	console.log(sortedVoornaamList)
	ShowTable(sortedVoornaamList)
}

const sortByMail = function(){
	let sortedMailList = list.sort(
		(p1,p2) => (p1.mail < p2.mail) ? 1 : (p1.mail > p2.mail) ? -1 : 0);
	console.log(sortedMailList)
	ShowTable(sortedMailList)
}

const listenToFilterMailButton = function(){
	const filterMailButton = document.querySelector(".js-filtermail")

	filterMailButton.addEventListener("click",function(){
		sortByMail()
	})
}

const listenToFilterVoornaamButton = function(){
	const filterVoornaamButton = document.querySelector(".js-filtervnaam")
	
	filterVoornaamButton.addEventListener("click",function(){
		sortByVoornaam()
	})
	
}


const listenToFilterAchternaam = function(){
	const filterAchternaamButton = document.querySelector(".js-filteranaam")

	filterAchternaamButton.addEventListener("click",function(){
		sortByAchternaam()
	})
}

const listenToFilterId = function(){
	const filterButton = document.querySelector(".js-filterid")

	filterButton.addEventListener("click",function(){
		sortById()
		
	})
}

function findInValues(arr, search) {
	/** cast to string and lowercase to have non-dependant type and case search */
	search = String(search).toLowerCase();
	return arr.filter((object) =>
		/** get only values from iterated objects */
		Object.values(object).some((objValue) =>
			/** casting field values to the same shape */
			String(objValue).toLowerCase().includes(search)
		)
	);
}

const searchBar = function () {
	const searchbar = document.querySelector(".js-searchbar");
	const getElement = document.getElementById("menu"); //  nodig voor de juiste persoo nterug te geven

	let htmlString = `					
	<table id="menu" class="c-users__table table table-responsive" style="overflow-x: auto">
	<tr class="c-users__tablemainrow">
		<th class="c-users__id c-users__id--active js-filter">
			Id
			<span class="c-users__active "><svg xmlns="http://www.w3.org/2000/svg" class="c-users__activesvg js-filtersvg" viewBox="0 0 24 24"><path class="c-users__activesvgpath" d="M7,10L12,15L17,10H7Z" /></svg></span>
		</th>
		<th class="c-users__achternaam js-filter">
			Achternaam
			<span class="c-users__active "><svg xmlns="http://www.w3.org/2000/svg" class="c-users__activesvg js-filtersvg" viewBox="0 0 24 24"><path class="c-users__activesvgpath" d="M7,10L12,15L17,10H7Z" /></svg></span>
		</th>
		<th class="c-users__voornaam js-filter">
			Voornaam
			<span class="c-users__active "><svg xmlns="http://www.w3.org/2000/svg" class="c-users__activesvg js-filtersvg" viewBox="0 0 24 24"><path class="c-users__activesvgpath" d="M7,10L12,15L17,10H7Z" /></svg></span>
		</th>
			
		<th class="c-users__mail js-filter">
			Mail
			<span class="c-users__active "><svg xmlns="http://www.w3.org/2000/svg" class="c-users__activesvg js-filtersvg" viewBox="0 0 24 24"><path class="c-users__activesvgpath" d="M7,10L12,15L17,10H7Z" /></svg></span>
		</th>
		<th class="c-users__expand js-filter"></th>
	</tr>
</table>`;
	let htmlStrings;
	let ids;
	let voornaams;
	let achternaams;
	let mails;
	let geboortedatums;
	let postcodes;
	let gemeentes;
	let straatnaams;
	let phones;
	let nrs;
	let bussen;
	let tekst;

	fetch("../json/users.json")
		.then((response) => response.json())
		.then((json) => {
			const user = json.users;
			searchbar.addEventListener("keyup", function (event) {
				if (event.key === "Enter") {
					const currentWord = event.target.value;

					let users = findInValues(user, currentWord);
					console.log(users);

					for (const user of users) {
						const id = user.UID;
						const voornaam = user.voornaam;
						const achternaam = user.achternaam;
						const mail = user.mail;
						htmlString += `

						<table  class="c-users__table " style="overflow-x:auto;">
						<tr id="menu" class="c-users__tablerow js-background c-users__tablerow--first  js-deleteuser js-adduser " data-deleteuser="${id}" id="userdelete${id}">
							<td class="c-users__category js-id"><input class="c-users__input  js-adduser  js-geboortedatum js-disable" type="text" value="${id}" disabled /></td>
							<td class="c-users__category js-achternaam"><input class="c-users__input js-adduser  js-geboortedatum js-disable" data-disabledid="${id}" type="text" value="${achternaam}" disabled /></td>
							<td class="c-users__category js-voornaam"><input class="c-users__input js-adduser  js-geboortedatum js-disable" data-disabledid="${id}" type="text" value="${voornaam}" disabled /></td>
							<td class="c-users__category js-mail"><input class="c-users__input js-adduser  js-geboortedatum js-disable" data-disabledid="${id}" type="text" value="${mail}" disabled /></td>
							<td class="c-users__category ">
								<button id="js-expandid${id}" class="c-users__expandbutton js-expand " data-id="${id}">
									<svg id="${id}" class="c-users__expandicon js-expandbutton js-expandbutton${id}" viewBox="0 0 24 24">
										<path fill="currentColor" d="M7,10L12,15L17,10H7Z" />
									</svg>
								</button>
							</td>
						</tr>
						</table>`;
					}

					getElement.innerHTML = htmlString;
					listenToGoBack();
				}
 
				const htmlOption1 = `
				<option value="ja" selected class="c-users__option">ja</option>
				<option value="nee" class="c-users__option">nee</option>
				`;
				const htmlOption2 = `
				<option value="ja" class="c-users__option">ja</option>
				<option value="nee" selected class="c-users__option">nee</option>
				`;

				// htmlstrings for sex
				const htmlOptionSex1 = `
				<option value="0" selected class="c-users__option">Man</option>
				<option value="1" class="c-users__option">Vrouw</option>
				<option value="2"  class="c-users__option">Non-binair</option>
				`;
				const htmlOptionSex2 = `
				<option value="0" class="c-users__option">Man</option>
				<option value="1" selected class="c-users__option">Vrouw</option>
				<option value="2"  class="c-users__option">Non-binair</option>
				`;
				const htmlOptionSex3 = `
				<option value="0" class="c-users__option">Man</option>
				<option value="1"  class="c-users__option">Vrouw</option>
				<option value="2" selected class="c-users__option">Non-binair</option>
				`;

				for (const user of users) {
					const uid = user.UID;

					const nieuwsbriefSelector = document.querySelector(`[nieuwsbrief-id='${uid}']`);
					// console.log(nieuwsbriefSelector.getAttribute(`value`));
					if (nieuwsbriefSelector.getAttribute(`value`) == 0) {
						nieuwsbriefSelector.innerHTML = htmlOption2;
					} else {
						nieuwsbriefSelector.innerHTML = htmlOption1;
					}

					const reclameSelectors = document.querySelector(`[reclame-id='${uid}']`);
					// console.log(reclameSelectors.getAttribute(`value`));
					if (reclameSelectors.getAttribute(`value`) == 0) {
						reclameSelectors.innerHTML = htmlOption2;
					} else {
						reclameSelectors.innerHTML = htmlOption1;
					}

					const adminSelector = document.querySelector(`[admin-id='${uid}']`);
					// console.log(adminSelector.getAttribute(`value`));
					if (adminSelector.getAttribute(`value`) == 0) {
						adminSelector.innerHTML = htmlOption2;
					} else {
						adminSelector.innerHTML = htmlOption1;
					}

					const sexSelector = document.querySelector(`[sex-id='${uid}']`);
					// console.log(sexSelector.getAttribute(`value`));
					if (sexSelector.getAttribute(`value`) == 0) {
						sexSelector.innerHTML = htmlOptionSex1;
					} else if (sexSelector.getAttribute(`value`) == 1) {
						sexSelector.innerHTML = htmlOptionSex2;
					} else {
						sexSelector.innerHTML = htmlOptionSex3;
					}
				}
			});
		});
};

const listenToGoBack = function () {
	const goBackButton = document.querySelector(".js-goback");
	goBackButton.classList.remove("u-hidden");
	goBackButton.addEventListener("click", function () {
		location.reload();
	});
};

const accordeonUsers = function () {
	// de init

	if (document.getElementById("menu")) {
		loadJson();
		setTimeout(searchBar, 1000);
	} else {
		console.log("no menu");
	}
};

document.addEventListener("DOMContentLoaded", accordeonUsers());
