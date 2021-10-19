import express from 'express';
import apiRouter from './api/index.js';

export function init(app)
{
    app.get('/', function (req, res)
    {
        res.end("Hello world!");
    });
    app.use('/api', apiRouter);
}