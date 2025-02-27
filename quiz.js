let score = 0;
const moneyTree = ['100,000', '200,000', '300,000', '400,000','500,000', '600,000', '700,000', '800,000', '900,000', '1,000,000'];
const questions = [
    { question: "What is Generative AI?", options: ["A. A type of AI that generates new content", "B. A type of AI that only analyses data", "C. A type of AI that cannot learn", "D. A type of AI that only plays games"], correct: 0 },
    { question: "Which company developed GPT-3?", options: ["A. Google", "B. OpenAI", "C. Microsoft", "D. Facebook"], correct: 1 },
    { question: "What does GAN stand for?", options: ["A. Generative Adversarial Network", "B. General AI Network", "C. Generative AI Network", "D. General Adversarial Network"], correct: 0 },
    { question: "Which of these is a use case of Generative AI?", options: ["A. Image generation", "B. Data analysis", "C. Web browsing", "D. Email filtering"], correct: 0 },
    { question: "What is the main component of a GAN?", options: ["A. Generator and Discriminator", "B. Analyzer and Synthesizer", "C. Generator and Analyzer", "D. Synthesizer and Discriminator"], correct: 0 },
    { question: "Which language model is known for generating human-like text?", options: ["A. BERT", "B. GPT-3", "C. T5", "D. RoBERTa"], correct: 1 },
    { question: "What is the purpose of the discriminator in a GAN?", options: ["A. To generate new data", "B. To distinguish real from fake data", "C. To analyze data", "D. To filter data"], correct: 1 },
    { question: "Which of these is a popular Generative AI framework?", options: ["A. TensorFlow", "B. PyTorch", "C. Keras", "D. All of the above"], correct: 3 },
    { question: "What is the main challenge in training GANs?", options: ["A. Data scarcity", "B. Mode collapse", "C. Overfitting", "D. Underfitting"], correct: 1 },
    { question: "What is the prize for the 10th question?", options: ["A. $100,000", "B. $500,000", "C. $1,000,000", "D. $10,000"], correct: 2 }
];

function checkAnswer(option, isCorrect) {
    if (isCorrect) {
        score++;
        updateScore();
        alert('Correct! You have earned $' + moneyTree[score - 1]);
        if (score === 10) {
            showResults();
        } else {
            loadNextQuestion();
        }
    } else {
        alert('Incorrect! You leave with $' + (score > 0 ? moneyTree[score - 1] : 0));
        showResults();
    }
}

function updateScore() {
    document.querySelector('.score').textContent = 'Current Score: $' + (score > 0 ? moneyTree[score - 1] : 0);
}

function useFiftyFifty() {
    const options = document.querySelectorAll('.options li');
    let removed = 0;
    options.forEach((option, index) => {
        if (index !== questions[score].correct && removed < 2) {
            option.style.display = 'none';
            removed++;
        }
    });
}

function loadNextQuestion() {
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');
    const currentQuestion = questions[score];

    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = '';
    currentQuestion.options.forEach((option, index) => {
        const li = document.createElement('li');
        li.textContent = option;
        li.onclick = () => checkAnswer(li, index === currentQuestion.correct);
        optionsElement.appendChild(li);
    });
}

function showResults() {
    document.querySelector('.question-container').style.display = 'none';
    document.querySelector('.lifelines').style.display = 'none';
    document.querySelector('.score').style.display = 'none';
    document.getElementById('results').style.display = 'block';
    document.getElementById('final-score').textContent = 'You have earned $' + (score > 0 ? moneyTree[score - 1] : 0);
}

function restartQuiz() {
    score = 0;
    updateScore();
    document.querySelector('.question-container').style.display = 'block';
    document.querySelector('.lifelines').style.display = 'block';
    document.querySelector('.score').style.display = 'block';
    document.getElementById('results').style.display = 'none';
    loadNextQuestion();
}

function goBack() {
    window.location.href = 'activity.html';
}

document.addEventListener('DOMContentLoaded', loadNextQuestion);