class Agent {
    constructor(a, layer, x, y) {
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
        this.angle = a[100 + layer];
        this.angle_deviation = a[110 + layer];
    }

    show() {
        strokeWeight(this.size);
        let col = color(
            this.red + random(0, this.red_change),
            this.green + random(0, this.green_change),
            this.blue + random(0, this.blue_change)
        );
        stroke(col);

        let endX = this.x + (this.length + random(-this.length_deviation, this.length_deviation)) * sin(radians(this.angle + random(-this.angle_deviation, this.angle_deviation)));
        let endY = this.y - (this.length + random(-this.length_deviation, this.length_deviation)) * cos(radians(this.angle + random(-this.angle_deviation, this.angle_deviation)));
        line(this.x, this.y, endX, endY);

        // Produce offspring agents
        if (this.layer < 9) {  // Only produce offspring if not on the last layer
            for (let i = 0; i < this.branches; i++) {
                
                let offspring = new Agent(this.a, this.layer + 1, endX, endY);
          
                offspring.show();
            }
        }
    }
}
