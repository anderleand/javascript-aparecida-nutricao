var botaoAdicionar = document.querySelector("#adicionar-paciente")
botaoAdicionar.addEventListener("click", function (event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");
    var paciente = obtemPacienteDoFormulario(form);

    var erros = validaPaciente(paciente);
     console.log(erros);
    if (erros.length > 0){
        exibeMensagensDeErros(erros);
        return;
    }

    adicionaPacienteNaTabela(paciente);
    
    form.reset();
    var limpaErro = document.querySelector("#mensagens-erro");
    limpaErro.innerHTML = "";

});

function adicionaPacienteNaTabela (paciente){
    var trPaciente = mortarTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(trPaciente);


};

function exibeMensagensDeErros (erros){
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";

    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);

    });

};

function obtemPacienteDoFormulario(form) {
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    };

    return paciente;

};

function mortarTr(paciente) {

    var trPaciente = document.createElement("tr");
    trPaciente
        .classList
        .add("paciente");

    trPaciente.appendChild(montaTd(paciente.nome, "info-nome"));
    trPaciente.appendChild(montaTd(paciente.peso, "info-peso"));
    trPaciente.appendChild(montaTd(paciente.altura, "info-altura"));
    trPaciente.appendChild(montaTd(paciente.gordura, "info-gordura"));
    trPaciente.appendChild(montaTd(paciente.imc, "info-imc"));

    return trPaciente;

};

function montaTd(dado, classe) {
    var td = document.createElement("td")
    td.textContent = dado;
    td
        .classList
        .add(classe);

    return td;

};

function validaPaciente(paciente){
    var erros = [];

    if(!validaPeso(paciente.peso)){
        erros.push("Peso inválido");
    };

    if(!validaAltura(paciente.altura)){
        erros.push("Altura inválida!")
    };

    if(paciente.nome.length == 0){
        erros.push("Nome não pode ser em branco!")
    };

    if(paciente.gordura.length == 0){
        erros.push("Gordura não pode ser em branco!")
    };

    paciente.peso.length == 0 ? erros.push("Peso não pode ser em branco!"): null;

    paciente.altura == 0 ? erros.push("Altura não pode ser em branco!"): null;

    return erros;
}