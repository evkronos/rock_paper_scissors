// obter opção do computador
function getComputerChoice() {
    // gerar número aleatório entre 1 e 3
    let numAleatorio = Math.floor(Math.random() * 3) + 1;

    switch (numAleatorio) {
        // se número = 1 "pedra"
        case 1:
            console.log("Computador: " + "pedra")
            return "pedra";
        // se número = 2 "papel"
        case 2:
            console.log("Computador: " + "papel")
            return "papel";
        // se número = 3 "tesoura"
        case 3:
            console.log("Computador: " + "tesoura")
            return "tesoura";
    }
}

// obter opção do humano
function getHumanChoice() {
    // pedir escolha do usuário e armazenar em uma variável
    let humanChoice = prompt("Escolha: pedra, papel ou tesoura");
    // converter entrada do usuário para minusculo
    humanChoice = humanChoice.toLowerCase();
    console.log("Você: " + humanChoice);
    return humanChoice;
}


function playGame() {
    // armazenar pontuação do humano 
    let humanScore = 0;
    // armazenar pontuação do computador
    let computerScore = 0;


    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            console.log("Empate");
        } else if (humanChoice === "pedra" && computerChoice === "papel") {
            computerScore += 1;
            console.log("Você perdeu! Papel vence pedra");
        } else if (humanChoice === "pedra" && computerChoice === "tesoura") {
            humanScore += 1;
            console.log("Você venceu! Pedra vence tesoura");
        } else if (humanChoice === "papel" && computerChoice === "pedra") {
            humanScore += 1;
            console.log("Você venceu! Papel vence pedra");
        } else if (humanChoice === "papel" && computerChoice === "tesoura") {
            computerScore += 1;
            console.log("Você perdeu! Tesoura vence papel");
        } else if (humanChoice === "tesoura" && computerChoice === "pedra") {
            computerScore += 1;
            console.log("Você perdeu! Pedra vence tesoura");
        } else if (humanChoice === "tesoura" && computerChoice === "papel") {
            computerScore += 1;
            console.log("Você venceu! Tesoura vence papel")
        }
    }

    for (let i = 0; i < 5; i++) {
        console.log("Round " + (i + 1))
        // armazenar valores retornados das funções getHumanChoice e getComputerChoice
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    function showResult() {
        console.log("Pontuação")
        console.log("Humano: " + humanScore)
        console.log("Computador: " + computerScore)

        if (humanScore > computerScore) {
            console.log("Você venceu o jogo");
        } else if (humanScore < computerScore) {
            console.log("Você perdeu o jogo");
        } else {
            console.log("Empate");
        }
    }

    showResult();
}

playGame();