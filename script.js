const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
import Bars from "./Bars.js";

canvas.width = window.screen.availWidth / 1.2;
canvas.height = window.screen.availHeight / 1.6;
canvas.style.backgroundColor = 'gray';

const bars = Array.from({ length: 20 }, () => {
    return new Bars(10,10,10,10);
})

const gameLoop = () => {
    bars.forEach((bar) => bar.update(ctx));

    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
