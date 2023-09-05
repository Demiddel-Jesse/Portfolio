'use strict'

function InitPages() {
    if(document.querySelector(".js-index")){
        handleData(cardInit)
    } else if(document.querySelector(".js-detail")){
        handleData(detailInit)
    } else {
        console.log("error no page")
    }
}

document.addEventListener('DOMContentLoaded', InitPages());