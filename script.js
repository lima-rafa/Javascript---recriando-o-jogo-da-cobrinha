var canvas = document.getElementById("snake");
var context = canvas.getContext("2d");
var box = 32;
var snake = [];
snake[0] = {
    x:8*box ,
    y:8*box
}

let direction = "right";

function criarBG(){
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, 16*box, 16*box);
}

function criarCobrinha(){
    for(let i=0; i<snake.length; i++){
        context.fillStyle = green;
        context.fillRect(snake[i].x, snake[i], box, box);
    }
}

function iniciarJogo(){
    criarBG();
    criarCobrinha();
}

var jogo = setInterval

