// ==== AÑADE AL INICIO (con las demás variables) ====
const progressBar = document.getElementById('progress-bar');
// ==================================================
const questions = [
  {
    question: "¿Cuánto es 5 + 1?",
    options: {
      a: "6",
      b: "7",
      c: "10",
      d: "9"
    },
    correct: "a"
  },
  {
    question: "¿Cuánto es 12 - 2?",
    options: {
      a: "8",
      b: "6",
      c: "10",
      d: "7"
    },
    correct: "c"
  },
  {
    question: "¿Cuánto es 3 × 3?",
    options: {
      a: "7",
      b: "12",
      c: "9",
      d: "14"
    },
    correct: "c"
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
  },
  {
    question: "¿Cuánto es 3 × 5?",
    options: {
      a: "7",
      b: "12",
      c: "9",
      d: "15"
    },
    correct: "d"
  },
  {
    question: "¿Cuánto es 3 × 6?",
    options: {
      a: "7",
      b: "12",
      c: "9",
      d: "18"
    },
    correct: "d"
  },
  {
    question: "¿Cuánto es 3 × 7?",
    options: {
      a: "7",
      b: "21",
      c: "9",
      d: "18"
    },
    correct: "b"
  },
  {
    question: "¿Cuánto es 3 × 8?",
    options: {
      a: "7",
      b: "21",
      c: "24",
      d: "18"
    },
    correct: "c"
  },
  {
    question: "¿Cuánto es 3 × 9?",
    options: {
      a: "7",
      b: "21",
      c: "24",
      d: "27"
    },
    correct: "d"
  },
  {
    question: "¿Cuánto es 3 × 10?",
    options: {
      a: "7",
      b: "21",
      c: "30",
      d: "18"
    },
    correct: "c"
  }
];

let currentQuestion = 0;

const questionElement = document.getElementById("question");
const options = document.querySelectorAll(".option");
const feedback = document.getElementById("feedback");

function loadQuestion() {
    // Actualiza la barra de progreso
  const progress = (currentQuestion + 1) / questions.length * 100;
  progressBar.style.width = `${progress}%`;
  document.getElementById('progress-text').textContent = `${Math.round(progress)}%`;
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
