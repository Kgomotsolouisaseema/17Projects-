const getLoremIpsum = (numberOfParagraphs) => {
  fetch(
    `https://baconipsum.com/api/?type=meat-and-filler&paras=${numberOfParagraphs}`)
    .then((response) => response.json())
    .then((loremIpTextArray) => {
      updateResult(loremIpTextArray);
    });
};

const updateResult = textArray => {
  const resultElement = document.getElementById("result");
  resultElement.classList.add('show');
  resultElement.innerHTML = "";
  resultElement.innerHTML = textArray
    .map((paragraph) => `<p>${paragraph}</p>`)
    .join("");

 
};

const getloremIpsumBtnElement = document.getElementById("getLoremIp");
const paragraphsCountElement = document.getElementById("paragraphsCount");

getloremIpsumBtnElement.addEventListener("click", () => {
  getLoremIpsum(parseInt(paragraphsCountElement.value));
  paragraphsCountElement.value = "";
});
