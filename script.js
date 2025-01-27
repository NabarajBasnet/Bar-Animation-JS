const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
import Bars from "./Bars.js";

let totalBars = 20;
let bars = [];
let barWidth;
let availableScreenWidth = document.documentElement.clientWidth;

const resizeCanvas = () => {
    canvas.width = document.documentElement.clientWidth / 1.2;
    canvas.height = document.documentElement.clientHeight / 1.6;
    canvas.style.border = '1px solid gray';

    availableScreenWidth = canvas.width;
    barWidth = availableScreenWidth / totalBars;

    bars = [];
    for (let i = 0; i < totalBars; i++) {
        let barX = i * barWidth;
        bars.push(new Bars(barX, canvas.height, barWidth, 0, canvas));
    };
};

resizeCanvas();
window.addEventListener('resize', resizeCanvas);

const gameLoop = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    bars.forEach((bar) => bar.update(ctx));

    requestAnimationFrame(gameLoop);
};

gameLoop();
