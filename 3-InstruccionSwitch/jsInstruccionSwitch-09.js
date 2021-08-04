/*
Autor: Tibaldi Cristian
Ejercicio: Switch ejercicio 9
*/

function mostrar()
{
	var estacion;
	var destino;
	var precioBase;
	var precioFinal;
	var porcentaje;

	precioBase=15000;
	estacion=document.getElementById('txtIdEstacion').value;
	destino=document.getElementById('txtIdDestino').value;

	switch (estacion)
	{
		case "Invierno":
			{
				switch (destino)
				{
					case "Bariloche":
						{
							porcentaje=20;
							break;
						}
					case "Cataratas":
					case "Cordoba":
						{
							porcentaje=-10;
							break;
						}
					case "Mar del plata":
						{
							porcentaje=-20;
							break;
						}
				}
			}
		break;	
		case "Verano":
			{
				switch (destino)
				{
					case "Bariloche":
						{
							porcentaje=-20;
							break;
						}
					case "Cataratas":
					case "Cordoba":
						{
							porcentaje=10;
							break;
						}
					case "Mar del plata":
						{
							porcentaje=20;
							break;
						}
				}
			}
		break;
		case "Otoño":
		case "Primavera":
			{
				switch (destino)
				{
					case "Mar del plata":
					case "Cataratas":
					case "Bariloche":
						{
							porcentaje=10;
							break;
						}
					case "Cordoba":
						{
							porcentaje=0;
							break;
						}
				}
			}
		break;
	}
	descuento=precioBase*(porcentaje)/100;
	precioFinal=precioBase+(descuento);
	alert("Precio final: "+precioFinal+"$");
}

