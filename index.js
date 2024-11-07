let field = document.getElementById('enterNumber');
let status = document.getElementById('status');
let start = document.getElementById('start');
let verify = document.getElementById('verify');
let restart = document.getElementById('restart');
let scoreDisplay = document.getElementById('score')
let compMode = document.getElementById('compMode')

let playerChoice;
let compChoice = 0; 
let score = 0;


status.value = "Press Start";
scoreDisplay.value = "Score:" + 0;

start.onclick = function() {
    compChoice = Math.floor(Math.random() * 100)+1;
status.value = "Enter Your Number"
field.value = 0;

}

verify.onclick = function() {
    playerChoice = parseInt(field.value);

    if (playerChoice > 100 || playerChoice < 1){
        status.value = "Are you messing with me ?"
            }

    else if (playerChoice > compChoice) {
        status.value = "The Number You Chose is Greater!!";
    } 
    
    else if (playerChoice === compChoice) {
        status.value = "You Guessed it right!!";
        field.value = '';
        function updateScore(points) {
            score += points;
            scoreDisplay.value = `Score: ${score}`;
        }

        updateScore(5);

    } 
    
    else if (playerChoice < compChoice) {
        status.value = "The Number You Chose is Lesser!!";
    } 
}

restart.onclick = function(){
    score = 0;
    scoreDisplay.value = `Score: ${score}`;
status.value = "Enter your Number";
field.value = 0;

}

compMode.onclick = function(){



    
}


