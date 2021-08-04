
function mostrar()
{
    var ancho;
    var largo;
    var perimetro;

    ancho=prompt("ingrese el ancho del rectangulo: ");
    ancho=parseInt(ancho);

    largo=prompt("ingrese el largo del rectangulo: ");
    largo=parseInt(largo);

    perimetro=(ancho*2)+(largo*2);

    alert("El perimtero es: "+perimetro);
}