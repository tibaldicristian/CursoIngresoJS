/*Autor: Tibaldi Cristian
Ejericio: 7 IF
Comision: J

Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", mostrar el siguiente mensaje: 'Es muy pequeño para NO ser soltero.'*/

function mostrar()
{
	var edad;
	var estadoCivil;
	
	edad=document.getElementById('txtIdEdad').value;
	edad=parseInt(edad);
	
	estadoCivil=document.getElementById('estadoCivil').value;

	if (edad<18)
	{
		if (estadoCivil!="Soltero")
		{
			alert("Es muy pequeño para NO ser soltero");
		}
	}
}//FIN DE LA FUNCIÓN