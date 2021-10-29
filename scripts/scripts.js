const upTower = document.getElementById("upTower");
const downTower = document.getElementById("downTower");
const gameArea = document.getElementById("myGameArea");
const bird = document.getElementById("myBird");
const scoreBoard = document.getElementById("score__placeholder");

let leftPosition = 950;
let gameID;
let counter = 0;
let birdCordinates;
let upTowerCordinates;
let downTowerCordinates;



const loadGame = () => {
    //Adding sound
    let gameSound = new Audio("../images/retro.wav");
    gameSound.play();

    // setting coordinates of bird uptower and downtower
    //120 is bird's width. Divide it by 2 to get mid width
    //512 is game area
    birdCordinates = {
        x: bird.getBoundingClientRect().left,
        y: bird.getBoundingClientRect().top,
        y_bottom: bird.getBoundingClientRect().bottom,
        center_x: bird.getBoundingClientRect().left + 120 / 2,
        // down_y: 512 - bird.getBoundingClientRect().top 
        down_y: bird.getBoundingClientRect().bottom - 60
    }

    console.log("birdCordinates", birdCordinates);

    upTowerCordinates = {
        x: upTower.getBoundingClientRect().left,
        y: upTower.getBoundingClientRect().bottom,
    }

    console.log("upTowerCordinates", upTowerCordinates);

    downTowerCordinates = {
        x: downTower.getBoundingClientRect().left,
        y: downTower.getBoundingClientRect().top,
    }

    console.log("downTowerCordinates", downTowerCordinates);

    //generating random height of div
    leftPosition = leftPosition - 50;
    upTower.style.left = `${leftPosition}px`;
    upTower.style.height = `${Math.random() * 300}px`;

    downTower.style.left = `${leftPosition}px`;
    downTower.style.height = `${Math.random() * 300}px`;

    if (leftPosition < 50) {
        leftPosition = 950;
    }

    //increasing the couter for score
    counter = counter + 50;

    scoreBoard.innerHTML = counter;
    collision();

    //dynamically creating div and moving it with frame
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

    //to make the requestAnimationFrame slow
    gameID = setTimeout(() => {
        window.requestAnimationFrame(loadGame);
    }, 200);
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
    clearTimeout(gameID);
    console.log("Game Stopped");
    counter = 0;
}

const replay = () => {
    window.location.reload();
    loadGame();
}





// const moveBird = () => {
//     window.addEventListener('keydown', (event) => {
//         const { style } = bird;
//         console.log("style", style);
//         switch (event.code) {
//             case 'ArrowUp':
//                 // birdCordinates.y = birdCordinates.y - 5;
//                 console.log(`hee is my ${birdCordinates.y - 5}px`);
//                 style.top = `${birdCordinates.y - 5}px`;
//                 console.log("style.top" + style.top);
//                 break;
//             case 'ArrowDown':
//                 // birdCordinates.y = birdCordinates.y + 5;
//                 style.top = `${birdCordinates.y + 5}px`;
//                 break;
//             case 'ArrowLeft':
//                 birdCordinates.x = birdCordinates.x - 5;
//                 style.left = `${birdCordinates.x}px`;
//                 break;
//             case 'ArrowRight':
//                 birdCordinates.x = birdCordinates.x + 5;
//                 style.left = `${birdCordinates.x}px`;
//                 break;
//         }
//     })
// }

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
    // let rectBird = bird.getBoundingClientRect();
    // console.log("Bird is", rectBird);

    // let rectUpTower = upTower.getBoundingClientRect();
    // console.log("Uptower is", rectUpTower);
    // let rectDownTower = downTower.getBoundingClientRect();
    // console.log("DownTower is", rectDownTower);

    // let x_collide = rectBird.right - rectUpTower.left;
    // let y_collide = rectUpTower.bottom - rectBird.top;

    // console.log("x_collide", x_collide);
    // console.log("y_collide", y_collide);

    // console.log("diff y", upTowerCordinates.y - birdCordinates.down_y);
    // console.log("diff x", birdCordinates.center_x - upTowerCordinates.x);
    // //birdCordinates.center_x - upTowerCordinates.x <= 50 && birdCordinates.center_x - upTowerCordinates.x >= -50 && 

    // if ((birdCordinates.center_x - upTowerCordinates.x <= 50 && birdCordinates.center_x - upTowerCordinates.x >= -50 && upTowerCordinates.y - birdCordinates.down_y <= 3 && upTowerCordinates.y - birdCordinates.down_y >= -3) || birdCordinates.x < 105 || birdCordinates.x > 1000 || birdCordinates.y < 80 || birdCordinates.y > 500) {
    //     console.log("here is my collide");
    //     console.log("GAME OVER! SCORE IS : " + counter);
    //     alert("Your Score is : " + counter)
    //     location.href = 'http://127.0.0.1:5500/index.html';
    //     counter = 0;
    // }

    console.log("diff y", upTowerCordinates.y - birdCordinates.down_y);
    console.log("diff x", birdCordinates.center_x - upTowerCordinates.x);
    //birdCordinates.center_x - upTowerCordinates.x <= 50 && birdCordinates.center_x - upTowerCordinates.x >= -50 && 

    if (((birdCordinates.center_x - upTowerCordinates.x <= 10 && birdCordinates.center_x - upTowerCordinates.x >= -120) && (upTowerCordinates.y - birdCordinates.down_y <= 3 && upTowerCordinates.y - birdCordinates.down_y >= -45)) || ((birdCordinates.y_bottom < upTowerCordinates.y) && (birdCordinates.center_x - upTowerCordinates.x <= 10 && birdCordinates.center_x - upTowerCordinates.x >= -80)) || ((birdCordinates.y_bottom > downTowerCordinates.y) && (birdCordinates.center_x - downTowerCordinates.x <= 10 && birdCordinates.center_x - downTowerCordinates.x >= -80)) || birdCordinates.x < 105 || birdCordinates.x > 1000 || birdCordinates.y < 80 || birdCordinates.y > 500) {
        console.log("here is my collide");
        console.log("GAME OVER! SCORE IS : " + counter);
        alert("Your Score is : " + counter)
        location.href = 'http://127.0.0.1:5500/index.html';
        counter = 0;
    }


    // if (rectBird.left < 105 || rectBird.left > 1000 || rectBird.top < 80 || rectBird.top > 500 || ((x_collide <= 50 && x_collide >= -50) && y_collide <= 10 && y_collide >= -10) ) {
    //         console.log("here is my collide");
    //     console.log("GAME OVER! SCORE IS : " + counter);
    //     alert("Your Score is : " + counter )
    //     location.href = 'http://127.0.0.1:5500/index.html';
    //     counter = 0;
    // }

    // if ((rectBird.right == rectUpTower.x || rectBird.right == rectDownTower.x) && (rectBird.y == rectUpTower.bottom) && (rectBird.bottom == rectDownTower.top)){
    //     alert("Game Over!");
    // }
}







