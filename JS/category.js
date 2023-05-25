// Déclaration de la variable chosenTheme, qui va enregistrer le thème choisi par l'utilisateur
let chosenTheme = "";

// Déclaration des constantes DOM pour appeler les boutons HTML des id de thèmes
// Bouton thème Cinéma
const cinemaTheme = document.getElementById("btn-cinema");
// Bouton thème Culture
const cultureTheme = document.getElementById("btn-culture");
// Bouton thème Sport
const sportTheme = document.getElementById("btn-sport");
// Bouton thème Darwin
const darwinTheme = document.getElementById("btn-awards");

// Lors d'un clic sur un bouton, appel DOM de la fonction themeAssign
cinemaTheme.addEventListener("click", cinemaAssign);
//Déclaration de la fonction themeAssign, qui enregistre le thème choisi dans la variable chosenTheme
function cinemaAssign() {
  chosenTheme = "cinema";
  console.log(chosenTheme);
  document.localStorage.setItem(chosenTheme);

  document.location.href = "../quizz.html";
}
