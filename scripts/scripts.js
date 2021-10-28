const upTower = document.getElementById("upTower");
const downTower = document.getElementById("downTower");
const gameArea = document.getElementById("myGameArea");
const bird = document.getElementById("myBird");
const scoreBoard = document.getElementById("score__placeholder");

let leftPosition = 950;
let gameID;
let counter = 0;


//generating random height of div
const loadGame = () => {
    let gameSound = new Audio("../images/retro.wav");
    gameSound.play();


    leftPosition = leftPosition - 50;
    upTower.style.left = `${leftPosition}px`;
    upTower.style.height = `${Math.random() * 300}px`;

    leftPosition = leftPosition - 50;
    downTower.style.left = `${leftPosition}px`;
    downTower.style.height = `${Math.random() * 300}px`;

    if (leftPosition < 50) {
        leftPosition = 950;
    }


    counter = counter + 50;

    scoreBoard.innerHTML = counter;
    collision();

    // let diveleUp = document.createElement("div");
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

    gameID = setTimeout(() => {
        window.requestAnimationFrame(loadGame);
    }, 400);

    console.log("gameID" + gameID);
    // return gameID;
    //gameID = window.requestAnimationFrame(loadGame);
}

// const startGame = () => {
//     gameID = window.requestAnimationFrame(loadGame);
//     console.log("Game Start");
// }


const stopGame = () => {
    // setTimeout(() => {
    //     gameID = window.requestAnimationFrame(loadGame);
    //     cancelAnimationFrame(gameID);
    // }, 400);
    // cancelAnimationFrame(gameID);
    console.log("stop one", gameID);
    clearTimeout(gameID);
    console.log("Game Stopped");
    counter = 0;
}

const moveBird = () => {
    window.addEventListener('keydown', (event) => {
        const { style } = bird;
        console.log("here is :", window.getComputedStyle(bird).left);
        switch (event.code) {
            case 'ArrowUp':
                style.top = `${parseInt(window.getComputedStyle(bird).top) - 5}px`;
                break;
            case 'ArrowDown':
                style.top = `${parseInt(window.getComputedStyle(bird).top) + 5}px`;
                break;
            case 'ArrowLeft':
                style.left = `${parseInt(window.getComputedStyle(bird).left) - 5}px`;
                break;
            case 'ArrowRight':
                style.left = `${parseInt(window.getComputedStyle(bird).left) + 5}px`;
                break;
        }
    })
}



const collision = () => {
    let rectBird = bird.getBoundingClientRect();
    console.log("Bird is", rectBird);

    let rectUpTower = upTower.getBoundingClientRect();
    console.log("Uptower is", rectUpTower);
    let rectDownTower = downTower.getBoundingClientRect();
    console.log("DownTower is", rectDownTower);

    console.log("rectBird.right - rectUpTower.left", rectBird.right - rectUpTower.left);
    console.log("rectUpTower.bottom - rectBird.top", rectUpTower.bottom - rectBird.top);

    if (rectBird.left < 105 || rectBird.left > 1000 || rectBird.top < 80 || rectBird.top > 500 ) {
        console.log("GAME OVER! SCORE IS : " + counter);
        alert("Your Score is : " + counter )
        location.href = 'http://127.0.0.1:5500/index.html';
        counter = 0;
    }

    // if ((rectBird.right == rectUpTower.x || rectBird.right == rectDownTower.x) && (rectBird.y == rectUpTower.bottom) && (rectBird.bottom == rectDownTower.top)){
    //     alert("Game Over!");
    // }
}







