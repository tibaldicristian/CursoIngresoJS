/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
/*function mostrarAumento()
{
	var sueldo;
	var aumento;
	var resultado;
	

	sueldo=parseInt(document.getElementById('txtIdSueldo').value);
	
	aumento=sueldo*0.10
	resultado=sueldo+aumento

	document.getElementById('txtIdResultado').value=resultado;
}

*/
/*Debemos lograr tomar el importe por ID ,
pedirle mediante un prompt que el usuario ingrese el porcentaje de 
cuanto le gutaria que le aumenten el sueldo. Luego
mostrar el importe con un aumento
en el cuadro de texto "RESULTADO".*/

function mostrarAumento()
{
	var sueldo;
	var aumento;
	var resultado;
	var porcentaje;
	
	sueldo=parseInt(document.getElementById('txtIdSueldo').value);
	porcentaje=prompt("Ingrese el porcentaje a aumentar el sueldo");
	
	porcentaje=porcentaje/100;
	aumento=sueldo*porcentaje
	resultado=sueldo+aumento
	document.getElementById('txtIdResultado').value=resultado;
}