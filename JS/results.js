let stockCorrectAnswer = 5;
let stockNumberOfQuestions = 10;

//ici, la variable right est stockée dans le localstorage, avec la valeur associée

/* const correct = document.querySelector(".answer1");

/* ici, on cible la classe answer1 comme une bonne réponse.
Si on créé un ID qui n'a pas un emplacement fixe lors de la génération de réponse du quizz,
et qu'on le cible, il n'y a plus de soucis de réponse fixe : à modifier*/
/*correct.addEventListener("click", () => {
  stockCorrectAnswer++; */
localStorage.setItem("right", stockCorrectAnswer);

/*});  function comments */
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
valueResults = 10;
/* Génération d'un tableau des scores */
localStorage.setItem("score5", localStorage.score4);
localStorage.setItem("score4", localStorage.score3);
localStorage.setItem("score3", localStorage.score2);
localStorage.setItem("score2", localStorage.score1);
localStorage.setItem("score1", valueResults);

/*permet de faire remonter les scores au fur et à mesure */

const resultsMain = document.querySelector(".results-main");

const scoreArray = [
  {
    id: "le plus récent",
    resultat: localStorage.score1,
  },
  {
    id: "2ème",
    resultat: localStorage.score2,
  },
  {
    id: "3ème",
    resultat: localStorage.score3,
  },
  {
    id: "4ème",
    resultat: localStorage.score4,
  },
  {
    id: "5ème",
    resultat: localStorage.score5,
  },
];
const visualArray = document.createElement("div");
visualArray.classList.add("visual-array");
resultsMain.appendChild(visualArray);

const scoreTitle = document.createElement("h2");
scoreTitle.classList.add("score-title");
scoreTitle.textContent = "Tableau des scores précédents";
visualArray.appendChild(scoreTitle);

/* Création de la fonction de génération */

function createArray(position, score) {
  /* Création du tableau position */

  const positionClassment = document.createElement("div");
  positionClassment.classList.add("position-classment");
  positionClassment.textContent = `${position}`;
  visualArray.appendChild(positionClassment);

  const scoreSave = document.createElement("div");
  scoreSave.classList.add("score-save");
  scoreSave.textContent = `${score}`;
  visualArray.appendChild(scoreSave);
}

for (let i = 0; i < scoreArray.length; i++) {
  createArray(scoreArray[i].id, scoreArray[i].resultat);
}
