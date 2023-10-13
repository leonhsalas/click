const menu = document.getElementById('menu');
const clos = document.getElementById('close');
const nav = document.getElementById('nav');

menu.addEventListener('click', () => {
    menu.classList.toggle('n')
    clos.classList.toggle('n')
    nav.classList.toggle('n')
});
clos.addEventListener('click', () => {
    menu.classList.remove('n')
    clos.classList.remove('n')
    nav.classList.remove('n')
});
