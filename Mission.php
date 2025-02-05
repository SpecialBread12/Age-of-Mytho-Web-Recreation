<?php include 'header.php'; ?>
<table class="tableau">
  <caption>
    Tableau des jeux
  </caption>
  <tr>
    <th colspan="2">Nom</th>
    <th>Prix à sa sortie</th>
    <th>Année de sortie</th>
    <th>Point d'appréciation</th>
  </tr>
  <tr>
    <td colspan="2">Age of Mythology</td>
    <td>69.99$</td>
    <td>30 octobre 2002</td>
    <td>89/100</td>
  </tr>
  <tr>
    <td colspan="2">Age of Mythology: Titan</td>
    <td>44.99$</td>
    <td>30 septembre 2003</td>
    <td>84/100</td>
  </tr>
  <tr>
    <td colspan="2">Age of Mythology: Tale of the dragon</td>
    <td>10.99$</td>
    <td>28 janvier 2016</td>
    <td>37/100</td>
  </tr>
  <tr>
    <td colspan="2">Age of Mythology: Retold</td>
    <td>34.99$</td>
    <td>4 septembre 2024</td>
    <td>83/100</td>
  </tr>
  <tr>
    <th colspan="2">Version disponible</th>
    <th colspan="2">Meilleur version</th>
    <th>Prix de la meilleur version + Raison</th>
  </tr>
  <tr>
    <td colspan="2">Steam ou version CD</td>
    <td colspan="2" rowspan="4">Steam Retold</td>
    <td>32.99$ Seule, 38.69$ avec TOTD. Il est encore mit à jour</td>
  </tr>
  <tr>
    <td colspan="2">Steam ou Patch CD</td>
    <td>Il est inclut dans la version de base</td>
  </tr>
  <tr>
    <td colspan="2">Steam</td>
    <td>10.99$ seul, 6.70$ si acheté en bundle avec le jeu de base. C'est sa seul version disponible.</td>
  </tr>
  <tr>
    <td colspan="2">Retold</td>
    <td>Version la plus récente, mis à jour souvent et DLC avec du contenu supplémentaire au jeu original et possède le contenu des anciennes version</td>
  </tr>
</table>
<div class="conteneur-slider">
  <div class="conteneur-images">
    <img src="image/1.jpg" alt="img1" class="active">
    <img src="image/2.jpg" alt="img1">
    <img src="image/3.jpg" alt="img1">
    <img src="image/4.jpg" alt="img1">
    <img src="image/5.jpg" alt="img1">
  </div>
  <div class="commandes">
    <button class="gauche">
      <img src="image/left.svg">
    </button>
    <button class="droite">
      <img src="image/right.svg">
    </button>
  </div>
  <div class="cercles">
    <button data-clic="1" class="cercle active-cercle"></button>
    <button data-clic="2" class="cercle"></button>
    <button data-clic="3" class="cercle"></button>
    <button data-clic="4" class="cercle"></button>
    <button data-clic="5" class="cercle"></button>
  </div>
</div>
<?php include 'footer.php'; ?>