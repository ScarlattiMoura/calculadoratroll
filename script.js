var simbolo = 0;

function soma() {
    var n1 = document.getElementById('1').value
    var n2 = document.getElementById('2').value 
    

    var valor = Number(n1) + Number(n2)

    document.getElementById('resultado').value = valor;
}

