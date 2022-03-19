let carta1 = {
  nome: "Storm Trooper",
  imagem: "https://i.redd.it/ps45b5mssg451.jpg",
  atributos: {
    ataque: 7,
    defesa: 8,
    magia: 6
  }
};

let carta2 = {
  nome: "Darth Vader",
  imagem: "https://pbs.twimg.com/media/E22eFzPVcAMSmNf?format=jpg&name=large",
  atributos: {
    ataque: 9,
    defesa: 8,
    magia: 2
  }
};

let carta3 = {
  nome: "Chewbacca",
  imagem:
    "https://www.crossdresserheaven.com/wp-content/uploads/2019/12/chewbacca.jpg",
  atributos: {
    ataque: 5,
    defesa: 9,
    magia: 10
  }
};

let cartas = [carta1, carta2, carta3];
let cartaMaquina, cartaJogador;

function sortearCarta() {
  document.getElementById("btnSortear").style.display = "none";
  let numeroCartaMaquina = parseInt(Math.random() * 3);
  cartaMaquina = cartas[numeroCartaMaquina];

  let numeroCartaJogador = parseInt(Math.random() * 3);
  while (numeroCartaMaquina === numeroCartaJogador) {
    numeroCartaJogador = parseInt(Math.random() * 3);
  }

  cartaJogador = cartas[numeroCartaJogador];

  document.getElementById(
    "imagens"
  ).innerHTML += `<div id="cartaJogador"><img class="cartaJogadorImg" src="${cartaJogador.imagem}"><p>${cartaJogador.nome}</p></div>`;
  document.getElementById(
    "imagens"
  ).innerHTML += `<div id="cartaMaquina"><img class="cartaMaquinaImg" src="${cartaMaquina.imagem}"><p>${cartaMaquina.nome}</p></div>`;
  exibirOpcoes();

  let elementoResultado = document.getElementById("resultado");
  elementoResultado.innerHTML = "";
  document.getElementById("escolhaAtributo").style.display = "initial";
}

function exibirOpcoes() {
  let opcoes = document.getElementById("opcoes");
  let opcoesTexto = "";

  for (let atributo in cartaJogador.atributos) {
    opcoesTexto += `<input type="radio" name="atributo" onchange="foiSelecionado()" value="${atributo}">${atributo}`;
  }
  opcoes.innerHTML = opcoesTexto;
}

function obtemAtributoSelecionado() {
  let radioAtributos = document.getElementsByName("atributo");

  for (let i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked == true) {
      return radioAtributos[i].value;
    }
  }
}

function jogar() {
  let atributoSelecionado = obtemAtributoSelecionado();
  let elementoResultado = document.getElementById("resultado");
  let valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
  let valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];
  let btn = document.getElementById("btnJogar");
  let btnS = document.getElementById("btnSortear");

  if (valorCartaJogador > valorCartaMaquina) {
    elementoResultado.style.color = "green";
    elementoResultado.innerHTML = "Você venceu!";
  } else if (valorCartaJogador < valorCartaMaquina) {
    elementoResultado.style.color = "red";
    elementoResultado.innerHTML = "Você perdeu!";
  } else {
    elementoResultado.style.color = "yellow";
    elementoResultado.innerHTML = "Você empatou!";
  }
  document.getElementById("imagens").innerHTML = "";
  let opcoes = document.getElementById("opcoes");
  let opcoesTexto = "";
  opcoes.innerHTML = "";

  btn.style.display = "none";

  document.getElementById("escolhaAtributo").style.display = "none";
  document.getElementById("btnSortear").style.display = "initial";
}

function foiSelecionado() {
  let btn = document.getElementById("btnJogar");
  btn.style.display = "initial";
}