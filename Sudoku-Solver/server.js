const PORT = 8000

const axios = require('axios');
const express = require('express')
const cors = require('cors')

require('dotenv').config()

const app = express();
app.use(cors())
app.use(express.json())

app.post('/solve',(req,res) =>{
    const options = {
        method: 'POST',
        url: 'https://solve-sudoku.p.rapidapi.com/',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': process.env.RAPID_API_KEY,
            'X-RapidAPI-Host': 'solve-sudoku.p.rapidapi.com'
        },
        data: {puzzle:req.body.numbers}
        };

        axios.request(options).then( (response) => {
            console.log(response.data);
            populateValues(response.data.solvable , response.data.solution)
        }).catch( (error) =>{
            console.error(error);
        });
})

app.listen(PORT, () => console.log(`Server is listening to Port ${PORT}`))