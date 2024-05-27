//Select the <nav> element from the document and store it in the navElement
const navElement = document.querySelector('nav')

//select all <a> elements inside the <nav> element and store them in navbarlinks
const navbarLinks = navElement.querySelectorAll('a')

//method in javascript that helps you find the position and size of an element on a webpage 
//find the position of the top edge of the <nav> element relative to the viewport
const navPosition = navElement.getBoundingClientRect().top;


//add an event listenr to the window object that triggers whe user scrolls
window.addEventListener('scroll', ()=> {
    //get the current vertical sroll position of the window 
    const scrollPos = window.scrollY;
    //move the <nav> element vertically to match the current scroll position 
    navElement.style.top = scrollPos + 'px';

    //loop through each <a> element in navbarlinks 
    navbarLinks.forEach(link => {
        //find the section element that the links href points to (using the hash property)
        const sectionElement = document.querySelector(link.hash);
        //defind the offset value to adjust the activiation threshold 
        const offset = 10;

        //check if the current scroll posotion is withing the sectionc vertical range 
        if(scrollPos + offset> sectionElement.offsetTop && scrollPos + offset < sectionElement.offsetTop + sectionElement.offsetHeight){
           //if it is , add the 'active' class to the link
            link.classList.add('active');
        }else{
            //if not , remove the active cladd form the link 
            link.classList.remove('active');
        }

    })
});