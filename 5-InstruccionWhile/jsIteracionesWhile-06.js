/*Autor:Cristian Tibaldi
Ejercicio: while 6

Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio.
*/


function mostrar()
{
	var contador;
	var acumulador;
	var numUsuario;
	var division;
	
	contador=0;
	acumulador=0;
	
	while (contador<5)
	{
		numUsuario=prompt("Ingrese el numero");
		numUsuario=parseInt(numUsuario);
		acumulador=acumulador+numUsuario;
		contador++;
	}
	
	document.getElementById('txtIdSuma').value=acumulador;
	
	division=acumulador/5;
	document.getElementById('txtIdPromedio').value=division;
}