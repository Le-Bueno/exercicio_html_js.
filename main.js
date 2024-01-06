function validarFormulario() {

    var valorCampoA = parseFloat(document.getElementById("campoA").value);
    var valorCampoB = parseFloat(document.getElementById("campoB").value);


    if (!isNaN(valorCampoA) && !isNaN(valorCampoB) && valorCampoB > valorCampoA) {
        exibirMensagem(true, "Formulário válido! Número B é maior que o número A.");
    } else {
        exibirMensagem(false, "Formulário inválido! Certifique-se de que o número B é maior que o número A.");
    }
}

function exibirMensagem(ehValido, mensagem) {
    var mensagemElemento = document.getElementById("mensagem");
    mensagemElemento.textContent = mensagem;

    if (ehValido) {
        mensagemElemento.style.color = "green";
    } else {
        mensagemElemento.style.color = "red";
    }
}