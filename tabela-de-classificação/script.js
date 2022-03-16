let gabriel = {
  nome: "Storm",
  avatar:
    "https://cdn.discordapp.com/avatars/839691667715391510/6d1a5220658f628106ed1d3be4755dc9.png?size=2048",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
};

let jogadores = [gabriel];

//Chama a função que exibe os jogadores na tela para carregar o que está armazenado na lista quando a página carrega.

exibeJogadoresNaTela(jogadores);

//Função para adicionar um jogador novo.
function adicionarJogador() {
  let nome = document.getElementById("nomeInput").value;
  let url = document.getElementById("urlInput").value;

  if (verificarURL(url) && verificarNome(nome)) {
    let jogador = {
      nome,
      avatar: url,
      vitorias: 0,
      empates: 0,
      derrotas: 0,
      pontos: 0
    };
    document.getElementById("error").innerText = "";
    jogadores.push(jogador);
    exibeJogadoresNaTela(jogadores);

    let message = document.getElementById("error");
    message.style.color = "green";
    message.innerHTML = `O jogador ${nome} foi adicionado à tabela.`;
  } else {
  }
}

//Função que verifica o parâmetro da URL.
function verificarURL(url) {
  if (!(url.endsWith(".png") || url.endsWith(".jpg"))) {
    let message = document.getElementById("error");
    message.style.color = "red";
    message.innerText = "É necessário inserir um link .png ou .jpg";
    return false;
  } else {
    return true;
  }
}

//Função que verifica o parâmetro do Nome.
function verificarNome(nome) {
  if (!(nome.length <= 10)) {
    let message = document.getElementById("error");
    message.style.color = "red";
    message.innerText = "O nome deve conter no máximo 10 caracteres";
    return false;
  } else {
    return true;
  }
}

//Função que calcula os pontos de acordo com Vitórias/Empates/Derrotas.
function calculaPontos(jogador) {
  let pontos = jogador.vitorias * 3 + jogador.empates;
  return pontos;
}

//Função que coloca os jogadores na tela, inserindo no HTML.
function exibeJogadoresNaTela(jogadores) {
  let elemento = "";
  for (let i = 0; i < jogadores.length; i++) {
    elemento += `<tr><td class="avatarBox"><img class="avatar" src="${jogadores[i].avatar})"><img class="removerIcone" onclick="remover(${i})" src="https://cdn-icons-png.flaticon.com/512/1017/1017530.png">
    <p class="nome">${jogadores[i].nome}</p></td>
        <td>${jogadores[i].vitorias}</td>
        <td>${jogadores[i].empates}</td>
        <td>${jogadores[i].derrotas}</td>
        <td>${jogadores[i].pontos}</td>
        <td><button class="botaoAcao" onClick="adicionarVitoria(${i})">Vitória</button></td>
        <td><button class="botaoAcao" onClick="adicionarEmpate()">Empate</button></td>
        <td><button class="botaoAcao" onClick="zerarBotao(${i})">Zerar</button></td>
      </tr>`;
  }
  document.getElementById("tabelaJogadores").innerHTML = elemento;
}

//Função que adiciona Vitória ao usuário ao clicar no botão de ação.
function adicionarVitoria(i) {
  let jogador = jogadores[i];
  jogador.vitorias++;
  for (let i = 0; i < jogadores.length; i++) {
    if (!(jogadores[i] === jogador)) {
      jogadores[i].derrotas++;
    }
  }
  atualizarPontos(jogador);
  exibeJogadoresNaTela(jogadores);
}

//Função que adiciona Empate ao usuário ao clicar no botão de ação.
function adicionarEmpate() {
  for (let i = 0; i < jogadores.length; i++) {
    jogadores[i].empates++;
    atualizarPontos(jogadores[i]);
  }
  exibeJogadoresNaTela(jogadores);
}

//Função que zera os pontos do jogador no qual o botão zerar foi clicado.
function zerarBotao(i) {
  let jogador = jogadores[i];
  zerarPontos(jogador);
  exibeJogadoresNaTela(jogadores);
}

//Função que pega os pontos e zera todos os pontos do jogador inserido quando a função é chamada.
function zerarPontos(jogador) {
  jogador.vitorias = 0;
  jogador.empates = 0;
  jogador.derrotas = 0;
  jogador.pontos = 0;
}

//Função chamada quando o botão Zerar Todos é clicado.
function zerarTodos() {
  for (let i = 0; i < jogadores.length; i++) {
    let jogador = jogadores[i];
    zerarPontos(jogador);
  }
  exibeJogadoresNaTela(jogadores);
}

//Função que atualiza os pontos do jogador inserido quando a função é chamada.
function atualizarPontos(jogador) {
  jogador.pontos = calculaPontos(jogador);
}

//Função chamada quando o "botão" remover é pressionado.
function remover(i) {
  let jogador = jogadores[i];
  jogadores.splice(i, 1);
  exibeJogadoresNaTela(jogadores);
  let message = document.getElementById("error");
  message.style.color = "red";
  message.innerText = `O jogador ${jogador.nome} foi removido da tabela.`;
}