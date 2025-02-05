function compte_a_rebours()
{
    var compte_a_rebours = document.getElementById("compte_a_rebours");

    var date_actuelle = new Date();
    var date_evenement = new Date("Oct 30 00:00:00 2002");
    var total_secondes = (date_evenement - date_actuelle) / 1000;

    var prefixe = "Age of Mythology sort dans";
    if (total_secondes < 0)
    {
        prefixe = "Age of Mythology est sortie depuis "; // On modifie le préfixe si la différence est négatif
        total_secondes = Math.abs(total_secondes); // On ne garde que la valeur absolue
    }

    if (total_secondes > 0)
    {
        var annee = Math.floor(total_secondes / (60 * 60 * 24 * 365.25));
        var jours = Math.floor((total_secondes / (60 * 60 * 24)) - (365.25 * annee));
        var jour = Math.floor(total_secondes / (60 * 60 * 24));
        var heures = Math.floor((total_secondes - (jour * 60 * 60 * 24)) / (60 * 60));
        minutes = Math.floor((total_secondes - ((jour * 60 * 60 * 24 + heures * 60 * 60))) / 60);
        secondes = Math.floor(total_secondes - ((jour * 60 * 60 * 24 + heures * 60 * 60 + minutes * 60)));

        var et = "et";
        var mot_annee = "annee,";
        var mot_jour = "jours,";
        var mot_heure = "heures,";
        var mot_minute = "minutes,";
        var mot_seconde = "secondes";

        if (annee == 0)
        {
            annee = '';
            mot_annee = '';
        }
        else if (annee == 1)
        {
            mot_annee = "annee,";
        }
        if (jours == 0)
        {
            jours = '';
            mot_jour = '';
        }
        else if (jours == 1)
        {
            mot_jour = "jour,";
        }

        if (heures == 0)
        {
            heures = '';
            mot_heure = '';
        }
        else if (heures == 1)
        {
            mot_heure = "heure,";
        }

        if (minutes == 0)
        {
            minutes = '';
            mot_minute = '';
        }
        else if (minutes == 1)
        {
            mot_minute = "minute,";
        }

        if (secondes == 0)
        {
            secondes = '';
            mot_seconde = '';
            et = '';
        }
        else if (secondes == 1)
        {
            mot_seconde = "seconde";
        }

        if (minutes == 0 && heures == 0 && jours == 0)
        {
            et = "";
        }

        compte_a_rebours.innerHTML = prefixe + annee + ' ' + mot_annee + ' ' + jours + ' ' + mot_jour + ' ' + heures + ' ' + mot_heure + ' ' + minutes + ' ' + mot_minute + ' ' + et + ' ' + secondes + ' ' + mot_seconde;
    }
    else
    {
        compte_a_rebours.innerHTML = 'Compte à rebours terminé.';
    }

    var actualisation = setTimeout("compte_a_rebours();", 1000);
}
compte_a_rebours();