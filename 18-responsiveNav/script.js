// const responsiveMenuBtn = document.getElementById('responsiveMenuBtn')

// const navBarlinks = document.querySelector('.navbar-links')


// responsiveMenuBtn.addEventListener('click' , () =>{
//     navBarlinks.classList.toggle('open');
//     responsiveMenuBtn.classList.toggle('open');

// });




document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.getElementById('responsiveMenuBtn');
    const navbar = document.querySelector('.navbar');
    const navbarLinks = document.querySelector('.navbar-links');

    menuButton.addEventListener('click', function() {
        navbar.classList.toggle('open');
        navbarLinks.classList.toggle('open');
        menuButton.classList.toggle('open');
    });
});

