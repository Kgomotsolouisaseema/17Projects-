const dataArray = [
    {
        title: "why is JavaScrip cool ?",
        details: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ipsum alias esse ducimus dolorem eveniet, non neque ab quam, tempora tenetur placeat nesciunt, quaerat ex pariatur nemo dolore est eum!"
    },
    {
        title: "why is JavaScrip cool ?",
        details: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ipsum alias esse ducimus dolorem eveniet, non neque ab quam, tempora tenetur placeat nesciunt, quaerat ex pariatur nemo dolore est eum!"
    },
    {
        title: "why is JavaScrip cool ?",
        details: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ipsum alias esse ducimus dolorem eveniet, non neque ab quam, tempora tenetur placeat nesciunt, quaerat ex pariatur nemo dolore est eum!"
    },
];


const makeHTML = data => {
    return `<details> 
    <summary> ${data.title}</summary>
    <p>${data.details}</p>
    </details>`
};

document.body.innerHTML= makeHTML(dataArray[0]);
