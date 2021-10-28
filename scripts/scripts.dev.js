"use strict";

var upTower = document.getElementById("upTower");
var downTower = document.getElementById("downTower");
var gameArea = document.getElementById("myGameArea");
var bird = document.getElementById("myBird");
var scoreBoard = document.getElementById("score__placeholder");
var leftPosition = 950;
var gameID;
var counter = 0; //generating random height of div

var loadGame = function loadGame() {
  var snd = new Audio("../images/retro.wav");
  snd.play();
  leftPosition = leftPosition - 50;
  upTower.style.left = "".concat(leftPosition, "px");
  upTower.style.height = "".concat(Math.random() * 300, "px");
  leftPosition = leftPosition - 50;
  downTower.style.left = "".concat(leftPosition, "px");
  downTower.style.height = "".concat(Math.random() * 300, "px");

  if (leftPosition < 50) {
    leftPosition = 950;
  }

  counter = counter + 50;
  scoreBoard.innerHTML = counter;
  collision(); // let diveleUp = document.createElement("div");
  // diveleUp.className = "upTower";
  // diveleUp.style.cssText = 'width: 50px;position: absolute;left: 950px;background: green;';
  // gameArea.appendChild(diveleUp);
  // leftPosition = leftPosition - 50;
  // diveleUp.style.left = leftPosition + 'px';
  // diveleUp.style.height = Math.random() * 300 + 'px';
  // let diveledown = document.createElement("div");
  // diveledown.style.cssText = 'width: 50px;height: 130px;position: absolute;left: 800px;bottom: 0px; background: green;';
  // gameArea.appendChild(diveledown);
  // leftPosition = leftPosition - 50;
  // diveledown.style.left = leftPosition + 'px';
  // diveledown.style.height = Math.random() * 200 + 'px';
  // diveledown.className = "downTower";

  setTimeout(function () {
    window.requestAnimationFrame(loadGame);
  }, 400); //gameID = window.requestAnimationFrame(loadGame);
}; // const startGame = () => {
//     gameID = window.requestAnimationFrame(loadGame);
//     console.log("Game Start");
// }


var stopGame = function stopGame() {
  setTimeout(function () {
    gameID = window.requestAnimationFrame(loadGame);
    cancelAnimationFrame(gameID);
  }, 400); // cancelAnimationFrame(gameID);

  console.log("Game Stopped");
  counter = 0;
};

var moveBird = function moveBird() {
  window.addEventListener('keydown', function (event) {
    var style = bird.style;
    console.log("here is :", window.getComputedStyle(bird).left);

    switch (event.code) {
      case 'ArrowUp':
        style.top = "".concat(parseInt(window.getComputedStyle(bird).top) - 5, "px");
        break;

      case 'ArrowDown':
        style.top = "".concat(parseInt(window.getComputedStyle(bird).top) + 5, "px");
        break;

      case 'ArrowLeft':
        style.left = "".concat(parseInt(window.getComputedStyle(bird).left) - 5, "px");
        break;

      case 'ArrowRight':
        style.left = "".concat(parseInt(window.getComputedStyle(bird).left) + 5, "px");
        break;
    }
  });
};

var collision = function collision() {
  var rectBird = bird.getBoundingClientRect();
  console.log("Bird is", rectBird);
  var rectUpTower = upTower.getBoundingClientRect();
  console.log("Uptower is", rectUpTower);
  var rectDownTower = downTower.getBoundingClientRect();
  console.log("DownTower is", rectDownTower);

  if (rectBird.right == rectUpTower.x) {
    alert("Game Over!");
  } // if ((rectBird.right == rectUpTower.x || rectBird.right == rectDownTower.x) && (rectBird.y == rectUpTower.bottom) && (rectBird.bottom == rectDownTower.top)){
  //     alert("Game Over!");
  // }

};