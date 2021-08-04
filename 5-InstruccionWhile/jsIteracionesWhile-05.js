/*
Autor:Cristian Tibaldi
Ejercicio: while 5

Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	var sexoIngresado;

	sexoIngresado=prompt("ingrese f ó m ");

	while(sexoIngresado !="f" && sexoIngresado !="m")
	{
		alert("error");
		sexoIngresado = prompt("ingrese nuevamente su sexo: f ó m .");
	}
	alert("sexo correcto");

	document.getElementById('txtIdSexo').value=sexoIngresado;
}


//si la condicion se cumple ingreso al bucle