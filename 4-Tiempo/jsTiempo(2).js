var miIntervalo ;


function inicio()
{
	alert("function inicio.");
	miIntervalo = setInterval(SegundosEnElAire, 3000);
	
}

function SegundosEnElAire() {

    alert("Bienvenido a la UTN FRA");
    
}

function fin()
{
	alert("Fin del alerta.");
	clearTimeout(miIntervalo);

}