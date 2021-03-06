// Codigo del cuadrado
console.group("Cuadrados");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
    return lado * 4;   
} 
//console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm"); 

// const areaCuadrado = ladoCuadrado * ladoCuadrado;
function areaCuadrado(lado) {
    return lado * lado;
}
// console.log("El área del cuadrado es: " + areaCuadrado + "cm^2");
console.groupEnd();

// Codigo del triángulo
console.group("Triángulos");
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// console.log(
//     "Los lados del triángulo miden: " 
//     + ladoTriangulo1 
//     + "cm, " 
//     + ladoTriangulo2 
//     + "cm, " 
//     + baseTriangulo 
//     + "cm"
//     )
// const alturaTriangulo = 5.5;
// console.log("El altura del triángulo es: " + alturaTriangulo + "cm");

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
} 
// console.log("El perímetro del triángulo es: " + perimetroTriangulo + "cm");

// const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}
// console.log("El área del triángulo es: " + areaTriangulo + "cm^2");

console.groupEnd();

// Codigo del círculos
console.group("círculos");

// Radio
// const radioCirculo = 4;
// console.log("El radio del circulo es: " + radioCirculo + "cm");

// Diámetro

function diametroCirculo(radio) {
    return radio * 2;
}

// PI

const PI = Math.PI;
console.log("PI es: " + PI + "cm");

// Circunferencia

function circunferenciaCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

// Área

function areaCirculo(radio) {
    return (radio * radio) * PI;
}


console.groupEnd();


//Aquí interactuamos con el HTML
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado")
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}
function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado")
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}
function calcularPerimetroTriangulo() {
    const inputLado1 = document.getElementById("InputTrianguloLado1")
    const inputLado2 = document.getElementById("InputTrianguloLado2")
    const inputBase = document.getElementById("InputTrianguloBase")
    const valueLado1 = Number(inputLado1.value);
    const valueLado2 = Number(inputLado2.value);
    const valueBase = Number(inputBase.value)

    const perimetro = perimetroTriangulo(valueLado1, valueLado2, valueBase);
    alert(perimetro);
}
function calcularAreaTriangulo() {
    const inputBase = document.getElementById("InputTrianguloBase")
    const inputAltura = document.getElementById("InputTrianguloAltura")
    const valueBase = inputBase.value;
    const valueAltura = inputAltura.value;

    const area = areaTriangulo(valueBase, valueAltura);
    alert(area);
}
function calcularDiametroCirculo() {
    const input = document.getElementById("InputCirculo")
    const value = input.value;

    const diametro = diametroCirculo(value);
    alert(diametro);
}
function calcularCircunferenciaCirculo() {
    const input = document.getElementById("InputCirculo")
    const value = input.value;

    const circunferencia = circunferenciaCirculo(value);
    alert(circunferencia);
}
function calcularAreaCirculo() {
    const input = document.getElementById("InputCirculo")
    const value = input.value;

    const area = areaCirculo(value);
    alert(area);
}