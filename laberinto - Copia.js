const mazeDataList = [
    [ 
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1],
        [1,0,1,0,1,1,1,0,1,1,0,1,1,0,1,1,1,0,1,1,1,1,1,1,1,0,1,1,0,1],
        [1,0,1,0,1,1,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,0,1,1,1,1],
        [1,0,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,1,1,0,1,0,0,0,0,1,0,1],
        [1,0,0,0,1,1,1,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,1,1,1,1,0,1],
        [1,0,1,0,1,1,1,0,1,1,0,1,1,0,0,1,0,0,1,1,0,0,1,0,0,1,1,1,0,1],
        [1,0,0,0,0,0,0,0,0,1,0,1,1,0,1,1,0,1,1,0,0,0,1,1,0,0,0,0,0,1],
        [1,0,1,1,1,0,1,1,0,1,0,0,0,0,0,0,0,1,1,0,0,0,1,1,1,0,1,1,0,1],
        [1,0,1,1,1,0,0,0,0,1,1,1,0,1,1,1,0,1,1,0,1,0,0,0,0,0,0,0,0,2],
        [1,0,0,0,0,0,1,1,1,1,0,1,0,1,1,1,0,1,1,0,1,1,0,0,1,1,1,1,0,1],
        [1,0,0,1,1,0,1,1,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1],
        [1,1,1,1,1,0,1,0,0,1,0,1,1,0,1,1,0,1,1,0,1,0,1,1,0,1,1,1,0,1],
        [1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
    ],
    [ 
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1],
        [1,0,1,0,1,1,1,0,1,1,0,1,1,0,1,1,1,0,1,1,1,1,1,1,1,0,1,1,0,1],
        [1,0,1,0,1,1,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,0,1,1,1,1],
        [1,0,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,1,1,0,1,0,0,0,0,1,0,1],
        [1,0,0,0,1,1,1,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,1,1,1,1,0,1],
        [1,0,1,0,1,1,1,0,1,1,0,1,1,0,0,1,0,0,1,1,0,0,1,0,0,1,1,1,0,1],
        [1,0,0,0,0,0,0,0,0,1,0,1,1,0,1,1,0,1,1,0,0,0,1,1,0,0,0,0,0,1],
        [1,0,1,1,1,0,1,1,0,1,0,0,0,0,0,0,0,1,1,0,0,0,1,1,1,0,1,1,0,1],
        [1,0,1,1,1,0,0,0,0,1,1,1,0,1,1,1,0,1,1,0,1,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,1,1,1,1,0,1,0,1,1,1,0,1,1,0,1,1,0,0,1,1,1,1,0,1],
        [1,0,0,1,1,0,1,1,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,0,1],
        [1,1,1,1,1,0,1,0,0,1,0,1,1,0,1,1,0,1,1,0,1,0,1,1,0,1,1,1,0,1],
        [1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,2],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
    ],
    [ 
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1],
        [1,0,1,0,1,1,1,0,1,1,0,1,1,0,1,1,1,0,1,1,1,1,1,1,1,0,1,1,0,1],
        [1,0,1,0,1,1,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,0,1,1,1,1],
        [1,0,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,1,1,0,1,0,0,0,0,1,0,1],
        [1,0,0,0,1,1,1,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,1,1,1,1,0,2],
        [1,0,1,0,1,1,1,0,1,1,0,1,1,0,0,1,0,0,1,1,0,0,1,0,0,1,1,1,0,1],
        [1,0,0,0,0,0,0,0,0,1,0,1,1,0,1,1,0,1,1,0,0,0,1,1,0,0,0,0,0,1],
        [1,0,1,1,1,0,1,1,0,1,0,0,0,0,0,0,0,1,1,0,0,0,1,1,1,0,1,1,0,1],
        [1,0,1,1,1,0,0,0,0,1,1,1,0,1,1,1,0,1,1,0,1,0,0,0,0,0,1,0,0,1],
        [1,0,0,0,0,0,1,1,1,1,0,1,0,1,1,1,0,1,1,0,1,1,0,0,1,1,1,1,0,1],
        [1,0,0,1,1,0,1,1,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1],
        [1,1,1,1,1,0,1,0,0,1,0,1,1,0,1,1,0,1,1,0,1,0,1,1,0,1,1,1,0,1],
        [1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
    ]
];

let currentMazeIndex = 0;
let playerX = 1;
let playerY = 1;
let timeLeft = 90; 
let timerInterval;
let laberinto = 1;

