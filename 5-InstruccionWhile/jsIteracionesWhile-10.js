/*Autor:Cristian Tibaldi
Ejercicio: while 10

Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */


function mostrar()
{
	var numUsuario;
	var operacion;
	var respuesta;
	var contadorNegativos;
	var contadorPositivos;
	var sumaNegativos;
	var suma;
	var contadorCeros;
	var pares;
	var promedioPositivos;
	var promedioNegativos;
	var resto;
	var diferencia;
	var banderaPositiva;
	var banderaNegativa;
	
	
	suma=0;
	pares=0;
	sumaNegativos=0;
	contadorNegativos=0;
	contadorPositivos=0;
	contadorCeros=0;
	diferencia=0;
	promedioPositivos=0;
	promedioNegativos=0;
	banderaNegativa=false;
	banderaPositiva=false;

	respuesta="si";

	while(respuesta=="si")
	{
		numUsuario=prompt("Ingrese el número?");
		numUsuario=parseInt(numUsuario);

		if (numUsuario<0)
		{
			banderaNegativa=true;
			sumaNegativos=sumaNegativos+numUsuario;
			contadorNegativos++;
		}
		else
		{
			if(numUsuario>0)
			{
				banderaPositiva=true;
				suma=suma+numUsuario;
				contadorPositivos++;
				resto=numUsuario % 2;
				
				if (resto==0)
				{
					pares++;
				}
			}
			if (numUsuario==0)
			{
				contadorCeros++;
			}
		}
		
		respuesta=prompt("Desea continuar? Escriba 'si' para continuar");
	}

	if (banderaPositiva==true)
	{
		promedioPositivos=suma/contadorPositivos;
	}
	if (banderaNegativa==true)
	{
		promedioNegativos=sumaNegativos/contadorNegativos;
	}

	diferencia=sumaNegativos+suma;

	mensaje="Ingrese la operación que desea: ";
	mensaje=mensaje+"1-Suma de los negativos ";
	mensaje=mensaje+"2-Suma de los positivos.";
	mensaje=mensaje+"3-Cantidad de positivos.";
	mensaje=mensaje+"4-Cantidad de negativos.";
	mensaje=mensaje+"5-Cantidad de ceros.";
	mensaje=mensaje+"6-Cantidad de números pares.";
	mensaje=mensaje+"7-Promedio de positivos.";
	mensaje=mensaje+"8-Promedios de negativos.";
	mensaje=mensaje+"9-Diferencia entre positivos y negativos, (positvos-negativos)."
	
	operacion=prompt(mensaje);
	operacion=parseInt(operacion);
	
	switch(operacion)
	{
		case 1:
			{
				alert(sumaNegativos);
				break;
			}
		case 2:
			{
				alert(suma);
				break;
			}
		case 3:
			{
				alert(contadorPositivos);
				break;
			}
		case 4:
			{
				alert(contadorNegativos);
				break;
			}
		case 5:
			{
				alert(contadorCeros);
				break;
			}
		case 6:
			{
				alert(pares);
				break;
			}
		case 7:
			{
				alert(promedioPositivos);
				break;
			}
		case 8:
			{
				alert(promedioNegativos);
				break;
			}
		case 9:
			{
				alert(diferencia);
				break;
			}
	}
}