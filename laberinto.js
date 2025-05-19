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

    // Pausa o temporizador
    clearInterval(timerInterval);

    messageBox.innerText = text;
    messageBox.style.display = "block";  // Exibe a mensagem

    setTimeout(() => {
        messageBox.style.display = "none";  // Esconde a mensagem
        startCountdown(); // Retoma o temporizador após esconder a mensagem
    }, 2000);
}


function changeMaze() {
    console.log(laberinto);

    if (laberinto === 3) {
        // Exibe "Você venceu" após completar a fase 3
        showMazeMessage("Você venceu o labirinto!");
        
        setTimeout(() => {
            clearInterval(timerInterval); // Para o temporizador
            showVictoryScreen();  // Exibe tela de vitória
        }, 2000);
    } else if (laberinto === 2) {
        // Vai para a fase final (fase 3)
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
                if (timeLeft > 0) {
                    clearInterval(timerInterval); // Para o timer
                    showVictoryScreen(); // Vai direto para a tela de vitória
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
    document.getElementById('victory-screen').style.display = 'none'; // Esconde tela de vitória

    // Mostrar tela inicial
    document.getElementById('start-screen').style.display = 'flex';

    // Reseta a tela de vitória
    document.getElementById('victory-message').innerText = "";
}


function showVictoryScreen() {
    // Esconde elementos do jogo
    document.getElementById('maze').style.display = 'none';
    document.getElementById('time').style.display = 'none';
    document.getElementById('escape-title').style.display = 'none';
    document.getElementById('restart-button').style.display = 'none';

    // Exibe a tela de vitória
    document.getElementById('victory-screen').style.display = 'flex';

    // Exibe a mensagem de vitória
    document.getElementById('victory-message').innerText = "Você venceu o labirinto!";
}

// Função para reiniciar o jogo a partir da tela de vitória
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

