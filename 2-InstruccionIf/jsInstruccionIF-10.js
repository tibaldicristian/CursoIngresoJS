/*Autor: Tibaldi Cristian
Ejericio: 10 IF
Comision: J

Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4
*/

function mostrar()
{
	var nota;
	var max;
	var min;

	max=10;
	min=1

	nota=Math.round(Math.random() * (max-min) + min);

	if (nota>8)
	{
		alert("Tu nota fue un: "+ nota+" y es un EXCELENTE");
	}
	else
	{
		if(nota>3)
		{
			alert("Tu nota fue un: "+ nota+" y es un APROBADO");
		}
		else
		{
			alert("Tu nota fue un: "+ nota+" Vamos, la proxima se puede");
		}
	}
}