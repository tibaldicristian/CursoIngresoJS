/*Autor: Tibaldi Cristian
Ejericio: 1 IF
Comision: J

Al ingresar una edad que sea igual a 15, mostrar el mensaje "niña bonita".
*/

function mostrar()
{
	var edad;
	edad=document.getElementById('txtIdEdad').value;
	edad=parseInt(edad);

	if (edad==15)
	{
		alert(edad +" Como la niña bonita :) ")
	}
}//FIN DE LA FUNCIÓN