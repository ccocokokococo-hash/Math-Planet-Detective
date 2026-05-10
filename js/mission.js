const params = new URLSearchParams(window.location.search);
const planetId = params.get("planet") || "addition";

const planet = PLANETS.find(p => p.id === planetId) || PLANETS[1];
const questions = QUESTION_BANK[planetId] || QUESTION_BANK.addition;

let currentQuestion = 0;
let selectedAnswer = "";
let stars = 0;
let correctCount = 0;
let seconds = 300;

const planetLabel = document.getElementById("planetLabel");
const missionTitle = document.getElementById("missionTitle");
const questionNumber = document.getElementById("questionNumber");
const difficulty = document.getElementById("difficulty");
const questionText = document.getElementById("questionText");
const answerArea = document.getElementById("answerArea");
const feedback = document.getElementById("feedback");
const starsCount = document.getElementById("starsCount");
const clues = document.getElementById("clues");
const timer = document.getElementById("timer");

planetLabel.textContent = planet.title;
missionTitle.textContent = planet.mission;

function renderQuestion() {
  const question = questions[currentQuestion];

  questionNumber.textContent = `${currentQuestion + 1}/${questions.length}`;

  if (currentQuestion < 2) {
    difficulty.textContent = "Easy";
  } else if (currentQuestion < 4) {
    difficulty.textContent = "Medium";
  } else {
    difficulty.textContent = "Pro";
  }

  questionText.textContent = question.q;
  selectedAnswer = "";

  answerArea.innerHTML = question.options.map(option => `
    <button class="answer-btn" data-answer="${option}">
      ${option}
    </button>
  `).join("");

  document.querySelectorAll(".answer-btn").forEach(button => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".answer-btn").forEach(btn => {
        btn.classList.remove("selected");
      });

      button.classList.add("selected");
      selectedAnswer = button.dataset.answer;
    });
  });
}

function renderClues() {
  clues.innerHTML = `
    <div class="clue ${correctCount >= 1 ? "" : "locked"}">
      ${correctCount >= 1 ? "Clue 1: Бірінші белгі табылды" : "Clue 1: locked"}
    </div>

    <div class="clue ${correctCount >= 2 ? "" : "locked"}">
      ${correctCount >= 2 ? "Clue 2: Планета координаты ашылды" : "Clue 2: locked"}
    </div>

    <div class="clue ${correctCount >= 3 ? "" : "locked"}">
      ${correctCount >= 3 ? "Clue 3: Кристалл ізі анықталды" : "Clue 3: locked"}
    </div>

    <div class="clue ${correctCount >= 5 ? "" : "locked"}">
      ${correctCount >= 5 ? "Final code: 40-54-25" : "Final code: locked"}
    </div>
  `;
}

function finishMission() {
  questionText.textContent = "Миссия аяқталды!";

  answerArea.innerHTML = `
    <div class="result-box">
      <b>Нәтиже:</b> ${correctCount}/${questions.length} дұрыс жауап.<br>
      <b>Жұлдыз:</b> ${stars}.<br>
      <b>AI feedback:</b>
      ${
        correctCount >= 4
          ? "Сен тақырыпты жақсы меңгердің. Келесі деңгейге өт!"
          : "Тағы бір қысқа жаттығу орындасаң, нәтижең көтеріледі."
      }
    </div>
    <br>
    <a class="btn primary" href="planets.html">Картаға оралу</a>
  `;

  document.getElementById("missionButtons").style.display = "none";
}

document.getElementById("checkBtn").addEventListener("click", () => {
  if (!selectedAnswer) {
    feedback.textContent = "Алдымен жауап таңда, Agent.";
    return;
  }

  const question = questions[currentQuestion];

  if (selectedAnswer === question.answer) {
    stars += 20;
    correctCount++;

    feedback.textContent = "✅ Жарайсың! Жаңа clue ашылды. Сен детективтік жолмен дұрыс шештің.";
    starsCount.textContent = stars;
    renderClues();
  } else {
    feedback.textContent = "❌ Бұл қате емес, зерттеу қадамы. 🤖 AI hint: " + question.hint;
  }
});

document.getElementById("hintBtn").addEventListener("click", () => {
  const question = questions[currentQuestion];
  feedback.textContent = "🤖 AI hint: " + question.hint;
});

document.getElementById("nextBtn").addEventListener("click", () => {
  currentQuestion++;

  if (currentQuestion >= questions.length) {
    finishMission();
    return;
  }

  renderQuestion();
});

document.getElementById("unlockBtn").addEventListener("click", () => {
  const code = document.getElementById("secretCode").value.trim();

  if (code === "40-54-25") {
    feedback.textContent = "🔓 Код дұрыс! Финалдық портал ашылды.";
  } else {
    feedback.textContent = "🔐 Код толық емес. Көбірек clue жина.";
  }
});

setInterval(() => {
  seconds--;

  if (seconds < 0) {
    seconds = 0;
  }

  const minutes = String(Math.floor(seconds / 60)).padStart(2, "0");
  const sec = String(seconds % 60).padStart(2, "0");

  timer.textContent = `${minutes}:${sec}`;
}, 1000);

renderQuestion();
renderClues();
