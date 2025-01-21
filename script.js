const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
import Bars from "./Bars.js";

let availableScreenWidth = document.documentElement.clientWidth;
let totalBars = 20;
let barWidth = availableScreenWidth / totalBars;
let barHeight = 100;

let barPosition = {
    x: () => {
        return barWidth
    },
    y: 0
};

console.log(barPosition.x());

const bars = Array.from({ length: totalBars }, () => {
    return new Bars(barPosition.x, barPosition.y, barWidth, barHeight);
});

const gameLoop = () => {
    canvas.width = document.documentElement.clientWidth / 1.2;
    canvas.height = document.documentElement.clientHeight / 1.6;
    canvas.style.border = '1px solid gray';

    bars.forEach((bar) => bar.update(ctx));

    availableScreenWidth = document.documentElement.clientWidth;
    barWidth = availableScreenWidth / bars.length;

    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
