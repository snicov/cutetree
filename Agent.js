class Agent {
        constructor(x, y, length, size, col, direction, numOffsprings, layers) {
          this.x = x;
          this.y = y;
          this.length = length;
          this.size = size;
          this.col = col;
          this.direction = direction;
          this.numOffsprings = numOffsprings;
          this.layers = layers;
        }

        show() {
          strokeWeight(this.size);
          stroke(this.col);
          let endX = this.x + this.length * sin(this.direction);
          let endY = this.y + this.length * cos(this.direction);
          line(this.x, this.y, endX, endY);

          // Produce offspring agents
          if (this.layers > 0) {
            for (let i = 0; i < this.numOffsprings; i++) {

              
              let newDirection = this.direction + radians(random(-30, 30)); // Slightly randomize direction for each offspring
              
              let newLength = max(this.length + random(-5,5),0)
              
              let newColor = color(red(this.col) + random(-10,10), green(this.col) + random(-10, 10), blue(this.col) + random(-10, 10)) 
              
              let offspring = new Agent(endX, endY, newLength * 0.8, this.size, newColor, newDirection, this.numOffsprings, this.layers - 1);


              offspring.show();
            }
          }
        }
      }
