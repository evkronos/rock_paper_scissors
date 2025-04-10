function getComputerChoice() {
    // gerar número aleatório entre 1 e 3
    let numAleatorio = Math.floor(Math.random() * 3) + 1;

    switch (numAleatorio) {
        // se número = 1 "pedra"
        case 1:
            return console.log("pedra");
        // se número = 2 "papel"
        case 2:
            return console.log("papel");
        // se número = 3 "tesoura"
        case 3:
            return console.log("tesoura");
    }
}
getComputerChoice();