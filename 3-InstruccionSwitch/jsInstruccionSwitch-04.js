/*
Autor: Tibaldi Cristian
Ejercicio: Switch ejercicio 4
*/

function mostrar()
{
	var mes;
	mes=document.getElementById('txtIdMes').value;
	switch(mes)
	{
		case "Febrero":
			{
				alert("Tiene 28 días");
				break;
			}
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			{
				alert("Tiene 30 días");
				break;
			}
		case "Enero":
		case "Marzo":
		case "Mayo":
		case "Julio":
		case "Agosto":
		case "Octubre":
		case "Diciembre":
			{
				alert("Tiene 31 días");
				break;
			}
	}
}