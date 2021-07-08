/*
Autor: Tibaldi Cristian
Ejericio: 3 Parcial 2019
Comision: J

Enunciado:
Bienvenidos.
Pedir por prompt el precio y el porcentaje de descuento, mostrar el precio final con descuento por id.*/

function mostrar()
{
    var precio;
    var porcentajeDescuento;
    var descuento;
    var precioFinal;

    precio=prompt("Ingrese el precio: ");
    precio=parseInt(precio);

    porcentajeDescuento=prompt("Ingrese el porcentaje en números que desea: ");
    porcentajeDescuento=parseInt(porcentajeDescuento);

    descuento=(precio*porcentajeDescuento)/100;

    precioFinal=precio-descuento;

    precioFinal=("El precio final es: "+ precioFinal);

    document.getElementById('elPrecioFinal').value=precioFinal;

}
