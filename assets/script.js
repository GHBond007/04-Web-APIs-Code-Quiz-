const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById
('quiz-box')
const questionElement = document.getElementById('questions')
const answerButtonElement = document.getElementById('answer-buttons')

let shuffledQuestions , currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click' , () =>  {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame () {
    console.log('Started')
    startButton.classList.add('hide')
    shuffledQuestions =questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()

}

function setNextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex])

}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer =>  {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
        button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonElement.appendChild(button)
     })

    }

    function resetState() {
     clearStatusClass(document.body)
       nextButton.classList.add('hide')
       while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
       }
    }
    


function selectAnswer(e) { 
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'restart'
        startButton.classList.remove('hide')
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    }
const questions = [
    {
        question : 'Which built-in method returns the calling string value converted to upper case?',
         answers: [
            {text: '1. to UpperCase()', correct: true},
            {text: '2. toUpper()', correct: false},
            {text: '3. changeCase(case)', correct: false},
            {text: '4. none of the above', correct: false},
    
] 
    },
    {
        question : 'Which of the following function of Array object adds and/or removes elements from an array?',
         answers: [
            {text: '1. toSource()', correct: false},
            {text: '2. sort()', correct: false},
            {text: '3. splice()', correct: true},
            {text: '4. unshift()', correct: false},
    
] 
    },
    {
        question : 'Inside which HTML element do we put the JavaScript?',
         answers: [
            {text: '1. <javaScript>', correct: false},
            {text: '2. <script>', correct: true},
            {text: '3. <scripting>', correct: false},
            {text: '4. <js>', correct: false},
    
] 
    },
    {
        question : 'Which built-in method calls a function for each element in an array?',
         answers: [
            {text: '1. while', correct: false},
            {text: '2. loop', correct: false},
            {text: '3. forEach', correct: true},
            {text: '4. none of the above of the above', correct: false},
    
] 
    },
    {
        question : 'Which of the following function of Array object joins all elements of an array into a string?',
         answers: [
            {text: '1. concat()', correct: false},
            {text: '2. join()', correct: true},
            {text: '3. pop()', correct: false},
            {text: '4. map()', correct: false},
    
] 
    },
]


let timerDisplay = document.getElementById('timer');
let timerSecs = 0;
let timerInterval = false;

startQuiz();

function startQuiz() {
    if (document.getElementById('start').clicked == true) 
    {
        timerSecs = 60;
        timer();
    }
    
}

function countDown() {
    timerInterval = setInterval(function(){
    timerSecs --;
    timerDisplay.textContent = timerSecs;
}, 1000)

}

