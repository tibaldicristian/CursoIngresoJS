/*Autor: Tibaldi Cristian
Ejericio: 4 IF
Comision: J

Al ingresar una edad debemos informar si la persona es adolescente, edad entre 13 y 17 años (inclusive) .
*/

function mostrar()
{	
	var edad;
	edad=document.getElementById('txtIdEdad').value;
	edad=parseInt(edad);
	
	if (edad<18)
	{
		if (edad>12)
		{
			alert("Con " +edad+ " sos adolescente");
		}
	}
}
