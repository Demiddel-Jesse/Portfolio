"use strict";



const getUsers = function () {

	fetch("../json/users.json")
		.then((response) => response.json())
		.then((json) => {
			const users = json.users;
			// console.log(users);

			
			return users;
		});
};

const userloading = function(){
	
}

document.addEventListener('DOMContentLoaded',userloading);
