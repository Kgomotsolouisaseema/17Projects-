const responsiveMenuBtn = document.getElementById('responsiveMenuBtn')

const navBarlinks = document.querySelector('.navbar-links')


responsiveMenuBtn.addEventListener('click' , () =>{
    navBarlinks.classList.toggle('open');
    responsiveMenuBtn.classList.toggle('open');

});

