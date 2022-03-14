document.getElementById('submit').onclick = function (e) {
  let valorPrimeiroBimestre = parseInt(document.querySelector("#valor1").value);
  let valorSegundoBimestre = parseInt(document.querySelector("#valor2").value);
  let valorTerceiroBimestre = parseInt(document.querySelector("#valor3").value);
  let valorQuartoBimestre = parseInt(document.querySelector("#valor4").value);
 
  let mediaResultado = (valorPrimeiroBimestre + valorSegundoBimestre + valorTerceiroBimestre + valorQuartoBimestre ) / 4;
  
  let resultadoFinal = mediaResultado.toFixed(1);
  
if (resultadoFinal >= 0){  document.getElementById("resultado").innerHTML = "Sua Média: " + resultadoFinal
} else {  document.getElementById("resultado").innerHTML = "O valor inserido é inválido!"
 } 
}