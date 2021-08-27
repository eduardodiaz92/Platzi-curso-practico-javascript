const lista1 = [
    2,2,4,4
];
const lista2 = [
    2,3,6,4
];
const lista3 = [
    1,1,6,4
];
const reducer = (acumulador, valoractual) => acumulador + valoractual;

function calcularDma (lista) {

    const reduccion = lista2.reduce(reducer);

    const media = (lista) => reduccion / (lista2.length);


        console.log(`la media es ${media()}`);


    const promedioDma = lista2.map((lista) => Math.abs(lista - media()));

    const dma = promedioDma.reduce(reducer) / lista2.length;

    console.log(`La desviacion media absoluta es ${dma}`); 
}
calcularDma();