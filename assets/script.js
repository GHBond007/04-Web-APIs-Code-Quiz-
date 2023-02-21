let timerDisplay = document.getElementById('timer');
let timerSecs = 0;
let timerInterval = false;

startQuiz();

function startQuiz() {
    if (document.getElementById('start').clicked == true) 
    {
        timerSecs = 60;
        countdown();
    }
    
}

function countDown() {
    timerInterval = setInterval(function(){
    timerSecs --;
    timerDisplay.textContent = timerSecs;
}, 1000)

}