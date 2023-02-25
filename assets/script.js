const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById
('quiz-box')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById
('answer-buttons')

let shuffledQuestions, currentQuestionIndex
// here we are adding event listeners to get the game started 
//and to continue to the next question
startButton.addEventListener('click', startGame)
nextButton.addEventListener('click' , () =>  {
    currentQuestionIndex++
    setNextQuestion()
})
// This is the function to start the game
function startGame () {
    console.log('Started')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()

}
// A function to set the next question
function setNextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex])

}
// Here we are asking the app to show the question
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
    answerButtonsElement.appendChild(button)
     })

    }
// set up function to reset the questions after and answer
    function resetState() {
     clearStatusClass(document.body)
       nextButton.classList.add('hide')
       while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
       }
    }
    

// This is a function to select the answers to the quiz
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
// function here is to set status for correct and wrong answers.
function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
        
    }
// here we clear status class to wrong or correct.
function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}
// Here are the quiz questions.
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
    } ]
// this is the part of the quiz that sets the timer in motion.
let timerDisplay = document.getElementById('timer');
let timerSecs = 0;
let timerInterval = false;

startGame();
// When we start the game the timer activates.
function startGame() {
    if (document.getElementById('start-btn').clicked == true) 
    {
        timerSecs = 60;
        timer();
    }
    
}
// The timer counts down
function countDown() {
    timerInterval = setInterval(function(){
    timerSecs --;
    timerDisplay.textContent = timerSecs;
}, 1000)

}

