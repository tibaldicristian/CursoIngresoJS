/*
Autor: Tibaldi Cristian
Ejercicio: Parcial 2019 ejercicio 5

Enunciado:
Bienvenidos (SOLO WITCH).
una empresa de viajes le solicita ingresar que continente le gustaria visitar
y la cantidad de días , la oferta dice que por día se cobra $100 , que se puede pagar de todas las maneras
Si es América tiene un 50% de descuento y si ademas paga por débito se le agrega un 10% mas de descuento
Si es África tiene un 60% de descuento y si además paga por mercadoPago o efectivo se le agrega un 15% mas de descuento
Si es Europa tiene un 20% de descuento y si ademas paga por débito se le agrega un 15% , por mercadoPago un 10% y cualquier otro medio 5%
cualquier otro continente tiene un recargo del 20%
*/



function mostrar()
{
    var continente;
    var medioPago;
    var dias;
    var subTotal;
    var precioFinal;
    var descuento;
    var recargo;

    recargo=0;
    descuento=0;
    
    continente=document.getElementById('Marca').value;
    dias=prompt("Ingrese el el número de días que utilizará el servicio:");
    subTotal=dias*100;
    
    medioPago=prompt("Escriba el medio de pago: 1) Debito, 2) MercadoPago 3)Efectivo 4(Otro");
    medioPago=parseInt(medioPago);

    switch(continente)
    {
        case "América":
            {
                descuento=-50;
                switch (medioPago)
                {
                    
                    case 1:
                        {
                            descuento=descuento-10;
                            break;
                        }
                    default:    
                        {
                            break;
                        }
                }
            }
        break;
        case "África":
            {
                descuento=-60;
                switch (medioPago)
                {
                    case 2:
                    case 3:    
                        {
                            descuento=descuento-15;
                            break;
                        }
                    
                    default:
                        {
                            break;
                        }
                }        
            } 
        break;
        case "Europa":
            {   
                descuento=-20;
                switch (medioPago)
                {
                    case 1:
                        {
                            descuento=descuento-15;
                            break;
                        }
                    case 2:
                        {
                            descuento=descuento-10;
                            break;
                        }
                    default:
                        {
                            descuento=descuento-5;
                            break;
                        }        
                }
            }
        break;
        default:
        {
            recargo=20;
            switch (medioPago)
                {
                    
                    default:
                        {
                            recargo=recargo+0;
                            break;
                        }
                }
        }
    }
    porcentaje=subTotal*(descuento+recargo)/100;
    precioFinal=subTotal+porcentaje;
    alert("Usted va a pagar: "+precioFinal);
}
