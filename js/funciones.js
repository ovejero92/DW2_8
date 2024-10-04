/*function saludar(nombre){
    console.log("Hola " + nombre);
}

// let nombreDeUsuario = prompt("Pone tu nombre:");

function sumarDosNumero(numero1 , numero2) {
    return numero1 + numero2
}

function saludarAalguien(nombre) {
    return `Hola ${nombre} como estas?`
}
let total;
let restarDosNumeros = (X,Y) => 
    {
        total = X - Y
        console.log(total)
    }

console.log(total);
    

restarDosNumeros(10,5)
console.log(sumarDosNumero(4,7))
console.log(sumarDosNumero(10,25));

console.log(saludarAalguien("Gustavo"))*/ 

const calcularPrecioTotal = (precio, impuesto) => {
    let total = precio + (precio * impuesto);
    return total
}

let precioProducto = calcularPrecioTotal( 2000 , 0.21)
console.log("El precio total del producto es: $" + precioProducto);

function hayStock(cantidadDisponible,cantidadSolicitada) {
    if(cantidadSolicitada <= cantidadDisponible) {
    return true;
    } else {
    return false;
    }
}

let stockDisponible = 10;
let cantidadCompra = 5;

if(hayStock(stockDisponible,cantidadCompra)) {
 console.log("¡Hay suficiente stock! Puedes realizar la compra.")
} else {
    console.log("Lo siento, no hay suficiente stock.");
}

