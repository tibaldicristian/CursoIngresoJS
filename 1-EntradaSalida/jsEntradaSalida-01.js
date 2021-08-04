/*
Al presionar el  botón, 
se debe mostrar un mensaje como el siguiente "Esto funciona de maravilla"*/
/*function mostrar()
{
	var numUsuario;
	var contador;
	var resto;
	var i;

	i=1;
	contador=0;


	numUsuario=prompt("Ingrese el numero para saber si es primo");
	numUsuario=parseInt(numUsuario);

	while (i<=numUsuario)
	{
		resto=numUsuario%i;
		if(resto==0)
		{
			contador++;
		}
		i++;
	}

	if(contador<3)
	{
		alert("es primo "+contador);
	}
	else
	{
		alert("es compuesto "+contador);
	}

}
*/

function mostrar()
{
	var numUsuario;
	var contador;
	var resto;
	var i;

	i=1;
	contador=0;

	numUsuario=prompt("Ingrese el numero para saber si es primo");
	numUsuario=parseInt(numUsuario);

	for (i=1; i<=numUsuario; i++)
	{
		resto=numUsuario%i;
		if(resto==0)
		{
			document.write(i+ "Es divisor de 100"+"</br>");
		}
	}
	if(contador<3)
	{
		alert(contador+"es primo ");
	}
	else
	{
		alert(contador+"es compuesto ");
	}
}