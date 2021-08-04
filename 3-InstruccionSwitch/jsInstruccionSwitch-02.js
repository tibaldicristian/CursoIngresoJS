/*
Autor: Tibaldi Cristian
Ejercicio: Switch ejercicio 2
*/

function mostrar()
{
	var mes;
	mes=document.getElementById('txtIdMes').value;
	switch(mes)
	{
		
		case "Marzo":
		case "Abril":
		case "Mayo":
		case "Junio":
			{
				alert("Falta para el invierno.");
				break;
			}
		case "Julio":
		case "Agosto":
			{
				alert("Abrigate que hace frio.");
				break;
			}
		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
		case "Enero":
		case "Febrero":
			{
				alert("Ya pasamos el frio, ahora calor!!!");
				break;
			}
	}
}