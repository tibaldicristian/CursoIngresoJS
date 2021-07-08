/*Autor: Tibaldi Cristian
Ejericio: 2 parcial 2019
Comision: J

Enunciado:
A una pareja se le pide los datos para mostrar un mensaje " ustedes se llaman xxxxx y xxxx pesan xx y xx kilos, que sumados son xx kilos y el promedio de peso xx ".*/

function mostrar()
{
    var nombre1;
    var kilos1;
    var nombre2;
    var kilos2;
    var pesoTotal;
    var pesoPromedio;

    nombre1=prompt("Primer participante: ingrese su nombre: ");
    kilos1=prompt("Ingrese su peso: ");
    kilos1=parseInt(kilos1);

    nombre2=prompt("Segundo participante: ingrese su nombre: ");
    kilos2=prompt("Ingrese su peso: ");
    kilos2=parseInt(kilos2);

    pesoTotal=kilos1+kilos2;
    pesoPromedio=pesoTotal/2;

    alert("Sus nombres son : "+ nombre1+ " y "+ nombre2+ " y pesan "+ kilos1 +" y "+ kilos2+" que sumados son: " + pesoTotal+ " y el promedio de peso es "+ pesoPromedio);

}
