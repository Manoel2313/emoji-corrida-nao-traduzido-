let xJogador = [20, 20, 20, 20];
let yJogador = [50, 150, 250, 350];
let jogador = ['🎃', '👾', '🤡', '👻'];
let teclas = ["a", "s", "d", "f"];
let contagem = jogador.length;

let tela = "inicio"; // pode ser: "inicio", "jogo", "fim"
let vencedor = "";   // guarda o emoji vencedor

function setup() {
  createCanvas(400, 400);
}

function draw() {
  if (tela == "inicio") {
    mostraTelaInicio();
  } else if (tela == "jogo") {
    defineTela();
    mostraJogadores();
    desenhaChegada();
    defineVencedor();
  } else if (tela == "fim") {
    mostraTelaFinal();
  }
}

function mostraTelaInicio() {
  background(30);
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(30);
  text("Corrida de Emojis", width / 2, height / 2 - 20);
  textSize(16);
  text("Pressione ESPAÇO para começar", width / 2, height / 2 + 20);
}

function mostraTelaFinal() {
  background(0);
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(28);
  text(vencedor + " venceu!", width / 2, height / 2);
  textSize(16);
  text("Pressione R para reiniciar", width / 2, height / 2 + 40);
}

function defineTela() {
  if (focused == true) {
    background(`rgb(197,21,21)`);
  } else {
    background(`rgb(241,241,240)`);
  }
}

function mostraJogadores() {
  textSize(30);
  for (let i = 0; i < contagem; i++) {
    text(jogador[i], xJogador[i], yJogador[i]);
  }
}

function desenhaChegada() {
  fill("white");
  rect(350, 0, 10, 400);
  fill("black");
  for (let yAtual = 0; yAtual < 400; yAtual += 20) {
    rect(350, yAtual, 10, 10);
  }
}

function defineVencedor() {
  for (let i = 0; i < contagem; i++) {
    if (xJogador[i] > 350) {
      vencedor = jogador[i];
      tela = "fim";
    }
  }
}


// tela extra
function keyPressed() { 
  if (tela == "inicio" && key == ' ') {
    tela = "jogo";
  }

  if (tela == "fim" && key == 'r') {
    reiniciarJogo();
    tela = "inicio";
  }
}

function keyReleased() {
  if (tela == "jogo") {
    for (let i = 0; i < contagem; i++) {
      if (key == teclas[i]) {
        xJogador[i] += random(30);
      }
    }
  }
}

function reiniciarJogo() {
  for (let i = 0; i < contagem; i++) {
    xJogador[i] = 20;
  }
  vencedor = "";
}