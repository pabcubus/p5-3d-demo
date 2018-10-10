let width		= 800;
let height		= 800;
let step		= 50;
let cubeCount	= 2
let cubeSpacing	= 20;
let cubeW		= 30;
let cubeH		= 100;
let cubeD		= 10;
let multiplier	= 100;

function setup() {
	createCanvas(width, height, WEBGL);
}

function draw() {
	background(175);
	ortho();
	ambientLight(255);

	rotateY(PI/(multiplier/mouseX));
	rotateX(PI/(multiplier/mouseY));

	let pair		= (cubeCount % 2 == 0) ? true : false;
	let sum1		= (cubeW * cubeCount) + (cubeSpacing * (cubeCount - 1));
	let initialX	= 0 - ((cubeW + cubeSpacing) * 1);
/*
	drawCube(0 - ((cubeW + cubeSpacing) * 1), 0, 0, cubeW, cubeH, cubeD);
	drawCube(0 - ((cubeW + cubeSpacing) * 0), 0, 0, cubeW, cubeH, cubeD);
	drawCube(cubeW + cubeSpacing, 0, 0, cubeW, cubeH, cubeD);
	*/

	drawCube(0 - ((cubeW + cubeSpacing) * 1), 0, 0, cubeW, cubeH, cubeD);
	drawCube(0 - ((cubeW + cubeSpacing) * 0), 0, 0, cubeW, cubeH, cubeD);
	drawCube(cubeW + cubeSpacing, 0, 0, cubeW, cubeH, cubeD);

/*
	for (let count = 0; count < cubeCount; count++) {
		push();

		stroke(155);
		let posX = initialX + ((cubeW + cubeSpacing) * count);
		translate(posX, 0, 0);
		normalMaterial();
		box(cubeW, cubeH, cubeD);

		pop();
	}*/
}

function drawCube(x, y, z, boxW, boxH, boxD) {
	push();
	translate(x, 0, 0);
	normalMaterial();
	box(boxW, boxH, boxD);
	pop();
}
