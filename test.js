const questions = [
    { question: "What does HTML stand for?", options: ["Hyper Text Markup Language", "High Tech Modern Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language"], answer: 0 },
    { question: "What does CSS stand for?", options: ["Cascading Style Sheets", "Creative Style System", "Computer Style Sheet", "Colorful Style Sheets"], answer: 0 },
    { question: "How many heading tags are there?", options: ["10", "6", "8", "7"], answer: 1 },
    { question: "Which CSS property changes the text color?", options: ["font-color", "color", "text-color", "background-color"], answer: 1 },
    { question: "Which HTML tag is used to display an image?", options: ["image", "img", "pic", "src"], answer: 1 },
    { question: "Which CSS property controls the font size?", options: ["font-size", "text-size", "size", "font"], answer: 0 },
    { question: "What is the default display value of <div>?", options: ["inline", "block", "flex", "grid"], answer: 1 },
    { question: "Which HTML attribute specifies an alternate text for an image?", options: ["title", "alt", "src", "description"], answer: 1 },
    { question: "Which CSS property controls spacing between elements?", options: ["margin", "padding", "space", "border"], answer: 0 },
    { question: "Which HTML tag is used for the largest heading?", options: ["heading", "h6", "h1", "<head>"], answer: 2 }
];

let currentQuestion = 0;
let userAnswers = [];
let startTime = new Date();

function loadQuestion() {
    const q = questions[currentQuestion];
    document.getElementById("question-text").innerText = q.question;

    let optionsHTML = "";
    q.options.forEach((opt, index) => {
        const checked = userAnswers[currentQuestion] === index ? "checked" : "";
        optionsHTML += `<label><input type="radio" name="answer" value="${index}" ${checked}> ${opt}</label>`;
    });

    document.getElementById("options").innerHTML = optionsHTML;

    document.getElementById("prev-btn").style.display = currentQuestion === 0 ? "none" : "inline-block";
    document.getElementById("next-btn").style.display = currentQuestion === questions.length - 1 ? "none" : "inline-block";
    document.getElementById("submit-btn").style.display = currentQuestion === questions.length - 1 ? "inline-block" : "none";
}

function nextQuestion() {
    saveAnswer();
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        loadQuestion();
    }
}

function prevQuestion() {
    saveAnswer();
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion();
    }
}

function saveAnswer() {
    const selected = document.querySelector('input[name="answer"]:checked');
    if (selected) {
        userAnswers[currentQuestion] = parseInt(selected.value);
    }
}

function clearAnswers() {
    userAnswers[currentQuestion] = null;
    loadQuestion();
}

function submitQuiz() {
    saveAnswer();
    let score = 0;
    questions.forEach((q, index) => {
        if (userAnswers[index] === q.answer) score++;
    });

    let remark = "";
    if (score === 0) remark = "Please study more!";
    else if (score <= 5) remark = "Focus on improving.";
    else remark = "Great job! You have a bright future!";

    let endTime = new Date();
    let timeTaken = Math.floor((endTime - startTime) / 1000) + " seconds";

    localStorage.setItem("quizResult", JSON.stringify({
        testName: "HTML & CSS Quiz",
        totalQuestions: questions.length,
        score: score,
        timeTaken: timeTaken,
        remark: remark
    }));

    window.location.href = "result.html";
}

loadQuestion();
