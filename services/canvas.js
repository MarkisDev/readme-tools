import canva from "canvas";
import fs from 'fs';
export default class CanvasService
{
    async renderName(joke)
    {
        const canvas = canva.createCanvas(500, 200, "svg");
        const ctx = canvas.getContext('2d');
        ctx.font = "bold 36px sans-serif";
        ctx.shadowColor = "rgb(190, 190, 190)";
        ctx.shadowOffsetX = 10;
        ctx.shadowOffsetY = 10;
        ctx.shadowBlur = 10;
        ctx.fillStyle = "rgb(255, 0, 0)";
        ctx.fillText(`${joke.setup}`, 500, 100);
        ctx.fillText(`${joke.delivery}`, 500, 100)
        return canvas.toBuffer();   
    }
}
