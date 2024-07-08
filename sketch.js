function setup() {
        createCanvas(800, 800);
        background(255);

        let agentColor = color(100, 102, 153);
        let initialAgent = new Agent(400, 400, 50, 5, agentColor, radians(180), 2, 5);
        initialAgent.show();
      }

      function draw() {
        // No continuous drawing needed
        noLoop();
      }