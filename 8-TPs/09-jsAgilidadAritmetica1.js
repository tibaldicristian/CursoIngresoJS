/*Debemos mostrar dos números Random  del 1 al 10 
y una de las cuatro operaciones básicas (suma, resta,
 división o multiplicación) para realizar entre estos
 dos números, estas operaciones también serán Random.
 En el cuadro de texto resultado el jugador debe ingresar
 el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/

var respuesta;
var resultado;

resultado=0;

function comenzar()
{
    var operador;
    var aleatorio1;
    var aleatorio2;
    
    aleatorio1=Math.random()*10 + 1;
    aleatorio1=parseInt(aleatorio1);
	aleatorio2=Math.random()*10 + 1;
    aleatorio2=parseInt(aleatorio2);

    document.getElementById('txtIdPrimerNumero').value=aleatorio1;
    document.getElementById('txtIdSegundoNumero').value=aleatorio2;

    operador=Math.random()*4 + 1;
    operador=parseInt(operador);

    switch(operador)
    {
        case 1:
            {
                
                resultado=aleatorio1+aleatorio2;
                mensaje="Suma";
                operador=mensaje;
                break;
            }
        case 2:
            {
                resultado=aleatorio1-aleatorio2;
                mensaje="Resta";
                operador=mensaje;
                break;
            }
        case 3:
            {
                resultado=aleatorio1*aleatorio2;
                mensaje="Multiplicación";
                operador=mensaje;
                break;
            }
        case 4:
            {
                resultado=aleatorio1/aleatorio2;
                mensaje="División";
                operador=mensaje;
                break;
            }
    }
    document.getElementById('txtIdOperador').value=operador;
}


function Responder()
{
    respuesta=document.getElementById('txtIdRespuesta').value;
    respuesta=parseInt(respuesta);

    alert(resultado); 
	if (respuesta==resultado)
    {
        mensaje="Es correcto";
    }
    else
    {
        mensaje="Es incorrecto";
    }
    alert(mensaje);

    var operador;
    var aleatorio1;
    var aleatorio2;
    
    aleatorio1=Math.random()*10 + 1;
    aleatorio1=parseInt(aleatorio1);
	aleatorio2=Math.random()*10 + 1;
    aleatorio2=parseInt(aleatorio2);

    document.getElementById('txtIdPrimerNumero').value=aleatorio1;
    document.getElementById('txtIdSegundoNumero').value=aleatorio2;

    operador=Math.random()*4 + 1;
    operador=parseInt(operador);

    switch(operador)
    {
        case 1:
            {
                
                resultado=aleatorio1+aleatorio2;
                mensaje="Suma";
                operador=mensaje;
                break;
            }
        case 2:
            {
                resultado=aleatorio1-aleatorio2;
                mensaje="Resta";
                operador=mensaje;
                break;
            }
        case 3:
            {
                resultado=aleatorio1*aleatorio2;
                mensaje="Multiplicación";
                operador=mensaje;
                break;
            }
        case 4:
            {
                resultado=aleatorio1/aleatorio2;
                mensaje="División";
                operador=mensaje;
                break;
            }
    }
    document.getElementById('txtIdOperador').value=operador;
    
}
