// En este ejercicio debes crear una función para calcular la altura de un triángulo isósceles

function alturaIsosceles (lado1, lado2, base) {
    if(lado1 === lado2 && lado1 != base) {
        return Math.sqrt((lado1 * lado2) - (base **2 / 2));
    } else {
        alert("Las medidas no son de un triangulo isósceles")
    }
    
}
function calcularAlturaIso() {
    const inputL1 = document.getElementById("InputLado1");
    const inputL2 = document.getElementById("InputLado2");
    const inputB = document.getElementById("InputBase");
    const valueL1 = inputL1.value;
    const valueL2 = inputL2.value;
    const valueB = inputB.value;

    const altura = alturaIsosceles(valueL1, valueL2, valueB);
    alert(altura);
    
}
