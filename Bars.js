
class Bars {
    constructor(x, y, w, h) {
        this.position = {
            x: x || 0,
            y: y || 0
        };

        this.size = {
            w: w || 10,
            h: h || 10,
        };
    };


    draw(ctx) {
        // ctx.beginPath();
        // ctx.rect(this.position.x, document.documentElement.clientHeight, this.size.w, this.size.h);
        // ctx.fillStyle = 'gray';
        // ctx.fill();
        // ctx.strokeStyle = 'black';
        // ctx.lineWidth = 1;
        // ctx.stroke();
    };

    move(ctx) {

    };

    update(ctx) {
        this.draw(ctx);
        this.move(ctx);
    };

};

export default Bars;
