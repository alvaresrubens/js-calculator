var valor1;
var valor2;
var operador;
var visor;
var resultado;

function teclaNumerica(numero) {
    /*
        if (typeof visor == 'undefined') {
            document.getElementById("visor").value = '';
        }*/
    document.getElementById("visor").value = document.getElementById("visor").value + numero;
    //visor = 1;
}

function teclaFuncao(operacao) {
    valor1 = document.getElementById("visor").value;
    operador = operacao;
    document.getElementById("visor").value = valor1 + operacao;

}

function limpar() {
    document.getElementById("visor").value = '';
    operador = "";
    valor1 = "";
    valor2 = "";
    visor = "";
}

function igual() {



    valor2 = document.getElementById("visor").value;
    resultado = calcular(operador, valor1, valor2);
    document.getElementById("visor").value = resultado;

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