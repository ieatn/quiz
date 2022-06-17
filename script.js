const quizData = [
    {
        question: 'what is 1+1',
        a: '1',
        b: '2',
        b: '2',
        c: '3',
        correct: 'b',
    }, {
        question: 'how old is dennis',
        a: '19',
        b: '20',
        c: '21',
        correct: 'c',
    }, {
        question: 'who is the president?',
        a: 'joe',
        b: 'a',
        c: 'b',
        correct: 'a',
    }
]

const quiz = document.querySelector('#quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.querySelector('#question')
const a_text = document.querySelector('#a_text')
const b_text = document.querySelector('#b_text')
const c_text = document.querySelector('#c_text')
const submitBtn = document.querySelector('#submit')

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
}

function getSelected() {
    let answer = undefined;
    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    })
    return answer;
}
function deselectAnswers() {
    answerEls.forEach((answerEl) => {
         answerEl.checked = false
    })
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++
        }
    
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = 
                `
                <h2>You answered correctly at ${score}/${quizData.length} questions. </h2>
                <button class="btn btn-danger text-center" onclick="location.reload()">Reload</button>
                `;
        }
    }
})