/*
Autor: Tibaldi Cristian
ejericio: 2 parcial 2020
Enunciado:

Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro
*/

function mostrar()
{
	var producto;
	var precio;
	var cantidad;
  var descuento;
  var total;
  var acumuladorPrecio;
  var bandera=0;
  var bandera1=0;
  var bandera2=0;
  var masCantidad;
  var masProducto;
  var masProducto2;
  var masCaro;
  var acumuladorCantidadTotal;
  var acumuladorPrecioBruto;

  acumuladorCantidadTotal=0;
	contadorCantidad=0;
	acumuladorCantidad=0;
	vueltas="si";
  bandera=0;
  bandera1=0;
  bandera2=0;
  descuento=0;
  acumuladorPrecio=0;
  acumuladorPrecioBruto=0;
	
	
	while(vueltas=="si")
		{
			producto=prompt("Ingrese el producto: arena, cal o cemento");
			while(producto!="arena" && producto!="cal" && producto!="cemento")
			{
				producto=prompt("ERROR Ingrese un producto valido: arena, cal o cemento");
			}

			precio=prompt("Ingrese el precio:");
			precio=parseInt(precio);
			while(precio<0)
			{
				precio=prompt("ERROR el precio no puede ser 0. Vuelva a ingresar: ");
        precio=parseInt(precio);
			}

      
			cantidad=prompt("Ingrese la cantidad: ");
			cantidad=parseInt(cantidad);
			while(cantidad<1)
			{
        cantidad=prompt("ERROR la cantidad no puede ser 0, ingrese nuevavemente: ");
        cantidad=parseInt(cantidad);
			}
      // FIN DE LAS COMRPOBACIONES WHILE


      acumuladorPrecioBruto=precio*cantidad;// Acumula el precio por la cantidad total de bolsas.
      acumuladorPrecio=acumuladorPrecio+acumuladorPrecioBruto; //Acumula el precio bruto de todas las bolsas.


      if(bandera1==0) //D)Ingresa por primera vez el tipo con mas cantidad de bolsas
			{
        masCantidad=cantidad;
				masProducto=producto;
				bandera1=1;
			}
			else
			{
				if(masCantidad<cantidad) //D) Obtencion del tipo con más cantidad de bolsas
				{
					masCantidad=cantidad;
          masProducto=producto;
				}
			}

      if(bandera2==0) //F) Ingresa por primera vez el tipo más caro
			{
        masCaro=precio;
				masProducto2=producto;
				bandera2=1;
			}
			else
			{
				if(masCaro<precio) //F)Compara y obtiene el tipo mas caro
				{
					masCaro=precio;
          masProducto2=producto;
				}
			}

      acumuladorCantidadTotal=acumuladorCantidadTotal+cantidad; //permite sacar importe total

			if (acumuladorCantidadTotal>10)//Descuento por cantidad total de bolsas 
      {
        bandera=1;
        descuento=15;
        if (acumuladorCantidadTotal>30)
        {
          bandera=1;
          descuento=25;
        } 
      }
      vueltas=prompt("Desea continuar? ingrese si para continuar, no para terminar");
		}

  if (bandera==1)//A) El importe total a pagar con descuento
  {
    descuento=acumuladorPrecio*descuento/100;
    total=acumuladorPrecio-descuento;
    alert("El total con descuento es: "+total)+"$";
  }
  else
  {
    total=acumuladorPrecio; // B) importe total a pagar bruto sin descuento
    alert("El total es: "+total+"$");
  }

  alert("El tipo con más cantidad de bolsas es: "+masProducto+" con " + masCantidad+" bolsas");
  alert("El tipo más caro es: "+masProducto2+ " con el precio de "+masCaro);
}