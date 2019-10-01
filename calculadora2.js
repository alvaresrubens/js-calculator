var operando1;
var operando2;
var operador;
var resultado;
var visor;

function teclaNumerica(numero) {
        operando1 = operando1.concat(numero); 
        document.getElementById("visor").value = numero;
}

function teclaFuncao(funcao) {
    switch (funcao) {
        case "somar":
            operador = "somar";
            simbolo = "+";
            document.getElementById("visor").value = visor.concat(simbolo);
            break;
        case "subtrair":
            operador = "subtrair";
            break;
        case "multiplicar":
            operador = "multiplicar";
            break;
        case "dividir":
            operador = "dividir";
            break;
        case "apagar":
            document.getElementById("visor").value = '';
            break;
        case "=":
            calcular(operador);
            break;
    }
}
function calcular(operador) {

    switch (operador) {
        case "somar":
            resultado = valor1 + valor2;
            alert("Somar" + resultado);
            break;

        case "subtrair":
            resultado = valor1 - valor2;
            break;

        case "multiplicar":
            resultado = valor1 * valor2;
            break;
        case "dividir":
            resultado = valor1 / valor2;
            break;

    }

}