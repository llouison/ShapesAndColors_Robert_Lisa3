/*
https://vimeo.com/channels/learningp5js/138331676
*/

var circleX = 50;
var speed = 3;

function setup() {
  createCanvas(600, 480);
}

function draw() {
  // background
  background(120, 110, 250);
  // ellipse
  noStroke();
  fill(255, 10, 255);
  ellipse(circleX, 255, 55, 55);
  
  if ( circleX > width || circleX < 0) {
    speed =  -speed;
  } 

  circleX = circleX + speed;
}