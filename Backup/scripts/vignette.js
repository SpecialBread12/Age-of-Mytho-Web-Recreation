var vignetteAgeofempire = document.getElementById('ageofempire');
var vignetteAgeofempire2 = document.getElementById('ageofempire2');
var vignetteAgeofempire3 = document.getElementById('ageofempire3');
var vignetteAgeofempire4 = document.getElementById('ageofempire4');
var vignetteAgeofmythology = document.getElementById('ageofmythology');

vignetteAgeofempire.addEventListener("mousedown", function () {
    afficherDetailPokemon('ageofempire');
});

vignetteAgeofempire2.addEventListener("mousedown", function () {
    afficherDetailPokemon('ageofempire2');
});


vignetteAgeofempire3.addEventListener("mousedown", function () {
    afficherDetailPokemon('ageofempire3');
}); 


vignetteAgeofempire4.addEventListener("mousedown", function () {
    afficherDetailPokemon('ageofempire4');
}); 


vignetteAgeofmythology.addEventListener("mousedown", function () {
    afficherDetailPokemon('ageofmythology');
}); 

var listeVignettes = document.getElementsByClassName("vignette");
for(var numero=0; numero < listeVignettes.length; numero++){
    var vignette = listeVignettes[numero];
    console.log(vignette);
    vignette.addEventListener("mousedown", function () {
        afficherDetail(this.id);
});
}
	

function afficherDetail(Game) {
    detail = document.getElementById('detail-' + Game);
    if(detail) console.log(detail.innerHTML);
    zoneAffichage = document.getElementById('zone-affichage');
    zoneAffichage.innerHTML = detail.innerHTML;
} 