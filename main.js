'use strict';

// Make navbar transparent when it is on the top
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', ()=>{
    // console.log(window.scrollY);
    // console.log('navbarHeight: '+ navbarHeight);
    if(window.scrollY>navbarHeight) {
        navbar.classList.add('navbar--dark')
    } else {
        navbar.classList.remove('navbar--dark')
    }

    if(window.scrollY>navbarHeight+100) {
        Movehome.classList.add('navbar--dark')
    } else {
        Movehome.classList.remove('navbar--dark')
    }
});

// Move to home
const Movehome = document.querySelector('.arrow__button');
Movehome.addEventListener('click', ()=>{
    scrollIntoView('#home')
})

// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('ul.navbar__menu');
navbarMenu.addEventListener('click',(event)=>{
    const target = event.target;
    const link = target.dataset.link;
    if (link == null) {
        return;
    }

    console.log(event.target.dataset.link);
    scrollIntoView(link)
});

//  Handle click on "contact me" button on home
const contactMe = document.querySelector('.home__contact');
contactMe.addEventListener('click',()=>{
    scrollIntoView('#contact')
});

// Make home slowly fade to transparent as the window scrolls down
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll',()=>{
    home.style.opacity = 1 - window.scrollY / homeHeight;
});


// 스크롤 함수
function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior:"smooth"});    
}

