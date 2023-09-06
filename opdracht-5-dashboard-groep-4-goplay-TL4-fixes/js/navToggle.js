"use strict";

const togglecontent = function(){
    const content = document.querySelector('.c-mobilenav__content')

    content.classList.toggle('u-hidden');

};


const lisentonav = function(){
    const nav = document.querySelector('.js-togglenav');

    nav.addEventListener("click", function() {togglecontent()})
   
 
 };


  document.addEventListener("DOMContentLoaded", lisentonav());