const userScore_p = document.getElementById("userScore");
const compScore_p = document.getElementById("compScore");
const mensagem_h2 = document.getElementById("mensagem");
const pedra_div = document.getElementById('pedra');
const papel_div = document.getElementById("papel");
const tesoura_div = document.getElementById("tesoura");


let pontosUser = 0;
let pontosComp = 0;

function compJoga() {
    let opcoes = ["pedra", "papel", "tesoura"];
    let opcao = Math.floor(Math.random() * 3);
    return opcoes[opcao];
}

function ganhou(userChoice, compChoice) {
    pontosUser++;
    userScore_p.innerHTML = pontosUser;
    mensagem_h2.innerHTML = `${userChoice} ganha de ${compChoice}. Você ganhou!`;
    document.getElementById(userChoice).classList.add("verde");
    setTimeout(()=> document.getElementById(userChoice).classList.remove("verde"), 300)
    
}

function perdeu(userChoice, compChoice) {
    pontosComp++;
    compScore_p.innerHTML = pontosComp;
    mensagem_h2.innerHTML = `${userChoice} perde de ${compChoice}. Você perdeu!`;
    document.getElementById(userChoice).classList.add("vermelho");
    setTimeout(()=> document.getElementById(userChoice).classList.remove("vermelho"), 300)
}

function empatou(userChoice, compChoice) {
    mensagem_h2.innerHTML = `${userChoice} com ${compChoice}. Empatou!`;
    document.getElementById(userChoice).classList.add("cinza");
    setTimeout(()=> document.getElementById(userChoice).classList.remove("cinza"), 300)
}


function jogar(userChoice) {
    let compChoice = compJoga();

    switch (userChoice + compChoice) {
        case "pedratesoura":
        case "papelpedra":
        case "tesourapapel":
            ganhou(userChoice, compChoice);
            break;
        case "papeltesoura":
        case "pedrapapel":
        case "tesourapedra":
            perdeu(userChoice, compChoice);
            break;
        case "papelpapel":
        case "pedrapedra":
        case "tesouratesoura":
            empatou(userChoice, compChoice);
            break;
    }

}

pedra_div.addEventListener("click", () => {
    jogar("pedra")
})

papel_div.addEventListener("click", () => {
   jogar("papel")
})

tesoura_div.addEventListener("click", () => {
    jogar("tesoura")
})