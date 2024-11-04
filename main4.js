let compraTotal = 0;
let productosComprados = "los productos que compró son ";

function confirmarCompra(producto, precio) {
    return confirm("Estas seguro de comprar "+ producto + " a $"+ precio + "?");
    
}

function logicaDeCompra(precio,producto, cantidad) {
    if (confirmarCompra(producto, precio * cantidad)){
        compraTotal += precio * cantidad;
        productosComprados += producto + " x" + cantidad + " ";
    }
    
}