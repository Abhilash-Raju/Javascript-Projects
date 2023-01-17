'use strict';
let secretNumber= Math.trunc(Math.random()*20)+1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function (){
    const guess = Number(document.querySelector('.guess').value);

    if (!guess){
            document.querySelector('.message').textContent = '⛔️ No number!';
    }
    else if (guess === secretNumber){
            document.querySelector('.message').textContent = 'Congrats you have won!';
            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.number').style.width ='30rem';
            document.querySelector('.number').textContent = secretNumber;
            if (highscore<score){
                highscore = score;
                document.querySelector('.highscore').textContent= highscore;
            }
    }
    else if (guess !== secretNumber){
        if (score > 1){
            document.querySelector('.message').textContent = guess > secretNumber ? 'Number is too High!' : 'Number is too Low!' ;
            score--;
            document.querySelector('.score').textContent = score;
        }
        else {
            document.querySelector('.message').textContent = 'You have Lost!';
        }
    }
})

document.querySelector('.again').addEventListener('click',function(){
    score =20;
    secretNumber= Math.trunc(Math.random()*20)+1;
    document.querySelector('.guess').value='';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width ='15rem';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.score').textContent = score;
})