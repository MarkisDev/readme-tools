import express from 'express';
import jokesRouter from './jokes.js';

let router = express.Router();

router.use('/jokes', jokesRouter);

export default router;