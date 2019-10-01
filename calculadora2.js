var valor1;
var valor2;
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

    valor1 = document.getElementById("visor").value;
    //alert(valor1);
    document.getElementById("visor").value = '';
    delete visor;

    if (operacao == 'apagar') {
        document.getElementById("visor").value = '';
        delete visor;
        delete valor1;
        delete valor2;
        delete resultado;

    }
    if (typeof operador != 'undefined' && operacao == 'resultado') {

        resultado = calcular(operador, valor1, valor2);
        document.getElementById("visor").value = resultado;
        delete operacao;
        delete resultado;
        return (0);
    }

    if (typeof resultado != 'undefined') {
        resultado = calcular(operacao, valor1, valor2);
        operador = operacao;
        document.getElementById("visor").value = resultado;

    } else {
        valor2 = document.getElementById("visor").value;
        operador = operacao;
    }

}

function calcular(operador, valor1, valor2) {

    switch (operador) {
        case "somar":
            resultado = valor1 + valor2;
            alert("somar" + operador + valor1 + valor2);
            return resultado;
        case "subtrair":
            return valor1 - valor2;
        case "multiplicar":
            return valor1 * valor2;
        case "dividir":
            return valor1 / valor2;
    }

}