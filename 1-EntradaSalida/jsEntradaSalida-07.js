/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var num1;
	var num2;
	var resultado;
	
	num1=parseInt(document.getElementById('txtIdNumeroUno').value);

	num2=parseInt(document.getElementById('txtIdNumeroDos').value);
	
	resultado=num1+num2;
	alert("el resultado de la suma es "+ resultado);

}

function restar()
{
	var num1;
	var num2;
	var resultado;
	
	num1=parseInt(document.getElementById('txtIdNumeroUno').value);

	num2=parseInt(document.getElementById('txtIdNumeroDos').value);
	
	resultado=num1-num2;
	alert("el resultado de la resta es "+ resultado);
}

function multiplicar()
{ 
	var num1;
	var num2;
	var resultado;
	
	num1=parseInt(document.getElementById('txtIdNumeroUno').value);

	num2=parseInt(document.getElementById('txtIdNumeroDos').value);
	
	resultado=num1*num2;
	alert("el resultado de la multiplicación es "+ resultado);
}

function dividir()
{
	var num1;
	var num2;
	var resultado;
	
	num1=parseInt(document.getElementById('txtIdNumeroUno').value);

	num2=parseInt(document.getElementById('txtIdNumeroDos').value);
	
	resultado=num1/num2;
	
	alert("el resultado de la division es "+ resultado);
}

