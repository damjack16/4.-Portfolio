// HAMBURGER AND MENU
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.menu');

const hamburgerClick = () => {
    hamburger.classList.toggle('hamburger--active');
    nav.classList.toggle('menu--active')
}

hamburger.addEventListener('click', hamburgerClick);

// SMOOTH SCROLL
scrollTo = (element) => {
    window.scroll({
        behavior: 'smooth',
        left: 0,
        top: element.offsetTop,
    })

}

document.querySelector(".menu__item--home").addEventListener('click', () => {
    scrollTo(document.getElementById("home"));
})

document.querySelector(".menu__item--about").addEventListener('click', () => {
    scrollTo(document.getElementById("about"));
})

document.querySelector(".menu__item--technologies").addEventListener('click', () => {
    scrollTo(document.getElementById("technologies"));
})

document.querySelector(".menu__item--projects").addEventListener('click', () => {
    scrollTo(document.getElementById("projects"));
})

document.querySelector(".menu__item--contact").addEventListener('click', () => {
    scrollTo(document.getElementById("contact"));
})

document.querySelector(".btn--contact").addEventListener('click', () => {
    scrollTo(document.getElementById("contact"));
})

// ARROW UP
document.querySelector(".fa-arrow-alt-circle-up").addEventListener('click', () => {
    scrollTo(document.getElementById("home"));
})

// VISIBLE ARROW AND SECTIONS
const visibleElements = () => {
    const arrow = document.querySelector('.fa-arrow-alt-circle-up');

    const windowHeight = window.innerHeight;
    const scrollValue = window.scrollY;
    // ABOUT SECTION
    const about = document.querySelector('.about');
    const aboutFromTop = about.offsetHeight;
    const aboutHeight = about.offsetHeight;

    // ARROW
    if (scrollValue > aboutFromTop + aboutHeight) {
        arrow.style.transform = "translateX(0)"
    } else {
        arrow.style.transform = "translateX(100vw)"
    }
}
window.addEventListener('scroll', visibleElements)