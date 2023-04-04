class Zapatos {
    constructor(id, nombre, categoria, precio, stock) {
        this.id = id;
        this.nombre = nombre.toUpperCase();
        this.categoria = categoria.toUpperCase();
        this.precio = parseFloat(precio);
        this.stock = parseInt(stock);
    }

}

let listado = [];
let entrada = -1;
let carrito = [];
let total = 0;

listado.push(new Zapatos(1, 'Sandalia Gruera Clea', 'Sandalia', 40000, 20));
listado.push(new Zapatos(2, 'Zapatos Celine', 'Zapatos', 50000, 35));
listado.push(new Zapatos(3, 'Sneaker de tenines Celine de malla', 'Sneaker', 35000, 10));
listado.push(new Zapatos(4, 'Bota Celine estilo motero', 'motero', 65000, 25));

while (entrada != 0) {
    entrada = parseInt(prompt('Seleccioné una opción: \n0.Salir\n1.Ver Productos\n2.Buscar producto y agregarlo al carrito\n3.Ver estado de la compra\n4.Finalizar compra', 0));
    if (entrada == 1) {
        let lista = []
        listado.forEach((zapato) => {
            lista.push(zapato.id + ' ' + zapato.nombre + ' $' + zapato.precio)
        });
        alert(lista.join("\n"))
    } else if (entrada == 2) {
        zapatosEncontrados = [];
        let lista = [];
        let idSeleccionado = 0;
        let cantidad = 0;
        buscar = prompt('Ingrese nombre de producto');
        zapatosEncontrados = listado.filter((zapato) => zapato.nombre.toUpperCase().includes(buscar.toUpperCase()))

        zapatosEncontrados.forEach((zapato) => {
            lista.push(zapato.id + ' - ' + zapato.nombre + ' $' + zapato.precio)
        });
        idSeleccionado = parseInt(prompt('Seleccione el producto que va a agregar al carrito: \n' + lista.join("\n")));
        cantidad = parseInt(prompt('Cantidad de ' + listado.filter((zapato) => zapato.id === idSeleccionado)[0].nombre));
        carrito.push(
            'Cantidad: ' + cantidad +
            ', Producto: ' + listado.filter((zapato) => zapato.id === idSeleccionado)[0].nombre +
            ', total: $' + listado.filter((zapato) => zapato.id === idSeleccionado)[0].precio * cantidad);
        total += listado.filter((zapato) => zapato.id === idSeleccionado)[0].precio * cantidad;
    } else if (entrada == 3) {
        if (carrito.length == 0) {
            alert('No hay productos en el carrito');
        } else {
            alert(carrito.join('\n') + '\nSuma Total: $' + total);
        }
    } else if (entrada == 4) {
        console.log(carrito.length);
        if (carrito.length == 0) {
            alert('No hay productos en el carrito');
        } else {
            alert(carrito.join('\n') + '\nSuma Total: $' + total);
            carrito = [];
            total = 0;
        }

    } else if (entrada == null) {
        entrada = 0;
    }
}