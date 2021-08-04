/*autor Cristian Tibaldi
Ejercicio: Parcial 2019 punto 7
*/


function mostrar()
{
    var altura;
    var vueltas;
    var alturaMaxima;
    var alturaMinima;
    var promedio;
    var acumuladorAltura;
    var mujeresAltas
    var sexo;
    var sexoMinimo;

    vueltas=0;
    alturaMaxima=0;
    alturaMinima=0;
    acumuladorAltura=0;
    mujeresAltas=0;


    while (vueltas<5)
    {
        altura=prompt("Ingrese su altura en centimetros:");
        altura=parseInt(altura);

        while (altura<0 && altura>250)
        {
            alert("La altura ingresada no es valida. Vuelva a ingresar");
            altura=prompt("Ingrese su altura en centimetros:");
            altura=parseInt(altura);
        }

        sexo=prompt("Ingrese su sexo: f (femenino) m (masculino)");

        while (sexo!="f" && sexo!="m")
        {
            alert("El sexo ingresado no es valido. Vuelva a ingresar:");
            sexo=prompt("Ingrese su sexo: f (femenino) m (masculino)");
        }
        
        if (vueltas==0)
        {
            alturaMaxima=altura;
            alturaMinima=altura;
            sexoMinimo=sexo;
        }
        
        if(altura>alturaMaxima)
        {
            alturaMaxima=altura;
        }
        else
        {
            if (altura<alturaMinima)
            {
                alturaMinima=altura;
            }
        }

        acumuladorAltura=acumuladorAltura+altura;
        
        if (sexo=="f" && altura>190)
        {
            mujeresAltas++
        }

        if (alturaMinima<altura)
        {
            sexoMinimo=sexo;
        }
        vueltas++;
    }
    promedio=acumuladorAltura/5;
    alert("El promedio de las alturas es"+promedio);
    alert("La altura mas baja es :"+alturaMinima+" y su sexo es :" +sexoMinimo);
    alert("La cantidad de mujeres que superan los 190 cm son:" +mujeresAltas);
}
