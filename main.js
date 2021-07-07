
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
    const userContainerDiv = document.createElement('div');
    userContainerDiv.classList.add('user-container-div');
    const userNameh1 = document.createElement('div');
    userNameh1.classList.add('user-name-h1');
    userNameh1.innerHTML = userName;
    const userLastNameh2 = document.createElement('div');
    userLastNameh2.classList.add('user-last-name-h2');
    userLastNameh2.innerHTML = userLastName;
    const userAgeh3 = document.createElement('div');
    userAgeh3.classList.add('user-age-h3');
    userAgeh3.innerHTML = userAge;
    const userProfileImg = document.createElement('img');
    userProfileImg.classList.add('user-profile-img');
    userProfileImg.src = userProfilePic;



        for(let i = 0; i <= user.length; i++) {
            if(i === 0) {
                personContainer.appendChild(userContainerDiv);
            } else if (i === 1) {
                userContainerDiv.appendChild(userNameh1);
            } else if (i === 2) {
                userContainerDiv.appendChild(userLastNameh2)
            } else if (i === 3) {
                userContainerDiv.appendChild(userAgeh3);
            } else if(i === 4) {
                userContainerDiv.appendChild(userProfileImg);
            }
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
