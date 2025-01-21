const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
import Bars from "./Bars.js";

const resizeCanvas = () => {

    canvas.width = document.documentElement.clientWidth / 1.2;
    canvas.height = document.documentElement.clientHeight / 1.6;
    canvas.style.backgroundColor = 'gray';

    requestAnimationFrame(resizeCanvas);
};

requestAnimationFrame(resizeCanvas);

const bars = Array.from({ length: 20 }, () => {
    return new Bars(10, 10, 10, 10);
});

const gameLoop = () => {
    bars.forEach((bar) => bar.update(ctx));

    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);

