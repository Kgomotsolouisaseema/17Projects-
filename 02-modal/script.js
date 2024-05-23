//select the  element with ID "openModal" and assign it to openModalElement
const openModalBtnElement = document.querySelector('#openModal');

//select the element with the class 'modal 'and assign it to moalElement
const modalElement = document.querySelector(".modal");

//select the element with the class 'modal_content' within modalElement and assign it to modalContentElement
const modalContentElement = modalElement.querySelector(".modal_content");

//
openModalBtnElement.addEventListener('click', () => {
    modalElement.classList.add('open');
})


modalContentElement.addEventListener('click' , ()=>{
    modalElement.classList.remove('open')
})


