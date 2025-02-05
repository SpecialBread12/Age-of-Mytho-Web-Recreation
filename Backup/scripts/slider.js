const images = document.querySelectorAll('.conteneur-images img');
const suivant = document.querySelector('.droite');
const precedent = document.querySelector('.gauche');
const cercles = document.querySelectorAll('.cercle');
let index = 0;

suivant.addEventListener('click', slideSuivante);

function slideSuivante(){

    if(index < 4){
// https://developer.mozilla.org/fr/docs/Web/API/Element/classList
        //Si <2, on enlève la classe active, l'image sur le dessus
        images[index].classList.remove('active');
        index++;
        images[index].classList.add('active');

    }
    //À la dernière image = revenir à la première (clic infini)
    else if (index === 4) {

        images[index].classList.remove('active');
        //index = 0 -> 1ère image
        index = 0;
        images[index].classList.add('active');

    }
// actualisé les cercles par rapport aux images
    for(i = 0; i < cercles.length; i++){

        if(cercles[i].getAttribute('data-clic') - 1 === index){
            cercles[i].classList.add('active-cercle');
        } else {
            cercles[i].classList.remove('active-cercle');
        }

    }

}


precedent.addEventListener('click', slidePrecedente);

function slidePrecedente(){

    if(index > 0){

        images[index].classList.remove('active');
        index--;
        images[index].classList.add('active');

    }
    ////À la 1ère image = revenir à la dernière (clic infini)
    else if (index === 0) {

        images[index].classList.remove('active');
        //  //index = 2 -> 3e image
        index = 4;
        images[index].classList.add('active');

    }
    for(i = 0; i < cercles.length; i++){

        if(cercles[i].getAttribute('data-clic') - 1 === index){
            cercles[i].classList.add('active-cercle');
        } else {
            cercles[i].classList.remove('active-cercle');
        }

    }
}
// Changer les images en appuyant sur les flèches droite et gauche
document.addEventListener('keydown', appuyerTouche)

function appuyerTouche(event){
// https://keycode.info/
    if(event.keyCode === 37){
        slidePrecedente();
    } 
    else if (event.keyCode === 39) {
        slideSuivante();
    }

}


// Cercles 

// fonction féchée => contexte englobant
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Fonctions/Fonctions_fl%C3%A9ch%C3%A9es
cercles.forEach(cercle => {
// contexte appelant un lecteur d'événement
    cercle.addEventListener('click', function(){

        for(i = 0; i < cercles.length; i++) {
            cercles[i].classList.remove('active-cercle');
        }
        //this est le cercle sur lequel on a cliquer dans le contexte de cercle.addEvenlistener
        this.classList.add('active-cercle');

        images[index].classList.remove('active');
        index = this.getAttribute('data-clic') - 1;
        images[index].classList.add('active');
    })

})