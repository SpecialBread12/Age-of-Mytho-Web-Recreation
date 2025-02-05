//créer un nouvel élément HTML en JavaScript
var balise = document.createElement("h3");
var item = document.getElementsByClassName("item");
balise.style.color = "Black";
//La méthode appendChild() va insérer un
// objet en tant que dernier enfant d’un autre objet.
document.getElementById("décompte").appendChild(balise).innerHTML =
  "Nombre d'item dans la liste: " + item.length;
