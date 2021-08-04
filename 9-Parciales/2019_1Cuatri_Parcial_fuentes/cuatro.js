/*
Autor: Tibaldi Cristian
Ejericio: 4 parcial 2019
Comision: J


Enunciado:
Bienvenidos (IF).
Pedir dos números y mostrar el resultado:
Si son iguales los muestro concatenados.
Si el primero es mayor, los resto,
de lo contrario los sumo.
Si la resta es mayor a 10 ,además de mostrar el resultado, muestro el mensaje
"la resta es xxx y superó el 10".*/

function mostrar()
{
    var num1;
    var num2;
    var total;

    num1=prompt("Ingrese el primer número: ");
    num1=parseInt(num1);
    num2=prompt("Ingrese el primer número: ");
    num2=parseInt(num2);
    
    if (num1==num2)
    {
        num1=String(num1);
        num2=String(num2);
        alert("El resultado es: "+ num1+num2);
    }
    else 
    {
        if (num1>num2)
        {
            total=num1-num2;
            mensaje=total;
            
            if (total>10)
            {
                mensaje="La resta es: " + total+" y supero el 10";
            }
        }
        else
        {
            total=num1+num2;
            mensaje=total;
        }
    }
    alert(mensaje);
}


