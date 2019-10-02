var valor1;
var valor2;
var operador;
var resultado;

function teclaNumerica(numero) {

    /*
        if (typeof visor == 'undefined') {
            document.getElementById("visor").value = '';
        }*/

    document.getElementById("visor").value = document.getElementById("visor").value + numero;

    //alert(resultado);


    //visor = 1;
}

function teclaFuncao(operacao) {

    if (operador == null) {
        valor1 = document.getElementById("visor").value;
        operador = operacao;
        document.getElementById("visorOperacao").value = valor1 + operacao;
        document.getElementById("visor").value = '';
    }
}

function limpar() {
    document.getElementById("visor").value = '';
    document.getElementById("visorOperacao").value = '';
    operador = null;
    valor1 = null;
    valor2 = null;
    resultado = null;
}

function igual() {

    if (operador == null && valor2 == null) {
        document.getElementById("visor").value = document.getElementById("visor").value;
    } else {
        if (resultado != null) {

            valor1 = resultado;
            document.getElementById("visorOperacao").value = valor1 + operador + valor2;
            resultado = calcular(operador, valor1, valor2);
            document.getElementById("visor").value = resultado;
        } else {
            valor2 = document.getElementById("visor").value;
            document.getElementById("visorOperacao").value = valor1 + operador + valor2;
            resultado = calcular(operador, valor1, valor2);
            document.getElementById("visor").value = resultado;
        }
    }
}

function calcular(operador, valor1, valor2) {

    switch (operador) {
        case "+":
            final = parseFloat(valor1) + parseFloat(valor2);
            return final;
        case "-":
            final = parseFloat(valor1) - parseFloat(valor2);
            return final;
        case "*":
            final = parseFloat(valor1) * parseFloat(valor2);
            return final;
        case "/":
            final = parseFloat(valor1) / parseFloat(valor2);
            return final;
    }

}