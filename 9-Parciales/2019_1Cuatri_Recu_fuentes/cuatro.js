/*
Autor: Tibaldi Cristian
Ejericio: 4 recuperatorio 2019 
Comision: J


Enunciado:
Bienvenidos (IF).
Pedir dos números y mostrar el resultado:
Si son iguales los muestro el cuadrado del numero.
Si el primero divisible por el segundo, los resto,
de lo contrario muestro solo el resto.
si el resto es mayor a 3(tres ) informarlo por alert.*/

function mostrar()
{
    var num1;
    var num2;
    var total;
    var resto;

    num1=prompt("Ingrese el primer número: ");
    num1=parseInt(num1);
    num2=prompt("Ingrese el segundo número: ");
    num2=parseInt(num2);

    resto=num1%num2;

    if (num1==num2)
    {
        total=num1**2;
        alert("El resultado del cuadrado es: "+total);
    }
    else if (resto==0)
    {
        total=num1-num2;
        alert("El resultado de la resta es: "+total);
    }    
    else
    {
        if (resto>1 && resto<3) 
        {
            alert("El resultado del resto es: "+resto);
        }
        else
        {
            alert("El resultado del resto es mayor a 3. Resto de la cuenta: "+resto);
        }
    }
}
