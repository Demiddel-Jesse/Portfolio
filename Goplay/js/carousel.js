'use strict';

const addCarouselData = function(selection){
    let htmlStringRecomended = ``;
    console.log(selection)


    let getCarouselRecomended = document.querySelectorAll(`.js-Carousel${selection}`).forEach(function(getCarouselRecomended) {

      fetch("../json/tvshows.json")
    .then(function(resp){
      return resp.json();
    })

    
    .then((data) => {
      let sliced = []

      if (selection === 'Aangeboden'){
          sliced = [0,20]
      }else if(selection === 'Recent')
      {
        sliced = [21,41]
    }else if(selection === 'Favoriet')
    {
      sliced = [42,62]
  }else if(selection === 'Exclusief')
  {
    sliced = [63,83]
}else if(selection === 'Show')
{
  sliced = [84,104]
}



      const shows = data.slice(sliced[0],sliced[1])

      for (let show of shows) {
        
        htmlStringRecomended = `<img src="${show.thumbnailImage}" alt="${show.title}" class="c-carousel__item">`

        getCarouselRecomended.innerHTML += htmlStringRecomended;
      }
    })
    });
    

    
  
    



    
}

const createCarouselFunc = function(){

  const carousel = document.querySelector('.c-startscherm')

carousel.addEventListener("click", e => {
  e.preventDefault() 
    let handle
    if (e.target.matches(".handle")) {
      handle = e.target
    } else {
      handle = e.target.closest(".handle")
    }
    if (handle != null) onHandleClick(handle)
  })
  
  const throttleProgressBar = throttle(() => {
    document.querySelectorAll(".progress-bar").forEach(calculateProgressBar)
  }, 250)
  window.addEventListener("mousemove", throttleProgressBar)
  
  document.querySelectorAll(".progress-bar").forEach(calculateProgressBar)
  
  function calculateProgressBar(progressBar) {
    progressBar.innerHTML = ""
    const slider = progressBar.closest(".row").querySelector(".slider")
    const itemCount = slider.children.length
    const itemsPerScreen = parseInt(
      getComputedStyle(slider).getPropertyValue("--items-per-screen")
    )
    let sliderIndex = parseInt(
      getComputedStyle(slider).getPropertyValue("--slider-index")
    )
    const progressBarItemCount = Math.ceil(itemCount / itemsPerScreen)
  
    if (sliderIndex >= progressBarItemCount) {
      slider.style.setProperty("--slider-index", progressBarItemCount - 1)
      sliderIndex = progressBarItemCount - 1
    }
  
    for (let i = 0; i < progressBarItemCount; i++) {
      const barItem = document.createElement("div")
      barItem.classList.add("progress-item")
      if (i === sliderIndex) {
        barItem.classList.add("active")
      }
      progressBar.append(barItem)
    }
  }
  
  function onHandleClick(handle) {
    const progressBar = handle.closest(".row").querySelector(".progress-bar")
    const slider = handle.closest(".container").querySelector(".slider")
    const sliderIndex = parseInt(
      getComputedStyle(slider).getPropertyValue("--slider-index")
    )
    const progressBarItemCount = progressBar.children.length
    if (handle.classList.contains("left-handle")) {
      if (sliderIndex - 1 < 0) {
        slider.style.setProperty("--slider-index", progressBarItemCount - 1)
        progressBar.children[sliderIndex].classList.remove("active")
        progressBar.children[progressBarItemCount - 1].classList.add("active")
      } else {
        slider.style.setProperty("--slider-index", sliderIndex - 1)
        progressBar.children[sliderIndex].classList.remove("active")
        progressBar.children[sliderIndex - 1].classList.add("active")
      }
    }
  
    if (handle.classList.contains("right-handle")) {
      if (sliderIndex + 1 >= progressBarItemCount) {
        slider.style.setProperty("--slider-index", 0)
        progressBar.children[sliderIndex].classList.remove("active")
        progressBar.children[0].classList.add("active")
      } else {
        slider.style.setProperty("--slider-index", sliderIndex + 1)
        progressBar.children[sliderIndex].classList.remove("active")
        progressBar.children[sliderIndex + 1].classList.add("active")
      }
    }
  }
  
  function throttle(cb, delay = 1000) {
    let shouldWait = false
    let waitingArgs
    const timeoutFunc = () => {
      if (waitingArgs == null) {
        shouldWait = false
      } else {
        cb(...waitingArgs)
        waitingArgs = null
        setTimeout(timeoutFunc, delay)
      }
    }
  
    return (...args) => {
      if (shouldWait) {
        waitingArgs = args
        return
      }
  
      cb(...args)
      shouldWait = true
      setTimeout(timeoutFunc, delay)
    }
  }
  addCarouselData();
}

  const checkCarousel = function () {
	if (document.querySelector('.js-page-startscherm')) {
       
		createCarouselFunc();
	} else {
		console.log('no Carousel here');
	}
};

  document.addEventListener('DOMContentLoaded', checkCarousel());