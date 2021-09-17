//Selectors

let menuBtn = document.querySelector('.menu-btn');
let hamburger = document.querySelector('.fa-bars');
let times = document.querySelector('.fa-times');

//Event Listeners

menuBtn.addEventListener('click',function() {
    hamburger.classList.toggle('off');
    times.classList.toggle('off');
});