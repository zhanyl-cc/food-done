let burger = document.querySelector('#open');
let navUl = document.querySelector('#list');



burger.addEventListener('click', burgerF);

function burgerF(){
    navUl.classList.toggle('show');
}


let darkmode = document.querySelector('#dark-mode');
let content = document.querySelector('body');

darkmode.addEventListener('click' , function() {
    content.classList.toggle('dark')
    darkmode.classList.toggle('mode-dark')
})