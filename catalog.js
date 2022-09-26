import {burgerActivate} from "./js/main.js";
import {cost} from "./js/cost.js";

burgerActivate();

for (let i = 0; i < cost.length; i++) {
    let id = document.getElementById(cost[i].id);
    id.addEventListener('click', () => openPopUp(i));
}

function openPopUp(i) {
    let pop_up = document.getElementById('pop-up');
    pop_up.classList.toggle('active_pop_up');
    let animalName = document.getElementById('animalName');
    let breed = document.getElementById('breed');
    let description = document.getElementById('description');
    animalName.innerHTML = cost[i].animalName;
    breed.innerHTML = cost[i].breed;
    description.innerHTML = cost[i].description;
    let img = document.getElementById('pop-up-img');
    img.src = cost[i].img;
};

const btnClosePopUp = document.getElementById('btnClosePopUp');
btnClosePopUp.addEventListener('click', () => closePopup());

function closePopup() {
    let popUp = document.getElementById('pop-up');
    popUp.classList.toggle('active_pop_up');
};
