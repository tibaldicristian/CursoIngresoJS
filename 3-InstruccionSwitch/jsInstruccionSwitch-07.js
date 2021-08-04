/*
Autor: Tibaldi Cristian
Ejercicio: Switch ejercicio 7
*/

function mostrar()
{
	var destino;
	destino=document.getElementById('txtIdDestino').value;
	switch (destino)
	{
		case "Bariloche":
			{
				alert("Sur-Oeste");
				break;
			}
				
		case "Ushuaia":
			{
				alert("Sur");
				break;
			}
		case "Cataratas":
			{
				alert("Norte");
				break;
			}
		case "Mar del plata":
			{
				alert("Este");
				break;
			}
	}
}