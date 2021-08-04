/*Autor Tibaldi Cristian
Ejercicio: 3 parcial 2020

Enunciado:
Bienvenidos.
En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros.*/


function mostrar()
{
	var continuar;
	var nombre;
	var edad;
	var sexo;
	var estadoCivil;
	var temperatura;
	var nombreMasTemperatura;
	var mayorViudos;
	var contadorViudos;
	var bandera;
	var contadorSolteros;
	var terceraEdadMayorTemperatura;
	var acumuladorEdadSoltero;
	var masTemperatura;

	continuar="si";
	bandera=0;
	contadorViudos=0;
	contadorSolteros=0;
	mayorViudos=0;
	terceraEdadMayorTemperatura=0;
	acumuladorEdadSoltero=0;
	
	
	while(continuar=="si")
	{

		nombre=prompt("Ingrese su nombre");
		edad=prompt("Ingrese su edad: ");
		edad=parseInt(edad);
		
		while(edad<0 || edad >100)
		{
			edad=prompt("ERROR, Ingrese una edad valida: ");
			edad=parseInt(edad);
		}
	
		sexo=prompt("Ingrese su sexo f (femenino) o m (masculino):");
		while(sexo!="f" && sexo!="m")
		{
			sexo=prompt("ERROR, Ingrese f (femenino) o m (masculino):");
		}
	
		estadoCivil=prompt("Ingrese su estado civil: s (soltero) c (casado) v (viudo)");
		while(estadoCivil!="s" && estadoCivil!="c" && estadoCivil!="v")
		{
			estadoCivil=prompt("ERROR, Ingrese su estado civil: s (soltero) c (casado) v (viudo)");
		}
	
		temperatura=prompt("Ingrese su temperatura");
		temperatura=parseInt(temperatura);
		while(temperatura<34 || temperatura>43)
		{
			temperatura=prompt("ERROR, Ingrese una temperatura valida");
			temperatura=parseInt(temperatura);
		}
	
		//FIN DE LOS BUCLES
	
		if(bandera==0) 
		{
			nombreMasTemperatura=nombre;
			masTemperatura=temperatura;
			bandera=1
		}
		else
		{
			if(masTemperatura<temperatura) //(A) informa el nombre con mayor temperatura
			{
				nombreMasTemperatura=nombre;
				masTemperatura=temperatura;
			}
		}
		if(edad>18)	//(B) Mayores de edad viudos
		{
			if(estadoCivil=="v")
			{
				mayorViudos++;
			}
		}

		if(sexo=="m")	//(C) Cantidad de hombres solteros o viudos.
		{
			switch(estadoCivil)
			{
				case "s": 
					{
						contadorSolteros++;
						acumuladorEdadSoltero=acumuladorEdadSoltero+edad;
						
						break;
					}
				case "v":
					{
						contadorViudos++;
						break;
					}
			}
		}

		if (edad>59 && temperatura>38) //(D) personas de la tercera edad( mas de 60 años) mas de 38 de temperatura.
		{
			terceraEdadMayorTemperatura++;
		}

		continuar=prompt("Ingrese si para continuar");
	}	

	promedio=acumuladorEdadSoltero/contadorSolteros;//(E) promedio de edad entre los hombres solteros.

	//MUESTRAS EN PANTALLA
	alert("El nombre de la persona con mas temperatura: "+nombreMasTemperatura);
	alert("Cantidad de mayores viudos: "+mayorViudos);
	alert("Cantidad de hombres que hay solteros: "+contadorSolteros+" viudos: "+contadorViudos);
	alert("Cantidad de personas de la tercera edad( mas de 60 años) que tienen mas de 38 de temperatura: "+terceraEdadMayorTemperatura);
	alert=("El promedio de edad entre los hombres soltero es: "+promedio);
}	
