/*Autor:Cristian Tibaldi
Ejercicio: while 8

Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var sumaPositivos;
	var multiplicacionNegativos;
	var respuesta;
	var mensaje;
	var banderaNegativo;

	banderaNegativo=false;
	
	sumaPositivos=0;
	multiplicacionNegativos=1;
	respuesta="si";

	while(respuesta=="si")
	{
		numUsuario=prompt("Ingrese el numero");
		numUsuario=parseInt(numUsuario);
		
		if (numUsuario>0)
		{
			sumaPositivos=sumaPositivos+numUsuario;
		}
		else
		{
			banderaNegativo=true;
			multiplicacionNegativos=multiplicacionNegativos*numUsuario;
		}
		mensaje="¿Desea continuar? Ingrese 'si' para continuar, 'no' para abortar.";
		
		respuesta=prompt(mensaje);
	}

	if (banderaNegativo==false)
	{
		multiplicacionNegativos=0;
	}

	document.getElementById('txtIdSuma').value=sumaPositivos;
	document.getElementById('txtIdProducto').value=multiplicacionNegativos;
}//FIN DE LA FUNCIÓN

//corregir y volver a entregar