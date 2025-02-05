const menu = document.getElementById('js-menu');
const navBarToggle = document.getElementById('js-navbar-toggle');

navBarToggle.addEventListener('click', function (){
menu.classList.toggle('active');
navBarToggle.classList.toggle('change');
})