var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];


    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;
    var tdImc = paciente.querySelector(".info-imc");
    var pesoValido = validaPeso(peso);
    var alturaValida = validaAltura(altura);

    if (!pesoValido) {
        console.log("Peso inválido!");
        tdImc.textContent = "Peso inválido!";
        paciente.classList.add("altura-peso-invalido");
    };

    if (!alturaValida) {
        tdImc.textContent = "Altura inválida!";
        paciente
            .classList
            .add("altura-peso-invalido");
    };

    if (!pesoValido && !alturaValida) {
        tdImc.textContent = "Peso e Altura inválidos!"
    };

    if (pesoValido && alturaValida) {
        tdImc.textContent = calculaImc(peso, altura);
    };
};

function validaPeso(peso){
   if( peso >= 0 && peso <= 1000){
       return true;
   } else {
       return false;
   }
};

function validaAltura(altura){
 if(altura >= 0 && altura <= 3.00){
     return true;
 } else {
     return false;
 }
};

function calculaImc(peso, altura) {
    let imc = 0;
    imc = peso / (altura * altura);

    return imc.toFixed(2);

};