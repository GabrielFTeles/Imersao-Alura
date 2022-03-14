//Lista na qual é guardada os objetos dos filmes.

var listaFilmes = [
  {
    id: 1,
    titulo: "Spider-Man",
    url:
      "https://upload.wikimedia.org/wikipedia/en/f/fa/Spider-Man_Into_the_Spider-Verse_poster.png"
  },
  {
    id: 2,
    titulo: "Sherlock Holmes",
    url:
      "https://upload.wikimedia.org/wikipedia/pt/thumb/4/4e/Sherlock_Holmes_%28poster_de_2009%29.jpg/250px-Sherlock_Holmes_%28poster_de_2009%29.jpg"
  },
  {
    id: 3,
    titulo: "Interestelar",
    url:
      "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/f1f881062c7307c1f1c289ef5df5ee7e650214ec7e03deced3cf9c19e1c2ac25._RI_V_TTW_.jpg"
  }
];

//Informações puxadas do HTML.

const inserirImagens = document.getElementById("imagens");
const alerta = document.getElementById("alerta");
const urlInput = document.getElementById("url");
const nomeInput = document.getElementById("nome");
const botaoAdd = document.getElementById("botaoAdicionar");

//Imprime os filmes que ja estão na lista quando a página é carregada.

for (let i = 0; i < listaFilmes.length; i++) {
  inserirImagens.innerHTML += `<img id=${listaFilmes[i].id} onmouseover=mouseOver("${listaFilmes[i].id}") onmouseout=mouseOut() class=filmes src=${listaFilmes[i].url}>`;
}

//Função chamada quando o botão Adicionar é pressionado.

function botaoClick() {
  let nome = document.getElementById("nome").value;
  let url = document.getElementById("url").value;

  inserirFilme(nome, url);
}

//Insere o filme na lista de filmes, recebendo os valores da função botaoClick()

function inserirFilme(titulo, url) {
  if (VerificarParametros(titulo, url)) {
    let filme = {
      id: listaFilmes.length + 1,
      titulo,
      url
    };
    listaFilmes.push(filme);
    ImprimirFilme();
  }
}

//Verifica os parâmetros da função InserirFilme.

function VerificarParametros(nome, link) {
  for (let i = 0; i < listaFilmes.length; i++) {
    if (!(link.endsWith(".png") || link.endsWith(".jpg"))) {
      alerta.innerHTML = "é preciso usar uma imagem .png ou .jpg";
      return false;
    } else if (listaFilmes[i].url === link) {
      alerta.innerHTML = "o filme já foi adicionado";
      return false;
    }
  }
  alerta.innerHTML = "";
  nomeInput.value = "";
  urlInput.value = "";
  return true;
}

//Imprime a imagem do filme na tela.

function ImprimirFilme() {
  var addUltimo = listaFilmes.length - 1;

  inserirImagens.innerHTML += `<img id=${listaFilmes[addUltimo].id} onmouseover=mouseOver("${listaFilmes[addUltimo].id}") onmouseout=mouseOut() class=filmes src=${listaFilmes[addUltimo].url}>`;
}

//Função chamada quando o mouse passa por cima do filme.

function mouseOver(idFilme) {
  for (const value of listaFilmes) {
    if (value.id != idFilme) {
      changeClass("over", value.id);
    }
  }
}

//Função chamada quando o mouse sai de cima do filme.

function mouseOut() {
  for (const value of listaFilmes) {
    changeClass("", value.id);
  }
}

//Função na qual atribui e remove as classes dos filmes (Blur é adicionado e removido aqui)

function changeClass(input, id) {
  if (input === "over") {
    document.getElementById(id).classList.remove("filmes");
    document.getElementById(id).classList.add("blur");
  } else {
    document.getElementById(id).classList.remove("blur");
    document.getElementById(id).classList.add("filmes");
  }
}