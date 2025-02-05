// Sélectionner le texte des éléments
var pseudo = document.forms["form"]["pseudo"];
var password = document.forms["form"]["password"];
var password_confirm = document.forms["form"]["password_confirm"];
var localValidation = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
// Sélectionner les input pour les messages d'erreurs
var name_erreur = document.getElementById("name_erreur");
var password_erreur = document.getElementById("password_erreur");
// EVENT LISTENERS
//L'événement blur se déclenche lorsqu'un élément a perdu le focus.
pseudo.addEventListener("blur", verifierNom, true);
email.addEventListener("blur", verifierEmail, true);
password.addEventListener("blur", verifierPassword, true);
// fonction de validation
function Validate() {
  // validation du pseudo
  if (pseudo.value == "") {
    name_erreur.textContent = "Veuillez renseigner votre pseudonyme !";
    pseudo.focus();
    return false;
  }
  // validation du pseudo
  if (pseudo.value.length < 3) {
    name_erreur.textContent =
      "Le pseudonynyme doit contenir au moins 3 caratères";
    pseudo.focus();
    return false;
  }

  // Vérifier que les 2 emails sont pareils
  if (password.value != password_confirm.value) {
    password_erreur.innerHTML = "Les mots de passes doivent être identiques";
    return false;
  }
}

// fonction event listener
function verifierNom() {
  if (pseudo.value != "") {
    name_erreur.innerHTML = "";
    return true;
  }
}

function VerifierPassword() {
  if (password.value === password_confirm.value) {
    password_erreur.innerHTML = "";
    return true;
  }
}
function validation() {
  // validation du local si le champs est vide
  if (email.value == "") {
    // Créer et afficher le message d'erreur
    zoneMessage1.innerHTML = "Numéro de local manquant";
    zoneMessage1.style.backgroundColor = "red";
    zoneMessage1.style.fontWeight = "bold";
    zoneMessage1.style.marginBottom = "10px";
    zoneMessage1.style.width = "95%";
    return false;
  }
  // Si le format de données du local est incorrect
  if (localValidation.test(email.value) == false) {
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