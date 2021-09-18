//Selectors

/* let menuBtn = document.querySelector('.menu-btn'); */
let hamburger = document.querySelector('.fa-bars');
let times = document.querySelector('.fa-times');
let menu = document.querySelector('nav');
let body = document.getElementById('site-body');

//Event Listeners

hamburger.addEventListener('click',function() {
    menu.classList.remove('off');
    body.style.overflow = 'hidden';
});

times.addEventListener('click', function() {
    menu.classList.add('off');
    body.style.overflow = 'visible';
})