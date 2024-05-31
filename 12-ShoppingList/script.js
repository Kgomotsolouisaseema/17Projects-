//Define a class named shopping list 
class ShoppingList {
    //constructor to initialize the shoppingList class with given selectors and a storage key 
    constructor(itemsSelector , addItemButtonSelector ,newItemTextSelector ,
        storageKey= 'shoppingList'
    ) {
        this.storageKey =storageKey ;  //Set the storage key for local storage 
        this.itemsElement = document.querySelector(itemsSelector); //select the element that will display the items
        this.addItemButtonElement = document.querySelector(addItemButtonSelector); // select the button to add new items 
        this.newItemTextElement  = document.querySelector(newItemTextSelector); // select the input element for new items
        //retrieves the stored items form local storage of use a defualt list 
        this.items = JSON.parse(localStorage.getItem(this.storageKey)) || ['apples', 'oranges'] ;
        this.initialise(); //Call the initialise method to set up event listeners 
    }
     //Method to set up initial event listeners 
    initialise(){
        //Add a click event listener to the add item button 
        this.addItemButtonElement.addEventListener('click', () => {
            const value = this.newItemTextElement.value; //Get the value form the new item text input 
            this.addItem(value);  //add the new item to the list 
            this.newItemTextElement.value =''; //clear the input field 
            this.renderItems(); //Render the updated  list of items 
            this.storeItems(); // store the updated list in local storage 
        });

    }

     //Method to render the list of items 
    renderItems() {
        this.itemsElement.innerHTML = ''; //Clear the current list of items
        if(this.items.length  === 0) {  //check if the list is empty 
            const itemElement = document.createElement('li'); //create a new list element
            itemElement.textContent = 'No Items'; //Set the text content to indicate no items 
            this.itemsElement.appendChild(itemElement) //Append thelist item to the items element 
        }

        //iterate over each item in the list and its index 
        this.items.forEach((item , index)=>{
            const itemElement = document.createElement('li');  //create a new list item element 
            itemElement.textContent = item;  //set the text content to the items value 
            const removeElement = document.createElement('span'); //create a new span element for the remove button 
            removeElement.textContent = "Remove"; //set the text content of the remove button 
            removeElement.classList.add('remove-item'); //add a class to the remove button  for styling 
           //add eventlisteners to the remove button 
            removeElement.onclick= () =>{  
                this.removeItemAt(index);  //remove the item at the specified index 
                this.renderItems(); //render the updated list of items 
                this.storeItems(); //store the updated list in local Storage 

            };
            itemElement.appendChild(removeElement);  //Append the remove button tot he list item 
            this.itemsElement.appendChild(itemElement);  //Append the list item to the items element 
        })
    }
     //Method to add a new item to the list 
    addItem(newItem){
        this.items.push(newItem);  //Add the new item to the ened of the items array 
    }

    //Method to remove an item from the list at a specified index
    removeItemAt(indexToRemove){
        this.items = this.items.filter((item ,index)=> indexToRemove != index);
    }
    //Method to store the items  list in local storage 
    storeItems(){
        //Convert the items array to a JSON string and store it in localStorage 
        localStorage.setItem(this.storageKey, JSON.stringify(this.items));

    }
};

//Create a new instance to the shoppingList class 
const myShoppinglist = new ShoppingList('#shoppingListItems' , '#addItem' , '#newItemText');

//Render the initial list of items 
myShoppinglist.renderItems();


/*  

Summary of Key Features:
1.Class and Constructor: The ShoppingList class is defined, and its constructor initializes the class with selectors and storage key.
2.Event Listeners: Event listeners are set up in the initialise method to handle adding new items to the list.
3.DOM Manipulation: The renderItems method dynamically creates and updates the list items in the DOM.
4.Local Storage: Methods like storeItems and the constructor utilize localStorage to persist data between page reloads.
5.Dynamic UI Updates: Methods addItem and removeItemAt manage the list's state and update the UI accordingly.

*/ 