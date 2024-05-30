const data = [
    {
        id: 1,
        title: 'iPhone 9',
        price: 549,
        inStock: true,
        category: 'smartphones',
    },
    {
        id: 2,
        title: 'iPhone X',
        price: 899,
        inStock: true,
        category: 'smartphones',
    },
    {

        id: 3,
        title: 'Samsung Universe 9',
        price: 1249,
        inStock: true,
        category: 'smartphones',
    },
    {
        id: 4,
        title: 'Huawei P30',
        price: 499,
        inStock: false,
        category: 'smartphones',
    },
    {
        id: 5,
        title: 'OPPOF19',
        price: 280,
        inStock: false,
        category: 'smartphones',
    },
    {
        id: 6,
        title: 'MacBook Pro',
        price: 1749,
        inStock: true,
        category: 'laptops',
    },
    {
        id: 7,
        title: 'Samsung Galaxy Book',
        price: 1499,
        inStock: false,
        category: 'laptops'
    },
    {
        id: 8,
        title: 'Microsoft Surface Laptop 4',
        price: 1499,
        inStock: false,
        category: 'laptops',
    },
    {
        id: 9,
        title: 'HP Pavilion 15-DK1056WM',
        price: 1099,
        inStock: true,
        category: 'laptops',
    },
    {

        id: 10,
        title: 'Infinix INBOOK',
        price: 1099,
        inStock: true,
        category: 'laptops',
    }
];

//fUNCTION TO CREATE A TABLE  FFORM PRODUCT DATA 
const createTable =productData=>{
    const tableElem = document.createElement('table'); //create a table element
    const tableHead = document.createElement('thead'); // create a table head element
    const tableBody = document.createElement('tbody'); //create a table body element 

    //Get the column hearders from the first products key
    const headers = Object.keys(productData[0]);
    tableHead.appendChild(createHeaderRow(headers)); //create and append the hearder row to the table head 

    //create and append a row for each prodcut in the data
    productData.forEach(rowData => {
        tableBody.appendChild(createProductRow(rowData))
    })
    //append the table head and body to the table element 
    tableElem.appendChild(tableHead);
    tableElem.appendChild(tableBody);

    return tableElem; //return the complete table element

};
 
//Function to create a table row for a product 
const createProductRow = product =>{
    const tr =document.createElement('tr');  //create a table row element 

    //create and append a table cell for each value in the product 
    Object.values(product).forEach(value =>{
        const td =document.createElement('td'); //create a table cell element
        td.textContent = value; //set the cells text content to the value
        tr.appendChild(td); //append the cell to the row
    });

    return tr; // return the complete row element 

};

//Function to create a header row with column names ans sort buttons
const createHeaderRow = coloumnNames =>{
    const tr = document.createElement('tr'); //create a table row element

    //create and append a hearder cell for each column name 
    coloumnNames.forEach(coloumnName => {
        const th = document.createElement('th'); //create a table cell element 
        th.textContent = coloumnName[0].toUpperCase()+ coloumnName.slice(1); //set the cells text content to the capatalised coloumn name 
        
        const searchUp = document.createElement('span'); //create a span element for the up arrow
        searchUp.innerHTML = '&#9206;'; //set the spans content to the down arrow symbol 

        const searchDown = document.createElement('span') // create a span eleent for the down arrow
        searchDown.innerHTML = '&#9207;' ; //set the spans content to the down arrow symbol

        //set the onclick event for sorting the coloumn in ascending order 
        searchUp.onclick=()=> sortDataBy(coloumnName , 'ASC');
        //set the onclick event for sorting the coloumn in descending order 
        searchDown.onclick=()=> sortDataBy(coloumnName , 'DES');

        th.appendChild(searchDown); //Append the down arrow span to the header cell
        th.appendChild(searchUp); //Append the up arrow span to the header cell
        tr.appendChild(th); //Append the header cell to the row 
    });
    return tr ; //Return the complete headr row element
}

//fucnction to sort the data by a specific column and direction 
const sortDataBy = (coloumnName , direction)=>{
    //create a sorted array of the data in ascending order
    const sortedASCData = [...data.sort((a,b)=>a[coloumnName] > b[coloumnName] ? 1 : -1 )];
    // create a sorted array of the data in descending order 
    const sortedDECData = [...data.sort((a,b)=>a[coloumnName] < b[coloumnName] ? 1 : -1 )];

    //render the table witht he sorted data based on the direction 
    renderTable(direction === 'ASC' ? sortedASCData : sortedDECData);

}


//function torender the table with the given product data 
const renderTable = productData => {
    const sortableTableElement = document.getElementById('sortableTable') //get the table container element by its ID
    sortableTableElement.innerHTML=''; //Clear the container's current content
    sortableTableElement.appendChild(createTable(productData)) //Create and append the table to the container 
};

//call renderTable to display the tble with the initial data 
renderTable(data);