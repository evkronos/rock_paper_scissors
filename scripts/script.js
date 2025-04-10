// obter opção do computador
function getComputerChoice() {
    // gerar número aleatório entre 1 e 3
    let numAleatorio = Math.floor(Math.random() * 3) + 1;
    let computerChoice = "";

    switch (numAleatorio) {
        // se número = 1 "pedra"
        case 1:
            return computerChoice = "pedra";
        // se número = 2 "papel"
        case 2:
            return computerChoice = "papel";
        // se número = 3 "tesoura"
        case 3:
            return computerChoice = "tesoura";
    }
}

// obter opção do humano
function getHumanChoice() {
    // pedir escolha do usuário e armazenar em uma variável
    let humanChoice = prompt("Escolha: pedra, papel ou tesoura");
    humanChoice.toLowerCase;
    return humanChoice;
}

// console.log("A sua escolha foi: " + getHumanChoice());

// console.log("A escolha do computador foi: " + getComputerChoice());

// armazenar pontuação do humano 
let humanScore = 0;
// armazenar pontuação do computador
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("Empate");
    } else if (humanChoice === "pedra" && computerChoice === "papel") {
        console.log("Você perdeu! Papel vence pedra");
    } else if (humanChoice === "pedra" && computerChoice === "tesoura") {
        console.log("Você venceu! Pedra vence tesoura");
    } else if (humanChoice === "papel" && computerChoice === "pedra") {
        console.log("Você venceu! Papel vence pedra");
    } else if (humanChoice === "papel" && computerChoice === "tesoura") {
        console.log("Você perdeu! Tesoura vence papel");
    } else if (humanChoice === "tesoura" && computerChoice === "pedra") {
        console.log("Você perdeu! Pedra vence tesoura");
    } else if (humanChoice === "tesoura" && computerChoice === "papel") {
        console.log("Você venceu! Tesoura vence papel")
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);