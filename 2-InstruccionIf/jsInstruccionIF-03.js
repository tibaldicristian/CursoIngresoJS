//Al ingresar una edad debemos informar si la persona es mayor de edad, sino informar que es un menor de edad.

function mostrar()
{
	var edad;
	edad=parseInt(document.getElementById('txtIdEdad').value);
	if (edad<=0)
	{
		alert("La edad no puede ser igual o menor a cero")
	}
	else if (edad>=18)
	{
		alert(edad+" Sos mayor de edad");
	}
	else
	{
		alert(edad+" Sos menor de edad");
	}
}//FIN DE LA FUNCIÓN