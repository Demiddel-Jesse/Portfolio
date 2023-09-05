'use strict'

function handleData(callbackFunctionName){
    fetch("../assets/json/projects.json")
    .then(res => res.json())
    .then(data => callbackFunctionName(data))
}