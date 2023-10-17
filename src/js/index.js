const botaoEnviar = document.getElementById('btn-enviar');

botaoEnviar.addEventListener('click', function () {
    event.preventDefault();

    inputsPreenchidos();

    inputsSemPreenchimento();

});

function inputsPreenchidos() {

    const bordaVerificada = document.querySelectorAll('.borda');

    bordaVerificada.forEach(borda => {

        if (borda.value !== "") {
            borda.classList.add("verificado");
        } else {
            borda.classList.remove("verificado");
        }
    });
}

function inputsSemPreenchimento() {

    const bordaNaoVerificada = document.querySelectorAll('.borda');
    const mostraLabel = document.querySelectorAll('.campo-obrigatorio');
    
    bordaNaoVerificada.forEach((inputVazio, indice) => {

        if (inputVazio.value === "") {
            inputVazio.classList.add("nao-verificado");
            mostraLabel[indice].classList.add("sem-preenchimento");
        } else {
            inputVazio.classList.remove("nao-verificado");
            mostraLabel[indice].classList.remove("sem-preenchimento");
        }
    });
}
