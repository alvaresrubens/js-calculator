var valor1;
var valor2;
var operador;
var visor;
var resultado;

function teclaNumerica(numero) {
    if (typeof visor == 'undefined') {
        document.getElementById("visor").value = '';
    }
    visor = document.getElementById("visor").value = document.getElementById("visor").value + numero;
    visor = 1;
}

function teclaFuncao(operacao) {
    valor1 = document.getElementById("visor").value;

    if (typeof operador != 'undefined') {

        operador = operacao;
        document.getElementById("visor").value = '';

    } else {
        operador = operacao;
        document.getElementById("visor").value = '';
    }

    if (operacao == 'apagar') {
        document.getElementById("visor").value = '';
        delete visor;
        delete operador;
        delete valor1;
        delete valor2;
        delete resultado;
    }
}

function resultado() {
    valor2 = document.getElementById("visor").value;
    resultado = calcular(operador, valor1, valor2);
    document.getElementById("visor").value = resultado;
    delete operador;
    delete valor1;
    delete valor2;
    delete visor;
}

function calcular(operador, valor1, valor2) {

    switch (operador) {
        case "+":
            final = parseInt(valor1) + parseInt(valor2);
            return final;
        case "-":
            final = parseInt(valor1) - parseInt(valor2);
            return final;
        case "*":
            final = parseInt(valor1) * parseInt(valor2);
            return final;
        case "/":
            final = parseInt(valor1) / parseInt(valor2);
            return final;
    }
}