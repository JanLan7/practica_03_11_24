function pedirCantidad() {
    let cantidad = Number(prompt(" Cuantas unidades desea comprar?"))
    while (isNaN(cantidad)) {
        alert("Eso no es un numero");
        cantidad = Number(prompt(" Cuantas unidades desea comprar?"))
    }
    return cantidad;
}

console.log(pedirCantidad());

