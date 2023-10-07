// DARKMODE
const body = document.body;
const header = document.querySelector('header');
const navbar = document.querySelector('.navbar')
const navbarA = document.querySelectorAll('.navbar a');
const navbarEnd = document.querySelector('.navbar-end h4');
const navbarEndIcon = document.querySelector('a.darkmode');
const menuIcon = document.getElementById('menu');
const historySection = document.querySelector('.history');
const modelSection = document.querySelector('.model');
const modelCardTitle = document.querySelectorAll('.model h3');
const modelCardText = document.querySelectorAll('.model p');
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
        modelSection.classList.toggle('dark-mode');
        modelCardTitle.forEach((a) => {
            a.classList.toggle('dark-mode')
        })
        modelCardText.forEach((a) => {
            a.classList.toggle('dark-mode')
        })
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

