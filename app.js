let score = 0;

function startQuiz() {
    // const username = localStorage.getItem('username');
    //document.getElementById('usernameDisplay').textContent = username;
    window.location.href = 'question1.html';
}

document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    localStorage.setItem('username', username);
    localStorage.setItem('email', email);
    window.location.href = 'quiz_instructions.html';
});

function checkAnswer(nextPage, correctAnswer) {
    const answer = document.getElementById('answer').value;
    if (answer.toLowerCase() === correctAnswer.toLowerCase()) {
        score++;
        window.location.href = `correct${nextPage}.html`;
    } else {
        window.location.href = `incorrect${nextPage}.html`;
    }
    return false;
}

function nextQuestion(nextPage) {
    window.location.href = nextPage;
}

function showFinalScore() {
    document.getElementById('score').textContent = score;
    const email = localStorage.getItem('email');
    // Here you'd normally send an email with the score
    console.log(`Emailing score to ${email}`);
}
