// const precioOriginal = 120;
// const descuento = 18;

function calcularPrecioConDescuento(precio, descuento) {
    const procentajePrecioConDescuento = 100 -descuento;
    const precioConDescuento = (precio * procentajePrecioConDescuento) /100;

    return precioConDescuento;
}


// console.log({
//     precioOriginal,
//     descuento,
//     procentajePrecioConDescuento,
//     precioConDescuento

// });