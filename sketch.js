let step			= 50;
let cubeCount		= 2
let cubeSpacing	= 20;
let cubeW			= 30;
let cubeH			= 30;
let cubeD			= 10;
let multiplier		= 100;
let mouseZ		= 0;

let rotate 		= false;

let x = 0;
let staticX = 0;
let y = 0;
let staticY = 0;
let z = 0;

let rotY = 0;
let rotX = 0;
let angle = 0;

let map			= [
	[1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0],
	[1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0],
	[1,0,0,1,0,0,1,1,0,0,1,1,1,0,0,1,0,0,0,1,1,0,0,0,0,0],
	[1,1,1,0,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0],
	[1,0,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0],
	[1,0,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0],
	[1,0,0,0,0,0,1,1,1,0,1,1,1,0,0,1,1,0,0,1,1,0,0,0,0,0],
]

let area		= (cubeW * map.length);
let width		= window.innerWidth - 100;
let height	= window.innerHeight - 100;

function setup() {
	createCanvas(width, height, WEBGL);
}

function mouseWheel(event) {
	mouseZ += (event.delta);
}

function mousePressed() {
	rotate = true;
	staticX = mouseX - (window.innerWidth * 0.5);
	staticY = mouseY - (window.innerHeight * 0.5);
}

function mouseReleased() {
	rotate = false;
}

function draw() {
	background(175);
	ambientLight(255);
	drawStructure(map);
}

function drawStructure(map) {
	if (rotate) {
		y = staticY;

		angle = angle < 360 ? (angle + 1) : 0;
		rotY = radians(mouseX);
		rotX = radians(mouseY);
	} else {
		x	= mouseX - (window.innerWidth * 0.5)//0;
		y	= mouseY - (window.innerHeight * 0.5);
		z	= mouseZ;
	}
	
	for (let i = 0; i < map.length; i++) {
		x = !rotate ? mouseX - (window.innerWidth * 0.5) : staticX;
		for (let j = 0; j < map[i].length; j++) {
			if (map[i][j] == 1) drawCube(x, y, z, cubeW, cubeW, cubeD);
			x += cubeW;
		}
		y += cubeH;
	}
}

function drawCube(x, y, z, boxW, boxH, boxD) {
	push();
	translate(x, y, z);
	normalMaterial();

	rotateY(rotY);
	rotateX(rotX);
	
	box(boxW, boxH, boxD);
	pop();
}
