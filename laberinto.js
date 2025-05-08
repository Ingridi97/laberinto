const mazeDataList = [
    [ // Labirinto 1
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
    [ // Labirinto 2
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
        [1,0,0,1,1,0,1,1,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1],
        [1,1,1,1,1,0,1,0,0,1,0,1,1,0,1,1,0,1,1,0,1,0,1,1,0,1,1,1,0,1],
        [1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
    ],
    [ // Labirinto 3 (novo labirinto)
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1],
        [1,0,1,0,1,1,1,0,1,1,0,1,1,0,1,1,1,0,1,1,1,1,1,1,1,0,1,1,0,1],
        [1,0,1,0,1,1,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,0,1,1,1,1],
        [1,0,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,1,1,0,1,0,0,0,0,1,0,1],
        [1,0,0,0,1,1,1,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,1,1,1,1,0,2],
        [1,0,1,0,1,1,1,0,1,1,0,1,1,0,0,1,0,0,1,1,0,0,1,0,0,1,1,1,0,1],
        [1,0,0,0,0,0,0,0,0,1,0,1,1,0,1,1,0,1,1,0,0,0,1,1,0,0,0,0,0,1],
        [1,0,1,1,1,0,1,1,0,1,0,0,0,0,0,0,0,1,1,0,0,0,1,1,1,0,1,1,0,1],
        [1,0,1,1,1,0,0,0,0,1,1,1,0,1,1,1,0,1,1,0,1,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,1,1,1,1,0,1,0,1,1,1,0,1,1,0,1,1,0,0,1,1,1,1,0,1],
        [1,0,0,1,1,0,1,1,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1],
        [1,1,1,1,1,0,1,0,0,1,0,1,1,0,1,1,0,1,1,0,1,0,1,1,0,1,1,1,0,1],
        [1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
    ]
];

let currentMazeIndex = 0;
let playerX = 1;
let playerY = 1;
let timeLeft = 90; // Tempo inicial de 60 segundos
let timerInterval;
let laberinto = 1;

function startCountdown() {
    timerInterval = setInterval(() => {
        timeLeft--;
        document.getElementById("time").innerText = `Tempo restante: ${timeLeft}s`;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert("Tempo esgotado! Você perdeu.");
            resetGame();
        }
    }, 1000);
}

function changeMaze() {
    currentMazeIndex = (currentMazeIndex + 1) % mazeDataList.length; // Altera para o próximo labirinto
    playerX = 1;
    playerY = 1;
    laberinto += 1;
    drawMaze();
}

function drawMaze() {
    const maze = mazeDataList[currentMazeIndex];
    const mazeContainer = document.getElementById("maze");
    mazeContainer.innerHTML = ""; // Limpa o labirinto anterior

    // Desenha o novo labirinto
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
                alert("Você venceu o labirinto!");
                resetGame();
            } 
            changeMaze();
        }

        drawMaze();
    }
}

function resetGame() {
    // Reseta para o primeiro labirinto
    currentMazeIndex = 0;
    playerX = 1;  // Posição inicial do jogador (1, 1)
    playerY = 1;
    timeLeft = 90; // Tempo inicial de 60 segundos
    laberinto = 1; // Começa no labirinto 1

    startCountdown(); // Inicia a contagem regressiva
    drawMaze(); // Redesenha o labirinto com a posição inicial
}

document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowUp") {
        movePlayer("up");
    } else if (e.key === "ArrowDown") {
        movePlayer("down");
    } else if (e.key === "ArrowLeft") {
        movePlayer("left");
    } else if (e.key === "ArrowRight") {
        movePlayer("right");
    }
});

window.onload = () => {
    startCountdown();
    drawMaze();
};
