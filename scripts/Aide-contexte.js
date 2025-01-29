var etiquette;
var aide;
var etiquette2;
var aide2;

aide = document.getElementById("pseudo_div");
aide2 = document.getElementById("password-help");
etiquette = document.getElementById("etiquette");
etiquette2 = document.getElementById("etiquette2");



function augmenterAideContextuelle(){
    var texteAide = etiquette.title;
    etiquette.title = "";
    etiquette.addEventListener("mouseover", mouseOver);
    etiquette.addEventListener("mouseout", mouseOut);

    function mouseOver(){
        aide.innerHTML = texteAide;
        aide.style.display = "block";
    }
    function mouseOut(){
        aide.innerHTML = "";
        aide.style.display = "none";
    }
   
}
augmenterAideContextuelle();


function augmenterAideContextuelle2(){
    var texteAide = etiquette2.title;
    etiquette2.title = "";
    etiquette2.addEventListener("mouseover", mouseOver);
    etiquette2.addEventListener("mouseout", mouseOut);

    function mouseOver(){
        aide2.innerHTML = texteAide;
        aide2.style.display = "block";
    }
    function mouseOut(){
        aide2.innerHTML = "";
        aide2.style.display = "none";
    }
   
}
augmenterAideContextuelle2();