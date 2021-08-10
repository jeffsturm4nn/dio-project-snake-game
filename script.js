let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let snake = [];
let direction = "right";
let recordScore = 0;
let currentScore = 0;
let food = {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
}

snake[0] = {
    x: 8 * box,
    y: 8 * box
}

function mostrarElemento(elemento, mostrar, estilo = "block"){
    
    if(mostrar == true){
        elemento.style.display = estilo;
    } else {
        elemento.style.display = "none";
    }

}

function reiniciarJogo(){
    snake = [];

    snake[0] = {
        x: 8 * box,
        y: 8 * box
    }

    currentScore = 0;

    jogo = setInterval(iniciarJogo, 100);
}

function criarBG() {
    context.fillStyle = "#171717";
    context.fillRect(0,0, 16*box, 16*box);
}

function criarCobrinha(){
    for(let i=0; i<snake.length; i++){
        context.fillStyle = "lightblue";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

function iniciarJogo(){

    if(snake[0].x > 15 * box && direction == "right") snake[0].x = 0;
    if(snake[0].x < 0 * box && direction == "left") snake[0].x = 16*box;
    if(snake[0].y > 15 * box && direction == "down") snake[0].y = 0;
    if(snake[0].y > 15 * box && direction == "up") snake[0].y = 16*box;

    for(i=1; i<snake.length; i++){
        if(snake[0].x == snake[i].x && snake[0].y == snake[i].y){
            clearInterval(jogo);
            
            if(currentScore < recordScore){
                alert("G̴̣͌̂a̷̢͎͔̻̟̲̅͆̆̿́m̵̙̤̫̗͔̀̈̏̈́̔̈͐̕͘̚ͅę̴̰̫͆͛̐̓̎̓͒̓͜͝͝ͅ ̴̧͓̩̮̌̇̐̒͂Ò̸̲v̷̛͇̘̑͋̋͒̑͌̿̉è̸̞̭͖̠̺̈̅̂̓ͅr̷̦̝͂̂̈́͘");
            } else {
                alert("G̴̣͌̂a̷̢͎͔̻̟̲̅͆̆̿́m̵̙̤̫̗͔̀̈̏̈́̔̈͐̕͘̚ͅę̴̰̫͆͛̐̓̎̓͒̓͜͝͝ͅ ̴̧͓̩̮̌̇̐̒͂Ò̸̲v̷̛͇̘̑͋̋͒̑͌̿̉è̸̞̭͖̠̺̈̅̂̓ͅr̷̦̝͂̂̈́͘ \n\n 🏆Nҽɯ Pҽɾʂσɳαʅ Rҽƈσɾԃ: " + recordScore + " !");
            }

            mostrarElemento(document.getElementById("restart-bt"), true);

            break;
        }
    }

    criarBG();
    criarCobrinha();
    desenharComida();
    updateScore();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if(direction == "right") snakeX += box;
    if(direction == "left") snakeX -= box;
    if(direction == "up") snakeY -= box;
    if(direction == "down") snakeY += box;

    if(snakeX != food.x || snakeY != food.y){
        snake.pop();
    } else {
        food.x = Math.floor(Math.random() * 15 + 1) * box;
        food.y = Math.floor(Math.random() * 15 + 1) * box;

        currentScore++;
        if(currentScore > recordScore){
            recordScore = currentScore;
        }
    }

    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead);
}

function updateScore(){
    document.querySelector("#current-score").innerHTML = "Score:" + currentScore;
    document.querySelector("#record-score").innerHTML = "🏆Record:" + recordScore;
}

function update(){
    if(event.keyCode == 37 && direction != "right") direction = "left";
    if(event.keyCode == 38 && direction != "down") direction = "up";
    if(event.keyCode == 39 && direction != "left") direction = "right";
    if(event.keyCode == 40 && direction != "up") direction = "down";
}

function desenharComida(){
    context.fillStyle = "red";
    context.fillRect(food.x, food.y, box, box);
}

document.addEventListener("keydown", update);

var jogo = setInterval(iniciarJogo, 100);






