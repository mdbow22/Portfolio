//Selectors

/* let menuBtn = document.querySelector('.menu-btn'); */
let hamburger = document.querySelector('.fa-bars');
let times = document.querySelector('.fa-times');
let menu = document.querySelector('nav');
let body = document.getElementById('site-body');
let navList = document.querySelector('.nav-list');
let homeBtns = document.querySelectorAll('.home-btn');
let home = document.querySelector('.home-section');
let about = document.querySelector('.about-section');
let proj = document.querySelector('.project-section');
let hello = document.getElementById('hello');
let aboutMe = document.getElementById('aboutMe');
let projects = document.getElementById('projects');


//Event Listeners

hamburger.addEventListener('click',() => {
    menu.classList.remove('off');
    body.style.overflow = 'hidden';
    menu.style.opacity = '1';
    
});

times.addEventListener('click', () => {
    menu.classList.add('off');
    body.style.overflow = 'visible';
    setTimeout(() => menu.style.opacity = '0',600);
})

navList.addEventListener('click', (e) => {
    switch (e.target.dataset.target) {
        case 'home':
            home.classList.remove('hidden');
            hello.classList.remove('hidden');
            about.classList.add('hidden');
            aboutMe.classList.add('hidden');
            proj.classList.add('hidden');
            projects.classList.add('hidden');
            break;
        case 'about':
            about.classList.remove('hidden');
            aboutMe.classList.remove('hidden');
            home.classList.add('hidden');
            hello.classList.add('hidden');
            proj.classList.add('hidden');
            projects.classList.add('hidden');
            break;
        case 'projects':
            proj.classList.remove('hidden');
            projects.classList.remove('hidden');
            home.classList.add('hidden');
            hello.classList.add('hidden');
            about.classList.add('hidden');
            aboutMe.classList.add('hidden');
            break;
    }
    menu.classList.add('off');
    setTimeout(() => menu.style.opacity = '0',600);
    body.style.overflow = 'visible';
});

homeBtns[0].addEventListener('click',() => {
    about.classList.remove('hidden');
    aboutMe.classList.remove('hidden');
    home.classList.add('hidden');
    hello.classList.add('hidden');
});