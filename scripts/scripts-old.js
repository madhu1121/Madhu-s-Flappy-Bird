var canvas = document.getElementById("mainCanvas");
var ctx = canvas.getContext("2d");


var background = new Image();
var birdImage = new Image();


background.src = '../images/background.png';
birdImage.src = '../images/flappy-bird.png';

function drawImageActualSize() {
  // Use the intrinsic size of image in CSS pixels for the canvas element
  canvas.width = this.naturalWidth;
  canvas.height = this.naturalHeight;

  // Will draw the image as 300x227, ignoring the custom size of 60x45
  // given in the constructor
  ctx.drawImage(this, 0, 0);
}

function drawImageActualSizeBird() {
    // Use the intrinsic size of image in CSS pixels for the canvas element
  
    // Will draw the image as 300x227, ignoring the custom size of 60x45
    // given in the constructor
    ctx.drawImage(this,100,100,50,50,200,50,50,50);
  }

background.onload = drawImageActualSize; // Draw when image has loaded
birdImage.onload = drawImageActualSizeBird;