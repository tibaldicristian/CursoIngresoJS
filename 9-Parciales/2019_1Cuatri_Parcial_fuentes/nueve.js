/*
Enunciado:
Bienvenidos.
Realizar el algoritmo que permita ingresar el nombre de un país, cantidad de habitantes en millones entre 1 y 7000 (validar)
la temperaruta mínima que se registra en su territorio(entre -50 y 50) hasta que el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantidad de temperaturas pares.
b) El nombre del pais con menos habitantes
c) la cantidad de paises que superan los 40 grados.
d) el promedio de habitantes entre los paises ingresados
f) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura.

Testeo con los siguientes valores
(pais=argentina;habitantes = 50; t =-300(mal) ,-15(bien) )
(pais=tunes;habitantes = 10; t =1 )
(pais=islandia;habitantes = -150(mal), 15(bien); t =-13 )
(pais=china;habitantes = 2000; t =-12 )
*/

function mostrar()
{
    var pais;
    var temperatura;
    var temperaturaMinima;
    var paisMenosTemperatua;
    var nombreMenosHabitantes;
    var promedioDeHabitantes;
    var mensaje;
    var bandera;
    var modulo;
    var contadorTemperatura;
    var nombreMenosTemperatura;

    paisMenosTemperatua=0;
    nombreMenosTemperatura;
    contadorTemperatura=0;
    cantidadDePaises=0;
    cantidadHabitantes=0;
    temperaturaPares=0;
    temperaturaMinima=0;
    mensaje="si";
    bandera=0;

    while(mensaje=="si")
    {
        pais=prompt("Ingrese el nombre del Pais");

        cantidadHabitantes=prompt("Ingrese la cantidad de habitantes: ");
        cantidadHabitantes=parseInt(cantidadHabitantes);

        while (cantidadHabitantes<1000000 || cantidadHabitantes>7000000000000)
        {
            cantidadHabitantes=prompt("Ingrese un valor VALIDO de habitantes:");
        }

        temperatura=prompt("Ingrese la temperatura que registra en su territorio")
        temperatura=parseInt(temperatura);
        
        while( temperatura<-50 || temperatura>50)
        {
            temperatura=prompt("Ingrese una temperatura VALIDO para su territorio");
        }
        
        if (bandera==0)
        {
            nombreMenosHabitantes=pais;
            menorHabitantes=cantidadHabitantes;
            temperaturaMinima=temperatura;
            bandera=1;
        }
        else
        {
            if (menorHabitantes>cantidadHabitantes)
            {
                menorHabitantes=cantidadHabitantes;//esto es pais menor habitantes
                nombreMenosHabitantes=pais;//esto es el nombre
            }
            if(temperaturaMinima>temperatura)
            {
                temperaturaMinima=temperatura;//esta es la temperatura
                paisMenosTemperatua=pais;//este es el nombre del pais
            }
        }

        modulo=temperatura % 2;
        if (modulo==0)
        {
            temperaturaPares++
        }
        if (temperatura>40)
        {
            contadorTemperatura++
        }
        cantidadDePaises++
        
        mensaje=prompt("Ingrese si para continuar ingresando datos");
    }

    promedioDeHabitantes=cantidadHabitantes/cantidadDePaises;
    document.write("La cantidad de temperatura pares es: "+temperaturaPares+"<br>");
    document.write("El pais con menos habitantes es: "+nombreMenosHabitantes+" con "+menorHabitantes+"<br>");
    document.write("La cantidad de paises que supera los 40° son: "+contadorTemperatura+"<br>");
    document.write("El promedio de habitantes es: "+promedioDeHabitantes+"<br>");
    document.write("La temperatura minima ingresada es: "+temperaturaMinima+" y la registro: "+ paisMenosTemperatua+"<br>");
}
