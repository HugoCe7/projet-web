function competences(Id){
    var image;
    if (Id=="linguistique"){
        image = "linguistique.jpg";
        document.getElementById("description-text-competences").innerHTML ="Anglais niveau - B2  /  Espagnol niveau - B1";

    }
    else if(Id=="informatique"){
        image = "informatique.png";
        document.getElementById("description-text-competences").innerHTML ="Programmation : Python, C, JavaScript <br>Web : HTML, CSS, Flask(Python) <br>Base de données : SQL";
    }
    else if(Id=="softskills"){
        image = "softskills.jpg";
        document.getElementById("description-text-competences").innerHTML ="Esprit d'équipe, rigueur et autonomie : lors du concours de la Nuit du Code, nous étions une équipe de trois et nous devions créer un jeu en 6 heures. Nous avons gagné la compétition. J'ai pu mettre en avant ces trois compétences.(<a href=\"nuit_du_code.html\">Voir dans mon portfolio pour plus d'information</a>) " ;
        
    }
 
    document.getElementById("monImage").src = image;
}

