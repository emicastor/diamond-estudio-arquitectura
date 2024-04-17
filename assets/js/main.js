const btnMenu = document.getElementById('menu');
const iconHambur = document.getElementById('hambur');
const iconX = document.getElementById('close');
const menuAbierto = document.querySelector('.navbar-collapse.collapse.show');
const menuCerrado = document.querySelector('.navbar-collapse.collapse');
const navLink = document.querySelectorAll('.nav-link');

let bool = false;

btnMenu.addEventListener('click', () => {
    if (bool) {
        bool = false;
        iconX.classList.remove('d-block');
        iconX.classList.add('d-none');
        iconHambur.classList.remove('d-none');
        iconHambur.classList.add('d-block');
    } else {
        bool = true;
        iconHambur.classList.remove('d-block');
        iconHambur.classList.add('d-none');
        iconX.classList.remove('d-none');
        iconX.classList.add('d-block');
    }
})


const menuHambur = () => {
    if (bool) {
        bool = false;
        iconX.classList.remove('d-block');
        iconX.classList.add('d-none');
        iconHambur.classList.remove('d-none');
        iconHambur.classList.add('d-block');
    } else {
        bool = true;
        iconHambur.classList.remove('d-block');
        iconHambur.classList.add('d-none');
        iconX.classList.remove('d-none');
        iconX.classList.add('d-block');
    }
}

navLink.forEach(n => n.addEventListener('click', menuHambur));

const linkAction = () => {
    const navMenu = document.getElementById('collapsibleNavId');
    navMenu.classList.remove('show');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

// Swiper
const swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: 'true',
    grabCursor: true,
    breakpoints: {
        320: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    }
});