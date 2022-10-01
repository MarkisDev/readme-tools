import express from 'express';
import JokesService from '../../../services/joke.js';
import ImageService from '../../../services/images.js';

const jokeInstance = new JokesService();
const ImageInstance = new ImageService();

let router = express.Router();

router.get('/', async function (req, res){
    let joke = await jokeInstance.getJoke();
    let image = await ImageInstance.getImage();
    let num = Object.keys(joke).length;
    res.setHeader('Content-Type', 'image/svg+xml');
    res.setHeader('Content-Type', 'application/json')
    res.setHeader('Content-Type', 'text/html');
    res.setHeader('Cache-Control', `public, max-age=10`);
    if (num === 1){
        res.render('pages/image', {
            joke: joke.joke,
            image: image
        });
    } else{
        res.render('pages/index',{
            setup: joke.setup,
            delivery: joke.delivery
        })
    }
});

export default router;