//Get references to input elements for hours , minutes and seconds 
const hoursInputElement = document.getElementById('hoursInput');
const minInputElement = document.getElementById('minutesInput');
const secondsInputElement = document.getElementById('secondsInput');

//get reference to output elements for hours , minutes and seconds
const hoursOutputElement  = document.getElementById('hoursOutput');
const minutesOutputElement = document.getElementById('minutesOutput');
const secondsOutputElement = document.getElementById('secondsOutput');

//get reference to the start timer button
const startTimerBtnElement = document.getElementById('startTimer')

//Initialize variable to store target time and the timer interval
let targetTime   ; //154778489787 this is a test ,call the updateTime function 
let timerInterval;


//Function to update the timer display
const updateTimer =()=>{
    //check if a target time has been set
    if(targetTime){
        //Calculate the differenc in seconds between the curren time and the target time 
        const differenceInSeconds = Math.floor(targetTime - Date.now()) / 1000;
        //Check if time is up
        if(differenceInSeconds < 1){
            clearInterval(timerInterval); //Stop the interval timer
            // alert("time is over ")
        }

        //Calculate hours , minutes and seconds from the difference in seconds 
        const hours = Math.floor(differenceInSeconds/3600);
        const minutes = Math.floor(differenceInSeconds / 60) % 60;
        const seconds = Math.floor(differenceInSeconds % 60)

        //Update the  output elements with the calculated hours, minutes and seconds
        hoursOutputElement.textContent = `${hours} hours`;
        minutesOutputElement.textContent = `${minutes} minutes`;
        secondsOutputElement.textContent = `${seconds} seconds`;
    }
};

//Event listener  for the start time button
startTimerBtnElement.addEventListener('click' , () =>{
    clearInterval(timerInterval);
    //get the future hours, minutes, seconds from the input elements 
    const futureHours = parseInt(hoursInputElement.value);
    const futureminutes = parseInt(minInputElement.value);
    const futureseconds = parseInt(secondsInputElement.value);

    //Get the current time 
    const date = new Date();
    const currentHours = date.getHours();
    const currentmins = date.getMinutes();
    const currentseconds = date.getSeconds();

    //calculate target time by adding furture hours,minutes and seconds to current time 
    date.setHours(currentHours + futureHours);
    date.setMinutes(currentmins + futureminutes);
    date.setSeconds(currentseconds + futureseconds);

    //convert target time to miliseconds and stroe it in the variable targetTime 
    targetTime = date.getTime();
    //store targetTime in localstorage 
    localStorage.setItem('targetTime' , targetTime);
    //update the timer display
    updateTimer();
    //start the timer interval to update the times display every 200 seconds
    timerInterval = setInterval(updateTimer ,200)
});

//retrieve targetTime form local storage
const storedTargteTime = localStorage.getItem('targetTime')
// IF targettime is found in local storage. set it and update the time display
if(storedTargteTime){
    targetTime = storedTargteTime;
    updateTimer()
    timerInterval = setInterval(updateTimer, 200)  //this code alows for the time to run continuosly 
}

//update the time display when the page loads 
updateTimer()
