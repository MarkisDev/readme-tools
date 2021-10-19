import express from 'express';
import JokesService from '../../../services/joke.js';

const jokeInstance = new JokesService();

let router = express.Router();

router.get('/', async function (req, res)
{
    let joke = await jokeInstance.getJoke();

    let num = Object.keys(joke).length;

    if(num==1){
        console.log(joke[joke]);
        res.end(`${joke['joke']}`);         
    }
    else{
        res.end("picture")
    }
});
export default router;