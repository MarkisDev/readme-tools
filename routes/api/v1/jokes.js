import express from 'express';

let router = express.Router();

router.get('/', function (req, res)
{
    res.end("Hello Joke!");
});
export default router;