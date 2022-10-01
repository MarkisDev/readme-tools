// get gif from tenor gif api
import express from 'express';
import axios from 'axios';
import * as dotenv from 'dotenv'
dotenv.config();

export default class ImageService
{
    async getImage()
    {
        var apikey = "LIVDSRZULELA"; //demo key
        var lmt = 8;
        var search_term = 'laugh'
        var url = "https://g.tenor.com/v1/search?q=" + search_term + "&key=" + apikey + "&limit=" + lmt;
        try{ 
            const response = await axios.post(url)
            var items = response.data.results;
            var item = items[Math.floor(Math.random()*items.length)];
            return item.media[0].gif.url
        }catch(err){
            console.error(err)
            return err
        }
    }
}