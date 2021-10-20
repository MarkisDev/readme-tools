import express from 'express';
import CanvasService from '../../../services/canvas.js';
import JokesService from '../../../services/joke.js';

const jokeInstance = new JokesService();
const canvasInstance = new CanvasService();

let router = express.Router();
router.get('/', async function (req, res)
{
    let joke = await jokeInstance.getJoke();
    let canvas = await canvasInstance.singleJoke();
    let num = Object.keys(joke).length;
    res.setHeader('Content-Type', 'image/svg+xml');
    res.setHeader('Cache-Control', `public, max-age=10`);
    res.end(canvas);
    // if (num == 1)
    // {
    //     console.log(joke[joke]);
    //     res.end(`${ joke['joke']}`);

    // }
    // else
    // {
    //     res.end("picture")
    // }
});

export default router;