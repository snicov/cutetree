class Tree {
    constructor(a, layer, x, y, angle) {
        this.a = a;
        this.layer = layer;
        this.x = x;
        this.y = y;

        // Extract parameters for the current layer
        this.length = a[layer];
        this.length_deviation = a[10 + layer];
        this.size = a[20 + layer];
        this.red = a[30 + layer];
        this.green = a[40 + layer];
        this.blue = a[50 + layer];
        this.red_change = a[60 + layer];
        this.green_change = a[70 + layer];
        this.blue_change = a[80 + layer];
        this.branches = a[90 + layer];
        this.angle_deviation = a[100 + layer]
        this.angle = angle;
    }

    show() {
        strokeWeight(this.size);
        let col = color(
            this.red + random(this.red_change),
            this.green + random(this.green_change),
            this.blue + random(this.blue_change)
        );
        stroke(col);

        let deviated_angle = this.angle + random(-this.angle_deviation, this.angle_deviation);
        let endX = this.x + (this.length + random(-this.length_deviation, this.length_deviation)) * sin(radians(deviated_angle));
        let endY = this.y - (this.length + random(-this.length_deviation, this.length_deviation)) * cos(radians(deviated_angle));
        line(this.x, this.y, endX, endY);

        // Produce offspring branches
        if (this.layer < 9) { // Only produce offspring if not on the last layer
            for (let i = 0; i < this.branches; i++) {
                let offspring = new Tree(this.a, this.layer + 1, endX, endY, deviated_angle);
                offspring.show();
            }
        }
    }
}
