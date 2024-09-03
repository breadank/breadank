let score = 0;

function startQuiz() {
    //const username = localStorage.getItem('username');
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

function checkAnswer(correctAnswer, nextPage) {
    const answer = document.getElementById('answer').value;
    let score = parseInt(localStorage.getItem('score')) || 0;

    if (answer.trim().toLowerCase() === correctAnswer.toLowerCase()) {
        score++;
        localStorage.setItem('score', score); // Update score in localStorage
        window.location.href = `correct${nextPage}.html`;
    } else {
        window.location.href = `incorrect${nextPage}.html`;
    }
    return false; // Prevent form submission
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

function showFinalScore() {
    const score = localStorage.getItem('score') || 0;
    document.getElementById('score').textContent = score;
    const email = localStorage.getItem('email');

    // Send an email with the score (this would require server-side code)
    console.log(`Emailing score of ${score} to ${email}`);

    // Clear the score from localStorage for next time
    localStorage.removeItem('score');
}
