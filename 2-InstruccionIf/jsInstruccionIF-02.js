/*Autor: Tibaldi Cristian
Ejericio: 2 IF
Comision: J

Al ingresar una edad debemos informar solo si la persona es mayor de edad
*/

function mostrar()
{
	var edad;
	
	edad=document.getElementById('txtIdEdad').value;
	edad=parseInt(edad);
	
	if (edad>17)
	{
		alert(edad+" Sos mayor de edad");
	}
}//FIN DE LA FUNCIÓN