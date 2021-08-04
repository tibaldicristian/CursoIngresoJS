/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/

var eleccionMaquina;
var aleatorio;

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
        mensaje="Salio piedra. Empataste"; 
    }
    else
    {
        if (eleccionMaquina==2)
        {
            mensaje="Salio papel. Perdiste"; 
        }
        else
        {
            mensaje="Salio tijera. Ganaste";
        }
        
    }
    alert(mensaje)
}

function papel()
{
    aleatorio=Math.random()*3 + 1;
    aleatorio=parseInt(aleatorio);
    eleccionMaquina=aleatorio;

    if (eleccionMaquina==1)
    {
        mensaje="Salio piedra. Ganaste";  
    }
    else
    {
        if (eleccionMaquina==2)
        {
            mensaje="Salio papel. Empataste"; 
        }
        else
        {
            mensaje="Salio tijera. Perdiste";
        }
        
    }
    alert(mensaje)
}

function tijera()
{
    aleatorio=Math.random()*3 + 1;
    aleatorio=parseInt(aleatorio);
	eleccionMaquina=aleatorio;
    
    if (eleccionMaquina==1)
    {
        mensaje="Salio piedra. Perdiste"; 
    }
    else
    {
        if (eleccionMaquina==2)
        {
            mensaje="Salio papel. Ganaste"; 
        }
        else
        {
            mensaje="Salio tijera. Empataste";
        }
        
    }
    alert(mensaje)
}
