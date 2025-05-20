function showRegister() {
  document.getElementById('login-form').style.display = 'none';
  document.getElementById('register-form').style.display = 'block';
}
function showLogin() {
  document.getElementById('login-form').style.display = 'block';
  document.getElementById('register-form').style.display = 'none';
}
function register(e) {
  e.preventDefault();
  const user = document.getElementById('register-username').value.trim();
  const pass = document.getElementById('register-password').value;
  if (!user || !pass) return false;
  if (localStorage.getItem('quizuser_' + user)) {
    alert('Ce nom d’utilisateur existe déjà.');
    return false;
  }
  localStorage.setItem('quizuser_' + user, pass);
  alert('Compte créé ! Connecte-toi.');
  showLogin();
  return false;
}
function login(e) {
  e.preventDefault();
  const user = document.getElementById('login-username').value.trim();
  const pass = document.getElementById('login-password').value;
  if (!user || !pass) return false;
  const saved = localStorage.getItem('quizuser_' + user);
  if (saved && saved === pass) {
    localStorage.setItem('quiz_logged', user);
    showWelcome();
  } else {
    alert('Identifiants incorrects');
  }
  return false;
}
function logout() {
  localStorage.removeItem('quiz_logged');
  document.getElementById('auth-section').style.display = '';
  document.getElementById('welcome-section').style.display = 'none';
  document.getElementById('quiz-content').style.display = 'none';
}
function showWelcome() {
  const user = localStorage.getItem('quiz_logged');
  if (user) {
    document.getElementById('auth-section').style.display = 'none';
    document.getElementById('welcome-section').style.display = '';
    document.getElementById('welcome-msg').textContent = 'Bienvenue, ' + user + ' !';
    document.getElementById('quiz-content').style.display = '';
  }
}
window.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('quiz_logged')) {
    showWelcome();
  }
});

let questionsTirage = [];
let currentQuestion = 0;
let score = 0;

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function demarrerQuiz() {
  document.getElementById('start-section').style.display = 'flex';
  document.getElementById('result-section').style.display = 'none';
  document.getElementById('quiz-section').style.display = 'none';
  score = 0;
  currentQuestion = 0;
  questionsTirage = questions.slice();
  shuffle(questionsTirage);
  questionsTirage = questionsTirage.slice(0, 3);
  afficherQuestion();
  document.getElementById('start-section').style.display = 'none';
  const finBtn = document.getElementById('fin-btn');
  if (finBtn) finBtn.style.display = "none";
}

function afficherQuestion() {
  document.getElementById('quiz-section').style.display = 'flex';
  const q = questionsTirage[currentQuestion];
  document.getElementById('question').textContent = q.question;
  const ul = document.getElementById('reponses');
  ul.innerHTML = "";
  q.reponses.forEach((rep, idx) => {
    const li = document.createElement('li');
    const btn = document.createElement('button');
    btn.textContent = rep.text;
    btn.onclick = () => repondre(idx);
    btn.disabled = false;
    li.appendChild(btn);
    ul.appendChild(li);
  });
  document.getElementById('reponse').textContent = "";
  document.getElementById('reponse').style.color = "#222";
  document.getElementById('explication').textContent = "";
  document.getElementById('next-btn').style.display = "none";
  const finBtn = document.getElementById('fin-btn');
  if (finBtn) finBtn.style.display = "none";
}

function repondre(idx) {
  const q = questionsTirage[currentQuestion];
  Array.from(document.querySelectorAll('#reponses button')).forEach(btn => btn.disabled = true);
  const bonne = q.reponses[idx].correct;
  const bonneRep = q.reponses.find(r => r.correct);
  if (bonne) {
    document.getElementById('reponse').textContent = `Bonne réponse. La bonne réponse est : "${q.reponses[idx].text}".`;
    document.getElementById('reponse').style.color = "green";
    score++;
  } else {
    document.getElementById('reponse').textContent = `Mauvaise réponse. La bonne réponse était : "${bonneRep.text}".`;
    document.getElementById('reponse').style.color = "red";
  }
  document.getElementById('explication').textContent = q.explication;
  if (currentQuestion < questionsTirage.length - 1) {
    document.getElementById('next-btn').style.display = "inline-block";
    const finBtn = document.getElementById('fin-btn');
    if (finBtn) finBtn.style.display = "none";
  } else {
    document.getElementById('next-btn').style.display = "none";
    let finBtn = document.getElementById('fin-btn');
    if (!finBtn) {
      finBtn = document.createElement('button');
      finBtn.id = 'fin-btn';
      finBtn.textContent = 'Fin du quiz';
      finBtn.onclick = afficherScore;
      finBtn.style.display = "inline-block";
      document.getElementById('quiz-section').appendChild(finBtn);
    } else {
      finBtn.style.display = "inline-block";
    }
  }
}

function questionSuivante() {
  currentQuestion++;
  if (currentQuestion < questionsTirage.length) {
    afficherQuestion();
  } else {
    afficherScore();
  }
}

function afficherScore() {
  document.getElementById('quiz-section').style.display = 'none';
  document.getElementById('result-section').style.display = 'flex';
  document.getElementById('score').innerHTML =
    "Votre score&nbsp;: <strong>" + score + " / " + questionsTirage.length + "</strong>";

  const finBtn = document.getElementById('fin-btn');
  if (finBtn) finBtn.style.display = "none";
}
