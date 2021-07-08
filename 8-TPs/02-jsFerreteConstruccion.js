/*2.Autor: Tibaldi Cristian
Ejercicio: TP2
Div: J

Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largo;
    var ancho;
    var totalAlambre;
    var perimetro;

    largo=document.getElementById('txtIdLargo').value;
    largo=parseInt(largo);

    ancho=document.getElementById('txtIdAncho').value;
    ancho=parseInt(ancho);

    perimetro=(largo*2)+(ancho*2)
    totalAlambre=perimetro*3

    alert("La cantidad de alambre necesaria es de: "+totalAlambre+" metros de alambre");
}

function Circulo () 
{
    var radio;
    var perimetro;
    var pi;

    pi=3.14;

    radio=document.getElementById('txtIdRadio').value;

    perimetro=2*pi*radio;

    perimetro=parseInt(perimetro);

    totalAlambre=perimetro*3;

    alert("La cantidad de alambre necesaria es de: "+totalAlambre+" metros de alambre");
	
}


/*C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Materiales () 
{
    var cemento;
    var cal;
    var bolsasCal;
    var bolsasCemento;
    var largo;
    var ancho;

    cemento=2;
    cal=3;

    largo=document.getElementById('txtIdLargo').value;
    largo=parseInt(largo);

    ancho=document.getElementById('txtIdAncho').value;
    ancho=parseInt(ancho);

    bolsasCal=(largo*ancho)*cal
    bolsasCemento=(largo*ancho)*cemento;

    alert("Se necesitan "+bolsasCemento +" bolsas cemento y " + bolsasCal+" bolsas cal ");
}