function startCountdown() {
    clearInterval(timerInterval);

    timerInterval = setInterval(() => {
        timeLeft--;
        document.getElementById("time").innerText = `Tempo restante: ${timeLeft}s`;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            showMazeMessage("Tempo esgotado! Você perdeu.");
            showGameOverScreen(); 
            resetGame();
        }
    }, 1000);
}


function showMazeMessage(text) {
    const messageBox = document.getElementById("maze-message");

    clearInterval(timerInterval);

    messageBox.innerText = text;
    messageBox.style.display = "block";  

    setTimeout(() => {
        messageBox.style.display = "none"; 
        startCountdown(); 
    }, 2000);
}


function changeMaze() {
    console.log(laberinto);

    if (laberinto === 3) {
        showMazeMessage("Você venceu o labirinto!");
        
        setTimeout(() => {
            clearInterval(timerInterval);
            showVictoryScreen();
        }, 2000);
    } else if (laberinto === 2) {
        showMazeMessage("Fase Final!");

        setTimeout(() => {
            currentMazeIndex++;
            playerX = 1;
            playerY = 1;
            laberinto++;
            drawMaze();
        }, 2000);
    } else if (laberinto === 1) {
        showMazeMessage("Você passou de fase!");

        setTimeout(() => {
            currentMazeIndex++;
            playerX = 1;
            playerY = 1;
            laberinto++;
            drawMaze();
        }, 2000);
    }
}



function drawMaze() {
    const maze = mazeDataList[currentMazeIndex];
    const mazeContainer = document.getElementById("maze");
    mazeContainer.innerHTML = ""; 

    for (let y = 0; y < maze.length; y++) {
        for (let x = 0; x < maze[y].length; x++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");

            if (maze[y][x] === 1) {
                cell.classList.add("wall");
            } else if (maze[y][x] === 2) {
                cell.classList.add("exit");
            } else {
                cell.classList.add("empty");
            }

            if (x === playerX && y === playerY) {
                cell.classList.add("player");
            }

            mazeContainer.appendChild(cell);
        }
    }
}

function movePlayer(direction) {
    const maze = mazeDataList[currentMazeIndex];
    let newX = playerX;
    let newY = playerY;

    switch (direction) {
        case "up":
            newY--;
            break;
        case "down":
            newY++;
            break;
        case "left":
            newX--;
            break;
        case "right":
            newX++;
            break;
    }

    if (maze[newY] && maze[newY][newX] !== 1) {
        playerX = newX;
        playerY = newY;

        if (maze[newY][newX] === 2) {
            if (laberinto === 3) {
                if (timeLeft > 0) {
                    clearInterval(timerInterval); 
                    showVictoryScreen(); 
                } else {
                    showMazeMessage("Tempo esgotado! Você perdeu.");
                    resetGame();
                }
            } else {
                changeMaze();
            }
        }
        
        

        drawMaze();
    }
}

function resetGame() {
    clearInterval(timerInterval);

    laberinto = 1;
    currentMazeIndex = 0;
    playerX = 1;
    playerY = 1;
    timeLeft = 90;

    document.getElementById('maze').style.display = 'none';
    document.getElementById('time').style.display = 'none';
    document.getElementById('escape-title').style.display = 'none';
    document.getElementById('restart-button').style.display = 'none';
    document.getElementById('victory-screen').style.display = 'none'; 

    document.getElementById('start-screen').style.display = 'flex';

    document.getElementById('victory-message').innerText = "";
}

function showGameOverScreen() {
    document.getElementById('game-over-screen').style.display = 'flex';
}

document.getElementById('restart-button-game-over').addEventListener('click', function() {
    location.reload(); 
});



function showVictoryScreen() {
    document.getElementById('maze').style.display = 'none';
    document.getElementById('time').style.display = 'none';
    document.getElementById('escape-title').style.display = 'none';
    document.getElementById('restart-button').style.display = 'none';

    document.getElementById('victory-screen').style.display = 'flex';

    document.getElementById('victory-message').innerText = "Você venceu o labirinto!";
}

document.getElementById('restart-victory-button').addEventListener('click', function () {
    resetGame();
});




document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowUp") {
        movePlayer("up");
    } else if (event.key === "ArrowDown") {
        movePlayer("down");
    } else if (event.key === "ArrowLeft") {
        movePlayer("left");
    } else if (event.key === "ArrowRight") {
        movePlayer("right");
    }
});

drawMaze();
startCountdown();

document.getElementById('start-button').addEventListener('click', function () {
    document.getElementById('start-screen').style.display = 'none';
    document.getElementById('escape-title').style.display = 'block';
    document.getElementById('time').style.display = 'block';
    document.getElementById('maze').style.display = 'grid';
    document.getElementById('restart-button').style.display = 'inline-block';

    drawMaze();
    startCountdown();
});
