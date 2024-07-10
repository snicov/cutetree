let agents = [];
let saveIndex = 0;

function setup() {
    createCanvas(800, 800);

    for (let i = 0; i < 1000; i++) {
        let array = createArray();
        agents.push(new Agent(array, 0, 400, 600, 0));
    }

    saveNextAgent();
}

function createArray() {
    let the_array = [
        50 + random(50), 40 + random(40), 30 + random(30), 25 + random(25), 20 + random(20), 15 + random(15), 12 + random(12), 10 + random(10), 7 + random(7), 5 + random(5),
        random(5), random(5), random(5), random(3), random(3), random(3), random(2), random(2), random(2), random(1), // length deviation
        5 + random(2), 4 + random(2), 3 + random(2), 3 + random(2), 3 + random(2), 2 + random(1), 2 + random(1), 2 + random(1), 1 + random(1), random(1), // size
        255 * random(1), 255 * random(1), 255 * random(1), 255 * random(1), 255 * random(1), 255 * random(1), 255 * random(1), 255 * random(1), 255 * random(1), 255 * random(1), // red
        255 * random(1), 255 * random(1), 255 * random(1), 255 * random(1), 255 * random(1), 255 * random(1), 255 * random(1), 255 * random(1), 255 * random(1), 255 * random(1), // green
        255 * random(1), 255 * random(1), 255 * random(1), 255 * random(1), 255 * random(1), 255 * random(1), 255 * random(1), 255 * random(1), 255 * random(1), 255 * random(1), // blue
        10 * random(1), 10 * random(1), 10 * random(1), 10 * random(1), 10 * random(1), 10 * random(1), 10 * random(1), 10 * random(1), 10 * random(1), 10 * random(1), // red change
        10 * random(1), 10 * random(1), 10 * random(1), 10 * random(1), 10 * random(1), 10 * random(1), 10 * random(1), 10 * random(1), 10 * random(1), 10 * random(1), // green change
        10 * random(1), 10 * random(1), 10 * random(1), 10 * random(1), 10 * random(1), 10 * random(1), 10 * random(1), 10 * random(1), 10 * random(1), 10 * random(1), // blue change
        2 + random(2), 2 + random(2), 2 + random(2), 2 , 4, 4, 4, 4, 4, 4, // number of branches
        0, 0, 0, 15, 15, 25, 25, 35, 35, 35, // angle
        0, random(120), random(120), random(120), random(120), random(120), random(120), random(120), random(120), random(120) // angle deviation
    ];

    return the_array;
}

function saveNextAgent() {
    if (saveIndex < agents.length) {
        background(255); // Clear the canvas for each new agent
        agents[saveIndex].show();
        save(`agent_${saveIndex}.png`);
        saveIndex++;
        setTimeout(saveNextAgent, 500); // Delay before saving the next agent
    }
}

function draw() {
    noLoop();
}
