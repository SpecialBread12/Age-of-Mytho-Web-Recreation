<?php include 'header.php'; ?>
<!--input (email, text),select,textarea-->
<div id="container">
  <form method="POST" action="traitement.html" onsubmit="return Validate()" name="form">
    <fieldset>
      <legend>Nom</legend>
      <label for="pseudo"></label>
      <div class="aide-surgissante" id="pseudo_div">
        <label>Pseudo</label> <br>
        <input type="text" name="pseudo" class="textInput" autofocus>
        <div id="name_erreur"></div>

      </div>
    </fieldset>
    <fieldset>
      <legend>Email</legend>
      <div id="email_div"></div>

      <input type="email" id="email" name="email" class="textInput" placeholder="Ex: XXXkiddo69XXX@hotmail.ca">
      <div id="email_erreur"></div>
    </fieldset>
    <fieldset>
      <legend>Message</legend>
      <label for="Message"></label>
      <textarea type="Message" name="Message"></textarea><br>
    </fieldset>
    <fieldset>
      <legend>Où habite-tu
      </legend>
      <label for="country"></label>
      <select name="country" id="country">
        <option value="Canada">Canada</option>
        <option value="États-Unis">États-Unis</option>
        <option value="France">France</option>
        <option value="Russie">Russie</option>
        <option value="Japon">Japon</option>
        <option value="Afrique">Afrique</option>
        <option value="Brésil">Brésil</option>
      </select><br>
    </fieldset>
    <input type="submit" name="inscrire" value="S'inscrire" class="btn">
  </form>

</div>
<script src="scripts/Javascript.js"></script>
<?php include 'footer.php'; ?>