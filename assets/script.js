//Selectors

let menuToggle = document.querySelector('.menu-toggle');
let navEl = document.querySelector('nav');
let hamburger = document.querySelector('.fa-bars');
let xEl = document.querySelector('.fa-times');

//Event listeners

menuToggle.addEventListener('click',function() {
    navEl.classList.toggle('on-off');
    hamburger.classList.toggle('on-off');
    xEl.classList.toggle('on-off');
});