 //The getLoremIpsum function takes the number of paragraphs as a parameter.
const getLoremIpsum = (numberOfParagraphs) => {
  //It uses the fetch function to make a GET request to the Bacon Ipsum API, specifying the type of text and the number of paragraphs.

  fetch(
    `https://baconipsum.com/api/?type=meat-and-filler&paras=${numberOfParagraphs}`)
    //It then processes the response as JSON and passes the resulting array of lorem ipsum paragraphs to the updateResult function.

    .then((response) => response.json())
    .then((loremIpTextArray) => {
      updateResult(loremIpTextArray);
    });
};

const addCopyBtn = text => {
  const resultElement = document.getElementById('result');
  const copyBtn  = document.createElement('button');

  copyBtn.textContent = ('Copy');
  copyBtn.classList.add('copy');

  copyBtn.onclick = () =>{
    navigator.clipboard.writeText(text);
    copyBtn.textContent = 'Copied !' ; 
    setTimeout(()=> {
      copyBtn.textContent = 'Copy';
    } ,  2000)
  }

  resultElement.appendChild(copyBtn);
}



//The updateResult function takes an array of text paragraphs as input.
const updateResult = textArray => {
  //It gets the HTML element with the id "result" and adds the "show" class to it.
  const resultElement = document.getElementById("result");
  resultElement.classList.add('show');
  //It then clears the inner HTML of the result element and populates it with the paragraphs of lorem ipsum text wrapped in <p> tags.
  resultElement.innerHTML = "";
  resultElement.innerHTML = textArray
    .map((paragraph) => `<p>${paragraph}</p>`)
    .join("");

    addCopyBtn(textArray.join(''));
};


//These lines retrieve the button and input elements from the HTML document.
const getloremIpsumBtnElement = document.getElementById("getLoremIp");
const paragraphsCountElement = document.getElementById("paragraphsCount");

//They add an event listener to the button so that when it's clicked, 
//the getLoremIpsum function is called with the number of paragraphs specified in the input element, and then the input element is cleared.
getloremIpsumBtnElement.addEventListener("click", () => {
  getLoremIpsum(parseInt(paragraphsCountElement.value));
  paragraphsCountElement.value = "";
});




 

