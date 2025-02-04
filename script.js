document.getElementById('bgColor').addEventListener('change', function () {
    document.body.style.backgroundColor = this.value;
});

// Background Music Auto Play
window.onload = function () {
    document.getElementById('bgMusic').play();
};

// Fetch Math Questions
async function loadQuestions() {
    let response = await fetch('/api/questions');
    let data = await response.json();
    let questionBox = document.getElementById("question-box");
    let optionsContainer = document.getElementById("options");

    let randomQuestion = data[Math.floor(Math.random() * data.length)];
    questionBox.innerText = randomQuestion.question;

    optionsContainer.innerHTML = '';
    randomQuestion.answers.forEach((answer, index) => {
        let btn = document.createElement("button");
        btn.innerText = answer;
        btn.onclick = () => checkAnswer(index, randomQuestion.correct);
        optionsContainer.appendChild(btn);
    });
}

function checkAnswer(selectedIndex, correctIndex) {
    if (selectedIndex === correctIndex) {
        alert("✅ Correct!");
        document.getElementById("score").innerText++;
        loadQuestions();
    } else {
        alert("❌ Wrong! Try again.");
    }
}

loadQuestions();
