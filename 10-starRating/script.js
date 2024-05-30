//Initial set of questions with labels ratings set to 0
const initialQuestions = [
    {
        label: "Friendliness",
        rating : 0,
    },
    {
        label: "Cleanliness",
        rating : 0,
    },
    {
        label: "Food Quality",
        rating : 0,
    },
    {
        label: "Service",
        rating : 0,
    },
];


//Retrieve stored questions from localStorage and parse them 
const storedQuestions =JSON.parse(localStorage.getItem('storedQuestions') ) ;

//use stored questions if available, otherwise use initial questions
const questions = storedQuestions || initialQuestions;


//Function to create rating component for a given question 
const makeStarRating = question =>{
    //Created a container div element
    const container = document.createElement('div')
    //Create a label and set its text content to the question label
    const label = document.createElement('label')
    label.textContent = question.label;
    label.classList.add('rating-label') //added a class to the label 
    //Append the label to the container
    container.appendChild(label);
    //Append the star ratingelements to the container 
    container.appendChild(makeStars(5, question));

    return container; //Return  the container element 
}


//function to create star element for rating 
const makeStars = (maxValue , question)=>{
    //Create a container div for stars
    const starContainer = document.createElement("div")

    //Loop to create each star element
    for (let starPosition = 1 ; starPosition<= maxValue ; starPosition++){
        const starElement = document.createElement('span') //create aspan element for a star
        starContainer.appendChild(starElement); //Append the star element to the container
        starElement.classList.add('star') ; //add general star class
        //Set the class based on the current rating 
        if(starPosition <= question.rating){
            starElement.classList.add('filled'); //add 'filled' class if the star position is within the rating
        }else{
            starElement.classList.add('empty') // add 'empty' class otherwise
        }

        //add click event listenre to update the rating
        starElement.onclick = () =>{
            for (let i =0 ; i< maxValue; i ++){
                //update the classes for each star based on the clicked position
                if(i < starPosition){
                    starContainer.children[i].classList.add('filled')
                }else{
                    starContainer.children[i].classList.remove('filled');
                    starContainer.children[i].classList.add('empty');
                }
            }
            //update the rating of the question and save to localstorage
            question.rating = starPosition;
            localStorage.setItem('storedQuestions' , JSON.stringify(questions));
        }
    }

    return starContainer;  //return the star container element
}

//get the element where ratings will be displayed
const ratingElement = document.getElementById("ratings");

//for each question , create and append the star rating component
questions.forEach(question => {
    ratingElement.appendChild(makeStarRating(question))
    
});