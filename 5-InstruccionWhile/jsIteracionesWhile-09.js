/*Autor:Cristian Tibaldi
Ejercicio: while 9


Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/

function mostrar()
{
	var numUsuario;
	var auxiliar;
	var numeroMaximo;
	var numeroMinimo;
	var mensaje;

	mensaje="si";
	auxiliar=0;

	while(mensaje=="si")
	{
		numUsuario=prompt("Ingrese el número: ");
		numUsuario=parseInt(numUsuario);
		
		if (auxiliar==0)
		{
			numeroMaximo=numUsuario;
			numeroMinimo=numUsuario;
			auxiliar=1;
		}
		else
		{
			if (numUsuario>numeroMaximo)
			{
				numeroMaximo=numUsuario;
			}
			else
			{
				if(numUsuario<numeroMinimo)
				{
					numeroMinimo=numUsuario;
				}
			}
		}
		mensaje=prompt("Desea continuar? escriba 'si' o 'no' ");
	}
	document.getElementById('txtIdMaximo').value=numeroMaximo;
	document.getElementById('txtIdMinimo').value=numeroMinimo;
}