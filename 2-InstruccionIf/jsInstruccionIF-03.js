/*Autor: Tibaldi Cristian
Ejericio: 3 IF
Comision: J

Al ingresar una edad debemos informar si la persona es mayor de edad, sino informar que es un menor de edad.
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
	else
	{
		alert(edad+" Sos menor de edad");
	}
}//FIN DE LA FUNCIÓN