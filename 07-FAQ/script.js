const dataArray = [
    {
        title: "why is JavaScript cool ?",
        details: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ipsum alias esse ducimus dolorem eveniet, non neque ab quam, tempora tenetur placeat nesciunt, quaerat ex pariatur nemo dolore est eum!"
    },
    {
        title: "What are some projects you can use with javascript  ?",
        details: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ipsum alias esse ducimus dolorem eveniet, non neque ab quam, tempora tenetur placeat nesciunt, quaerat ex pariatur nemo dolore est eum!"
    },
    {
        title: "Why do you need to learn javascrpt   ?",
        details: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ipsum alias esse ducimus dolorem eveniet, non neque ab quam, tempora tenetur placeat nesciunt, quaerat ex pariatur nemo dolore est eum!"
    },
    {
        title: "kgomotso you are able to pull data now ,from APIs  ext   ?",
        details: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ipsum alias esse ducimus dolorem eveniet, non neque ab quam, tempora tenetur placeat nesciunt, quaerat ex pariatur nemo dolore est eum!"
    },
];


const makeHTML = data => {
    return `<details> 
    <summary class="summary-title"> ${data.title}</summary>
    <p>${data.details}</p>
    </details>`
};

//this way only gets the 1st letter of the dataArray 
// document.body.innerHTML= makeHTML(dataArray[0]);

const constainerElement =document.getElementById('faq-container');
//this way gets all the data on the dataArray Object by accessing the body element
// document.body.innerHTML = dataArray.map(dataItem => makeHTML(dataItem)).join("")

//the variable created  to locate the div with an ID will now be used to display the dataArray data 
constainerElement.innerHTML = dataArray.map(dataItem => makeHTML(dataItem)).join("")
