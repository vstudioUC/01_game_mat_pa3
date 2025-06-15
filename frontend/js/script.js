const questions = [
  {
    question: "¿Cuánto es 5 + 3?",
    options: {
      a: "6",
      b: "7",
      c: "8",
      d: "9"
    },
    correct: "c"
  },
  {
    question: "¿Cuánto es 12 - 4?",
    options: {
      a: "8",
      b: "6",
      c: "10",
      d: "7"
    },
    correct: "a"
  },
  {
    question: "¿Cuánto es 3 × 4?",
    options: {
      a: "7",
      b: "12",
      c: "9",
      d: "14"
    },
    correct: "b"
  }
];

let currentQuestion = 0;

const questionElement = document.getElementById("question");
const options = document.querySelectorAll(".option");
const feedback = document.getElementById("feedback");

function loadQuestion() {
  const q = questions[currentQuestion];
  questionElement.textContent = q.question;
  options.forEach((btn) => {
    const opt = btn.getAttribute("data-option");
    btn.textContent = `${opt}) ${q.options[opt]}`;
  });
  feedback.textContent = "";
}

options.forEach((btn) => {
  btn.addEventListener("click", () => {
    const selected = btn.getAttribute("data-option");
    if (selected === questions[currentQuestion].correct) {
      feedback.style.color = "green";
      feedback.textContent = "¡Correcto!";
      currentQuestion++;
      if (currentQuestion < questions.length) {
        setTimeout(loadQuestion, 1000);
      } else {
        feedback.textContent = "¡Has completado el cuestionario!";
      }
    } else {
      feedback.style.color = "red";
      feedback.textContent = "Respuesta incorrecta. Intenta de nuevo.";
    }
  });
});

loadQuestion();
