const computerChoiceDisplay= document.getElementById('computer-choice')
const userChoiceDisplay= document.getElementById('user-choice')
const resultDisplay= document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click',(e)=>{
   userChoice = e.target.id
   userChoiceDisplay.innerHTML = userChoice
   generateComputerChoice()
   getResult()
}))
function generateComputerChoice (){
 const random = Math.floor(Math.random()*possibleChoices.length) +1
if(random ===1){
    computerChoice ='rock'
}
if(random ===2){
    computerChoice ='paper'
}
if(random ===3){
    computerChoice ='scissors'
}
computerChoiceDisplay.innerHTML = computerChoice
}

function getResult(){
    if(computerChoice === userChoice){
        result ='Its a Draw'
    }
    if(computerChoice === 'rock' && userChoice === 'paper'){
        result ='You Win'
    }
    if(computerChoice === 'rock' && userChoice === 'scissors'){
        result ='You have Lost'
    }
    if(computerChoice === 'paper' && userChoice === 'scissors'){
        result ='You Win'
    }
    if(computerChoice === 'scissors' && userChoice === 'paper'){
        result ='You jave Lost'
    }
    if(computerChoice === 'paper' && userChoice === 'rock'){
        result ='You have Lost'
    }
    if(computerChoice === 'scissors' && userChoice === 'rock'){
        result ='You Win'
    }
    resultDisplay.innerHTML = result
}