const planets = [
    { name: "Mercury", distance: 50, diameter: 5, color: "gray", orbitSpeed: 0.24 },
    { name: "Venus", distance: 75, diameter: 10, color: "orange", orbitSpeed: 0.62 },
    { name: "Earth", distance: 100, diameter: 10, color: "blue", orbitSpeed: 1 },
    { name: "Mars", distance: 130, diameter: 8, color: "red", orbitSpeed: 1.88 },
];

const sunDiameter = 30;

function setup() {
    let canvas = createCanvas(800, 600);
    canvas.parent("solar-system-container");
    background(0);
}

function draw() {
    background(0);
    translate(width / 2, height / 2); //the origin to the center of the canvas

    //the sun
    fill("yellow");
    noStroke();
    ellipse(0, 0, sunDiameter);

    //the planets and their orbits
    planets.forEach(planet => {
        //the planet's position based on its orbit
        const angle = frameCount * (1 / planet.orbitSpeed);
        const x = cos(radians(angle)) * planet.distance;
        const y = sin(radians(angle)) * planet.distance;

        //the orbit
        noFill();
        stroke(255, 50);
        ellipse(0, 0, planet.distance * 2);

        //the planet
        fill(planet.color);
        noStroke();
        ellipse(x, y, planet.diameter);
    });
}

function mousePressed() {
    const centerX = width / 2;
    const centerY = height / 2;
    const distanceToSun = dist(mouseX, mouseY, centerX, centerY);

    if (distanceToSun <= sunDiameter / 2) {
        alert("You clicked on the Sun!");
    } else {
        planets.forEach(planet => {
            const angle = frameCount * (1 / planet.orbitSpeed);
            const x = centerX + cos(radians(angle)) * planet.distance;
            const y = centerY + sin(radians(angle)) * planet.distance;
            const distanceToPlanet = dist(mouseX, mouseY, x, y);
            const distanceToOrbit = Math.abs(distanceToSun - planet.distance);

            if (distanceToPlanet <= planet.diameter / 2 || distanceToOrbit <= planet.diameter / 2) {
                alert(`You clicked on ${planet.name} or its orbit.`);
        }
    });
}}
