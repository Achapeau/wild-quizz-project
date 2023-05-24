// Liste des questions et réponses
const questions = [
  {
    question: "Que veulent dire les chiffres au fond des verres de cantine ?",
    answers: [
      "C’est l’âge que vous avez et le plus jeune va chercher l’eau",
      "C’est la note que vous aurez à l’interro de cet après-midi",
      "C’est le nombre de filles avec qui vous sortirez dans la vie",
      "On sait pas, ça reste un mystère mais on est tous sur le coup…",
    ],
    correctAnswer: 1, // Index de la réponse correcte dans le tableau des réponses
  },
  {
    question: "Que ves au fond des verres de cantine ?",
    answers: [
      "C’est l’âge que vous avez et le plus jeune va chercher l’eau",
      "C’est la note que vous aurez à l’interro de cet après-midi",
      "C’est le nombre de filles avec qui vous sortirez dans la vie",
      "On sait pas, ça reste un mystère mais on est tous sur le coup…",
    ],
    correctAnswer: 3, // Index de la réponse correcte dans le tableau des réponses
  },
  // Ajoutez d'autres questions ici
];

// Variable de score, qui s'incrémente de 1 à chaque bonne réponse (valeur finale entre 0 et 10)
let userscore = 0;

// Variable de questionIndex, qui indique quelles question et réponses appeler, s'incrémente de 1 à chaque nouvelle question
let questionIndex = 0;

// Variables pour suivre l'état du quiz
let currentQuestion = 1;

// Afficher la première question au chargement de la page
displayQuestion(0);

// Fonction pour afficher une question
function displayQuestion(questionIndex) {
  const questionElement = document.querySelector(".question");
  const answersElement = document.querySelector(".answers");

  // Afficher la question
  questionElement.innerHTML = `<h1>Question ${questionIndex + 1}</h1>
                                   <p>${questions[questionIndex].question}</p>`;

  // Afficher les réponses
  answersElement.innerHTML = "";
  for (let i = 0; i < questions[questionIndex].answers.length; i++) {
    const answer = questions[questionIndex].answers[i];
    const button = document.createElement("button");
    button.innerText = answer;
    button.classList.add("answer");
    answersElement.appendChild(button);
  }
}

// Fonction pour vérifier la réponse sélectionnée
function checkAnswer(selectedAnswer) {
  const questionIndex = currentQuestion - 1;
  const correctAnswerIndex = questions[questionIndex].correctAnswer;

  if (selectedAnswer === correctAnswerIndex) {
    //if user selected option is equal to array's correct answer
    userScore += 1; //upgrading score value with 1
    answer.classList.add("correct"); //adding green color to correct selected option
    answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
    console.log("Correct Answer");
    console.log("Your correct answers = " + userScore);
  } else {
    answer.classList.add("incorrect"); //adding red color to correct selected option
    answer.insertAdjacentHTML("beforeend", crossIconTag); //adding cross icon to correct selected option
    console.log("Wrong Answer");
    for (i = 0; i < allOptions; i++) {
      if (answer.children[i].textContent == correcAns) {
        //if there is an option which is matched to an array answer
        answer.children[i].setAttribute("class", "option correct"); //adding green color to matched option
        answer.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
        console.log("Auto selected correct answer.");
      }
    }
  }

  // Passer à la question suivante
  currentQuestion++;
  if (currentQuestion <= questions.length) {
    displayQuestion(currentQuestion - 1);
  } else {
    // Quiz terminé
    // Ajoutez votre logique ici (par exemple, afficher les résultats)
  }
}

// Écouter les clics sur les boutons de réponse
const answerButtons = document.querySelectorAll(".answer");
answerButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    checkAnswer(index);
  });
});
