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
    // Cancela qualquer contagem anterior antes de começar uma nova
    clearInterval(timerInterval);

    timerInterval = setInterval(() => {
        timeLeft--;
        document.getElementById("time").innerText = `Tempo restante: ${timeLeft}s`;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            showMazeMessage("Tempo esgotado! Você perdeu.");
            resetGame();
        }
    }, 1000);
}


function showMazeMessage(text) {
    const messageBox = document.getElementById("maze-message");
    messageBox.innerText = text;
    messageBox.style.display = "block";  // Exibe a mensagem

    setTimeout(() => {
        messageBox.style.display = "none";  // Esconde a mensagem após 2 segundos
    }, 2000);
}

function changeMaze() {
    console.log(laberinto)
    if (laberinto === 2) {
        // Exibe "Fase Final" quando o jogador avança para a fase 3
        showMazeMessage("Fase Final!");

        // Espera 2 segundos antes de avançar para a fase 3
        setTimeout(() => {
            currentMazeIndex = (currentMazeIndex + 1) % mazeDataList.length;
            playerX = 1;
            playerY = 1;
            laberinto += 1;  // Aumenta para a fase 3
            drawMaze();  // Redesenha o labirinto
            console.log(laberinto)
        }, 2000);
        
    } else if(laberinto === 1){
        // Exibe a mensagem "Você passou de fase" para outras fases
        showMazeMessage("Você passou de fase!");

        // Espera 2 segundos antes de mudar para o próximo labirinto
        setTimeout(() => {
            currentMazeIndex = (currentMazeIndex + 1) % mazeDataList.length;
            playerX = 1;
            playerY = 1;
            laberinto += 1;  // Aumenta a fase
            drawMaze();  // Redesenha o labirinto
            console.log(laberinto)
        }, 2000);
    }
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
            console.log(laberinto)
            if (laberinto === 3) {
                showMazeMessage("Você venceu o labirinto!");
            } else{
                changeMaze(laberinto);
            }
            
        }

        drawMaze();
    }
}

function resetGame() {
    clearInterval(timerInterval);

    // Resetar variáveis do jogo
    laberinto = 1;
    currentMazeIndex = 0;
    playerX = 1;
    playerY = 1;
    timeLeft = 90;

    // Esconder elementos do jogo
    document.getElementById('maze').style.display = 'none';
    document.getElementById('time').style.display = 'none';
    document.getElementById('escape-title').style.display = 'none';
    document.getElementById('restart-button').style.display = 'none';

    // Mostrar tela inicial
    document.getElementById('start-screen').style.display = 'flex';
}



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

// Botão "Iniciar Jogo" — esconde a tela inicial e começa o jogo
document.getElementById('start-button').addEventListener('click', function () {
    document.getElementById('start-screen').style.display = 'none';
    document.getElementById('escape-title').style.display = 'block';
    document.getElementById('time').style.display = 'block';
    document.getElementById('maze').style.display = 'grid';
    document.getElementById('restart-button').style.display = 'inline-block';

    drawMaze();
    startCountdown();
});


