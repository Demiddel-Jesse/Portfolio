"use strict";

const togglemodal = function(){
    console.log('logged out');

};


const lisentologout = function(){
    const logout = document.querySelector('.js-logout');
 
   if (logout){
    logout.addEventListener("click", togglemodal);
   }
   else{
    console.log('no existing logout')
   }
 };


  document.addEventListener("DOMContentLoaded", lisentologout());