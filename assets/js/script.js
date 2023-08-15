/*================================= MENU SHOW Y HIDDEN ==================================*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*========== MENU SHOW ========== */
/*Validate if constant exist */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*========== MENU HIDDEN ========== */
/*Validate if constant exist */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')   
    })
}

/*================================= REMOVE MENU MOBILE ==================================*/
const navlink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    //When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navlink.forEach(n => n.addEventListener('click', linkAction))



/*================================= REMOVE MENU MOBILE ==================================*/
const skillsContent = document.getElementsByClassName('skills__content');
const skillsHeader = document.querySelectorAll('.skills__header');

function toggleSkills() {
    const itemClass = this.parentNode.classList;

    for (let i = 0; i < skillsContent.length; i++) {
        if (skillsContent[i] !== this.parentNode) {
            skillsContent[i].classList.add('skills__close');
            skillsContent[i].classList.remove('skills__open');
        }
    }

    if (itemClass.contains('skills__close')) {
        itemClass.remove('skills__close');
        itemClass.add('skills__open');
    } else {
        itemClass.remove('skills__open');
        itemClass.add('skills__close');
    }
}

skillsHeader.forEach((el) => el.addEventListener('click', toggleSkills));

/*================================= SERVICES MODAL ==================================*/


const modalViews = document.querySelectorAll('.services__modal'),
    modalBtns = document.querySelectorAll('.services__button'),
    modalCloses = document.querySelectorAll('.services__modal-close')

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () => {
        modal(i)
    })
})

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal')
        })
    })
})

/*==================== PORTFOLIO SWIPER  ====================*/
let swiperPortfolio = new Swiper(".portfolio__container", {
    cssMode: true,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

/*==================== TESTIMONIAL ====================*/


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll("section[id]");

function scrollTracker() {
    const currentYScroll = window.scrollY;

    sections.forEach((section) => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 50;
        const id = section.getAttribute("id");
        const currentNavLink = document.querySelector(`.nav__menu a[href*="#${id}"]`);
        if (currentYScroll > sectionTop && currentYScroll <= sectionTop + sectionHeight) {
            currentNavLink.classList.add("active-link");
        } else {
            currentNavLink.classList.remove("active-link");
        }
    });
}

window.addEventListener("scroll", scrollTracker);


/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader() {
    const nav = document.getElementById("header");
    if (this.scrollY >= 10) nav.classList.add("scroll-header");
    else nav.classList.remove("scroll-header");
}

window.addEventListener("scroll", scrollHeader);


/*==================== SHOW SCROLL UP ====================*/ 
function scrollUp() {
    const scrollUp = document.getElementById("scrollup");
    if (this.scrollY >= 350) scrollUp.classList.add("show-scroll");
    else scrollUp.classList.remove("show-scroll");
}

window.addEventListener("scroll", scrollUp);



/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const sunIcon = "uil-sun";
let theme = localStorage.getItem("alexa-theme");

if (theme) {
    document.body.classList[theme === "dark" ? "add" : "remove"](darkTheme);
    themeButton.classList[theme === "dark" ? "add" : "remove"](sunIcon);
}

themeButton.addEventListener("click", function () {
    this.classList.toggle(sunIcon);
    document.body.classList.toggle(darkTheme);

    theme = document.body.classList.contains(darkTheme) ? "dark" : "light";
    localStorage.setItem("alexa-theme", theme);
});



// script.js
function enlargeImage(event) {
    // Get the clicked image
    const clickedImage = event.target;

    // Create a new image element to display the enlarged version
    const enlargedImage = new Image();
    enlargedImage.src = clickedImage.src;
    enlargedImage.classList.add("enlarged-image");

    // Create a close button (x) for the enlarged image
    const closeButton = document.createElement("span");
    closeButton.classList.add("close-button");
    closeButton.innerText = "x";

    // Create a container element to hold the enlarged image and the close button
    const imageContainer = document.createElement("div");
    imageContainer.classList.add("enlarged-image-container");
    imageContainer.appendChild(enlargedImage);
    imageContainer.appendChild(closeButton);

    // Add the container to the body
    document.body.appendChild(imageContainer);

    // Function to close the enlarged image
    function closeEnlargedImage() {
        document.body.removeChild(imageContainer);
    }

    // Add a click event to the enlarged image to close it
    enlargedImage.addEventListener("click", closeEnlargedImage);

    // Add a click event to the close button to close the image
    closeButton.addEventListener("click", closeEnlargedImage);
}

// Add a click event to all images with the class "portfolio__img"
const images = document.querySelectorAll(".portfolio__img");
images.forEach((image) => {
    image.addEventListener("click", enlargeImage);
});
