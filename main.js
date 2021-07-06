const btnAdd = document.getElementById("add-btn");
const personContainer = document.getElementById("div-container");

function addNew() {
    const newDiv = document.createElement('div');
    newDiv.classList.add('div-person');
    personContainer.appendChild(newDiv)
}

btnAdd.addEventListener('click', addNew);