//Define an array of testimonials containing objects with author details , texts and date 
const testimonials =[
    {
        author: {
            name: "Gabriela Maning",
            image: "assests//women1.jpg"
        },
        text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quibusdam dolor repudiandae soluta asperiores exercitationem? Sint iste quaerat aliquid temporibus? Quos ducimus nostrum ab modi rem eum debitis soluta fuga.',
        date:"26 May 2024"
    },
    {
        author: {
            name: "Kgomotso Seema",
            image: "assests//women2.jpg"
        },
        text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quibusdam dolor repudiandae soluta asperiores exercitationem? Sint iste quaerat aliquid temporibus? Quos ducimus nostrum ab modi rem eum debitis soluta fuga.',
        date:"29 May 2024"
    },
    {
        author: {
            name: "Lerato Modise",
            image: "assests//women3.jpg"
        },
        text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quibusdam dolor repudiandae soluta asperiores exercitationem? Sint iste quaerat aliquid temporibus? Quos ducimus nostrum ab modi rem eum debitis soluta fuga.',
        date:"27 May 2024"
    },
    {
        author: {
            name: "Keletso Marco",
            image: "assests//man1.jpg"
        },
        text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quibusdam dolor repudiandae soluta asperiores exercitationem? Sint iste quaerat aliquid temporibus? Quos ducimus nostrum ab modi rem eum debitis soluta fuga.',
        date:"27 May 2024"
    }
];

//get the container element by its ID
const constainerElement = document.getElementById('testimonials');

//FUNCTION TO CREATE 
const makeTestimonialCard= testimonial =>{
    return `<div class="testimonial-card">
    <img src='${testimonial.author.image}'>
    <h2>${testimonial.author.name}</h2>
    <p>${testimonial.text}</p>
    <date> Written on ${testimonial.date}</date>    
    </div> `
};

let currentTestimonial = 0;



const nextTestimonial = () =>{
    if(currentTestimonial < testimonials.length -1){
        currentTestimonial += 1;
        updatePage();
    }
   
}
const prevTestimonial = () =>{
    if(currentTestimonial > 0){
        currentTestimonial -= 1;
        updatePage();
    }
   
}

const updatePage = () =>{
    let markup = makeTestimonialCard(testimonials[currentTestimonial]);
    if(testimonials.length > 1){
        markup += `<nav>
        <button onclick="prevTestimonial()">Previous</button>
        <button onclick="nextTestimonial()">Next</button>
        
        </nav>`
    }
    constainerElement.innerHTML =markup;
}
updatePage();