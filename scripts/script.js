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

// obter opção do jogador
function getHumanChoice() {
    // pedir escolha do usuário e armazenar em uma variável
    let humanChoice = prompt("Escolha: pedra, papel ou tesoura");
    return humanChoice;
}

console.log("A sua escolha foi: " + getHumanChoice());

console.log("A escolha do computador foi: " + getComputerChoice());

// armazenar pontuação do humano 
let humanScore = 0;
// armazenar pontuação do computador
let computerScore = 0;