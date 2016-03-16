'use strict';

let $ = require('jquery');
let PIXI = require('pixi.js');
let stage, renderer;

$(document).ready(() => {
	let height = 480;
	let width = 640;

	renderer = new PIXI.WebGLRenderer(width, height);
	document.body.appendChild(renderer.view);

	stage = new PIXI.Container();

	// Make a primitive
	//let graphic = createMyGraphic();
	//stage.addChild(graphic);

	PIXI.loader
		.add('img/robots.png')
		.load(onAssetsLoaded);
});

function animate() {
	renderer.render(stage);

	requestAnimationFrame(animate);
}

function createRobotSprite() {
	var robotDownClip = [];

	for( let i = 0; i < 3; i++ ) {
		let rectangle = new PIXI.Rectangle(0 + 32 * i, 0, 32, 32);
		let texture = new PIXI.Texture(PIXI.utils.TextureCache['img/robots.png'], rectangle);
		robotDownClip.push(texture);
	}

	//Create the sprite from the texture
	var robot = new PIXI.extras.MovieClip(robotDownClip);

	//Position the robot sprite on the canvas
	robot.x = 16;
	robot.y = 16;
	robot.animationSpeed = 0.1;
	robot.play();
	return robot;
}

function onAssetsLoaded(loader, res) {
	let robot = createRobotSprite();

	//Add the robot to the stage
	stage.addChild(robot);

	console.log("Robot is playing: " + robot.playing);
	// When done.
	requestAnimationFrame(animate);
}

function createMyGraphic() {
	let graphics = new PIXI.Graphics();

	// set a fill and line style
	graphics.beginFill(0xFF3300);
	graphics.lineStyle(4, 0xffd900, 1);

	// draw a shape
	graphics.moveTo(50, 50);
	graphics.lineTo(250, 50);
	graphics.lineTo(100, 100);
	graphics.lineTo(50, 50);
	graphics.endFill();

	// set a fill and a line style again and draw a rectangle
	graphics.lineStyle(2, 0x0000FF, 1);
	graphics.beginFill(0xFF700B, 1);
	graphics.drawRect(50, 250, 120, 120);

	// draw a rounded rectangle
	graphics.lineStyle(2, 0xFF00FF, 1);
	graphics.beginFill(0xFF00BB, 0.25);
	graphics.drawRoundedRect(150, 450, 300, 100, 15);
	graphics.endFill();

	// draw a circle, set the lineStyle to zero so the circle doesn't have an outline
	graphics.lineStyle(0);
	graphics.beginFill(0xFFFF0B, 0.5);
	graphics.drawCircle(470, 90, 60);
	graphics.endFill();
	return graphics;
}