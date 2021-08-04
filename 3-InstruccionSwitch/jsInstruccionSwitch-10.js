/*
Autor: Tibaldi Cristian
Ejercicio: Switch ejercicio 10
*/


function mostrar()
{
	var estacion;
	var destino;

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
							alert ("Se viaja");
							break;
						}
					case "Cataratas":
					case "Mar del plata":
					case "Cordoba":
						{
							alert("No se viaja");
							break;
						}
				}
			}
		break;	
		case "Verano":
				{
					switch (destino)
					{
						case "Cataratas":
						case "Mar del plata":
							{
								alert("Se viaja");
								break;
							}
						case "Cordoba":
						case"Bariloche":
							{
								alert("No se viaja");
								break;
							}
					}
				}
		break;
		case "Otoño":
		{
			switch (destino)
			{
				case "Cataratas":
				case "Mar del plata":
				case "Cordoba":
				case"Bariloche":
				{
					alert("Se viaja a todos los destinos");
					break;
				}	
			}
		}
		break;
		case "Primavera":
			{
				switch (destino)
				{
					case "Bariloche":
						{
							alert("Se viaja");
							break;
						}
						case "Cataratas":
						case "Mar del plata":
						case "Cordoba":
						{
							alert("No se viaja");
							break;
						}
				}
			}
	}
}