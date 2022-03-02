// gera um número de 1  a 6
function throwDice() {
    return Math.floor(Math.random() * 6) + 1
}

// cria um caminho para imagem selecionada do dado
function createPath(numero) {
    return basicPath + numero + ".png"
}


var basicPath = "./images/dice"; // caminho comum a todas imagens

// Seleciona o dado para o player 1
var random1 = throwDice(); // joga o dado para o player 1 
var diceOne = document.getElementById("p1-dice");// seleciona o dado do player 1
diceOne.setAttribute("src", createPath(random1));// atribui uma das imagens ao dado do player 1

// Código analogo para o player 2

var random2 = throwDice();
var diceTwo = document.getElementById('p2-dice');
diceTwo.setAttribute("src",createPath(random2))

// Muda o conteúdo do h1 para mostrar o vencedor

var header = document.querySelector('h1')

if (random1 > random2) {
    header.textContent = "Player 1 Wins!!!"
} else if(random2>random1) {
    header.textContent = "Player 2 Wins!!!"
} else {
    header.textContent ="It's a Tie!!!"
}