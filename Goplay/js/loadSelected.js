'use strict';


const addBlocks = function(selection){

  setTimeout(() => {
    const container = document.querySelector('.c-startscherm__container');
      let oldBlock = ``;
       oldBlock = container.innerHTML;

      
      let newBlock = ``;

      


     newBlock = `<div class="c-draggable" draggable="true">
                
     <div class="c-input"> <h2><input type="text" value="${selection}"></h2>

      <button class="c-users__delete js-sub-delete" id="js-block-delete">
        <svg style="width: 24px; height: 24px" class="c-users__deletesvg" viewBox="0 0 24 24">
          <path fill="currentColor" class="c-users__deletepath" d="M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8.46,11.88L9.87,10.47L12,12.59L14.12,10.47L15.53,11.88L13.41,14L15.53,16.12L14.12,17.53L12,15.41L9.88,17.53L8.47,16.12L10.59,14L8.46,11.88M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z"></path>
        </svg>
      </button>
      
      <img src="/assets/svg/movable.svg" alt="move_item" class="c-input__icon">

      
    
    </div>
 
        <div class="row">
        <div class="container">
            <button class="handle left-handle">
              <div class="text">&#8249;</div>
            </button>
            <div class="progress-bar"></div>
            <div class="slider c-carousel js-Carousel${selection}">
              <img src="./assets/img/addNew.png" alt="addNew" class="c-carousel__item">
              
            </div>
            <button class="handle right-handle">
              <div class="text">&#8250;</div>
            </button>
            
          </div>
        </div>
    </div>`

   

   container.innerHTML = ``;
   container.innerHTML = newBlock+oldBlock;

   addCarouselData(selection) 
   loadStartschermFuncties()
  }, 10);
    
     
}


const listenToButton = function(){
       const addButton = document.querySelector('.c-addButton')
       
       addButton.addEventListener('click',function(){
        let selected = document.querySelector('.c-selector').value
        addBlocks(selected)
        console.log('clicked')
       } )
}

        

const checkstartscherm = function () {
        let i = 0;

	if (document.querySelector('.c-startscherm')) {
        
        listenToButton();
	} else {
		console.log('no startscherm here');
	}

    
}

document.addEventListener('DOMContentLoaded',checkstartscherm() );