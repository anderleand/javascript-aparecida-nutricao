var campoFiltro = document.querySelector("#filtrar-tabela");
campoFiltro.addEventListener("input", function () {

    var pacientes = document.querySelectorAll(".paciente");
    for (var i = 0; i < pacientes.length; i++) {
        var paciente = pacientes[i];
        var tdNome = paciente.querySelector(".info-nome");
        var nome = tdNome.textContent;

        var expressao = new RegExp(this.value, "i");
        !expressao.test(nome) && this.value.length != 0 ? paciente.classList.add("invisivel") : paciente.classList.remove("invisivel");

    };
});

/*var comparavel = nome.substr(0, this.value.length);
            console.log(`Esse valor é do This >>>${this.value.toLowerCase()}<<< || Esse é o comparavel >>>${comparavel.toLowerCase()}<<<`)
        if (!(this.value.toLowerCase() == comparavel.toLowerCase())) {
            paciente
                .classList
                .add("invisivel");
        } else {
            paciente
                .classList
                .remove("invisivel");
                }
                console.log(this.value);
                console.log(nome);
        */

    // nome.toLowerCase() != this.value.toLowerCase() && this.value.length != 0 ?
    // paciente.classList.add("invisivel"): paciente.classList.remove("invisivel");