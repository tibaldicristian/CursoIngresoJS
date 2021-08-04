/*4.	
Autor: Tibaldi Cristian
Ejercicio: TP4  //switch-IF

Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 
 */



/*
 //switch-IF  //ESTA BIEN


function CalcularPrecio () 
{
    var cantidadLamparas;
    var precioLampara;
    var marca;
    var descuento;
    var subTotal;
    var iibb;
    var total;
    var porcentaje;

    porcentaje=0;

    precioLampara=35;

    cantidadLamparas=document.getElementById('txtIdCantidad').value;
    cantidadLamparas=parseInt(cantidadLamparas);

    marca=document.getElementById('Marca').value;

    

    switch (cantidadLamparas)
    {
        case 5:
            {
                if (marca=="ArgentinaLuz")
                {
                    porcentaje=40;
                }
                else
                {
                    porcentaje=30;
                }
            }
        break;
        case 4:
            {
                if (marca=="ArgentinaLuz")
                {
                    porcentaje=25;
                }
                else
                {
                    if (marca=="FelipeLamparas")
                    {
                        porcentaje=25;
                    }
                    else
                    {
                        porcentaje=20;
                    }
                }
            }
        break;
        case 3:
            {
                if (marca=="ArgentinaLuz")
                {
                    porcentaje=15;
                }
                else
                {
                    if(marca=="FelipeLamparas")
                    {
                        porcentaje=10;
                    }
                    else
                    {
                        porcentaje=5;
                    }
                } 
            }
        break;
        default:
        {
            if (cantidadLamparas>5)
            {
                porcentaje=50;
            }
            else
            {
                porcentaje=0;
            } 
        }
    }
    subTotal=precioLampara*cantidadLamparas;
    descuento=(subTotal*porcentaje)/100;
    total=subTotal-descuento;
    
    if (total>120)
    {
        iibb=total*0.10;
        total=total+iibb;
        mensaje="Usted pago iibb. "+iibb+"$ el impuesto que se pagó";
        alert(mensaje);
    }
    document.getElementById('txtIdprecioDescuento').value=total;
}


*/


/*
//IF-Switch ESTA BIEN!

function CalcularPrecio () 
{
    var cantidadLamparas;
    var precioLampara;
    var descuento;
    var marca;
    var subTotal;
    var iibb;
    var total;
    var porcentaje;

    precioLampara=35;

    porcentaje=0;

    cantidadLamparas=document.getElementById('txtIdCantidad').value;
    cantidadLamparas=parseInt(cantidadLamparas);

    marca=document.getElementById('Marca').value;

    if (cantidadLamparas>5)
    {
        porcentaje=50;
    }
    else
    {   
        if(cantidadLamparas>4)
        {
            switch (marca)
            {
                case "ArgentinaLuz":
                    {
                        porcentaje=40;
                    }
                break;
                case "FelipeLamparas":    
                case "JeLuz":
                case "HazIluminacion":
                case "Osram":
                    {
                        porcentaje=30;
                    }
                break;
            }
        }
        else
        {
            if (cantidadLamparas>3)
            {
                switch (marca)
                {
                    case "ArgentinaLuz":
                    case "FelipeLamparas":
                        {
                            porcentaje=25;
                        }
                    break;
                    case "JeLuz":
                    case "HazIluminacion":
                    case "Osram":
                        {
                            porcentaje=20;
                        }
                    break;
                }        
            }
            else
            {
                if (cantidadLamparas>2)
                {
                    switch (marca)
                    {
                        case "ArgentinaLuz":
                            {
                                porcentaje=15;
                            }
                        break;
                        case "FelipeLamparas":
                            {
                                porcentaje=10;
                            }
                        break;
                        case "JeLuz":
                        case "HazIluminacion":
                        case "Osram":
                            {
                                porcentaje=5;
                            }
                        break;
                    }
                }
                else
                {
                    porcentaje=0;
                }
            }
        }
    }

    subTotal=precioLampara*cantidadLamparas;
    descuento=(subTotal*porcentaje)/100;
    total=subTotal-descuento;
    
    if (total>120)
    {
        iibb=total*0.10;
        total=total+iibb;
        mensaje="Usted pago iibb. "+iibb+"$ el impuesto que se pagó";
        alert(mensaje);
    }
    document.getElementById('txtIdprecioDescuento').value=total;
}

*/


