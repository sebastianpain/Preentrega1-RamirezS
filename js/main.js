
let nombre= 'Hola ';
let nombreIngresado= prompt(' Ingrese su nombre');
alert (nombre +  nombreIngresado + ' Bienvenido al Supermercado virtual');
let listaDeProductos = '';
let productoIngresado= prompt('Ingrese Nombre de Producto');

while (productoIngresado !== 'ESC') {
    listaDeProductos = listaDeProductos + '\n' + productoIngresado;
    productoIngresado = prompt('Ingrese el nombre del producto, para terminar ingrese ESC');

}
alert('los productos que usted va a comprar son:' + listaDeProductos);

total = 0

const productoAsumar = parseInt(prompt('¿cuantos productos tiene?'));
function ingresarCosto(){

    for (let i = 1; i <= productoAsumar; i++) {
        const costoIngresado = prompt('ingrese el costo del producto segun el orden');
        const numero = parseInt(costoIngresado);
        if(numero){
            total = total + numero;

        }
    }
}
ingresarCosto();
alert('la suma de total de los costos es de: ' + total);