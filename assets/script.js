//Selectors

let hamburger = document.querySelector('.fa-bars');
let times = document.querySelector('.fa-times');
let menu = document.querySelector('nav');
let body = document.getElementById('site-body');
let navList = document.querySelector('.nav-list');
let homeBtns = document.querySelectorAll('.home-btn');
let home = document.querySelector('.home-section');
let about = document.querySelector('.about-section');
let proj = document.querySelector('.project-section');
let connect = document.querySelector('.connect-section');
let hello = document.getElementById('hello');
let aboutMe = document.getElementById('aboutMe');
let projects = document.getElementById('projects');
let connection = document.getElementById('connect');


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
            connect.classList.add('hidden');
            connection.classList.add('hidden');
            break;
        case 'about':
            about.classList.remove('hidden');
            aboutMe.classList.remove('hidden');
            home.classList.add('hidden');
            hello.classList.add('hidden');
            proj.classList.add('hidden');
            projects.classList.add('hidden');
            connect.classList.add('hidden');
            connection.classList.add('hidden');
            break;
        case 'projects':
            proj.classList.remove('hidden');
            projects.classList.remove('hidden');
            home.classList.add('hidden');
            hello.classList.add('hidden');
            about.classList.add('hidden');
            aboutMe.classList.add('hidden');
            connect.classList.add('hidden');
            connection.classList.add('hidden');
            break;
        case 'connect':
            connect.classList.remove('hidden');
            connection.classList.remove('hidden');
            home.classList.add('hidden');
            hello.classList.add('hidden');
            about.classList.add('hidden');
            aboutMe.classList.add('hidden');
            proj.classList.add('hidden');
            projects.classList.add('hidden');
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

homeBtns[1].addEventListener('click',() => {
    connect.classList.remove('hidden');
    connection.classList.remove('hidden');
    home.classList.add('hidden');
    hello.classList.add('hidden');
});