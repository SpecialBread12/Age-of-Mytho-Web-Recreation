<?php include 'header.php'; ?>
<div id="container">
  <form action="Membre.html" method="POST" onsubmit="return Validate()" name="form">

    <fieldset>
      <label for="pseudo"></label>
      <div class="aide-surgissante" id="pseudo_div"> </div>
      <label id="etiquette" title="Ton nom sera XXXSupraPotatoXXX">Pseudonyme</label> <br>
      <input type="text" id="text" name="pseudo" class="textInput">
      <div id="name_erreur"></div>
    </fieldset>
    <div id="Password_div">
      <div class="aide-surgissante" id="password-help"> </div>

      <label id="etiquette2" title="Choisie ce que tu veux comme mots de passe">Password</label> <br>
      <input type="password" name="password" class="textInput">
    </div>
    <div id="pass_confirm_div">
      <label>Password confirm</label> <br>
      <input type="password" name="password_confirm" class="textInput">
      <div id="password_erreur"></div>
    </div>
    <div>
      <input type="submit" name="inscrire" value="S'inscrire" class="btn">
    </div>
  </form>
</div>
<script src="scripts/Javascript.js"></script>
<?php include 'footer.php'; ?>