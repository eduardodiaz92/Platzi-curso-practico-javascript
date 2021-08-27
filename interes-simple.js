// const capital = 500;
// const interes = 0.02;
// const meses = 2;

// const interesSimple = capital * interes * meses;



function calcularInteresCompuesto() {
    const inputCapital = document.getElementById("InputCapital");
    const capitalValue = inputCapital.value;

    const inputInteres = document.getElementById("Porcentaje");
    const interesValue = inputInteres.value;

    const inputMeses = document.getElementById("Meses");
    const mesesValue = inputMeses.value;


    const interesSimple = capitalValue * interesValue * mesesValue;

    const resultI = document.getElementById("ResultI");
    resultI.innerText = `El interés simple a pagar es ${interesSimple} pesos por el capital de ${capitalValue} pesos al ${interesValue * 100} % durante ${mesesValue} meses`;
    
}