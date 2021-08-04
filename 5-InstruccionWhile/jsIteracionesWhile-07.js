/*
Autor:Cristian Tibaldi
Ejercicio: while 7

Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var acumulador;
	var respuesta;
	var mensaje;
	var contador;
	
	contador=0;
	acumulador=0;
	respuesta="si";

	while(respuesta=="si")
	{
		numUsuario=prompt("Ingrese el numero");
		numUsuario=parseInt(numUsuario);
		acumulador=acumulador+numUsuario;
		
		mensaje="¿Desea continuar? Ingrese 'si' para continuar, 'no' para abortar.";
		
		respuesta=prompt(mensaje);
		contador++;
	}
	document.getElementById('txtIdSuma').value=acumulador;
	division=acumulador/contador;
	document.getElementById('txtIdPromedio').value=division;
}