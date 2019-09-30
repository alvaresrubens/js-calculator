var operando1;
var operando2;
var operador;
var visor;
var resultado;

function teclaNumerica(numero) {

    if (typeof visor == 'undefined') {
        document.getElementById("visor").value = '';
    }
    document.getElementById("visor").value = document.getElementById("visor").value + numero;
    visor = 1;

}

function teclaFuncao(operacao) {

    operando1 = document.getElementById("visor").value;
    document.getElementById("visor").value = '';
    delete visor;

    if (operacao == 'apagar') {
        document.getElementById("visor").value = '';
        delete visor;
        delete operando1;
        delete operando2;
        delete resultado;

    }

    if (typeof operador != 'undefined' && operacao == 'resultado') {

        resultado = calcular(operacao, operando1, operando2);
        document.getElementById("visor").value = resultado;
        delete operacao;
        delete resultado;
        return (0);
    }

    if (typeof resultado != 'undefined') {
        resultado = calcularOper(operacao, operando1, operando2);
        operando = operacao;
        document.getElementById("visor").value = resultado;
    } else {
        operando2 = document.getElementById("visor").value;
        operador = operacao;
    }

}

function calcular(operador, operando1, operando2) {

    switch (operador) {
        case "somar":
            return operando1 + operando2;
        case "subtrair":
            return operando1 - operando2;
        case "multiplicar":
            return operando1 * operando2;
        case "dividir":
            return operando1 / operando2;
    }

}