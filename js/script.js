// ------- Exercicio 1 --- Tabuada-- -->
function tabuada() {
    let num = document.getElementById("num").value;
    let resul = document.getElementById("resul");

    let tabuada = "<table>";
    for (let i = 1; i <= 10; i++) {
        tabuada += <tr><td> ${num} x ${i} = </td><td>  ${num * i}</td></td>;
    }
    tabuada += "</table>";
    resul.innerHTML = tabuada;
}
// ------- Exercicio 2 --- Soma dos produtos-- -->
let soma = 0
function calcularSoma() {
    let valor = document.getElementById("valor").value
    
    soma += Number(valor)

    document.getElementById("valor").value= ""

    document.getElementById("soma").textContent  = "Soma atual: " + soma
}

//

// -- Exercicio 1 --- Progressão Aritmética-- -->
function calcProgArit() {
    // ENTRADA
    let inicio = Number(document.getElementById("inicio").value)
    let passo = Number(document.getElementById("passo").value)
    let repeticoes = Number(document.getElementById("repeticoes").value)

    // PROCESSAMENTO
    let soma = 0
    for(let i = inicio; i < repeticoes; i++)
    {
        soma += passo
        // SAÍDA
        document.getElementById("progArit").innerHTML += `<p>${soma}</p>`
    }
}

// -- Exercicio 1 --- Progressão Aritmética-- -->