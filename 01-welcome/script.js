//select the first button element found in the document and assign it to the variable btnElement
const btnElement = document.querySelector("button");
//select the first span element found in document and assign it to the span element
const spanElement = document.querySelector("span")

//add event listener tot he button element. when button is clicked . the provided callback function os executed 
btnElement.addEventListener('click', () => {
    //Prompt the user to enter their name and store ther input value in the youName variable
   const yourName =  prompt('Please enter your name:')

   //Sets the text content of the span element to the value entered by the user 
   spanElement.textContent = yourName;

})