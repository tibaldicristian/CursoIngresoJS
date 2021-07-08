/*3. Autor: Tibaldi Cristian
Ejercicio: TP3
Div: J	

Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var fahrenheit;
    var celcius;
    var temperatura;
    
    fahrenheit=32;
    celcius=0;
    
    temperatura=document.getElementById('txtIdTemperatura').value;

    celcius=(temperatura-fahrenheit)*0.5;
    
    alert("La temperatura en Centígrados es :"+celcius);

}

function CentigradosFahrenheit () 
{
	var fahrenheit;
    var celcius;
    var temperatura;
    
    fahrenheit=32;
    celcius=0;
    
    temperatura=document.getElementById('txtIdTemperatura').value;

    fahrenheit=(temperatura*0.5)+fahrenheit;
    
    alert("La temperatura en Fahrenheit es :"+fahrenheit);
}
