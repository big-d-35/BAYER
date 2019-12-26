const first = document.getElementById('wrapper');
const popup2 = document.getElementById('popup-grishin');
const popup1 = document.getElementById('popup-medvedev');
const popup3 = document.getElementById('popup-zayceva');
const popup4 = document.getElementById('popup-sheih');
const buttonPopup1 = document.getElementById('button-popup1');
const buttonPopup2 = document.getElementById('button-popup2');
const buttonPopup3 = document.getElementById('button-popup-zayceva');
const buttonPopup4 = document.getElementById('button-popup-sheih');
const buttonPopup5 = document.getElementById('button-popup-zayceva2');
const buttonPopup6 = document.getElementById('button-popup-sheih2');
const buttonClosePopup1 = document.getElementById('close-popup2');
const buttonClosePopup2 = document.getElementById('close-popup1');
const buttonClosePopup3 = document.getElementById('close-popup3');
const buttonClosePopup4 = document.getElementById('close-popup4');


buttonPopup1.onclick = function(){
    popup1.classList.add('speaker-active');
};

buttonPopup2.onclick = function(){
    popup2.classList.add('speaker-active');
};

buttonClosePopup1.onclick = function(){
    popup1.classList.remove('speaker-active');
};

popup1.onclick = function(){
    popup1.classList.remove('speaker-active');
};

buttonClosePopup2.onclick = function(){
    popup2.classList.remove('speaker-active');
};

popup2.onclick = function(){
    popup2.classList.remove('speaker-active');
};

buttonPopup3.onclick = function(){
    popup3.classList.add('speaker-active');
};

buttonPopup4.onclick = function(){
    popup4.classList.add('speaker-active');
};

buttonClosePopup3.onclick = function(){
    popup3.classList.remove('speaker-active');
};

popup3.onclick = function(){
    popup3.classList.remove('speaker-active');
};

buttonClosePopup4.onclick = function(){
    popup4.classList.remove('speaker-active');
};

popup4.onclick = function(){
    popup4.classList.remove('speaker-active');
};

buttonPopup5.onclick = function(){
    popup3.classList.add('speaker-active');
};

buttonPopup6.onclick = function(){
    popup4.classList.add('speaker-active');
};


const headerButtonMobile = document.getElementById('header__button-mobile');
const headerPopupMenuMobile = document.getElementById('header-mobile-menu-popup');


headerButtonMobile.onclick = function(){
    headerButtonMobile.classList.toggle('header__button-active');
    headerPopupMenuMobile.classList.toggle('header__mlinks-active');
};

headerPopupMenuMobile.onclick = function () {
    headerPopupMenuMobile.classList.remove('header__mlinks-active');
};


const text1 = document.getElementById('text1');
const buttonText1More = document.getElementById('button-text1-more');
const buttonText1Close = document.getElementById('button-text1-close');

buttonText1More.onclick = function(){
    text1.classList.toggle('text1__info-active');
    buttonText1More.classList.toggle('button-inactive');
    buttonText1Close.classList.toggle('button-inactive');
};

buttonText1Close.onclick = function(){
    text1.classList.toggle('text1__info-active');
    buttonText1More.classList.toggle('button-inactive');
    buttonText1Close.classList.toggle('button-inactive');
};

//const optionsBlock = document.getElementById('hotels-options-mobile');
const programButtons = document.getElementById('program-buttons');
const dateTabs = document.getElementsByClassName('programm__block');
const dateActive = document.getElementsByClassName('programm__button-active');

//Переключаем табы
programButtons.addEventListener('click', function (event) {
        let target = event.target.closest('button');
        let targetButton = event.target.closest('[data-id]');
        
        
        let targetButtonDate = target.querySelector('.programm__button-date');
        let targetButtonMonth = target.querySelector('.programm__button-month');
        let targetButtonLine = target.querySelector('.programm__button-line');
        
    
        let targetButtonDateActive = programButtons.querySelector('.programm__button-active-date');
        let targetButtonMonthActive = programButtons.querySelector('.programm__button-active-month');
        let targetButtonLineActive = programButtons.querySelector('.programm__button-active-line');
        targetButtonDateActive.classList.remove('programm__button-active-date');
        targetButtonMonthActive.classList.remove('programm__button-active-month');
        targetButtonLineActive.classList.remove('programm__button-active-line');
        
    
        targetButtonDateActive.classList.remove('programm__button-date-active');    
        
    
        for (i = 0; i < dateActive.length; i++) {
            dateActive[i].classList.remove('programm__button-active');
        };

        for (i = 0; i < dateTabs.length; i++) {

            if (dateTabs[i].dataset.id === targetButton.dataset.id) {

                dateTabs[i].classList.add('programm__block-active')
            } else {
                dateTabs[i].classList.remove('programm__block-active');
            }
        }




        target.classList.add('programm__button-active');
        
        targetButtonDate.classList.add('programm__button-active-date');
        targetButtonMonth.classList.add('programm__button-active-month');
        targetButtonLine.classList.add('programm__button-active-line');


    });
   
//mobile


const programButtonsMobile = document.getElementById('programm-buttons-mobile-all');
const dateActiveMobile = document.getElementsByClassName('programm__button-mobile1-active');
const dateInActiveMobile = document.getElementsByClassName('programm__button-mobile1');
const dateInActiveMobile2 = document.getElementsByClassName('programm__button-mobile2');
const buttonMobile1 = document.getElementById('programm-buttons-mobile-one');

//Переключаем табы
programButtonsMobile.addEventListener('click', function (event) {
        let target = event.target.closest('button');
        let targetButton = event.target.closest('[data-id]');
        
        let inactiveButton = programButtonsMobile.querySelector('.programm__button-mobile2-inactive');
        
        let activeFirstButton = buttonMobile1.querySelector('.programm__button-mobile1-active');
        
        
        
        target.classList.add('programm__button-mobile2-inactive');
        inactiveButton.classList.remove('programm__button-mobile2-inactive');
        
        
        
    for (i = 0; i < dateInActiveMobile.length; i++) {

            if (dateInActiveMobile[i].dataset.id === targetButton.dataset.id) {

                dateInActiveMobile[i].classList.add('programm__button-mobile1-active')
            } else {
                dateInActiveMobile[i].classList.remove('programm__button-mobile1-active');
            }
        }
        
        //console.log(buttonMobile1);
    
          
         
    
        

        for (i = 0; i < dateTabs.length; i++) {

            if (dateTabs[i].dataset.id === targetButton.dataset.id) {

                dateTabs[i].classList.add('programm__block-active')
            } else {
                dateTabs[i].classList.remove('programm__block-active');
            }
        }




        
        
        
        


    });



