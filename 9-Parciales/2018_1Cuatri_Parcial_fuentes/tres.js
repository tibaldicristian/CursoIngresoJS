
function mostrar()
{
    var precio;
    var descuento;
    var precioFinal;
    var total;

    precio=prompt("Ingrese el precio: ");
    precio=parseInt(precio);

    descuento=prompt("Ingrese el descuento: ");
    descuento=parseInt(descuento);

    descuento=(precio*descuento)/100;

    total=precio-descuento;

    precioFinal=("El precio final con descuento es: "+total+"$");

    document.getElementById('elPrecioFinal').value=precioFinal;

}
