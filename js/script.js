const burger = document.querySelector('.burger');
const menu = document.querySelector('.nav');
const overlay = document.querySelector('.header-overlay');
const body = document.querySelector('body');

burger.addEventListener('click', () => {
    toggle();
})

body.addEventListener('click', e => {
    if(e.target.classList.contains('header-overlay')) toggle();
})

function toggle() {
    menu.classList.toggle('show');
    burger.classList.toggle('show');
    overlay.classList.toggle('show');
    body.classList.toggle('stop-scroll');
}

