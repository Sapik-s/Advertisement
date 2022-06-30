'use strict';

window.addEventListener('DOMContentLoaded', function() {
    //Бургер меню
    let burger = document.querySelector('#menu_checkbox'),
    burgerHidden = document.querySelector('.header__wrapper-burger');

    burger.addEventListener('click', (e) =>{
        
        if (burgerHidden.classList.contains('header__wrapper-burger')) {
            burgerHidden.classList.toggle('header__wrapper-burger_active');
        } 
        console.dir(burgerHidden);
    });
});