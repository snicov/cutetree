function setup() {
        createCanvas(800, 800);
        background(255);


        let array1 = [400, 400, 50, 5, 100, 102, 153, 180, 2, 5]

        let agentColor = color(100, 102, 153);
        let initialAgent = new Agent(array1);
        //let initialAgent = new Agent(400, 400, 50, 5, agentColor, radians(180), 2, 5);
        initialAgent.show();
      }

      function draw() {
        // No continuous drawing needed
        noLoop();
      }