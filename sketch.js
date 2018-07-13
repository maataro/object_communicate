let bubbles = [];
function setup() {
	createCanvas(600, 400);
	for (let i = 0; i < 10; i++) {
		let x = random(width);
		let y = random(height);
		let r = random(20, 50);
		bubbles[i] = new Bubble(x, y, r);
	}	
}

function draw() {
	background(0);


	for (let i = 0; i < bubbles.length; i++) {
		for (let j = i + 1; j < bubbles.length; j++) {
			if(bubbles[i].intersect(bubbles[j])) {
				bubbles[i].isIntersect = true;
				bubbles[j].isIntersect = true;
			}
		}
		if (bubbles[i].isIntersect) {
			bubbles[i].changeColor(255);
		} else {
			bubbles[i].changeColor(0);
		}
	}

	for(let elt of bubbles) {
		elt.move();
		elt.show();
		elt.isIntersect = false;
	}
}


class Bubble {
	constructor(x, y, r) {
		this.x = x;
		this.y = y;
		this.r = r;
		this.col = 0;
		this.isIntersect = false;
	}

	move() {
		this.x = this.x + random(-3, 3);
		this.y = this.y + random(-3, 3);
	}

	show() {
		fill(this.col);
		stroke(255);
		ellipse(this.x, this.y, this.r * 2);
	}

	changeColor(col) {
		this.col = col;
	}

	intersect(other_bubble) {
		let d = dist(this.x, this.y,  other_bubble.x, other_bubble.y);

		return d < (this.r + other_bubble.r)
	}
}
