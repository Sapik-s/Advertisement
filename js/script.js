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
	
	$('.slider__items').slick({
		// Бесконечно будет крутиться или нет
		infinite: true,
		// Скорость
		speed: 10,
		// То сколько слайдов будет показываться
		slidesToShow: 1,
		// То, сколько слайдов будет прокручиваться
		slidesToScroll: 1,
		fade: false,
  		cssEase: 'linear',
        prevArrow: '<button class="slider__btn-left"><img src="img/slider/arrow-left.svg" alt="arrow-left" class="slider__btn-img"></button>',
		nextArrow: '<button class="slider__btn-right"><img src="img/slider/arrow-right.svg" alt="arrow-right" class="slider__btn-img"></button>'
	});

	// function hoverNav() {
	// 	let list = document.querySelectorAll('.nav__list li a'),
	// 	subList = document.querySelectorAll('.nav__sub-list'),
	// 	style = subList.style.cssText = `display: none;`;

	// 	if (subList == style) {
	// 		console.log('1');
	// 	} else {
	// 		console.log('2');
	// 	}
	// }

	// hoverNav();
});