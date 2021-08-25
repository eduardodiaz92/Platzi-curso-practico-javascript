function calcularRango(lista) {    
    const ordenarLista = lista.sort ((a,b) => a - b);
    const valorBajo = lista[0];

    const valorAlto = lista[lista.length - 1];
    

    const rango = valorAlto - valorBajo;
    const rangoMedio = (valorAlto + valorBajo) / 2;
    return rango; 
    
    
}
function calcularRangoMedio(lista) {    
    const ordenarLista = lista.sort ((a,b) => a - b);
    const valorBajo = lista[0];

    const valorAlto = lista[lista.length - 1];  

    
    const rangoMedio = (valorAlto + valorBajo) / 2;
   
    return rangoMedio;
    
}
   


