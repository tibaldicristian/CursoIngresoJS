function mostrar()
{
    var color;
    var valor;
    var bandera;
    var contadorVehiculos;
    var vechiculosInferior;
    var promedio;
    var acumulador;
    var caro;
    var caroColor;

    valor=0;
    mensaje="si";
    badera=0;
    contadorRojo=0;
    rojoMayor=0;
    vechiculosInferior=0;
    contadorVehiculos=0;
    acumulador=0;
    caro=0;
    barato=0;
    
    while (mensaje=="si")
    {
        valor=prompt("Ingrese el valor del vehiculo");
        valor=parseInt(valor);
        
        while (valor< 0 || valor >10000)
        {
            valor=prompt("Ingrese un valor VALIDO del vehiculo");
            valor=parseInt(valor);
        }

        acumulador=acumulador+valor;
        contadorVehiculos++;

        color=prompt("Ingrese el color del vehiculo");
        while (color!="rojo" && color!="verde" && color!="amarillo")
        {
            color=prompt("Ingrese un color VALIDO para el vehiculo");
        }
        
        if (bandera==0)
        {
            caro=valor;
            caroColor=color;
            bandera=1;
        }
        else
        {
            if (caro<valor)
            {
                caro=valor;
                caroColor=color;
            }
        }

        if (color=="rojo")
        {
            contadorRojo++;
            if (valor>5000)
            {
                rojoMayor++;
            }
        }
        if (valor<5000)
        {
            vechiculosInferior++
        }
        mensaje=prompt("Ingrese si para seguir ingresando");
    }
    promedio=acumulador/contadorVehiculos;
    document.write("Cantidad de rojos "+contadorRojo+"<br>");
    document.write("Cantidad rojos mayor a 5000 "+rojoMayor+"<br>");
    document.write("Cantidad de vehiculos inferior a 5000 "+vechiculosInferior+"<br>");
    document.write("Promedio del precio de todos los vechiculos "+promedio+"<br>");
    document.write("El más caro "+caro+ " y su color es "+caroColor+"<br>");
}
