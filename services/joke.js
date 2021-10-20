
import express from 'express';
import axios from 'axios';

export default class JokesService
{
    async getJoke()
    {

        const links = ['https://geek-jokes.sameerkumar.website/api?format=json', 'https://jokeapi.dev/'];
        const random = Math.floor(Math.random() * links.length);
        const link = links[random];

        try
        {
            const response = await axios.get(`${link}`);
            return response.data;
        } catch (error)
        {
            return error;
            console.error(error);
        };
    }
}
