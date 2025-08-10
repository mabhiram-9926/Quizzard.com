const result = JSON.parse(localStorage.getItem("quizResult"));
if (result) {
    document.getElementById("testName").textContent = result.testName;
    document.getElementById("totalQuestions").textContent = result.totalQuestions;
    document.getElementById("score").textContent = result.score;
    document.getElementById("timeTaken").textContent = result.timeTaken;
    document.getElementById("remark").textContent = result.remark;
}
