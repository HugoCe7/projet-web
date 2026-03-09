document.addEventListener("DOMContentLoaded", () => {

const descritptions = {
    "image_solitaire.png" : "Lorsque j'étais en terminale le premier projet était d'effectuer un jeu du solitaire. L'interface graphique n'était pas obligatoire. J'ai donc réalisé ce projet en langage de programmation Python en utilisant la programmation orientée objet. Cela m'a permis de développer des compétences en programmation orientée objet ainsi que de la rigueur pour arriver à terme de ce projet.",
    "jeu_nuit_du_code.png" : "Ce projet était un concours international. Nous étions une équipe composée de trois personnes. L'objectif était simple : créer un jeu en 6 heures. Nous devions utiliser la plateforme Studio Pyxel pour créer le jeu en utilisant le langage de programmation Python. Notre jeu a été sélectionné parmi les 13 meilleurs jeux du concours. Cette expérience m'a permis de développer des qualités de travail en équipe ainsi que de créativité.",
    "gps_premiere.png" : "Ce projet a été réalisé en première lors des cours de NSI. Nous avons appris à manipuler des données CSV. Ce projet de visionneur de traces à partir de données récolté par un gps. Ce projet m'a permis d'appliquer ces notions vues en cours. Nous avons utilisé le langage Python pour récupérer les données d'un fichier csv. Enfin il fallait traiter les données. Ce projet m'a permis d'approfondir des compétences en Python ainsi que ma rigueur et ma patience pour réussir à obtenir un projet fonctionnel. ",
};
const zone = document.getElementById("description-text-projets");
document.addEventListener("click", (e) => {
    const nom = e.target.getAttribute("src");
    zone.textContent = descritptions[nom] || "Aucune descritpion";
})
});