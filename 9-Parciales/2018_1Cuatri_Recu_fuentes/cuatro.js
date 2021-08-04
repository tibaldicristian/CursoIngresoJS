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
    else if (num1>num2)
    {
        total=num1/num2;
        alert("El resultado es: "+ total);
    }
    else
    {
        total=num1+num2;
        if (total<50)
        {
            alert("La suma es "+total+" y es menor a 50");
        }
        else
        {
            alert("El resultado es: "+ total);
        }

        
    }
}