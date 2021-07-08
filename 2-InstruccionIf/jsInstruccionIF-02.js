//Al ingresar una edad debemos informar solo si la persona es mayor de edad

function mostrar()
{
	var edad;
	
	edad=parseInt(document.getElementById('txtIdEdad').value);
	
	if (edad>=18)
	{
		alert(edad+" Sos mayor de edad");
	}
}//FIN DE LA FUNCIÓN