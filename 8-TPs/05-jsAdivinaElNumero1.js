/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/


var intentos;
var aleatorio;
var numUsuario;




function comenzar()
{
	aleatorio=Math.round(Math.random()*(100-1)+1);
  intentos=1;
}

function verificar()
{
  
  numUsuario=document.getElementById('txtIdNumero').value;
	numUsuario=parseInt(numUsuario);
  
  alert(aleatorio)

  switch (aleatorio)
  {
    case numUsuario:
      {
        mensaje="Usted es un ganador!!! y en solo "+intentos+" intentos";
        break;
      }
    default:
      {
        if (numUsuario<aleatorio)
        {
          mensaje="Falta… para llegar al número secreto";
          intentos=intentos+1;
        }
        else
        {
          mensaje="Se pasó…” del número secreto";
          intentos=intentos+1;
        }
      }
  }
  document.getElementById('txtIdIntentos').value=mensaje;
}