/*Al ingresar una edad solo debemos informar si la persona NO es adolescente. 13 y 17*/

function mostrar()
{
	var edad;
	edad=document.getElementById('txtIdEdad').value;
	if (edad>=18)
	{
		alert("La persona con edad de " +edad+ " años, No es adolesente");
	}

}//FIN DE LA FUNCIÓN