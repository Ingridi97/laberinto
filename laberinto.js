const mazeDate = [
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1], 
    [1,0,1,0,1,1,1,0,1,1,0,1,1,0,1,1,1,0,1,1,0,1,1,1,1,0,1,1,1,1], 
    [1,0,1,0,1,1,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1,0,1], 
    [1,0,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,0,1,1,0,0,1,0,0,1], 
    [1,0,0,0,1,1,1,0,0,0,0,0,1,1,0,1,1,0,1,1,0,0,0,1,1,1,1,1,0,1], 
    [1,1,1,0,1,1,1,0,1,1,0,1,1,0,0,1,0,0,1,1,0,0,1,0,0,1,1,1,0,1], 
    [1,0,0,0,0,0,0,0,0,1,0,1,1,0,1,1,0,1,1,1,0,0,1,1,1,0,0,0,0,0], 
    [1,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,1,0,1,1,0,1,1,1,0], 
    [1,0,0,1,1,0,0,0,0,1,0,1,0,1,1,1,0,1,1,0,1,0,1,0,0,0,0,0,0,2], 
    [1,1,0,0,0,0,1,1,0,1,0,1,0,1,1,1,0,1,1,0,1,1,0,0,1,1,1,1,0,0], 
    [1,1,0,1,1,0,1,1,0,1,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1], 
    [1,1,0,1,1,0,1,1,0,1,0,1,1,0,1,1,0,1,1,0,1,0,1,1,0,1,1,1,0,1], 
    [1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1], 
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
];

const mazeContainer = document.getElementById("maze");

let playerX = 1;
let playerY = 1;
let totalTime = 900;
let timeLeft = totalTime;
let countdownInterval;
let gameEnded = false; // Variável que indica se o jogo terminou

// Função que inicia a contagem regressiva
function startCountdown() {
    timeLeft = totalTime;
    document.getElementById("time").innerText = `TEMPO = ${timeLeft}`;

    countdownInterval = setInterval(() => {
        if (gameEnded) return; // Se o jogo acabou, não faz mais nada

        timeLeft--;
        document.getElementById("time").innerText = `TEMPO = ${timeLeft}`;

        if (timeLeft <= 0) {
            clearInterval(countdownInterval);
            gameEnded = true; // O jogo acabou
            alert("Tempo esgotado! Você perdeu.");
            resetGame(); // Reinicia o jogo
        }
    }, 1000);
}

// Função que desenha o labirinto
function drawMaze() {
    mazeContainer.innerHTML = "";
    for (let y = 0; y < mazeDate.length; y++) {
        for (let x = 0; x < mazeDate[y].length; x++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");

            if (mazeDate[y][x] === 1) {
                cell.classList.add("wall");
            } else if (mazeDate[y][x] === 2) {
                cell.classList.add("exit");
            }

            if (x === playerX && y === playerY) {
                cell.classList.add("player");
            }

            mazeContainer.appendChild(cell);
        }
    }
}

// Função que move o jogador
function movePlayer(dx, dy) {
    if (gameEnded) return; // Se o jogo terminou, não move o jogador

    const newX = playerX + dx;
    const newY = playerY + dy;

    if (mazeDate[newY][newX] !== 1) { // Se a célula não for uma parede
        playerX = newX;
        playerY = newY;
        drawMaze();

        if (mazeDate[newY][newX] === 2) {
            setTimeout(() => alert("Você escapou do labirinto!"), 100);
            gameEnded = true; // Marca que o jogo acabou
        }
    }
}

// Função que reinicia o jogo
function resetGame() {
    playerX = 1;
    playerY = 1;
    gameEnded = false; // Reseta o status do jogo
    drawMaze();
    startCountdown(); // Reinicia a contagem regressiva
}

// Evento para capturar as teclas pressionadas
document.addEventListener("keydown", (e) => {
    if (gameEnded) return; // Não permite mover após o fim do jogo

    if (e.key === "ArrowUp") movePlayer(0, -1);
    else if (e.key === "ArrowDown") movePlayer(0, 1);
    else if (e.key === "ArrowLeft") movePlayer(-1, 0);
    else if (e.key === "ArrowRight") movePlayer(1, 0);
});

// Inicializa o jogo assim que a página for carregada
document.addEventListener("DOMContentLoaded", () => {
    drawMaze();
    startCountdown(); 
});
