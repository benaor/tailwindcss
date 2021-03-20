const buttonMenu = document.querySelector("#buttonMenu");
const menu = document.querySelector("#menu");

buttonMenu.addEventListener('click', ()=>{
    (menu.classList.contains('hidden')) ? menu.classList.remove('hidden') : menu.classList.add('hidden');
})