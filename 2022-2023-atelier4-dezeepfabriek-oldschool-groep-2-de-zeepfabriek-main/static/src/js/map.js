let map, layerGroupLocation, layerGroupWC, layerGroupInfo;
let markers = [];

const showMap = function () {
	var map = L.map('map').setView([51.0538286, 3.7250121], 9);
	L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
		maxZoom: 19,
		attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
	}).addTo(map);
	layerGroupLocation = L.layerGroup().addTo(map);
	layerGroupInfo = L.layerGroup().addTo(map);
	console.log('showMap is active');
};
// const showMarker = function(){
//     var marker1 = L.marker1([51.0538286, 3.7250121]).addTo(map);
// }

const showMarker = function () {
	let marker = L.marker([51.2079425, 3.2258387]).addTo(layerGroupLocation);
	marker.bindPopup(` <div class="c-contact__marker"> <h3>Brugge</h3>
    <hr>
    <p>Wollestraat 21,
        8000 Brugge
        <br>
        050 61 52 71
    </p>
<img src="${template_directory_uri}/img/Bubbles-Locatie2-8-2075.jpg" alt=""></div>`);
	markers.push(marker);
};
const showMarker2 = function () {
	let marker = L.marker([51.0565454, 3.7218381]).addTo(layerGroupLocation);
	marker.bindPopup(`<div class="c-contact__marker">  <h3>Gent</h3>   <hr>
    <p>Kleine Vismarkt 4,
        9000 Gent
        <br>
        093 34 60 34
    </p>
<img src="${template_directory_uri}/img/Gent.jpg" alt=""></div>`);
	markers.push(marker);
};
const showMarker3 = function () {
	let marker = L.marker([51.2172808, 4.4037894]).addTo(layerGroupLocation);
	marker.bindPopup(`  <div class="c-contact__marker">    <h3>Antwerpen</h3>
    <hr>
    <p>Lombardenvest 78,
        2000 Antwerpen
        <br>
        025 03 80 83
    </p>
    
<img src="${template_directory_uri}/img/Bubbles-Locatie3.jpg" alt=""></div>`);
	markers.push(marker);
};
const showMarker4 = function () {
	let marker = L.marker([50.8466, 4.3528]).addTo(layerGroupLocation);
	marker.bindPopup(`              <div class="c-contact__marker">           <h3>Brussel</h3>
    <hr>
    <p>Grasmarktstraat 34,
        1000 Brussel
        <br>
        025 03 80 83
    </p>
    <hr>
    
<img src="${template_directory_uri}/img/Bubbles-Locatie1.png" alt=""></div>`);
	markers.push(marker);
};
const mapInit = function () {
	const contactPage = document.querySelector('.js-contact-page');
	if (contactPage) {
		console.log('on contact page');
		showMap();
		showMarker();
		showMarker2();
		showMarker3();
		showMarker4();
	} else {
		console.log('not on contact page');
	}
};

document.addEventListener('DOMContentLoaded', mapInit);
