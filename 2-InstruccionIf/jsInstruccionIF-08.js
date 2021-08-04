/*Autor: Tibaldi Cristian
Ejericio: 8 IF
Comision: J

Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", NO HACER NADA,
pero si no es asi, y es soltero y no es menor, mostrar el siguiente mensaje: 'Es soltero y no es menor.

DEJAR UN IF SIN NADA ADENTRO NO ES UNA BUENA PRACTICA
'*/

function mostrar()
{
	var estadoCivil;
	var edad;

	edad=document.getElementById('txtIdEdad').value;
	edad=parseInt(edad);
	
	estadoCivil=document.getElementById('estadoCivil').value;

	if (edad>17)
	{
		if (estadoCivil=="Soltero")
		{
			alert("Es soltero y no es menor");
		}
	} 
}
