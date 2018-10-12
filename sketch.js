let step		= 50;
let cubeCount	= 2
let cubeSpacing	= 20;
let cubeW		= 30;
let cubeH		= 30;
let cubeD		= 70;
let multiplier	= 100;
let mouseZ		= 0;

let map			= [
	[1,1,1,1,1,1,0,0,0,0,0],
	[1,0,0,0,0,1,0,0,0,0,0],
	[1,0,0,0,0,1,1,0,0,0,0],
	[1,0,0,0,0,0,1,1,1,1,1],
	[1,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,1,1,1,0,0,0,1],
	[1,1,1,1,1,0,1,1,1,1,1]
]

let area		= (cubeW * map.length);
let width		= area * 2;
let height		= width;

function setup() {
	createCanvas(width, height, WEBGL);
}

function mouseWheel(event) {
	mouseZ += (event.delta);
}

function draw() {
	background(175);
	//ortho();
	ambientLight(255);

	//rotateY(PI / (multiplier / mouseX));
	//rotateX(QUARTER_PI * -1);
	//rotateX(PI / (multiplier / mouseY));

	camera(area/2+(-mouseX), area/2+(-mouseY), mouseZ, 0, 0, 0, 0, 0, 0);

	drawStructure(map);
}

function drawStructure(map) {
	let x			= 0 - ((map.length * 30)/2);
	let y			= 0 - ((map[0].length * 30)/2);

	for (let i = 0; i < map.length; i++) {
		x = 0 - ((map[0].length * 30)/2);
		for (let j = 0; j < map[i].length; j++) {
			if (map[i][j] == 1) drawCube(x, y, 0, cubeW, cubeW, cubeD);
			x += 30;
		}
		y += 30;
	}
}

function drawCube(x, y, z, boxW, boxH, boxD) {
	push();
	translate(x, y, z);
	normalMaterial();
	box(boxW, boxH, boxD);
	pop();
}
