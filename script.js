const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
import Bars from "./Bars.js";

let totalBars = 20;
let barHeight = 100;
let availableScreenWidth = document.documentElement.clientWidth;
let barWidth = availableScreenWidth / totalBars;

const createBars = () => {

    let bars = [];

    for (let i = 0; i < totalBars; i++) {
        let x = i * barWidth;
        let y = canvas.height - barWidth;
        bars.push(new Bars(x, y, barWidth, barHeight));
    };
    return bars;
};

const gameLoop = () => {
    canvas.width = document.documentElement.clientWidth / 1.2;
    canvas.height = document.documentElement.clientHeight / 1.6;
    canvas.style.border = '1px solid gray';

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    let bars = createBars();
    bars.forEach((bar) => bar.update(ctx));

    availableScreenWidth = document.documentElement.clientWidth;
    barWidth = availableScreenWidth / bars.length;

    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
