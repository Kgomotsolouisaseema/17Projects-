const addButtonEle = document.getElementById('counterAdd');
const subButton =document.getElementById('counterSub');
const counterDisplayElement =document.getElementById('counterDisplay');

let total = 0;
const limit = 40

const updateCounterdisplay =() =>{
    if (total > limit){
        total =limit ;
    }

    if (total < 0){
        total = 0
    }
    counterDisplayElement.textContent = total;
    document.body.style.setProperty('background-color' , `rgb(${(total/limit)*255},75,0`)
}

//add eventlistener for add button 
addButtonEle.addEventListener('click', ()=>{
    total += 1;
    updateCounterdisplay();

});


//Adding event listener for subtract button 
subButton.addEventListener("click" , () =>{
    total -= 1;
    updateCounterdisplay();

});

updateCounterdisplay();


