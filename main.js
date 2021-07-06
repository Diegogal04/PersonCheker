
const modal = document.querySelector('.modal');
const btnAdd = document.getElementById("add-btn");
const btnClose = document.getElementById("close-x");
const submitBtn = document.getElementById("submit-btn");
const personContainer = document.getElementById("div-container");

function toglleModal() {
    modal.classList.toggle('hidden');
};

function addNewPerson() {
    const newPerson = document.createElement('div');
    newPerson.classList.add('div-person');
    personContainer.appendChild(newPerson);
    console.log('hello world')
}


btnAdd.addEventListener('click', toglleModal);
btnClose.addEventListener('click', toglleModal);
submitBtn.addEventListener('click', addNewPerson);






/* const btnAdd = document.getElementById("add-btn");
const personContainer = document.getElementById("div-container");

function addNew() {
    const newDiv = document.createElement('div');
    newDiv.classList.add('div-person');
    personContainer.appendChild(newDiv)
}

btnAdd.addEventListener('click', addNew); */