/*

//IF-IF  ESTA BIEN

function CalcularPrecio () 
{   
    var cantidadLamparas;
    var precioLampara;
    var descuento;
    var marca;
    var subTotal;
    var iibb;
    var total;
    var porcentaje;

    precioLampara=35;

    porcentaje=0;

    cantidadLamparas=document.getElementById('txtIdCantidad').value;
    cantidadLamparas=parseInt(cantidadLamparas);

    marca=document.getElementById('Marca').value;

    if (cantidadLamparas>5)
    {
        porcentaje=50;
    }
    else
    {
        if(cantidadLamparas>4)
        {
            if (marca=="ArgentinaLuz")
            {
                porcentaje=40;
            }
            else
            {
                porcentaje=30;
            }
        }
        else
        {
            if(cantidadLamparas>3)
            {
                if(marca=="ArgentinaLuz")
                {
                    porcentaje=25;
                }
                else 
                {
                    if(marca=="FelipeLamparas")
                    {
                        porcentaje=25;
                    }
                    else
                    {
                        porcentaje=20;
                    }

                }
            }
            else
            {
                if(cantidadLamparas>2)
                {
                    if(marca=="ArgentinaLuz")
                    {
                        porcentaje=15;
                    }
                    else
                    {
                        if(marca=="FelipeLamparas")
                        {
                            porcentaje=10;
                        }
                        else
                        {
                            porcentaje=5;
                        }
                    }
                }
                else
                {
                    porcentaje=0;
                }
            }
        }
    }
    
    subTotal=precioLampara*cantidadLamparas;
    descuento=(subTotal*porcentaje)/100;
    total=subTotal-descuento;
    
    if (total>120)
    {
        iibb=total*0.10;
        total=total+iibb;
        mensaje="Usted pago iibb. "+iibb+"$ el impuesto que se pagó";
        alert(mensaje);
    }
    document.getElementById('txtIdprecioDescuento').value=total;
}

*/


//SWITCH-SWITCH

function CalcularPrecio () 
{   
    var cantidadLamparas;
    var precioLampara;
    var descuento;
    var marca;
    var subTotal;
    var iibb;
    var total;
    var porcentaje;

    precioLampara=35;

    porcentaje=0;

    cantidadLamparas=document.getElementById('txtIdCantidad').value;
    cantidadLamparas=parseInt(cantidadLamparas);

    marca=document.getElementById('Marca').value;
    
    precioLampara=35;

    switch (cantidadLamparas)
    {
        case 5:
            {
                switch (marca)
                {
                    case "ArgentinaLuz":
                    {
                        descuento=40;
                        break;
                    }
                    case "FelipeLamparas":
                    case "JeLuz":
                    case "HazIluminacion":
                    case "Osram":
                    {
                        descuento=30;
                        break;
                    }
                }
            }
        break;
        case 4:
            {
                switch (marca)
                {
                    case "ArgentinaLuz":
                    case "FelipeLamparas":
                    {
                        descuento=25;
                        break;
                    }
                    case "JeLuz":
                    case "HazIluminacion":
                    case "Osram":
                    {
                        descuento=20;
                        break;
                    }    
                }
            }
        break;
        case 3:
            {
                switch (marca)
                {
                    case "ArgentinaLuz":
                    {
                        descuento=15;
                        break;
                    }
                    case "FelipeLamparas":
                    {
                        descuento=10;
                        break;
                    }
                    case "JeLuz":
                    case "HazIluminacion":
                    case "Osram":
                    {
                        descuento=5;
                        break;
                    }
                }            
            }
        break;
        case 2:
        case 1:
            {
                descuento=0;
            }
        break;
        default:
        {
            descuento=50;
            break;
        }
    }
    
    subTotal=precioLampara*cantidadLamparas;
    descuento=(subTotal*porcentaje)/100;
    total=subTotal-descuento;
    
    if (total>120)
    {
        iibb=total*0.10;
        total=total+iibb;
        mensaje="Usted pago iibb. "+iibb+"$ el impuesto que se pagó";
        alert(mensaje);
    }
    document.getElementById('txtIdprecioDescuento').value=total;
}