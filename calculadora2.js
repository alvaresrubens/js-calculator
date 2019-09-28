function tecla1() {
    var valorVisor = document.getElementById("visor").value;
    document.getElementById("visor").value = valorVisor.concat(1);
}

function tecla2() {
    var valorVisor = document.getElementById("visor").value;
    document.getElementById("visor").value = valorVisor.concat(2);
}


function tecla3() {
    var valorVisor = document.getElementById("visor").value;
    document.getElementById("visor").value = valorVisor.concat(3);
}


function tecla4() {
    var valorVisor = document.getElementById("visor").value;
    document.getElementById("visor").value = valorVisor.concat(4);
}

function tecla5() {
    var valorVisor = document.getElementById("visor").value;
    document.getElementById("visor").value = valorVisor.concat(5);
}


function tecla6() {
    var valorVisor = document.getElementById("visor").value;
    document.getElementById("visor").value = valorVisor.concat(6);
}


function tecla7() {
    var valorVisor = document.getElementById("visor").value;
    document.getElementById("visor").value = valorVisor.concat(7);
}


function tecla8() {
    var valorVisor = document.getElementById("visor").value;
    document.getElementById("visor").value = valorVisor.concat(8);
}


function tecla9() {
    var valorVisor = document.getElementById("visor").value;
    document.getElementById("visor").value = valorVisor.concat(9);
}


function tecla0() {
    var valorVisor = document.getElementById("visor").value;
    document.getElementById("visor").value = valorVisor.concat(0);

}

function teclaIgual() {
    var valorVisor = document.getElementById("visor").value;
    document.getElementById("visor").value = valorVisor.concat(0);

}
function teclaVirgula() {
    var valorVisor = document.getElementById("visor").value;
    document.getElementById("visor").value = valorVisor.concat();

}

function funcaoMultiplicacao() {
    var valorVisor = document.getElementById("visor").value;
    document.getElementById("visor").value = valorVisor.concat(0);

}
function funcaoSubtracao() {
    var valorVisor = document.getElementById("visor").value;
    document.getElementById("visor").value = valorVisor.concat(0);

}
function funcaoAdicao() {
    var valorVisor = document.getElementById("visor").value;
    document.getElementById("visor").value = valorVisor.concat(0);

}
function funcaoDivisao() {
    var valorVisor = document.getElementById("visor").value;
    document.getElementById("visor").value = valorVisor.concat(0);

}



function teclaNumerica(num){


}

function teclaFuncao()

function apenasNumeros(evt) {
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode(key);
    //var regex = /^[0-9.,]+$/;
    var regex = /^[0-9.]+$/;
    if (!regex.test(key)) {
        theEvent.returnValue = false;
        if (theEvent.preventDefault) theEvent.preventDefault();
    }
}