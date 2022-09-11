var listaManhwas = [
  {
    nome: "Solo Leveling",
    url:
      "https://cupulatrovao.com.br/wp-content/uploads/2019/10/Solo-Leveling-Manhwa.jpg"
  },
  {
    nome: "Poison Dragon",
    url: "https://markscans.online/wp-content/uploads/2021/02/Capa.01-1.png"
  }
];
var elementoImagem = document.getElementById("imagem");
var urlInput = document.getElementById("valor").value;
var nomeInput = document.getElementById("nome").value;

listaManhwas.forEach(function (nome, i) {
  elementoImagem.innerHTML +=
    "<div>" +
    "<h3>" +
    listaManhwas[i].nome +
    "</h3>" +
    "<img src=" +
    listaManhwas[i].url +
    ">" +
    "</div>";
});

function adicionarFilme() {
  var nomeInput = document.getElementById("nome").value;
  var urlInput = document.getElementById("valor").value;

  if (
    urlInput.endsWith(".jpg" || ".jpg" || ".jpeg") ||
    urlInput.endsWith(".png")
  ) {
    if (listaManhwas.some((item) => item.url === urlInput)) {
      window.alert("Url já inserida, tente outro manhwa!!");
    } else if (listaManhwas.some((item) => item.nome === nomeInput)) {
      window.alert("Nome já inserido, tente outro manhwa!!");
    } else {
      listarNaTela();
    }
  } else {
    window.alert("Você precisa inserir uma url válida");
  }
  document.getElementById("nome").value = "";
  document.getElementById("valor").value = "";
}

function listarNaTela() {
  var nomeInput = document.getElementById("nome").value;
  var urlInput = document.getElementById("valor").value;
  listaManhwas.push({ nome: nomeInput, url: urlInput });
  var elementoImagem = document.getElementById("imagem");
  elementoImagem.innerHTML +=
    "<div>" +
    "<h3>" +
    nomeInput +
    "</h3>" +
    "<img src=" +
    urlInput +
    ">" +
    "</div>";
}

function removerFilme() {
  var nomeRemover = document.getElementById("nomeRemover").value;
  if (listaManhwas.some((item) => item.nome === nomeRemover)) {
    removerDaTela();
  } else {
    window.alert("Não está no nosso catálogo!");
  }

  document.getElementById("nomeRemover").value = "";
}

function removerDaTela() {
  var nomeRemover = document.getElementById("nomeRemover").value;
  var remover = listaManhwas.filter((abc) => abc.nome !== nomeRemover);
  listaManhwas = remover;

  elementoImagem.innerHTML = "";
  listaManhwas.forEach(function (nome, i) {
    elementoImagem.innerHTML +=
      "<div>" +
      "<h3>" +
      listaManhwas[i].nome +
      "</h3>" +
      "<img src=" +
      listaManhwas[i].url +
      ">" +
      "</div>";
  });
}