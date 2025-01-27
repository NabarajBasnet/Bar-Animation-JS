const directions = [-1, 1];

class Bars {
    constructor(x, y, w, h, canvas) {
        this.position = {
            x: x || 0,
            y: y || 0,
        };

        this.size = {
            w: w || 10,
            h: h || 0,
        };

        this.canvas = canvas
    };

    draw(ctx) {

        ctx.beginPath();
        ctx.rect(this.position.x, this.position.y, this.size.w, this.size.h);
        ctx.stroke();
        ctx.lineWidth = 4;
        ctx.strokeStyle = 'black';
        ctx.fillStyle = 'gray';
        ctx.fill();
    };

    move(ctx) {
        this.position.y = this.position.y - 1;
        this.size.h = this.size.h + 1;
    };

    update(ctx) {
        this.draw(ctx);
        this.move(ctx);
    };

};

export default Bars;
