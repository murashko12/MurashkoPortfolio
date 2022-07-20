const burger = document.querySelector('#Burger');
const popup = document.querySelector('#PopUp');

burger.addEventListener("click", burgerHandler);

function burgerHandler(event) {
    event.preventDefault()
    popup.classList.toggle("open");
}