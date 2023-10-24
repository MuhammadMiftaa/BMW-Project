// NAVSCROLL
let prevScrollPos = window.pageYOffset;
const navbarDiv = document.querySelector('header');

window.onscroll = function () {
    const currentScrollPos = window.pageYOffset;
    
    if (prevScrollPos > currentScrollPos) {
        navbarDiv.style.top = "0";
    } else {
        navbarDiv.style.top = "-80px";
    }
    
    prevScrollPos = currentScrollPos;
};
// NAVSCROLL

// DARKMODE
const body = document.body;
const header = document.querySelector('header');
const navbar = document.querySelector('.navbar')
const navbarA = document.querySelectorAll('.navbar a');
const navbarEnd = document.querySelector('.navbar-end h4');
const navbarEndIcon = document.querySelector('a.darkmode');
const menuIcon = document.getElementById('menu');
const historySection = document.querySelector('.history');
const sliderimg = document.querySelectorAll('.slider img');
const inovationTech = document.querySelector('.inovation-tech');
const inovationCar = document.querySelector('.inovation-car');
const inovationCar2 = document.querySelector('.inovation-car img');
const socials = document.querySelector('.credit a');
const footer = document.querySelector('footer');
const darkModeAlert = document.getElementById('dark-mode-alert');
const lightModeAlert = document.getElementById('light-mode-alert');

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('menu')){
        navbar.classList.toggle('active');
        e.preventDefault();
    }
    if (e.target.classList.contains('darkmode')) {
        
        if (!document.body.classList.contains('dark-mode')) {
            darkModeAlert.classList.toggle('show')
            setTimeout(() => {
                darkModeAlert.classList.remove('show');
            }, 1000)
        } else {
            lightModeAlert.classList.toggle('show')
            setTimeout(() => {
                lightModeAlert.classList.remove('show');
            }, 1000)
        }
        body.classList.toggle('dark-mode');
        header.classList.toggle('dark-mode');
        navbar.classList.toggle('dark-mode');
        navbarA.forEach((a) => {
            a.classList.toggle('dark-mode');
        })
        navbarEnd.classList.toggle('dark-mode');
        navbarEndIcon.classList.toggle('dark-mode');
        menuIcon.classList.toggle('dark-mode');
        historySection.classList.toggle('dark-mode');
        sliderimg[0].classList.toggle('dark-mode');
        sliderimg[1].classList.toggle('dark-mode');
        sliderimg[2].classList.toggle('dark-mode');
        sliderimg[3].classList.toggle('dark-mode');
        inovationTech.classList.toggle('dark-mode');
        inovationCar.classList.toggle('dark-mode');
        inovationCar2.classList.toggle('dark-mode');
        socials.classList.toggle('dark-mode');
        footer.classList.toggle('dark-mode');

        e.preventDefault();
    } else if (!e.target.classList.contains('navbar') && !e.target.classList.contains('menu')){
        navbar.classList.remove('active')
    }
});
// DARKMODE

// MODELSLIDER
const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.slider img');

let currentIndex = 0;
let interval;

function startSlide() {
    interval = setInterval(nextSlide, 2000);
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    updateSlider();
}

function updateSlider() {
    const translateX = -currentIndex * 102;
    slider.style.transform = `translateX(${translateX}%)`;
}

startSlide();

slider.addEventListener('mouseenter', () => {
    clearInterval(interval);
});

slider.addEventListener('mouseleave', startSlide);

const modalBoxes = document.querySelectorAll('.modal');
const modalContainer = document.querySelector('.modal-container');
document.addEventListener('click', function (e) {
    modalBoxes.forEach(function (modalBox, index) {
        if (e.target.classList.contains('product-detail') && (e.target.parentElement.classList.contains(index + 1) || e.target.parentElement.parentElement.classList.contains(index + 1))) {
            modalBox.classList.add('active');
            e.preventDefault();
        }
    });
    if (e.target.classList.contains('modal') || e.target.classList.contains('x')) {
        modalBoxes.forEach(function (modalBox) {
            modalBox.classList.remove('active')
            e.preventDefault();
        });
    }
})
// MODELSLIDER
