//Define a function name carStart that takes a car number and an optional maximun time (default is 5 seconds)
const carStart = (carNumber , maxTime = 5) =>
    new Promise((resolve , reject)=>{  //Retrun a new promise 
        //Generate a random time between 0 and maxTime  seconds , then convert to miliseconds 
        const randomTime = Math.floor(Math.random() * maxTime) * 1000;
        console.log(randomTime); //log the random time to the console 

        //use setTimeout to wait for the random time before before resolveing the promise 
        setTimeout(()=>{
            resolve(carNumber)  //when the time is up , resolve the promise with the car Number 

        }, randomTime)  

    }) ;

    //initialize an empty array  to keep track of the cars finishing order
    const carsOrder = [];

    //Define a function  to update the display of the race results 
    const updateDisplay =() =>{
        const raceElement = document.getElementById('race') ; //Get the element with id 'race'
        raceElement.innerHTML = '';  //Clear its current content 
        //iterate over each car in the carsOrder array 
        carsOrder.forEach((id , position) =>{
            //Add a new div  for each car  with its position and image 
            raceElement.innerHTML += `<div><img src="car-${id}.png"><span>#${position +1}Place </div>`
            

        })
    }

    //Start the race for car 1
    carStart(1)
    .then(result => {
        console.log(result)  //log the result (car Number) to the console 
        carsOrder.push(result); //add the car number to the carsOrder array 
    })
    .then(updateDisplay); //Update the display ater the car finishes 

    //Start the race foc car 2
    carStart(2)
    .then(result => {
        console.log(result)
        carsOrder.push(result);
    })
    .then(updateDisplay); //Update the display after the car finishes 


    carStart(3)
    .then(result => {
        console.log(result)
        carsOrder.push(result);
    })
    .then(updateDisplay); //Update the display after the car finishes 