class Producto {
    constructor(nombre, precio, impuesto, descuento) {
        this.nombre = nombre;
        this.precio = precio;
        this.impuesto = impuesto;
        this.descuento = descuento;
    }
}
// Array para almacenar los productos ingresados
let productos = [];
// Función para capturar entradas y crear objetos Producto
function ingresarProductos() {
    let continuar = true;

    while (continuar) {
        let nombre = prompt("Ingresa el nombre del producto:");
        if (!nombre) {
            alert("Por favor, ingresa un nombre válido.");
            continue;
        }

        let precio = parseFloat(prompt("Ingresa el precio del producto:"));
        if (isNaN(precio) || precio <= 0) {
            alert("Por favor, ingresa un precio válido.");
            continue;
        }

        let impuesto = parseFloat(prompt("Ingresa el porcentaje de impuestos:"));
        if (isNaN(impuesto) || impuesto < 0) {
            alert("Por favor, ingresa un porcentaje de impuestos válido.");
            continue;
        }

        let descuento = parseFloat(prompt("Ingresa el porcentaje de descuento:"));
        if (isNaN(descuento) || descuento < 0) {
            alert("Por favor, ingresa un porcentaje de descuento válido.");
            continue;
        }
        // Crear un nuevo objeto Producto y agregarlo al array
        productos.push(new Producto(nombre, precio, impuesto, descuento));

        // Preguntar si se desea continuar ingresando productos
        continuar = confirm("¿Deseas ingresar otro producto?");
    }
}
// Función para calcular el costo final con impuestos y descuentos
function calcularCostoFinal(precio, impuesto, descuento) {
    let precioConImpuesto = precio + (precio * (impuesto / 100));
    let precioFinal = precioConImpuesto - (precioConImpuesto * (descuento / 100));
    return precioFinal.toFixed(2);
}
// Función para ordenar productos por precio descendente
function ordenarPorPrecioDesc() {
    productos.sort((a, b) => b.precio - a.precio);
}
// Función para ordenar productos por nombre descendente
function ordenarPorNombreDesc() {
    productos.sort((a, b) => b.nombre.localeCompare(a.nombre));
}
// Función para mostrar los productos ordenados
function mostrarProductosOrdenados() {
    let criterio = prompt("¿Cómo deseas ordenar los productos? Ingresa 'precio' o 'nombre':").toLowerCase();
    if (criterio === 'precio') {
        ordenarPorPrecioDesc();
    } else if (criterio === 'nombre') {
        ordenarPorNombreDesc();
    } else {
        alert("Criterio inválido. Mostrando productos sin orden específico.");
    }

    let resumen = "Productos ordenados:\n";
    for (let producto of productos) {
        resumen += `\nNombre: ${producto.nombre}\nPrecio: $${producto.precio}\nImpuesto: ${producto.impuesto}%\nDescuento: ${producto.descuento}%\n`;
    }

    alert(resumen);
    console.log(resumen);
}
// Función principal del simulador
function simuladorCostoFinal() {
    ingresarProductos();

    if (productos.length === 0) {
        alert("No se ingresaron productos.");
        return;
    }

    let costoTotal = 0;
    let resumen = "Resumen de productos ingresados:\n";

    for (let producto of productos) {
        let costoFinal = calcularCostoFinal(producto.precio, producto.impuesto, producto.descuento);
        costoTotal += parseFloat(costoFinal);
        resumen += `\nProducto: ${producto.nombre}\nPrecio Inicial: $${producto.precio}\nImpuesto: ${producto.impuesto}%\nDescuento: ${producto.descuento}%\nPrecio Final: $${costoFinal}\n`;
    }

    resumen += `\nCosto Total de todos los productos: $${costoTotal.toFixed(2)}`;
    alert(resumen);
    console.log(resumen);

    mostrarProductosOrdenados();

    let formaPago = prompt("Ingresa la forma de pago (PayPal o Tarjeta):").toLowerCase();
    if (formaPago === 'paypal') {
        let email = prompt("Ingresa tu email de PayPal:");
        alert(`Forma de pago seleccionada: PayPal\nEmail: ${email}`);
        console.log(`Forma de pago seleccionada: PayPal\nEmail: ${email}`);
    } else if (formaPago === 'tarjeta') {
        let numeroTarjeta = prompt("Ingresa tu número de tarjeta:");
        let nombreTitular = prompt("Ingresa el nombre del titular de la tarjeta:");
        let fechaExpiracion = prompt("Ingresa la fecha de expiración de la tarjeta (MM/AA):");
        let codigoSeguridad = prompt("Ingresa el código de seguridad de la tarjeta:");
        alert(`Forma de pago seleccionada: Tarjeta\nNúmero de Tarjeta: ${numeroTarjeta}\nTitular: ${nombreTitular}\nFecha de Expiración: ${fechaExpiracion}\nCódigo de Seguridad: ${codigoSeguridad}`);
        console.log(`Forma de pago seleccionada: Tarjeta\nNúmero de Tarjeta: ${numeroTarjeta}\nTitular: ${nombreTitular}\nFecha de Expiración: ${fechaExpiracion}\nCódigo de Seguridad: ${codigoSeguridad}`);
    } else {
        alert("Forma de pago inválida.");
        console.log("Forma de pago inválida.");
    }
}
// Función para ejecutar todo el proceso del simulador
function ejecutarSimulador() {
    simuladorCostoFinal();
}
// Llamar a la función principal para iniciar el simulador
ejecutarSimulador();