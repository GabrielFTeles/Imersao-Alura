function Real() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmDolars = parseFloat(valor);

  if (isNaN(valorEmDolars)) {
    document.getElementById("valorConvertido").innerHTML =
      "O valor inserido é inválido!";
  } else {
    var valorConvertido1 = valorEmDolars * 5.06;
    var valorConvertido2 = valorEmDolars * 0.000026;

    var valorConvertido1fix = valorConvertido1.toFixed(2);
    document.getElementById("valorConvertido").innerHTML =
      "Real: R$ " + valorConvertido1fix;
  }
}

function Euro() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmDolars = parseFloat(valor);

  if (isNaN(valorEmDolars)) {
    document.getElementById("valorConvertido").innerHTML =
      "O valor inserido é inválido!";
  } else {
    var valorConvertido1 = valorEmDolars * 0.92;

    var valorConvertido1fix = valorConvertido1.toFixed(2);
    document.getElementById("valorConvertido").innerHTML =
      "Euro: € " + valorConvertido1fix;
  }
}

function Bit() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmDolars = parseFloat(valor);

  if (isNaN(valorEmDolars)) {
    document.getElementById("valorConvertido").innerHTML =
      "O valor inserido é inválido!";
  } else {
    var valorConvertido1 = valorEmDolars * 0.000026;

    document.getElementById("valorConvertido").innerHTML =
      "BTC: ₿ " + valorConvertido1;
  }
}