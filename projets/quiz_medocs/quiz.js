let current = 0;
let score = 0;

// Mélange aléatoire des questions
questions = questions.sort(() => Math.random() - 0.5);

function showQuestion() {
  const q = questions[current];
  document.getElementById("question").textContent = q.question;
  q.options.forEach((opt, i) => {
    const btn = document.getElementById("opt" + i);
    btn.textContent = opt;
    btn.disabled = false;
  });
}

function checkAnswer(selected) {
  const q = questions[current];
  const isCorrect = selected === q.answer;
  if (isCorrect) score++;

  alert((isCorrect ? "✅ Bonne réponse ! " : "❌ Mauvaise réponse. ") + q.explanation);

  current++;
  if (current < questions.length) {
    showQuestion();
  } else {
    endQuiz();
  }
}

function endQuiz() {
  document.getElementById("quiz").style.display = "none";

  const result = document.createElement("div");
  result.id = "result";
  result.innerHTML = `
    <h2>Quiz terminé !</h2>
    <p>Votre score est : ${score} / ${questions.length}</p>
    <button onclick="restartQuiz()">Recommencer</button>
  `;
  document.body.appendChild(result);
}

function restartQuiz() {
  location.reload();
}

window.onload = showQuestion;
