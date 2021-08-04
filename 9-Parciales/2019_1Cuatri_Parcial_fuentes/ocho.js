/*
Enunciado:
Bienvenidos.
Realizar el algoritmo que permita iterar el ingreso de dos datos, una letra y un número entre -100 y 100 (validar) hasta que el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantidad de números pares.
b) La cantidad de números impares.
c) La cantidad de ceros.
d) El promedio de todos los números positivos ingresados.
e) La suma de todos los números negativos.
f) El número y la letra del máximo y el mínimo.

Testeo con los siguientes datos
( d , -150(mal) , -50(bien))
( z , 0)
( g , 20)
( a , 150(mal) , 0(bien))
( b , 3)
( k , 7)
*/


function mostrar()
{
    var continuar;
    var numero;
    var contadorPar;
    var contadorImpar;
    var contadorNegativos;
    var contadorCeros;
    var promedioPositivos;
    var sumaNegativos;
    var numeroMaximo;
    var numeroMinimo;
    var letra;
    var letraMaxima;
    var letraMinima;
    var modulo;
    var iteracion;
    var bandera;
    var acumuladorPositivos;

    continuar="si"
    bandera=1;
    numeroMaximo=0;
    numeroMinimo=0;
    iteracion=0;
    par=0;
    acumuladorPositivos=0;
    sumaNegativos=0;
    sumaPositivos=0;
    contadorCeros=0;
    contadorImpar=0;
    contadorPar=0;
    promedioPositivos=0;
    contadorNegativos=0;


    while (continuar=="si")
    {
        numero=prompt("Ingrese el número: ");
        numero=parseInt(numero);

        letra=prompt("ingrese la letra");

        while(numero<-101 && numero>101)
        {
            numero=prompt("Error, ingrese un número valido: ");
            numero=parseInt(numero);
        }
        
        if(bandera==1)
        {
            numeroMaximo=numero;
            numMinimo=numero;
            letraMaxima=letra;
            letraMinima=letra;
            bandera=0;
        }
        else
        {
            if (numeroMaximo<numero)
            {
                numeroMaximo=numero;
                letraMaxima=letra;
            }
            else
            {
                if (numeroMinimo>numero)
                {
                    numeroMinimo=numero;
                    letraMinima=letra;
                }
            }
        }

        modulo=numero % 2;
        if (modulo==0)
        {
            contadorPar++;
        }
        else
        {
            contadorImpar++;
        }

        if (numero==0)
        {
            contadorCeros++;
        }
        else
        {
            if (numero>0)
            {
                acumuladorPositivos=acumuladorPositivos+numero;
            }
            else
            {
                sumaNegativos=sumaNegativos+numero;
                contadorNegativos++
            }
        }
        continuar=prompt("¿Desea continuar? Ingrese si");
        
        iteracion++
    }
    promedioPositivos=acumuladorPositivos/iteracion;

    document.write("Cantidad de números pares: " + contadorPar + "<br>");
    document.write("Cantidad de numeros impares: "+contadorImpar+ "<br>");
    document.write("Cantidad de ceros: "+contadorCeros+ "<br>");
    document.write("El promedio de los positivos es: "+promedioPositivos+ "<br>");
    document.write("La suma de los negativos es: "+sumaNegativos+"<br>");
    document.write("El numero maximo y la letra es: "+numeroMaximo+letraMaxima+"<br>");
    document.write("El numero minimo y la letra es: "+numeroMinimo+letraMinima+ "<br>");
}
