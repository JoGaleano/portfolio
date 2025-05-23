let nodes = [];
let maxDistance = 160; // Máxima distancia para conectar nodos

function setup() {
    let myCanvas = createCanvas(windowWidth, windowHeight);
    myCanvas.parent('p5-canvas');
    // Crear nodos en posiciones aleatorias
    for (let i = 0; i < 200; i++) {
    nodes.push(new Node(random(width), random(height)));
  }
}

function draw() {
  background(255);
  // Dibujar líneas entre nodos cercanos
  for (let i = 0; i < nodes.length; i++) {
    nodes[i].display();
    for (let j = i + 1; j < nodes.length; j++) {
      let d = dist(nodes[i].x, nodes[i].y, nodes[j].x, nodes[j].y);
      if (d < maxDistance) {
        stroke('rgba(82, 129, 151, 0.0824)');
        line(nodes[i].x, nodes[i].y, nodes[j].x, nodes[j].y);
      }
    }
  }
}

function mouseMoved() {
  // Hacer que los nodos reaccionen al movimiento del mouse
  nodes.forEach(node => {
    node.reactToMouse();
  });
}

class Node {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.diameter = 5;
  }

  display() {
    noStroke();
    fill('rgba(82, 118, 151, 0.3216)');
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }

  // Mover ligeramente el nodo si el mouse está cerca
  reactToMouse() {
    let d = dist(mouseX, mouseY, this.x, this.y);
    if (d < maxDistance) {
      this.x += random(-8, 8);
      this.y += random(-8, 8);
    }
  }
}
