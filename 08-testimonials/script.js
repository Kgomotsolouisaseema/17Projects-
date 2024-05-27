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

//Function to create HTML markup for a testimonial card 
const makeTestimonialCard= testimonial =>{
    //retrun a string containing HTML markup with testimonials details 
    //string literal , so your adding the markup as the code excutes
    return `<div class="testimonial-card">
    <img src='${testimonial.author.image}'>
    <h2>${testimonial.author.name}</h2>
    <p>${testimonial.text}</p>
    <date> Written on ${testimonial.date}</date>    
    </div> `
};

//Variable to keep track of the  current testimonials index
let currentTestimonial = 0;


//function to display the next testimonial
const nextTestimonial = () =>{
    //check if there are more testimonials to display 
    if(currentTestimonial < testimonials.length -1){
        //Increment the current testimonails index
        currentTestimonial += 1;
        //update the page with the new testimonial
        updatePage();
   }   
};

//Functio to display the previous testimonial
const prevTestimonial = () =>{
    //check if there are previous testimonials to display 
    if(currentTestimonial > 0){
        //Decrement the current testimonial index 
        currentTestimonial -= 1;
        //update the page with the new testimonial
        updatePage();
    };
   
}

//Function to update the page with the current testimonial
const updatePage = () =>{
    //generate HTML markup for the current testimonial
    let markup = makeTestimonialCard(testimonials[currentTestimonial]);
    //if there are multiplt testimonials, add navigation buttons 
    if(testimonials.length > 1){
        markup += `<nav>
        <button onclick="prevTestimonial()">Previous</button>
        <button onclick="nextTestimonial()">Next</button>
        </nav>`
    }
    //update the container elements HTML content with the new markup
    constainerElement.innerHTML =markup;
};

//initially update the page with the first testimonial
updatePage();