'use strict';

let $ = require('jquery');
let pixi = require('pixi.js');
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

	pixi.loader
		.add('img/robots.png')
		.load(onAssetsLoaded);
});

function animate() {
	requestAnimationFrame(animate);

	renderer.render(stage);
}

function onAssetsLoaded(loader, res) {
	//Create the `tileset` sprite from the texture
	var texture = pixi.TextureCache['img/robots.png'];
	//Create a rectangle object that defines the position and
	//size of the sub-image you want to extract from the texture
	var rectangle = new pixi.Rectangle(0, 0, 32, 32);

	//Tell the texture to use that rectangular section
	texture.frame = rectangle;

	//Create the sprite from the texture
	var robot = new pixi.Sprite(texture);

	//Position the robot sprite on the canvas
	robot.x = 32;
	robot.y = 32;

	//Add the robot to the stage
	stage.addChild(robot);

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