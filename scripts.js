document.getElementById("submit").addEventListener("click", function() {
    var nome = document.querySelector("input[name='usuario']").value;
    var genero = document.getElementById("genero").value;
    var peso = document.getElementById("peso").value;
    var altura = document.getElementById("altura").value;

    if (nome === "" || peso === "" || altura === "") {
        alert("Todos os campos são obrigatórios!");
        return;
    }

    var imc = calcularIMC(peso, altura);
    var classificacao = classificarIMC(imc, genero);

    var mensagem = "Olá, " + nome + "! Seu IMC é " + imc.toFixed(2) + ".\n";
    mensagem += "Você está classificado como " + classificacao + ".";

    alert(mensagem);
});

function calcularIMC(peso, altura) {
    var alturaMetros = altura / 100;
    var imc = peso / (alturaMetros * alturaMetros);
    return imc;
}

function classificarIMC(imc, genero) {
    if (genero === "masculino") {
        if (imc < 20.7) {
            return "Abaixo do peso";
        } else if (imc < 26.4) {
            return "Peso normal";
        } else if (imc < 27.8) {
            return "Marginalmente acima do peso";
        } else if (imc < 31.1) {
            return "Acima do peso ideal";
        } else {
            return "Obeso";
        }
    } else if (genero === "feminino") {
        if (imc < 19.1) {
            return "Abaixo do peso";
        } else if (imc < 25.8) {
            return "Peso normal";
        } else if (imc < 27.3) {
            return "Marginalmente acima do peso";
        } else if (imc < 32.3) {
            return "Acima do peso ideal";
        } else {
            return "Obeso";
        }
    } else {
        return "Gênero inválido";
    }
}
