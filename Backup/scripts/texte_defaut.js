var texte = document.getElementById('text');
texte.addEventListener("focus", avecFocus);
texte.addEventListener("blur", sansFocus);



function avecFocus() {
    texte.value = "XXXSupraPotatoXXX";
    texte.style.backgroundColor = "white";


}

function sansFocus() {
    texte.style.backgroundColor = "";



}