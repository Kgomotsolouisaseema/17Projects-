//Function to load an image from a given URL using Promise 
const imgLoad = url => 
    new Promise((resolve , reject)=>{
        const request = new XMLHttpRequest(); //Create a new XMLhttpRequest object 
        request.open('GET' , url); //initialise the request as a GET request to the given  URL 
        request.responseType = 'blob'; //Srt the response type tO 'BLOB' (Binary large object )
        
        //Event handler for when the request loads successfully 
        request.onload = () =>{
            if(request.status === 200){ // if the request was successfull (status code 200)
                resolve(request.response); //Resolve the promise with the response 
            }else{ 
                //if the request was not successful , reject the promise with an error message 
                reject(Error(`Image didnt load successfully: [Error Code : ${request.statusText}]`))

            }
        };
        //Event handler for network errors
        request.onerror =() =>{
            //Reject the promise with a network error message
            reject(Error('There was a network error'));
        };
        //Send the request 
        request.send();
    });

    //get the HTML element where the image will be loaded
    const imgGoesHere = document.getElementById("imageGoesHere");
    const myImage = new Image(); //create a new image object 
    myImage.classList.add('styled-image') //add a css class to the image


    //Call the imgLoad function with the image URL and handle the Promise
    imgLoad('img.jpg')
    .then(response => {
        const imageURL =window.URL.createObjectURL(response); //Create a URL for the loaded image blob
        myImage.src = imageURL; //Set the src attribute of the image object o the created URL 
        imgGoesHere.appendChild(myImage); // Append the image object to the HTML ELEMENT 
        alert('Image Loaded'); //Show an alert that the image has loaded
    })
    .catch(error => alert(error)); //if there was an error,show an alert with te error message

