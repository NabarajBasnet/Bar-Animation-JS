const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
import Bars from "./Bars.js";

let barWidth = 10;
let barHeight = 10;

const bars = Array.from({ length: 20 }, () => {
    return new Bars(10, 10, barWidth, barHeight);
});

const resizeCanvas = () => {

    canvas.width = document.documentElement.clientWidth / 1.2;
    canvas.height = document.documentElement.clientHeight / 1.6;
    canvas.style.border = '1px solid gray';

    requestAnimationFrame(resizeCanvas);
};

requestAnimationFrame(resizeCanvas);

const gameLoop = () => {
    bars.forEach((bar) => bar.update(ctx));

    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);

