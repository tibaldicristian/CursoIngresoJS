function mostrar()
{
    var bolsas;
    var kilos;
    var contador;
    var sabor;
    var promedio;
    var masLiviano;
    var masSabor;
    var acumuladorCarne;
    var contadorCarne;
    var acumuladorKilos;
    var promedioCarne;

    bolsas=0;
    kilos=0;
    contador=0;
    acumuladorKilos=0;
    contadorCarne=0;
    acumuladorCarne=0;

    while (bolsas<2)
    {
        kilos=prompt("ingrese la canitdad de kilos");
        kilos=parseInt(kilos);

        while (kilos <0 || kilos >500)
        {
            kilos=prompt("ERROR, ingrese una cantidad VALIDA de kilos");
            kilos=parseInt(kilos);
        }
        
        sabor=prompt("Ingrese el sabor: carne, pollo o vegetales ");

        while(sabor!="carne" && sabor!="vegetales" && sabor!="pollo")
        {
            sabor=prompt("ERROR, Ingrese un sabor correcto: carne, pollo o vegetales");
        }    
        
        if (sabor=="carne")
        {
            contadorCarne++;
            acumuladorCarne=acumuladorCarne+kilos;
        }
        
        if (bolsas==0)
        {
            masLiviano=kilos;
            masSabor=sabor;
        }
        else
        {
            if(masLiviano>kilos)
            {
                masLiviano=kilos;
                masSabor=sabor;
            }
        }
        acumuladorKilos=acumuladorKilos+kilos;
        contador++
        bolsas++;
    }
    promedio=acumuladorKilos/contador;
    promedioCarne=acumuladorCarne/contadorCarne;
    alert("El promedio de los kilos totales es: "+promedio);
    alert("El más liviano es :"+masLiviano+" y su sabor es "+masSabor);
    alert("La cantidad de sabor carne fue " +contadorCarne+" y su promedio en kilos fue "+promedioCarne);
}
