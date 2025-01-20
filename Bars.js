
class Bars {
    constructor() { };

    draw(ctx) {
        ctx.beginPath();
        ctx.rect(0, 0, 10, 10);
        ctx.fill();
    };

    move(ctx) { };

    update(ctx) {
        this.draw(ctx);
        this.move(ctx);
    };

};

export default Bars;
