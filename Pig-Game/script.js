'use strict';

let score0 = document.getElementById('score--0');
let score1 = document.getElementById('score--1');
let dice = document.querySelector('.dice');
let player0 = document.querySelector('.player--0');
let player1 = document.querySelector('.player--1');

let newGame = document.querySelector('.btn--new');
let roll = document.querySelector('.btn--roll');
let hold = document.querySelector('.btn--hold');

let current0 = document.getElementById('current--0');
let current1 = document.getElementById('current--1');

let scores, activePlayer,playing, sum;
let init = function(){
    scores = [0,0];
    sum = 0;
    activePlayer = 0
    playing = true;
    dice.style.visibility='hidden';
    score0.textContent = '0';
    score1.textContent = '0';
    current0.textContent = '0';
    current1.textContent = '0';
    player0.classList.remove('player--winner')
    player1.classList.remove('player--winner')
    player0.classList.add('player--active')
    player1.classList.remove('player--active')
}

init();

let switchPlayer = function (){
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    sum =0;
    player0.classList.toggle('player--active')
    player1.classList.toggle('player--active')
}

roll.addEventListener('click',function(){
    if(playing){
        let current = Number(Math.trunc(Math.random()*6))+1;
        dice.src=`dice-${current}.png`;
        dice.style.visibility='visible';
        if(current !== 1) 
        {
                sum += current;
                document.getElementById(`current--${activePlayer}`).textContent = sum;
         }
            else {
                switchPlayer();
            }
    }
    })

hold.addEventListener('click',function(){
    if(playing){
    scores[activePlayer] += sum;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
    if(scores[activePlayer]>=10){
        playing = false;
        dice.style.visibility='hidden';
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
    }
    else {
        switchPlayer()
    }
    }
})
    
newGame.addEventListener('click',init);