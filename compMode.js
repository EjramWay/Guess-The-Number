let question = document.getElementById('CompQ');
let startButton = document.getElementById('start');
let greaterButton = document.getElementById('great');
let lesserButton = document.getElementById('less');
let correctButton = document.getElementById('correct');

question.value = 'Let Me Guess The Number On Your Mind'


let min = 1; 
let max = 100; 
let guess; 

startButton.onclick = function() {
    min = 1;
    max = 100;
    guess = Math.floor((min + max) / 2);
    question.value = `Is your number greater or less than ${guess}?`;
};

greaterButton.onclick = function() {
    min = guess + 1;
    guess = Math.floor((min + max) / 2); 
    question.value = `Is your number greater or less than ${guess}?`;
};

lesserButton.onclick = function() {
    max = guess - 1;
    guess = Math.floor((min + max) / 2); 
    question.value = `Is your number greater or less than ${guess}?`;
};

correctButton.onclick = function() {
    question.value = `I guessed it! Your number is ${guess}.`;
    min = 1;
    max = 100;
};

restart.onclick = function(){
question.value = 'Let Me Guess The Number On Your Mind'


}
