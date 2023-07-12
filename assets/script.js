var startbutton = document.getElementById("section");
var beginGame = document.getElementById("container");

/* Making the start button clickable to begin the quiz */
startbutton.addEventListener("click", startQuiz)

function startQuiz() {
    console.log("You've been clicked")
    startbutton.classList.add("hide")
    beginGame.classList.remove("hide")
    nextQuestion()
}

function nextQuestion() {

}

var questions = [
    {
        question: "Inside which HTML element do we put JavaScript?",
        answers: [
            { text: "Script Tag", correct: true },
            { text: "P Tag", correct: false },
            { text: "Java Tag", correct: false },
            { text: "Section Tag", correct: false }
        ]
    }
]