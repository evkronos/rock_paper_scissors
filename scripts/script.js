const btnPedra = document.querySelector("#btnPedra");
const btnPapel = document.querySelector("#btnPapel");
const btnTesoura = document.querySelector("#btnTesoura");
const resultadoRound = document.querySelector("#resultadoRound");
const escolhaComputador = document.querySelector("#escolhaComputador");
const pontuacao = document.querySelector("#pontuacao");
const btnRestart = document.querySelector("#btnRestart");

btnPedra.addEventListener('click', () => {
    let humanChoice = "pedra";
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    showScore();
});

btnPapel.addEventListener('click', () => {
    let humanChoice = "papel";
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    showScore();
});

btnTesoura.addEventListener('click', () => {
    let humanChoice = "tesoura";
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    showScore();
});

btnRestart.addEventListener('click', () => {
    humanScore = 0;
    computerScore = 0;
    pontuacao.textContent = "";
    resultadoRound.textContent = "";
    escolhaComputador.textContent = "";

    btnPedra.disabled = false;
    btnPapel.disabled = false;
    btnTesoura.disabled = false;
})
// obter opção do computador
function getComputerChoice() {
    // gerar número aleatório entre 1 e 3
    let numAleatorio = Math.floor(Math.random() * 3) + 1;

    switch (numAleatorio) {
        // se número = 1 "pedra"
        case 1:
            console.log("Computador: " + "pedra")
            escolhaComputador.textContent = "Computador: pedra";
            return "pedra";
        // se número = 2 "papel"
        case 2:
            console.log("Computador: " + "papel")
            escolhaComputador.textContent = "Computador: papel";
            return "papel";
        // se número = 3 "tesoura"
        case 3:
            console.log("Computador: " + "tesoura")
            escolhaComputador.textContent = "Computador: tesoura";
            return "tesoura";
    }
}


// armazenar pontuação do humano 
let humanScore = 0;
// armazenar pontuação do computador
let computerScore = 0;


function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        resultadoRound.textContent = "Empate";
    } else if (humanChoice === "pedra" && computerChoice === "papel") {
        computerScore += 1;
        resultadoRound.textContent = "Você perdeu! Papel vence pedra";
    } else if (humanChoice === "pedra" && computerChoice === "tesoura") {
        humanScore += 1;
        resultadoRound.textContent = "Você venceu! Pedra vence tesoura";
    } else if (humanChoice === "papel" && computerChoice === "pedra") {
        humanScore += 1;
        resultadoRound.textContent = "Você venceu! Papel vence pedra";
    } else if (humanChoice === "papel" && computerChoice === "tesoura") {
        computerScore += 1;
        resultadoRound.textContent = "Você perdeu! Tesoura vence papel";
    } else if (humanChoice === "tesoura" && computerChoice === "pedra") {
        computerScore += 1;
        resultadoRound.textContent = "Você perdeu! Pedra vence tesoura";
    } else if (humanChoice === "tesoura" && computerChoice === "papel") {
        humanScore += 1;
        resultadoRound.textContent = "Você venceu! Tesoura vence papel";
    }
}

function showScore() {
    pontuacao.textContent = "Computador: " + computerScore + " X Jogador: " + humanScore;
    if (humanScore === 5 || computerScore === 5) {
        declareWinner();
    }
}

function declareWinner() {
    if (humanScore === 5) {
        resultadoRound.textContent = "Você venceu o jogo!";
    } else if (computerScore === 5) {
        resultadoRound.textContent = "O computador venceu o jogo!";
    }

    // desativar os botẽos depois de acabar o jogo
    btnPedra.disabled = true;
    btnPapel.disabled = true;
    btnTesoura.disabled = true;
}
