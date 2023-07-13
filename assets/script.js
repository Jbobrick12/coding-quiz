var startbutton = document.getElementById("section");
var beginGame = document.getElementById("container");
var answerEl = document.getElementById("answer-container");
var questionEl = document.getElementById("question");
var answerbutton = document.getElementById("answerbuttons");
var answerbutton2 = document.getElementById("answerbuttons2");
var answerbutton3 = document.getElementById("answerbuttons3");
var answerbutton4 = document.getElementById("answerbuttons4");
var timer = document.getElementById("timerr");
var nextbutton = document.getElementById("next-button");

var currentQuestion, randomQuestion;

/* Making the start button clickable to begin the quiz */
startbutton.addEventListener("click", startQuiz);
answerEl.addEventListener("click", nextQuestion);

/* Starting the game and showing the first question */
function startQuiz() {
  console.log("You've been clicked");
  startbutton.classList.add("hide");
  beginGame.classList.remove("hide");
  randomQuestion = questions.sort(() => Math.random() * questions.length);
  currentQuestion = 0;
  nextQuestion();
}

/* Timer ticking down */
function countdown() {
  var timeLeft = 60;
  var timeInterval = setInterval(function () {
    if (timeLeft > 1) {
      timer.textContent = timeLeft + " seconds.";
      timeLeft--;
    } else {
      timer.textContent = "";
      clearInterval(timeInterval);
    }
  }, 1000);
}

/* Adding an event listener and showing a random next question */
answerEl.addEventListener("click", nextQuestion);

function nextQuestion() {
  resetQuestion();
  showQuestion(randomQuestion[currentQuestion]);
}

/* Showing the question and displaying or choosing each answer */
function showQuestion(question) {
  questionEl.innerText = question.question;
  question.answers.forEach((answer) => {
    var buttons = document.createElement("button");
    buttons.innerText = answer.text;
    buttons.classList.add("btn");
    if (answer.correct) {
      buttons.dataset.correct = answer.correct;
    }
    buttons.addEventListener("click", selectAnswer);
    answerEl.appendChild(buttons);
  });
}

/* Function for selecting an answer */
function selectAnswer(select) {
  var selection = select.target;
  var correct = select.dataset.correct;
  setStatusClass(document.body, correct);
}

/* Removing answer questions to replace them with answers from the array */
function resetQuestion() {
  answerbutton.classList.add("hide");
  answerbutton2.classList.add("hide");
  answerbutton3.classList.add("hide");
  answerbutton4.classList.add("hide");
}

/* Setting an array of questions and answers to randomly select from */
var questions = [
  {
    question: "Inside which HTML element do we put JavaScript?",
    answers: [
      { text: "Script Tag", correct: true },
      { text: "P Tag", correct: false },
      { text: "Java Tag", correct: false },
      { text: "Section Tag", correct: false },
    ],
    question: "Where is the correct place to insert a JavaScript?",
    answers: [
      { text: "Body", correct: false },
      { text: "Head", correct: false },
      { text: "Body or Head sections", correct: true },
      { text: "None of the above", correct: false },
    ],
  },
];
