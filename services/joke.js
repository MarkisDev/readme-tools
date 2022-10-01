
import express from 'express';
import axios from 'axios';

export default class JokesService
{
    async getJoke()
    {

        const links = ['https://geek-jokes.sameerkumar.website/api?format=json', 'https://v2.jokeapi.dev/joke/Programming?type=twopart'];
        const random = Math.floor(Math.random() * 2);
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
