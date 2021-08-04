/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

/*

var aleatorio;
var numUsuario;
var mensaje;
var intentos;

intentos=1;


function comenzar()
{
	aleatorio=Math.round(Math.random()*(100-1)+1);
	alert(aleatorio);
}

function verificar()
{
	numUsuario=document.getElementById('txtIdNumero').value;
	numUsuario=parseInt(numUsuario);
	
	alert(aleatorio);
	
	if (numUsuario==aleatorio)
	{
		switch(intentos)
		{
			case 1:
			{
				mensaje="Usted es un Psíquico";
				break;
			}
			case 2:
				{
					mensaje="Excelente percepción";
					break;
				}
			case 3:
				{
					mensaje="Esto es suerte";
					break;
				}
			case 4:
				{
					mensaje="Excelente técnica";
					break;
				}
			case 5:
				{
					mensaje="Usted está en la media";
					break;
				}
			case 6:
			case 7:
			case 8:
			case 9:
			case 10:
				{
					mensaje="falta técnica";
					break;
				}
			default:
				{
					mensaje="afortunado en el amor!!";
					break;
				}
		}
	} 
	else
	{
		intentos=intentos+1;
		mensaje="Aun no adivino";
	}
	document.getElementById("txtIdIntentos").value=mensaje;
}

*/



var aleatorio;
var intentos;

intentos=1;


function comenzar()
{
	aleatorio=Math.round(Math.random()*(100-1)+1);
}

function verificar()
{
	var numUsuario;
	var mensaje;
	
	numUsuario=document.getElementById('txtIdNumero').value;
	numUsuario=parseInt(numUsuario);
	
	switch(aleatorio)
	{
		case numUsuario:
			{
				if (intentos<2)
				{
					mensaje="Usted es un Psíquico";
				}
				else
				{
					if (intentos<3)
					{
						mensaje="Excelente percepción";
					}
					else
					{
						if (intentos<4)
						{
							mensaje="Esto es suerte";
						}
						else
						{
							if (intentos<5)
							{
								mensaje="Excelente técnica";
							}
							else
							{
								if (intentos<6)
								{
									mensaje="Usted está en la media";
								}
								else
								{
									if (intentos<11)
									{
										mensaje="falta técnica";
									}
									else
									{
										mensaje="afortunado en el amor!!";
									}
								}
							}
						}
					}
				}
			}
		break;
		default:
			{
				mensaje="No adiviniaste";
				intentos=intentos+1;
				break;
			}
	}
	document.getElementById("txtIdIntentos").value=mensaje;
}
