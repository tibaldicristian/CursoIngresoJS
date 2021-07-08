/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"
*/

function mostrarAumento()
{
	var importe;
	var descuento;
	var resultado;

	importe=parseInt(document.getElementById('txtIdImporte').value);
	
	descuento=importe*0.25;

	resultado=importe-descuento;

	document.getElementById('txtIdResultado').value=resultado;

}


/*Debemos lograr tomar el importe por ID ,
pedirle mediante un prompt que el usuario ingrese el porcentaje de 
descuento. Luego
mostrar el importe con el descuento incluido
en el cuadro de texto "RESULTADO".*/

function mostrarAumento()
{
	var importe;
	var descuento;
	var resultado;
	var porcentaje;
	
	importe=parseInt(document.getElementById('txtIdImporte').value);
	porcentaje=prompt("Ingrese el valor del porcentaje que quiere realizar el descueto");
	
	porcentaje=porcentaje/100;
	descuento=importe*porcentaje
	resultado=importe-descuento
	document.getElementById('txtIdResultado').value=resultado;
}