class Agent {
    constructor(a) {
        this.x = a[0];
        this.y = a[1];
        this.length = a[2];
        this.size = a[3];
        this.col = color(a[4], a[5], a[6]);
        this.direction = a[7];
        this.numOffsprings = a[8];
        this.layers = a[9];
    }

    show() {
        strokeWeight(this.size);
        stroke(this.col);
        let endX = this.x + this.length * sin(radians(this.direction));
        let endY = this.y + this.length * cos(radians(this.direction));
        line(this.x, this.y, endX, endY);

        // Produce offspring agents
        if (this.layers > 0) {
            for (let i = 0; i < this.numOffsprings; i++) {
                let newDirection = this.direction + random(-30, 30);
                let newLength = max(this.length + random(-5, 5), 0);
                let newColor = color(
                    red(this.col) + random(-20, 20),
                    green(this.col) + random(-20, 20),
                    blue(this.col) + random(-20, 20)
                );
                let newNumOffsprings = this.numOffsprings + 2;
                let newSize = this.size * 0.8;
                let newLayers = this.layers - 1;

                let newA = [
                    endX,
                    endY,
                    newLength,
                    newSize,
                    red(newColor),
                    green(newColor),
                    blue(newColor),
                    newDirection,
                    newNumOffsprings,
                    newLayers
                ];

                let offspring = new Agent(newA);
                offspring.show();
            }
        }
    }
}
