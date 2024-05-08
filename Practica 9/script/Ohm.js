function calcularResistencia() {
    
    var voltaje = document.getElementById("voltaje").value;
    var corriente = document.getElementById("corriente").value;
    var resultado = document.getElementById("iblResultado");

    var resistencia;

    if (voltaje != "" && corriente !="") {
        resistencia = voltaje / corriente;
        resultado.innerHTML = ("Resistencia = " + resistencia + "Ohms");
        console.log("R = " + resistencia + " Ohms");
    } else {
        alert("Ingresar datos por favor");
    }
}

function calcularCorriente() {
    var voltaje = document.getElementById("voltaje").value;
    var resistencia = document.getElementById("corriente").value;
    var resultado = document.getElementById("iblResultado");

    var resistencia;

    if (voltaje != "" && corriente !="") {
        corriente = voltaje / resistencia;
        resultado.innerHTML = "Corriente = " + resistencia + "Ohms";
        console.log("R = " + resistencia + " Ohms");
    } else {
        alert("Ingresar datos por favor");
    }
}

function calcularVoltaje() {
    var voltaje = document.getElementById("voltaje").value;
    var corriente = document.getElementById("corriente").value;
    var resultado = document.getElementById("iblResultado");

    var resistencia;

    if (voltaje != "" && corriente !="") {
        resistencia = voltaje / corriente;
        resultado.innerHTML = "Resistencia = " + resistencia + "Ohms";
        console.log("R = " + resistencia + " Ohms");
    } else {
        alert("Ingresar datos por favor");
    }
}