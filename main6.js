function core() {
    let opcion = Number(prompt("Bienvenidos a la tienda\nPuede comprar\n1.Remera\n2.Pantalon\n3.Buzo\n4.Gorra"))
    while (isNaN(opcion)) {
        alert("No es un numero");
        opcion = Number(prompt("Bienvenidos a la tienda\nPuede comprar\n1.Remera\n2.Pantalon\n3.Buzo\n4.Gorra"))    
    }
    
    switch (opcion) {
        case 1:
            logicaDeCompra(100, "remera", pedirCantidad())
            break;
        case 2:
            logicaDeCompra(200, "pantalon", pedirCantidad())
            break;
        case 3:
            logicaDeCompra(500, "buzo", pedirCantidad())
            break;
        case 4:
            logicaDeCompra(50, "gorra", pedirCantidad())
            break;
        default:
            alert("no tenemos esa opcion");
            break;
    }
    alert(productosComprados + "\nTotal: $" + compraTotal)
}

core();