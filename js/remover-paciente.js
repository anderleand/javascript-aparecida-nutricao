var tabela = document.querySelector("table");
tabela.addEventListener("dblclick", function (event) {

    if (event.target.tagName == "TD"){
        
        event.target.parentNode.classList.add("fadeOut");
    
        setTimeout(function () {
            event.target.parentNode.remove();
        }, 500);

    };


});

/*  var removePaciente = document.querySelectorAll(".paciente");
    removePaciente.forEach(function (paciente){
    paciente.addEventListener("dblclick", function () {
        console.log("Fui clicado.");
        this.remove();
    });
});*/
