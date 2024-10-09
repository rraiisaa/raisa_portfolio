// Toogle Navbar
let menuIcon = document.querySelector('#menu-icon') //let untuk membuat variable
let navbar = document.querySelector('.navbar')

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}
window.onscroll = () => {
    // remove toogle icon
    menuIcon.classList.remove('bx-x')
    navbar.classList.remove('active')
}
//typed js
const typed = new Typed('.multiple-text' , {
    strings: ['Web Development', 'UI/UX Designer', 'Game Development', 'Android Development', 'Game Development', '2D Animator'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay:100,
    loop: true
});

// Function to detect if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom >= 0;
}


