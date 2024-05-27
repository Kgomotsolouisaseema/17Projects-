const navElement = document.querySelector('nav')
const navbarLinks = navElement.querySelectorAll('a')

//method in javascript that helps you find the position and size of an element on a webpage 
const navPosition = navElement.getBoundingClientRect().top;

window.addEventListener('scroll', ()=>{
    const scrollPos = window.screenY;
    navElement.style.top = scrollPos + 'px'
});