
const puzzleBoard= document.querySelector('#puzzle')
const solveButton = document.querySelector('#solve-button')
const solutionDisplay = document.querySelector('#solution')
const squares = 81
const submission = []

for(let i =0;i< squares;i++){
    const inputElement = document.createElement('input');
    inputElement.setAttribute('type','number')
    inputElement.setAttribute('min','1')
    inputElement.setAttribute('max','9')
    if(
        ((i%9==0))
    )
    puzzleBoard.appendChild(inputElement)

}

const joinValues = () => {
    const inputs = document.querySelectorAll('input')
    inputs.forEach(input => {
        if(input.value){
            submission.push(input.value)
        }
        else {
            submission.push('.')    
        }
    })
    console.log(submission)
}

const populateValues = (isSolvable, isSolution) => {
    const inputs = document.querySelectorAll('input')
    if(isSolvable && isSolution){
        inputs.forEach((input,i) =>{
            input.value = solution[i]
        } )
        solutionDisplay.innerHTML='This is the Answer'
    }
    solutionDisplay.innerHTML='This is not Solvable'
}
const solve = () => {
        joinValues()
        const data = submission.join('')
        console.log('data',data)
        const options = {
        method: 'POST',
        url: 'https://solve-sudoku.p.rapidapi.com/',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': '0388ef3eb8msh8a814f7e9a9f8e5p12ed3cjsn9db707eb0404',
            'X-RapidAPI-Host': 'solve-sudoku.p.rapidapi.com'
        },
        data: data
        };

        axios.request(options).then( (response) => {
            console.log(response.data);
            populateValues(response.data.solvable , response.data.solution)
        }).catch( (error) =>{
            console.error(error);
        });
}


solveButton.addEventListener('click', solve)