import express from 'express';

export function init(app)
{
    app.get('/', function (req, res)
    {
        res.end("Hello world!");
    });

}