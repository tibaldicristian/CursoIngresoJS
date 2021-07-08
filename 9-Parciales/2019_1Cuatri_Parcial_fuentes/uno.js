/*
Autor: Tibaldi Cristian
Ejericio: parcial 2019
Comision: J


Enunciado:
Bienvenidos.
Realizar el algoritmo que pida los datos necesarios para un triángulo equilátero por prompt y que muestre el perímetro por alert.*/


function mostrar()
{
    var lado;
    var equilatero;

    lado=prompt("Ingrese el valor de uno de los lados del triangulo equilatero");

    lado=parseInt(lado);

    equilatero=lado+lado+lado;

    alert("El perimetro de su triangulo equilatero es: "+equilatero);
}
