var eleccionMaquina;
var contadorDeEmpates=0;
var contadorDeGanadas=0;
var contadorDePerdidas=0;

function comenzar()
{
	aleatorio=Math.random()*3 + 1;
    aleatorio=parseInt(aleatorio);
}

function piedra()
{
	aleatorio=Math.random()*3 + 1;
    aleatorio=parseInt(aleatorio);

	eleccionMaquina=aleatorio;
    if (eleccionMaquina==1)
    { 
		contadorDeEmpates++;
    }
    else
    {
        if (eleccionMaquina==2)
        { 
			contadorDePerdidas++;
        }
        else
        {
			contadorDeGanadas++;
        }
        
    }
	document.getElementById('txtIdGanadas').value=contadorDeGanadas;
	document.getElementById('txtIdPerdidas').value=contadorDePerdidas;
	document.getElementById('txtIdEmpatadas').value=contadorDeEmpates;
}

function papel()
{
	aleatorio=Math.random()*3 + 1;
    aleatorio=parseInt(aleatorio);
    eleccionMaquina=aleatorio;

    if (eleccionMaquina==1)
    {
        contadorDeGanadas++; 
    }
    else
    {
        if (eleccionMaquina==2)
        {
            contadorDeEmpates++; 
        }
        else
        {
            contadorDePerdidas++;
        }
        
    }
	document.getElementById('txtIdGanadas').value=contadorDeGanadas;
	document.getElementById('txtIdPerdidas').value=contadorDePerdidas;
	document.getElementById('txtIdEmpatadas').value=contadorDeEmpates;
}

function tijera()
{
	aleatorio=Math.random()*3 + 1;
	aleatorio=parseInt(aleatorio);
	eleccionMaquina=aleatorio;
	
	if (eleccionMaquina==1)
	{
		contadorDePerdidas++;
	}
	else
	{
		if (eleccionMaquina==2)
		{
			contadorDeGanadas++; 
		}
		else
		{
			contadorDeEmpates++; 
		}
		
	}
	document.getElementById('txtIdGanadas').value=contadorDeGanadas;
	document.getElementById('txtIdPerdidas').value=contadorDePerdidas;
	document.getElementById('txtIdEmpatadas').value=contadorDeEmpates;
}
