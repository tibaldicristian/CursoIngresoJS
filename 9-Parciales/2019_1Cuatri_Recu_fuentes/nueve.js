function mostrar()
{
    var nombre;
    var edad;
    var sexo;
    var notaFinal;
    var acumuladorMenor;
    var acumuladorAdolescente;
    var acumuladorMayor;
    var contadorMenor;
    var contadorAdolescente;
    var contadorMayor;
    var masculinoAprobados;
    var femeninoAprobados;
    var acumuladorNotasMasculino;
    var acumuladorNotasFemenino;
    var promedioMenor;
    var promedioAdolescentes;
    var promedioMayores;
    var promedioMasculino;
    var promedioFemenino;
    var bandera1;
    var bandera2;
    var bandera3;
    var bandera4;
    var bandera5;
    var continuar;

    continuar="si";
    bandera1=0;
    bandera2=0;
    bandera3=0;
    bandera4=0;
    bandera5=0;
    edad=0;
    notaFinal=0;
    contadorMenor=0;
    contadorAdolescente=0;
    contadorMayor=0;
    acumuladorMenor=0;
    acumuladorMayor=0;
    acumuladorAdolescente=0;
    acumuladorNotasMasculino=0;
    acumuladorNotasFemenino=0;
    masculinoAprobados=0;
    femeninoAprobados=0;
    promedioMenor=0;
    promedioAdolescentes=0;
    promedioMayores=0;
    promedioMasculino=0;
    

    while(continuar=="si")
    {
        nombre=prompt("Ingrese su nombre: ");
        edad=prompt("Ingrese su edad: ");
        edad=parseInt(edad);
    
        while(edad<6 || edad>90)
        {
            edad=prompt("ERROR, ingrese una edad VALIDA: ");
            edad=parseInt(edad);
        }
    
        sexo=prompt("Ingrese su sexo: ");
        while (sexo!="f" && sexo!="m")
        {
            sexo=prompt("Ingrese un sexo VALIDO: ");
        }
    
        notaFinal=prompt("Ingrese su nota");
        notaFinal=parseInt(notaFinal);
    
        while (notaFinal<0 || notaFinal>10)
        {
            notaFinal=prompt("Ingrese una nota VALIDA: ");
            notaFinal=parseInt(notaFinal);
        }

        if (sexo=="m")
        {
            bandera4=1;

            if (notaFinal>6)
            {
                masculinoAprobados++;
                acumuladorNotasMasculino+acumuladorNotasMasculino+notaFinal;
            }
            else
            {
                //masculinoAprobados++;
                acumuladorNotasMasculino+acumuladorNotasMasculino+notaFinal;
            }
        }
        else
        {
            bandera5=1;
            femeninoAprobados++;
            acumuladorNotasFemenino=acumuladorNotasFemenino+notaFinal;
        }

        if (edad<13)
        {
            bandera1=1;
            acumuladorMenor=acumuladorMenor+notaFinal;
            contadorMenor++;
        }
        else
        {
            if (edad<18)
            {
                bandera2=1;
                acumuladorAdolescente=acumuladorAdolescente+notaFinal;
                contadorAdolescente++;
            }
            else
            {
                bandera3=1;
                acumuladorMayor=acumuladorMayor+notaFinal;
                contadorMayor++;
            }
        }
        continuar=prompt("¿Desea continuar? Ingrese si o no");
    }

    if (bandera1==1)
    {
        promedioMenor=acumuladorMenor/contadorMenor;
    }
    if (bandera2==1)
    {
        promedioAdolescentes=acumuladorAdolescente/contadorAdolescente;
    }
    if (bandera3==1)
    {
        promedioMayores=acumuladorMayor/contadorMayor;
    }
    if(bandera4==1)
    {
        promedioMasculino=acumuladorNotasMasculino/masculinoAprobados;
    }
    if (bandera5==1)
    {
        promedioFemenino=acumuladorNotasFemenino/femeninoAprobados;
    }
    document.write("La cantidad de varones aprobados es :"+masculinoAprobados+"<br>");
    document.write("El promedio de los menores es :"+promedioMenor+"<br>");
    document.write("El promedio de los adolescentes es :"+promedioAdolescentes+"<br>");
    document.write("El promedio de los mayores es :"+promedioMayores+"<br>");
    document.write("El promedio de notas femenino es :"+promedioFemenino+"<br>");
    document.write("El promedio de notas masculino es :"+promedioMasculino+"<br>");
}
