//select the <nav> element and store it in navElement
const navElement = document.querySelector('nav')
//select all the <a> elements inside the <nav> element and store them in navBarlinks
const navBarLinks = navElement.querySelectorAll('a')
//select all <section> elements and store them in sectinElements
const sectionElements = document.querySelectorAll('section')


//Definding a funciton to remove the 'active ' class from all the naviation links 
const removeActiveLinks = () =>{
    //loop through each link and remove the 'active' class from its parent element
    navBarLinks.forEach(link => link.parentElement.classList.remove('active'))
};

//Defind a function to add the 'hidden' class to all sections
const hideSections = () =>{
    //loop through each section and add the 'hidden' class to it
    sectionElements.forEach(section => section.classList.add('hidden'))
};

//loop throught each navigation link 
navBarLinks.forEach(link => {
    //add a click event listner to each link 
    link.addEventListener('click', () => {
        //call the function to remove "active" class form all links
        removeActiveLinks();
        //call the function to hide sections
        hideSections();
        //add the 'active' class to the parent element of the clicked link
        link.parentElement.classList.add('active');
        //find the section corresponding to the clicked links href and store it in sectionElement
        const sectionElement = document.querySelector(link.hash);
        //Remove the 'hidden' class from the corresponding section 
        sectionElement.classList.remove('hidden');
    });
});
