/*Autor: Tibaldi Cristian
Ejericio: 5 IF
Comision: J

Al ingresar una edad solo debemos informar si la persona NO es adolescente.
*/

function mostrar()
{
	var edad;
	edad=document.getElementById('txtIdEdad').value;
	
	if (edad>17)
	{
		alert("La persona con edad de " +edad+ " años, No es adolesente");
	}

}//FIN DE LA FUNCIÓN