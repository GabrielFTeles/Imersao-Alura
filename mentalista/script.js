var numeroSecreto = parseInt(Math.random() * 11);
var tentativas = 1;
var botaoChutar = document.getElementById("botao");
var botaoReiniciar = document.getElementById("botaoReiniciar");

function Chutar() {
  var chute = parseInt(document.getElementById("valor").value);
  var tentativasRestantes = 3 - tentativas;

  if (isNaN(chute)) {
    document.getElementById("resultado").innerHTML =
      "O valor inserido é inválido";
  } else if (chute == numeroSecreto) {
    document.getElementById("resultado").innerHTML =
      "Parabéns 😃 você acertou o número secreto era " + numeroSecreto + "!";
    document.getElementById("dica").innerHTML =
      "Clique no botão Reiniciar, para começar um novo jogo.";
    document.getElementById("tentativas").innerHTML = "";
    botaoChutar.style.display = "none";
    botaoReiniciar.style.display = "initial";
  } else if (tentativas == 3) {
    document.getElementById("resultado").innerHTML =
      "Infelizmente 😢 suas tentivas acabaram.";
    document.getElementById("dica").innerHTML =
      "Clique em reiniciar, para começar um novo jogo.";
    document.getElementById("tentativas").innerHTML = "";
    botaoChutar.style.display = "none";
    botaoReiniciar.style.display = "initial";
  } else if (chute > 10 || chute < 0) {
    document.getElementById("resultado").innerHTML =
      "Você deve digitar um numero de 0 a 10!";
  } else if (chute > numeroSecreto) {
    tentativas++;
    document.getElementById("resultado").innerHTML = "Errou feio, Errou rude!";
    document.getElementById("dica").innerHTML = "Dica: Tente um número menor";
    document.getElementById("tentativas").innerHTML =
      "Tentativa(s) restantes: " + tentativasRestantes;
  } else {
    tentativas++;
    document.getElementById("resultado").innerHTML = "Errou feio, Errou rude!";
    document.getElementById("dica").innerHTML = "Dica: Tente um número maior";
    document.getElementById("tentativas").innerHTML =
      "Tentativa(s) restantes: " + tentativasRestantes;
  }
}

function Reiniciar() {
  tentativas = 1;
  numeroSecreto = parseInt(Math.random() * 11);
  botaoChutar.style.display = "initial";
  botaoReiniciar.style.display = "none";
  document.getElementById("resultado").innerHTML = "";
  document.getElementById("dica").innerHTML = "";
}