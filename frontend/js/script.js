// ==== AÑADE AL INICIO (con las demás variables) ====
const progressBar = document.getElementById('progress-bar');
// ==================================================
const questions = [
  {
    question: "[DECIMALES]: ¿Que tipo de decimal es? $2.36\\overline{4}$",
    options: {
    a: "Decimal exacto",
    b: "Decimal periódico puro",
    c: "Decimal periódico mixto",
    d: "Número entero"
    },
    correct: "c"
  },
  {
    question: "[DECIMALES]: ¿Cual es la fracción generatriz de $0.4$?",
    options: {
      a: "$\\frac{2}{5}$",
      b: "$\\frac{6}{1}$",
      c: "$\\frac{10}{1}$",
      d: "$\\frac{7}{1}$"
    },
    correct: "a"
  },
  {
    question: "[FRACCIONES]: Una madre de familia hace sus cuentas y desea saber ¿cuánto dinero gastó? Si gastó 1/3 de su sueldo en alimentación; 1/4 del resto en pasajes y los 3/7 del nuevo resto en vestimenta y aún le quedan 200 PEN. ¿Cuánto es su sueldo?",
    options: {
      a: "$2000$ PEN",
      b: "$1400$ PEN",
      c: "$500$ PEN",
      d: "$850$ PEN"
    },
    correct: "c"
  },
{
  question: `[PORCENTAJES]: Mi amigo Jonathan alias Boti al inicio del año recibió un aumento de 20% de su sueldo. En el mes de Julio del mismo año recibió otro aumento de 10% de su nuevo sueldo. Calcular:
  <br><br>
  a) ¿En qué porcentaje aumentó su sueldo con respecto al sueldo del año pasado?<br>
  b) Si su sueldo del año pasado fue de 2400 PEN, determine su nuevo sueldo.`,
  options: {
    a: "32% y 3,168.00 PEN",
    b: "40% y 2,200.00 PEN",
    c: "85% y 5,000.00 PEN",
    d: "78% y 1,500.00 PEN"
  },
  correct: "a"
},
{
  question: `[REGLA DE TRES SIMPLE]: Un albañil pensó hacer un muro en 30 días, pero tardó 5 días más por trabajar 2 horas menos cada día. ¿Cuántas horas trabajó diariamente?`,
  options: {
    a: "5 h",
    b: "10 h",
    c: "8 h",
    d: "14 h"
  },
  correct: "d"
},
{
  question: `[POTENCIA] Hallar: $B=\\frac{3^{2m+1}\\cdot\\left(27\\right)^{m+n}}{\\left(243\\right)^{m-1}\\cdot3^{3n+5}}$`,
  options: {
    a: "1",
    b: "3", // ← Respuesta correcta
    c: "5",
    d: "2"
  },
  correct: "b"
},
  {
  question: `[ECUACIONES LINEALES] Hallar: \\( \\left(3x-1\\right)^2 - 5\\left(2x^2+1\\right) + \\left(x-3\\right)\\left(2x+1\\right) = \\left(x-1\\right)^2 \\)`,
  options: {
    a: "$-\\frac{8}{9}$",   // ← Respuesta correcta
    b: "$-\\frac{5}{2}$",
    c: "$\\frac{1}{2}$",
    d: "$\\frac{8}{4}$"
  },
  correct: "a"
},
{
  question: `[ECUACIÓN RACIONAL] Hallar el conjunto solución de la ecuación: \\( \\frac{3}{x-4} = \\frac{2}{x-3} + \\frac{8}{x^2 - 7x + 12} \\)`,
  options: {
    a: "C.S. \\( \\{-45\\} \\)",
    b: "C.S. \\( \\{12\\} \\)",
    c: "C.S. \\( \\{9\\} \\)", // ← Respuesta correcta (RST)
    d: "C.S. \\( \\{10\\} \\)"
  },
  correct: "c"
},
{
  question: `[FACTORIZACIÓN] Factorizar la siguiente expresión: \\( 3t^2 - 108a^2 \\)`,
  options: {
    a: `\\( 4(t + 6)(t - 6t) \\)`,
    b: `\\( 9(t + 10a)(t - 2) \\)`,
    c: `\\( 25(t + 6)(t - 6a) \\)`,
    d: `\\( 3(t + 6a)(t - 6a) \\)` // ← RST (respuesta correcta)
  },
  correct: "d"
},
{
  question: `[FACTORIZACIÓN] Factorizar la siguiente expresión: \\(125x^3 - 8\\)`,
  options: {
    a: `\\(4(t + 6)(t - 6t) + 2^3\\)`,
    b: `\\((5x - 2)((5x)^2 + 10x + (2)^2)\\)`, // ← RST
    c: `\\(25(t + 6)(t - 6a) - 9x\\)`,
    d: `\\(8x - 2)((3x)^2 + 10x\\)`, // ← RST
  },
  correct: "b"
}
];

let currentQuestion = 0;
const correctAudio = document.getElementById("correct-audio");
const questionElement = document.getElementById("question");
const options = document.querySelectorAll(".option");
const feedback = document.getElementById("feedback");

function loadQuestion() {
    // Actualiza la barra de progreso
  const progress = (currentQuestion + 1) / questions.length * 100;
  progressBar.style.width = `${progress}%`;
  document.getElementById('progress-text').textContent = `${Math.round(progress)}%`;
  const q = questions[currentQuestion];
  questionElement.innerHTML = q.question;
  options.forEach((btn) => {
    const opt = btn.getAttribute("data-option");
    btn.textContent = `${opt}) ${q.options[opt]}`;
  });
  feedback.textContent = "";
  MathJax.typeset();
}

options.forEach((btn) => {
  btn.addEventListener("click", () => {
    const selected = btn.getAttribute("data-option");

    if (selected === questions[currentQuestion].correct) {
      // 🔊 Reproduce audio en cualquier respuesta correcta
      if (correctAudio) {
  correctAudio.volume = 0;
  correctAudio.play().catch(err => {
    console.warn("El navegador bloqueó el audio:", err);
  });

  // Gradualmente sube el volumen (fade in)
  let volume = 0;
  const fadeIn = setInterval(() => {
    if (volume < 1) {
      volume += 0.05;
      correctAudio.volume = Math.min(volume, 1);
    } else {
      clearInterval(fadeIn);
    }
  }, 850); // velocidad de aumento (en milisegundos)
}

      feedback.style.color = "green";
      feedback.textContent = "¡BUENAAA!";
      feedback.classList.remove("animate-wrong");
      feedback.classList.add("animate-correct");
      currentQuestion++;

      if (currentQuestion < questions.length) {
        setTimeout(loadQuestion, 1000);
      } else {
        feedback.textContent = "¡Has completado el cuestionario!";
        confetti({
        particleCount: 150,
        spread: 90,
        origin: { y: 0.6 }
      });

      }
    } else {
      feedback.style.color = "red";
      feedback.textContent = "Respuesta incorrecta. Vamos, tú puedes Go.";
      feedback.classList.remove("animate-correct");
      feedback.classList.add("animate-wrong");
    }
  });
});


loadQuestion();
