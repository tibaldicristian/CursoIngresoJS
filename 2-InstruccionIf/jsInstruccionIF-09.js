/*Autor: Tibaldi Cristian
Ejericio: 9 IF
Comision: J

Al presionar el Botón, mostrar un número Random del 1 al 10 inclusive*/


function mostrar()
{
	var numAleatorio;
	var max;
	var min;

	max=10;
	min=1;

	numAleatorio=Math.random()*10 + 1;
	numAleatorio=parseInt(numAleatorio);

	alert("Salió el: "+numAleatorio);

}

/*
para que los valores que coloco sean dinamicos, puedo poner variables con esos valores entres los que yo quiero que de valores aleatorios, en este caso entre 10 y 1.

numeroMaximo=10;

numeroMinino=1;

//Genero el número RANDOM entre 1 y 10

//numero al azar entre 0 y 0.999999999999999

var aleatorio =Math.random();

aleatorio= aleatorio *(numeroMaximo-numeroMinimo+1));

Si no tuviera el +1 generaría números del 0 al 9, pero con el 1 hace que arranque del 1 al 10.

aleatorio = parseInt(aleatorio);


alert(aleatorio );.*/

//aleatorio=Math.round(Math.random()*9+1);