// Ce fichier est un exemple d'architecture de fonction quizz js, j'ai essayé de faire concorder les noms de classe de la page quizz.html

const questions = [
  {
    question: "Intitulé question 1",
    answer: [
      { text: "Wrong answer 1", correct: false },
      { text: "Wrong answer 2", correct: false },
      { text: "Wrong answer 3", correct: false },
      { text: "Right answer", correct: true },
    ],
  },

  {
    question: "Intitulé question 2",
    answer: [
      { text: "Wrong answer 1", correct: false },
      { text: "Wrong answer 2", correct: false },
      { text: "Wrong answer 3", correct: false },
      { text: "Right answer", correct: true },
    ],
  },
];

// Déclaration des constantes DOM pour appeler les éléments HTML de la classe "question"
const questionElement = document.getElementById("question");
// Déclaration des constantes DOM pour appeler les éléments HTML de la classe "réponse"
const answerButtons = document.getElementById("answers");
// En cas de bouton pour skip, appel la classe de ce bouton
const nextButton = document.getElementById("next-btn");

// Déclaration constantes pour l'incrémentation des valeurs index de questions et score
let currentQuestionIndex = 0;
let score = 0;

// Déclaration de la fonction startQuiz qui va set question index et score à zero, et appeler showQuestion qui affiche la question suivante
function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  // En cas de bouton pour skip, affichage de ce bouton avec pour contenu "next"
  nextButton.innerHTML = "Next";
  //   Puis appelle la fonction pour afficher la prochaine question
  showQuestion();
}

// Déclaration de la fonction showQuestion, qui affiche la question contenue dans le tableau "questions"  à l'index actuel
function showQuestion() {
  // Appel de la fonction pour enlever les boutons précédents
  resetState();
  // Déclaration de la variable currentQuestion, qui indique au code quel est le contenu de la question actuelle dans le tableau "questions"
  let currentQuestion = questions[currentQuestionIndex];
  //  Déclaration de la variable questionNo, qui permet d'indiquer quel est le numéro de la question actuelle
  let questionNo = currentQuestionIndex + 1;
  // Affiche le numéro de la question dans la classe question, à changer car on le veut dans le h1 de la classe question
  // Et affiche la question dans le <p> de classe "question"
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  // Affichage des réponses dans chaque bouton "answer",
  //   dans notre cas les classes HTML des boutons réponse ont actuellement tous des classes différentes,
  // il faut les unifier (par exemple ici, ils ont tous la classe "Btn") pour utiliser forEach
  currentQuestion.answer.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("answer-btn");
    answerButtons.appendChild(button);
    // Ajout de true/false au dataset en cas de bonne/mauvaise réponse
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    // Quand clic sur une réponse, sélection de la valeur answer correspondante grâce à la fonction selectAnswer
    button.addEventListener("click", selectAnswer);
  });
  // En cas de bouton pour skip, le fait apparaître
  nextButton.style.display = "block";
}

// Déclaration de la fonction resetState qui efface les réponses précédentes
function resetState() {
  // Si il y a un bouton pour skip, il est caché
  nextButton.style.display = "none";
  // Supprimer les boutons déjà présents (avec le texte par défaut ou celui de la question précédente )
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

//Déclaration de la fonction selectAnswer
function selectAnswer(e) {
  // Ajout du bouton sur lequel on a cliqué dans une variable selectedBtn
  const selectedBtn = e.target;
  // vérification si dataset = true, donc si réponse correcte, ajout de la classe correct au selectedBtn, sinon ajout de la classe incorrect
  // Permet d'appliquer les couleurs verte et rouge sur les bontons réponses
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    // Et incrémentation du score
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  // Après le clic sur une réponse, colore la bonne réponse en vert, et désactive les boutons réponse
  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
}
// Pour que les couleurs s'appliquent, il faut dans le fichier css : ".correct{background: green;}" et ".incorrect{background: red}"
// Pour que le highlight des boutons se désactive, il faut dans le fichier css: ".answer: hover: not([disabled]){background: #222; color: #fff;"
// et : ".answer: disabled{cursor:no-drop;}"

// Déclaration de la fonction showScore, qui affiche le score et affiche un bouton replay
//  Dans notre cas il faudra y inclure une transition vers la page result et
// un enregistrement du score dans le local storage.
function showScore() {
  resetState();
  questionElement.innerHTML = "You scored ${score} out of ${questions.length}!";
  nextButton.innerHTML = "Play again";
  nextButton.style.display = "block";
}

// Déclaration fonction qui incrémente l'index des questions, et appelle la fonction showQuestion si l'index n'est pas à la fin
function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showscore();
  }
}

//En cas de bouton pour skip, on clique dessus pour passer à la question suivante
nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.lenght) {
    handleNextButton();
  } else {
    //Si la question actuelle est la dernière
    startQuiz();
  }
});

// Appel de la fonction startQuiz , qui reset les index et appelle la fonction showQuestion
startQuiz();
