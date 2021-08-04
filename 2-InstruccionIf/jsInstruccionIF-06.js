/*Autor: Tibaldi Cristian
Ejericio: 6 IF
Comision: J

Al ingresar una edad debemos informar si la persona es mayor de edad (mas de 18 años) o adolescente (entre 13 y 17 años) o niño (menor a 13 años).
*/

function mostrar()
{
	var edad;
	edad=document.getElementById('txtIdEdad').value;
	edad=parseInt(edad);

	if (edad>18)
	{
		alert("Sos mayor de edad con: "+ edad);
	}
	else 
	{
		if(edad>12)
		{
			alert("Sos adolescente con: "+edad);
		}
		else(edad<=12 && edad>=1)
		{
			alert("Sos un niño o niña con: "+edad);
		}
	}	
}