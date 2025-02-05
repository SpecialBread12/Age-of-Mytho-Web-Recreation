var formValide = document.getElementById("reserver");
var local = document.getElementById("email");
var zoneMessage1 = document.getElementById("email");
// Regex pour valider le local
var localValidation = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;

// gestionnaire d'évènement click
formValide.addEventListener("click", validation);

function validation() {
  // validation du local si le champs est vide
  if (local.value == "") {
    // Créer et afficher le message d'erreur
    zoneMessage1.innerHTML = "Numéro de local manquant";
    zoneMessage1.style.backgroundColor = "red";
    zoneMessage1.style.fontWeight = "bold";
    zoneMessage1.style.marginBottom = "10px";
    zoneMessage1.style.width = "95%";
    return false;
  }
  // Si le format de données du local est incorrect
  if (localValidation.test(local.value) == false) {
    zoneMessage1.innerHTML = "";
    zoneMessage2.innerHTML =
      "Votre numéro de local ne respecte pas le format attendu.  ex: B-127 ou 135";
    zoneMessage2.style.backgroundColor = "red";
    zoneMessage2.style.fontWeight = "bold";
    zoneMessage2.style.marginBottom = "10px";
    zoneMessage2.style.width = "95%";
    return false;
  }
  return true;
}
