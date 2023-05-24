let stockCorrectAnswer = 0;
let stockNumberOfQuestions = 0;

//ici, la variable right est stockée dans le localstorage, avec la valeur associée

const correct = document.querySelector(".answer1");

/* ici, on cible la classe answer1 comme une bonne réponse.
Si on créé un ID qui n'a pas un emplacement fixe lors de la génération de réponse du quizz,
et qu'on le cible, il n'y a plus de soucis de réponse fixe : à modifier*/
correct.addEventListener("click", () => {
  stockCorrectAnswer++;
  localStorage.setItem("right", stockCorrectAnswer);
  alert(localStorage.right);
}); /*function comments */
let valueResults =
  localStorage.getItem("right"); /* récupère la valeur de 'right' 
        depuis le local storage pour la mettre dans 'valueResults'*/

let score =
  valueResults /
  0.5; /*je suis parti du principe qu'on mettait 10 questions pour déterminer la méthode de calcul du score,
        si on met un timer, je peux éventuellement prendre en compte la valeur du timer dans le localstorage pour faire un score plus poussé*/
const scoreQuizz =
  document.querySelector("#results"); /*cible le contenu de l'ID results */
scoreQuizz.textContent = `${score} / 20`;

/* affichage du commentaire */
const comments =
  document.querySelector("#comments"); /*cible le contenu de l'ID "comments" */

if (valueResults === undefined) {
  /*dans le cas où l'utilisateur viens sur la page résults.html avant de faire un quizz*/
  comments.textContent = `Tu n'as pas encore testé tes connaissances`;
} else if (score < 10) {
  comments.textContent = `A confondu les cours de JS avec des créneaux de sieste...`;
} else if (score < 11) {
  comments.textContent = `Fait acte de présence en cours, et a une chance sur deux de répondre correctement`;
} else if (score < 17) {
  comments.textContent = `Est impliqué dans sa formation, efforts à maintenir`;
} else {
  /*si vous voulez insérer des confettis, ça sera dans cette partie*/
  comments.textContent =
    "A tout le temps de bons résultats, est soupçonné de cheater";
}
