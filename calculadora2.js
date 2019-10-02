var valor1;
var valor2;
var operador;
var visor;

function teclaNumerica(numero) {
    if (typeof visor == 'undefined') {
        document.getElementById("visor").value = '';
    }
    document.getElementById("visor").value = document.getElementById("visor").value + numero;
    visor = 1;
}

function teclaFuncao(operacao) {
    valor1 = document.getElementById("visor").value;

    if (operador == null) {

        operador = operacao;
        document.getElementById("visor").value = '';
        alert("Cálculo: " + valor1 + operador + valor2)

    } else {
        //document.getElementById("visor").value = '';
        alert("Operador já definido " + operador);
    }

}

function limpar() {

    document.getElementById("visor").value = '';
    operador = null;
    valor1 = null;
    valor2 = null;
    delete visor;
    alert("Limpou");
}

function resultado() {
    alert("Entrou em resultado");
    valor2 = document.getElementById("visor").value;
    alert("Cálculo: " + valor1 + " " + operador + " " + valor2);
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