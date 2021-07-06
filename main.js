
const modal = document.querySelector('.modal');
const btnAdd = document.getElementById("add-btn");
const btnClose = document.getElementById("close-x");
const submitBtn = document.getElementById("submit-btn");
const personContainer = document.getElementById("div-container");

function toglleModal() {
    modal.classList.toggle('hidden');
};

function catchData() {
    let userName = document.getElementById("name").value;
    let userLastName = document.getElementById("lastname").value;
    let userAge = document.getElementById("age").value;
    let userProfilePic = document.getElementById("pp-link").value;
    let user = [userName, userLastName, userAge, userProfilePic];
    console.log(user);

    function addNewPerson() {
        for(let i = 0; i <= user.length; i++) {
            const newInfoDiv = document.createElement('div');
            newInfoDiv.classList.add('div-person');
            personContainer.appendChild(newInfoDiv);
        }
    }
    addNewPerson();
};




btnAdd.addEventListener('click', toglleModal);
btnClose.addEventListener('click', toglleModal);
submitBtn.addEventListener('click', () => {
    catchData();
    toglleModal();
});





/* const newPerson = document.createElement('div');
newPerson.classList.add('div-person');
personContainer.appendChild(newPerson); */
