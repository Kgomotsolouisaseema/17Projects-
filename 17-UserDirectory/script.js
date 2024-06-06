
class UserDirectory {
  //this is the setup function that runs when we create a new UserDirectory 
  constructor(options){
    //we are getttng the values from the options we passed in
    const{apiUrl , userMappedFn , displaySelector ,filterSelector , storageKey = 'userData'} =options
    //saving those values so we can use them later 
    this.apiUrl = apiUrl;
    this.userMappedFn = userMappedFn;
    this.storageKey = storageKey;
    this.displayElement = document.querySelector(displaySelector);
    this.filterElement= document.querySelector(filterSelector);

    //Start the setup process 
    this.initialise();
  }

  //This method sets everything up 
  initialise() {
    //First, we load the user data
    this.loadUserData()
    .then(users =>{
      console.log(users); //Print the users to the console so we can see them 
      this.populateDisplay(users); // Show the users on the webpage
      this.createHeader(); //Create  the table hearders 
    });

    //Set up the search filter to work when we type in it 
    this.filterElement.addEventListener('keyup' , () =>{
      this.filterUsers(this.filterElement.value) //filter the users based  on what we typing
    });
  }

  //this method loads user data from local storage or the API
  loadUserData() {
    //Try to get the user data from local storage
    const storedUserData = JSON.parse(localStorage.getItem(this.storageKey))
     
    //If we found data in localStorage , use that data 
    if(storedUserData){
      return  new Promise((resolve ,reject) => resolve(storedUserData))
      .then(users => {
        this.users = users; //Save the users so we can use them later 
        return users; // Return the users 

      })
    }

    //if no data in local Storage , fetch it from the API
     return fetch(this.apiUrl)
    .then(response => response.json()) //Convert the response  to JSON 
    .then(results => this.userMappedFn(results)) // Change the data to the format we want 
    .then(users =>{
      this.users = users;  //Save the users so we can use them later 
      localStorage.setItem(this.storageKey , JSON.stringify(users)); //Save the users to localStorage
      // console.log(users)
      return users;  //Return the users 
    })
  }

  //This method shows the user on the webpage
  populateDisplay(users){
    //First , clear and exsisting users 
    Array.from(this.displayElement.children).forEach(row => row.remove());

    //Then, add each user to the display
    users.forEach(user => {
      const tr = document.createElement('tr'); //Create  a new  row
      Object.entries(user)
        .forEach(([key , value])=>{
          const td = document.createElement('td'); //Create a new cell
          if(key === 'photo'){                    //if  the cell is for the photo
            const img = document.createElement('img'); //create an image element 
            img.src = value;  //Set the image source 
            td.appendChild(img); //Add the image to the cell
          }else{  //for other cells
            td.textContent = value;  //Add the cell to the row
          }
          tr.appendChild(td); //Add the row to the display 
        });

        this.displayElement.appendChild(tr);
         
        
    })
  }

  //This method creates the headers for the table 
  createHeader(){
    const thead = document.createElement('thead');  //Create a table hearder element
    const tr = document.createElement('tr');  //Create a row for the headers

    //For each key in the user object , create a header cell
    Object.keys(this.users[0])
      .forEach(columnName =>{
        const th = document.createElement('th')  //Create a header cell
        th.textContent = columnName[0].toUpperCase() + columnName.slice(1) //Cpatalize the column name
        tr.appendChild(th); //Add the header cell to the row
      });

      thead.appendChild(tr);  //add the row to the table header
      this.displayElement.insertAdjacentElement('beforebegin' , thead); //Insert the hearder before the tbody 
  }

  //this method filters the users based on the search term
  filterUsers(searchTerm){
    //Filter the users to only include those whose name includes the search term
     const filteredUsers = this.users.filter(user => user.name.toLowerCase().includes(searchTerm.toLowerCase()));
     this.populateDisplay(filteredUsers); //Show the filtered users 
  }
}
//Create a new UserDirectory  with our options
const userDirectory = new UserDirectory({
  apiUrl: 'https://dummyjson.com/users',  //The api URL to get the users from 
  userMappedFn: (userData) => {
    //Change the users data to the format we want 
    return userData.users.map((
      {firstName , lastName , birthDate , image ,phone ,email}
    )=> {
      const userObj ={
        name: `${firstName} ${lastName}`,   
        birthDate,
        phone, 
        email,
        photo: image,
      }

      return userObj;
    })
  } , 
  displaySelector: '#userTable tbody', //the css selector for the table body  
  filterSelector: '#filterUsers' ,  //The CSS selector for the filter input
});

console.log(userDirectory);  //Print the userDirectory instance to the console

/* Order of steps:
1. Create a new UserDirectory with the given options.
2. The constructor sets up the properties and calls initialise.
3. initialise loads the user data and sets up the search filter.
4. loadUserData checks local storage or fetches data from the API.
5. Once data is loaded, populateDisplay shows the users on the page.
6. createHeader creates the table headers.
7. Typing in the filter input triggers filterUsers to filter the users.
8. filterUsers shows the filtered users on the page.
*/