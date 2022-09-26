export function burgerActivate() {
    const burger = document.querySelector('.burger');
    const burger_menu = document.querySelector('.burger_menu');
    burger.addEventListener('click', () => {
        burger.classList.toggle('burger_active');
        burger_menu.classList.toggle('burger_menu_active');
    })
};
