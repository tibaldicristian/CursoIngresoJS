/*
Autor: Tibaldi Cristian
Ejericio: 1 parcial 2020
Enunciado:

Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total*/

function mostrar()
{
	var producto;
	var precio;
	var cantidad;
	var marca;
	var fabricante;
	var alcoholBarato;
	var alcoholCantidad;
	var alcoholFabricante;
	var bandera;
	var bandera1;
	var masProducto;
	var masContador;
	var masPromedio;
	var masUnidades;
	var acumuladorJabon;
	
	vueltas=0;
	bandera1=0;
	bandera=0;
	acumuladorJabon=0;
	masContador=0;
	masPromedio=0;
	
	while(vueltas<4)
		{
			producto=prompt("Ingrese el producto: barbijo jabón o alcohol");
			while(producto!="barbijo" && producto!="jabon" && producto!="alcohol")
			{
				producto=prompt("ERROR Ingrese un producto valido: barbijo jabón o alcohol");
			}
			marca=prompt("Ingrese la marca:");

			fabricante=prompt("Ingrese el fabricante:");

			precio=prompt("Ingrese el precio:");
			precio=parseInt(precio);
			while(precio<100 || precio>300)
			{
				precio=prompt("ERROR Ingrese un precio valido: ");
				precio=parseInt(precio);
			}

			cantidad=prompt("Ingrese la cantidad: ")
			cantidad=parseInt(cantidad);
			while(cantidad<1 || cantidad>1000)
			{
				cantidad=prompt("ERROR la cantidad no puede ser 0 o mayor a 1000, ingrese nuevavemente: ");
				cantidad=parseInt(cantidad);
			}
			
			//FIN DE LAS COMPROBACIONES DEL WHILE

			if(bandera==0) //A) Ingreso primera vez del alchol más barato, cantidad, unidad y fabricante.
			{
				if (producto=="alcohol")
				{
					alcoholFabricante=fabricante;
					alcoholBarato=precio;
					alcoholCantidad=cantidad;
					bandera=1;
				}
			}
			else
			{
				if(producto=="alcohol")//A) Comparacion para obtener alchol más barato, cantidad, unidad y fabricante.
				{
					if(alcoholBarato>precio)
					{
						alcoholFabricante=fabricante;
						alcoholBarato=precio;
						alcoholCantidad=cantidad;
					}
				}
			}

			if(bandera1==0) //B) Ingreso primera vez del tipo con mas unidades el promedio por compra 
			{
				masUnidades=cantidad;
				masProducto=producto;
				bandera1=1;
				
			}
			else
			{
				if(masUnidades<cantidad) //Comparacion para obtener tipo con mas unidades
				{
					masUnidades=cantidad;
					masProducto=producto;
					masContador++;
				}
			}
			if (producto=="jabon") //C) Obtencion total de unidades de jabon.
			{
				acumuladorJabon=acumuladorJabon+cantidad;
			}
			vueltas++;
		}

		masPromedio=masUnidades/masContador; //B) Obtencion del promedio del tipo con mas unidades por compra 

	alert("El más barato del alchol es: "+alcoholBarato+ "$. Unidades: "+alcoholCantidad+ " fabricante "+ alcoholFabricante);
	alert("El tipo con más unidades es: "+masProducto+ " el promedio de compra es: "+masPromedio);
	alert("Unidades de jabon: "+acumuladorJabon);
}
