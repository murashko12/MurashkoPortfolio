const burger = document.querySelector('#Burger');
const cross = document.querySelector('#Cross');
const popup = document.querySelector('#PopUp');

// const menu = document.querySelector('#Menu').cloneNode(1);


burger.addEventListener("click", burgerHandler);
cross.addEventListener("click", burgerHandler);

function burgerHandler(event) {
    event.preventDefault()
    popup.classList.toggle("open");
    // renderPopUp();
}

// function renderPopUp() {
//     popup.appendChild(menu);
// }